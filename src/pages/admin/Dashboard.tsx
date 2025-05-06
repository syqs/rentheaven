
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Building, Users, Wallet, ChartBarStacked, Brain, Diamond } from "lucide-react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export default function AdminDashboard() {
  // Mock data for admin dashboard
  const stats = [
    {
      title: "Total Properties",
      value: "12",
      icon: Building,
      description: "8 tokenized",
    },
    {
      title: "Investors",
      value: "253",
      icon: Users,
      description: "+12% from last month",
    },
    {
      title: "Total Investments",
      value: "$2.4M",
      icon: Wallet,
      description: "+5% from last week",
    },
    {
      title: "Monthly Revenue",
      value: "$78.5K",
      icon: ChartBarStacked,
      description: "+8% from last month",
    },
  ];

  const recentProperties = [
    {
      id: 1,
      name: "Oceanview Residence",
      location: "Miami, FL",
      tokenized: 75,
      value: "$2,500,000",
    },
    {
      id: 2,
      name: "Mountain Retreat",
      location: "Aspen, CO",
      tokenized: 42,
      value: "$3,750,000",
    },
    {
      id: 3,
      name: "Downtown Loft",
      location: "New York, NY",
      tokenized: 88,
      value: "$1,850,000",
    },
  ];

  // Monthly investment data for the line chart
  const monthlyInvestmentData = [
    { name: "Jan", amount: 120000 },
    { name: "Feb", amount: 160000 },
    { name: "Mar", amount: 180000 },
    { name: "Apr", amount: 210000 },
    { name: "May", amount: 250000 },
    { name: "Jun", amount: 280000 },
  ];

  // Property types data for the pie chart
  const propertyTypeData = [
    { name: "Residential", value: 45 },
    { name: "Commercial", value: 30 },
    { name: "Mixed-Use", value: 15 },
    { name: "Vacation", value: 10 },
  ];

  const COLORS = ["#9b87f5", "#6E59A5", "#1A1F2C", "#D6BCFA"];

  // ROI by property type for bar chart
  const roiByPropertyType = [
    { name: "Residential", roi: 8.2 },
    { name: "Commercial", roi: 7.4 },
    { name: "Mixed-Use", roi: 9.1 },
    { name: "Vacation", roi: 11.5 },
  ];

  // AI-generated suggestions for property investments
  const aiSuggestions = [
    {
      title: "Increase Tokenization Rate",
      description: "Properties with > 70% tokenization are showing 15% higher ROI. Consider focusing marketing efforts on properties below this threshold.",
      impact: "high"
    },
    {
      title: "Diversify Property Types",
      description: "Portfolio analysis suggests adding 2-3 more vacation properties could balance seasonal revenue fluctuations.",
      impact: "medium"
    },
    {
      title: "Pricing Optimization",
      description: "Token pricing for downtown properties could be increased by 5-8% based on current market demand patterns.",
      impact: "high"
    },
  ];

  // Chart config for consistent styling
  const chartConfig = {
    investments: {
      label: "Investments ($)",
      theme: {
        light: "#9b87f5",
        dark: "#8B5CF6",
      },
    },
    revenue: {
      label: "Revenue",
      theme: {
        light: "#0EA5E9",
        dark: "#0EA5E9",
      },
    },
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your property tokenization portfolio.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Insights Section */}
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-purple-500" />
              <CardTitle className="text-lg">AI-Generated Insights</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="flex space-x-3">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${suggestion.impact === 'high' ? 'bg-purple-100 text-purple-500' : 'bg-blue-100 text-blue-500'}`}>
                    {suggestion.impact === 'high' ? (
                      <Diamond className="h-4 w-4" />
                    ) : (
                      <ChartBarStacked className="h-4 w-4" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{suggestion.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {suggestion.description}
                    </p>
                  </div>
                  <div className={`ml-auto mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-xs ${suggestion.impact === 'high' ? 'bg-purple-100 text-purple-500' : 'bg-blue-100 text-blue-500'}`}>
                    {suggestion.impact} impact
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Investment Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig}>
                  <LineChart data={monthlyInvestmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="amount" 
                      name="investments"
                      stroke="#9b87f5" 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Property Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={propertyTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {propertyTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Recent Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProperties.map((property) => (
                  <div key={property.id} className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{property.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {property.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{property.value}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Tokenization Progress</span>
                        <span>{property.tokenized}%</span>
                      </div>
                      <Progress value={property.tokenized} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>ROI by Property Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={roiByPropertyType}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'ROI %', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="roi" fill="#6E59A5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
