import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  History, 
  FileText, 
  Search, 
  Calendar,
  User,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Filter,
  Archive,
  Eye,
  MessageSquare,
  Hash,
  Smartphone,
  ShoppingCart
} from "lucide-react";

interface ProcurementRecord {
  id: string;
  timestamp: string;
  requester: string;
  requesterRole: string;
  procurementId: string;
  description: string;
  vendor: string;
  amount: number;
  approver: string;
  approverRole: string;
  action: 'approved' | 'rejected' | 'pending';
  source: 'whatsapp' | 'slack' | 'erp';
  requestMessage: string;
  responseMessage?: string;
  metadata: {
    quotationAttached?: boolean;
    deliveryDate?: string;
    category?: string;
    urgency?: 'low' | 'medium' | 'high';
    ipAddress?: string;
    deviceInfo?: string;
  };
}

export function PastRecords() {
  const [selectedTab, setSelectedTab] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [actionFilter, setActionFilter] = useState("all");
  const [dateRange, setDateRange] = useState("30days");

  const procurementRecords: ProcurementRecord[] = [
    {
      id: "PR-2024-089",
      timestamp: "2024-08-25 14:30:45",
      requester: "Karim Rahman",
      requesterRole: "IT Manager",
      procurementId: "PROC-2024-089",
      description: "Dell Laptops for development team",
      vendor: "TechVision Solutions Ltd.",
      amount: 240000,
      approver: "Abdul Kader",
      approverRole: "Senior Manager",
      action: "approved",
      source: "whatsapp",
      requestMessage: "Hi team, need to order 4 Dell laptops for new developers. Budget 240K. Vendor quotation attached.",
      responseMessage: "Thank you, your procurement is approved",
      metadata: {
        quotationAttached: true,
        deliveryDate: "2024-09-01",
        category: "Equipment",
        urgency: "high"
      }
    },
    {
      id: "PR-2024-088",
      timestamp: "2024-08-24 11:20:15",
      requester: "Fatima Khatun",
      requesterRole: "Office Manager",
      procurementId: "PROC-2024-088",
      description: "Office furniture for new workspace",
      vendor: "Furniture Plus Ltd.",
      amount: 85000,
      approver: "Mohammad Hasan",
      approverRole: "Senior Manager",
      action: "approved",
      source: "slack",
      requestMessage: "Need to procure office furniture - chairs, desks, cabinets for new floor. Total 85K as per quotation.",
      responseMessage: "Approved. Please coordinate with accounts for payment processing.",
      metadata: {
        quotationAttached: true,
        deliveryDate: "2024-09-05",
        category: "Furniture",
        urgency: "medium"
      }
    },
    {
      id: "PR-2024-087",
      timestamp: "2024-08-23 16:45:30",
      requester: "Abdul Halim",
      requesterRole: "Network Admin",
      procurementId: "PROC-2024-087",
      description: "Network security equipment",
      vendor: "SecureNet Solutions",
      amount: 125000,
      approver: "Mohammad Hasan",
      approverRole: "Senior Manager",
      action: "rejected",
      source: "whatsapp",
      requestMessage: "Urgent: Network security upgrade needed. SecureNet quoted 125K for firewall and switches.",
      responseMessage: "Rejected - Need detailed technical specification and comparison with other vendors first.",
      metadata: {
        quotationAttached: false,
        category: "IT Security",
        urgency: "high"
      }
    },
    {
      id: "PR-2024-086",
      timestamp: "2024-07-25 10:30:18",
      requester: "Nasreen Akter",
      requesterRole: "Finance Manager",
      procurementId: "PROC-2024-086",
      description: "Accounting software license renewal",
      vendor: "Software Solutions BD",
      amount: 65000,
      approver: "Ruma Akter",
      approverRole: "Finance Director",
      action: "approved",
      source: "slack",
      requestMessage: "Annual accounting software renewal due. Same vendor, same price 65K. License expires next week.",
      responseMessage: "Approved for renewal. Critical for operations continuity.",
      metadata: {
        quotationAttached: true,
        category: "Software",
        urgency: "high"
      }
    },
    {
      id: "PR-2024-085",
      timestamp: "2024-07-24 13:15:22",
      requester: "Aminul Haque",
      requesterRole: "Marketing Manager",
      procurementId: "PROC-2024-085",
      description: "Promotional materials for trade show",
      vendor: "Print Pro Marketing",
      amount: 45000,
      approver: "Abdul Kader",
      approverRole: "Senior Manager",
      action: "approved",
      source: "whatsapp",
      requestMessage: "Trade show next month. Need banners, brochures, standee from Print Pro. Total 45K including delivery.",
      responseMessage: "Approved. Ensure delivery 1 week before event.",
      metadata: {
        quotationAttached: true,
        deliveryDate: "2024-08-15",
        category: "Marketing",
        urgency: "medium"
      }
    }
  ];

  const monthlyStats = {
    "August 25": {
      totalRequests: 28,
      approved: 22,
      rejected: 4,
      pending: 2,
      totalAmount: 1250000,
      avgProcessingTime: "2.3 hours"
    },
    "July 25": {
      totalRequests: 34,
      approved: 28,
      rejected: 5,
      pending: 1,
      totalAmount: 1580000,
      avgProcessingTime: "1.8 hours"
    },
    "June 25": {
      totalRequests: 31,
      approved: 26,
      rejected: 4,
      pending: 1,
      totalAmount: 1420000,
      avgProcessingTime: "2.1 hours"
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-blue-600" />;
    }
  };

  const getActionBadge = (action: string) => {
    const actionConfig = {
      approved: { label: "Approved", color: "bg-green-100 text-green-800" },
      rejected: { label: "Rejected", color: "bg-red-100 text-red-800" },
      pending: { label: "Pending", color: "bg-blue-100 text-blue-800" }
    };
    
    const config = actionConfig[action as keyof typeof actionConfig];
    return <Badge className={`${config.color} border-none text-xs`}>{config.label}</Badge>;
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'whatsapp': return <Smartphone className="h-3 w-3 text-green-600" />;
      case 'slack': return <Hash className="h-3 w-3 text-purple-600" />;
      default: return <FileText className="h-3 w-3 text-gray-600" />;
    }
  };

  const filteredRecords = procurementRecords.filter(record => {
    const matchesSearch = record.requester.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.procurementId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = actionFilter === "all" || record.action === actionFilter;
    return matchesSearch && matchesAction;
  });

  const exportRecords = () => {
    alert("Procurement records exported for track record maintenance");
  };

  const RecordCard = ({ record }: { record: ProcurementRecord }) => (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center space-y-1">
            {getActionIcon(record.action)}
            {getSourceIcon(record.source)}
          </div>
          
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium">{record.procurementId}</span>
                  {getActionBadge(record.action)}
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{record.timestamp}</span>
                  <span>•</span>
                  <User className="h-3 w-3" />
                  <span>{record.requester} ({record.requesterRole})</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Description:</span>
                <p className="font-medium">{record.description}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Amount:</span>
                <p className="font-medium">৳{record.amount.toLocaleString()}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Vendor:</span>
                <p className="font-medium">{record.vendor}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Approver:</span>
                <p className="font-medium">{record.approver}</p>
              </div>
            </div>

            {/* Request Message */}
            <div className="p-3 bg-blue-50 rounded-lg">
              <span className="text-muted-foreground text-sm">Request:</span>
              <p className="text-sm">{record.requestMessage}</p>
            </div>

            {/* Response Message */}
            {record.responseMessage && (
              <div className={`p-3 rounded-lg ${record.action === 'approved' ? 'bg-green-50' : 'bg-red-50'}`}>
                <span className="text-muted-foreground text-sm">Response:</span>
                <p className="text-sm">{record.responseMessage}</p>
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div>
                Category: {record.metadata.category}
                {record.metadata.deliveryDate && (
                  <span> • Delivery: {record.metadata.deliveryDate}</span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {record.metadata.quotationAttached && (
                  <Badge variant="outline" className="text-xs">Quotation Attached</Badge>
                )}
                {record.metadata.urgency && (
                  <Badge variant={record.metadata.urgency === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                    {record.metadata.urgency.toUpperCase()}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <Button size="sm" variant="outline">
              <Eye className="h-3 w-3 mr-1" />
              View
            </Button>
            <Button size="sm" variant="outline">
              <Download className="h-3 w-3 mr-1" />
              Export
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="flex items-center space-x-2">
            <History className="h-6 w-6 text-blue-600" />
            <span>Past Records</span>
          </h2>
          <p className="text-muted-foreground">
            Track record of all procurement requests and approvals for future reference and compliance.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            <Archive className="h-3 w-3 mr-1" />
            Track Record Active
          </Badge>
          <Button variant="outline" size="sm" onClick={exportRecords}>
            <Download className="h-4 w-4 mr-2" />
            Export Records
          </Button>
        </div>
      </div>

      {/* Monthly Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(monthlyStats).map(([month, stats]) => (
          <Card key={month}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{month}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Total Requests:</span>
                <span className="font-medium">{stats.totalRequests}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Approved:</span>
                <span className="font-medium text-green-600">{stats.approved}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Rejected:</span>
                <span className="font-medium text-red-600">{stats.rejected}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total Amount:</span>
                <span className="font-medium">৳{stats.totalAmount.toLocaleString()}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Avg Processing: {stats.avgProcessingTime}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by requester, description, vendor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <select
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="all">All Actions</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="pending">Pending</option>
            </select>

            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="30days">Last 30 days</option>
              <option value="90days">Last 90 days</option>
              <option value="6months">Last 6 months</option>
              <option value="1year">Last year</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Records List */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recent">
            Recent ({filteredRecords.slice(0, 5).length})
          </TabsTrigger>
          <TabsTrigger value="approved">
            Approved ({filteredRecords.filter(r => r.action === 'approved').length})
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejected ({filteredRecords.filter(r => r.action === 'rejected').length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4 mt-6">
          {filteredRecords.slice(0, 10).map(record => (
            <RecordCard key={record.id} record={record} />
          ))}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4 mt-6">
          {filteredRecords.filter(r => r.action === 'approved').map(record => (
            <RecordCard key={record.id} record={record} />
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4 mt-6">
          {filteredRecords.filter(r => r.action === 'rejected').map(record => (
            <RecordCard key={record.id} record={record} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}