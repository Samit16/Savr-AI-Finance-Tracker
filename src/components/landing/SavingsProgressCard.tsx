
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const SavingsProgressCard = () => {
    return (
        <Card className="bg-white/95 dark:bg-black/80 border-white/30 dark:border-white/20 mb-8 border-2 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-card-foreground text-2xl font-bold">
                    Savings Progress
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">Track your financial goals with our progress visualization</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div className="flex justify-between text-lg">
                        <span className="text-muted-foreground font-medium">Emergency Fund Goal</span>
                        <span className="text-card-foreground font-bold">$7,500 / $10,000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-8 border border-muted">
                        <div
                            className="bg-gradient-to-r from-primary to-secondary h-8 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                            style={{ width: '75%' }}
                        >
                            <span className="text-white font-semibold text-sm">75%</span>
                        </div>
                    </div>
                    <div className="text-lg text-secondary font-semibold">75% complete - You're doing great!</div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SavingsProgressCard;
