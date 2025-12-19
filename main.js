let libDisplay = document.querySelector('.library');
let btn = document.querySelector('.new');

let library = [];

function Book(author, title) {
    this.author = author;
    this.title = title;
}

function displayBooks() {
    libDisplay.innerHTML = ''; 

    library.forEach((book) => {
        let bookEl = document.createElement('div');
        bookEl.textContent = `${book.title} by ${book.author}`;
        libDisplay.appendChild(bookEl);
    });
}

btn.addEventListener('click', () => {
    let author = prompt('Author:');
    let title = prompt('title:');

    if (author && title) {
        let newBook = new Book(author, title);
        library.push(newBook);
        displayBooks();
    }

})

libDisplay.textContent = library;