import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const OpeningScreen = ({ onContinue }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playSong = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Container>
      <Sprinkles>
        {Array.from({ length: 50 }).map((_, i) => (
          <Sprinkle key={i} />
        ))}
      </Sprinkles>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Happy 18th Birthday!
      </motion.h3>
      <CakeImage src={require('./cake.png')} alt="Birthday Cake" />
      <WishText
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Wishing you all the joy and happiness in the world.
      </WishText>
      <PlayButton onClick={playSong}>
        {isPlaying ? 'Pause Song' : 'Play Song'}
      </PlayButton>
      <ContinueButton onClick={onContinue}>Continue</ContinueButton>
      <audio ref={audioRef} src={require('./happy-birthday-song.mp3')} />
    </Container>
  );
};

const sprinkleAnimationTopLeft = keyframes`
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(100vw) translateY(100vh); }
`;

const sprinkleAnimationTopRight = keyframes`
  0% { transform: translateX(100vw) translateY(0); }
  100% { transform: translateX(0) translateY(100vh); }
`;

const sprinkleAnimationBottomLeft = keyframes`
  0% { transform: translateX(0) translateY(100vh); }
  100% { transform: translateX(100vw) translateY(0); }
`;

const sprinkleAnimationBottomRight = keyframes`
  0% { transform: translateX(100vw) translateY(100vh); }
  100% { transform: translateX(0) translateY(0); }
`;

const Sprinkles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const Sprinkle = styled.div`
  position: absolute;
  top: ${() => Math.random() * 100}%;
  left: ${() => Math.random() * 100}%;
  width: 5px;
  height: 10px;
  background-color: ${() => `hsl(${Math.random() * 360}, 100%, 50%)`};
  animation: ${() => {
    const random = Math.random();
    if (random < 0.25) return sprinkleAnimationTopLeft;
    if (random < 0.5) return sprinkleAnimationTopRight;
    if (random < 0.75) return sprinkleAnimationBottomLeft;
    return sprinkleAnimationBottomRight;
  }} 3s linear infinite;
  transform: rotate(${() => Math.random() * 360}deg);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  position: relative;
`;

const CakeImage = styled.img`
  width: 150px;
  margin: 20px 0;
`;

const WishText = styled(motion.p)`
  text-align: center;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PlayButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #74b9ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0984e3;
  }
`;

const ContinueButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #ff4757;
  }
`;

export default OpeningScreen;