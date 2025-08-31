@@ .. @@
 import { cn } from "./ui/utils";
 import { Button } from "./ui/button";
 import { Badge } from "./ui/badge";
 import { 
   LayoutDashboard, 
-  Users, 
   MessageSquare, 
   BarChart3, 
   Settings, 
   Bell,
   HelpCircle,
   LogOut,
   Brain,
   Database,
   DollarSign,
   ClipboardCheck,
   ShoppingCart,
   Hash,
   Receipt,
-  Shield,
-  History
+  Smartphone
 } from "lucide-react";

 interface SidebarProps {
   activeTab: string;
   onTabChange: (tab: string) => void;
 }

 export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
   const menuItems = [
     {
       id: "dashboard",
       label: "Dashboard",
       icon: LayoutDashboard,
       badge: null,
     },
     {
-      id: "employees",
-      label: "Employee Directory",
-      icon: Users,
-      badge: null,
-    },
-    {
       id: "communications",
-      label: "WorkFlow Connect",
+      label: "Communications",
       icon: MessageSquare,
-      badge: 5,
+      badge: 12,
     },
     {
       id: "whatsapp-approval",
-      label: "WhatsApp Approval",
-      icon: MessageSquare,
+      label: "WhatsApp",
+      icon: Smartphone,
       badge: 4,
     },
     {
       id: "slack-approval",
-      label: "Slack Approval",
+      label: "Slack",
       icon: Hash,
       badge: 5,
     },
     {
       id: "receipt-management",
-      label: "Receipt Management",
+      label: "Receipts",
       icon: Receipt,
-      badge: 12,
+      badge: 8,
     },
     {
       id: "approval-workflow",
-      label: "Approval Workflow",
+      label: "Approvals",
       icon: ClipboardCheck,
-      badge: 8,
+      badge: 6,
     },
     {
       id: "procurement-approval",
-      label: "Procurement Approval",
+      label: "Procurement",
       icon: ShoppingCart,
       badge: 3,
     },
     {
-      id: "past-records",
-      label: "Past Records",
-      icon: History,
-      badge: null,
-    },
-    {
       id: "erp-integration",
-      label: "ERP Integration",
+      label: "ERP Sync",
       icon: Database,
-      badge: 3,
+      badge: 2,
     },
     {
       id: "analytics",
-      label: "WorkFlow Analytics",
+      label: "Analytics",
       icon: BarChart3,
       badge: null,
     },
     {
       id: "budget",
-      label: "Budget Management",
+      label: "Budget",
       icon: DollarSign,
-      badge: 2,
+      badge: 3,
     },
     {
       id: "smart-filter",
-      label: "Smart Assistant",
+      label: "AI Assistant",
       icon: Brain,
-      badge: 15,
-    },
-    {
-      id: "settings",
-      label: "Settings",
-      icon: Settings,
       badge: null,
     },
   ];

   const bottomItems = [
+    {
+      id: "settings",
+      label: "Settings",
+      icon: Settings,
+      badge: null,
+    },
     {
       id: "notifications",
       label: "Notifications",
       icon: Bell,
-      badge: 2,
+      badge: 5,
     },
     {
       id: "help",
-      label: "Help & Support",
+      label: "Help",
       icon: HelpCircle,
       badge: null,
     },
-    {
-      id: "logout",
-      label: "Logout",
-      icon: LogOut,
-      badge: null,
-    },
   ];

   return (
     <div className="flex flex-col h-full bg-sidebar border-r">
       {/* Logo */}
-      <div className="p-6 border-b">
+      <div className="p-4 border-b">
         <div className="flex items-center space-x-2">
-          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
-            <MessageSquare className="h-4 w-4 text-primary-foreground" />
+          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
+            <Database className="h-3 w-3 text-primary-foreground" />
           </div>
           <div>
-            <h1 className="font-bold text-lg">MonstarPulse</h1>
-            <p className="text-xs text-muted-foreground">Smart Business Hub</p>
+            <h1 className="font-bold text-base">MonstarPulse</h1>
+            <p className="text-xs text-muted-foreground">ERP Bridge</p>
           </div>
         </div>
       </div>

       {/* Main Navigation */}
-      <div className="flex-1 p-4">
-        <nav className="space-y-2">
+      <div className="flex-1 p-3">
+        <nav className="space-y-1">
           {menuItems.map((item) => {
             const Icon = item.icon;
             const isActive = activeTab === item.id;
             
             return (
               <Button
                 key={item.id}
                 variant={isActive ? "default" : "ghost"}
                 className={cn(
-                  "w-full justify-start h-10",
+                  "w-full justify-start h-8 text-sm",
                   isActive && "bg-primary text-primary-foreground"
                 )}
                 onClick={() => onTabChange(item.id)}
               >
-                <Icon className="mr-3 h-4 w-4" />
+                <Icon className="mr-2 h-3 w-3" />
                 <span className="flex-1 text-left">{item.label}</span>
                 {item.badge && (
                   <Badge
                     variant={isActive ? "secondary" : "default"}
-                    className="ml-auto text-xs"
+                    className="ml-auto text-xs h-4 px-1.5"
                   >
                     {item.badge}
                   </Badge>
@@ .. @@
       </div>

       {/* User Profile */}
-      <div className="p-4 border-t">
-        <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/50">
-          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
-            <span className="text-xs font-medium text-primary-foreground">CM</span>
+      <div className="p-3 border-t">
+        <div className="flex items-center space-x-2 p-2 rounded-lg bg-accent/50">
+          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
+            <span className="text-xs font-medium text-primary-foreground">CM</span>
           </div>
           <div className="flex-1 min-w-0">
-            <p className="font-medium text-sm truncate">Clueless Monstars</p>
+            <p className="font-medium text-xs truncate">Clueless Monstars</p>
             <p className="text-xs text-muted-foreground truncate">System Admin</p>
           </div>
         </div>
         
         {/* Bottom Navigation */}
-        <div className="mt-4 space-y-1">
+        <div className="mt-3 space-y-0.5">
           {bottomItems.map((item) => {
             const Icon = item.icon;
             
             return (
               <Button
                 key={item.id}
                 variant="ghost"
-                size="sm"
-                className="w-full justify-start h-8"
+                className="w-full justify-start h-7 text-xs"
                 onClick={() => {
-                  if (item.id === 'logout') {
-                    // Handle logout
-                    console.log('Logout clicked');
-                  } else {
-                    onTabChange(item.id);
-                  }
+                  onTabChange(item.id);
                 }}
               >
-                <Icon className="mr-3 h-4 w-4" />
+                <Icon className="mr-2 h-3 w-3" />
                 <span className="flex-1 text-left">{item.label}</span>
                 {item.badge && (
-                  <Badge variant="destructive" className="ml-auto text-xs">
+                  <Badge variant="destructive" className="ml-auto text-xs h-4 px-1.5">
                     {item.badge}
                   </Badge>
                 )}
               </Button>
             );
           })}
         </div>
       </div>
     </div>
   );
 }