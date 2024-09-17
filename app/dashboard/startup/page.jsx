"use client";

import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bell, MessageSquare, Users, DollarSign, TrendingUp, PieChart, Settings, HelpCircle, LogOut, Menu, X, ChevronRight, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const investorData = [
  { month: 'Jan', seekingInvestors: 10, securedInvestors: 2 },
  { month: 'Feb', seekingInvestors: 15, securedInvestors: 5 },
  { month: 'Mar', seekingInvestors: 20, securedInvestors: 8 },
  { month: 'Apr', seekingInvestors: 25, securedInvestors: 12 },
  { month: 'May', seekingInvestors: 30, securedInvestors: 18 },
  { month: 'Jun', seekingInvestors: 35, securedInvestors: 22 },
];

const feedbackData = [
  { month: 'Jan', positive: 70, negative: 30 },
  { month: 'Feb', positive: 65, negative: 35 },
  { month: 'Mar', positive: 80, negative: 20 },
  { month: 'Apr', positive: 75, negative: 25 },
  { month: 'May', positive: 85, negative: 15 },
  { month: 'Jun', positive: 90, negative: 10 },
];

const revenueData = [
  { month: 'Jan', revenue: 10000 },
  { month: 'Feb', revenue: 15000 },
  { month: 'Mar', revenue: 20000 },
  { month: 'Apr', revenue: 25000 },
  { month: 'May', revenue: 30000 },
  { month: 'Jun', revenue: 35000 },
];

const Dashboard = () => {
  const [roi, setRoi] = useState('15%');
  const [chatMessage, setChatMessage] = useState('');
  const [selectedMetric, setSelectedMetric] = useState('monthly');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className={`bg-blue-800 text-white w-64 min-h-screen p-4 transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Startup Dashboard</h2>
          <button onClick={toggleSidebar} className="text-white p-2 rounded hover:bg-blue-700 transition-colors duration-200">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700 transition-colors duration-200">
                <Activity className="h-5 w-5" />
                <span>Stats</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700 transition-colors duration-200">
                <MessageSquare className="h-5 w-5" />
                <span>Chat</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700 transition-colors duration-200">
                <TrendingUp className="h-5 w-5" />
                <span>Updates</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700 transition-colors duration-200">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={toggleSidebar} className="text-blue-800 p-2 rounded hover:bg-gray-200 transition-colors duration-200">
              <Menu className="h-6 w-6" />
            </button>
            <Select onValueChange={(value) => setSelectedMetric(value)}>
              <SelectTrigger className="w-[180px] bg-white text-blue-800">
                <SelectValue placeholder="Select Metric" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="bg-white text-blue-800 relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">3</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h3 className="font-semibold">Notifications</h3>
                  <ul className="space-y-2">
                    <li className="p-2 bg-gray-100 rounded">New investor request</li>
                    <li className="p-2 bg-gray-100 rounded">Meeting scheduled for tomorrow</li>
                    <li className="p-2 bg-gray-100 rounded">Revenue milestone achieved!</li>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="flex-1 p-8 overflow-auto">
          <div className="grid grid-cols-12 gap-6">
            <Card className="col-span-12 md:col-span-4">
              <CardHeader>
                <CardTitle>Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={investorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="seekingInvestors" fill="#2563eb" name="Seeking" />
                    <Bar dataKey="securedInvestors" fill="#22c55e" name="Secured" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-4">
              <CardHeader>
                <CardTitle>Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={feedbackData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="positive" stroke="#22c55e" name="Positive" />
                    <Line type="monotone" dataKey="negative" stroke="#ef4444" name="Negative" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-4">
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#2563eb" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-4">
              <CardHeader>
                <CardTitle>Update ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Input
                    type="text"
                    value={roi}
                    onChange={(e) => setRoi(e.target.value)}
                    placeholder="Enter ROI"
                    className="flex-grow"
                  />
                  <Button className="bg-green-500 hover:bg-green-600 text-white transition-colors duration-200">
                    Update
                  </Button>
                </div>
                <p className="mt-4 text-lg font-semibold">Current ROI: {roi}</p>
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-4">
              <CardHeader>
                <CardTitle>Funding Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={66} className="w-full" />
                <p className="mt-2 text-center">$2M / $3M Goal</p>
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-4">
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Customer Acquisition Cost</span>
                    <span className="font-semibold">$50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Lifetime Value</span>
                    <span className="font-semibold">$500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Churn Rate</span>
                    <span className="font-semibold">2.5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-12">
              <CardHeader>
                <CardTitle>Investor Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-40 bg-gray-100 rounded-md p-4 overflow-y-auto">
                    {/* Chat messages would go here */}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-grow"
                    />
                    <Button className="bg-blue-800 hover:bg-blue-900 text-white transition-colors duration-200">
                      Send
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
