import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();



//route to create a new user
router.get('',userAuth, noteController.getAllNotes);

//route to get a single user by their user id
router.get('/:_id', noteController.getNote);

router.post('',noteController.newNote)


// //route to update a single user by their user id
router.put('/:_id', noteController.updateNote);

// //route to delete a single user by their user id
router.delete('/:_id', noteController.deleteNote);

export default router;