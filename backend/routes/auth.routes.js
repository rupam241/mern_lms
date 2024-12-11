import express from 'express'
import { signupAuth,signinAuth,googleAuth } from '../controller/auth.controller.js';
const router=express.Router();

router.post('/signup',signupAuth)
router.post('/signin',signinAuth)
router.post('/google',googleAuth)


export default router;