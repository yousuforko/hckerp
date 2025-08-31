import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  MessageSquare, 
  Smartphone,
  ShoppingCart,
  Building2,
  FileText,
  Send,
  Bot,
  Zap,
  DollarSign,
  Calendar,
  Package,
  Truck,
  Star,
  AlertTriangle,
  Eye
} from "lucide-react";

interface ProcurementRequest {
  id: string;
  vendor: string;
  vendorEmail: string;
  vendorPhone: string;
  salesPerson: string;
  amount: number;
  description: string;
  category: string;
  quotationDate: string;
  deliveryDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'auto_approved' | 'negotiating';
  approvalMethod: 'whatsapp' | 'slack' | 'email' | 'manual';
  approvedBy?: string;
  approvalMessage?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  rating?: number;
  terms?: string;
  attachments?: string[];
}

export function ProcurementApproval() {
  const [selectedTab, setSelectedTab] = useState("pending");
  const [approvalMessage, setApprovalMessage] = useState("Thank you, your procurement is approved");

  const procurementRequests: ProcurementRequest[] = [
    {
      id: "PROC-2024-001",
      vendor: "TechVision Solutions Ltd.",
      vendorEmail: "sales@techvision.com.bd",
      vendorPhone: "+880 1711-234567",
      salesPerson: "Karim Rahman",
      amount: 125000,
      description: "Dell Latitude 5520 Laptops (5 units) with 8GB RAM, 256GB SSD",
      category: "Equipment",
      quotationDate: "2024-08-31",
      deliveryDate: "2024-09-05",
      status: "auto_approved",
      approvalMethod: "whatsapp",
      approvedBy: "Sales Team",
      approvalMessage: "Thank you, your procurement is approved",
      priority: "high",
      rating: 4.5,
      terms: "30 days warranty, Free installation"
    },
    {
      id: "PROC-2024-002", 
      vendor: "Green Office Supplies",
      vendorEmail: "info@greenoffice.bd",
      vendorPhone: "+880 1812-345678",
      salesPerson: "Nasir Ahmed",
      amount: 45000,
      description: "Office furniture - Ergonomic chairs (10 units) and desks (5 units)",
      category: "Furniture",
      quotationDate: "2024-08-30",
      deliveryDate: "2024-09-10",
      status: "pending",
      approvalMethod: "slack",
      priority: "medium",
      rating: 4.2,
      terms: "1 year warranty, Assembly included"
    },
    {
      id: "PROC-2024-003",
      vendor: "Metro Catering Services",
      vendorEmail: "orders@metrocatering.bd",
      vendorPhone: "+880 1955-567890",
      salesPerson: "Fatima Begum",
      amount: 25000,
      description: "Monthly catering contract for office lunch (50 employees)",
      category: "Food & Catering", 
      quotationDate: "2024-08-29",
      deliveryDate: "2024-09-01",
      status: "approved",
      approvalMethod: "email",
      approvedBy: "HR Manager",
      priority: "medium",
      rating: 4.0,
      terms: "Monthly payment, Menu variety included"
    },
    {
      id: "PROC-2024-004",
      vendor: "SecureNet Solutions",
      vendorEmail: "sales@securenet.bd",
      vendorPhone: "+880 1677-890123",
      salesPerson: "Abdul Halim",
      amount: 85000,
      description: "Network security upgrade - Firewall and monitoring software",
      category: "IT Services",
      quotationDate: "2024-08-28",
      deliveryDate: "2024-09-15",
      status: "negotiating",
      approvalMethod: "whatsapp",
      priority: "urgent",
      rating: 4.7,
      terms: "24/7 support, 6 months free maintenance"
    },
    {
      id: "PROC-2024-005",
      vendor: "PowerTech Energy Ltd.",
      vendorEmail: "contact@powertech.bd",
      vendorPhone: "+880 1566-012345",
      salesPerson: "Mohammad Hasan",
      amount: 320000,
      description: "Solar panel installation (20KW) with battery backup system",
      category: "Infrastructure",
      quotationDate: "2024-08-27",
      deliveryDate: "2024-10-01",
      status: "pending",
      approvalMethod: "email",
      priority: "high",
      rating: 4.3,
      terms: "5 years warranty, Government subsidy applicable"
    }
  ];

  const autoApprovalRules = [
    { 
      trigger: "Thank you, your procurement is approved",
      condition: "Exact message match",
      action: "Auto-approve and update ERP",
      enabled: true
    },
    {
      trigger: "Procurement approved for delivery",
      condition: "Contains 'approved' and 'delivery'",
      action: "Auto-approve with delivery tracking",
      enabled: true
    },
    {
      trigger: "Your quotation is accepted",
      condition: "Contains 'quotation' and 'accepted'",
      action: "Auto-approve procurement request",
      enabled: true
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "auto_approved": return <Bot className="h-4 w-4 text-green-600" />;
      case "approved": return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "rejected": return <XCircle className="h-4 w-4 text-red-500" />;
      case "negotiating": return <MessageSquare className="h-4 w-4 text-orange-500" />;
      default: return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "Pending Review", color: "bg-yellow-100 text-yellow-800" },
      approved: { label: "Approved", color: "bg-green-100 text-green-800" },
      auto_approved: { label: "Auto-Approved", color: "bg-green-200 text-green-900 border border-green-300" },
      rejected: { label: "Rejected", color: "bg-red-100 text-red-800" },
      negotiating: { label: "Negotiating", color: "bg-orange-100 text-orange-800" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={`${config.color} border-none`}>{config.label}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      low: { label: "Low", color: "bg-gray-100 text-gray-700" },
      medium: { label: "Medium", color: "bg-blue-100 text-blue-700" },
      high: { label: "High", color: "bg-orange-100 text-orange-700" },
      urgent: { label: "Urgent", color: "bg-red-100 text-red-700" }
    };
    
    const config = priorityConfig[priority as keyof typeof priorityConfig];
    return <Badge variant="outline" className={`${config.color} text-xs`}>{config.label}</Badge>;
  };

  const getApprovalMethodIcon = (method: string) => {
    switch (method) {
      case "whatsapp": return <Smartphone className="h-3 w-3 text-green-600" />;
      case "slack": return <MessageSquare className="h-3 w-3 text-purple-600" />;
      case "email": return <FileText className="h-3 w-3 text-blue-600" />;
      default: return <FileText className="h-3 w-3 text-gray-600" />;
    }
  };

  const filteredRequests = procurementRequests.filter(request => {
    switch (selectedTab) {
      case "pending": return request.status === "pending" || request.status === "negotiating";
      case "approved": return request.status === "approved" || request.status === "auto_approved";
      case "rejected": return request.status === "rejected";
      default: return true;
    }
  });

  const handleAutoApprove = (requestId: string) => {
    // Simulate auto-approval process
    alert(`Auto-approval triggered for ${requestId}. WhatsApp/Slack notification sent to vendor.`);
  };

  const sendApprovalMessage = (request: ProcurementRequest) => {
    // Simulate sending approval message
    alert(`Approval message sent to ${request.vendor} via ${request.approvalMethod}: "${approvalMessage}"`);
  };

  const ProcurementCard = ({ request }: { request: ProcurementRequest }) => (
    <Card className={`mb-4 ${request.status === 'auto_approved' ? 'border-green-200 bg-green-50' : ''}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                {request.vendor.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                {getStatusIcon(request.status)}
                <span className="font-medium">{request.vendor}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{request.id}</span>
              </div>
              
              <h4 className="font-medium mb-1">{request.description}</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-3 w-3 text-green-600" />
                    <span className="font-medium text-green-600">৳{request.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="h-3 w-3 text-blue-600" />
                    <span className="text-muted-foreground">{request.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3 text-purple-600" />
                    <span className="text-muted-foreground">{request.deliveryDate}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-3 w-3 text-orange-600" />
                    <span className="text-muted-foreground">{request.salesPerson}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getApprovalMethodIcon(request.approvalMethod)}
                    <span className="text-muted-foreground capitalize">{request.approvalMethod}</span>
                  </div>
                  {request.rating && (
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-muted-foreground">{request.rating}/5</span>
                    </div>
                  )}
                </div>
              </div>
              
              {request.terms && (
                <div className="mb-3 p-2 bg-gray-50 rounded-md">
                  <p className="text-sm text-muted-foreground">
                    <strong>Terms:</strong> {request.terms}
                  </p>
                </div>
              )}
              
              {request.approvalMessage && request.status === 'auto_approved' && (
                <Alert className="mt-3 border-green-200 bg-green-50">
                  <Bot className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    <strong>Auto-Approved:</strong> "{request.approvalMessage}" - Automatically updated in ERP system
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            {getStatusBadge(request.status)}
            {getPriorityBadge(request.priority)}
            
            {/* Always show approve/reject buttons for ERP system action */}
            {(request.status === "pending" || request.status === "negotiating") && (
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => alert(`Procurement ${request.id} rejected by ERP`)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <XCircle className="h-3 w-3 mr-1" />
                    Reject
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Approve
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Approve Procurement</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Vendor: {request.vendor}</label>
                          <p className="text-sm text-muted-foreground">{request.vendorPhone}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Approval Message</label>
                          <Textarea
                            value={approvalMessage}
                            onChange={(e) => setApprovalMessage(e.target.value)}
                            className="mt-1"
                            rows={3}
                          />
                        </div>
                        <Alert className="border-green-200 bg-green-50">
                          <Zap className="h-4 w-4 text-green-600" />
                          <AlertDescription className="text-green-800">
                            This message will auto-approve the procurement and update the ERP system
                          </AlertDescription>
                        </Alert>
                        <Button 
                          className="w-full" 
                          onClick={() => sendApprovalMessage(request)}
                        >
                          Send & Auto-Approve
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => alert(`Negotiation started with ${request.vendor}`)}
                >
                  <MessageSquare className="h-3 w-3 mr-1" />
                  Negotiate
                </Button>
              </div>
            )}
            
            {(request.status === "approved" || request.status === "auto_approved") && (
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-1 text-green-600">
                  {request.status === "auto_approved" ? <Bot className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                  <span className="text-sm">
                    {request.status === "auto_approved" ? "Auto-Approved" : "Approved by ERP"}
                  </span>
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => alert(`ERP details for ${request.id}`)}
                >
                  <Eye className="h-3 w-3 mr-1" />
                  View ERP
                </Button>
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
      <div className="flex items-center justify-between">
        <div>
          <h2>Procurement Approval System</h2>
          <p className="text-muted-foreground">
            Auto-approve vendor quotations and manage procurement requests with ERP integration
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700">
            <Bot className="h-3 w-3 mr-1" />
            Auto-Approval Active
          </Badge>
          <Button variant="outline" size="sm">
            <Zap className="h-4 w-4 mr-2" />
            Configure Rules
          </Button>
        </div>
      </div>

      {/* Auto-Approval Rules Summary */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-blue-600" />
            <span>Auto-Approval Rules</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {autoApprovalRules.map((rule, index) => (
              <div key={index} className="p-3 bg-white rounded-lg border">
                <div className="flex items-start justify-between mb-2">
                  <Badge className="bg-green-100 text-green-800 text-xs">
                    Active
                  </Badge>
                  <Zap className="h-4 w-4 text-green-600" />
                </div>
                <p className="font-medium text-sm mb-1">"{rule.trigger}"</p>
                <p className="text-xs text-muted-foreground">{rule.action}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">
            Pending ({procurementRequests.filter(r => r.status === "pending" || r.status === "negotiating").length})
          </TabsTrigger>
          <TabsTrigger value="approved">
            Approved ({procurementRequests.filter(r => r.status === "approved" || r.status === "auto_approved").length})
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejected ({procurementRequests.filter(r => r.status === "rejected").length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4 mt-6">
          {filteredRequests.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-medium mb-2">No Pending Procurement</h3>
                <p className="text-muted-foreground">All vendor quotations have been processed.</p>
              </CardContent>
            </Card>
          ) : (
            filteredRequests.map(request => <ProcurementCard key={request.id} request={request} />)
          )}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4 mt-6">
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Approved Procurements:</strong> These requests have been approved and integrated with the ERP system.
            </AlertDescription>
          </Alert>
          
          {filteredRequests.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-medium mb-2">No Approved Procurements</h3>
                <p className="text-muted-foreground">No procurement requests have been approved yet.</p>
              </CardContent>
            </Card>
          ) : (
            filteredRequests.map(request => <ProcurementCard key={request.id} request={request} />)
          )}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4 mt-6">
          {filteredRequests.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <XCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-medium mb-2">No Rejected Procurements</h3>
                <p className="text-muted-foreground">No vendor quotations have been rejected.</p>
              </CardContent>
            </Card>
          ) : (
            filteredRequests.map(request => <ProcurementCard key={request.id} request={request} />)
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}