import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import happyBirthdaySong from './song.mp3';

const WishesScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(happyBirthdaySong);

  useEffect(() => {
    audio.play();
    setIsPlaying(true);

  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

 
  const wishes = [
    "Happy 18th Birthday! 🎉 I can’t believe you’re finally 18! We've known each other for seven amazing years, and I’m so grateful to have you in my life. As your best friend, I want to shower you with all the love, blessings, and prayers you deserve on this special day.",
    "First off, I thank God for you. Proverbs 17:17 says, 'A friend loves at all times,' and you’ve been that friend who has loved me through everything. I pray that our bond only grows stronger as we both continue on this journey of life together.",
    "As you turn 18, stepping into adulthood, I pray that God blesses you with wisdom beyond your years. Just like Solomon asked in 1 Kings 3:9, I pray that God gives you a wise and understanding heart to help you navigate life’s challenges. May you always seek His guidance in everything you do.",
    "I pray that God surrounds you with His protection. Psalm 91:11 says, 'For He will command His angels concerning you to guard you in all your ways.' May His angels watch over you, keeping you safe and guiding your every step.",
    "I also pray for God’s peace to fill your heart. Philippians 4:7 says, 'And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.' No matter what life brings, may you always feel God’s calming presence and peace.",
    "As you begin this new chapter, I pray that God blesses you with success in everything you do. Deuteronomy 28:12 says, 'The Lord will open the heavens, the storehouse of His bounty, to send rain on your land in season and to bless all the work of your hands.' May all your efforts be fruitful, and may you experience God’s favor in every area of your life.",
    "I pray that your life is filled with joy and happiness. Psalm 16:11 says, 'You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.' May you always find joy in the Lord, and may your days be filled with moments of pure happiness.",
    "I also pray for God’s strength to carry you through any tough times. Isaiah 40:31 says, 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.' Whenever you feel tired or overwhelmed, may God renew your strength and lift you up.",
    "I pray that God grants you the desires of your heart and makes all your plans succeed. Psalm 20:4 says, 'May he give you the desire of your heart and make all your plans succeed.' May you continue to dream big and trust God with all your aspirations.",
    "I pray for God’s grace to abound in your life. 2 Corinthians 9:8 says, 'And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.' May His grace overflow in every aspect of your life.",
    "I pray for your health and well-being. 3 John 1:2 says, 'Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well.' May you enjoy good health and a vibrant spirit as you step into this new year.",
    "I pray that God guides your steps and leads you on the right path. Proverbs 3:5-6 says, 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.' May you always seek His direction in everything you do.",
    "I pray that you are blessed with deep, meaningful friendships that enrich your life. Ecclesiastes 4:9-10 says, 'Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up.' May you always have true friends by your side to support and uplift you.",
    "I pray for God’s provision in your life. Philippians 4:19 says, 'And my God will meet all your needs according to the riches of his glory in Christ Jesus.' May you never lack, and may God provide for all your needs.",
    "I pray for wisdom as you make decisions in life. James 1:5 says, 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.' May you seek God’s wisdom in every decision you make.",
    "I pray that your life is a light that shines brightly for others. Matthew 5:16 says, 'In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.' May you continue to be a beacon of love, kindness, and faith.",
    "Finally, I pray that you always feel God’s love surrounding you. Romans 8:38-39 reminds us that nothing can separate us from God’s love. May His love be a constant source of comfort, joy, and confidence in your life.",
    "Thank you for being my best friend. I’m so blessed to have you by my side, and I can’t wait to see what the future holds for us. Let’s keep growing, laughing, and dreaming together. Here’s to many more years of friendship, love, and blessings as we journey through life together.",
    "Happy 18th Birthday, Sonny! Love you so much."
  ];
  

  return (
    <Container>
      <Swiper
        navigation={false}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        style={{ width: '100%', height: '100%' }}
      >
        {wishes.map((wish, index) => (
          <SwiperSlide key={index}>
            <WishSlide>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {wish}
              </motion.div>
            </WishSlide>
          </SwiperSlide>
        ))}
      </Swiper>
  
      <SlideText>Slide left for more</SlideText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #fce4ec;  // Light pink background
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 40px;
`;

const WishSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  width: 60%;
  margin: auto;
`;

const PlayButton = styled.button`
  position: absolute;
  bottom: 100px;
  right: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff69b4;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff1493;
  }
`;


const SlideText = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #ff69b4;
  font-size: 16px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export default WishesScreen;