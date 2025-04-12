import { parentPort, workerData } from "worker_threads";
import Decimal from "decimal.js";

interface WorkerData {
  precision: number;
}

const { precision } = workerData as WorkerData;

function calculatePi(precision: number) {
  Decimal.set({ precision: precision + 10 });

  let a = new Decimal(1);
  let b = new Decimal(1).dividedBy(Decimal.sqrt(2));
  let p = new Decimal(1);
  let t = new Decimal(1).dividedBy(4);

  for (let i = 0; i < precision; i++) {
    const aNext = a.plus(b).dividedBy(2);
    const bNext = Decimal.sqrt(a.times(b));
    const tNext = t.minus(p.times(a.minus(aNext).pow(2)));

    a = aNext;
    b = bNext;
    t = tNext;
    p = p.times(2);
  }

  const pi = a.plus(b).pow(2).dividedBy(t).dividedBy(4);
  return pi.toPrecision(precision);
}

const result = calculatePi(precision);
parentPort?.postMessage(result);
