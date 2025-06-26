
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const UpcomingBillsCard = () => {
    return (
        <Card className="bg-white/95 dark:bg-black/80 border-white/30 dark:border-white/20 hover:shadow-xl transition-all duration-300 border-2 backdrop-blur-sm">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-card-foreground text-lg">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                        <Calendar className="h-5 w-5 text-destructive" />
                    </div>
                    <span className="font-semibold">Upcoming Bills</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl border border-muted">
                    <div>
                        <div className="font-semibold text-card-foreground">Electric Bill</div>
                        <div className="text-sm text-muted-foreground">Due in 3 days</div>
                    </div>
                    <div className="text-destructive font-bold text-lg">$85</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl border border-muted">
                    <div>
                        <div className="font-semibold text-card-foreground">Internet</div>
                        <div className="text-sm text-muted-foreground">Due in 5 days</div>
                    </div>
                    <div className="text-destructive font-bold text-lg">$60</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl border border-muted">
                    <div>
                        <div className="font-semibold text-card-foreground">Phone</div>
                        <div className="text-sm text-muted-foreground">Due in 7 days</div>
                    </div>
                    <div className="text-destructive font-bold text-lg">$45</div>
                </div>
            </CardContent>
        </Card>
    );
};

export default UpcomingBillsCard;
