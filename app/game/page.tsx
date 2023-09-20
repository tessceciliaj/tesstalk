"use client";
import { useState } from "react";
import data from "@/lib/data";
import Carddeck from "@/components/Carddeck";
import { motion, AnimatePresence } from "framer-motion";

const Game = () => {
  const card: any = data;
  const [cards, setCards] = useState<any>(card);

  const shuffle = (array: string[]) => {
    return array.sort(() => 0.5 - Math.random());
  };

  const removeCard = () => {
    setCards((prevstate: any) => prevstate.slice(0, -1));
  };

  return (
    <>
      <div className="items-center flex flex-col justify-center h-full w-full">
        <AnimatePresence>
          {cards.map((card, index) => (
            <Carddeck
              key={card.id}
              card={card}
              cardcontent={card.text}
              index={index}
              onDragEnd={removeCard}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Game;
