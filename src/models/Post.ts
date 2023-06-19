import mongoose from "mongoose";

export interface Post {
  _id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

const { Schema } = mongoose;

const postSchema = new Schema<Post>({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  content: { type: String, required: true },
  username: { type: String, required: true },
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
