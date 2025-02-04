import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    course_title: {
      type: String,
      required: [true, "Please enter the title."],
      trim: true,
    },
    course_description: {
    type: String,
      required: false,
      trim: true,
    },
    course_instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const course = new mongoose.model("Course", courseSchema);

export default course;
