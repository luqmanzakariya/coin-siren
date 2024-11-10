import { MutableRefObject } from 'react';

interface ChatBubbleProps {
  title: string;
  style: string;
  type: string;
  innerRef: MutableRefObject<null>;
}

const ChatBubble = ({ title, style, type, innerRef }: ChatBubbleProps) => {
  return (
    <div ref={innerRef} className={`chat-buble bottom ${style}`}>
      {title}
      {type === 'left' && (
        <div
          className={`absolute -bottom-2 left-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-lightBlue lg:border-t-whiteSolid`}></div>
      )}
      {type === 'center' && (
        <div className="absolute -bottom-2 left-[42%] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-lightGreen"></div>
      )}
    </div>
  );
};

export default ChatBubble;
