import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id: string;
  text: string;
};

type CarddeckProps = {
  card: Card;
  index: number;
  onDragEnd?: () => void;
};

const Carddeck: React.FC<CarddeckProps> = ({ card, index, onDragEnd }) => {
  const [exitDirection, setExitDirection] = useState<number>(1);
  const [dragControls, setDragControls] = useState({ x: 0, y: 0 });

  const handleDragEnd = ({} = {}, info: any) => {
    setExitDirection(Math.sign(info.velocity.x));
    setDragControls({
      x: info.velocity.x,
      y: info.velocity.y,
    });

    if (onDragEnd) {
      onDragEnd();
    }
  };

  return (
    <>
      <motion.div
        className={`${card.id} bg-white border-2 border-[rgba(97,0,207,0.2)] rounded m-h-[500px] h-2/3 max-w-[430px] absolute top-1/4 w-4/5`}
        drag={true}
        onDragEnd={handleDragEnd}
        initial={{ scale: 0, translateX: -500 }}
        whileDrag={{ scale: 1.05 }}
        animate={{
          translateX: 0,
          scale: 1,
          rotate: `${card.text.length % 2 === 0 ? 4 : -4}deg`,
        }}
        exit={{
          x: dragControls.x,
          y: dragControls.y,
          opacity: 0,
          scale: 0.5,
          transition: { duration: 1 },
          translateX: 500 * exitDirection,
        }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        <div className=" items-center flex text-center w-full h-full  p-6 md:p-12">
          <h2 className="text-2xl justify-center w-full font-bold p-6 md:p-12">
            {card.text}
          </h2>
        </div>
      </motion.div>
    </>
  );
};

export default Carddeck;
