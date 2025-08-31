import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Shield, 
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
  Smartphone
} from "lucide-react";

interface AuditRecord {
  id: string;
  timestamp: string;
  action: 'approve' | 'reject' | 'auto_approve' | 'auto_reject';
  category: 'expense' | 'procurement' | 'receipt' | 'budget' | 'workflow';
  entityId: string;
  entityType: string;
  amount?: number;
  approver: string;
  approverRole: string;
  reason?: string;
  source: 'whatsapp' | 'slack' | 'erp' | 'manual';
  metadata: {
    sender?: string;
    vendor?: string;
    budgetCategory?: string;
    previousStatus?: string;
    newStatus?: string;
    ipAddress?: string;
    deviceInfo?: string;
  };
  compliance: {
    level: 'low' | 'medium' | 'high' | 'critical';
    regulation?: string;
    retentionPeriod: number; // in years
  };
}

export function AuditTrail() {
  const [selectedTab, setSelectedTab] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [actionFilter, setActionFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [dateRange, setDateRange] = useState("7days");

  const auditRecords: AuditRecord[] = [
    {
      id: "AUD-2024-001",
      timestamp: "2024-12-15 14:30:45",
      action: "auto_approve",
      category: "procurement",
      entityId: "PROC-2024-001",
      entityType: "Procurement Request",
      amount: 125000,
      approver: "System",
      approverRole: "Auto-Approval Engine",
      reason: "WhatsApp message: 'Thank you, your procurement is approved'",
      source: "whatsapp",
      metadata: {
        sender: "Karim Rahman",
        vendor: "TechVision Solutions Ltd.",
        ipAddress: "192.168.1.101",
        deviceInfo: "WhatsApp Business API"
      },
      compliance: {
        level: "high",
        regulation: "Corporate Procurement Policy",
        retentionPeriod: 7
      }
    },
    {
      id: "AUD-2024-002",
      timestamp: "2024-12-15 13:45:22",
      action: "approve",
      category: "expense",
      entityId: "EXP-2024-003",
      entityType: "Travel Expense",
      amount: 35000,
      approver: "Abdul Kader",
      approverRole: "Manager",
      reason: "Client meeting approved - within budget",
      source: "erp",
      metadata: {
        sender: "Rahim Uddin",
        budgetCategory: "Travel",
        previousStatus: "pending",
        newStatus: "manager_approved",
        ipAddress: "192.168.1.105"
      },
      compliance: {
        level: "medium",
        regulation: "Expense Management Policy",
        retentionPeriod: 5
      }
    },
    {
      id: "AUD-2024-003",
      timestamp: "2024-12-15 12:20:15",
      action: "auto_reject",
      category: "expense",
      entityId: "EXP-2024-004",
      entityType: "Food Expense",
      amount: 18000,
      approver: "System",
      approverRole: "Budget Controller",
      reason: "Budget exceeded - Food category at 105% capacity",
      source: "erp",
      metadata: {
        sender: "Fatima Khatun",
        budgetCategory: "Food",
        previousStatus: "pending",
        newStatus: "auto_rejected"
      },
      compliance: {
        level: "high",
        regulation: "Budget Control Policy",
        retentionPeriod: 7
      }
    },
    {
      id: "AUD-2024-004",
      timestamp: "2024-12-15 11:55:30",
      action: "approve",
      category: "receipt",
      entityId: "REC-2024-002",
      entityType: "Receipt Verification",
      amount: 8500,
      approver: "Nasreen Akter",
      approverRole: "Finance Manager",
      reason: "OCR verification successful, receipt valid",
      source: "slack",
      metadata: {
        sender: "Kabir Ahmed",
        vendor: "Green Restaurant",
        ipAddress: "192.168.1.108",
        deviceInfo: "Slack Desktop App"
      },
      compliance: {
        level: "medium",
        regulation: "Financial Documentation Policy",
        retentionPeriod: 5
      }
    },
    {
      id: "AUD-2024-005",
      timestamp: "2024-12-15 10:30:18",
      action: "reject",
      category: "procurement",
      entityId: "PROC-2024-003",
      entityType: "Equipment Purchase",
      amount: 85000,
      approver: "Mohammad Hasan",
      approverRole: "Senior Manager",
      reason: "Vendor documentation incomplete",
      source: "erp",
      metadata: {
        sender: "Abdul Halim",
        vendor: "SecureNet Solutions",
        previousStatus: "senior_manager_review",
        newStatus: "rejected",
        ipAddress: "192.168.1.112"
      },
      compliance: {
        level: "high",
        regulation: "Procurement Compliance Policy",
        retentionPeriod: 7
      }
    },
    {
      id: "AUD-2024-006",
      timestamp: "2024-12-14 16:45:30",
      action: "approve",
      category: "budget",
      entityId: "BUD-2024-Q4",
      entityType: "Budget Adjustment",
      amount: 50000,
      approver: "Ruma Akter",
      approverRole: "Finance Director",
      reason: "Q4 marketing budget increase approved",
      source: "erp",
      metadata: {
        budgetCategory: "Marketing",
        previousStatus: "pending_approval",
        newStatus: "approved",
        ipAddress: "192.168.1.115"
      },
      compliance: {
        level: "critical",
        regulation: "Budget Authorization Policy",
        retentionPeriod: 10
      }
    }
  ];

  const complianceStats = {
    totalRecords: auditRecords.length,
    byCompliance: {
      critical: auditRecords.filter(r => r.compliance.level === 'critical').length,
      high: auditRecords.filter(r => r.compliance.level === 'high').length,
      medium: auditRecords.filter(r => r.compliance.level === 'medium').length,
      low: auditRecords.filter(r => r.compliance.level === 'low').length
    },
    byAction: {
      approved: auditRecords.filter(r => r.action === 'approve' || r.action === 'auto_approve').length,
      rejected: auditRecords.filter(r => r.action === 'reject' || r.action === 'auto_reject').length
    },
    byCategory: {
      expense: auditRecords.filter(r => r.category === 'expense').length,
      procurement: auditRecords.filter(r => r.category === 'procurement').length,
      receipt: auditRecords.filter(r => r.category === 'receipt').length,
      budget: auditRecords.filter(r => r.category === 'budget').length
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'approve':
      case 'auto_approve':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'reject':
      case 'auto_reject':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-blue-600" />;
    }
  };

  const getActionBadge = (action: string) => {
    const actionConfig = {
      approve: { label: "Approved", color: "bg-green-100 text-green-800" },
      auto_approve: { label: "Auto-Approved", color: "bg-green-200 text-green-900" },
      reject: { label: "Rejected", color: "bg-red-100 text-red-800" },
      auto_reject: { label: "Auto-Rejected", color: "bg-red-200 text-red-900" }
    };
    
    const config = actionConfig[action as keyof typeof actionConfig];
    return <Badge className={`${config.color} border-none text-xs`}>{config.label}</Badge>;
  };

  const getComplianceBadge = (level: string) => {
    const complianceConfig = {
      low: { label: "Low", color: "bg-gray-100 text-gray-800" },
      medium: { label: "Medium", color: "bg-blue-100 text-blue-800" },
      high: { label: "High", color: "bg-orange-100 text-orange-800" },
      critical: { label: "Critical", color: "bg-red-100 text-red-800" }
    };
    
    const config = complianceConfig[level as keyof typeof complianceConfig];
    return <Badge variant="outline" className={`${config.color} text-xs`}>{config.label}</Badge>;
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'whatsapp': return <Smartphone className="h-3 w-3 text-green-600" />;
      case 'slack': return <Hash className="h-3 w-3 text-purple-600" />;
      case 'erp': return <Shield className="h-3 w-3 text-blue-600" />;
      default: return <FileText className="h-3 w-3 text-gray-600" />;
    }
  };

  const filteredRecords = auditRecords.filter(record => {
    const matchesSearch = record.entityId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.approver.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.metadata.sender?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.metadata.vendor?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = actionFilter === "all" || record.action === actionFilter;
    const matchesCategory = categoryFilter === "all" || record.category === categoryFilter;
    return matchesSearch && matchesAction && matchesCategory;
  });

  const exportAuditData = () => {
    alert("Audit trail data exported for compliance reporting");
  };

  const AuditCard = ({ record }: { record: AuditRecord }) => (
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
                  <span className="font-medium">{record.id}</span>
                  {getActionBadge(record.action)}
                  {getComplianceBadge(record.compliance.level)}
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{record.timestamp}</span>
                  <span>•</span>
                  <User className="h-3 w-3" />
                  <span>{record.approver} ({record.approverRole})</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Entity:</span>
                <p className="font-medium">{record.entityType} - {record.entityId}</p>
              </div>
              {record.amount && (
                <div>
                  <span className="text-muted-foreground">Amount:</span>
                  <p className="font-medium">৳{record.amount.toLocaleString()}</p>
                </div>
              )}
              <div>
                <span className="text-muted-foreground">Category:</span>
                <p className="font-medium capitalize">{record.category}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Source:</span>
                <p className="font-medium capitalize">{record.source}</p>
              </div>
            </div>

            {record.reason && (
              <div className="p-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground text-sm">Reason:</span>
                <p className="text-sm">{record.reason}</p>
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div>
                Retention: {record.compliance.retentionPeriod} years
                {record.compliance.regulation && (
                  <span> • {record.compliance.regulation}</span>
                )}
              </div>
              {record.metadata.ipAddress && (
                <span>IP: {record.metadata.ipAddress}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <Button size="sm" variant="outline">
              <Eye className="h-3 w-3 mr-1" />
              Details
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
            <Shield className="h-6 w-6 text-blue-600" />
            <span>Audit Trail</span>
          </h2>
          <p className="text-muted-foreground">
            Complete audit trail of all approval/rejection decisions for compliance and governance.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            <Archive className="h-3 w-3 mr-1" />
            Compliance Active
          </Badge>
          <Button variant="outline" size="sm" onClick={exportAuditData}>
            <Download className="h-4 w-4 mr-2" />
            Export Audit
          </Button>
        </div>
      </div>

      {/* Compliance Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Total Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{complianceStats.totalRecords}</div>
            <div className="text-xs text-muted-foreground">Audit entries</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Approval Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {((complianceStats.byAction.approved / complianceStats.totalRecords) * 100).toFixed(1)}%
            </div>
            <div className="text-xs text-muted-foreground">
              {complianceStats.byAction.approved} approved, {complianceStats.byAction.rejected} rejected
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Compliance Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Critical:</span>
                <span className="font-medium">{complianceStats.byCompliance.critical}</span>
              </div>
              <div className="flex justify-between">
                <span>High:</span>
                <span className="font-medium">{complianceStats.byCompliance.high}</span>
              </div>
              <div className="flex justify-between">
                <span>Medium:</span>
                <span className="font-medium">{complianceStats.byCompliance.medium}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Expense:</span>
                <span className="font-medium">{complianceStats.byCategory.expense}</span>
              </div>
              <div className="flex justify-between">
                <span>Procurement:</span>
                <span className="font-medium">{complianceStats.byCategory.procurement}</span>
              </div>
              <div className="flex justify-between">
                <span>Receipts:</span>
                <span className="font-medium">{complianceStats.byCategory.receipt}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by ID, approver, sender, vendor..."
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
              <option value="approve">Approved</option>
              <option value="reject">Rejected</option>
              <option value="auto_approve">Auto-Approved</option>
              <option value="auto_reject">Auto-Rejected</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="all">All Categories</option>
              <option value="expense">Expense</option>
              <option value="procurement">Procurement</option>
              <option value="receipt">Receipt</option>
              <option value="budget">Budget</option>
            </select>

            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="90days">Last 90 days</option>
              <option value="1year">Last year</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Audit Records */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
          <TabsTrigger value="critical">Critical</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4 mt-6">
          {filteredRecords.slice(0, 10).map(record => (
            <AuditCard key={record.id} record={record} />
          ))}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4 mt-6">
          {filteredRecords.filter(r => r.action === 'approve' || r.action === 'auto_approve').map(record => (
            <AuditCard key={record.id} record={record} />
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4 mt-6">
          {filteredRecords.filter(r => r.action === 'reject' || r.action === 'auto_reject').map(record => (
            <AuditCard key={record.id} record={record} />
          ))}
        </TabsContent>

        <TabsContent value="critical" className="space-y-4 mt-6">
          {filteredRecords.filter(r => r.compliance.level === 'critical').map(record => (
            <AuditCard key={record.id} record={record} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}