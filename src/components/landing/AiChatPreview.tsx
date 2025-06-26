
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BlurText from '@/components/BlurText';
import StarBorder from '@/components/ui/star-border';

const AiChatPreview = () => {
  return (
    <section className="py-20 bg-white/10 dark:bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BlurText
            text="FinBuddy - Your AI Financial Assistant"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            delay={80}
            animateBy="words"
          />
          <p className="text-xl text-white/90">
            Get instant analysis and personalized insights from your financial data
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chat Interface */}
          <div className="relative">
            <Card className="bg-white/95 dark:bg-black/80 border-white/30 dark:border-white/20 border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-card-foreground">
                    FinBuddy AI Assistant
                  </span>
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3 max-w-xs font-medium transition-all duration-300 hover:scale-105">
                    Can you analyze my spending this month?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted border border-border text-card-foreground rounded-xl px-4 py-3 max-w-xs transition-all duration-300 hover:scale-105">
                    I've analyzed your spending patterns. You've spent 15% less on dining out compared to last month - great job! 📊 Would you like a detailed breakdown?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3 max-w-xs font-medium transition-all duration-300 hover:scale-105">
                    Yes, show me the full report
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Report Digest */}
          <div className="relative">
            <Card className="bg-white/95 dark:bg-black/80 border-white/30 dark:border-white/20 border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-lg font-semibold text-card-foreground">
                    Monthly Financial Report
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key Insights */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-card-foreground">Spending decreased by 15%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-card-foreground">Savings increased by $200</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    <span className="text-sm text-card-foreground">Transportation costs up 8%</span>
                  </div>
                </div>

                {/* Categories Performance */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-card-foreground">Category Performance</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Groceries: -$45
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      Entertainment: -$80
                    </Badge>
                    <Badge variant="outline" className="text-amber-600 border-amber-600">
                      Transport: +$32
                    </Badge>
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-card-foreground mb-2">AI Recommendations</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Consider carpooling to reduce transport costs</li>
                    <li>• You're on track to reach your emergency fund goal</li>
                    <li>• Great progress on dining out reduction!</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/chat">
            <StarBorder color="#2563eb" speed="5s" className="text-lg font-semibold">
              Start Chatting with FinBuddy
            </StarBorder>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AiChatPreview;
