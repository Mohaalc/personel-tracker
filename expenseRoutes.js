import express from "express";
import {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
  getAllExpenses,
} from "../controllers/expenseController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createExpense).get(protect, getExpenses);
router.route("/all").get(protect, admin, getAllExpenses);
router
  .route("/:id")
  .get(protect, getExpenseById)
  .put(protect, updateExpense)
  .delete(protect, admin, deleteExpense);

export default router;
