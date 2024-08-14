import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  headline: { type: String },
  text: { type: String },
  user: { type: String },
});

const News = mongoose.model("newsSchema", newsSchema);

export { News };
