@@ .. @@
   const recentAlerts = [
     {
       id: 1,
       category: "Equipment",
       type: "critical",
-      message: "High budget usage at 90% - Monitor closely to prevent overspend",
+      message: "Budget at 90% - Monitor to prevent overspend",
       time: "5 minutes ago",
       platforms: ["WhatsApp", "Slack"],
       recipients: ["IT Manager", "#procurement"],
       status: "sent",
       autoAction: "alert_only",
       affectedRequests: 0
     },
     {
       id: 2,
       category: "Travel",
       type: "critical",
-      message: "Budget utilization at 87% - Approaching limit",
+      message: "Travel budget at 97% - Critical level",
       time: "12 minutes ago",
       platforms: ["WhatsApp", "Slack"],
       recipients: ["Finance Team", "#travel-expenses"],
       status: "sent",
       autoAction: "alert_only",
       affectedRequests: 0
     },
     {
       id: 3,
       category: "Food",
       type: "critical",
-      message: "Budget utilization at 90% - High usage alert",
+      message: "Food budget at 95% - High usage alert",
       time: "1 hour ago",
       platforms: ["Slack"],
       recipients: ["#general"],
       status: "sent",
       autoAction: "alert_only",
       affectedRequests: 0
     },
-    {
-      id: 4,
-      category: "Legal",
-      type: "warning",
-      message: "Moderate budget usage at 55% - Within optimal range",
-      time: "2 hours ago",
-      platforms: ["Slack"],
-      recipients: ["Finance Team"],
-      status: "sent",
-      autoAction: "status_update",
-      affectedRequests: 0
-    }
   ];

   const totalAllocated = budgetCategories.reduce((sum, cat) => sum + cat.allocated, 0);
   const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
   const totalCommitted = budgetCategories.reduce((sum, cat) => sum + cat.committed, 0);
   const overallUtilization = ((totalSpent + totalCommitted) / totalAllocated) * 100;

   const getAlertType = (utilization: number) => {
     if (utilization > 100) return "severe"; // Over budget (not allowed)
     if (utilization > 85) return "critical"; // High usage >85%
     if (utilization >= 50 && utilization <= 77) return "warning"; // Moderate usage 50-77%
     return "normal"; // Low usage <50% or 77-85%
   };

   const getAlertColor = (type: string) => {
     switch (type) {
       case "severe": return "text-red-700 bg-red-100 border-red-300";
       case "critical": return "text-red-600 bg-red-50 border-red-200";
       case "warning": return "text-orange-600 bg-orange-50 border-orange-200";
       default: return "text-green-600 bg-green-50 border-green-200";
     }
   };

   return (
-    <div className="space-y-6">
+    <div className="space-y-4">
       <div className="flex items-center justify-between">
         <div>
-          <h2>Budget Management & Alerts</h2>
+          <h2 className="text-xl font-semibold">Budget Controls</h2>
           <p className="text-muted-foreground">
-            Real-time budget monitoring with automated WhatsApp and Slack notifications.
+            Automated budget monitoring with social media alerts.
           </p>
         </div>
         <div className="flex items-center space-x-2">
-          <Badge variant="outline" className="px-3 py-1">
-            December 2024
+          <Badge variant="outline" className="px-2 py-1 text-xs">
+            November 2024
           </Badge>
           <Button variant="outline" size="sm">
-            <Settings className="h-4 w-4 mr-2" />
-            Alert Settings
+            <Settings className="h-3 w-3 mr-1" />
+            Settings
           </Button>
         </div>
       </div>