import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema(
  {
    playlist_title: {
      type: String,
      required: [true, "Please enter the title."],
      trim: true,
    },
    playlist_description: {
      type: String,
      required: true,
      trim: true,
    },
    playlist_video: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const playlist = new mongoose.model("Playlist", playlistSchema);

export default playlist;  