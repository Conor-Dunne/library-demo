let bookArray = [
    {
        title: "Book 1",
        author: "Conor Dunne",
        pages: 150,
        index: 0
    }
]

const mainContent = document.querySelector(".main-content");
const addBookForm = document.querySelector(".add-book-form");




function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


function addBook () {
    event.preventDefault();
    const newBookTitle = document.querySelector("#book-title");
    const authorName = document.querySelector("#book-author");
    const noOfpages = document.querySelector("#book-pages"); 
    let newBook = new Book(newBookTitle.value, authorName.value, noOfpages.value);
    newBook.index = bookArray.length;
    bookArray.push(newBook);
    postBook(newBook);
    newBookTitle.value = "";
    authorName.value = "";
    noOfpages.value = "";
    refreshDomBookList();
    bookArray.forEach(postBook);
    deleteButtons = Array.from(document.querySelectorAll(".delete-btn"));
    deleteButtons.forEach(btn => btn.addEventListener("click", deleteBook));

}

const postBook = function (obj) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    const titleH1 = document.createElement("h1");
    titleH1.textContent = obj.title;
    bookDiv.appendChild(titleH1);
    const authorH2 = document.createElement("h2");
    authorH2.textContent = obj.author;
    bookDiv.appendChild(authorH2);
    const pagesH3 = document.createElement("h3")
    pagesH3.textContent = `No. of pages: ${obj.pages}`;
    bookDiv.appendChild(pagesH3);
    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    bookDiv.appendChild(deleteBtn);
    bookDiv.dataset.index = obj.index;
    mainContent.appendChild(bookDiv);
}

const refreshDomBookList = function() {
    const allBooks = document.querySelectorAll(".book");
    for (const el of allBooks) {
        el.remove();
    }
};

const deleteBook = function () {
    const bookIndex = this.parentElement.dataset.index;
    
    refreshDomBookList();
    bookArray.forEach(postBook);
    deleteButtons = Array.from(document.querySelectorAll(".delete-btn"));
    deleteButtons.forEach(btn => btn.addEventListener("click", deleteBook));

}



bookArray.forEach(postBook);


addBookForm.addEventListener("submit", addBook);


let deleteButtons = Array.from(document.querySelectorAll(".delete-btn"));
deleteButtons.forEach(btn => btn.addEventListener("click", deleteBook));





