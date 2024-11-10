interface ChatBubbleProps {
  title: string;
  style: string;
}

const ChatBubble = ({ title, style }: ChatBubbleProps) => {
  return <div className={`chat-buble bottom ${style}`}>{title}</div>;
};

export default ChatBubble;
