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
        newDiv.textContent = book.info();
        container.appendChild(newDiv);
    }
    
}
const Book1 = new Book(
    "The book",
    "Unknown author",
    100,
    "not read"
);

const Book2 = new Book(
    "Super Book",
    "I Wrote it",
    40,
    "read"
);

addBookToLibrary(Book1);
addBookToLibrary(Book2);
const container = document.querySelector(".container")


