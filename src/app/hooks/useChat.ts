import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

let socket: any;
export interface IMsg {
  user: string;
  msg: string;
}

export const useChat = () => {
  const [connected, setConnected] = useState(false);
  const [chat, setChat] = useState<IMsg[]>([]);
  const [msg, setMsg] = useState<string>('');

  const socketInitializer = async () => {
    await fetch('/api/socketio');
    socket = io();

    socket.on('connect', () => {
      console.log('connected', socket);
      setConnected(true);
    });

    socket.on('error', (error: any) => {
      console.log(error);
    });

    socket.on('message', (message: IMsg) => {
      chat.push(message);
      console.log(chat);
      setChat([...chat]);
    });
  };

  const sendMessage = () => {
    socket.emit('send_message', { message: 'Hello' });
  };

  useEffect(() => {
    socketInitializer();

    // 브라우저가 꺼지면 소켓 연결 종료
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);
};
