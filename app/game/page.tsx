"use client";
import { useState } from "react";
import data from "@/lib/data";
import Carddeck from "@/components/Carddeck";
import { AnimatePresence } from "framer-motion";

interface Card {
  id: string;
  text: string;
}

const Game = () => {
  const card: Card[] = data;
  const [cards, setCards] = useState<Card[]>(card);

  const shuffle = (array: string[]) => {
    return array.sort(() => 0.5 - Math.random());
  };

  const removeCard = () => {
    setCards((prevstate: Card[]) => prevstate.slice(0, -1));
  };

  return (
    <>
      <div className="items-center flex flex-col justify-center h-full w-full">
        <AnimatePresence>
          {cards.map((card, index) => (
            <Carddeck
              key={card.id}
              card={card}
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
