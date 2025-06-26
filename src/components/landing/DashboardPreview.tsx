
import CalculatorCard from './CalculatorCard';
import BudgetTrackerCard from './BudgetTrackerCard';
import UpcomingBillsCard from './UpcomingBillsCard';
import RecentTransactionsCard from './RecentTransactionsCard';
import MonthlyProgressCard from './MonthlyProgressCard';
import SavingsProgressCard from './SavingsProgressCard';

const DashboardPreview = () => {
    return (
        <section className="py-20 bg-white/10 dark:bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Calculator and Budget Tracker Row */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <CalculatorCard />
                    <BudgetTrackerCard />
                </div>

                {/* Second Row - Three Cards */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <UpcomingBillsCard />
                    <RecentTransactionsCard />
                    <MonthlyProgressCard />
                </div>

                {/* Progress Bar Section */}
                <SavingsProgressCard />
            </div>
        </section>
    );
};

export default DashboardPreview;
