import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Alert, AlertDescription } from "./ui/alert";
import { 
  MessageSquare, 
  Users, 
  Clock, 
  TrendingUp, 
  Brain, 
  Database, 
  DollarSign, 
  CheckCircle,
  AlertTriangle,
  Car,
  Utensils,
  Wrench,
  Scale,
  Hammer,
  Building,
  Receipt,
  Wallet,
  TrendingDown,
  ArrowUp,
  ArrowDown
} from "lucide-react";

export function Dashboard() {
  const currentMonth = "December 2024";
  
  // Budget categories with monthly allocation and spending
  const budgetCategories = [
    {
      name: "Travel",
      icon: Car,
      allocated: 500000,
      spent: 425000,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      name: "Food",
      icon: Utensils,
      allocated: 150000,
      spent: 165000,
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
      spent: 85000,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      name: "Repair",
      icon: Wrench,
      allocated: 100000,
      spent: 135000,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      name: "New Asset",
      icon: Building,
      allocated: 1200000,
      spent: 950000,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      name: "TDS/VDS",
      icon: Receipt,
      allocated: 300000,
      spent: 245000,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      name: "Salary",
      icon: Wallet,
      allocated: 2500000,
      spent: 2500000,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    }
  ];

  const stats = [
    {
      title: "Active Conversations",
      value: "24",
      change: "+12%",
      icon: MessageSquare,
      color: "text-blue-600",
    },
    {
      title: "AI Detected Transactions",
      value: "47",
      change: "+23%",
      icon: Brain,
      color: "text-purple-600",
    },
    {
      title: "Auto-Transferred to ERP",
      value: "32",
      change: "+18%",
      icon: Database,
      color: "text-green-600",
    },
    {
      title: "Detection Accuracy",
      value: "94.2%",
      change: "+2.1%",
      icon: CheckCircle,
      color: "text-emerald-600",
    },
  ];

  // Budget alerts
  const budgetAlerts = budgetCategories.filter(cat => 
    (cat.spent / cat.allocated) > 1 || (cat.spent / cat.allocated) > 0.9
  );

  const totalAllocated = budgetCategories.reduce((sum, cat) => sum + cat.allocated, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const overallUtilization = (totalSpent / totalAllocated) * 100;

  const recentMessages = [
    {
      id: 1,
      sender: "Fatima Rahman",
      platform: "WhatsApp",
      message: "Travel expense for client meeting - ৳১৫,০০০ taxi fare",
      time: "2m ago",
      status: "ai_detected",
      type: "travel",
      amount: 15000,
      category: "Travel"
    },
    {
      id: 2,
      sender: "Aminul Haque",
      platform: "Slack", 
      message: "Office lunch expense - ৳৮,৫০০ reimbursement needed",
      time: "5m ago",
      status: "auto_transferred",
      type: "food",
      amount: 8500,
      category: "Food"
    },
    {
      id: 3,
      sender: "Rashida Khatun",
      platform: "WhatsApp",
      message: "New laptop purchase request: ৳১,২০,০০০",
      time: "12m ago",
      status: "pending_review",
      type: "equipment",
      amount: 120000,
      category: "Equipment"
    },
    {
      id: 4,
      sender: "Mohammad Karim",
      platform: "Slack",
      message: "Legal consultation fee - ৳২৫,০০০",
      time: "25m ago",
      status: "mapped_to_erp",
      type: "legal",
      amount: 25000,
      category: "Legal"
    },
  ];

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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>MonstarPulse Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor AI-powered expense tracking and budget management for {currentMonth}.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="px-3 py-1">
            {currentMonth}
          </Badge>
          <Button variant="outline" size="sm">
            Export Report
          </Button>
        </div>
      </div>

      {/* Budget Alerts */}
      {budgetAlerts.length > 0 && (
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>Budget Alert:</strong> {budgetAlerts.length} categories exceed 90% allocation. 
            <span className="ml-2">
              {budgetAlerts.map(cat => cat.name).join(", ")} require attention.
            </span>
          </AlertDescription>
        </Alert>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span>
                  {" "}from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Overall Budget Summary */}
      <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Monthly Budget Overview</span>
            <Badge 
              variant={overallUtilization > 90 ? "destructive" : "default"}
              className="text-sm px-3 py-1"
            >
              {overallUtilization.toFixed(1)}% Utilized
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-700">৳{(totalAllocated / 100000).toFixed(1)}L</p>
              <p className="text-sm text-muted-foreground">Total Allocated</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">৳{(totalSpent / 100000).toFixed(1)}L</p>
              <p className="text-sm text-muted-foreground">Total Spent</p>
            </div>
            <div className="text-center">
              <p className={`text-2xl font-bold ${(totalAllocated - totalSpent) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ৳{(Math.abs(totalAllocated - totalSpent) / 100000).toFixed(1)}L
              </p>
              <p className="text-sm text-muted-foreground">
                {(totalAllocated - totalSpent) >= 0 ? 'Remaining' : 'Over Budget'}
              </p>
            </div>
          </div>
          <Progress 
            value={Math.min(overallUtilization, 100)} 
            className="h-3" 
          />
        </CardContent>
      </Card>

      {/* Budget Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {budgetCategories.map((category) => {
          const Icon = category.icon;
          const utilizationPercentage = (category.spent / category.allocated) * 100;
          const isOverBudget = utilizationPercentage > 100;
          
          return (
            <Card 
              key={category.name} 
              className={`hover:shadow-md transition-all duration-200 ${
                isOverBudget ? 'ring-2 ring-red-200 bg-red-50/30' : 
                utilizationPercentage > 90 ? 'ring-2 ring-orange-200 bg-orange-50/30' : ''
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${category.bgColor} ${category.borderColor} border`}>
                      <Icon className={`h-4 w-4 ${category.color}`} />
                    </div>
                    <CardTitle className="text-sm">{category.name}</CardTitle>
                  </div>
                  {isOverBudget && (
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Allocated</span>
                    <span>৳{(category.allocated / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Spent</span>
                    <span className={utilizationPercentage > 100 ? 'text-red-600 font-medium' : ''}>
                      ৳{(category.spent / 1000).toFixed(0)}K
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Utilization</span>
                    <span className={`text-xs font-medium ${getUtilizationColor(utilizationPercentage)}`}>
                      {utilizationPercentage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(utilizationPercentage)}`}
                      style={{ width: `${Math.min(utilizationPercentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="pt-1">
                  <p className="text-xs text-muted-foreground">
                    Remaining: {isOverBudget ? 
                      <span className="text-red-600 font-medium">-৳{((category.spent - category.allocated) / 1000).toFixed(0)}K</span> :
                      <span className="text-green-600">৳{((category.allocated - category.spent) / 1000).toFixed(0)}K</span>
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent AI-Detected Financial Communications */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent AI-Detected Financial Communications</CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <div
                key={message.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-2 h-2 rounded-full ${
                    message.status === "ai_detected" ? "bg-purple-500" :
                    message.status === "auto_transferred" ? "bg-green-500" :
                    message.status === "pending_review" ? "bg-orange-500" :
                    "bg-blue-500"
                  }`}></div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{message.sender}</span>
                      <Badge
                        variant={message.platform === "WhatsApp" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {message.platform}
                      </Badge>
                      {message.category && (
                        <Badge variant="outline" className="text-xs">
                          {message.category}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {message.message}
                    </p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm text-muted-foreground">{message.time}</p>
                  {message.amount && (
                    <p className="text-sm font-medium text-primary">
                      ৳{message.amount.toLocaleString()}
                    </p>
                  )}
                  <Badge
                    variant={
                      message.status === "ai_detected"
                        ? "default"
                        : message.status === "auto_transferred"
                        ? "default" 
                        : message.status === "pending_review"
                        ? "destructive"
                        : "secondary"
                    }
                    className="text-xs"
                  >
                    {message.status.replace('_', ' ')}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}