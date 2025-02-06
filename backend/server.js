import express from "express";
import dotenv from "dotenv";
// import fs from "fs";
// import connectDB from "./config/db.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.js";
import session from 'express-session';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Resolve __dirname and __filename in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect Database
// connectDB();

// Set View Engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session Middleware 
app.use(session({
  secret: "your_secret_key",
  resave: false,
  saveUninitialized: true
}))

// Static Folder for uploaded Files
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "../public")));

// Middleware to pass user info to templates
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Multer Middleware for uploading files
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

// Routes
app.use("/", routes);

// Error Handling Middleware
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(error.status || 500);
  res.render("error", { title: "Error", message: error.message, error: error });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
