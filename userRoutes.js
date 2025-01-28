import express from "express";
import { body } from 'express-validator';
import { registerUser, loginUser, getUsers, getUserById, getAllUsers, updateUserRole, deleteUser } from "../controllers/userController.js";
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post(
  "/register",
  [
    body('name').notEmpty().withMessage('Name is required').trim().escape(),
    body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').trim().escape(),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body('email').isEmail().withMessage('Please provide a valid email').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required').trim().escape(),
  ],
  loginUser
);

router.get('/', protect, admin, getUsers); // Admin-only route
router.get('/:id', protect, getUserById); // Accessible by authenticated users
router.route("/").get(protect, admin, getAllUsers);
router.route("/:id").put(protect, admin, updateUserRole).delete(protect, admin, deleteUser);

export default router;
