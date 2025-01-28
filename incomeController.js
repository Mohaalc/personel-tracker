import Income from "../models/incomeModel.js";

const createResponse = (success, data, message) => ({
    success,
    data,
    message,
});

export const createIncome = async (req, res) => {
    try {
        const { source, amount, date } = req.body;
        const income = new Income({
            source,
            amount,
            date,
            user: req.user._id,
        });
        const createdIncome = await income.save();
        res.status(201).json(createdIncome);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create income', error: error.message });
    }
};

export const getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find({ user: req.user._id });
        res.status(200).json(createResponse(true, incomes, "Incomes fetched successfully"));
    } catch (error) {
        res.status(500).json(createResponse(false, null, "Failed to fetch incomes"));
    }
};

export const getIncomeById = async (req, res) => {
    try {
        const income = await Income.findById(req.params.id);
        if (!income) {
            return res.status(404).json({ message: 'Income not found' });
        }
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch income', error: error.message });
    }
};

export const updateIncome = async (req, res) => {
    try {
        const { source, amount, date } = req.body;
        const income = await Income.findById(req.params.id);

        if (!income) {
            return res.status(404).json({ message: 'Income not found' });
        }

        if (income.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to update this income' });
        }

        income.source = source || income.source;
        income.amount = amount || income.amount;
        income.date = date || income.date;

        const updatedIncome = await income.save();
        res.status(200).json(updatedIncome);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update income', error: error.message });
    }
};

export const deleteIncome = async (req, res) => {
    try {
        const income = await Income.findById(req.params.id);
        if (!income) {
            return res.status(404).json({ message: "Income not found" });
        }

        await income.deleteOne();
        res.status(200).json({ message: "Income deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete income', error: error.message });
    }
};

export const getAllIncomes = async (req, res) => {
    try {
        const incomes = await Income.find();
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch all incomes', error: error.message });
    }
};


