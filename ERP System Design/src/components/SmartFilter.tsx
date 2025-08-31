import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { 
  Brain, 
  DollarSign, 
  ShoppingCart, 
  FileText, 
  CheckCircle, 
  XCircle, 
  Clock,
  Filter,
  Settings,
  Download,
  Eye,
  AlertTriangle,
  Receipt,
  Scan,
  Hash,
  Smartphone,
  Search,
  User,
  Calendar,
  Building,
  Copy,
  Zap
} from "lucide-react";

export function SmartFilter() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const detectedTransactions = [
    {
      id: 1,
      messageId: "whatsapp_001",
      sender: "Fatima Rahman",
      platform: "WhatsApp",
      originalMessage: "Hi team, I need to purchase 50 units of office supplies for 125,000 BDT. Can someone approve this procurement request?",
      detectedType: "procurement",
      autoCategory: "procurement", // Auto-categorized as procurement (ordering request)
      amount: 125000,
      currency: "BDT",
      category: "Office Supplies",
      quantity: 50,
      confidence: 0.95,
      status: "pending_approval",
      timestamp: "2024-08-25 14:30:00",
      ocrProcessed: false,
      nlpProcessed: true,
      isDuplicate: false,
      extractedData: {
        vendor: "Unknown",
        description: "Office supplies",
        unitPrice: 2500,
        approver: null,
        keywords: ["purchase", "procurement", "approve"]
      }
    },
    {
      id: 2,
      messageId: "slack_002",
      sender: "Aminul Haque",
      platform: "Slack",
      originalMessage: "Expense report: Had lunch with client yesterday - 8,500 BDT for meal at downtown restaurant. Need reimbursement.",
      detectedType: "expense",
      autoCategory: "expense", // Auto-categorized as expense (approval request)
      amount: 8500,
      currency: "BDT",
      category: "Business Meals",
      confidence: 0.92,
      status: "auto_approved",
      timestamp: "2024-08-25 09:15:00",
      ocrProcessed: false,
      nlpProcessed: true,
      isDuplicate: false,
      extractedData: {
        expenseType: "Client Meeting",
        location: "Downtown restaurant",
        date: "2024-12-14",
        attendees: 2,
        keywords: ["expense", "reimbursement", "approved"]
      }
    },
    {
      id: 3,
      messageId: "whatsapp_003",
      sender: "Rashida Khatun",
      platform: "WhatsApp",
      originalMessage: "[Receipt attached] Restaurant bill for team dinner - 12,500 BDT. Please process for reimbursement. Receipt shows itemized breakdown.",
      detectedType: "billing",
      autoCategory: "billing", // Auto-categorized as billing (receipt upload)
      amount: 12500,
      currency: "BDT",
      category: "Food & Entertainment",
      confidence: 0.94,
      status: "processed",
      timestamp: "2024-08-25 11:45:00",
      ocrProcessed: true,
      nlpProcessed: true,
      isDuplicate: false,
      extractedData: {
        hasReceipt: true,
        vendor: "Green Restaurant",
        receiptConfidence: 0.92,
        keywords: ["receipt", "attached", "reimbursement"]
      }
    },
    {
      id: 4,
      messageId: "slack_004",
      sender: "Mohammad Karim",
      platform: "Slack",
      originalMessage: "Need to order new laptops for development team - 240,000 BDT for 4 units. Vendor quotation attached. Please approve procurement.",
      detectedType: "procurement",
      autoCategory: "procurement", // Auto-categorized as procurement (ordering request)
      amount: 240000,
      currency: "BDT",
      category: "Equipment",
      confidence: 0.97,
      status: "pending_approval",
      timestamp: "2024-08-25 16:20:00",
      ocrProcessed: false,
      nlpProcessed: true,
      isDuplicate: false,
      extractedData: {
        vendor: "TechCorp",
        itemType: "Laptops",
        quantity: 4,
        quotationAttached: true,
        keywords: ["order", "procurement", "approve"]
      }
    },
    {
      id: 5,
      messageId: "whatsapp_005",
      sender: "Salma Khatun",
      platform: "WhatsApp",
      originalMessage: "Travel expense approved for client meeting in Chittagong - 35,000 BDT. Hotel and transport costs included. Reimbursement requested.",
      detectedType: "expense",
      autoCategory: "expense", // Auto-categorized as expense (approval confirmation)
      amount: 35000,
      currency: "BDT",
      category: "Travel",
      confidence: 0.89,
      status: "auto_approved",
      timestamp: "2024-07-25 10:30:00",
      ocrProcessed: false,
      nlpProcessed: true,
      isDuplicate: false,
      extractedData: {
        expenseType: "Travel",
        location: "Chittagong",
        breakdown: ["Hotel", "Transport"],
        keywords: ["approved", "expense", "reimbursement"]
      }
    },
    {
      id: 6,
      messageId: "slack_006",
      sender: "Nazrul Islam",
      platform: "Slack",
      originalMessage: "[Image] Here's the receipt for office supplies purchase - 8,900 BDT. Bought papers, pens, and folders from City Mall.",
      detectedType: "billing",
      autoCategory: "billing", // Auto-categorized as billing (receipt upload)
      amount: 8900,
      currency: "BDT",
      category: "Office Supplies",
      confidence: 0.96,
      status: "processed",
      timestamp: "2024-07-25 08:45:00",
      ocrProcessed: true,
      nlpProcessed: true,
      isDuplicate: true,
      duplicateOf: "REC-2024-001",
      extractedData: {
        hasReceipt: true,
        vendor: "City Mall",
        items: ["papers", "pens", "folders"],
        receiptConfidence: 0.94,
        keywords: ["receipt", "purchase", "image"]
      }
    }
  ];

  const filterStats = [
    { type: "procurement", count: 18, amount: 2865000, color: "text-blue-600", icon: ShoppingCart },
    { type: "expense", count: 42, amount: 1125000, color: "text-green-600", icon: DollarSign },
    { type: "billing", count: 56, amount: 785000, color: "text-purple-600", icon: Receipt },
    { type: "duplicates", count: 8, amount: 125000, color: "text-orange-600", icon: Copy }
  ];

  const recentMonthsData = {
    "August 25": {
      processed: 126,
      procurement: 18,
      expense: 42,
      billing: 56,
      duplicatesDetected: 8,
      accuracy: 94.2
    },
    "July 25": {
      processed: 134,
      procurement: 22,
      expense: 38,
      billing: 62,
      duplicatesDetected: 12,
      accuracy: 93.8
    },
    "June 25": {
      processed: 118,
      procurement: 16,
      expense: 35,
      billing: 58,
      duplicatesDetected: 9,
      accuracy: 95.1
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "auto_approved": return "text-green-600 bg-green-50";
      case "pending_approval": return "text-yellow-600 bg-yellow-50";
      case "requires_review": return "text-orange-600 bg-orange-50";
      case "pending_payment": return "text-blue-600 bg-blue-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "procurement": return ShoppingCart;
      case "expense": return DollarSign;
      case "budget_request": return FileText;
      case "invoice": return FileText;
      default: return FileText;
    }
  };

  const filteredTransactions = detectedTransactions.filter(transaction => {
    const matchesFilter = selectedFilter === "all" || transaction.autoCategory === selectedFilter;
    const matchesSearch = transaction.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.originalMessage.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.extractedData.vendor?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-blue-600" />
            <span>Smart Business Assistant</span>
          </h2>
          <p className="text-muted-foreground">
            Your intelligent bridge between ERP and social media - auto-categorizes business conversations into Expense, Procurement, and Billing with smart processing.
          </p>
        </div>
        <div className="flex space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700">
            <Zap className="h-3 w-3 mr-1" />
            Auto-Categorization Active
          </Badge>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configure Rules
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export to ERP
          </Button>
        </div>
      </div>

      {/* Auto-Categorization Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {filterStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.type} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium capitalize">{stat.type.replace('_', ' ')}</p>
                    <p className="text-2xl font-bold">{stat.count}</p>
                    <p className="text-sm text-muted-foreground">
                      ৳{stat.amount.toLocaleString()} total
                    </p>
                  </div>
                  <div className={`p-2 rounded-lg ${stat.color} bg-current/10`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Months Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Months Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(recentMonthsData).map(([month, data]) => (
              <div key={month} className="p-4 border rounded-lg">
                <h4 className="font-medium mb-3">{month}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Processed:</span>
                    <span className="font-medium">{data.processed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Procurement:</span>
                    <span className="font-medium text-blue-600">{data.procurement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expense:</span>
                    <span className="font-medium text-green-600">{data.expense}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Billing:</span>
                    <span className="font-medium text-purple-600">{data.billing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Accuracy:</span>
                    <span className="font-medium text-orange-600">{data.accuracy}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="detected" className="space-y-6">
        <TabsList>
          <TabsTrigger value="detected">Detected Transactions</TabsTrigger>
          <TabsTrigger value="rules">Filter Rules</TabsTrigger>
          <TabsTrigger value="training">AI Training</TabsTrigger>
        </TabsList>

        <TabsContent value="detected" className="space-y-4">
          {/* Enhanced Filter Controls */}
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search messages, senders, vendors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <select 
                  value={selectedFilter} 
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-2 border rounded-md bg-background"
                >
                  <option value="all">All Categories</option>
                  <option value="procurement">Procurement (Orders)</option>
                  <option value="expense">Expense (Approvals)</option>
                  <option value="billing">Billing (Receipts)</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Detected Transactions */}
          <div className="space-y-4">
            {filteredTransactions.map((transaction) => {
              const TypeIcon = getTypeIcon(transaction.detectedType);
              
              return (
                <Card key={transaction.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <TypeIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-medium">{transaction.sender}</h4>
                            <div className="flex items-center space-x-1">
                              {transaction.platform === "WhatsApp" ? 
                                <Smartphone className="h-3 w-3 text-green-600" /> : 
                                <Hash className="h-3 w-3 text-purple-600" />
                              }
                              <Badge variant={transaction.platform === "WhatsApp" ? "default" : "secondary"}>
                                {transaction.platform}
                              </Badge>
                            </div>
                            <Badge variant="outline" className="capitalize">
                              {transaction.autoCategory}
                            </Badge>
                            {transaction.ocrProcessed && (
                              <Badge className="bg-blue-100 text-blue-800 text-xs">
                                <Scan className="h-3 w-3 mr-1" />
                                OCR
                              </Badge>
                            )}
                            {transaction.isDuplicate && (
                              <Badge className="bg-orange-100 text-orange-800 text-xs">
                                <Copy className="h-3 w-3 mr-1" />
                                Duplicate
                              </Badge>
                            )}
                            <div className="flex items-center space-x-1">
                              <Brain className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                {Math.round(transaction.confidence * 100)}% confidence
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {transaction.originalMessage}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">
                          ৳{transaction.amount.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">{transaction.currency}</p>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    {/* Extracted Data */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="font-medium mb-2">Extracted Information</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Category:</span>
                            <span>{transaction.category}</span>
                          </div>
                          {transaction.quantity && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Quantity:</span>
                              <span>{transaction.quantity} units</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Timestamp:</span>
                            <span>{new Date(transaction.timestamp).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Additional Details</h5>
                        <div className="space-y-2 text-sm">
                          {Object.entries(transaction.extractedData).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                              </span>
                              <span className="text-right">
                                {Array.isArray(value) ? value.join(', ') : value || 'N/A'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Status and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status.replace('_', ' ').toUpperCase()}
                        </Badge>
                        {transaction.status === "auto_approved" && (
                          <div className="flex items-center space-x-1 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm">Auto-approved</span>
                          </div>
                        )}
                        {transaction.status === "requires_review" && (
                          <div className="flex items-center space-x-1 text-orange-600">
                            <AlertTriangle className="h-4 w-4" />
                            <span className="text-sm">Needs review</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        {transaction.status === "pending_approval" && (
                          <>
                            <Button variant="outline" size="sm">
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                            <Button size="sm">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                          </>
                        )}
                        {transaction.status === "auto_approved" && (
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Export to ERP
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="rules" className="space-y-4">
          <FilterRulesPanel />
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <AITrainingPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function FilterRulesPanel() {
  const rules = [
    {
      id: 1,
      name: "Auto-approve small expenses",
      condition: "amount < 10000 AND type = 'expense'",
      action: "Auto-approve",
      status: "active",
      matches: 45
    },
    {
      id: 2,
      name: "Flag large procurement requests",
      condition: "amount > 500000 AND type = 'procurement'",
      action: "Require manager approval",
      status: "active",
      matches: 12
    },
    {
      id: 3,
      name: "Categorize office supplies",
      condition: "contains('office', 'supplies', 'stationery')",
      action: "Set category = 'Office Supplies'",
      status: "active",
      matches: 23
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Rules Configuration</CardTitle>
        <p className="text-sm text-muted-foreground">
          Set up automated rules for categorizing and processing detected transactions.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-medium">Active Rules</h4>
          <Button size="sm">Add New Rule</Button>
        </div>
        
        <div className="space-y-3">
          {rules.map((rule) => (
            <div key={rule.id} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium">{rule.name}</h5>
                <div className="flex items-center space-x-2">
                  <Badge variant={rule.status === "active" ? "default" : "secondary"}>
                    {rule.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {rule.matches} matches
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>When:</strong> {rule.condition}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Then:</strong> {rule.action}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function AITrainingPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Model Training</CardTitle>
        <p className="text-sm text-muted-foreground">
          Improve detection accuracy by training the AI with your specific terminology and patterns.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-green-600">94.2%</div>
            <p className="text-sm text-muted-foreground">Overall Accuracy</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-blue-600">1,247</div>
            <p className="text-sm text-muted-foreground">Training Samples</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-purple-600">12</div>
            <p className="text-sm text-muted-foreground">Custom Categories</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Recent Training Activity</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">Added 15 procurement samples</span>
                <span className="text-xs text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">Updated expense classification rules</span>
                <span className="text-xs text-muted-foreground">1 day ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">Retrained model with new data</span>
                <span className="text-xs text-muted-foreground">3 days ago</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline">Upload Training Data</Button>
            <Button variant="outline">Retrain Model</Button>
            <Button>View Training History</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}