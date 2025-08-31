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
  TrendingUp, 
  TrendingDown,
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
  Calendar,
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
      spent: 435000,
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
      spent: 135000,
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
      spent: 720000,
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
      name: "New Asset",
      icon: Building,
      allocated: 1200000,
      spent: 950000,
      committed: 0,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      alerts: []
    },
    {
      id: 7,
      name: "TDS/VDS",
      icon: Receipt,
      allocated: 300000,
      spent: 195000,
      committed: 0,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      alerts: []
    },
    {
      id: 8,
      name: "Salary",
      icon: Wallet,
      allocated: 2500000,
      spent: 1625000,
      committed: 0,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      alerts: []
    }
  ];

  const alertSettings = {
    thresholds: {
      moderate: 65, // 50-77% range notification
      high: 85,     // >85% high usage alert
      critical: 100 // Budget limit (no exceed allowed)
    },
    channels: {
      whatsapp: true,
      slack: true,
      email: true
    },
    recipients: {
      finance: ["Shahana Begum", "Mohammad Karim"],
      operations: ["Jahangir Alam", "Abdul Mannan"],
      management: ["Fatima Rahman", "Clueless Monstars"]
    }
  };

  const recentAlerts = [
    {
      id: 1,
      category: "Equipment",
      type: "critical",
      message: "High budget usage at 90% - Monitor closely to prevent overspend",
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
      message: "Budget utilization at 87% - Approaching limit",
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
      message: "Budget utilization at 90% - High usage alert",
      time: "1 hour ago",
      platforms: ["Slack"],
      recipients: ["#general"],
      status: "sent",
      autoAction: "alert_only",
      affectedRequests: 0
    },
    {
      id: 4,
      category: "Legal",
      type: "warning",
      message: "Moderate budget usage at 55% - Within optimal range",
      time: "2 hours ago",
      platforms: ["Slack"],
      recipients: ["Finance Team"],
      status: "sent",
      autoAction: "status_update",
      affectedRequests: 0
    }
  ];

  const totalAllocated = budgetCategories.reduce((sum, cat) => sum + cat.allocated, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const totalCommitted = budgetCategories.reduce((sum, cat) => sum + cat.committed, 0);
  const overallUtilization = ((totalSpent + totalCommitted) / totalAllocated) * 100;

  const getAlertType = (utilization: number) => {
    if (utilization > 100) return "severe"; // Over budget (not allowed)
    if (utilization > 85) return "critical"; // High usage >85%
    if (utilization >= 50 && utilization <= 77) return "warning"; // Moderate usage 50-77%
    return "normal"; // Low usage <50% or 77-85%
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case "severe": return "text-red-700 bg-red-100 border-red-300";
      case "critical": return "text-red-600 bg-red-50 border-red-200";
      case "warning": return "text-orange-600 bg-orange-50 border-orange-200";
      default: return "text-green-600 bg-green-50 border-green-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Budget Management & Alerts</h2>
          <p className="text-muted-foreground">
            Real-time budget monitoring with automated WhatsApp and Slack notifications.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="px-3 py-1">
            December 2024
          </Badge>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Alert Settings
          </Button>
        </div>
      </div>

      {/* Overall Budget Status */}
      <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Overall Budget Status</span>
            <div className="flex items-center space-x-2">
              <Badge 
                variant={overallUtilization > 100 ? "destructive" : overallUtilization > 90 ? "secondary" : "default"}
                className="text-sm px-3 py-1"
              >
                {overallUtilization.toFixed(1)}% Utilized
              </Badge>
              {overallUtilization > 90 && (
                <AlertTriangle className="h-5 w-5 text-orange-500" />
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-700">৳{(totalAllocated / 100000).toFixed(1)}L</p>
              <p className="text-sm text-muted-foreground">Total Allocated</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">৳{(totalSpent / 100000).toFixed(1)}L</p>
              <p className="text-sm text-muted-foreground">Total Spent</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">৳{(totalCommitted / 100000).toFixed(1)}L</p>
              <p className="text-sm text-muted-foreground">Committed</p>
            </div>
            <div className="text-center">
              <p className={`text-2xl font-bold ${(totalAllocated - totalSpent - totalCommitted) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ৳{(Math.abs(totalAllocated - totalSpent - totalCommitted) / 100000).toFixed(1)}L
              </p>
              <p className="text-sm text-muted-foreground">
                {(totalAllocated - totalSpent - totalCommitted) >= 0 ? 'Available' : 'Over Budget'}
              </p>
            </div>
          </div>
          <Progress 
            value={Math.min(overallUtilization, 100)} 
            className="h-3" 
          />
        </CardContent>
      </Card>

      <Tabs defaultValue="categories" className="space-y-6">
        <TabsList>
          <TabsTrigger value="categories">Budget Categories</TabsTrigger>
          <TabsTrigger value="alerts">Alert History</TabsTrigger>
          <TabsTrigger value="settings">Alert Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {budgetCategories.map((category) => {
              const Icon = category.icon;
              const totalUsed = category.spent + category.committed;
              const utilizationPercentage = (totalUsed / category.allocated) * 100;
              const alertType = getAlertType(utilizationPercentage);
              const isOverBudget = utilizationPercentage > 100;
              
              return (
                <Card 
                  key={category.id} 
                  className={`hover:shadow-md transition-all duration-200 ${
                    alertType === 'severe' ? 'ring-2 ring-red-300 bg-red-50/50' : 
                    alertType === 'critical' ? 'ring-2 ring-red-200 bg-red-50/30' :
                    alertType === 'warning' ? 'ring-2 ring-orange-200 bg-orange-50/30' : ''
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
                      {alertType !== 'normal' && (
                        <AlertTriangle className={`h-4 w-4 ${
                          alertType === 'severe' ? 'text-red-600' :
                          alertType === 'critical' ? 'text-red-500' : 'text-orange-500'
                        }`} />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
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
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Committed</span>
                        <span>৳{(category.committed / 1000).toFixed(0)}K</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Total Usage</span>
                        <span className={`text-xs font-medium ${
                          alertType === 'severe' ? 'text-red-600' :
                          alertType === 'critical' ? 'text-red-500' :
                          alertType === 'warning' ? 'text-orange-500' : 'text-green-600'
                        }`}>
                          {utilizationPercentage.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            alertType === 'severe' ? 'bg-red-600' :
                            alertType === 'critical' ? 'bg-red-500' :
                            alertType === 'warning' ? 'bg-orange-500' : 'bg-green-500'
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
                              <Smartphone className="h-3 w-3 text-green-600" />
                            ) : (
                              <MessageSquare className="h-3 w-3 text-purple-600" />
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

        <TabsContent value="alerts" className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Alert History & Auto-Actions</h3>
              <p className="text-sm text-muted-foreground">Real-time budget monitoring with automated responses</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="bg-green-50 text-green-700">
                Real-time Active
              </Badge>
              <Button variant="outline" size="sm">
                <Timer className="h-4 w-4 mr-2" />
                Live Monitor
              </Button>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span>Recent Alerts & Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg border ${getAlertColor(alert.type)}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {alert.category}
                          </Badge>
                          <Badge 
                            variant={alert.type === 'severe' || alert.type === 'auto_rejection' ? 'destructive' : alert.type === 'critical' ? 'destructive' : 'secondary'}
                            className="text-xs"
                          >
                            {alert.type.replace('_', ' ').toUpperCase()}
                          </Badge>
                          {alert.autoAction === 'auto_reject' && (
                            <Badge variant="destructive" className="text-xs bg-red-600">
                              <XCircle className="h-3 w-3 mr-1" />
                              AUTO-REJECTED
                            </Badge>
                          )}
                        </div>
                        <p className="font-medium">{alert.message}</p>
                        
                        {alert.affectedRequests > 0 && (
                          <Alert className="mt-2 py-2 border-orange-200 bg-orange-50">
                            <Lock className="h-4 w-4 text-orange-600" />
                            <AlertDescription className="text-orange-800">
                              <strong>{alert.affectedRequests}</strong> expense request(s) automatically rejected due to budget policy.
                            </AlertDescription>
                          </Alert>
                        )}
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{alert.time}</span>
                          <div className="flex items-center space-x-2">
                            {alert.platforms.map((platform) => (
                              <Badge key={platform} variant="outline" className="text-xs">
                                {platform === 'WhatsApp' ? (
                                  <><Smartphone className="h-3 w-3 mr-1" />WhatsApp</>
                                ) : (
                                  <><MessageSquare className="h-3 w-3 mr-1" />Slack</>
                                )}
                              </Badge>
                            ))}
                          </div>
                          <Badge variant="outline" className="text-xs text-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {alert.status.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Notified: </span>
                          {alert.recipients.join(", ")}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
                        {alert.autoAction === 'auto_reject' ? (
                          <XCircle className="h-5 w-5 text-red-600" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                        
                        {alert.type === 'auto_rejection' && (
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3 mr-1" />
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Auto-Rejection Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-red-200 bg-red-50">
                  <Lock className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>Active:</strong> Expenses exceeding budget limits are automatically rejected and routed to approval workflow.
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-Reject Threshold</p>
                      <p className="text-sm text-muted-foreground">Budget percentage to trigger auto-rejection</p>
                    </div>
                    <Badge variant="destructive">100%</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Override Requests</p>
                      <p className="text-sm text-muted-foreground">Allow manual override for rejected expenses</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Instant Notifications</p>
                      <p className="text-sm text-muted-foreground">Send immediate alerts for rejections</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full">
                      <Settings className="h-4 w-4 mr-2" />
                      Configure Policy
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Auto-Rejection Policy Settings</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Auto-Rejection Threshold (%)</Label>
                        <Input type="number" defaultValue="100" />
                      </div>
                      <div className="space-y-2">
                        <Label>Grace Period (minutes)</Label>
                        <Input type="number" defaultValue="5" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <Label>Enable emergency override</Label>
                      </div>
                      <Button className="w-full">Save Policy</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-orange-600" />
                  <span>Alert Thresholds</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Warning Level</p>
                      <p className="text-sm text-muted-foreground">Send alert when budget reaches this percentage</p>
                    </div>
                    <Badge variant="secondary">{alertSettings.thresholds.warning}%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Critical Level</p>
                      <p className="text-sm text-muted-foreground">Budget limit reached</p>
                    </div>
                    <Badge variant="destructive">{alertSettings.thresholds.critical}%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Severe Level</p>
                      <p className="text-sm text-muted-foreground">Budget exceeded - auto-reject triggered</p>
                    </div>
                    <Badge variant="destructive">{alertSettings.thresholds.severe}%</Badge>
                  </div>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Update Thresholds
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Alert Threshold Configuration</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Warning Threshold (%)</Label>
                        <Input type="number" defaultValue="90" />
                      </div>
                      <div className="space-y-2">
                        <Label>Critical Threshold (%)</Label>
                        <Input type="number" defaultValue="100" />
                      </div>
                      <div className="space-y-2">
                        <Label>Severe Threshold (%)</Label>
                        <Input type="number" defaultValue="110" />
                      </div>
                      <Button className="w-full">Save Thresholds</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                  <span>Notification Channels</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4 text-green-600" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">Instant alerts to team leads</p>
                      </div>
                    </div>
                    <Switch defaultChecked={alertSettings.channels.whatsapp} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                      <div>
                        <p className="font-medium">Slack</p>
                        <p className="text-sm text-muted-foreground">Channel notifications</p>
                      </div>
                    </div>
                    <Switch defaultChecked={alertSettings.channels.slack} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">Daily budget summaries</p>
                      </div>
                    </div>
                    <Switch defaultChecked={alertSettings.channels.email} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Timer className="h-4 w-4 text-orange-600" />
                      <div>
                        <p className="font-medium">Real-time Alerts</p>
                        <p className="text-sm text-muted-foreground">Immediate budget breach notifications</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview Notifications
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Auto-Rejection Statistics */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <span>Auto-Rejection Statistics (This Month)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold text-red-600">24</p>
                  <p className="text-sm text-muted-foreground">Total Auto-Rejections</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-600">৳৪.২L</p>
                  <p className="text-sm text-muted-foreground">Amount Auto-Rejected</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">৳৮৫K</p>
                  <p className="text-sm text-muted-foreground">Budget Saved</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">3</p>
                  <p className="text-sm text-muted-foreground">Override Approved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}