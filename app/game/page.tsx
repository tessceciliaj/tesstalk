"use client";
import { useEffect, useState } from "react";
import data from "@/lib/data";
import Carddeck from "@/components/Carddeck";
import { AnimatePresence } from "framer-motion";

interface Card {
  id: string;

  text: string;
}

const shuffle = (array: Card[]) => {
  return array.sort(() => 0.5 - Math.random());
};

const Game = () => {
  const allCards: Card[] = data;
  const [cards] = useState(() => shuffle(allCards));
  const [current, setCurrent] = useState(cards.length);
  const cardsToShow = 5;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const removeCard = () => {
    setCurrent((prev) => (prev - 1 >= cardsToShow ? prev - 1 : 0));
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === " " || e.key === "Spacebar") && current) {
        e.preventDefault();
        removeCard();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="items-center flex flex-col justify-center h-full w-full">
        <AnimatePresence>
          {cards
            .slice(
              current > cardsToShow ? current - cardsToShow : 0,
              current > cardsToShow ? current : cardsToShow
            )
            .map((card, index) => (
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
