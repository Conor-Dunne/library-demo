const mainContent = document.querySelector(".main-content");

let bookArray = [
    {
        title: "Book 1",
        author: "Conor Dunne",
        pages: 150,
        read: false
    },
    {
        title: "Book 2",
        author: "Conor Dunne",
        pages: 150,
        read: true
    }
]



const postBook = function (obj) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    const title = document.createElement("h1");
    title.textContent = obj.title;
    bookDiv.appendChild(title);
    mainContent.appendChild(bookDiv);
}

bookArray.forEach(postBook);


