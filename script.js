let bookArray = [];
const mainContent = document.querySelector(".main-content");
const addBookForm = document.querySelector(".add-book-form");

//book object constructor
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

//add change read status method to book prototype (no need for every object to duplicte it)
Book.prototype.changeReadStatus = function () {
    if (this.status === "read") {
        this.status = "unread"
    } else if (this.status === "unread") {
        this.status = "read"
    };
}

//toggle form css to display or hide
function displayForm() {
    document.querySelector(".add-book-form").classList.toggle("form-display");
    document.querySelector(".fa-circle-plus").classList.toggle("fa-circle-rotate");
    document.querySelector("#addBook-h1").classList.toggle("hide");
}

//add book with form input
function addBook() {
    event.preventDefault();
    const newBookTitle = document.querySelector("#book-title");
    const authorName = document.querySelector("#book-author");
    const noOfpages = document.querySelector("#book-pages");
    const statusCheck = document.querySelector("input[name=status]:checked");
    let newBook = new Book(newBookTitle.value, authorName.value, noOfpages.value, statusCheck.value);
    newBook.id = Math.random(); //not a serious solution - just for demo purposes
    bookArray.push(newBook);
    postBook(newBook);
    newBookTitle.value = "";
    authorName.value = "";
    noOfpages.value = "";
    refreshDomBookList();
}

//post book to dom (display it on page)
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

    const bookItemsBox = document.createElement("div");
    bookItemsBox.classList.add("book-items");
    const statusBox = document.createElement("div");
    statusBox.classList.add("status-box");
    const statusP = document.createElement("p");
    statusP.classList.add("status-p");
    statusP.textContent = obj.status;
    bookItemsBox.appendChild(statusP);
    bookItemsBox.appendChild(statusBox);

    const statusBtn = document.createElement("div");
    statusBtn.classList.add("status-btn");
    statusBtn.innerHTML = '<i class="fa-solid fa-book-open"></i>';
    bookItemsBox.appendChild(statusBtn);

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    bookItemsBox.appendChild(deleteBtn);

    bookDiv.appendChild(bookItemsBox);
    bookDiv.dataset.id = obj.id;
    mainContent.appendChild(bookDiv);
    
    setListeners();
}

//prevent duplication of book list on DOM
const refreshDomBookList = function () {
    const allBooks = document.querySelectorAll(".book");
    for (const el of allBooks) {
        el.remove();
    }
    bookArray.forEach(postBook);
    //reactivate event listeners
    setListeners();
};

//delete and change read status functions
const deleteBook = function () {
    const bookId = this.parentElement.parentElement.dataset.id;
    bookArray.splice(bookArray.findIndex(obj => obj.id == bookId), 1);
    refreshDomBookList();
}

const changeStatus = function () {
    const thisId = this.parentElement.parentElement.dataset.id;
    const obj = bookArray[bookArray.findIndex(obj => obj.id == thisId)]
    obj.changeReadStatus();
    refreshDomBookList();
}

//event listeners
addBookForm.addEventListener("submit", addBook);

const addBookBtn = document.querySelector("#add-book");
addBookBtn.addEventListener("click", displayForm);

const setListeners = function () {

    deleteButtons = Array.from(document.querySelectorAll(".delete-btn"));
    deleteButtons.forEach(btn => btn.addEventListener("click", deleteBook));

    statusBtns = Array.from(document.querySelectorAll(".status-btn"));
    statusBtns.forEach(btn => btn.addEventListener("click", changeStatus));
}

// Add dummy book to act as local storage
let LOTR = new Book("The lord of the Rings", "J.R.R. Tolkien", 900, "read");
LOTR.id = Math.random();
bookArray.push(LOTR);
bookArray.forEach(postBook);






