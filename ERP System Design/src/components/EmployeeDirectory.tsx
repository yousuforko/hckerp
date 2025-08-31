import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Search, MessageSquare, Phone, Mail, MoreVertical, Users, TrendingUp } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function EmployeeDirectory() {
  const employees = [
    {
      id: 1,
      name: "Fatima Rahman",
      role: "Product Manager",
      department: "Product",
      status: "online",
      avatar: "",
      phone: "+880 1711-123456",
      email: "fatima.rahman@monstarpulse.com",
      whatsapp: true,
      slack: true,
      messagesThisWeek: 67,
      responseTime: "1.2m"
    },
    {
      id: 2,
      name: "Aminul Haque",
      role: "Senior Developer",
      department: "Engineering",
      status: "busy",
      avatar: "",
      phone: "+880 1712-234567",
      email: "aminul.haque@monstarpulse.com",
      whatsapp: true,
      slack: true,
      messagesThisWeek: 54,
      responseTime: "2.1m"
    },
    {
      id: 3,
      name: "Rashida Khatun",
      role: "Marketing Director",
      department: "Marketing",
      status: "away",
      avatar: "",
      phone: "+880 1713-345678",
      email: "rashida.khatun@monstarpulse.com",
      whatsapp: false,
      slack: true,
      messagesThisWeek: 48,
      responseTime: "1.8m"
    },
    {
      id: 4,
      name: "Mohammad Karim",
      role: "HR Manager",
      department: "Human Resources",
      status: "online",
      avatar: "",
      phone: "+880 1714-456789",
      email: "mohammad.karim@monstarpulse.com",
      whatsapp: true,
      slack: true,
      messagesThisWeek: 41,
      responseTime: "3.2m"
    },
    {
      id: 5,
      name: "Nusrat Jahan",
      role: "UX Designer",
      department: "Design",
      status: "offline",
      avatar: "",
      phone: "+880 1715-567890",
      email: "nusrat.jahan@monstarpulse.com",
      whatsapp: true,
      slack: false,
      messagesThisWeek: 38,
      responseTime: "2.9m"
    },
    {
      id: 6,
      name: "Abdul Mannan",
      role: "Sales Manager",
      department: "Sales",
      status: "online",
      avatar: "",
      phone: "+880 1716-678901",
      email: "abdul.mannan@monstarpulse.com",
      whatsapp: true,
      slack: true,
      messagesThisWeek: 72,
      responseTime: "1.5m"
    },
    {
      id: 7,
      name: "Shahana Begum",
      role: "Finance Manager",
      department: "Finance",
      status: "busy",
      avatar: "",
      phone: "+880 1717-789012",
      email: "shahana.begum@monstarpulse.com",
      whatsapp: true,
      slack: true,
      messagesThisWeek: 45,
      responseTime: "2.4m"
    },
    {
      id: 8,
      name: "Tariqul Islam",
      role: "DevOps Engineer",
      department: "Engineering",
      status: "online",
      avatar: "",
      phone: "+880 1718-890123",
      email: "tariqul.islam@monstarpulse.com",
      whatsapp: false,
      slack: true,
      messagesThisWeek: 31,
      responseTime: "4.1m"
    },
    {
      id: 9,
      name: "Ruma Akter",
      role: "Content Manager",
      department: "Marketing",
      status: "away",
      avatar: "",
      phone: "+880 1719-901234",
      email: "ruma.akter@monstarpulse.com",
      whatsapp: true,
      slack: true,
      messagesThisWeek: 56,
      responseTime: "2.7m"
    },
    {
      id: 10,
      name: "Jahangir Alam",
      role: "Operations Manager",
      department: "Operations",
      status: "online",
      avatar: "",
      phone: "+880 1720-012345",
      email: "jahangir.alam@monstarpulse.com",
      whatsapp: true,
      slack: true,
      messagesThisWeek: 63,
      responseTime: "1.9m"
    }
  ];

  const departments = [...new Set(employees.map(emp => emp.department))];
  
  const departmentStats = departments.map(dept => {
    const deptEmployees = employees.filter(emp => emp.department === dept);
    const onlineCount = deptEmployees.filter(emp => emp.status === 'online').length;
    const totalMessages = deptEmployees.reduce((sum, emp) => sum + emp.messagesThisWeek, 0);
    const avgResponseTime = deptEmployees.reduce((sum, emp) => sum + parseFloat(emp.responseTime), 0) / deptEmployees.length;
    
    return {
      name: dept,
      employeeCount: deptEmployees.length,
      onlineCount,
      totalMessages,
      avgResponseTime: avgResponseTime.toFixed(1) + 'm'
    };
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "busy":
        return "bg-red-500";
      case "away":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Employee Directory</h2>
          <p className="text-muted-foreground">
            Manage and communicate with your team members across departments.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="px-3 py-1">
            {employees.length} Total Employees
          </Badge>
          <Button>Add Employee</Button>
        </div>
      </div>

      <Tabs defaultValue="directory" className="space-y-6">
        <TabsList>
          <TabsTrigger value="directory">Directory</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search employees..."
              className="pl-10"
            />
          </div>

          {/* Employee Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((employee) => (
              <Card key={employee.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={employee.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {getInitials(employee.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(
                            employee.status
                          )}`}
                        ></div>
                      </div>
                      <div>
                        <CardTitle className="text-base">{employee.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {employee.role}
                        </p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Employee</DropdownMenuItem>
                        <DropdownMenuItem>Send Message</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{employee.department}</Badge>
                    <Badge
                      variant={employee.status === "online" ? "default" : "secondary"}
                      className="capitalize"
                    >
                      {employee.status}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{employee.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground truncate">
                        {employee.email}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-center p-2 bg-accent rounded-lg">
                      <p className="font-medium">{employee.messagesThisWeek}</p>
                      <p className="text-muted-foreground">Messages</p>
                    </div>
                    <div className="text-center p-2 bg-accent rounded-lg">
                      <p className="font-medium">{employee.responseTime}</p>
                      <p className="text-muted-foreground">Avg Response</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex space-x-2">
                      {employee.whatsapp && (
                        <Badge variant="outline" className="text-green-600 text-xs">
                          WhatsApp
                        </Badge>
                      )}
                      {employee.slack && (
                        <Badge variant="outline" className="text-purple-600 text-xs">
                          Slack
                        </Badge>
                      )}
                    </div>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentStats.map((dept) => (
              <Card key={dept.name} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{dept.name}</span>
                    <Badge variant="outline">
                      {dept.employeeCount} members
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Online Now</p>
                      <p className="text-xl font-bold text-green-600">
                        {dept.onlineCount}/{dept.employeeCount}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Messages</p>
                      <p className="text-xl font-bold text-primary">
                        {dept.totalMessages}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Avg Response Time</p>
                    <p className="text-lg font-medium">{dept.avgResponseTime}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Team
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Total Employees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{employees.length}</p>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+2</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Online Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {Math.round((employees.filter(e => e.status === 'online').length / employees.length) * 100)}%
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+5%</span> from yesterday
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Total Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {employees.reduce((sum, emp) => sum + emp.messagesThisWeek, 0)}
                </p>
                <p className="text-xs text-muted-foreground">This week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Departments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{departments.length}</p>
                <p className="text-xs text-muted-foreground">Active departments</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}