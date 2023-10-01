import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  ownerId: {
    type: String,
    require: true,
  },
  lists: [],
  image: String,
  access: [String],
});

const Board = mongoose.models.boards || mongoose.model("boards", boardSchema);

export default Board;
