import { cn } from "./ui/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  LayoutDashboard, 
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
  Smartphone
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
      id: "communications",
      label: "WorkFlow Connect",
      icon: MessageSquare,
      badge: 5,
    },
    {
      id: "whatsapp-approval",
      label: "WhatsApp Bridge",
      icon: Smartphone,
      badge: 4,
    },
    {
      id: "slack-approval",
      label: "Slack Bridge",
      icon: Hash,
      badge: 5,
    },
    {
      id: "receipt-management",
      label: "Receipt Processing",
      icon: Receipt,
      badge: 12,
    },
    {
      id: "approval-workflow",
      label: "Approval Flow",
      icon: ClipboardCheck,
      badge: 8,
    },
    {
      id: "procurement-approval",
      label: "Procurement",
      icon: ShoppingCart,
      badge: 3,
    },
    {
      id: "erp-integration",
      label: "ERP Sync",
      icon: Database,
      badge: 3,
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      badge: null,
    },
    {
      id: "budget",
      label: "Budget Control",
      icon: DollarSign,
      badge: 2,
    },
    {
      id: "smart-filter",
      label: "Smart Assistant",
      icon: Brain,
      badge: 15,
    },
  ];

  const bottomItems = [
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
      badge: 2,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      badge: null,
    },
    {
      id: "help",
      label: "Help",
      icon: HelpCircle,
      badge: null,
    },
  ];

  return (
    <div className="flex flex-col h-full bg-sidebar border-r">
      {/* Logo */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
            <MessageSquare className="h-3 w-3 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-sm">MonstarPulse</h1>
            <p className="text-xs text-muted-foreground">ERP Bridge</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 p-3">
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start h-8 text-xs",
                  isActive && "bg-primary text-primary-foreground"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="mr-2 h-3 w-3" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <Badge
                    variant={isActive ? "secondary" : "default"}
                    className="ml-auto text-xs h-4 px-1"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Button>
            );
          })}
        </nav>
      </div>

      {/* User Profile */}
      <div className="p-3 border-t">
        <div className="flex items-center space-x-2 p-2 rounded-lg bg-accent/50">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-primary-foreground">CM</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-xs truncate">Clueless Monstars</p>
            <p className="text-xs text-muted-foreground truncate">System Admin</p>
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <div className="mt-3 space-y-1">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className="w-full justify-start h-7 text-xs"
                onClick={() => {
                  if (item.id === 'logout') {
                    console.log('Logout clicked');
                  } else {
                    onTabChange(item.id);
                  }
                }}
              >
                <Icon className="mr-2 h-3 w-3" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <Badge variant="destructive" className="ml-auto text-xs h-4 px-1">
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