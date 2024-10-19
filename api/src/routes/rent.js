import { Router } from "express";

const rent = Router()

//Get all rent applications
rent.get('/rents',verifyUser)

//Get a particular rent application
rent.get('/rents/:id', verifyUser)

//create an new rent application
rent.post('/rents', verifyUser)

//update a rent application
rent.put('/rents/:id',verifyUser)

//delete a rent application
rent.delete('/rents/:id', verifyUser)


export default rent;