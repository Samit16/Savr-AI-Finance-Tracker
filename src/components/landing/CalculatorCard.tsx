
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Plus } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const CalculatorCard = () => {
    const [currency, setCurrency] = useState('USD');
    const [monthlyIncome, setMonthlyIncome] = useState('');
    const [monthlyExpenses, setMonthlyExpenses] = useState('');
    const [transactions, setTransactions] = useState<Array<{id: string, amount: number, description: string}>>([]);
    const { toast } = useToast();
    
    const currencies = [
        { value: 'USD', label: 'USD ($)', symbol: '$' },
        { value: 'INR', label: 'INR (₹)', symbol: '₹' },
        { value: 'EUR', label: 'EUR (€)', symbol: '€' },
        { value: 'JPY', label: 'JPY (¥)', symbol: '¥' },
        { value: 'GBP', label: 'GBP (£)', symbol: '£' },
    ];

    const selectedCurrency = currencies.find(c => c.value === currency);
    const income = parseFloat(monthlyIncome) || 0;
    const expenses = parseFloat(monthlyExpenses) || 0;
    const availableBalance = income - expenses;

    const handleAddTransaction = () => {
        if (income === 0) {
            toast({
                title: "Add Income First",
                description: "Please enter your monthly income before adding transactions.",
                variant: "destructive"
            });
            return;
        }

        const newTransaction = {
            id: Date.now().toString(),
            amount: availableBalance,
            description: "Available Balance Calculated"
        };
        
        setTransactions(prev => [newTransaction, ...prev.slice(0, 4)]);
        
        toast({
            title: "Transaction Added",
            description: `${selectedCurrency?.symbol}${availableBalance.toFixed(2)} available balance calculated and saved.`,
        });
    };

    return (
        <Card className="bg-white/95 dark:bg-black/80 border-white/30 dark:border-white/20 hover:shadow-xl transition-all duration-300 border-2 backdrop-blur-sm transform hover:scale-105">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-card-foreground text-xl">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Calculator className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-semibold">Quick Calculator</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Currency Selector */}
                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Currency</label>
                    <Select value={currency} onValueChange={setCurrency}>
                        <SelectTrigger className="bg-input border-border text-foreground h-12">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                            {currencies.map((curr) => (
                                <SelectItem key={curr.value} value={curr.value}>
                                    {curr.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Monthly Income</label>
                        <Input 
                            type="number" 
                            placeholder={`${selectedCurrency?.symbol}5,000`}
                            value={monthlyIncome}
                            onChange={(e) => setMonthlyIncome(e.target.value)}
                            className="bg-input border-border text-foreground h-12 transition-all duration-200 hover:border-primary/50 focus:border-primary" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Monthly Expenses</label>
                        <Input 
                            type="number" 
                            placeholder={`${selectedCurrency?.symbol}3,500`}
                            value={monthlyExpenses}
                            onChange={(e) => setMonthlyExpenses(e.target.value)}
                            className="bg-input border-border text-foreground h-12 transition-all duration-200 hover:border-primary/50 focus:border-primary" 
                        />
                    </div>
                </div>
                
                <div className={`p-6 rounded-xl border transition-all duration-300 hover:bg-secondary/15 ${
                    availableBalance >= 0 ? 'bg-secondary/10 border-secondary/20' : 'bg-destructive/10 border-destructive/20'
                }`}>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground font-medium">Available Balance</span>
                        <span className={`text-3xl font-bold ${
                            availableBalance >= 0 ? 'text-secondary' : 'text-destructive'
                        }`}>
                            {selectedCurrency?.symbol}{availableBalance.toFixed(2)}
                        </span>
                    </div>
                </div>

                <Button 
                    onClick={handleAddTransaction}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 font-semibold transition-all duration-300 hover:scale-105"
                >
                    <Plus className="h-5 w-5 mr-2" />
                    Add Transaction
                </Button>

                {/* Recent Calculations */}
                {transactions.length > 0 && (
                    <div className="space-y-2 animate-fade-in">
                        <h4 className="text-sm font-medium text-muted-foreground">Recent Calculations</h4>
                        {transactions.map((transaction) => (
                            <div key={transaction.id} className="flex justify-between items-center p-2 bg-muted/30 rounded-lg">
                                <span className="text-sm text-card-foreground">{transaction.description}</span>
                                <span className="text-sm font-bold text-secondary">
                                    {selectedCurrency?.symbol}{transaction.amount.toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default CalculatorCard;
