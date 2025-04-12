import express from "express";
import { calculatePi } from "./piController.js";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/calculate-pi", calculatePi);

app.listen(port, () => {
  console.log(`Server works on http://localhost:${port}`);
});
