import { Router } from "express";

const user = Router();

// get method to return user list
user.get('/users',);

//get method to return tenants
user.get('/tenants')

//get method to return owners
user.get('/owners')

// create an instance of a user
user.post('/users')

//update an instance of a user
user.put('/users/:id')

//delete an instance of a user
user.delete('/users/:id')

export default user;