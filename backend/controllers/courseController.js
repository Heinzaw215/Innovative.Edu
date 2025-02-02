import Course from "../models/Course.js";

// let courses = [
//   { id: 1, title: "course-1" },
//   { id: 2, title: "course-2" },
//   { id: 3, title: "course-3" },
//   { id: 4, title: "course-4" },
// ];

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate(
      "course_instructor",
      "name email"
    );
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getCourse = async (req, res) => {
  try {
    const course = await course
      .findById(req.params.id)
      .populate("course_instructor", "name email");
    if (!course) {
      return res
        .status(404)
        .json({ msg: `A course with the id of ${id} is not found.` });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

// Create A course
export const createCourse = async (req, res) => {
  try {
    const newCourse = {
      course_title: res.body.course_title,
      course_description: res.body.course_description,
      course_instructor: res.body.course_instructor,
    };
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch {
    res.status(500).json({ message: "Server Error." });
  }
};

// Update a course by ID
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    course.course_title = req.body.course_title || course.course_title;
    course.course_description =
      req.body.course_description || course.course_description;
    course.course_instructor =
      req.body.course_instructor || course.course_instructor;
    const updatedCourse = await course.save();
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a course by ID
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    await course.remove();
    res.status(200).json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all playlists for a course
export const getPlaylistsForCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId).populate(
      "playlists"
    );
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json(course.playlists);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single playlist for a course
export const getPlaylistForCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId).populate(
      "playlists"
    );
    if (!course) return res.status(404).json({ message: "Course not found" });
    const playlist = course.playlists.id(req.params.playlistId);
    if (!playlist)
      return res.status(404).json({ message: "Playlist not found" });
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new playlist for a course
export const createPlaylistForCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });
    const newPlaylist = {
      title: req.body.title,
    };
    course.playlists.push(newPlaylist);
    await course.save();
    res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a playlist for a course
export const updatePlaylistForCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });
    const playlist = course.playlists.id(req.params.playlistId);
    if (!playlist)
      return res.status(404).json({ message: "Playlist not found" });
    playlist.title = req.body.title || playlist.title;
    await course.save();
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a playlist for a course
export const deletePlaylistForCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });
    const playlist = course.playlists.id(req.params.playlistId);
    if (!playlist)
      return res.status(404).json({ message: "Playlist not found" });
    playlist.remove();
    await course.save();
    res.status(200).json({ message: "Playlist deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
