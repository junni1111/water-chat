'use client';
import { useChat } from '~/hooks/useChat';

const page = () => {
  const { inputMessage, handleInputMessage, chatMessage, sendMessage } =
    useChat();
  return (
    <div>
      <div>
        <input value={inputMessage} onChange={handleInputMessage} />
        <button onClick={sendMessage}>send</button>
      </div>
      <div>
        {chatMessage.map((msg) => {
          return <div key={msg}>{msg}</div>;
        })}
      </div>
    </div>
  );
};

export default page;
