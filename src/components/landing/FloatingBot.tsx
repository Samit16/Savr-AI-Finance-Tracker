
import { Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FloatingBotProps {
  position: { x: number; y: number };
}

const FloatingBot: React.FC<FloatingBotProps> = ({ position }) => {
  const navigate = useNavigate();

  const handleBotClick = () => {
    console.log('Bot clicked, navigating to chat...');
    navigate('/chat');
  };

  return (
    <div
      className="fixed bottom-8 right-8 z-[100] transition-transform duration-500 ease-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <button 
        className="bg-primary rounded-full p-4 shadow-2xl border-2 border-primary/20 hover:bg-primary/90 transition-all cursor-pointer hover:scale-110 transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
        onClick={handleBotClick}
        aria-label="Open AI Chat Assistant"
      >
        <Bot className="h-6 w-6 text-primary-foreground" />
      </button>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full animate-pulse pointer-events-none"></div>
    </div>
  );
};

export default FloatingBot;
