
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brain, Building, Plus, Wand } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie
} from 'recharts';

export default function AdminProperties() {
  // Mock data for properties
  const properties = [
    {
      id: 1,
      name: "Oceanview Residence",
      location: "Miami, FL",
      type: "Residential",
      value: "$2,500,000",
      tokenized: 75,
      investors: 42,
      yearlyReturn: 8.4,
      status: "Active",
    },
    {
      id: 2,
      name: "Mountain Retreat",
      location: "Aspen, CO",
      type: "Vacation",
      value: "$3,750,000",
      tokenized: 42,
      investors: 28,
      yearlyReturn: 10.2,
      status: "Active",
    },
    {
      id: 3,
      name: "Downtown Loft",
      location: "New York, NY",
      type: "Mixed-Use",
      value: "$1,850,000",
      tokenized: 88,
      investors: 63,
      yearlyReturn: 7.8,
      status: "Active",
    },
    {
      id: 4,
      name: "Palm Beach Villa",
      location: "Palm Beach, FL",
      type: "Residential",
      value: "$4,200,000",
      tokenized: 21,
      investors: 15,
      yearlyReturn: 9.5,
      status: "Pending",
    },
    {
      id: 5,
      name: "Tech Park Office",
      location: "San Francisco, CA",
      type: "Commercial",
      value: "$5,100,000",
      tokenized: 63,
      investors: 37,
      yearlyReturn: 6.7,
      status: "Active",
    },
  ];

  // Top performing properties by ROI
  const topPerformers = properties.sort((a, b) => b.yearlyReturn - a.yearlyReturn).slice(0, 3);
  
  // Properties needing attention (low tokenization)
  const needsAttention = properties.filter(p => p.tokenized < 50).sort((a, b) => a.tokenized - b.tokenized);

  // Performance data for the chart
  const performanceData = properties.map(p => ({
    name: p.name.split(' ')[0],
    return: p.yearlyReturn,
    tokenized: p.tokenized
  }));

  // Tokenization distribution data
  const tokenizationData = [
    { name: '0-25%', value: properties.filter(p => p.tokenized <= 25).length },
    { name: '26-50%', value: properties.filter(p => p.tokenized > 25 && p.tokenized <= 50).length },
    { name: '51-75%', value: properties.filter(p => p.tokenized > 50 && p.tokenized <= 75).length },
    { name: '76-100%', value: properties.filter(p => p.tokenized > 75).length },
  ];

  const COLORS = ["#D6BCFA", "#9b87f5", "#6E59A5", "#1A1F2C"];

  // AI-generated recommendations
  const aiRecommendations = [
    {
      property: "Palm Beach Villa",
      recommendation: "Increase marketing focus. Property in high-demand area with low tokenization rate (21%).",
      potentialImpact: "+15-20% tokenization within 30 days"
    },
    {
      property: "Mountain Retreat",
      recommendation: "Adjust token pricing by +3% based on comparable properties and current demand.",
      potentialImpact: "+2.1% ROI increase"
    },
    {
      property: "Tech Park Office",
      recommendation: "Consider partial renovation for higher valuation. Analysis shows 4.5x ROI on interior upgrades.",
      potentialImpact: "+$430K potential value increase"
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
            <p className="text-muted-foreground">
              Manage and monitor your tokenized real estate portfolio.
            </p>
          </div>
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" /> Add Property
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{properties.length}</div>
              <p className="text-xs text-muted-foreground">
                {properties.filter(p => p.status === "Active").length} active
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Tokenization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(properties.reduce((acc, prop) => acc + prop.tokenized, 0) / properties.length)}%
              </div>
              <Progress 
                value={properties.reduce((acc, prop) => acc + prop.tokenized, 0) / properties.length} 
                className="h-2 mt-2" 
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$17.4M</div>
              <p className="text-xs text-muted-foreground">+8% from last quarter</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Annual Return</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(properties.reduce((acc, prop) => acc + prop.yearlyReturn, 0) / properties.length).toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">+0.8% from last quarter</p>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-500" />
              <CardTitle>AI-Powered Recommendations</CardTitle>
            </div>
            <CardDescription>
              Optimize your portfolio with these data-driven insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiRecommendations.map((item, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Wand className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">{item.property}</p>
                    <p className="text-sm text-muted-foreground">{item.recommendation}</p>
                    <div className="text-xs font-medium text-purple-600 mt-1">
                      Potential Impact: {item.potentialImpact}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto shrink-0">
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Tokenization Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenizationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {tokenizationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} properties`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={performanceData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#9b87f5" />
                    <YAxis yAxisId="right" orientation="right" stroke="#0EA5E9" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="return" name="ROI (%)" fill="#9b87f5" />
                    <Bar yAxisId="right" dataKey="tokenized" name="Tokenized (%)" fill="#0EA5E9" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Property Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Tokenized</TableHead>
                  <TableHead>Investors</TableHead>
                  <TableHead>Annual Return</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {properties.map((property) => (
                  <TableRow key={property.id}>
                    <TableCell className="font-medium">{property.name}</TableCell>
                    <TableCell>{property.location}</TableCell>
                    <TableCell>{property.type}</TableCell>
                    <TableCell>{property.value}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span>{property.tokenized}%</span>
                        <Progress value={property.tokenized} className="h-2 w-[60px]" />
                      </div>
                    </TableCell>
                    <TableCell>{property.investors}</TableCell>
                    <TableCell>{property.yearlyReturn}%</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        property.status === "Active" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {property.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {topPerformers.map((property, index) => (
                  <div key={property.id} className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100">
                      <Building className={`h-6 w-6 text-purple-${600 - index * 100}`} />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{property.name}</p>
                      <div className="flex space-x-4 text-sm text-muted-foreground">
                        <div>{property.location}</div>
                        <div className="text-purple-600 font-medium">{property.yearlyReturn}% return</div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Properties Needing Attention</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {needsAttention.map((property) => (
                  <div key={property.id} className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <Building className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{property.name}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Tokenized: {property.tokenized}%</span>
                        <Progress value={property.tokenized} className="h-2 w-[100px]" />
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Button variant="outline" size="sm">Boost</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
