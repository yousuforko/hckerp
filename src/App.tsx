import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { EnhancedDashboard } from "./components/EnhancedDashboard";
import { CommunicationCenter } from "./components/CommunicationCenter";
import { WhatsAppApproval } from "./components/WhatsAppApproval";
import { SlackApproval } from "./components/SlackApproval";
import { ReceiptManagement } from "./components/ReceiptManagement";
import { SmartFilter } from "./components/SmartFilter";
import { ApprovalWorkflow } from "./components/ApprovalWorkflow";
import { ERPIntegration } from "./components/ERPIntegration";
import { Analytics } from "./components/Analytics";
import { BudgetManagement } from "./components/BudgetManagement";
import { ProcurementApproval } from "./components/ProcurementApproval";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Settings, Bell, HelpCircle } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <EnhancedDashboard />;
      case "communications":
        return <CommunicationCenter />;
      case "whatsapp-approval":
        return <WhatsAppApproval />;
      case "slack-approval":
        return <SlackApproval />;
      case "receipt-management":
        return <ReceiptManagement />;
      case "smart-filter":
        return <SmartFilter />;
      case "approval-workflow":
        return <ApprovalWorkflow />;
      case "procurement-approval":
        return <ProcurementApproval />;
      case "erp-integration":
        return <ERPIntegration />;
      case "analytics":
        return <Analytics />;
      case "budget":
        return <BudgetManagement />;
      case "settings":
        return <SettingsPage />;
      case "notifications":
        return <NotificationsPage />;
      case "help":
        return <HelpPage />;
      default:
        return <EnhancedDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Compact Sidebar */}
      <div className="w-56 flex-shrink-0">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Settings</h2>
        <p className="text-sm text-muted-foreground">
          Configure your MonstarPulse communication settings and preferences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Integration Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-medium mb-1 text-sm">WhatsApp Business API</h4>
              <p className="text-xs text-muted-foreground mb-2">
                Connect your WhatsApp Business account to enable messaging with OCR/NLP processing.
              </p>
              <div className="p-2 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-xs text-green-800">✓ Connected - Auto-categorization Active</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-1 text-sm">Slack Integration</h4>
              <p className="text-xs text-muted-foreground mb-2">
                Connect your Slack workspace for team communications with receipt processing.
              </p>
              <div className="p-2 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-xs text-green-800">✓ Connected - Duplicate Detection Active</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-1 text-sm">Smart Business Assistant</h4>
              <p className="text-xs text-muted-foreground mb-2">
                Intelligent automation that categorizes business conversations for seamless workflow management.
              </p>
              <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-blue-800">✓ Active - 94.2% Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">New Message Alerts</p>
                  <p className="text-xs text-muted-foreground">Get notified of new messages</p>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Email Notifications</p>
                  <p className="text-xs text-muted-foreground">Receive daily summaries via email</p>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Response Time Alerts</p>
                  <p className="text-xs text-muted-foreground">Alert when response time exceeds threshold</p>
                </div>
                <input type="checkbox" className="rounded" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "🤖 Receipt Auto-Processed",
      message: "REC-2024-015 auto-processed: 12,500 BDT restaurant receipt uploaded via WhatsApp. OCR extracted vendor data, categorized as billing.",
      time: "2 minutes ago",
      type: "receipt_processing",
      read: false,
    },
    {
      id: 2,
      title: "⚡ Budget Alert - Equipment Category",
      message: "Equipment budget at 90% utilization. Monitor closely to prevent overspend.",
      time: "5 minutes ago",
      type: "budget_alert",
      read: false,
    },
    {
      id: 3,
      title: "🔄 Approval Workflow - Travel",
      message: "35,000 BDT travel expense moved to Senior Manager Review stage.",
      time: "12 minutes ago",
      type: "workflow",
      read: false,
    },
    {
      id: 4,
      title: "✅ Auto-Update Successful",
      message: "12,000 BDT team lunch expense automatically updated to ERP system (EXP-2024-002).",
      time: "15 minutes ago",
      type: "erp_update",
      read: false,
    },
    {
      id: 5,
      title: "🔍 Duplicate Detected",
      message: "Smart filter detected duplicate receipt from City Mall - 8,900 BDT. Automatically flagged for review.",
      time: "25 minutes ago",
      type: "duplicate_detection",
      read: false,
    },
    {
      id: 6,
      title: "📋 Reimbursement Queue Alert",
      message: "42,000 BDT office furniture expense approved and moved to Accounts for reimbursement processing.",
      time: "45 minutes ago",
      type: "reimbursement",
      read: true,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Notifications</h2>
          <p className="text-sm text-muted-foreground">
            Stay updated with your team's communication activities and system alerts.
          </p>
        </div>
        <button className="text-sm text-primary">Mark all as read</button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <Card key={notification.id} className={`transition-colors ${!notification.read ? 'bg-accent/30' : ''}`}>
            <CardContent className="p-3">
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <Bell className={`h-3 w-3 ${!notification.read ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  <p className="text-xs text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function HelpPage() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Help & Support</h2>
        <p className="text-sm text-muted-foreground">
          Find answers to common questions and get support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center space-x-2">
              <HelpCircle className="h-4 w-4" />
              <span>Getting Started</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <h4 className="font-medium text-sm">How to connect WhatsApp Business</h4>
              <p className="text-xs text-muted-foreground">Learn how to integrate your WhatsApp Business account with the ERP system.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium text-sm">Setting up Slack integration</h4>
              <p className="text-xs text-muted-foreground">Step-by-step guide to connect your Slack workspace.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium text-sm">Procurement Auto-Approval</h4>
              <p className="text-xs text-muted-foreground">Configure vendor quotation auto-approval with "Thank you, your procurement is approved" message.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Contact Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-medium mb-1 text-sm">Email Support</h4>
              <p className="text-xs text-muted-foreground">support@monstarpulse.com</p>
            </div>
            <div>
              <h4 className="font-medium mb-1 text-sm">Phone Support</h4>
              <p className="text-xs text-muted-foreground">+880 1711-123456</p>
            </div>
            <div>
              <h4 className="font-medium mb-1 text-sm">Live Chat</h4>
              <p className="text-xs text-muted-foreground">Available 24/7 for urgent issues</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}