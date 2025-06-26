
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PieChart, TrendingDown, Award, Plus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const BudgetTrackerCard = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [budgetItems, setBudgetItems] = useState([
        { name: 'Groceries', spent: 450, budget: 500, saved: 50 },
        { name: 'Rent', spent: 1200, budget: 1200, saved: 0 },
        { name: 'Entertainment', spent: 120, budget: 200, saved: 80 },
        { name: 'Transport', spent: 180, budget: 250, saved: 70 },
    ]);
    const { toast } = useToast();
    
    const weeklyData = [
        { week: 'W1', amount: 120 },
        { week: 'W2', amount: 95 },
        { week: 'W3', amount: 110 },
        { week: 'W4', amount: 85 },
    ];

    const handleAddCategory = () => {
        const newCategory = {
            name: 'New Category',
            spent: 0,
            budget: 100,
            saved: 100
        };
        setBudgetItems(prev => [...prev, newCategory]);
        toast({
            title: "Category Added",
            description: "New budget category has been added. You can now track expenses for it.",
        });
    };

    const handleCategoryClick = (categoryName: string) => {
        setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
        toast({
            title: "Category Selected",
            description: `Viewing ${categoryName} spending analysis`,
        });
    };

    return (
        <Card className="bg-white/95 dark:bg-black/80 border-white/30 dark:border-white/20 hover:shadow-xl transition-all duration-300 border-2 backdrop-blur-sm transform hover:scale-105">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-card-foreground text-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                            <PieChart className="h-6 w-6 text-secondary" />
                        </div>
                        <span className="font-semibold">Budget Tracker</span>
                    </div>
                    <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={handleAddCategory}
                        className="transition-all duration-300 hover:scale-105"
                    >
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Savings badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {budgetItems.filter(item => item.saved > 0).map((item) => (
                        <Badge key={item.name} variant="secondary" className="animate-fade-in cursor-pointer hover:bg-secondary/80">
                            <Award className="h-3 w-3 mr-1" />
                            You saved ${item.saved} in {item.name.toLowerCase()}!
                        </Badge>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {budgetItems.map((item) => (
                        <div 
                            key={item.name}
                            className={`bg-muted/50 p-4 rounded-xl border border-muted cursor-pointer transition-all duration-300 hover:bg-muted/70 hover:scale-105 ${
                                selectedCategory === item.name ? 'ring-2 ring-primary' : ''
                            }`}
                            onClick={() => handleCategoryClick(item.name)}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="text-sm text-muted-foreground font-medium">{item.name}</div>
                                {item.saved > 0 && <TrendingDown className="h-3 w-3 text-green-500" />}
                            </div>
                            <div className="text-lg font-bold text-card-foreground">${item.spent} / ${item.budget}</div>
                            <Progress 
                                value={(item.spent / item.budget) * 100} 
                                className="mt-3 h-2 transition-all duration-500" 
                            />
                        </div>
                    ))}
                </div>

                {/* Weekly spending graph */}
                {selectedCategory && (
                    <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-muted animate-fade-in">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-sm font-medium text-card-foreground">
                                {selectedCategory} - Weekly Spending
                            </h4>
                            <Button size="sm" variant="ghost" onClick={() => setSelectedCategory(null)}>
                                Close
                            </Button>
                        </div>
                        <div className="h-32">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={weeklyData}>
                                    <XAxis dataKey="week" axisLine={false} tickLine={false} />
                                    <YAxis hide />
                                    <Line 
                                        type="monotone" 
                                        dataKey="amount" 
                                        stroke="hsl(var(--primary))" 
                                        strokeWidth={3}
                                        dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default BudgetTrackerCard;
