import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routers/product.route.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(express.json());

app.use("/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Start the server
app.listen(5000, () => {
  connectDB(); // Make sure the DB connection is established
  console.log(`Server started at http://localhost:${PORT}`);
});
