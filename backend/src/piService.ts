import { Worker } from "worker_threads";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.resolve(__dirname, "./piWorker.js");

export const calculatePiWorker = (precision: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, {
      workerData: { precision },
    });

    worker.on("message", (pi: number) => resolve(pi));
    worker.on("error", (error) => reject(error));
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code: ${code}`));
      }
    });
  });
};
