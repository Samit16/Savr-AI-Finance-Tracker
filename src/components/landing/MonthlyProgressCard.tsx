
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, Plane, Laptop, Plus, Car, Home } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const MonthlyProgressCard = () => {
    const [selectedGoal, setSelectedGoal] = useState('emergency');
    const [goals, setGoals] = useState([
        {
            id: 'emergency',
            name: 'Emergency Fund',
            icon: Target,
            current: 7500,
            target: 10000,
            color: 'text-secondary'
        },
        {
            id: 'vacation',
            name: 'Vacation',
            icon: Plane,
            current: 2300,
            target: 5000,
            color: 'text-blue-500'
        },
        {
            id: 'laptop',
            name: 'New Laptop',
            icon: Laptop,
            current: 800,
            target: 1500,
            color: 'text-purple-500'
        }
    ]);
    const { toast } = useToast();

    const currentGoal = goals.find(g => g.id === selectedGoal) || goals[0];
    const progress = (currentGoal.current / currentGoal.target) * 100;

    const handleGoalSelect = (goalId: string) => {
        setSelectedGoal(goalId);
        const goal = goals.find(g => g.id === goalId);
        toast({
            title: "Goal Selected",
            description: `Now viewing ${goal?.name} progress`,
        });
    };

    const handleAddGoal = () => {
        const goalTemplates = [
            { name: 'Car Fund', icon: Car, target: 20000, color: 'text-green-500' },
            { name: 'House Down Payment', icon: Home, target: 50000, color: 'text-orange-500' },
            { name: 'Wedding Fund', icon: Target, target: 15000, color: 'text-pink-500' },
        ];
        
        const template = goalTemplates[Math.floor(Math.random() * goalTemplates.length)];
        const newGoal = {
            id: Date.now().toString(),
            name: template.name,
            icon: template.icon,
            current: 0,
            target: template.target,
            color: template.color
        };
        
        setGoals(prev => [...prev, newGoal]);
        setSelectedGoal(newGoal.id);
        
        toast({
            title: "New Goal Added",
            description: `${template.name} has been added to your savings goals!`,
        });
    };

    const handleAddMoney = () => {
        const addAmount = 100;
        setGoals(prev => prev.map(goal => 
            goal.id === selectedGoal 
                ? { ...goal, current: Math.min(goal.current + addAmount, goal.target) }
                : goal
        ));
        
        toast({
            title: "Money Added",
            description: `$${addAmount} added to ${currentGoal.name}!`,
        });
    };

    return (
        <Card className="bg-white/95 dark:bg-black/80 border-white/30 dark:border-white/20 hover:shadow-xl transition-all duration-300 border-2 backdrop-blur-sm transform hover:scale-105">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-card-foreground text-lg">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="font-semibold">Savings Goals</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Goal selector */}
                <div className="flex flex-wrap gap-2">
                    {goals.map((goal) => {
                        const IconComponent = goal.icon;
                        return (
                            <Button
                                key={goal.id}
                                variant={selectedGoal === goal.id ? "default" : "outline"}
                                size="sm"
                                onClick={() => handleGoalSelect(goal.id)}
                                className="transition-all duration-300 hover:scale-105"
                            >
                                <IconComponent className="h-3 w-3 mr-1" />
                                {goal.name}
                            </Button>
                        );
                    })}
                    <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleAddGoal}
                        className="transition-all duration-300 hover:scale-105"
                    >
                        <Plus className="h-3 w-3 mr-1" />
                        Add Goal
                    </Button>
                </div>

                {/* Current goal display */}
                <div className="text-center animate-fade-in">
                    <div className={`text-4xl font-bold ${currentGoal.color} transition-all duration-500`}>
                        ${currentGoal.current.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                        {currentGoal.name} Progress
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-medium">Goal Progress</span>
                        <span className="text-card-foreground font-semibold">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-3 transition-all duration-500" />
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-muted/50 p-3 rounded-xl border border-muted transition-all duration-300 hover:bg-muted/70">
                        <div className="text-xl font-bold text-primary">
                            ${currentGoal.target.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground font-medium">Target</div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-xl border border-muted transition-all duration-300 hover:bg-muted/70">
                        <div className="text-xl font-bold text-secondary">
                            ${(currentGoal.target - currentGoal.current).toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground font-medium">Remaining</div>
                    </div>
                </div>

                <Button 
                    onClick={handleAddMoney}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-300 hover:scale-105"
                    disabled={progress >= 100}
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Add $100 to Goal
                </Button>
            </CardContent>
        </Card>
    );
};

export default MonthlyProgressCard;
