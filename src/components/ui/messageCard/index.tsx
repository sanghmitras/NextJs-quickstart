interface Message {
  id: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
}

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          message.isOwn
            ? "bg-pink-500 text-white rounded-br-md"
            : "bg-white text-gray-900 rounded-bl-md border border-gray-100"
        } shadow-sm`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
        <p
          className={`text-xs mt-1 ${
            message.isOwn ? "text-pink-100" : "text-gray-500"
          }`}
        >
          {message.timestamp}
        </p>
      </div>
    </div>
  );
};
