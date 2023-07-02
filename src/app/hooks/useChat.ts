'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

/**
 * 채팅 관련 hooks
 * @returns
 */
export const useChat = () => {
  let socket: any;

  const [chatMessage, setChatMessage] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  // 채팅방 연결하는 함수
  const socketInitializer = () => {
    // 서버로 소켓 열고
    socket = io('http://localhost:8000');

    // socekt.on('event 명', callback) 이렇게 하면 이 이벤트에 대한 콜백함수 실행
    // server는 socket.emit('event') 하는 거
    socket.on('error', (error: any) => {
      console.log(error);
    });

    // 그럼 이건 채팅방 메세지 들어왔을때 콜백 함수 실행시키는 거밍
    socket.on('chat message', (message: string) => {
      setChatMessage((prevMessage) => [...prevMessage, message]);
    });
  };

  const sendMessage = () => {
    // emit은 보내는거
    socket.emit('send_message', inputMessage);
  };

  const handleInputMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  // 일단은 useEffect로 처음 렌더링 시에 소켓 연결
  // 나중엔 방들어갔을 때 socektInitializer() 호출하면 소켓 연결되는거밍
  useEffect(() => {
    socketInitializer();

    // 브라우저가 꺼지면 소켓 연결 종료
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return { inputMessage, handleInputMessage, chatMessage, sendMessage };
};
