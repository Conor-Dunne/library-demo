const mainContent = document.querySelector(".main-content");
const addBookForm = document.querySelector(".add-book-form");

let bookArray = [
    {
        title: "Book 1",
        author: "Conor Dunne",
        pages: 150,
    },
    {
        title: "Book 2",
        author: "Conor Dunne",
        pages: 150,
    },
    {
        title: "Book 3",
        author: "Conor Dunne",
        pages: 150,
    },
    {
        title: "Book 4",
        author: "Conor Dunne",
        pages: 150,
    },
    {
        title: "Book 5",
        author: "Conor Dunne",
        pages: 150,
    },
    {
        title: "Book 6",
        author: "Conor Dunne",
        pages: 150,
    },
    {
        title: "Book 7",
        author: "Conor Dunne",
        pages: 150,
    },
    {
        title: "Book 8",
        author: "Conor Dunne",
        pages: 150,
    },
    {
        title: "Book 9",
        author: "Conor Dunne",
        pages: 150,
    }
]

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


function addBook () {
    event.preventDefault();
    const addTitle = document.querySelector("#book-title");
    const newTitle = addTitle.value;
    let narnia = new Book(newTitle, "test", 30);
    bookArray.push(narnia);
    postBook(narnia);
    addTitle.value = "";
    refreshDomBookList();
    bookArray.forEach(postBook);
}

// const newBook = new Book("Bible", "God", 1000);
// bookArray.push(newBook);


const postBook = function (obj) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    const title = document.createElement("h1");
    title.textContent = obj.title;
    bookDiv.appendChild(title);
    const author = document.createElement("h2");
    author.textContent = obj.author;
    bookDiv.appendChild(author);
    mainContent.appendChild(bookDiv);
}

const refreshDomBookList = function() {
    const allBooks = document.querySelectorAll(".book");
    for (const el of allBooks) {
        el.remove();
    }
};

bookArray.forEach(postBook);

addBookForm.addEventListener("submit", addBook);


