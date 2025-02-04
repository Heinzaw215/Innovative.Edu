import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.js";
// import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Connect Database
connectDB();

// Set View Engine to EJS
app.set("view engine", "ejs");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS Middleware
// app.use(cors());

// Resolve __dirname and __filename in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static Folder for uploaded Files
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Serve static files (CSS, JS, images)
// app.use(express.static(path.join(__dirname, "../")));

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
// app.use("/api", routes);

// Index Page
app.get("/", (req, res) => {
  console.log("Index Page Hit");
  res.render("home", { title: "Home" });
});

// About Page
app.get("/about", (req, res) => {
  console.log("About Page Hit");
  res.render("about", { title: "About" });
});

// Courses Page
app.get("/courses", (req, res) => {
  console.log("Courses Page Hit");
  res.render("courses", { title: "Courses" });
});

// Teachers Page
app.get("/teachers", (req, res) => {
  console.log("Teachers Page Hit");
  res.render("teachers", { title: "Teachers" });
});

// Contact Page
app.get("/contact", (req, res) => {
  console.log("Contact Page Hit");
  res.render("contact", { title: "Contact" });
});

// 404 Page
app.use((req, res) => {
  console.log("404 Page Hit");
  res.status(404).render("404", { title: "404" });
});

// Error Handling Middleware
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send("<h1>Error: Page Not Found</h1>");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
