import express from "express";
import {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getPlaylistsForCourse,
  getPlaylistForCourse,
  createPlaylistForCourse,
  updatePlaylistForCourse,
  deletePlaylistForCourse,
} from "../controllers/courseController.js";

const router = express.Router();

router.get("/", getCourses);
router.get("/:courseId", getCourse);
router.post("/", createCourse);
router.put("/:courseId", updateCourse);
router.delete("/:courseId", deleteCourse);

// Playlists for a course
router.get("/:courseId/playlists", getPlaylistsForCourse);
router.get("/:courseId/playlists/:playlistId", getPlaylistForCourse);
router.post("/:courseId/playlists", createPlaylistForCourse);
router.put("/:courseId/playlists/:playlistId", updatePlaylistForCourse);
router.delete("/:courseId/playlists/:playlistId", deletePlaylistForCourse);

export default router;
