import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Send, Search, Phone, Video, MoreVertical, Settings } from "lucide-react";

export function CommunicationCenter() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Procurement Team",
      platform: "Slack",
      lastMessage: "Need approval for office supplies - 45K total",
      time: "2m ago",
      unread: 3,
      isGroup: true,
      members: 8,
      status: "online",
      hasRelevantContent: true,
    },
    {
      id: 2,
      name: "Fatima Rahman",
      platform: "WhatsApp",
      lastMessage: "...need reimbursement for client meeting expenses",
      time: "5m ago",
      unread: 1,
      isGroup: false,
      status: "online",
      hasRelevantContent: true,
    },
    {
      id: 3,
      name: "Finance Team",
      platform: "Slack",
      lastMessage: "...billing process for Q3 vendor payments ready",
      time: "12m ago",
      unread: 0,
      isGroup: true,
      members: 12,
      status: "away",
      hasRelevantContent: true,
    },
    {
      id: 4,
      name: "Karim Rahman",
      platform: "WhatsApp",
      lastMessage: "...laptop procurement approved, delivery next week",
      time: "1h ago",
      unread: 0,
      isGroup: false,
      status: "busy",
      hasRelevantContent: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Fatima Rahman",
      content: "...need reimbursement for yesterday's client meeting expenses - hotel 15K, transport 8K, meals 5K. Total 28K with receipts attached.",
      fullMessage: "Good morning! Project meeting went well. The client was impressed with our proposal... (RELEVANT PART) need reimbursement for yesterday's client meeting expenses - hotel 15K, transport 8K, meals 5K. Total 28K with receipts attached.",
      time: "9:15 AM",
      isOwn: false,
      platform: "WhatsApp",
      isRelevant: true,
      detectedType: "expense_request",
      keywords: ["reimbursement", "expenses", "28K", "receipts"]
    },
    {
      id: 2,
      sender: "You",
      content: "Thanks for the expense details. I'll process the reimbursement request and forward it to Finance for approval.",
      time: "9:18 AM",
      isOwn: true,
      platform: "WhatsApp",
      isRelevant: true,
      detectedType: "expense_response"
    },
    {
      id: 3,
      sender: "Fatima Rahman",
      content: "...also need approval for new marketing materials procurement - 65K budget for brochures, banners, and promotional items from PrintPro Ltd.",
      fullMessage: "Great, thanks! Also wanted to discuss the upcoming campaign... (RELEVANT PART) also need approval for new marketing materials procurement - 65K budget for brochures, banners, and promotional items from PrintPro Ltd.",
      time: "9:20 AM",
      isOwn: false,
      platform: "WhatsApp",
      isRelevant: true,
      detectedType: "procurement_request",
      keywords: ["approval", "procurement", "65K", "PrintPro Ltd"]
    },
    {
      id: 4,
      sender: "You",
      content: "I'll review the marketing procurement request. Please send the quotation from PrintPro Ltd for processing.",
      time: "9:22 AM",
      isOwn: true,
      platform: "WhatsApp",
      isRelevant: true,
      detectedType: "procurement_response"
    },
    {
      id: 5,
      sender: "Fatima Rahman",
      content: "...quarterly billing report shows 2.3M processed this month. All vendor payments cleared except pending approvals worth 450K.",
      fullMessage: "Perfect, I'll send the quotation shortly. On another note... (RELEVANT PART) quarterly billing report shows 2.3M processed this month. All vendor payments cleared except pending approvals worth 450K.",
      time: "9:25 AM",
      isOwn: false,
      platform: "WhatsApp",
      isRelevant: true,
      detectedType: "billing_update",
      keywords: ["billing", "2.3M", "vendor payments", "450K"]
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would normally send the message
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>WorkFlow Connect</h2>
          <p className="text-muted-foreground">
            Smart business communication hub that captures billing, procurement, and approval conversations across platforms.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Conversations</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px]">
              <div className="space-y-1 p-4">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedConversation === conv.id
                        ? "bg-accent"
                        : "hover:bg-accent/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>{getInitials(conv.name)}</AvatarFallback>
                          </Avatar>
                          {!conv.isGroup && (
                            <div
                              className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                                conv.status === "online"
                                  ? "bg-green-500"
                                  : conv.status === "busy"
                                  ? "bg-red-500"
                                  : "bg-yellow-500"
                              }`}
                            ></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium truncate">{conv.name}</h4>
                            <Badge
                              variant={conv.platform === "WhatsApp" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {conv.platform}
                            </Badge>
                          </div>
                          {conv.isGroup && (
                            <p className="text-xs text-muted-foreground">
                              {conv.members} members
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{conv.time}</p>
                        {conv.unread > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {conv.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {conv.lastMessage}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Fatima Rahman</CardTitle>
                  <p className="text-sm text-muted-foreground">Active now</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col h-[450px]">
            {/* Messages */}
            <ScrollArea className="flex-1 mb-4">
              <div className="space-y-4 p-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[70%] ${msg.isOwn ? "order-2" : "order-1"}`}>
                      <div
                        className={`p-3 rounded-lg ${
                          msg.isOwn
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 px-1">
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="flex space-x-2">
              <Textarea
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 min-h-[40px] max-h-[100px] resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button onClick={handleSendMessage} className="self-end">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}