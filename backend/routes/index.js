import express from "express";
import fs  from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Define __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import courseRoutes from "./courseRoutes.js";
// import commentRoutes from "./commentRoutes.js";
// import userRoutes from "./userRoutes.js";
import contactRoutes from "./contactRoutes.js";


// router.use("/courses", courseRoutes);
// router.use("/comments", commentRoutes);
// router.use("/users", userRoutes);
router.use("/contact", contactRoutes);

// Index Page
router.get("/", (req, res) => {
  console.log("Home Page Hit");
  res.render("home", { title: "Home" });
});

// About Page
router.get("/about", (req, res) => {
  console.log("About Page Hit");
  res.render("about", { title: "About" });
});

// Courses Page
router.get("/courses", (req, res) => {
  console.log("Courses Page Hit");

  // Read the JSON file
  const courseFilePath = path.join(__dirname, "../data", "courses.json");
  fs.readFile(courseFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading courses.json:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Parse the JSON data
    const courses = JSON.parse(data);

    // Render the EJS template with the course data
    res.render("courses", { title: "Courses", courses });
  });
});

// Teachers Page
router.get("/teachers", (req, res) => {
  console.log("Teachers Page Hit");
  res.render("teachers", { title: "Teachers" });
});

// Contact Page
router.get("/contact", (req, res) => {
  console.log("Contact Page Hit");
  res.render("contact", { title: "Contact" });
});

// Login Page
router.get("/login", (req, res) => {
  console.log("Login Page Hit");
  res.render("login", { title: "Login" });
});

// Register Page
router.get("/register", (req, res) => {
  console.log("Register Page Hit");
  res.render("register", { title: "Register" });
});

// User Profile Page
router.get("/user/profile", (req, res) => {
  console.log("User Profile Page Hit");
  res.render("profile", { title: "User Profile" });
});

// Playlist Page
router.get("/playlist", (req, res) => {
  console.log("Playlist Page Hit");
  res.render("playlist", { title: "Playlist" });
});

// Teacher Profile Page
router.get("/teacher", (req, res) => {
  console.log("Teacher Page Hit");
  res.render("teacher", { title: "Teacher" });
});

// User Update Page
router.get("/user/update", (req, res) => {
  console.log("User Update Page Hit");
  res.render("user-update", { title: "User Update" });
});

// Watch Video Page
router.get("/watch-video", (req, res) => {
  console.log("Watch Video Page Hit");
  res.render("watch-video", { title: "Watch Video" });
});

// 404 Page
router.use((req, res) => {
  console.log("404 Page Hit");
  res.status(404).render("404", { title: "404" });
});

export default router;
