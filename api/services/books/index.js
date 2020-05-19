/* SERVICE BOOKS */
/* Objeto book
[
    {
        idbook: auto,
        nmbook: string,
        aubook: string        
    }
]
*/
const booksArray = [];

const newBook = (book) => {
    booksArray.push(book);
};

const loadBooks = () => {
    return booksArray;
};

const arrayBookLength = () => {
    return booksArray.length + 1;
};

module.exports = {newBook, loadBooks, arrayBookLength};