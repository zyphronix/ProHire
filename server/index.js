import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

app.get('/', async(req, res) => {
    try {

        await connectDB();
        res.send('Server is running and database connected successfully!');
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).send('Server is running, but failed to connect to the database.');
    }
});
// api's
app.use("/user", userRoute);
app.use("/company", companyRoute);
app.use("/job", jobRoute);
app.use("/application", applicationRoute);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
})