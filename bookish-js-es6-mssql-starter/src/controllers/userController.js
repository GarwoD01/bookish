
import express from 'express';

class UserController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (request, response) => this.getAllUsers(request, response) );
        this.router.get('/:id', (request, response) => this.getUser(request, response) );
    }

    getAllUsers(request, response) {
        console.log( "request for all users" + request.url );
        response.status(200).send({"message" : "all users"});
    }

    getUser(request, response) {
        const id = request.params.id;
        console.log( "request for user " + id );
        if ( id == 0 ){
            throw ( "bad id");
        }
        const mock = {'id' : id, 'user' : 'user'};
        response.status(200).send(JSON.stringify(mock));
    }
}

export default new UserController().router;

