import express from "express";
import courseRoutes from "./courseRoutes.js";
import commentRoutes from "./commentRoutes.js";
import userRoutes from "./userRoutes.js";

const router = express.Router();

router.use("/courses", courseRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

export default router;
