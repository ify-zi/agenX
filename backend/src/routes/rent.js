import { Router } from "express";

const rent = Router()

//Get all rent applications
rent.get('/rents',)

//Get a particular rent application
rent.get('/rents/:id')

//create an new rent application
rent.post('/rents')

//update a rent application
rent.put('/rents/:id',)

//delete a rent application
rent.delete('/rents/:id')