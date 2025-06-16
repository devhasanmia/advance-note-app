import { model, Schema } from "mongoose";
import { INote } from "../interfaces/note.interface";

const noteSchema = new Schema<INote>(
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

export const Note = model<INote>("Note", noteSchema);
