
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Coffee, Car, ShoppingCart, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const RecentTransactionsCard = () => {
    const [transactions, setTransactions] = useState([
        {
            id: '1',
            name: 'Starbucks',
            time: 'Today, 9:30 AM',
            amount: -5.50,
            icon: Coffee,
            category: 'Food & Drink'
        },
        {
            id: '2',
            name: 'Uber',
            time: 'Yesterday, 6:15 PM',
            amount: -12.30,
            icon: Car,
            category: 'Transport'
        },
        {
            id: '3',
            name: 'Grocery Store',
            time: 'Yesterday, 2:00 PM',
            amount: -67.89,
            icon: ShoppingCart,
            category: 'Groceries'
        }
    ]);
    const { toast } = useToast();

    const handleAddTransaction = () => {
        const newTransactions = [
            { name: 'Netflix', amount: -15.99, icon: BarChart3, category: 'Entertainment' },
            { name: 'Gas Station', amount: -45.00, icon: Car, category: 'Transport' },
            { name: 'Restaurant', amount: -28.50, icon: Coffee, category: 'Food & Drink' },
        ];
        
        const randomTransaction = newTransactions[Math.floor(Math.random() * newTransactions.length)];
        const newTransaction = {
            id: Date.now().toString(),
            name: randomTransaction.name,
            time: 'Just now',
            amount: randomTransaction.amount,
            icon: randomTransaction.icon,
            category: randomTransaction.category
        };
        
        setTransactions(prev => [newTransaction, ...prev.slice(0, 4)]);
        
        toast({
            title: "Transaction Added",
            description: `${randomTransaction.name} transaction of $${Math.abs(randomTransaction.amount)} has been recorded.`,
        });
    };

    const handleDeleteTransaction = (id: string) => {
        const transaction = transactions.find(t => t.id === id);
        setTransactions(prev => prev.filter(t => t.id !== id));
        
        toast({
            title: "Transaction Deleted",
            description: `${transaction?.name} transaction has been removed.`,
        });
    };

    const handleTransactionClick = (transaction: any) => {
        toast({
            title: "Transaction Details",
            description: `${transaction.name} - ${transaction.category} - $${Math.abs(transaction.amount)}`,
        });
    };

    return (
        <Card className="bg-white/95 dark:bg-black/80 border-white/30 dark:border-white/20 hover:shadow-xl transition-all duration-300 border-2 backdrop-blur-sm transform hover:scale-105">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-card-foreground text-lg">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <BarChart3 className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-semibold">Recent Transactions</span>
                    </div>
                    <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={handleAddTransaction}
                        className="transition-all duration-300 hover:scale-105"
                    >
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {transactions.map((transaction, index) => {
                    const IconComponent = transaction.icon;
                    return (
                        <div 
                            key={transaction.id}
                            className="flex justify-between items-center p-4 bg-muted/50 rounded-xl border border-muted transition-all duration-300 hover:bg-muted/70 hover:scale-105 cursor-pointer group"
                            onClick={() => handleTransactionClick(transaction)}
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <IconComponent className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <div className="font-semibold text-card-foreground">{transaction.name}</div>
                                    <div className="text-xs text-muted-foreground">{transaction.time}</div>
                                    <div className="text-xs text-muted-foreground">{transaction.category}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-destructive font-bold text-lg">
                                    ${Math.abs(transaction.amount).toFixed(2)}
                                </div>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteTransaction(transaction.id);
                                    }}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-6 w-6 p-0"
                                >
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    );
                })}
                
                {transactions.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                        No transactions yet. Click "Add" to create your first transaction.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default RecentTransactionsCard;
