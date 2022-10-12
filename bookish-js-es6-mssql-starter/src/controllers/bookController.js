
import express from 'express';

class BookController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (request, response) => this.getAllBooks(request, response) );
        this.router.get('/:id', (request, response) => this.getBook(request, response) );
        this.mockArray = [{'id' : 1, 'title' : 'Brave New World', 'isbn' : '9780582060166'}, 
        {'id' : 2, 'title' : 'The Myth of Sisyphus', 'isbn' : '9780679733737'},
        {'id' : 3, 'title' : 'Life 3.0','isbn' : '9783548377964'}];
    }

    getAllBooks(request, response) {
        console.log( "request for all books" + request.url );
        response.status(200).send(this.mockArray);
    }

    getBook(request, response) {
        const id = request.params.id;
        console.log( "request for book " + id );
        if ( id == 0 ){
            throw ( "bad id");
        }
        response.status(200).send(this.mockArray[id-1]);
    }
}

export default new BookController().router;

