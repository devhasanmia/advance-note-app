import mongoose, { model } from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      trim: true,
    },
    pinned: {
      type: Boolean,
      default: false,
    },
    tags: [
      {
        label: {
          type: String,
          required: true,
          trim: true,
        },
        color: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Note = model("Note", noteSchema);
