import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Alert, AlertDescription } from "./ui/alert";
import { 
  Receipt, 
  FileImage, 
  Brain, 
  Scan, 
  MessageSquare, 
  Hash,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  AlertTriangle,
  Smartphone,
  Calendar,
  DollarSign,
  Building,
  User
} from "lucide-react";

interface ReceiptData {
  id: string;
  source: 'whatsapp' | 'slack' | 'email' | 'manual';
  sender: string;
  senderPhone?: string;
  receiptImage: string;
  uploadDate: string;
  ocrStatus: 'pending' | 'processing' | 'completed' | 'failed';
  nlpStatus: 'pending' | 'processing' | 'completed' | 'failed';
  extractedData?: {
    vendor: string;
    amount: number;
    date: string;
    category: string;
    taxAmount?: number;
    items?: string[];
    confidence: number;
  };
  recordStatus: 'pending' | 'recorded' | 'rejected' | 'duplicate';
  category: 'expense' | 'procurement' | 'billing';
  linkedTransaction?: string;
  duplicateOf?: string;
  manualVerification: boolean;
}

export function ReceiptManagement() {
  const [selectedTab, setSelectedTab] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const receipts: ReceiptData[] = [
    {
      id: "REC-2024-001",
      source: "whatsapp",
      sender: "Rashida Khatun",
      senderPhone: "+880 1711-234567",
      receiptImage: "/api/placeholder/400/300",
      uploadDate: "2024-12-15 14:30",
      ocrStatus: "completed",
      nlpStatus: "completed",
      extractedData: {
        vendor: "City Shopping Mall",
        amount: 12500,
        date: "2024-12-15",
        category: "Office Supplies",
        taxAmount: 1250,
        items: ["A4 Paper", "Printer Ink", "Staplers", "Folders"],
        confidence: 0.92
      },
      recordStatus: "recorded",
      category: "billing",
      linkedTransaction: "TXN-2024-445",
      manualVerification: false
    },
    {
      id: "REC-2024-002",
      source: "slack",
      sender: "Kabir Ahmed",
      receiptImage: "/api/placeholder/400/300",
      uploadDate: "2024-12-15 13:20",
      ocrStatus: "completed",
      nlpStatus: "completed",
      extractedData: {
        vendor: "Green Restaurant",
        amount: 8500,
        date: "2024-12-15",
        category: "Food & Entertainment",
        taxAmount: 850,
        items: ["Team Lunch", "Beverages"],
        confidence: 0.87
      },
      recordStatus: "recorded",
      category: "billing",
      linkedTransaction: "TXN-2024-446",
      manualVerification: false
    },
    {
      id: "REC-2024-003",
      source: "whatsapp",
      sender: "Fatima Begum",
      senderPhone: "+880 1812-345678",
      receiptImage: "/api/placeholder/400/300",
      uploadDate: "2024-12-15 12:45",
      ocrStatus: "completed",
      nlpStatus: "processing",
      extractedData: {
        vendor: "TechHub Electronics",
        amount: 45000,
        date: "2024-12-15",
        category: "Equipment",
        confidence: 0.95
      },
      recordStatus: "pending",
      category: "billing",
      manualVerification: true
    },
    {
      id: "REC-2024-004",
      source: "slack",
      sender: "Nazrul Islam",
      receiptImage: "/api/placeholder/400/300",
      uploadDate: "2024-12-15 11:30",
      ocrStatus: "completed",
      nlpStatus: "completed",
      extractedData: {
        vendor: "City Shopping Mall",
        amount: 12500,
        date: "2024-12-15",
        category: "Office Supplies",
        confidence: 0.91
      },
      recordStatus: "duplicate",
      category: "billing",
      duplicateOf: "REC-2024-001",
      manualVerification: false
    },
    {
      id: "REC-2024-005",
      source: "whatsapp",
      sender: "Salma Khatun",
      senderPhone: "+880 1955-567890",
      receiptImage: "/api/placeholder/400/300",
      uploadDate: "2024-12-15 10:15",
      ocrStatus: "failed",
      nlpStatus: "pending",
      recordStatus: "pending",
      category: "billing",
      manualVerification: true
    }
  ];

  const monthlyStats = {
    "December 2024": {
      totalReceipts: 45,
      processed: 38,
      pending: 5,
      duplicates: 2,
      totalAmount: 285000,
      categories: {
        billing: 32,
        expense: 8,
        procurement: 5
      }
    },
    "November 2024": {
      totalReceipts: 52,
      processed: 50,
      pending: 1,
      duplicates: 1,
      totalAmount: 320000,
      categories: {
        billing: 35,
        expense: 12,
        procurement: 5
      }
    },
    "October 2024": {
      totalReceipts: 48,
      processed: 48,
      pending: 0,
      duplicates: 0,
      totalAmount: 295000,
      categories: {
        billing: 30,
        expense: 10,
        procurement: 8
      }
    }
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'whatsapp': return <Smartphone className="h-4 w-4 text-green-600" />;
      case 'slack': return <Hash className="h-4 w-4 text-purple-600" />;
      case 'email': return <MessageSquare className="h-4 w-4 text-blue-600" />;
      default: return <FileImage className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
      processing: { label: "Processing", color: "bg-blue-100 text-blue-800" },
      completed: { label: "Completed", color: "bg-green-100 text-green-800" },
      failed: { label: "Failed", color: "bg-red-100 text-red-800" },
      recorded: { label: "Recorded", color: "bg-green-100 text-green-800" },
      rejected: { label: "Rejected", color: "bg-red-100 text-red-800" },
      duplicate: { label: "Duplicate", color: "bg-orange-100 text-orange-800" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={`${config.color} border-none text-xs`}>{config.label}</Badge>;
  };

  const getCategoryBadge = (category: string) => {
    const categoryConfig = {
      billing: { label: "Billing", color: "bg-blue-100 text-blue-800" },
      expense: { label: "Expense", color: "bg-purple-100 text-purple-800" },
      procurement: { label: "Procurement", color: "bg-green-100 text-green-800" }
    };
    
    const config = categoryConfig[category as keyof typeof categoryConfig];
    return <Badge variant="outline" className={`${config.color} text-xs`}>{config.label}</Badge>;
  };

  const filteredReceipts = receipts.filter(receipt => {
    const matchesSearch = receipt.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         receipt.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         receipt.extractedData?.vendor?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || receipt.recordStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const processReceipt = (receiptId: string, action: 'approve' | 'reject') => {
    alert(`Receipt ${receiptId} ${action}d and ${action === 'approve' ? 'recorded in ERP' : 'marked as rejected'}`);
  };

  const ReceiptCard = ({ receipt }: { receipt: ReceiptData }) => (
    <Card className={`transition-all hover:shadow-md ${receipt.recordStatus === 'duplicate' ? 'border-orange-200 bg-orange-50' : ''}`}>
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img 
              src={receipt.receiptImage} 
              alt="Receipt" 
              className="w-16 h-20 object-cover rounded-lg border"
            />
            <div className="absolute -top-1 -right-1">
              {getSourceIcon(receipt.source)}
            </div>
          </div>
          
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium">{receipt.id}</span>
                  {getCategoryBadge(receipt.category)}
                  {getStatusBadge(receipt.recordStatus)}
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <User className="h-3 w-3" />
                  <span>{receipt.sender}</span>
                  {receipt.senderPhone && (
                    <>
                      <span>•</span>
                      <span>{receipt.senderPhone}</span>
                    </>
                  )}
                  <span>•</span>
                  <span>{receipt.uploadDate}</span>
                </div>
              </div>
            </div>

            {/* OCR/NLP Status */}
            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <Scan className="h-3 w-3" />
                <span>OCR:</span>
                {getStatusBadge(receipt.ocrStatus)}
              </div>
              <div className="flex items-center space-x-1">
                <Brain className="h-3 w-3" />
                <span>NLP:</span>
                {getStatusBadge(receipt.nlpStatus)}
              </div>
            </div>

            {/* Extracted Data */}
            {receipt.extractedData && (
              <div className="p-3 bg-muted/50 rounded-lg space-y-2">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Vendor:</span>
                    <p className="font-medium">{receipt.extractedData.vendor}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Amount:</span>
                    <p className="font-medium">৳{receipt.extractedData.amount.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Date:</span>
                    <p className="font-medium">{receipt.extractedData.date}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Confidence:</span>
                    <p className="font-medium">{(receipt.extractedData.confidence * 100).toFixed(1)}%</p>
                  </div>
                </div>
                
                {receipt.extractedData.items && (
                  <div>
                    <span className="text-muted-foreground text-sm">Items:</span>
                    <p className="text-sm">{receipt.extractedData.items.join(", ")}</p>
                  </div>
                )}
              </div>
            )}

            {/* Duplicate Warning */}
            {receipt.recordStatus === 'duplicate' && receipt.duplicateOf && (
              <Alert className="border-orange-200 bg-orange-50">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-800">
                  <strong>Duplicate detected:</strong> Similar to {receipt.duplicateOf}
                </AlertDescription>
              </Alert>
            )}

            {/* Linked Transaction */}
            {receipt.linkedTransaction && (
              <div className="text-sm text-muted-foreground">
                <span>Linked to: </span>
                <span className="font-medium text-blue-600">{receipt.linkedTransaction}</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col space-y-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Receipt Details - {receipt.id}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <img 
                    src={receipt.receiptImage} 
                    alt="Receipt" 
                    className="w-full max-w-md mx-auto rounded-lg border"
                  />
                  {receipt.extractedData && (
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Vendor:</strong> {receipt.extractedData.vendor}</div>
                      <div><strong>Amount:</strong> ৳{receipt.extractedData.amount.toLocaleString()}</div>
                      <div><strong>Date:</strong> {receipt.extractedData.date}</div>
                      <div><strong>Category:</strong> {receipt.extractedData.category}</div>
                      <div><strong>Confidence:</strong> {(receipt.extractedData.confidence * 100).toFixed(1)}%</div>
                      {receipt.extractedData.taxAmount && (
                        <div><strong>Tax:</strong> ৳{receipt.extractedData.taxAmount.toLocaleString()}</div>
                      )}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            {receipt.recordStatus === 'pending' && (
              <div className="flex space-x-1">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => processReceipt(receipt.id, 'reject')}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <XCircle className="h-3 w-3" />
                </Button>
                <Button 
                  size="sm"
                  onClick={() => processReceipt(receipt.id, 'approve')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="h-3 w-3" />
                </Button>
              </div>
            )}

            {receipt.recordStatus === 'recorded' && (
              <div className="flex items-center space-x-1 text-green-600">
                <CheckCircle className="h-3 w-3" />
                <span className="text-xs">Recorded</span>
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
          <h2 className="flex items-center space-x-2">
            <Receipt className="h-6 w-6 text-blue-600" />
            <span>Receipt Management</span>
          </h2>
          <p className="text-muted-foreground">
            OCR/NLP processing of receipts from WhatsApp, Slack with auto-categorization and duplicate detection.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            <Brain className="h-3 w-3 mr-1" />
            AI Processing Active
          </Badge>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
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
                <span>Total Receipts:</span>
                <span className="font-medium">{stats.totalReceipts}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Processed:</span>
                <span className="font-medium text-green-600">{stats.processed}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total Amount:</span>
                <span className="font-medium">৳{stats.totalAmount.toLocaleString()}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Billing: {stats.categories.billing} | Expense: {stats.categories.expense} | Procurement: {stats.categories.procurement}
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
                  placeholder="Search receipts, senders, vendors..."
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
              <option value="recorded">Recorded</option>
              <option value="duplicate">Duplicate</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Receipts List */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recent">
            Recent ({receipts.filter(r => r.recordStatus === 'pending').length})
          </TabsTrigger>
          <TabsTrigger value="processed">
            Processed ({receipts.filter(r => r.recordStatus === 'recorded').length})
          </TabsTrigger>
          <TabsTrigger value="duplicates">
            Duplicates ({receipts.filter(r => r.recordStatus === 'duplicate').length})
          </TabsTrigger>
          <TabsTrigger value="failed">
            Failed ({receipts.filter(r => r.ocrStatus === 'failed').length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4 mt-6">
          {filteredReceipts.filter(r => r.recordStatus === 'pending').map(receipt => (
            <ReceiptCard key={receipt.id} receipt={receipt} />
          ))}
        </TabsContent>

        <TabsContent value="processed" className="space-y-4 mt-6">
          {filteredReceipts.filter(r => r.recordStatus === 'recorded').map(receipt => (
            <ReceiptCard key={receipt.id} receipt={receipt} />
          ))}
        </TabsContent>

        <TabsContent value="duplicates" className="space-y-4 mt-6">
          {filteredReceipts.filter(r => r.recordStatus === 'duplicate').map(receipt => (
            <ReceiptCard key={receipt.id} receipt={receipt} />
          ))}
        </TabsContent>

        <TabsContent value="failed" className="space-y-4 mt-6">
          {filteredReceipts.filter(r => r.ocrStatus === 'failed').map(receipt => (
            <ReceiptCard key={receipt.id} receipt={receipt} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}