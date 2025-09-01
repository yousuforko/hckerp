import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Alert, AlertDescription } from "./ui/alert";
import { 
  DollarSign, 
  MessageSquare, 
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Zap,
  Activity,
  Clock,
  BarChart3,
  Target,
  Workflow,
  Database,
  Brain,
  Car,
  Utensils,
  Hammer,
  Scale,
  Wrench,
  Building,
  Receipt,
  Wallet
} from "lucide-react";

export function EnhancedDashboard() {
  const dashboardStats = [
    {
      title: "Total Budget Utilization",
      value: "৳47.2L",
      total: "৳58.5L",
      percentage: 80.7,
      change: "+2.1%",
      trend: "up",
      icon: DollarSign,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Auto-Rejections (Month)",
      value: "24",
      total: "৳4.2L Saved",
      percentage: 15.2,
      change: "+8.3%",
      trend: "up",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "ERP Auto-Updates",
      value: "1,156",
      total: "96.3% Success",
      percentage: 96.3,
      change: "+1.2%",
      trend: "up",
      icon: Zap,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Pending Approvals",
      value: "8",
      total: "৳2.1L Value",
      percentage: 0,
      change: "-12.5%",
      trend: "down",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "auto_rejection",
      title: "Travel expense auto-rejected",
      description: "৳৪৫,০০০ request exceeded budget limit",
      user: "রহিম উদ্দিন",
      time: "2 minutes ago",
      icon: XCircle,
      color: "text-red-600"
    },
    {
      id: 2,
      type: "erp_update",
      title: "Expense auto-updated to ERP",
      description: "৳৮,৫০০ client lunch successfully processed",
      user: "আমিনুল হক",
      time: "8 minutes ago",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      id: 3,
      type: "workflow",
      title: "Moved to Management Review",
      description: "৳২৫,০০০ equipment purchase request",
      user: "আব্দুল কাদের",
      time: "15 minutes ago",
      icon: Workflow,
      color: "text-blue-600"
    },
    {
      id: 4,
      type: "budget_alert",
      title: "Budget threshold exceeded",
      description: "Food category reached 110% of monthly budget",
      user: "System",
      time: "25 minutes ago",
      icon: AlertTriangle,
      color: "text-orange-600"
    }
  ];

  const budgetCategories = [
    {
      name: "Travel",
      icon: Car,
      allocated: 500000,
      spent: 475000,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      name: "Food",
      icon: Utensils,
      allocated: 150000,
      spent: 148000,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      name: "Equipment",
      icon: Hammer,
      allocated: 800000,
      spent: 620000,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      name: "Legal",
      icon: Scale,
      allocated: 200000,
      spent: 110000,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      name: "Repair",
      icon: Wrench,
      allocated: 100000,
      spent: 72000,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      name: "Assets",
      icon: Building,
      allocated: 1200000,
      spent: 950000,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    }
  ];

  const monthlyBudgetSheets = [
    {
      month: "November 2024",
      totalAllocated: 3450000,
      totalUsed: 2775000,
      salaryAllocated: 2500000,
      salaryUsed: 2500000,
      categories: [
        { name: "Travel", allocated: 500000, used: 475000, percentage: 95.0 },
        { name: "Food", allocated: 150000, used: 148000, percentage: 98.7 },
        { name: "Equipment", allocated: 800000, used: 620000, percentage: 77.5 },
        { name: "Legal", allocated: 200000, used: 110000, percentage: 55.0 },
        { name: "Repair", allocated: 100000, used: 72000, percentage: 72.0 },
        { name: "Assets", allocated: 1200000, used: 950000, percentage: 79.2 }
      ]
    },
    {
      month: "October 2024",
      totalAllocated: 3450000,
      totalUsed: 2918000,
      salaryAllocated: 2500000,
      salaryUsed: 2500000,
      categories: [
        { name: "Travel", allocated: 500000, used: 485000, percentage: 97.0 },
        { name: "Food", allocated: 150000, used: 145000, percentage: 96.7 },
        { name: "Equipment", allocated: 800000, used: 750000, percentage: 93.8 },
        { name: "Legal", allocated: 200000, used: 98000, percentage: 49.0 },
        { name: "Repair", allocated: 100000, used: 98000, percentage: 98.0 },
        { name: "Assets", allocated: 1200000, used: 842000, percentage: 70.2 }
      ]
    }
  ];

  const totalAllocated = budgetCategories.reduce((sum, cat) => sum + cat.allocated, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const overallUtilization = (totalSpent / totalAllocated) * 100;

  const getUtilizationColor = (percentage: number) => {
    if (percentage > 100) return "text-red-600";
    if (percentage > 90) return "text-orange-600";
    if (percentage > 75) return "text-yellow-600";
    return "text-green-600";
  };

  const getProgressColor = (percentage: number) => {
    if (percentage > 100) return "bg-red-600";
    if (percentage > 90) return "bg-orange-500";
    if (percentage > 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getBudgetTierColor = (percentage: number) => {
    if (percentage >= 85) return "text-red-600 bg-red-100";
    if (percentage >= 50 && percentage <= 77) return "text-yellow-600 bg-yellow-100";
    return "text-green-600 bg-green-100";
  };

  const getBudgetTierStatus = (percentage: number) => {
    if (percentage >= 85) return "High Usage";
    if (percentage >= 50 && percentage <= 77) return "Moderate";
    return "Low Usage";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">MonstarPulse Dashboard</h2>
          <p className="text-sm text-muted-foreground">
            Real-time ERP monitoring with intelligent budget management and automated workflows.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 text-xs">
            <Activity className="h-3 w-3 mr-1" />
            All Systems Active
          </Badge>
          <Button variant="outline" size="sm">
            <BarChart3 className="h-3 w-3 mr-1" />
            Analytics
          </Button>
        </div>
      </div>

      {/* System Status Alert */}
      <Alert className="border-orange-200 bg-orange-50 py-2">
        <Shield className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800 text-sm">
          <strong>Budget Protection Active:</strong> Auto-rejection enabled for 2 categories. 24 requests rejected this month, saving ৳4.2L.
        </AlertDescription>
      </Alert>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center space-x-1 text-xs ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    <span>{stat.change}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-xs font-medium text-muted-foreground">{stat.title}</h3>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.total}</p>
                  
                  {stat.percentage > 0 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{stat.percentage.toFixed(1)}%</span>
                      </div>
                      <Progress value={Math.min(stat.percentage, 100)} className="h-1" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Activity */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span>Real-time Activity Feed</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-start space-x-3 p-2 bg-muted/30 rounded-lg">
                  <div className={`p-1 rounded-full bg-white`}>
                    <Icon className={`h-3 w-3 ${activity.color}`} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{activity.title}</h4>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">User: {activity.user}</p>
                  </div>
                </div>
              );
            })}
            
            <Button variant="outline" className="w-full mt-3" size="sm">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        {/* Current Month Budget Overview */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center space-x-2">
              <Target className="h-4 w-4" />
              <span>November 2024 Budget Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {budgetCategories.map((budget) => {
              const Icon = budget.icon;
              const usage = Math.min((budget.spent / budget.allocated) * 100, 100);
              return (
                <div key={budget.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`p-1 rounded ${budget.bgColor}`}>
                        <Icon className={`h-3 w-3 ${budget.color}`} />
                      </div>
                      <span className="font-medium text-sm">{budget.name}</span>
                      <Badge className={getBudgetTierColor(usage)} variant="secondary">
                        {getBudgetTierStatus(usage)}
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {usage.toFixed(1)}%
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <Progress 
                      value={usage} 
                      className={`h-1 ${
                        usage >= 85 ? '[&>div]:bg-red-500' :
                        usage >= 50 && usage <= 77 ? '[&>div]:bg-yellow-500' : 
                        '[&>div]:bg-green-500'
                      }`}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Used: ৳{(budget.spent / 1000).toFixed(0)}K</span>
                      <span>Budget: ৳{(budget.allocated / 1000).toFixed(0)}K</span>
                    </div>
                  </div>
                </div>
              );
            })}
            
            <Button variant="outline" className="w-full mt-3" size="sm">
              <DollarSign className="h-3 w-3 mr-1" />
              Manage Budgets
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Budget Sheets Overview */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {monthlyBudgetSheets.map((sheet) => {
          const totalUsagePercentage = ((sheet.totalUsed - sheet.salaryUsed) / (sheet.totalAllocated - sheet.salaryAllocated)) * 100;
          
          return (
            <Card key={sheet.month}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center justify-between">
                  <span>{sheet.month} Budget Sheet</span>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">
                    {totalUsagePercentage.toFixed(1)}% Used
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Salary Section */}
                <div className="p-2 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-blue-900 text-sm">Salary (Fixed)</span>
                    <span className="text-xs text-blue-700">100% Utilized</span>
                  </div>
                  <Progress value={100} className="h-1 [&>div]:bg-blue-500" />
                  <div className="flex justify-between text-xs text-blue-700 mt-1">
                    <span>Used: ৳{(sheet.salaryUsed / 100000).toFixed(1)}L</span>
                    <span>Budget: ৳{(sheet.salaryAllocated / 100000).toFixed(1)}L</span>
                  </div>
                </div>

                {/* Other Categories */}
                <div className="space-y-2">
                  <h4 className="font-medium text-xs text-muted-foreground">Expense Categories</h4>
                  {sheet.categories.map((category) => {
                    const percentage = Math.min(category.percentage, 100);
                    return (
                      <div key={category.name} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-medium">{category.name}</span>
                            <Badge className={getBudgetTierColor(percentage)} variant="secondary">
                              {getBudgetTierStatus(percentage)}
                            </Badge>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {percentage.toFixed(1)}%
                          </span>
                        </div>
                        
                        <div className="space-y-1">
                          <Progress 
                            value={percentage} 
                            className={`h-1 ${
                              percentage >= 85 ? '[&>div]:bg-red-500' :
                              percentage >= 50 && percentage <= 77 ? '[&>div]:bg-yellow-500' : 
                              '[&>div]:bg-green-500'
                            }`}
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>৳{(category.used / 1000).toFixed(0)}K</span>
                            <span>৳{(category.allocated / 1000).toFixed(0)}K</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Summary */}
                <div className="pt-2 border-t">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Total (excl. Salary):</span>
                    <span className="font-medium">
                      ৳{((sheet.totalUsed - sheet.salaryUsed) / 100000).toFixed(1)}L / ৳{((sheet.totalAllocated - sheet.salaryAllocated) / 100000).toFixed(1)}L
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Salary:</span>
                    <span className="font-medium text-blue-600">
                      ৳{(sheet.salaryUsed / 100000).toFixed(1)}L (100% Used)
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-medium pt-1">
                    <span>Grand Total:</span>
                    <span>৳{(sheet.totalUsed / 100000).toFixed(1)}L / ৳{(sheet.totalAllocated / 100000).toFixed(1)}L</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Quick Actions & System Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" className="h-12 flex-col space-y-1" size="sm">
              <Workflow className="h-4 w-4" />
              <span className="text-xs">Approval Queue</span>
            </Button>
            <Button variant="outline" className="h-12 flex-col space-y-1" size="sm">
              <Database className="h-4 w-4" />
              <span className="text-xs">ERP Sync</span>
            </Button>
            <Button variant="outline" className="h-12 flex-col space-y-1" size="sm">
              <Shield className="h-4 w-4" />
              <span className="text-xs">Budget Settings</span>
            </Button>
            <Button variant="outline" className="h-12 flex-col space-y-1" size="sm">
              <MessageSquare className="h-4 w-4" />
              <span className="text-xs">Communications</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}