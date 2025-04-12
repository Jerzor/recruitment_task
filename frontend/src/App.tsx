import { useState } from "react";
import axios from "axios";
import { Form } from "./Form.tsx";

const App = () => {
  const [results, setResults] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  const url = "http://localhost:3001/calculate-pi";

  const calculatePi = async (id: number, precision: number) => {
    setLoading((prev) => ({ ...prev, [id]: true }));

    axios
      .post(url, { precision })
      .then((response) => {
        setResults((prev) => ({ ...prev, [id]: response.data.pi }));
      })
      .catch((error) => {
        setResults((prev) => ({
          ...prev,
          [id]: error?.response.data.error || "Error",
        }));
      })
      .finally(() => {
        setLoading((prev) => ({ ...prev, [id]: false }));
      });
  };

  return (
    <div className="h-screen bg-gray-100 p-4 flex gap-4 items-start justify-between">
      <Form
        id={1}
        onCalculate={calculatePi}
        result={results[1] || ""}
        loading={loading[1] || false}
      />
      <Form
        id={2}
        onCalculate={calculatePi}
        result={results[2] || ""}
        loading={loading[2] || false}
      />
    </div>
  );
};

export default App;
