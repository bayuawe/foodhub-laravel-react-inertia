import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
    Download,
    BarChart3,
    DollarSign,
    ShoppingBag,
    Store,
    TrendingUp,
} from 'lucide-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import MetricCard from '@/Components/MetricCard';
import Section from '@/Components/Section';
import Card from '@/Components/Card';
import Badge from '@/Components/Badge';
import Button from '@/Components/Button';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export default function Dashboard() {
    // Static Data
    const salesTrendData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
            {
                label: 'This Year',
                data: [28, 65, 42, 78],
                borderColor: '#EF3F09',
                backgroundColor: 'rgba(239, 63, 9, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Last Year',
                data: [35, 48, 58, 52],
                borderColor: '#82D9D7',
                backgroundColor: 'rgba(130, 217, 215, 0.1)',
                fill: true,
                tension: 0.4
            }
        ]
    };

    const topFoodsData = {
        labels: ['Pizza', 'Burgers', 'Salads', 'Steaks'],
        datasets: [{
            data: [35, 25, 20, 20],
            backgroundColor: ['#22C55E', '#C5E151', '#82D9D7', '#EAB308']
        }]
    };

    const restaurantPerformanceData = {
        labels: ['Bella Vista', 'Ocean Breeze', 'Grill House', 'Green Garden'],
        datasets: [{
            label: 'Revenue ($K)',
            data: [42, 35, 28, 22],
            backgroundColor: ['#C5E151', '#82D9D7', '#FAAC7B', '#C5E151']
        }]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
        maintainAspectRatio: false,
    };

    return (
        <AuthenticatedLayout>
            <Head title="Sales Overview" />

            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
                <div>
                    <h1 className="text-foreground text-2xl md:text-3xl font-bold mb-1">Sales Overview</h1>
                    <p className="text-gray-500 text-sm md:text-base">Track revenue, performance, and sales analytics across all restaurants</p>
                </div>
                <div className="flex items-center gap-2 md:gap-3 ml-auto md:ml-0">
                    <Button variant="secondary" className="gap-2 bg-white">
                        <Download className="w-4 h-4" />
                        <span>Export Report</span>
                    </Button>
                    <Button variant="primary" className="gap-2">
                        <BarChart3 className="w-4 h-4" />
                        <span>View Analytics</span>
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                <MetricCard
                    title="Total Revenue"
                    value="$45K"
                    trend="+18% this month"
                    icon={DollarSign}
                    iconBgColor="bg-accent-lime"
                />
                <MetricCard
                    title="Total Orders"
                    value="1,248"
                    trend="+12% this month"
                    icon={ShoppingBag}
                    iconBgColor="bg-accent-teal"
                />
                <MetricCard
                    title="Active Restaurants"
                    value="24"
                    trend="3 new this month"
                    trendColor="text-blue-600"
                    icon={Store}
                    iconBgColor="bg-accent-peach"
                />
                <MetricCard
                    title="Average Order"
                    value="$36"
                    trend="+8% this month"
                    icon={TrendingUp}
                    iconBgColor="bg-accent-lime"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <Section title="Monthly Sales Trend">
                    <div className="w-full h-70">
                        <Line options={chartOptions} data={salesTrendData} />
                    </div>
                </Section>

                <Section title="Top Selling Foods">
                    <div className="w-full h-70">
                        <Doughnut options={chartOptions} data={topFoodsData} />
                    </div>
                </Section>
            </div>

            {/* Restaurant Performance Chart */}
            <div className="mb-6 md:mb-8">
                <Section title="Restaurant Performance Comparison">
                    <div className="w-full h-70">
                        <Bar options={chartOptions} data={restaurantPerformanceData} />
                    </div>
                </Section>
            </div>

            {/* Food List and Restaurant List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {/* Top Foods List */}
                <Section
                    title="Top Performing Foods"
                    action={<a href="#" className="cursor-pointer text-primary hover:underline">View All</a>}
                >
                    <div className="space-y-4">
                        <div className="flex gap-4 border-b border-gray-100 pb-4">
                            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop" alt="Margherita Pizza" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-foreground text-sm font-bold mb-1 truncate">Margherita Pizza</h4>
                                <p className="text-gray-500 text-xs mb-2 line-clamp-2">Classic Italian pizza with fresh tomatoes and mozzarella</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-xs">$18 • 342 orders</span>
                                    <Badge variant="success">Best Seller</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 border-b border-gray-100 pb-4">
                            <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=100&h=100&fit=crop" alt="Chicken Burger" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-foreground text-sm font-bold mb-1 truncate">Chicken Burger</h4>
                                <p className="text-gray-500 text-xs mb-2 line-clamp-2">Grilled chicken breast with lettuce and special sauce</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-xs">$15 • 298 orders</span>
                                    <Badge variant="info">Popular</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 border-b border-gray-100 pb-4">
                            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=100&h=100&fit=crop" alt="Caesar Salad" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-foreground text-sm font-bold mb-1 truncate">Caesar Salad</h4>
                                <p className="text-gray-500 text-xs mb-2 line-clamp-2">Fresh romaine lettuce with parmesan and croutons</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-xs">$12 • 185 orders</span>
                                    <Badge variant="warning">Trending</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=100&h=100&fit=crop" alt="Spaghetti Carbonara" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-foreground text-sm font-bold mb-1 truncate">Spaghetti Carbonara</h4>
                                <p className="text-gray-500 text-xs mb-2 line-clamp-2">Traditional Italian pasta with cream and bacon</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-xs">$16 • 142 orders</span>
                                    <Badge variant="info">Classic</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Top Restaurants List */}
                <Section
                    title="Top Performing Restaurants"
                    action={<a href="#" className="cursor-pointer text-primary hover:underline">View All</a>}
                >
                    <div className="space-y-4">
                        <div className="flex gap-4 border-b border-gray-100 pb-4">
                            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop" alt="Bella Vista Restaurant" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-foreground text-sm font-bold mb-1 truncate">Bella Vista Restaurant</h4>
                                <p className="text-gray-500 text-xs mb-2 line-clamp-2">Italian • Downtown • 4.8★ rating</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-xs">$12.5K revenue • 485 orders</span>
                                    <Badge variant="success">Top Rated</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 border-b border-gray-100 pb-4">
                            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop" alt="Ocean Breeze Cafe" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-foreground text-sm font-bold mb-1 truncate">Ocean Breeze Cafe</h4>
                                <p className="text-gray-500 text-xs mb-2 line-clamp-2">Seafood • Waterfront • 4.6★ rating</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-xs">$8.9K revenue • 356 orders</span>
                                    <Badge variant="info">Popular</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=100&h=100&fit=crop" alt="Spice Route Kitchen" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-foreground text-sm font-bold mb-1 truncate">Spice Route Kitchen</h4>
                                <p className="text-gray-500 text-xs mb-2 line-clamp-2">Indian • East Side • 4.4★ rating</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-xs">$5.9K revenue • 267 orders</span>
                                    <Badge variant="alert">Authentic</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </AuthenticatedLayout>
    );
}
