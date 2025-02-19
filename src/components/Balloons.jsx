import React, { useState, useEffect } from 'react';
import { BsBalloonFill, BsFillBalloonFill } from 'react-icons/bs';
import { IoBalloon, IoBalloonOutline, IoBalloonSharp } from "react-icons/io5";

const Balloons = () => {
  const [balloons, setBalloons] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const createBalloons = () => {
      for (let i = 0; i < 10; i++) {
        const balloon = {
          id: i,
          x: Math.random() * window.innerWidth,
          y: -175,
          color: i % 2 === 0 ? '#6FC400' : '#FFFFFF',
          size: Math.random() * 125 + 60,
          speed: Math.random() * 7 + 2,
          opacity: 1,
          fadeOutStartTime: Math.random() * 4500 + 500,
        };
        setBalloons((prevBalloons) => [...prevBalloons, balloon]);
      }
    };

    createBalloons();

    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 15000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const updateBalloons = () => {
      setTime((prevTime) => prevTime + 25);
      setBalloons((prevBalloons) =>
        prevBalloons.map((balloon) => {
          const newY = balloon.y + balloon.speed;
          let newOpacity = balloon.opacity;
          if (time > balloon.fadeOutStartTime) {
            newOpacity = Math.max(0, newOpacity - 0.01); // decrease opacity by 1% each frame
          }
          return {
            ...balloon,
            y: newY,
            opacity: newOpacity,
          };
        })
      );
    };

    const intervalId = setInterval(updateBalloons, 20);
    return () => clearInterval(intervalId);
  }, [time, balloons]);

  if (!isVisible) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-transparent bg-opacity-50 z-50">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          style={{
            position: 'absolute',
            top: balloon.y,
            left: balloon.x,
            transform: `translate(-50%, 0)`,
            fontSize: balloon.size,
            color: balloon.color,
            opacity: balloon.opacity,
          }}
        >
          <BsBalloonFill />
        </div>
      ))}
    </div>
  );
};

export default Balloons
