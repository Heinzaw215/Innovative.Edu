import Comment from "../models/Comment.js";

// Get all comments
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate(
      "course user",
      "course_title name email"
    );
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single comment by ID
export const getComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate(
      "course user",
      "course_title name email"
    );
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new comment
export const createComment = async (req, res) => {
  try {
    const newComment = new Comment({
      profile: req.body.profile,
      name: req.body.name,
      description: req.body.description,
      course: req.body.course,
      user: req.body.user,
    });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a comment by ID
export const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    comment.profile = req.body.profile || comment.profile;
    comment.name = req.body.name || comment.name;
    comment.description = req.body.description || comment.description;
    comment.course = req.body.course || comment.course;
    comment.user = req.body.user || comment.user;
    const updatedComment = await comment.save();
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a comment by ID
export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    await comment.remove();
    res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
