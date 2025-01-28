import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoutes from "./routes/userRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import incomeRoutes from "./routes/incomeRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
// app.get('/', (req, res) => {
//     res.send('budget tracker web app comming soon!');
// });

const PORT=8000;
// app.post('/api/register',registerUser

// );

app.use(express.json());

// Use CORS middleware
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/incomes", incomeRoutes);
app.use("/api/admin", adminRoutes);


// Connect to MongoDB
connectDB();
app.listen(PORT,()=>{   
    console.log(`Server is running at http://localhost:${PORT}`);
});