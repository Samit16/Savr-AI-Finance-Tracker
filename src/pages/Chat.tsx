
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Send, Bot, User, Home, BarChart3, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI financial assistant. I can help you with budgeting, saving tips, investment advice, and financial planning. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const aiResponses = [
    {
      keywords: ['save', 'saving', 'money'],
      response: "Great question about saving! Here are some proven strategies: 1) Follow the 50/30/20 rule (50% needs, 30% wants, 20% savings), 2) Automate your savings, 3) Cut unnecessary subscriptions, 4) Use the 24-hour rule before big purchases. Based on typical spending patterns, you could save $200-400 monthly with these tips. Would you like me to help you create a personalized savings plan?"
    },
    {
      keywords: ['budget', 'budgeting'],
      response: "Budgeting is the foundation of financial success! I recommend starting with zero-based budgeting where every dollar has a purpose. Track your expenses for a month, categorize them, and set realistic limits. Popular categories include: Housing (25-30%), Food (10-15%), Transportation (10-15%), Entertainment (5-10%), Savings (20%). Would you like me to help you create a budget based on your income?"
    },
    {
      keywords: ['emergency', 'fund'],
      response: "An emergency fund is crucial for financial security! You should aim for 3-6 months of expenses. Start small - even $25/week adds up to $1,300 per year. Keep it in a high-yield savings account that's easily accessible but separate from your checking account. If you're just starting, aim for $1,000 first, then build to one month's expenses, then three months. What's your current monthly expense total?"
    },
    {
      keywords: ['invest', 'investment', 'stock'],
      response: "Investment advice depends on your goals and risk tolerance! For beginners, I recommend: 1) Start with index funds for diversification, 2) Consider a Roth IRA for tax advantages, 3) Don't try to time the market, 4) Invest consistently over time. A common strategy is 80% stocks/20% bonds if you're young, adjusting to more conservative as you age. Never invest money you can't afford to lose. Have you already built your emergency fund?"
    },
    {
      keywords: ['debt', 'credit', 'loan'],
      response: "Debt management is key to financial freedom! I recommend the debt avalanche method: pay minimums on all debts, then put extra money toward the highest interest rate debt first. This saves the most money long-term. Alternatively, the debt snowball method (smallest balance first) can provide psychological wins. For credit cards, try to pay them off monthly and keep utilization under 30%. What type of debt are you dealing with?"
    },
    {
      keywords: ['retirement', '401k', 'ira'],
      response: "Starting retirement planning early gives you a huge advantage thanks to compound interest! If your employer offers 401k matching, contribute at least enough to get the full match - it's free money! A good rule of thumb is to save 10-15% of your income for retirement. Consider this: $200/month invested at 7% annual return for 30 years becomes $244,000! Roth IRA is great for tax-free growth. How much are you currently saving for retirement?"
    }
  ];

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const response of aiResponses) {
      if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return response.response;
      }
    }
    
    // Default responses for unmatched queries
    const defaultResponses = [
      "That's a great question! I'd be happy to help you with your financial planning. Could you be more specific about what aspect of your finances you'd like to focus on?",
      "I can help you with budgeting, saving, investing, debt management, and retirement planning. What specific area would you like to explore?",
      "Let me help you with that! For the best advice, I'd need to know more about your financial situation and goals. What's your main financial priority right now?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const quickActions = [
    { icon: Lightbulb, text: 'Give me saving tips', action: 'saving tips' },
    { icon: BarChart3, text: 'Help me budget', action: 'budget help' },
    { icon: Target, text: 'Set financial goals', action: 'financial goals' },
  ];

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-savr-blue to-savr-green bg-clip-text text-transparent">
                Savr
              </div>
              <span className="text-gray-600">AI Assistant</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <Card className="h-[600px] flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 p-6 overflow-y-auto chat-scroll space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-savr-blue text-white' 
                      : 'bg-gradient-to-r from-savr-blue to-savr-green text-white'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div className={`rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-savr-blue text-white'
                      : 'bg-white border shadow-sm'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-savr-blue to-savr-green flex items-center justify-center text-white">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-white border shadow-sm rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-6 py-4 border-t">
              <p className="text-sm text-gray-600 mb-3">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction(action.action)}
                    className="text-xs"
                  >
                    <action.icon className="h-3 w-3 mr-1" />
                    {action.text}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Message Input */}
          <div className="p-6 border-t">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything about your finances..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                type="submit" 
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-savr-blue to-savr-green hover:from-savr-blue-dark hover:to-savr-green-dark"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>

        {/* Disclaimer */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            This is a demo AI assistant. For real financial advice, please consult with a qualified financial advisor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
