import Expense from "../models/expenseModel.js";

const createResponse = (success, data, message) => ({
  success,
  data,
  message,
});

export const createExpense = async (req, res) => {
    try {
        const { title, amount, date } = req.body;
        const expense = new Expense({
            title,
            amount,
            date,
            user: req.user._id,
        });
        const createdExpense = await expense.save();
        res.status(201).json(createdExpense);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create expense', error: error.message });
    }
};

export const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user._id });
        res.status(200).json(createResponse(true, expenses, "Expenses fetched successfully"));
    } catch (error) {
        res.status(500).json(createResponse(false, null, "Failed to fetch expenses"));
    }
};

export const getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch expense', error: error.message });
    }
};

export const updateExpense = async (req, res) => {
    try {
        const { title, amount, date } = req.body;
        const expense = await Expense.findById(req.params.id);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        if (expense.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to update this expense' });
        }

        expense.title = title || expense.title;
        expense.amount = amount || expense.amount;
        expense.date = date || expense.date;

        const updatedExpense = await expense.save();
        res.status(200).json(updatedExpense);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update expense', error: error.message });
    }
};

export const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        await expense.deleteOne();
        res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete expense', error: error.message });
    }
};

export const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch all expenses', error: error.message });
    }
};


