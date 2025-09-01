import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Alert, AlertDescription } from "./ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { 
  AlertTriangle, 
  CheckCircle, 
  Car,
  Utensils,
  Hammer,
  Scale,
  Wrench,
  Building,
  Receipt,
  Wallet,
  MessageSquare,
  Smartphone,
  Settings,
  DollarSign,
  XCircle,
  Shield,
  Zap,
  Timer,
  Lock,
  Eye,
  BarChart3
} from "lucide-react";

export function BudgetManagement() {
  const budgetCategories = [
    {
      id: 1,
      name: "Travel",
      icon: Car,
      allocated: 500000,
      spent: 475000,
      committed: 0,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      alerts: [
        { platform: "WhatsApp", recipient: "Finance Team", sent: "2h ago" },
        { platform: "Slack", recipient: "#travel-expenses", sent: "2h ago" }
      ]
    },
    {
      id: 2,
      name: "Food",
      icon: Utensils,
      allocated: 150000,
      spent: 148000,
      committed: 0,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      alerts: []
    },
    {
      id: 3,
      name: "Equipment",
      icon: Hammer,
      allocated: 800000,
      spent: 620000,
      committed: 0,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      alerts: [
        { platform: "WhatsApp", recipient: "IT Manager", sent: "1h ago" },
        { platform: "Slack", recipient: "#procurement", sent: "1h ago" }
      ]
    },
    {
      id: 4,
      name: "Legal",
      icon: Scale,
      allocated: 200000,
      spent: 110000,
      committed: 0,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      alerts: []
    },
    {
      id: 5,
      name: "Repair",
      icon: Wrench,
      allocated: 100000,
      spent: 72000,
      committed: 0,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      alerts: []
    },
    {
      id: 6,
      name: "Assets",
      icon: Building,
      allocated: 1200000,
      spent: 950000,
      committed: 0,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      alerts: []
    }
  ];

  const alertSettings = {
    thresholds: {
      moderate: 65,
      high: 85,
      critical: 100
    },
    channels: {
      whatsapp: true,
      slack: true,
      email: true
    }
  };

  const recentAlerts = [
    {
      id: 1,
      category: "Equipment",
      type: "critical",
      message: "High budget usage at 77.5% - Monitor closely",
      time: "5 minutes ago",
      platforms: ["WhatsApp", "Slack"],
      recipients: ["IT Manager", "#procurement"],
      status: "sent",
      autoAction: "alert_only",
      affectedRequests: 0
    },
    {
      id: 2,
      category: "Travel",
      type: "critical",
      message: "Budget utilization at 95% - Approaching limit",
      time: "12 minutes ago",
      platforms: ["WhatsApp", "Slack"],
      recipients: ["Finance Team", "#travel-expenses"],
      status: "sent",
      autoAction: "alert_only",
      affectedRequests: 0
    },
    {
      id: 3,
      category: "Food",
      type: "critical",
      message: "Budget utilization at 98.7% - High usage alert",
      time: "1 hour ago",
      platforms: ["Slack"],
      recipients: ["#general"],
      status: "sent",
      autoAction: "alert_only",
      affectedRequests: 0
    }
  ];

  const totalAllocated = budgetCategories.reduce((sum, cat) => sum + cat.allocated, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const totalCommitted = budgetCategories.reduce((sum, cat) => sum + cat.committed, 0);
  const overallUtilization = ((totalSpent + totalCommitted) / totalAllocated) * 100;

  const getAlertColor = (type: string) => {
    switch (type) {
      case "severe": return "text-red-700 bg-red-100 border-red-300";
      case "critical": return "text-red-600 bg-red-50 border-red-200";
      case "warning": return "text-orange-600 bg-orange-50 border-orange-200";
      default: return "text-green-600 bg-green-50 border-green-200";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Budget Management & Alerts</h2>
          <p className="text-sm text-muted-foreground">
            Real-time budget monitoring with automated WhatsApp and Slack notifications.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="px-2 py-1 text-xs">
            November 2024
          </Badge>
          <Button variant="outline" size="sm">
            <Settings className="h-3 w-3 mr-1" />
            Alert Settings
          </Button>
        </div>
      </div>

      {/* Overall Budget Status */}
      <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center justify-between">
            <span>Overall Budget Status</span>
            <div className="flex items-center space-x-2">
              <Badge 
                variant={overallUtilization > 100 ? "destructive" : overallUtilization > 90 ? "secondary" : "default"}
                className="text-xs px-2 py-1"
              >
                {overallUtilization.toFixed(1)}% Utilized
              </Badge>
              {overallUtilization > 90 && (
                <AlertTriangle className="h-4 w-4 text-orange-500" />
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-xl font-bold text-slate-700">৳{(totalAllocated / 100000).toFixed(1)}L</p>
              <p className="text-xs text-muted-foreground">Total Allocated</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-primary">৳{(totalSpent / 100000).toFixed(1)}L</p>
              <p className="text-xs text-muted-foreground">Total Spent</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-orange-600">৳{(totalCommitted / 100000).toFixed(1)}L</p>
              <p className="text-xs text-muted-foreground">Committed</p>
            </div>
            <div className="text-center">
              <p className={`text-xl font-bold ${(totalAllocated - totalSpent - totalCommitted) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ৳{(Math.abs(totalAllocated - totalSpent - totalCommitted) / 100000).toFixed(1)}L
              </p>
              <p className="text-xs text-muted-foreground">
                {(totalAllocated - totalSpent - totalCommitted) >= 0 ? 'Available' : 'Over Budget'}
              </p>
            </div>
          </div>
          <Progress 
            value={Math.min(overallUtilization, 100)} 
            className="h-2" 
          />
        </CardContent>
      </Card>

      <Tabs defaultValue="categories" className="space-y-4">
        <TabsList>
          <TabsTrigger value="categories">Budget Categories</TabsTrigger>
          <TabsTrigger value="alerts">Alert History</TabsTrigger>
          <TabsTrigger value="settings">Alert Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {budgetCategories.map((category) => {
              const Icon = category.icon;
              const totalUsed = category.spent + category.committed;
              const utilizationPercentage = (totalUsed / category.allocated) * 100;
              const isOverBudget = utilizationPercentage > 100;
              
              return (
                <Card 
                  key={category.id} 
                  className={`hover:shadow-md transition-all duration-200 ${
                    utilizationPercentage > 100 ? 'ring-2 ring-red-300 bg-red-50/50' : 
                    utilizationPercentage > 90 ? 'ring-2 ring-orange-200 bg-orange-50/30' : ''
                  }`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`p-1 rounded-lg ${category.bgColor} ${category.borderColor} border`}>
                          <Icon className={`h-3 w-3 ${category.color}`} />
                        </div>
                        <CardTitle className="text-sm">{category.name}</CardTitle>
                      </div>
                      {utilizationPercentage > 90 && (
                        <AlertTriangle className="h-3 w-3 text-orange-500" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Allocated</span>
                        <span>৳{(category.allocated / 1000).toFixed(0)}K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Spent</span>
                        <span className={utilizationPercentage > 100 ? 'text-red-600 font-medium' : ''}>
                          ৳{(category.spent / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Total Usage</span>
                        <span className={`text-xs font-medium ${
                          utilizationPercentage > 100 ? 'text-red-600' :
                          utilizationPercentage > 90 ? 'text-orange-500' :
                          utilizationPercentage >= 50 && utilizationPercentage <= 77 ? 'text-yellow-500' : 'text-green-600'
                        }`}>
                          {utilizationPercentage.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div
                          className={`h-1 rounded-full transition-all duration-300 ${
                            utilizationPercentage > 100 ? 'bg-red-600' :
                            utilizationPercentage > 90 ? 'bg-orange-500' :
                            utilizationPercentage >= 50 && utilizationPercentage <= 77 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${Math.min(utilizationPercentage, 100)}%` }}
                        ></div>
                      </div>
                    </div>

                    {category.alerts.length > 0 && (
                      <div className="pt-2 border-t">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Recent Alerts:</p>
                        {category.alerts.map((alert, index) => (
                          <div key={index} className="flex items-center space-x-1 text-xs">
                            {alert.platform === 'WhatsApp' ? (
                              <Smartphone className="h-2 w-2 text-green-600" />
                            ) : (
                              <MessageSquare className="h-2 w-2 text-purple-600" />
                            )}
                            <span className="text-muted-foreground">{alert.recipient}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{alert.sent}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-semibold text-base">Alert History & Auto-Actions</h3>
              <p className="text-xs text-muted-foreground">Real-time budget monitoring with automated responses</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 text-xs">
                Real-time Active
              </Badge>
              <Button variant="outline" size="sm">
                <Timer className="h-3 w-3 mr-1" />
                Live Monitor
              </Button>
            </div>
          </div>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <span>Recent Alerts & Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-3 rounded-lg border ${getAlertColor(alert.type)}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {alert.category}
                          </Badge>
                          <Badge 
                            variant={alert.type === 'critical' ? 'destructive' : 'secondary'}
                            className="text-xs"
                          >
                            {alert.type.replace('_', ' ').toUpperCase()}
                          </Badge>
                        </div>
                        <p className="font-medium text-sm">{alert.message}</p>
                        
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{alert.time}</span>
                          <div className="flex items-center space-x-2">
                            {alert.platforms.map((platform) => (
                              <Badge key={platform} variant="outline" className="text-xs">
                                {platform === 'WhatsApp' ? (
                                  <><Smartphone className="h-2 w-2 mr-1" />WhatsApp</>
                                ) : (
                                  <><MessageSquare className="h-2 w-2 mr-1" />Slack</>
                                )}
                              </Badge>
                            ))}
                          </div>
                          <Badge variant="outline" className="text-xs text-green-600">
                            <CheckCircle className="h-2 w-2 mr-1" />
                            {alert.status.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="text-xs">
                          <span className="text-muted-foreground">Notified: </span>
                          {alert.recipients.join(", ")}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Auto-Rejection Statistics */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center space-x-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span>Auto-Rejection Statistics (November 2024)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-xl font-bold text-red-600">24</p>
                  <p className="text-xs text-muted-foreground">Total Auto-Rejections</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-orange-600">৳৪.২L</p>
                  <p className="text-xs text-muted-foreground">Amount Auto-Rejected</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-blue-600">৳৮৫K</p>
                  <p className="text-xs text-muted-foreground">Budget Saved</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-green-600">3</p>
                  <p className="text-xs text-muted-foreground">Override Approved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span>Auto-Rejection Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Alert className="border-red-200 bg-red-50 py-2">
                  <Lock className="h-3 w-3 text-red-600" />
                  <AlertDescription className="text-red-800 text-xs">
                    <strong>Active:</strong> Expenses exceeding budget limits are automatically rejected.
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Auto-Reject Threshold</p>
                      <p className="text-xs text-muted-foreground">Budget percentage to trigger auto-rejection</p>
                    </div>
                    <Badge variant="destructive" className="text-xs">100%</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Override Requests</p>
                      <p className="text-xs text-muted-foreground">Allow manual override for rejected expenses</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Instant Notifications</p>
                      <p className="text-xs text-muted-foreground">Send immediate alerts for rejections</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <Settings className="h-3 w-3 mr-1" />
                  Configure Policy
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-orange-600" />
                  <span>Alert Thresholds</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Warning Level</p>
                      <p className="text-xs text-muted-foreground">Send alert when budget reaches this percentage</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">{alertSettings.thresholds.moderate}%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Critical Level</p>
                      <p className="text-xs text-muted-foreground">Budget limit reached</p>
                    </div>
                    <Badge variant="destructive" className="text-xs">{alertSettings.thresholds.high}%</Badge>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <BarChart3 className="h-3 w-3 mr-1" />
                  Update Thresholds
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-purple-600" />
                  <span>Notification Channels</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-3 w-3 text-green-600" />
                      <div>
                        <p className="font-medium text-sm">WhatsApp</p>
                        <p className="text-xs text-muted-foreground">Instant alerts to team leads</p>
                      </div>
                    </div>
                    <Switch defaultChecked={alertSettings.channels.whatsapp} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-3 w-3 text-purple-600" />
                      <div>
                        <p className="font-medium text-sm">Slack</p>
                        <p className="text-xs text-muted-foreground">Channel notifications</p>
                      </div>
                    </div>
                    <Switch defaultChecked={alertSettings.channels.slack} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-3 w-3 text-blue-600" />
                      <div>
                        <p className="font-medium text-sm">Email</p>
                        <p className="text-xs text-muted-foreground">Daily budget summaries</p>
                      </div>
                    </div>
                    <Switch defaultChecked={alertSettings.channels.email} />
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <Eye className="h-3 w-3 mr-1" />
                  Preview Notifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}