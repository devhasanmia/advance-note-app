import express, { Request, Response, NextFunction } from "express";
import { User } from "../models/user.model";

const userRoutes = express.Router();

// Create User
userRoutes.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const result = await User.create(payload);
    res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

// Get All Users
userRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await User.find();
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

// Get Single User
userRoutes.get("/:userId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await User.findById(req.params.userId);
    res.status(200).json({
      success: true,
      message: "User retrieved successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

// Update User
userRoutes.put("/:userId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    res.status(200).json({
      success: true,
      message: "User updated successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

// Delete User
userRoutes.delete("/:userId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await User.findByIdAndDelete(req.params.userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

export default userRoutes;
