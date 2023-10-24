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

const Book1 = new Book(
    "The book",
    "Unknown author",
    100,
    "not read"
);

addBookToLibrary(Book1);
