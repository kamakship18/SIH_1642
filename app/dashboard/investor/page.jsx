"use client";

import React, { useState } from 'react';
import { Bell, X, Menu, Settings, BarChart2, MessageCircle, RefreshCw } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import StartupCard from '@/components/ui/startupCard';

const SideNavItem = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-2 w-full p-2 rounded-lg transition-colors duration-200 hover:bg-blue-100 text-blue-800"
  >
    <Icon size={20} />
    <span>{label}</span>
  </button>
);

const StartupCommunityApp = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);

  const startups = [
    {
      id: 1,
      name: "TechInnovate",
      founder: "Jane Doe",
      description: "Revolutionizing AI for small businesses with cutting-edge machine learning algorithms and intuitive interfaces.",
      fullDescription: "TechInnovate is at the forefront of bringing advanced AI solutions to small and medium-sized enterprises, democratizing access to cutting-edge technology. Our platform leverages state-of-the-art machine learning algorithms to provide predictive analytics, process automation, and customer insights that were previously only available to large corporations.",
      category: "AI",
      likes: 150,
      feedbacks: 23,
      imageUrl: "/demo.jpg",
      rating: 4.5,
      roi: 22,
      profitMargin: 15,
      marketShare: 3,
      yoyGrowth: 85,
      competitiveAdvantage: "Our proprietary AI algorithms are 30% more efficient than the industry standard, allowing us to offer superior performance at a lower cost. We also have strategic partnerships with leading cloud providers, enabling seamless scalability for our clients.",
      futureProjections: "We project to capture 10% of the SME AI market within the next 3 years, with an estimated annual recurring revenue of $50 million by 2026.",
      marketOpportunity: "The global AI market for SMEs is expected to reach $190 billion by 2025, growing at a CAGR of 35%. Our solution is uniquely positioned to capture a significant portion of this rapidly expanding market.",
      revenueData: [
        { year: '2020', revenue: 1000000 },
        { year: '2021', revenue: 1500000 },
        { year: '2022', revenue: 2200000 },
        { year: '2023', revenue: 3000000 },
      ],
      reviews: [
        { comment: "TechInnovate's AI solution has transformed our business processes. The ROI has been phenomenal!", rating: 5, investor: "John Smith, Angel Investor" },
        { comment: "Impressive team and solid execution. They're definitely onto something big.", rating: 4, investor: "Sarah Johnson, VC Partner" },
        { comment: "Innovative approach to AI for SMEs. Excited to see their growth in the coming years.", rating: 5, investor: "David Lee, Tech Entrepreneur" },
        { comment: "Great product, but they need to focus more on customer acquisition to really scale.", rating: 3, investor: "Emily Chen, Growth Strategist" },
        { comment: "The potential market size is huge. If they execute well, this could be a unicorn in the making.", rating: 4, investor: "Michael Brown, Seed Fund Manager" },
      ],
    },
    // Add more startup objects here
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Side Navigation */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSideNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-blue-800">Menu</h2>
          <Button variant="ghost" size="icon" onClick={toggleSideNav}>
            <X size={24} />
          </Button>
        </div>
        <nav className="p-4 space-y-2">
          <SideNavItem icon={Settings} label="Settings" onClick={() => console.log('Settings clicked')} />
          <SideNavItem icon={BarChart2} label="Stats" onClick={() => console.log('Stats clicked')} />
          <SideNavItem icon={MessageCircle} label="Chat" onClick={() => console.log('Chat clicked')} />
          <SideNavItem icon={RefreshCw} label="Updates" onClick={() => console.log('Updates clicked')} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Button variant="ghost" size="icon" onClick={toggleSideNav} className="mr-2">
                  <Menu size={24} />
                </Button>
                <h1 className="text-2xl font-bold text-blue-800">Startup Community</h1>
              </div>
              <div className="flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell size={24} />
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">3</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>New investor joined</DropdownMenuItem>
                    <DropdownMenuItem>Funding round closing soon</DropdownMenuItem>
                    <DropdownMenuItem>New startup added</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <div className="max-w-7xl mx-auto space-y-8">
            {startups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StartupCommunityApp;