import { Router } from "express";

const review = Router();


//GET all reviews
review.get('/reviews',)

//GET a review
review.get('/reviews/:id', verifyUser)

//Create a review
review.post('/reviews', verifyUser)

//update a review
review.put('/reviews/:id', verifyUser)

//delete a review
review.delete('/reviews/:id', verifyUser)

export default review;