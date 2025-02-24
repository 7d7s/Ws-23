import React, { useState, useEffect } from "react";

interface CounterProps {
  start: number; // Change start to number
  end: number;   // Change end to number
  duration: number; // Change duration to number
  label: string;
}

const Counter: React.FC<CounterProps> = ({ start, end, duration, label }) => {
  const [count, setCount] = useState<number>(start);

  useEffect(() => {
    let startTimestamp: number | null = null; 

    const step = (timestamp: number) => { 
      if (startTimestamp === null) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-4xl font-bold text-red-600">{count}+</h2>
      <p className="text-lg font-bold text-blue-950 mt-1">{label}</p>
    </div>
  );
};

export default Counter;
