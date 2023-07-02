'use client';

import { ChangeEvent, useState } from 'react';
import HomeTemplate from './components/template/home';

const Home = () => {
  const [chatInput, setChatInput] = useState('');
  const handleChatInput = (e: ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  return (
    <HomeTemplate chatInput={chatInput} onHandleChangeInput={handleChatInput} />
  );
};

export default Home;
