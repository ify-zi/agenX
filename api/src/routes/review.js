import { Router } from "express";

const review = Router();


//GET all reviews
review.get('/reviews',)

//GET a review
review.get('/reviews/:id',)

//Create a review
review.post('/reviews',)

//update a review
review.put('/reviews/:id',)

//delete a review
review.delete('/reviews/:id',)

export default review;