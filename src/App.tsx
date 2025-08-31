@@ .. @@
 import { useState } from "react";
 import { Sidebar } from "./components/Sidebar";
-import { Dashboard } from "./components/Dashboard";
 import { EnhancedDashboard } from "./components/EnhancedDashboard";
 import { EmployeeDirectory } from "./components/EmployeeDirectory";
 import { CommunicationCenter } from "./components/CommunicationCenter";
 import { WhatsAppApproval } from "./components/WhatsAppApproval";
 import { SlackApproval } from "./components/SlackApproval";
 import { ReceiptManagement } from "./components/ReceiptManagement";
 import { SmartFilter } from "./components/SmartFilter";
 import { ApprovalWorkflow } from "./components/ApprovalWorkflow";
-import { PastRecords } from "./components/PastRecords";
 import { ERPIntegration } from "./components/ERPIntegration";
 import { Analytics } from "./components/Analytics";
 import { BudgetManagement } from "./components/BudgetManagement";
 import { ProcurementApproval } from "./components/ProcurementApproval";
 import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
-import { Settings, Bell, HelpCircle } from "lucide-react";
+import { Settings, Bell, HelpCircle, MessageSquare, Shield, Database } from "lucide-react";

 export default function App() {
   const [activeTab, setActiveTab] = useState("dashboard");

   const renderContent = () => {
     switch (activeTab) {
       case "dashboard":
         return <EnhancedDashboard />;
-      case "employees":
-        return <EmployeeDirectory />;
       case "communications":
         return <CommunicationCenter />;
       case "whatsapp-approval":
         return <WhatsAppApproval />;
       case "slack-approval":
         return <SlackApproval />;
       case "receipt-management":
         return <ReceiptManagement />;
-      case "smart-filter":
-        return <SmartFilter />;
       case "approval-workflow":
         return <ApprovalWorkflow />;
       case "procurement-approval":
         return <ProcurementApproval />;
-      case "past-records":
-        return <PastRecords />;
       case "erp-integration":
         return <ERPIntegration />;
       case "analytics":
         return <Analytics />;
       case "budget":
         return <BudgetManagement />;
+      case "smart-filter":
+        return <SmartFilter />;
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
-    <div className="flex h-screen bg-background">
+    <div className="flex h-screen bg-slate-50">
       {/* Sidebar */}
-      <div className="w-64 flex-shrink-0">
+      <div className="w-56 flex-shrink-0">
         <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
       </div>

       {/* Main Content */}
       <div className="flex-1 overflow-auto">
-        <div className="p-6">
+        <div className="p-4">
           {renderContent()}
         </div>
       </div>
     </div>
   );
 }

 function SettingsPage() {
   return (
-    <div className="space-y-6">
+    <div className="space-y-4">
       <div>
-        <h2>Settings</h2>
+        <h2 className="text-xl font-semibold">Integration Settings</h2>
         <p className="text-muted-foreground">
-          Configure your MonstarPulse communication settings and preferences.
+          Configure social media to ERP bridge settings.
         </p>
       </div>
       
-      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
+      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <Card>
           <CardHeader>
-            <CardTitle className="flex items-center space-x-2">
-              <Settings className="h-5 w-5" />
-              <span>Integration Settings</span>
+            <CardTitle className="text-base flex items-center space-x-2">
+              <MessageSquare className="h-4 w-4" />
+              <span>Platform Connections</span>
             </CardTitle>
           </CardHeader>
-          <CardContent className="space-y-4">
+          <CardContent className="space-y-3">
             <div>
-              <h4 className="font-medium mb-2">WhatsApp Business API</h4>
-              <p className="text-sm text-muted-foreground mb-3">
-                Connect your WhatsApp Business account to enable messaging with OCR/NLP processing.
+              <h4 className="font-medium mb-1 text-sm">WhatsApp Business</h4>
+              <p className="text-xs text-muted-foreground mb-2">
+                Auto-categorization & OCR processing active.
               </p>
-              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
-                <p className="text-sm text-green-800">✓ Connected - Auto-categorization Active</p>
+              <div className="p-2 bg-green-50 border border-green-200 rounded-md">
+                <p className="text-xs text-green-800">✓ Connected - 94.2% Accuracy</p>
               </div>
             </div>
             
             <div>
-              <h4 className="font-medium mb-2">Slack Integration</h4>
-              <p className="text-sm text-muted-foreground mb-3">
-                Connect your Slack workspace for team communications with receipt processing.
+              <h4 className="font-medium mb-1 text-sm">Slack Workspace</h4>
+              <p className="text-xs text-muted-foreground mb-2">
+                Team communications with duplicate detection.
               </p>
-              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
-                <p className="text-sm text-green-800">✓ Connected - Duplicate Detection Active</p>
+              <div className="p-2 bg-green-50 border border-green-200 rounded-md">
+                <p className="text-xs text-green-800">✓ Connected - 8 Duplicates Detected</p>
               </div>
             </div>
-
-            <div>
-              <h4 className="font-medium mb-2">Smart Business Assistant</h4>
-              <p className="text-sm text-muted-foreground mb-3">
-                Intelligent automation that categorizes business conversations for seamless workflow management.
-              </p>
-              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
-                <p className="text-sm text-blue-800">✓ Active - 94.2% Accuracy</p>
-              </div>
-            </div>
           </CardContent>
         </Card>

         <Card>
           <CardHeader>
-            <CardTitle>Notification Preferences</CardTitle>
+            <CardTitle className="text-base flex items-center space-x-2">
+              <Shield className="h-4 w-4" />
+              <span>Auto-Actions</span>
+            </CardTitle>
           </CardHeader>
-          <CardContent className="space-y-4">
-            <div className="space-y-3">
-              <div className="flex items-center justify-between">
+          <CardContent className="space-y-3">
+            <div className="space-y-2">
+              <div className="flex items-center justify-between text-sm">
                 <div>
-                  <p className="font-medium">New Message Alerts</p>
-                  <p className="text-sm text-muted-foreground">Get notified of new messages</p>
+                  <p className="font-medium">Auto-Approval</p>
+                  <p className="text-xs text-muted-foreground">Budget-based approval</p>
                 </div>
-                <input type="checkbox" defaultChecked className="rounded" />
+                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
               </div>
               
-              <div className="flex items-center justify-between">
+              <div className="flex items-center justify-between text-sm">
                 <div>
-                  <p className="font-medium">Email Notifications</p>
-                  <p className="text-sm text-muted-foreground">Receive daily summaries via email</p>
+                  <p className="font-medium">Auto-Rejection</p>
+                  <p className="text-xs text-muted-foreground">Budget exceeded protection</p>
                 </div>
-                <input type="checkbox" defaultChecked className="rounded" />
+                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
               </div>
               
-              <div className="flex items-center justify-between">
+              <div className="flex items-center justify-between text-sm">
                 <div>
-                  <p className="font-medium">Response Time Alerts</p>
-                  <p className="text-sm text-muted-foreground">Alert when response time exceeds threshold</p>
+                  <p className="font-medium">ERP Auto-Update</p>
+                  <p className="text-xs text-muted-foreground">Real-time data sync</p>
                 </div>
-                <input type="checkbox" className="rounded" />
+                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
               </div>
             </div>
           </CardContent>
@@ .. @@
 function NotificationsPage() {
   const notifications = [
     {
       id: 1,
-      title: "🤖 Receipt Auto-Processed",
-      message: "REC-2025-015 auto-processed: 12,500 BDT restaurant receipt uploaded via WhatsApp. OCR extracted vendor data, categorized as billing.",
+      title: "Receipt Auto-Processed",
+      message: "REC-2024-015: ৳12,500 restaurant receipt auto-categorized via WhatsApp OCR",
       time: "2 minutes ago",
-      type: "receipt_processing",
+      type: "success",
       read: false,
     },
     {
       id: 2,
-      title: "⚡ Budget Alert - Equipment Category",
-      message: "Equipment budget at 90% utilization. Monitor closely to prevent overspend.",
+      title: "Budget Alert - Equipment",
+      message: "Equipment budget at 90% - Monitor to prevent overspend",
       time: "5 minutes ago",
-      type: "budget_alert",
+      type: "warning",
       read: false,
     },
     {
       id: 3,
-      title: "🔄 Approval Workflow - Travel",
-      message: "35,000 BDT travel expense moved to Senior Manager Review stage.",
+      title: "Approval Workflow",
+      message: "৳35,000 travel expense moved to Senior Manager Review",
       time: "12 minutes ago",
-      type: "workflow",
+      type: "info",
       read: false,
     },
     {
       id: 4,
-      title: "✅ Auto-Update Successful",
-      message: "12,000 BDT team lunch expense automatically updated to ERP system (EXP-2025-002).",
+      title: "ERP Auto-Update",
+      message: "৳12,000 team lunch auto-updated to ERP (EXP-2024-002)",
       time: "15 minutes ago",
-      type: "erp_update",
+      type: "success",
       read: false,
     },
     {
       id: 5,
-      title: "🔍 Duplicate Detected",
-      message: "Smart filter detected duplicate receipt from City Mall - 8,900 BDT. Automatically flagged for review.",
+      title: "Duplicate Detected",
+      message: "City Mall receipt ৳8,900 flagged as duplicate",
       time: "25 minutes ago",
-      type: "duplicate_detection",
+      type: "warning",
       read: false,
     },
-    {
-      id: 6,
-      title: "📋 Reimbursement Queue Alert",
-      message: "42,000 BDT office furniture expense approved and moved to Accounts for reimbursement processing.",
-      time: "45 minutes ago",
-      type: "reimbursement",
-      read: true,
-    },
-    {
-      id: 7,
-      title: "Response time threshold exceeded",
-      message: "Marketing team average response time is above 5 minutes",
-      time: "1 hour ago",
-      type: "alert",
-      read: true,
-    },
-    {
-      id: 8,
-      title: "📋 Past Records Updated",
-      message: "August 2025 past records completed: 126 records processed with 94.2% auto-categorization accuracy",
-      time: "2 hours ago",
-      type: "audit_update",
-      read: true,
-    },
   ];

   return (
-    <div className="space-y-6">
+    <div className="space-y-4">
       <div className="flex items-center justify-between">
         <div>
-          <h2>Notifications</h2>
+          <h2 className="text-xl font-semibold">System Notifications</h2>
           <p className="text-muted-foreground">
-            Stay updated with your team's communication activities and system alerts.
+            Real-time alerts from social media to ERP bridge.
           </p>
         </div>
-        <button className="text-sm text-primary">Mark all as read</button>
+        <button className="text-xs text-primary">Mark all read</button>
       </div>

-      <div className="space-y-4">
+      <div className="space-y-2">
         {notifications.map((notification) => (
-          <Card key={notification.id} className={`transition-colors ${!notification.read ? 'bg-accent/30' : ''}`}>
-            <CardContent className="p-4">
-              <div className="flex items-start space-x-4">
-                <div className="mt-1">
-                  <Bell className={`h-4 w-4 ${!notification.read ? 'text-primary' : 'text-muted-foreground'}`} />
+          <Card key={notification.id} className={`transition-colors ${!notification.read ? 'bg-blue-50/50' : ''}`}>
+            <CardContent className="p-3">
+              <div className="flex items-start space-x-3">
+                <div className="mt-0.5">
+                  <div className={`w-2 h-2 rounded-full ${
+                    notification.type === 'success' ? 'bg-green-500' :
+                    notification.type === 'warning' ? 'bg-orange-500' :
+                    notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
+                  }`}></div>
                 </div>
-                <div className="flex-1 space-y-1">
-                  <h4 className="font-medium">{notification.title}</h4>
-                  <p className="text-sm text-muted-foreground">{notification.message}</p>
+                <div className="flex-1 space-y-0.5">
+                  <h4 className="font-medium text-sm">{notification.title}</h4>
+                  <p className="text-xs text-muted-foreground">{notification.message}</p>
                   <p className="text-xs text-muted-foreground">{notification.time}</p>
                 </div>
                 {!notification.read && (
-                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
+                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1"></div>
                 )}
               </div>
             </CardContent>
@@ .. @@
 function HelpPage() {
   return (
-    <div className="space-y-6">
+    <div className="space-y-4">
       <div>
-        <h2>Help & Support</h2>
+        <h2 className="text-xl font-semibold">Help & Support</h2>
         <p className="text-muted-foreground">
-          Find answers to common questions and get support.
+          Quick help for social media to ERP integration.
         </p>
       </div>

-      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
+      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <Card>
           <CardHeader>
-            <CardTitle className="flex items-center space-x-2">
+            <CardTitle className="text-base flex items-center space-x-2">
               <HelpCircle className="h-5 w-5" />
-              <span>Getting Started</span>
+              <span>Quick Start</span>
             </CardTitle>
           </CardHeader>
-          <CardContent className="space-y-3">
-            <div className="space-y-2">
-              <h4 className="font-medium">How to connect WhatsApp Business</h4>
-              <p className="text-sm text-muted-foreground">Learn how to integrate your WhatsApp Business account with the ERP system.</p>
+          <CardContent className="space-y-2">
+            <div className="space-y-1">
+              <h4 className="font-medium text-sm">WhatsApp Integration</h4>
+              <p className="text-xs text-muted-foreground">Connect WhatsApp Business for auto-processing</p>
             </div>
-            <div className="space-y-2">
-              <h4 className="font-medium">Setting up Slack integration</h4>
-              <p className="text-sm text-muted-foreground">Step-by-step guide to connect your Slack workspace.</p>
+            <div className="space-y-1">
+              <h4 className="font-medium text-sm">Slack Setup</h4>
+              <p className="text-xs text-muted-foreground">Configure workspace for expense tracking</p>
             </div>
-            <div className="space-y-2">
-              <h4 className="font-medium">Managing employee directory</h4>
-              <p className="text-sm text-muted-foreground">How to add, edit, and organize your team members.</p>
+            <div className="space-y-1">
+              <h4 className="font-medium text-sm">Budget Controls</h4>
+              <p className="text-xs text-muted-foreground">Set up auto-rejection thresholds</p>
             </div>
-            <div className="space-y-2">
-              <h4 className="font-medium">Procurement Auto-Approval</h4>
-              <p className="text-sm text-muted-foreground">Configure vendor quotation auto-approval with "Thank you, your procurement is approved" message.</p>
+            <div className="space-y-1">
+              <h4 className="font-medium text-sm">ERP Mapping</h4>
+              <p className="text-xs text-muted-foreground">Configure field mapping for auto-updates</p>
             </div>
           </CardContent>
         </Card>

         <Card>
           <CardHeader>
-            <CardTitle>Contact Support</CardTitle>
+            <CardTitle className="text-base">Support</CardTitle>
           </CardHeader>
-          <CardContent className="space-y-4">
+          <CardContent className="space-y-3">
             <div>
-              <h4 className="font-medium mb-2">Email Support</h4>
-              <p className="text-sm text-muted-foreground">support@monstarpulse.com</p>
+              <h4 className="font-medium mb-1 text-sm">Email</h4>
+              <p className="text-xs text-muted-foreground">support@monstarpulse.com</p>
             </div>
             <div>
-              <h4 className="font-medium mb-2">Phone Support</h4>
-              <p className="text-sm text-muted-foreground">+880 1711-123456</p>
+              <h4 className="font-medium mb-1 text-sm">Phone</h4>
+              <p className="text-xs text-muted-foreground">+880 1711-123456</p>
             </div>
             <div>
-              <h4 className="font-medium mb-2">Live Chat</h4>
-              <p className="text-sm text-muted-foreground">Available 24/7 for urgent issues</p>
+              <h4 className="font-medium mb-1 text-sm">Live Chat</h4>
+              <p className="text-xs text-muted-foreground">24/7 for urgent issues</p>
             </div>
           </CardContent>
         </Card>
       </div>
     </div>
   );
 }