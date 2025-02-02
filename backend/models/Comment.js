import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    profile: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: Date.now,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  }, 
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
