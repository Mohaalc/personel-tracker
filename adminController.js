import User from "../models/userModel.js";
import Expense from "../models/expenseModel.js";
import Income from "../models/incomeModel.js";

const createResponse = (success, data, message) => ({
  success,
  data,
  message,
});

export const getAdminDashboard = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalExpenses = await Expense.countDocuments();
        const totalIncomes = await Income.countDocuments();

        res.status(200).json(createResponse(true, { totalUsers, totalExpenses, totalIncomes }, "Admin data fetched successfully"));
    } catch (error) {
        res.status(500).json(createResponse(false, null, "Failed to fetch dashboard data"));
    }
};

export const getAdminData = async (req, res) => {
  try {
    const data = await AdminData.find();
    res.status(200).json(createResponse(true, data, "Admin data fetched successfully"));
  } catch (error) {
    res.status(500).json(createResponse(false, null, "Failed to fetch admin data"));
  }
};

