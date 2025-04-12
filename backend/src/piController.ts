import { Request, Response } from "express";
import { calculatePiWorker } from "./piService.js";

export const calculatePi = (req: Request, res: Response): void => {
  try {
    const { precision } = req.body;

    if (precision <= 0) {
      res.status(400).json({ error: "Precision should be greater than 0" });
      return;
    }

    calculatePiWorker(precision)
      .then((pi: number) => {
        res.json({ pi });
      })
      .catch((error) => {
        console.error("Error calculating PI:", error);
        res.status(418).json({ error: "Something went wrong" });
      });
  } catch (error) {
    console.error("Unexpected error in controller:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
