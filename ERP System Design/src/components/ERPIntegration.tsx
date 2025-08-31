import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { 
  Database, 
  Upload, 
  Download, 
  CheckCircle, 
  XCircle, 
  Clock,
  AlertTriangle,
  BarChart3,
  Settings,
  RefreshCw,
  FileText,
  DollarSign,
  Users,
  Target,
  Zap,
  Shield,
  Activity,
  Server,
  Workflow
} from "lucide-react";

export function ERPIntegration() {
  const [syncStatus, setSyncStatus] = useState("synced");
  const [autoUpdateEnabled, setAutoUpdateEnabled] = useState(true);

  const erpModules = [
    {
      name: "Accounts Payable",
      status: "connected",
      lastSync: "2 minutes ago",
      pendingItems: 5,
      syncProgress: 100,
      icon: DollarSign
    },
    {
      name: "Procurement",
      status: "connected", 
      lastSync: "5 minutes ago",
      pendingItems: 12,
      syncProgress: 100,
      icon: Database
    },
    {
      name: "Expense Management",
      status: "syncing",
      lastSync: "Syncing...",
      pendingItems: 3,
      syncProgress: 75,
      icon: FileText
    },
    {
      name: "Budget Planning",
      status: "connected",
      lastSync: "1 hour ago", 
      pendingItems: 2,
      syncProgress: 100,
      icon: Target
    }
  ];

  const pendingTransfers = [
    {
      id: 1,
      type: "procurement",
      description: "Office supplies procurement request",
      amount: 125000,
      sender: "Fatima Rahman",
      erpModule: "Procurement",
      status: "ready_to_transfer",
      mappedFields: {
        "Vendor": "Office Depot",
        "Category": "Office Supplies", 
        "Department": "Operations",
        "Approval": "Required",
        "Budget Code": "OPS-2024-001"
      },
      confidence: 0.95
    },
    {
      id: 2,
      type: "expense",
      description: "Client lunch expense",
      amount: 8500,
      sender: "Aminul Haque",
      erpModule: "Expense Management",
      status: "transferred",
      mappedFields: {
        "Expense Type": "Business Meals",
        "Employee ID": "EMP-001",
        "Project Code": "CLIENT-PROJ-24",
        "Receipt Required": "Yes",
        "Reimbursable": "Yes"
      },
      confidence: 0.92
    },
    {
      id: 3,
      type: "invoice",
      description: "Software license invoice",
      amount: 240000,
      sender: "Mohammad Karim",
      erpModule: "Accounts Payable",
      status: "mapping_required",
      mappedFields: {
        "Vendor": "TechCorp Inc.",
        "Invoice Number": "TC-2024-001",
        "GL Account": "Software Licenses",
        "Payment Terms": "Net 30",
        "Department": "IT"
      },
      confidence: 0.88
    }
  ];

  const integrationStats = [
    { label: "Total Processed", value: 1247, change: "+12%", icon: Database },
    { label: "Auto-Updated", value: 1156, change: "+18%", icon: Zap },
    { label: "Manual Review", value: 45, change: "-15%", icon: AlertTriangle },
    { label: "Success Rate", value: "96.3%", change: "+2.1%", icon: CheckCircle }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected": return "text-green-600 bg-green-50";
      case "syncing": return "text-blue-600 bg-blue-50";
      case "error": return "text-red-600 bg-red-50";
      case "ready_to_transfer": return "text-blue-600 bg-blue-50";
      case "transferred": return "text-green-600 bg-green-50";
      case "mapping_required": return "text-orange-600 bg-orange-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected": return CheckCircle;
      case "syncing": return Clock;
      case "error": return XCircle;
      case "ready_to_transfer": return Upload;
      case "transferred": return CheckCircle;
      case "mapping_required": return AlertTriangle;
      default: return Clock;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>ERP Integration Dashboard</h2>
          <p className="text-muted-foreground">
            Real-time auto-updates to ERP system with intelligent expense routing and approval workflow integration.
          </p>
        </div>
        <div className="flex space-x-2">
          <Badge variant={autoUpdateEnabled ? "default" : "secondary"} className="px-3 py-1">
            <Zap className="h-3 w-3 mr-1" />
            {autoUpdateEnabled ? "Auto-Update Active" : "Manual Mode"}
          </Badge>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configure Mapping
          </Button>
          <Button variant="outline" size="sm">
            <Activity className="h-4 w-4 mr-2" />
            Monitor Live
          </Button>
        </div>
      </div>

      {/* Integration Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {integrationStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">
                      <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                        {stat.change}
                      </span>
                      {" "}from last month
                    </p>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="modules" className="space-y-6">
        <TabsList>
          <TabsTrigger value="modules">ERP Modules</TabsTrigger>
          <TabsTrigger value="transfers">Pending Transfers</TabsTrigger>
          <TabsTrigger value="mapping">Field Mapping</TabsTrigger>
          <TabsTrigger value="logs">Transfer Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="modules" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {erpModules.map((module) => {
              const Icon = module.icon;
              const StatusIcon = getStatusIcon(module.status);
              
              return (
                <Card key={module.name} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{module.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            Last sync: {module.lastSync}
                          </p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(module.status)}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {module.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {module.status === "syncing" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Sync Progress</span>
                          <span>{module.syncProgress}%</span>
                        </div>
                        <Progress value={module.syncProgress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Pending Items</p>
                        <p className="text-xl font-bold">{module.pendingItems}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button size="sm">
                          <RefreshCw className="h-4 w-4 mr-1" />
                          Sync Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="transfers" className="space-y-4">
          <div className="space-y-4">
            {pendingTransfers.map((transfer) => {
              const StatusIcon = getStatusIcon(transfer.status);
              
              return (
                <Card key={transfer.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium">{transfer.description}</h4>
                          <Badge variant="outline" className="capitalize">
                            {transfer.type}
                          </Badge>
                          <Badge className={getStatusColor(transfer.status)}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {transfer.status.replace('_', ' ')}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          From: {transfer.sender} → {transfer.erpModule}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">
                          ৳{transfer.amount.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {Math.round(transfer.confidence * 100)}% confidence
                        </p>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    {/* Field Mapping */}
                    <div className="space-y-3">
                      <h5 className="font-medium">ERP Field Mapping</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {Object.entries(transfer.mappedFields).map(([field, value]) => (
                          <div key={field} className="flex justify-between items-center p-2 bg-muted/30 rounded">
                            <span className="text-sm font-medium">{field}:</span>
                            <span className="text-sm">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
                        {transfer.status === "mapping_required" && (
                          <AlertTriangle className="h-4 w-4 text-orange-600" />
                        )}
                        <span className="text-sm text-muted-foreground">
                          {transfer.status === "ready_to_transfer" && "Ready for ERP transfer"}
                          {transfer.status === "transferred" && "Successfully transferred to ERP"}
                          {transfer.status === "mapping_required" && "Field mapping validation required"}
                        </span>
                      </div>
                      
                      <div className="flex space-x-2">
                        {transfer.status === "mapping_required" && (
                          <Button variant="outline" size="sm">
                            Edit Mapping
                          </Button>
                        )}
                        {transfer.status === "ready_to_transfer" && (
                          <>
                            <Button variant="outline" size="sm">
                              Preview
                            </Button>
                            <Button size="sm">
                              <Upload className="h-4 w-4 mr-1" />
                              Transfer to ERP
                            </Button>
                          </>
                        )}
                        {transfer.status === "transferred" && (
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            View in ERP
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

        <TabsContent value="mapping" className="space-y-4">
          <FieldMappingPanel />
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <TransferLogsPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function FieldMappingPanel() {
  const mappingConfigs = [
    {
      type: "Procurement",
      fields: [
        { source: "Amount", erp: "Purchase_Amount", status: "mapped" },
        { source: "Vendor", erp: "Supplier_Name", status: "mapped" },
        { source: "Category", erp: "Item_Category", status: "mapped" },
        { source: "Approver", erp: "Approval_Manager", status: "requires_setup" }
      ]
    },
    {
      type: "Expense",
      fields: [
        { source: "Amount", erp: "Expense_Amount", status: "mapped" },
        { source: "Employee", erp: "Employee_ID", status: "mapped" },
        { source: "Category", erp: "Expense_Type", status: "mapped" },
        { source: "Receipt", erp: "Supporting_Document", status: "mapped" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {mappingConfigs.map((config) => (
        <Card key={config.type}>
          <CardHeader>
            <CardTitle>{config.type} Field Mapping</CardTitle>
            <p className="text-sm text-muted-foreground">
              Configure how detected {config.type.toLowerCase()} data maps to your ERP fields.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {config.fields.map((field, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-32">
                      <span className="text-sm font-medium">{field.source}</span>
                    </div>
                    <span className="text-muted-foreground">→</span>
                    <div className="w-32">
                      <span className="text-sm">{field.erp}</span>
                    </div>
                  </div>
                  <Badge variant={field.status === "mapped" ? "default" : "destructive"}>
                    {field.status.replace('_', ' ')}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function TransferLogsPanel() {
  const logs = [
    {
      id: 1,
      timestamp: "2024-01-15 16:45:00",
      type: "procurement",
      description: "Office supplies request transferred to Procurement module",
      status: "success",
      amount: 125000,
      erpRecord: "PO-2024-0156"
    },
    {
      id: 2,
      timestamp: "2024-01-15 16:30:00", 
      type: "expense",
      description: "Client lunch expense transferred to Expense Management",
      status: "success",
      amount: 8500,
      erpRecord: "EXP-2024-0234"
    },
    {
      id: 3,
      timestamp: "2024-01-15 16:15:00",
      type: "invoice",
      description: "Software license invoice transfer failed - mapping error",
      status: "error",
      amount: 240000,
      erpRecord: null
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transfer Activity Log</CardTitle>
        <p className="text-sm text-muted-foreground">
          Track all data transfers between the communication filter and ERP system.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {logs.map((log) => (
            <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <Badge variant="outline" className="capitalize">
                    {log.type}
                  </Badge>
                  <Badge variant={log.status === "success" ? "default" : "destructive"}>
                    {log.status}
                  </Badge>
                  <span className="text-sm font-medium">৳{log.amount.toLocaleString()}</span>
                </div>
                <p className="text-sm text-muted-foreground">{log.description}</p>
                <p className="text-xs text-muted-foreground">
                  {log.timestamp} {log.erpRecord && `• ERP Record: ${log.erpRecord}`}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {log.status === "success" ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-600" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}