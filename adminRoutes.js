import express from "express";
import { getAdminDashboard } from "../controllers/adminController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/dashboard").get(protect, admin, getAdminDashboard);

export default router;

