
import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  ChartBar, 
  Users, 
  BadgeDollarSign, 
  Search, 
  ArrowUpDown,
  Brain,
  Diamond
} from "lucide-react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from "recharts";
import { toast } from "@/hooks/use-toast";

export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  // Mock user data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      status: "active",
      investments: 8,
      totalInvested: 125000,
      totalPayout: 15750,
      lastActive: "2 hours ago",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=John"
    },
    {
      id: 2,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      status: "active",
      investments: 12,
      totalInvested: 310000,
      totalPayout: 42850,
      lastActive: "1 day ago",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Emma"
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      status: "inactive",
      investments: 3,
      totalInvested: 75000,
      totalPayout: 8250,
      lastActive: "2 weeks ago",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Michael"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      status: "active",
      investments: 6,
      totalInvested: 180000,
      totalPayout: 21600,
      lastActive: "3 days ago",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah"
    },
    {
      id: 5,
      name: "Robert Garcia",
      email: "robert.garcia@example.com",
      status: "pending",
      investments: 1,
      totalInvested: 25000,
      totalPayout: 0,
      lastActive: "just now",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Robert"
    },
    {
      id: 6,
      name: "Lisa Chen",
      email: "lisa.chen@example.com",
      status: "active",
      investments: 9,
      totalInvested: 420000,
      totalPayout: 56700,
      lastActive: "5 hours ago",
      avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Lisa"
    },
  ];

  // Investor distribution data for pie chart
  const investorDistributionData = [
    { name: "Premium Investors (>$250k)", value: 35 },
    { name: "Standard Investors ($50k-$250k)", value: 45 },
    { name: "Entry Investors (<$50k)", value: 20 },
  ];

  // Monthly payouts data for bar chart
  const monthlyPayoutsData = [
    { month: "Jan", payouts: 42500 },
    { month: "Feb", payouts: 48200 },
    { month: "Mar", payouts: 53000 },
    { month: "Apr", payouts: 61500 },
    { month: "May", payouts: 68200 },
    { month: "Jun", payouts: 72000 },
  ];

  // Investment activity data
  const investmentActivityData = [
    { month: "Jan", newUsers: 8, activeUsers: 42 },
    { month: "Feb", newUsers: 12, activeUsers: 50 },
    { month: "Mar", newUsers: 15, activeUsers: 63 },
    { month: "Apr", newUsers: 18, activeUsers: 78 },
    { month: "May", newUsers: 22, activeUsers: 94 },
    { month: "Jun", newUsers: 25, activeUsers: 116 },
  ];

  // AI-generated insights for user engagement
  const aiInsights = [
    {
      title: "User Retention Opportunity",
      description: "Users who receive monthly update emails have 32% higher retention rate. Consider implementing automated monthly portfolio updates for all users.",
      impact: "high"
    },
    {
      title: "Investment Pattern",
      description: "Premium investors tend to increase their investments by 15% after their first quarterly payout. Schedule personal calls with new premium investors.",
      impact: "medium"
    },
    {
      title: "Investor Segmentation",
      description: "Creating a VIP tier for investors with >$500k total investment could increase overall platform engagement by 22%.",
      impact: "high"
    },
  ];

  // Colors for pie chart
  const COLORS = ["#9b87f5", "#6E59A5", "#1A1F2C", "#D6BCFA"];

  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let comparison = 0;
    if (sortBy === "name") {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === "investments") {
      comparison = a.investments - b.investments;
    } else if (sortBy === "totalInvested") {
      comparison = a.totalInvested - b.totalInvested;
    } else if (sortBy === "totalPayout") {
      comparison = a.totalPayout - b.totalPayout;
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  // Handle column sort
  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  // Handle send payout
  const handleSendPayout = (userId: number, userName: string) => {
    toast({
      title: "Payout initialized",
      description: `Payout for ${userName} has been scheduled`,
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Users Management</h1>
            <p className="text-muted-foreground">
              Manage your platform's investors and their payouts.
            </p>
          </div>
          <Button>Add New User</Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-muted-foreground">
                +3 this week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter(u => u.status === "active").length}</div>
              <p className="text-xs text-muted-foreground">
                {Math.round(users.filter(u => u.status === "active").length / users.length * 100)}% of total
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Invested
              </CardTitle>
              <BadgeDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${users.reduce((sum, user) => sum + user.totalInvested, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Across {users.reduce((sum, user) => sum + user.investments, 0)} investments
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Payouts
              </CardTitle>
              <BadgeDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${users.reduce((sum, user) => sum + user.totalPayout, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                YTD increase of 18%
              </p>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights Section */}
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-purple-500" />
              <CardTitle className="text-lg">AI-Generated User Insights</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="flex space-x-3">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${insight.impact === 'high' ? 'bg-purple-100 text-purple-500' : 'bg-blue-100 text-blue-500'}`}>
                    {insight.impact === 'high' ? (
                      <Diamond className="h-4 w-4" />
                    ) : (
                      <ChartBar className="h-4 w-4" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{insight.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {insight.description}
                    </p>
                  </div>
                  <div className={`ml-auto mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-xs ${insight.impact === 'high' ? 'bg-purple-100 text-purple-500' : 'bg-blue-100 text-blue-500'}`}>
                    {insight.impact} impact
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analytics Section */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Investor Distribution */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Investor Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={investorDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {investorDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Payouts */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Monthly Payouts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={monthlyPayoutsData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Bar dataKey="payouts" fill="#9b87f5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* User Activity */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={investmentActivityData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="newUsers" name="New Users" fill="#9b87f5" />
                    <Bar dataKey="activeUsers" name="Active Users" fill="#6E59A5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <CardTitle>User Management</CardTitle>
              <div className="relative max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of your platform's users.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("investments")}>
                      Investments
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("totalInvested")}>
                      Total Invested
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center cursor-pointer" onClick={() => handleSort("totalPayout")}>
                      Total Payout
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="w-8 h-8 rounded-full mr-2" 
                        />
                        <div>
                          <div>{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{user.investments}</TableCell>
                    <TableCell>${user.totalInvested.toLocaleString()}</TableCell>
                    <TableCell>${user.totalPayout.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          user.status === "active" 
                            ? "default" 
                            : user.status === "inactive" 
                              ? "destructive" 
                              : "outline"
                        }
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.lastActive}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleSendPayout(user.id, user.name)}
                          disabled={user.status !== "active"}
                        >
                          Send Payout
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
