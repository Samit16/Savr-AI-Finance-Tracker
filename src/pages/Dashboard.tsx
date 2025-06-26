
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Target, TrendingUp, AlertTriangle, MessageSquare, Home, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [savingsGoal, setSavingsGoal] = useState('');
  const { toast } = useToast();

  const handleBudgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Budget updated!",
      description: "Your AI assistant is analyzing your new budget.",
    });
  };

  const monthlyIncome = parseFloat(income) || 0;
  const monthlyExpenses = parseFloat(expenses) || 0;
  const monthlyBudget = monthlyIncome - monthlyExpenses;
  const savingsTarget = parseFloat(savingsGoal) || 0;
  const savingsProgress = savingsTarget > 0 ? Math.min((monthlyBudget / savingsTarget) * 100, 100) : 0;

  const aiTips = [
    {
      type: 'success',
      icon: TrendingUp,
      title: 'Great job on groceries!',
      description: 'You\'re spending 23% less on groceries than average. Keep it up!',
      savings: '+$87'
    },
    {
      type: 'warning',
      icon: AlertTriangle,
      title: 'Dining out alert',
      description: 'You\'ve spent $420 on restaurants this month. Consider cooking more meals at home.',
      savings: 'Save $200'
    },
    {
      type: 'info',
      icon: Target,
      title: 'Emergency fund goal',
      description: 'You\'re 67% towards your emergency fund goal. Great progress!',
      savings: '$2,010 saved'
    }
  ];

  const goals = [
    {
      title: 'Emergency Fund',
      current: 2010,
      target: 3000,
      progress: 67
    },
    {
      title: 'Vacation Fund',
      current: 850,
      target: 2000,
      progress: 43
    },
    {
      title: 'New Car',
      current: 1200,
      target: 5000,
      progress: 24
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-savr-blue to-savr-green bg-clip-text text-transparent">
                Savr
              </div>
              <span className="text-gray-600">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Link to="/chat">
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  AI Chat
                </Button>
              </Link>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
          <p className="text-gray-600">Here's your financial overview for this month.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Budget Input */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PlusCircle className="h-5 w-5 mr-2 text-savr-blue" />
                  Monthly Budget
                </CardTitle>
                <CardDescription>
                  Enter your income and expenses to get personalized AI recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBudgetSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="income">Monthly Income</Label>
                    <Input
                      id="income"
                      type="number"
                      placeholder="5000"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="expenses">Monthly Expenses</Label>
                    <Input
                      id="expenses"
                      type="number"
                      placeholder="3500"
                      value={expenses}
                      onChange={(e) => setExpenses(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="savings-goal">Savings Goal</Label>
                    <Input
                      id="savings-goal"
                      type="number"
                      placeholder="1000"
                      value={savingsGoal}
                      onChange={(e) => setSavingsGoal(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-savr-blue to-savr-green hover:from-savr-blue-dark hover:to-savr-green-dark">
                    Update Budget
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Monthly Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    ${monthlyBudget.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Available to save/spend
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Savings Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-savr-green">
                    {savingsProgress.toFixed(1)}%
                  </div>
                  <Progress value={savingsProgress} className="mt-2" />
                  <p className="text-sm text-gray-600 mt-1">
                    Of monthly goal
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">AI Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-savr-blue">
                    {aiTips.length}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    New recommendations
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>AI Recommendations</CardTitle>
                <CardDescription>
                  Personalized tips based on your spending patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                      <tip.icon className={`h-5 w-5 mt-1 ${
                        tip.type === 'success' ? 'text-green-500' :
                        tip.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                      }`} />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{tip.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{tip.description}</p>
                      </div>
                      <div className={`text-sm font-medium ${
                        tip.type === 'success' ? 'text-green-600' : 'text-blue-600'
                      }`}>
                        {tip.savings}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Goals Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Your Goals</CardTitle>
                <CardDescription>
                  Track your progress towards financial milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {goals.map((goal, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-gray-900">{goal.title}</h3>
                        <span className="text-sm text-gray-600">
                          ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                      <p className="text-sm text-gray-600 mt-1">{goal.progress}% complete</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Risk Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Risk Analysis</CardTitle>
                <CardDescription>
                  AI-powered insights about your financial health
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-green-800">Low Risk</p>
                      <p className="text-sm text-green-700">Your emergency fund is well-funded</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Medium Risk</p>
                      <p className="text-sm text-yellow-700">Consider diversifying your investments</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-blue-800">Opportunity</p>
                      <p className="text-sm text-blue-700">You could increase your 401k contribution by 2%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
