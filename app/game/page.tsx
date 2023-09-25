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
  const shuffleCards = shuffle(allCards);
  const [cards, setCards] = useState<Card[]>(shuffleCards.slice(0, 1));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const removeCard = () => {
    setCards((prevCards: Card[]) => {
      const remainingCards = prevCards.slice(1);
      const currentIndex = shuffleCards.indexOf(prevCards[0]);
      const nextIndex = (currentIndex + 1) % shuffleCards.length;
      const nextCard = shuffleCards[nextIndex];
      return [...remainingCards, nextCard];
    });
  };

  if (!isMounted) return null;

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
