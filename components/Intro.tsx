"use client";
import { useState, useEffect } from "react";

const floatingWords: string[] = [
  "PLAY",
  "TALK",
  "CONNECT",
  "SHARE",
  "OPEN UP",
  "FEEL",
  "BOND",
  "COMMUNICATE",
  "BE HONEST",
];
const Intro = () => {
  const [wordIndex, setWordIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextWordIndex: number = (wordIndex + 1) % floatingWords.length;
      setWordIndex(nextWordIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [wordIndex]);

  return (
    <div className="text-2xl font-bold text-shadow">
      <h3>
        R U
        <br />
        READY
        <br />2
        <br />
        <span>{floatingWords[wordIndex]}</span>
        <br />?
      </h3>
    </div>
  );
};

export default Intro;
