import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

expenseSchema.index({ user: 1, date: -1 });

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
