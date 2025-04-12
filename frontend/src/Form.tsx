import { FC, useState } from "react";

interface FormProps {
  id: number;
  onCalculate: (id: number, precision: number) => Promise<void>;
  result: string;
  loading: boolean;
}

export const Form: FC<FormProps> = ({ id, onCalculate, result, loading }) => {
  const [precision, setPrecision] = useState<number>(1);

  const handleSubmit = async () => {
    await onCalculate(id, precision);
  };

  return (
    <div className="bg-white p-6 rounded shadow w-1/2">
      <h2 className="text-xl font-bold mb-4">Form no. {id}</h2>
      <label className="block mb-2 font-medium">
        Precision:
        <input
          type="number"
          value={precision}
          onChange={(e) => setPrecision(Number(e.target.value))}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </label>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 text-white font-medium py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200 disabled:opacity-50"
      >
        {loading ? "Counting..." : "Count"}
      </button>
      {result && (
        <p className="mt-4 bg-gray-100 p-2 rounded break-all">
          Result: <span className="font-mono">{result}</span>
        </p>
      )}
    </div>
  );
};
