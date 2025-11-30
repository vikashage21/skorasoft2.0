import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: String,
  content: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Blog", BlogSchema);
