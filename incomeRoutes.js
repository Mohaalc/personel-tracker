import express from "express";
import {
  createIncome,
  getIncomes,
  getIncomeById,
  updateIncome,
  deleteIncome,
  getAllIncomes
} from "../controllers/incomeController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createIncome).get(protect, getIncomes);
router.route("/all").get(protect, admin, getAllIncomes);
router
  .route("/:id")
  .get(protect, getIncomeById)
  .put(protect, updateIncome)
  .delete(protect, deleteIncome);

export default router;
