const myLibrary = [];

function Book(
    title,
    author, 
    numPages,
    read
) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function() {
        return(`${title} by ${author}, ${numPages} pages, ${read}`);
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayBooks() {
    for (const book of myLibrary)
    {
        const newDiv = document.createElement("div");
        newDiv.classList.add("book-card");
        newDiv.textContent = book.info();
        container.appendChild(newDiv);
    }
    
}

const container = document.querySelector(".container");

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + div>button");
const closeButton = document.querySelector("dialog button");
const newBookButton = document.querySelector(".new-book-btn");



showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});