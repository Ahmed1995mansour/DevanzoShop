import express from "express";
import dotenv from "dotenv";
import path from "path";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { notfound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// app.use(cors())

app.get("/", (req, res) => {
  res.send("API  is running.....");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notfound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
