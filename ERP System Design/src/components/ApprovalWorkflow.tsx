import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { AlertTriangle, CheckCircle, XCircle, Clock, MessageSquare, ArrowRight, RefreshCw } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ExpenseRequest {
  id: string;
  employee: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  status: 'pending' | 'manager_approved' | 'senior_manager_review' | 'management_review' | 'finance_review' | 'accounts_review' | 'approved' | 'rejected' | 'auto_rejected';
  budgetStatus: 'within_budget' | 'exceeds_budget' | 'critical_overage';
  currentBudget: number;
  budgetUsed: number;
  attachments?: string[];
  rejectionReason?: string;
  approvalPath: string[];
  currentStep: number;
  submittedFrom: 'whatsapp' | 'slack' | 'manual';
  avatar?: string;
}

export function ApprovalWorkflow() {
  const [selectedTab, setSelectedTab] = useState("pending");

  const expenseRequests: ExpenseRequest[] = [
    {
      id: "EXP-2024-001",
      employee: "Rahim Uddin",
      amount: 35000,
      category: "Travel",
      description: "Client meeting in Chittagong - hotel and transportation",
      date: "2024-08-31",
      status: "pending",
      budgetStatus: "within_budget",
      currentBudget: 500000,
      budgetUsed: 435000,
      approvalPath: ["Manager", "Senior Manager", "Management", "Finance", "Accounts"],
      currentStep: 0,
      submittedFrom: "whatsapp",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "EXP-2024-002",
      employee: "Fatima Khatun",
      amount: 12000,
      category: "Food",
      description: "Team lunch for quarterly review meeting",
      date: "2024-08-31",
      status: "manager_approved",
      budgetStatus: "within_budget",
      currentBudget: 150000,
      budgetUsed: 135000,
      approvalPath: ["Manager", "Senior Manager", "Management", "Accounts"],
      currentStep: 1,
      submittedFrom: "slack",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "EXP-2024-003",
      employee: "Abdul Kader",
      amount: 65000,
      category: "Equipment",
      description: "New laptop and accessories for development team",
      date: "2024-08-30",
      status: "senior_manager_review",
      budgetStatus: "within_budget",
      currentBudget: 800000,
      budgetUsed: 720000,
      approvalPath: ["Manager", "Senior Manager", "Management", "Finance", "Accounts"],
      currentStep: 1,
      submittedFrom: "whatsapp",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "EXP-2024-004",
      employee: "Nasira Begum",
      amount: 25000,
      category: "Repair",
      description: "Office air conditioning system repair and maintenance",
      date: "2024-08-30",
      status: "management_review",
      budgetStatus: "within_budget",
      currentBudget: 100000,
      budgetUsed: 72000,
      approvalPath: ["Manager", "Senior Manager", "Management", "Accounts"],
      currentStep: 2,
      submittedFrom: "slack",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "EXP-2024-005",
      employee: "Mohammad Hasan",
      amount: 18000,
      category: "Legal",
      description: "Contract review and legal consultation fees",
      date: "2024-08-29",
      status: "finance_review",
      budgetStatus: "within_budget",
      currentBudget: 200000,
      budgetUsed: 110000,
      approvalPath: ["Manager", "Senior Manager", "Management", "Finance", "Accounts"],
      currentStep: 3,
      submittedFrom: "manual",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "EXP-2024-006",
      employee: "Ruma Akter",
      amount: 42000,
      category: "New Asset",
      description: "Office furniture and ergonomic chairs for new employees",
      date: "2024-08-29",
      status: "accounts_review",
      budgetStatus: "within_budget",
      currentBudget: 1200000,
      budgetUsed: 950000,
      approvalPath: ["Manager", "Senior Manager", "Management", "Finance", "Accounts"],
      currentStep: 4,
      submittedFrom: "whatsapp",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "EXP-2024-007",
      employee: "Aminul Haque",
      amount: 35000,
      category: "TDS/VDS",
      description: "Quarterly tax deduction and VAT payments",
      date: "2024-08-28",
      status: "approved",
      budgetStatus: "within_budget",
      currentBudget: 300000,
      budgetUsed: 195000,
      approvalPath: ["Manager", "Senior Manager", "Management", "Finance", "Accounts"],
      currentStep: 5,
      submittedFrom: "manual",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const getStatusIcon = (status: string, budgetStatus: string) => {
    if (status === "auto_rejected") return <XCircle className="h-4 w-4 text-red-500" />;
    if (status === "rejected") return <XCircle className="h-4 w-4 text-red-500" />;
    if (status === "approved") return <CheckCircle className="h-4 w-4 text-green-500" />;
    if (budgetStatus === "exceeds_budget" || budgetStatus === "critical_overage") 
      return <AlertTriangle className="h-4 w-4 text-orange-500" />;
    return <Clock className="h-4 w-4 text-blue-500" />;
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "Pending Manager", color: "bg-yellow-100 text-yellow-800" },
      manager_approved: { label: "Manager Approved", color: "bg-blue-100 text-blue-800" },
      senior_manager_review: { label: "Senior Manager Review", color: "bg-indigo-100 text-indigo-800" },
      management_review: { label: "Management Review", color: "bg-purple-100 text-purple-800" },
      finance_review: { label: "Finance Review", color: "bg-orange-100 text-orange-800" },
      accounts_review: { label: "Accounts Review", color: "bg-red-100 text-red-800" },
      approved: { label: "Approved", color: "bg-green-100 text-green-800" },
      rejected: { label: "Rejected", color: "bg-red-100 text-red-800" },
      auto_rejected: { label: "Auto-Rejected", color: "bg-red-200 text-red-900" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={`${config.color} border-none`}>{config.label}</Badge>;
  };

  const getBudgetStatusColor = (budgetStatus: string) => {
    switch (budgetStatus) {
      case "within_budget": return "text-green-600";
      case "exceeds_budget": return "text-orange-600";
      case "critical_overage": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getSubmissionIcon = (platform: string) => {
    switch (platform) {
      case "whatsapp": return "📱 WhatsApp";
      case "slack": return "💬 Slack";
      case "manual": return "🖥️ Manual";
      default: return "📋 System";
    }
  };

  const filteredRequests = expenseRequests.filter(request => {
    switch (selectedTab) {
      case "pending": return ["pending", "manager_approved", "senior_manager_review", "management_review", "finance_review"].includes(request.status);
      case "reimbursement": return request.status === "accounts_review";
      case "rejected": return ["rejected", "auto_rejected"].includes(request.status);
      case "approved": return request.status === "approved";
      default: return true;
    }
  });

  const sendNotification = (requestId: string, action: string) => {
    // Mock notification sending
    alert(`${action} notification sent to WhatsApp/Slack for request ${requestId}`);
  };

  const ApprovalCard = ({ request }: { request: ExpenseRequest }) => (
    <Card className={`mb-4 ${request.status === 'accounts_review' ? 'border-red-200 bg-red-50' : ''}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={request.avatar} />
              <AvatarFallback>{request.employee.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                {getStatusIcon(request.status, request.budgetStatus)}
                <span className="font-medium">{request.employee}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{request.id}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{getSubmissionIcon(request.submittedFrom)}</span>
              </div>
              
              <h4 className="font-medium mb-1">{request.description}</h4>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                <span>৳{request.amount.toLocaleString()}</span>
                <span>•</span>
                <span>{request.category}</span>
                <span>•</span>
                <span>{request.date}</span>
              </div>
              
              {/* Budget Status */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Budget Usage</span>
                  <span className={`text-sm font-medium ${getBudgetStatusColor(request.budgetStatus)}`}>
                    {((request.budgetUsed + request.amount) / request.currentBudget * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      request.budgetStatus === "within_budget" ? "bg-green-500" :
                      request.budgetStatus === "exceeds_budget" ? "bg-orange-500" : "bg-red-500"
                    }`}
                    style={{ width: `${Math.min(((request.budgetUsed + request.amount) / request.currentBudget * 100), 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Used: ৳{request.budgetUsed.toLocaleString()}</span>
                  <span>Budget: ৳{request.currentBudget.toLocaleString()}</span>
                </div>
              </div>
              
              {/* Approval Path */}
              <div className="flex items-center space-x-2 mb-3">
                {request.approvalPath.map((step, index) => (
                  <div key={step} className="flex items-center">
                    <div className={`px-2 py-1 rounded text-xs ${
                      index < request.currentStep ? "bg-green-100 text-green-800" :
                      index === request.currentStep ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {step}
                    </div>
                    {index < request.approvalPath.length - 1 && (
                      <ArrowRight className="h-3 w-3 mx-1 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
              
              {request.rejectionReason && (
                <Alert className="mt-3 border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>Rejection Reason:</strong> {request.rejectionReason}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            {getStatusBadge(request.status)}
            
            {/* Always show approve/reject buttons for ERP system action */}
            {(request.status === "pending" || 
              request.status === "manager_approved" || 
              request.status === "senior_manager_review" || 
              request.status === "management_review" || 
              request.status === "finance_review" ||
              request.status === "accounts_review") && (
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => sendNotification(request.id, "Rejection")}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <XCircle className="h-3 w-3 mr-1" />
                  Reject
                </Button>
                <Button 
                  size="sm"
                  onClick={() => sendNotification(request.id, "Approval")}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Approve
                </Button>
              </div>
            )}
            
            {request.status === "auto_rejected" && (
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => sendNotification(request.id, "Override request")}
                >
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Request Override
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => sendNotification(request.id, "WhatsApp/Slack notification")}
                >
                  <MessageSquare className="h-3 w-3 mr-1" />
                  Notify
                </Button>
              </div>
            )}

            {request.status === "approved" && (
              <div className="flex items-center space-x-1 text-green-600">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Fully Approved</span>
              </div>
            )}

            {request.status === "rejected" && (
              <div className="flex items-center space-x-1 text-red-600">
                <XCircle className="h-4 w-4" />
                <span className="text-sm">Rejected by ERP</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div>
        <h2>Approval Workflow</h2>
        <p className="text-muted-foreground">
          Manage expense approvals through Manager → Management → Accounts → Reimbursement workflow
        </p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pending">
            Pending ({expenseRequests.filter(r => ["pending", "manager_approved", "senior_manager_review", "management_review", "finance_review"].includes(r.status)).length})
          </TabsTrigger>
          <TabsTrigger value="reimbursement" className="text-red-600">
            Reimbursement ({expenseRequests.filter(r => r.status === "accounts_review").length})
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejected ({expenseRequests.filter(r => ["rejected", "auto_rejected"].includes(r.status)).length})
          </TabsTrigger>
          <TabsTrigger value="approved">
            Approved ({expenseRequests.filter(r => r.status === "approved").length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4 mt-6">
          {filteredRequests.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-medium mb-2">No Pending Requests</h3>
                <p className="text-muted-foreground">All expense requests have been processed.</p>
              </CardContent>
            </Card>
          ) : (
            filteredRequests.map(request => <ApprovalCard key={request.id} request={request} />)
          )}
        </TabsContent>

        <TabsContent value="reimbursement" className="space-y-4 mt-6">
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Reimbursement Queue:</strong> These requests have completed approval workflow and are ready for payment processing.
            </AlertDescription>
          </Alert>
          
          {filteredRequests.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-medium mb-2">No Reimbursements Pending</h3>
                <p className="text-muted-foreground">All approved expenses have been processed for payment.</p>
              </CardContent>
            </Card>
          ) : (
            filteredRequests.map(request => <ApprovalCard key={request.id} request={request} />)
          )}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4 mt-6">
          {filteredRequests.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <XCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-medium mb-2">No Rejected Requests</h3>
                <p className="text-muted-foreground">No expense requests have been rejected recently.</p>
              </CardContent>
            </Card>
          ) : (
            filteredRequests.map(request => <ApprovalCard key={request.id} request={request} />)
          )}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4 mt-6">
          {filteredRequests.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-medium mb-2">No Approved Requests</h3>
                <p className="text-muted-foreground">No expense requests have been fully approved yet.</p>
              </CardContent>
            </Card>
          ) : (
            filteredRequests.map(request => <ApprovalCard key={request.id} request={request} />)
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}