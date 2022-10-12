
import express from 'express';

class UserController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (request, response) => this.getAllUsers(request, response));
        this.router.get('/:id', (request, response) => this.getUser(request, response));
        this.router.post('/', (request, response) => this.postUser(request, response));
        this.router.delete('/:id', (request, response) => this.deleteUser(request, response));

        this.usersArray = [{ 'id': 1, 'name': 'Daniel Garwood', 'library_card': '05820601' },
        { 'id': 2, 'name': 'Joshua Caddy', 'library_card': '06797337' },
        { 'id': 3, 'name': 'Dave Artus', 'library_card': '35483779' },
        { 'id': 4, 'name': 'Aaron Ossei', 'library_card': '35483779' },
        { 'id': 5, 'name': 'Tom Porter', 'library_card': '35483779' },
        { 'id': 6, 'name': 'Fabricio Melo', 'library_card': '35483779' }];

        this.newUser = {
            "id": 7,
            "name": "Adam Bryan",
            "library_card": "35483779"
        };

        this.newArray = [];
    }

    getAllUsers(request, response) {
        console.log("request for all users" + request.url);
        /*for (let i = 0; i < this.usersArray.length; i++) {
            if (undefined in this.usersArray[i]) {

            }
            else {
                this.newArray.push(this.usersArray[i]);
            }
        }*/
        response.status(200).send(this.usersArray);
        // array filter
    }

    getUser(request, response) {
        const id = request.params.id;
        console.log("request for user " + id);
        if (id == 0) {
            throw ("bad id");
        }
        response.status(200).send(this.usersArray[id - 1]);
    }

    postUser(request, response) {
        console.log("Posting new user" + request.url);
        this.usersArray.push(this.newUser);
        response.status(200).send(this.usersArray);
    }

    deleteUser(request, response) {
        const id = request.params.id;
        console.log("Delete user" + id);
        delete this.usersArray[id - 1];
        response.status(200).send(this.usersArray);

        // array.map
        // .join
        // .find
        // .reduce
        // . filter
    }
}

export default new UserController().router;
