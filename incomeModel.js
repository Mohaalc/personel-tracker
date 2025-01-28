import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    source: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

incomeSchema.index({ user: 1, date: -1 });

const Income = mongoose.model("Income", incomeSchema);
export default Income;
