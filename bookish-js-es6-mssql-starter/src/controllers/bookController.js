
import express from 'express';

class BookController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (request, response) => this.getAllBooks(request, response) );
        this.router.get('/:id', (request, response) => this.getBook(request, response) );
        this.router.post('/', (request, response) => this.postBook(request, response) );
        this.router.delete('/:id', (request, response) => this.deleteBook(request, response) );

        this.mockArray = [{'id' : 1, 'title' : 'Brave New World', 'isbn' : '9780582060166'}, 
        {'id' : 2, 'title' : 'The Myth of Sisyphus', 'isbn' : '9780679733737'},
        {'id' : 3, 'title' : 'Life 3.0','isbn' : '9783548377964'},
        {'id' : 4, 'title' : 'Life 4.0','isbn' : '9783548377965'},
        {'id' : 5, 'title' : 'Life 5.0','isbn' : '9783548377966'},
        {'id' : 6, 'title' : 'Life 6.0','isbn' : '9783548377967'}];

        this.newBook = {
            "id": 7,
            "title": "Pride and Prejudice",
            "isbn": "9783548377989"
        };
    }

    getAllBooks(request, response) {
        console.log( "request for all books" + request.url );
        response.status(200).send(this.mockArray);
        // array filter
    }

    getBook(request, response) {
        const id = request.params.id;
        console.log( "request for book " + id );
        if ( id == 0 ){
            throw ( "bad id");
        }
        response.status(200).send(this.mockArray[id-1]);
    }

    postBook(request, response) {
        console.log( "Posting new book" + request.url );
        this.mockArray.push(this.newBook);
        response.status(200).send(this.mockArray);
    }

    deleteBook(request, response) {
        const id = request.params.id;
        console.log( "Delete book" + id);
        delete this.mockArray[id-1];
        response.status(200).send(this.mockArray);

        // array.map
        // .join
        // .find
        // .reduce
        // . filter
    }
}

export default new BookController().router;
