import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Check, X, MessageSquare, Clock, User, Search, Filter } from "lucide-react";

interface WhatsAppMessage {
  id: string;
  sender: string;
  phone: string;
  message: string;
  timestamp: string;
  type: 'procurement' | 'expense' | 'general';
  amount?: number;
  status: 'pending' | 'approved' | 'rejected';
  category?: string;
  priority: 'high' | 'medium' | 'low';
}

export function WhatsAppApproval() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const [messages, setMessages] = useState<WhatsAppMessage[]>([
    {
      id: "WA-2024-001",
      sender: "Rashida Khatun",
      phone: "+880 1711-234567",
      message: "Thank you, your procurement is approved. Dell Laptop - ৳১,২৫,০০০ for IT department. Please proceed with delivery by Friday.",
      timestamp: "2024-12-15 14:30",
      type: "procurement",
      amount: 125000,
      status: "pending",
      category: "Equipment",
      priority: "high"
    },
    {
      id: "WA-2024-002", 
      sender: "Kabir Ahmed",
      phone: "+880 1711-345678",
      message: "Office stationery expense for this month ৳১৫,০০০. Need approval for bulk purchase of papers, pens, and printer cartridges.",
      timestamp: "2024-12-15 13:45",
      type: "expense",
      amount: 15000,
      status: "pending",
      category: "Office Supplies",
      priority: "medium"
    },
    {
      id: "WA-2024-003",
      sender: "Fatima Begum",
      phone: "+880 1711-456789",
      message: "Marketing budget request ৳৮৫,০০০ for social media advertising campaign Q1 2025. ROI projection attached.",
      timestamp: "2024-12-15 12:20",
      type: "expense",
      amount: 85000,
      status: "pending",
      category: "Marketing",
      priority: "high"
    },
    {
      id: "WA-2024-004",
      sender: "Nazrul Islam",
      phone: "+880 1711-567890",
      message: "Thank you, your procurement is approved. Conference room furniture - ৳৯৫,০০০. Quality looks good, please arrange delivery next week.",
      timestamp: "2024-12-15 11:15",
      type: "procurement",
      amount: 95000,
      status: "approved",
      category: "Furniture",
      priority: "medium"
    },
    {
      id: "WA-2024-005",
      sender: "Salma Khatun",
      phone: "+880 1711-678901",
      message: "Travel expense claim ৳৪৫,০০০ for client meeting in Chittagong. Hotel, transport and meal receipts attached.",
      timestamp: "2024-12-15 10:30",
      type: "expense",
      amount: 45000,
      status: "pending",
      category: "Travel",
      priority: "medium"
    },
    {
      id: "WA-2024-006",
      sender: "Rahman Mia",
      phone: "+880 1711-789012",
      message: "Software license renewal ৳২২,০০০ for accounting software. License expires next month, urgent approval needed.",
      timestamp: "2024-12-15 09:45",
      type: "expense",
      amount: 22000,
      status: "rejected",
      category: "Software",
      priority: "high"
    }
  ]);

  const handleApprove = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, status: 'approved' as const } : msg
    ));
  };

  const handleReject = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, status: 'rejected' as const } : msg
    ));
  };

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || message.status === statusFilter;
    const matchesType = typeFilter === "all" || message.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'procurement': return '🛒';
      case 'expense': return '💰';
      case 'general': return '💬';
      default: return '📱';
    }
  };

  const pendingCount = messages.filter(m => m.status === 'pending').length;
  const approvedCount = messages.filter(m => m.status === 'approved').length;
  const rejectedCount = messages.filter(m => m.status === 'rejected').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="flex items-center space-x-2">
            <MessageSquare className="h-6 w-6 text-green-600" />
            <span>WhatsApp Approval System</span>
          </h2>
          <p className="text-muted-foreground">
            Manage and approve WhatsApp communications, procurement requests, and expense claims.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-yellow-600" />
              <div>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
                <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Approved</p>
                <p className="text-2xl font-bold text-green-600">{approvedCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <X className="h-4 w-4 text-red-600" />
              <div>
                <p className="text-sm text-muted-foreground">Rejected</p>
                <p className="text-2xl font-bold text-red-600">{rejectedCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Messages</p>
                <p className="text-2xl font-bold text-blue-600">{messages.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search messages, senders, or IDs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="all">All Types</option>
              <option value="procurement">Procurement</option>
              <option value="expense">Expense</option>
              <option value="general">General</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Messages List */}
      <div className="space-y-4">
        {filteredMessages.map((message) => (
          <Card key={message.id} className="transition-all hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{getTypeIcon(message.type)}</div>
                  <div>
                    <CardTitle className="text-lg">{message.id}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{message.sender}</span>
                      <span>•</span>
                      <span>{message.phone}</span>
                      <span>•</span>
                      <span>{message.timestamp}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getPriorityColor(message.priority)}>
                    {message.priority.toUpperCase()}
                  </Badge>
                  <Badge className={getStatusColor(message.status)}>
                    {message.status.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm">{message.message}</p>
              </div>

              {message.amount && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-bold text-lg">৳{message.amount.toLocaleString()}</span>
                </div>
              )}

              {message.category && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Category:</span>
                  <Badge variant="outline">{message.category}</Badge>
                </div>
              )}

              {/* ERP Approval Actions */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                  ERP System Action Required
                </div>
                <div className="flex space-x-2">
                  {message.status === 'pending' && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleReject(message.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleApprove(message.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                    </>
                  )}
                  {message.status === 'approved' && (
                    <div className="flex items-center space-x-1 text-green-600">
                      <Check className="h-4 w-4" />
                      <span className="text-sm">Approved by ERP</span>
                    </div>
                  )}
                  {message.status === 'rejected' && (
                    <div className="flex items-center space-x-1 text-red-600">
                      <X className="h-4 w-4" />
                      <span className="text-sm">Rejected by ERP</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMessages.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No messages found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}