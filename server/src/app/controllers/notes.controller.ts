import express, { NextFunction, Request, Response } from "express";
import { Note } from "../models/notes.model";
const notesRoutes = express.Router();

notesRoutes.post(
  "/create-note",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = req.body;
      const result = await Note.create(payload);
      res.status(201).json({
        success: true,
        message: "Note created successfully.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
);

notesRoutes.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await Note.find();
      res.status(200).json({
        success: true,
        message: "Notes retrieved successfully.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
);

notesRoutes.get(
  "/:noteId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await Note.findById(req.params.noteId);
      res.status(200).json({
        success: true,
        message: "Notes retrieved successfully.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
);

notesRoutes.put(
  "/:noteId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await Note.findByIdAndUpdate(req.params.noteId, req.body, {new: true});
      res.status(200).json({
        success: true,
        message: "Notes Updated successfully.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
);

notesRoutes.delete(
  "/:noteId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await Note.findByIdAndDelete(req.params.noteId);
      res.status(204).json({
        success: true,
        message: "Notes Delete successfully.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default notesRoutes;
