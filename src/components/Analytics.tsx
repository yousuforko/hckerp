@@ .. @@
   // Recent months data with real-life ERP metrics
   const recentMonthsData = [
     { 
-      month: "June 25", 
-      whatsapp: 2156, 
-      slack: 1834, 
-      receipts: 245, 
-      procurement: 89, 
-      expense: 156, 
-      billing: 198,
-      duplicatesDetected: 12,
-      ocrAccuracy: 96.2,
-      nlpAccuracy: 94.8,
-      autoApprovalRate: 78.5
+      month: "Sep 24", 
+      whatsapp: 1856, 
+      slack: 1634, 
+      receipts: 198, 
+      procurement: 76, 
+      expense: 134, 
+      billing: 156,
+      duplicatesDetected: 9,
+      ocrAccuracy: 95.8,
+      nlpAccuracy: 93.2,
+      autoApprovalRate: 76.8
     },
     { 
-      month: "July 25", 
-      whatsapp: 2298, 
-      slack: 1967, 
-      receipts: 267, 
-      procurement: 98, 
-      expense: 134, 
-      billing: 203,
-      duplicatesDetected: 18,
-      ocrAccuracy: 95.7,
-      nlpAccuracy: 93.9,
-      autoApprovalRate: 81.2
+      month: "Oct 24", 
+      whatsapp: 1967, 
+      slack: 1756, 
+      receipts: 234, 
+      procurement: 85, 
+      expense: 142, 
+      billing: 178,
+      duplicatesDetected: 12,
+      ocrAccuracy: 96.1,
+      nlpAccuracy: 94.1,
+      autoApprovalRate: 79.4
     },
     { 
-      month: "August 25", 
+      month: "Nov 24", 
       whatsapp: 2134, 
-      slack: 1756, 
-      receipts: 289, 
-      procurement: 76, 
-      expense: 145, 
-      billing: 234,
-      duplicatesDetected: 15,
-      ocrAccuracy: 97.1,
-      nlpAccuracy: 95.4,
-      autoApprovalRate: 83.7
+      slack: 1834, 
+      receipts: 267, 
+      procurement: 89, 
+      expense: 156, 
+      billing: 198,
+      duplicatesDetected: 8,
+      ocrAccuracy: 96.8,
+      nlpAccuracy: 94.7,
+      autoApprovalRate: 82.1
     }
   ];

   // Monthly expense categories
   const monthlyExpenseData = [
-    { month: "June 25", travel: 485000, food: 148000, equipment: 620000, legal: 85000, repair: 99000, salary: 2500000 },
-    { month: "July 25", travel: 467000, food: 152000, equipment: 695000, legal: 92000, repair: 118000, salary: 2500000 },
-    { month: "August 25", travel: 475000, food: 148000, equipment: 620000, legal: 85000, repair: 135000, salary: 2500000 },
+    { month: "Sep 24", travel: 425000, food: 128000, equipment: 620000, legal: 85000, repair: 72000, salary: 2500000 },
+    { month: "Oct 24", travel: 465000, food: 138000, equipment: 680000, legal: 98000, repair: 78000, salary: 2500000 },
+    { month: "Nov 24", travel: 485000, food: 142000, equipment: 720000, legal: 125000, repair: 85000, salary: 2500000 },
   ];

   // Monthly response time by department
   const monthlyResponseData = [
-    { month: "June 25", engineering: 2.1, marketing: 1.9, sales: 1.4, hr: 2.8, finance: 2.3 },
-    { month: "July 25", engineering: 2.3, marketing: 2.1, sales: 1.5, hr: 3.1, finance: 2.6 },
-    { month: "August 25", engineering: 2.2, marketing: 1.8, sales: 1.3, hr: 2.9, finance: 2.4 },
+    { month: "Sep 24", engineering: 2.3, marketing: 2.1, sales: 1.5, hr: 3.1, finance: 2.6 },
+    { month: "Oct 24", engineering: 2.2, marketing: 1.9, sales: 1.4, hr: 2.9, finance: 2.4 },
+    { month: "Nov 24", engineering: 2.1, marketing: 1.8, sales: 1.3, hr: 2.7, finance: 2.2 },
   ];

   const expenseCategoryData = [
-    { name: "Travel", value: 425, color: "#3B82F6", budget: 500 },
-    { name: "Food", value: 165, color: "#F59E0B", budget: 150 },
-    { name: "Equipment", value: 620, color: "#8B5CF6", budget: 800 },
-    { name: "Legal", value: 85, color: "#10B981", budget: 200 },
-    { name: "Repair", value: 135, color: "#EF4444", budget: 100 },
+    { name: "Travel", value: 485, color: "#3B82F6", budget: 500 },
+    { name: "Food", value: 142, color: "#F59E0B", budget: 150 },
+    { name: "Equipment", value: 720, color: "#8B5CF6", budget: 800 },
+    { name: "Legal", value: 125, color: "#10B981", budget: 200 },
+    { name: "Repair", value: 85, color: "#EF4444", budget: 100 },
     { name: "Salary", value: 2500, color: "#06B6D4", budget: 2500 },
   ];

   const departmentPerformance = [
-    { department: "Sales", messages: 312, avgResponse: 1.4, efficiency: 96, budget: 180000, spent: 156000 },
-    { department: "Marketing", messages: 267, avgResponse: 1.8, efficiency: 92, budget: 220000, spent: 198000 },
-    { department: "Engineering", messages: 198, avgResponse: 2.2, efficiency: 89, budget: 150000, spent: 142000 },
-    { department: "Finance", messages: 156, avgResponse: 2.5, efficiency: 87, budget: 120000, spent: 108000 },
-    { department: "HR", messages: 134, avgResponse: 2.9, efficiency: 84, budget: 95000, spent: 89000 },
-    { department: "Operations", messages: 145, avgResponse: 2.1, efficiency: 91, budget: 110000, spent: 102000 },
+    { department: "Sales", messages: 298, avgResponse: 1.3, efficiency: 97, budget: 180000, spent: 165000 },
+    { department: "Marketing", messages: 245, avgResponse: 1.8, efficiency: 93, budget: 220000, spent: 205000 },
+    { department: "Engineering", messages: 187, avgResponse: 2.1, efficiency: 90, budget: 150000, spent: 138000 },
+    { department: "Finance", messages: 142, avgResponse: 2.2, efficiency: 89, budget: 120000, spent: 112000 },
+    { department: "Operations", messages: 156, avgResponse: 1.9, efficiency: 92, budget: 110000, spent: 98000 },
   ];

   const budgetStatusData = [
-    { category: "Equipment", usage: 90, status: "High Usage", color: "#EF4444" },
-    { category: "Travel", usage: 87, status: "High Usage", color: "#F59E0B" },
-    { category: "Food", usage: 90, status: "High Usage", color: "#EF4444" },
-    { category: "Legal", usage: 55, status: "Moderate", color: "#10B981" },
-    { category: "TDS/VDS", usage: 65, status: "Moderate", color: "#10B981" },
-    { category: "Repair", usage: 72, status: "Moderate", color: "#10B981" },
-    { category: "New Asset", usage: 79, status: "Normal", color: "#6B7280" },
+    { category: "Equipment", usage: 90, status: "High Usage", color: "#EF4444" },
+    { category: "Travel", usage: 97, status: "High Usage", color: "#EF4444" },
+    { category: "Food", usage: 95, status: "High Usage", color: "#F59E0B" },
+    { category: "Legal", usage: 63, status: "Moderate", color: "#10B981" },
+    { category: "Repair", usage: 85, status: "Moderate", color: "#10B981" },
     { category: "Salary", usage: 100, status: "100% Used", color: "#06B6D4" }
   ];

   const currentMonth = recentMonthsData[recentMonthsData.length - 1];
   const previousMonth = recentMonthsData[recentMonthsData.length - 2];
   const totalMessages = currentMonth.whatsapp + currentMonth.slack;
   const previousTotal = previousMonth.whatsapp + previousMonth.slack;
   const monthlyGrowth = ((totalMessages - previousTotal) / previousTotal) * 100;

   return (
-    <div className="space-y-6">
+    <div className="space-y-4">
       <div className="flex items-center justify-between">
         <div>
-          <h2>WorkFlow Analytics</h2>
+          <h2 className="text-xl font-semibold">Bridge Analytics</h2>
           <p className="text-muted-foreground">
-            Real-life ERP metrics with OCR/NLP processing, auto-categorization performance, and recent months insights.
+            Social media to ERP metrics with recent months performance data.
           </p>
         </div>
         <div className="flex items-center space-x-2">
-          <Badge variant="outline" className="px-3 py-1">
-            August 2025
+          <Badge variant="outline" className="px-2 py-1 text-xs">
+            November 2024
           </Badge>
           <Button variant="outline" size="sm">
-            <Calendar className="h-4 w-4 mr-2" />
-            Export Report
+            <Calendar className="h-3 w-3 mr-1" />
+            Export
           </Button>
         </div>
       </div>

       {/* Budget Status Overview */}
-      <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-blue-200">
+      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
         <CardHeader>
-          <CardTitle className="flex items-center space-x-2">
-            <Target className="h-5 w-5 text-blue-600" />
-            <span>Real-Time Budget Status</span>
+          <CardTitle className="text-base flex items-center space-x-2">
+            <Target className="h-4 w-4 text-blue-600" />
+            <span>Budget Status (November)</span>
           </CardTitle>
         </CardHeader>
         <CardContent>
-          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
+          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
             {budgetStatusData.filter(item => item.usage > 85).map((item) => (
-              <div key={item.category} className="p-3 bg-white rounded-lg border border-orange-200">
-                <div className="flex items-center justify-between mb-2">
-                  <span className="font-medium text-sm">{item.category}</span>
-                  <AlertTriangle className="h-4 w-4 text-orange-500" />
+              <div key={item.category} className="p-2 bg-white rounded-md border border-red-200">
+                <div className="flex items-center justify-between mb-1">
+                  <span className="font-medium text-xs">{item.category}</span>
+                  <AlertTriangle className="h-3 w-3 text-red-500" />
                 </div>
-                <div className="space-y-1">
+                <div className="space-y-0.5">
                   <div className="w-full bg-gray-200 rounded-full h-2">
                     <div 
-                      className="h-2 rounded-full bg-orange-500"
+                      className="h-2 rounded-full bg-red-500"
                       style={{ width: `${item.usage}%` }}
                     ></div>
                   </div>
-                  <p className="text-xs text-orange-700 font-medium">{item.usage}% - {item.status}</p>
+                  <p className="text-xs text-red-700 font-medium">{item.usage}% - {item.status}</p>
                 </div>
               </div>
             ))}
-            {budgetStatusData.filter(item => item.usage >= 50 && item.usage <= 77).slice(0, 4).map((item) => (
-              <div key={item.category} className="p-3 bg-white rounded-lg border border-green-200">
-                <div className="flex items-center justify-between mb-2">
-                  <span className="font-medium text-sm">{item.category}</span>
-                  <Target className="h-4 w-4 text-green-500" />
+            {budgetStatusData.filter(item => item.usage >= 50 && item.usage <= 84).map((item) => (
+              <div key={item.category} className="p-2 bg-white rounded-md border border-green-200">
+                <div className="flex items-center justify-between mb-1">
+                  <span className="font-medium text-xs">{item.category}</span>
+                  <Target className="h-3 w-3 text-green-500" />
                 </div>
-                <div className="space-y-1">
+                <div className="space-y-0.5">
                   <div className="w-full bg-gray-200 rounded-full h-2">
                     <div 
                       className="h-2 rounded-full bg-green-500"
                       style={{ width: `${item.usage}%` }}
                     ></div>
                   </div>
                   <p className="text-xs text-green-700 font-medium">{item.usage}% - {item.status}</p>
                 </div>
               </div>
             ))}
           </div>
         </CardContent>
       </Card>

-      <Tabs defaultValue="overview" className="space-y-6">
-        <TabsList className="grid w-full grid-cols-4">
+      <Tabs defaultValue="overview" className="space-y-4">
+        <TabsList className="grid w-full grid-cols-3">
           <TabsTrigger value="overview">Overview</TabsTrigger>
           <TabsTrigger value="expenses">Expenses</TabsTrigger>
-          <TabsTrigger value="performance">Performance</TabsTrigger>
-          <TabsTrigger value="departments">Departments</TabsTrigger>
+          <TabsTrigger value="departments">Teams</TabsTrigger>
         </TabsList>

-        <TabsContent value="overview" className="space-y-6">
+        <TabsContent value="overview" className="space-y-4">
           {/* Key Metrics */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
-            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
-              <CardHeader className="pb-3">
-                <CardTitle className="text-sm flex items-center text-blue-700">
-                  <MessageSquare className="h-4 w-4 mr-2" />
-                  Monthly Messages
+            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
+              <CardHeader className="pb-2">
+                <CardTitle className="text-xs flex items-center text-blue-700">
+                  <MessageSquare className="h-3 w-3 mr-1" />
+                  Messages (Nov)
                 </CardTitle>
               </CardHeader>
               <CardContent>
-                <p className="text-2xl font-bold text-blue-800">{totalMessages}</p>
+                <p className="text-xl font-bold text-blue-800">{totalMessages.toLocaleString()}</p>
                 <p className="text-xs text-blue-600">
                   <span className={monthlyGrowth >= 0 ? 'text-green-600' : 'text-red-600'}>
                     {monthlyGrowth >= 0 ? '+' : ''}{monthlyGrowth.toFixed(1)}%
-                  </span> from last month
+                  </span> vs Oct
                 </p>
               </CardContent>
             </Card>

             <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
-              <CardHeader className="pb-3">
-                <CardTitle className="text-sm flex items-center text-purple-700">
-                  <Target className="h-4 w-4 mr-2" />
+              <CardHeader className="pb-2">
+                <CardTitle className="text-xs flex items-center text-purple-700">
+                  <Target className="h-3 w-3 mr-1" />
                   OCR/NLP Accuracy
                 </CardTitle>
               </CardHeader>
               <CardContent>
-                <p className="text-2xl font-bold text-purple-800">96.3%</p>
+                <p className="text-xl font-bold text-purple-800">96.8%</p>
                 <p className="text-xs text-purple-600">
-                  <span className="text-green-600">+1.4%</span> processing improvement
+                  <span className="text-green-600">+0.7%</span> improvement
                 </p>
               </CardContent>
             </Card>

             <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
-              <CardHeader className="pb-3">
-                <CardTitle className="text-sm flex items-center text-green-700">
-                  <Clock className="h-4 w-4 mr-2" />
+              <CardHeader className="pb-2">
+                <CardTitle className="text-xs flex items-center text-green-700">
+                  <Clock className="h-3 w-3 mr-1" />
                   Avg Response Time
                 </CardTitle>
               </CardHeader>
               <CardContent>
-                <p className="text-2xl font-bold text-green-800">2.1m</p>
+                <p className="text-xl font-bold text-green-800">2.0m</p>
                 <p className="text-xs text-green-600">
-                  <span className="text-green-600">-0.3m</span> faster than target
+                  <span className="text-green-600">-0.2m</span> vs target
                 </p>
               </CardContent>
             </Card>

             <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
-              <CardHeader className="pb-3">
-                <CardTitle className="text-sm flex items-center text-orange-700">
-                  <Users className="h-4 w-4 mr-2" />
-                  Active Users
+              <CardHeader className="pb-2">
+                <CardTitle className="text-xs flex items-center text-orange-700">
+                  <Users className="h-3 w-3 mr-1" />
+                  Active Teams
                 </CardTitle>
               </CardHeader>
               <CardContent>
-                <p className="text-2xl font-bold text-orange-800">8/10</p>
-                <p className="text-xs text-orange-600">80% engagement rate</p>
+                <p className="text-xl font-bold text-orange-800">5/5</p>
+                <p className="text-xs text-orange-600">100% active</p>
               </CardContent>
             </Card>
           </div>

           {/* Recent Months ERP Metrics */}
           <Card>
             <CardHeader>
-              <CardTitle>Recent Months: Auto-Categorization & Processing Performance</CardTitle>
+              <CardTitle className="text-base">Recent Months: Processing Performance</CardTitle>
             </CardHeader>
             <CardContent>
-              <ResponsiveContainer width="100%" height={350}>
+              <ResponsiveContainer width="100%" height={280}>
                 <ComposedChart data={recentMonthsData}>
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey="month" />
                   <YAxis yAxisId="left" />
                   <YAxis yAxisId="right" orientation="right" />
                   <Tooltip formatter={(value, name) => {
                     if (name.includes('Rate') || name.includes('Accuracy')) {
                       return [`${value}%`, name];
                     }
                     return [value, name];
                   }} />
-                  <Bar yAxisId="left" dataKey="procurement" fill="#3B82F6" name="Procurement (Orders)" />
-                  <Bar yAxisId="left" dataKey="expense" fill="#10B981" name="Expense (Approvals)" />
-                  <Bar yAxisId="left" dataKey="billing" fill="#8B5CF6" name="Billing (Receipts)" />
+                  <Bar yAxisId="left" dataKey="procurement" fill="#3B82F6" name="Procurement" />
+                  <Bar yAxisId="left" dataKey="expense" fill="#10B981" name="Expense" />
+                  <Bar yAxisId="left" dataKey="billing" fill="#8B5CF6" name="Billing" />
                   <Line yAxisId="right" type="monotone" dataKey="ocrAccuracy" stroke="#F59E0B" strokeWidth={3} name="OCR Accuracy" />
-                  <Line yAxisId="right" type="monotone" dataKey="nlpAccuracy" stroke="#EF4444" strokeWidth={2} name="NLP Accuracy" />
-                  <Line yAxisId="right" type="monotone" dataKey="autoApprovalRate" stroke="#06B6D4" strokeWidth={2} name="Auto-Approval Rate" />
+                  <Line yAxisId="right" type="monotone" dataKey="autoApprovalRate" stroke="#06B6D4" strokeWidth={2} name="Auto-Approval" />
                 </ComposedChart>
               </ResponsiveContainer>
             </CardContent>
           </Card>

-          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
+          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Platform Usage */}
             <Card>
               <CardHeader>
-                <CardTitle>Platform Distribution</CardTitle>
+                <CardTitle className="text-base">Platform Split</CardTitle>
               </CardHeader>
               <CardContent>
-                <ResponsiveContainer width="100%" height={250}>
+                <ResponsiveContainer width="100%" height={200}>
                   <PieChart>
                     <Pie
                       data={[
-                        { name: "WhatsApp", value: 67, color: "#25D366" },
-                        { name: "Slack", value: 33, color: "#4A154B" }
+                        { name: "WhatsApp", value: 54, color: "#25D366" },
+                        { name: "Slack", value: 46, color: "#4A154B" }
                       ]}
                       cx="50%"
                       cy="50%"
-                      innerRadius={60}
-                      outerRadius={100}
+                      innerRadius={40}
+                      outerRadius={80}
                       paddingAngle={5}
                       dataKey="value"
                     >
                       <Cell fill="#25D366" />
                       <Cell fill="#4A154B" />
                     </Pie>
                     <Tooltip />
                   </PieChart>
                 </ResponsiveContainer>
-                <div className="flex justify-center space-x-4 mt-4">
+                <div className="flex justify-center space-x-3 mt-2">
                   <div className="flex items-center space-x-2">
                     <div className="w-3 h-3 rounded-full bg-[#25D366]"></div>
-                    <span className="text-sm">WhatsApp: 67%</span>
+                    <span className="text-xs">WhatsApp: 54%</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <div className="w-3 h-3 rounded-full bg-[#4A154B]"></div>
-                    <span className="text-sm">Slack: 33%</span>
+                    <span className="text-xs">Slack: 46%</span>
                   </div>
                 </div>
               </CardContent>
             </Card>

             {/* Response Time Trends */}
             <Card>
               <CardHeader>
-                <CardTitle>Monthly Response Time by Department</CardTitle>
+                <CardTitle className="text-base">Response Times</CardTitle>
               </CardHeader>
               <CardContent>
-                <ResponsiveContainer width="100%" height={250}>
+                <ResponsiveContainer width="100%" height={200}>
                   <LineChart data={monthlyResponseData}>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="month" />
                     <YAxis />
                     <Tooltip />
                     <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={2} name="Sales" />
                     <Line type="monotone" dataKey="marketing" stroke="#F59E0B" strokeWidth={2} name="Marketing" />
                     <Line type="monotone" dataKey="engineering" stroke="#8B5CF6" strokeWidth={2} name="Engineering" />
                     <Line type="monotone" dataKey="finance" stroke="#3B82F6" strokeWidth={2} name="Finance" />
-                    <Line type="monotone" dataKey="hr" stroke="#EF4444" strokeWidth={2} name="HR" />
                   </LineChart>
                 </ResponsiveContainer>
               </CardContent>
             </Card>
           </div>
         </TabsContent>

-        <TabsContent value="expenses" className="space-y-6">
+        <TabsContent value="expenses" className="space-y-4">
           {/* Monthly Expense Trends */}
           <Card>
             <CardHeader>
-              <CardTitle>Monthly Expense Categories (Recent 3 Months)</CardTitle>
+              <CardTitle className="text-base">Expense Trends (3 Months)</CardTitle>
             </CardHeader>
             <CardContent>
-              <ResponsiveContainer width="100%" height={400}>
+              <ResponsiveContainer width="100%" height={300}>
                 <AreaChart data={monthlyExpenseData}>
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey="month" />
                   <YAxis />
                   <Tooltip formatter={(value) => [`${(value / 1000).toFixed(0)}K BDT`, '']} />
                   <Area type="monotone" dataKey="salary" stackId="1" stroke="#06B6D4" fill="#06B6D4" name="Salary" />
                   <Area type="monotone" dataKey="equipment" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" name="Equipment" />
                   <Area type="monotone" dataKey="travel" stackId="1" stroke="#3B82F6" fill="#3B82F6" name="Travel" />
                   <Area type="monotone" dataKey="food" stackId="1" stroke="#F59E0B" fill="#F59E0B" name="Food" />
                   <Area type="monotone" dataKey="legal" stackId="1" stroke="#10B981" fill="#10B981" name="Legal" />
                   <Area type="monotone" dataKey="repair" stackId="1" stroke="#EF4444" fill="#EF4444" name="Repair" />
                 </AreaChart>
               </ResponsiveContainer>
             </CardContent>
           </Card>

           {/* Budget vs Actual */}
-          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
+          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
             {expenseCategoryData.map((category) => {
               const utilization = (category.value / category.budget) * 100;
               const isOverBudget = utilization > 100;
               
               return (
-                <Card key={category.name} className={isOverBudget ? 'border-red-200 bg-red-50' : ''}>
-                  <CardHeader className="pb-3">
-                    <CardTitle className="text-sm flex items-center justify-between">
+                <Card key={category.name} className={`${isOverBudget ? 'border-red-200 bg-red-50' : ''}`}>
+                  <CardHeader className="pb-2">
+                    <CardTitle className="text-xs flex items-center justify-between">
                       <span>{category.name}</span>
-                      {isOverBudget && <AlertTriangle className="h-4 w-4 text-red-500" />}
+                      {isOverBudget && <AlertTriangle className="h-3 w-3 text-red-500" />}
                     </CardTitle>
                   </CardHeader>
-                  <CardContent className="space-y-3">
-                    <div className="space-y-1">
+                  <CardContent className="space-y-2">
+                    <div className="space-y-0.5">
                       <div className="flex justify-between text-xs">
-                        <span>Budget: {category.budget}K BDT</span>
+                        <span>Budget: {category.budget}K</span>
                         <span className={isOverBudget ? 'text-red-600 font-medium' : ''}>
-                          Spent: {category.value}K BDT
+                          Used: {category.value}K
                         </span>
                       </div>
                       <Progress 
                         value={Math.min(utilization, 100)} 
-                        className="h-2"
+                        className="h-1.5"
                       />
-                      <p className="text-xs text-center">
+                      <p className="text-xs text-center font-medium">
                         <span className={utilization > 100 ? 'text-red-600' : utilization > 90 ? 'text-orange-600' : 'text-green-600'}>
                           {utilization.toFixed(1)}%
                         </span>
                       </p>
                     </div>
                   </CardContent>
                 </Card>
               );
             })}
           </div>
         </TabsContent>

-        <TabsContent value="performance" className="space-y-6">
-          {/* Top Performers */}
-          <Card>
-            <CardHeader>
-              <CardTitle>Monthly Communication Leaders</CardTitle>
-            </CardHeader>
-            <CardContent>
-              <div className="space-y-4">
-                {[
-                  { name: "Abdul Mannan", messages: 72, responseTime: "1.5m", efficiency: 96, department: "Sales" },
-                  { name: "Fatima Rahman", messages: 67, responseTime: "1.2m", efficiency: 98, department: "Product" },
-                  { name: "Jahangir Alam", messages: 63, responseTime: "1.9m", efficiency: 94, department: "Operations" },
-                  { name: "Ruma Akter", messages: 56, responseTime: "2.7m", efficiency: 89, department: "Marketing" },
-                  { name: "Aminul Haque", messages: 54, responseTime: "2.1m", efficiency: 95, department: "Engineering" },
-                ].map((performer, index) => (
-                  <div key={performer.name} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow">
-                    <div className="flex items-center space-x-4">
-                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
-                        index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-600' : 'bg-primary'
-                      }`}>
-                        <span className="text-sm font-medium text-white">
-                          #{index + 1}
-                        </span>
-                      </div>
-                      <div>
-                        <h4 className="font-medium">{performer.name}</h4>
-                        <p className="text-sm text-muted-foreground">
-                          {performer.department} • {performer.messages} messages
-                        </p>
-                      </div>
-                    </div>
-                    <div className="flex items-center space-x-4">
-                      <div className="text-right">
-                        <p className="text-sm font-medium">{performer.responseTime}</p>
-                        <p className="text-xs text-muted-foreground">Avg response</p>
-                      </div>
-                      <Badge 
-                        variant={performer.efficiency >= 95 ? "default" : "secondary"}
-                      >
-                        {performer.efficiency}% efficiency
-                      </Badge>
-                    </div>
-                  </div>
-                ))}
-              </div>
-            </CardContent>
-          </Card>
-        </TabsContent>

-        <TabsContent value="departments" className="space-y-6">
+        <TabsContent value="departments" className="space-y-4">
           {/* Department Performance */}
-          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
+          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {departmentPerformance.map((dept) => {
               const budgetUtilization = (dept.spent / dept.budget) * 100;
               
               return (
-                <Card key={dept.department} className="hover:shadow-md transition-shadow">
+                <Card key={dept.department} className="hover:shadow-sm transition-shadow">
                   <CardHeader>
-                    <CardTitle className="flex items-center justify-between">
+                    <CardTitle className="text-base flex items-center justify-between">
                       <span>{dept.department}</span>
-                      <Badge variant={dept.efficiency >= 90 ? "default" : "secondary"}>
+                      <Badge variant={dept.efficiency >= 90 ? "default" : "secondary"} className="text-xs">
                         {dept.efficiency}% efficient
                       </Badge>
                     </CardTitle>
                   </CardHeader>
-                  <CardContent className="space-y-4">
-                    <div className="grid grid-cols-2 gap-4 text-sm">
+                  <CardContent className="space-y-3">
+                    <div className="grid grid-cols-2 gap-3 text-sm">
                       <div>
                         <p className="text-muted-foreground">Messages</p>
-                        <p className="text-xl font-bold text-primary">{dept.messages}</p>
+                        <p className="text-lg font-bold text-primary">{dept.messages}</p>
                       </div>
                       <div>
                         <p className="text-muted-foreground">Response Time</p>
-                        <p className="text-xl font-bold">{dept.avgResponse}m</p>
+                        <p className="text-lg font-bold">{dept.avgResponse}m</p>
                       </div>
                     </div>
                     
-                    <div className="space-y-2">
+                    <div className="space-y-1">
                       <div className="flex justify-between items-center">
-                        <span className="text-sm text-muted-foreground">Budget Utilization</span>
-                        <span className="text-sm font-medium">
+                        <span className="text-xs text-muted-foreground">Budget Usage</span>
+                        <span className="text-xs font-medium">
                           {(dept.spent / 1000).toFixed(0)}K / {(dept.budget / 1000).toFixed(0)}K BDT
                         </span>
                       </div>
-                      <Progress value={budgetUtilization} className="h-2" />
+                      <Progress value={budgetUtilization} className="h-1.5" />
                       <p className="text-xs text-center text-muted-foreground">
                         {budgetUtilization.toFixed(1)}% of budget used
                       </p>
                     </div>
                   </CardContent>
                 </Card>
               );
             })}
           </div>
         </TabsContent>
       </Tabs>
     </div>
   );
 }