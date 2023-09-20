"use client";
import { useState, useEffect } from "react";

const floatingWords: string[] = [
  "PLAY",
  "TALK",
  "TRUST",
  "SHARE",
  "OPEN UP",
  "FEEL",
  "BOND",
  "LAUGH",
  "LISTEN",
  "GROW",
  "LEARN",
  "LOVE",
  "DREAM",
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
    <div className="text-2xl font-bold text-shadow blink_me">
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
