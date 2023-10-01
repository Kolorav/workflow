import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  boardId: {
    type: String,
    require: [true, "Board id is required"],
  },
  listId: {
    type: String,
    require: [true, "List id is required"],
  },
  title: {
    type: String,
    require: [true, "Card title is required"],
  },
  description: String,
  index: Number,
  ownerId: {
    type: String,
    require: [true, "Owner id is required."],
  },
  attachments: [],
  labels: [],
  tagged: [String],
  created: {
    type: Date,
    default: new Date(),
  },
});

const Card = mongoose.models.cards || mongoose.model("cards", cardSchema);

export default Card;
