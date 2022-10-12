
import express from 'express';

class BookController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (request, response) => this.getAllBooks(request, response));
        this.router.get('/:id', (request, response) => this.getBook(request, response));
        this.router.post('/', (request, response) => this.postBook(request, response));
        this.router.delete('/:id', (request, response) => this.deleteBook(request, response));

        this.booksArray = [{ 'id': 1, 'author' : 'Aldous Huxley', 'title': 'Brave New World', 'isbn': '9780582060166' },
        { 'id': 2, 'author' : 'Albert Camus', 'title': 'The Myth of Sisyphus', 'isbn': '9780679733737' },
        { 'id': 3, 'author' : 'Max Tegmark', 'title': 'Life 3.0', 'isbn': '9783548377964' },
        { 'id': 4, 'author' : 'Max Tegmark', 'title': 'Life 4.0', 'isbn': '9783548377965' },
        { 'id': 5, 'author' : 'Max Tegmark', 'title': 'Life 5.0', 'isbn': '9783548377966' },
        { 'id': 6, 'author' : 'Max Tegmark', 'title': 'Life 6.0', 'isbn': '9783548377967' }];

        this.newBook = {
            "id": 7,
            'author' : 'Jane Austen', 
            "title": "Pride and Prejudice",
            "isbn": "9783548377989"
        };
        this.newArray = [];
    }

    getAllBooks(request, response) {
        console.log("request for all books" + request.url);
        /*for (let i = 0; i < this.booksArray.length; i++) {
            if (undefined in this.booksArray[i]) {

            }
            else {
                this.newArray.push(this.booksArray[i]);
            }
        }*/
        response.status(200).send(this.booksArray);
        // array filter
    }

    getBook(request, response) {
        const id = request.params.id;
        console.log("request for book " + id);
        if (id == 0) {
            throw ("bad id");
        }
        response.status(200).send(this.booksArray[id - 1]);
    }

    postBook(request, response) {
        console.log("Posting new book" + request.url);
        this.booksArray.push(this.newBook);
        response.status(200).send(this.booksArray);
    }

    deleteBook(request, response) {
        const id = request.params.id;
        console.log("Delete book" + id);
        delete this.booksArray[id - 1];
        response.status(200).send(this.booksArray);

        // array.map
        // .join
        // .find
        // .reduce
        // . filter
    }
}

export default new BookController().router;
