import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Check, X, Hash, Clock, User, Search, Filter, MessageCircle } from "lucide-react";

interface SlackMessage {
  id: string;
  channel: string;
  sender: string;
  username: string;
  message: string;
  timestamp: string;
  type: 'procurement' | 'expense' | 'general' | 'approval';
  amount?: number;
  status: 'pending' | 'approved' | 'rejected';
  category?: string;
  priority: 'high' | 'medium' | 'low';
  thread?: number;
}

export function SlackApproval() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [channelFilter, setChannelFilter] = useState("all");

  const [messages, setMessages] = useState<SlackMessage[]>([
    {
      id: "SL-2024-001",
      channel: "#procurement",
      sender: "Ashraf Rahman",
      username: "@ashraf.rahman",
      message: "Thank you, your procurement is approved. Server hardware upgrade - ৳৩,৫০,০০০. IT team can proceed with the order. Expected delivery in 2 weeks.",
      timestamp: "2024-12-15 15:20",
      type: "procurement",
      amount: 350000,
      status: "pending",
      category: "Hardware",
      priority: "high",
      thread: 5
    },
    {
      id: "SL-2024-002",
      channel: "#finance",
      sender: "Nasreen Akter",
      username: "@nasreen.akter",
      message: "Q4 marketing budget approval needed - ৳২,২৫,০০০ for digital campaigns, influencer partnerships, and content creation. ROI metrics attached.",
      timestamp: "2024-12-15 14:45",
      type: "expense",
      amount: 225000,
      status: "pending",
      category: "Marketing",
      priority: "high",
      thread: 3
    },
    {
      id: "SL-2024-003",
      channel: "#operations",
      sender: "Mizanur Rahman",
      username: "@mizan.ops",
      message: "Office maintenance expense ৳৩৫,০০০ - AC servicing, electrical work, and cleaning supplies for December. Urgent approval needed.",
      timestamp: "2024-12-15 13:30",
      type: "expense",
      amount: 35000,
      status: "pending",
      category: "Maintenance",
      priority: "medium",
      thread: 2
    },
    {
      id: "SL-2024-004",
      channel: "#procurement",
      sender: "Shahana Begum",
      username: "@shahana.proc",
      message: "Thank you, your procurement is approved. Office furniture for new workspace - ৳১,৮৫,০০০. Quality approved, arrange delivery next Monday.",
      timestamp: "2024-12-15 12:15",
      type: "procurement",
      amount: 185000,
      status: "approved",
      category: "Furniture",
      priority: "medium",
      thread: 8
    },
    {
      id: "SL-2024-005",
      channel: "#hr",
      sender: "Rafiqul Islam",
      username: "@rafiq.hr",
      message: "Training program budget request ৳৯৫,০০০ for employee skill development workshops Q1 2025. Course catalog and trainer details shared.",
      timestamp: "2024-12-15 11:40",
      type: "expense",
      amount: 95000,
      status: "pending",
      category: "Training",
      priority: "medium",
      thread: 4
    },
    {
      id: "SL-2024-006",
      channel: "#finance",
      sender: "Taslima Khatun",
      username: "@taslima.finance",
      message: "Travel reimbursement ৳৬৫,০০০ for client visits in Sylhet and Rangpur. All receipts documented in expense tracker.",
      timestamp: "2024-12-15 10:25",
      type: "expense",
      amount: 65000,
      status: "rejected",
      category: "Travel",
      priority: "low",
      thread: 1
    },
    {
      id: "SL-2024-007",
      channel: "#general",
      sender: "Karim Ahmed",
      username: "@karim.sales",
      message: "Client entertainment budget ৳৪৫,০০০ for year-end corporate events and client dinners. Expected to close 3 major deals.",
      timestamp: "2024-12-15 09:50",
      type: "expense",
      amount: 45000,
      status: "pending",
      category: "Entertainment",
      priority: "high",
      thread: 6
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
                         message.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.channel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || message.status === statusFilter;
    const matchesType = typeFilter === "all" || message.type === typeFilter;
    const matchesChannel = channelFilter === "all" || message.channel === channelFilter;
    return matchesSearch && matchesStatus && matchesType && matchesChannel;
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

  const getChannelColor = (channel: string) => {
    const colors = {
      '#procurement': 'bg-purple-100 text-purple-800',
      '#finance': 'bg-green-100 text-green-800',
      '#operations': 'bg-blue-100 text-blue-800',
      '#hr': 'bg-orange-100 text-orange-800',
      '#general': 'bg-gray-100 text-gray-800'
    };
    return colors[channel as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'procurement': return '🛒';
      case 'expense': return '💰';
      case 'approval': return '✅';
      case 'general': return '💬';
      default: return '💼';
    }
  };

  const pendingCount = messages.filter(m => m.status === 'pending').length;
  const approvedCount = messages.filter(m => m.status === 'approved').length;
  const rejectedCount = messages.filter(m => m.status === 'rejected').length;
  const uniqueChannels = [...new Set(messages.map(m => m.channel))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="flex items-center space-x-2">
            <Hash className="h-6 w-6 text-purple-600" />
            <span>Slack Approval System</span>
          </h2>
          <p className="text-muted-foreground">
            Manage and approve Slack communications, procurement requests, and expense claims across channels.
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
              <Hash className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Active Channels</p>
                <p className="text-2xl font-bold text-blue-600">{uniqueChannels.length}</p>
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
                  placeholder="Search messages, senders, channels..."
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
              <option value="approval">Approval</option>
              <option value="general">General</option>
            </select>

            <select
              value={channelFilter}
              onChange={(e) => setChannelFilter(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="all">All Channels</option>
              {uniqueChannels.map(channel => (
                <option key={channel} value={channel}>{channel}</option>
              ))}
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
                      <Badge className={getChannelColor(message.channel)}>
                        {message.channel}
                      </Badge>
                      <span>•</span>
                      <User className="h-3 w-3" />
                      <span>{message.sender}</span>
                      <span className="text-xs">({message.username})</span>
                      <span>•</span>
                      <span>{message.timestamp}</span>
                      {message.thread && (
                        <>
                          <span>•</span>
                          <MessageCircle className="h-3 w-3" />
                          <span>{message.thread} replies</span>
                        </>
                      )}
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
              <div className="p-3 bg-muted rounded-lg border-l-4 border-purple-500">
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
            <Hash className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
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