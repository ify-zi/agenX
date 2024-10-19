import { Router } from "express";

const house = Router();


// GET instance of all houses
house.get('/houses')

//Get request for a particular house
house.get('/houses/:id')

//Create an instance of a house
house.post('/houses')

//Update an instance of a house
house.put('/houses/:id')

//Delete an instance of a house
house.delete('/house/:id')

export default house;