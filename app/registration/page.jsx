import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User2, Lightbulb, PiggyBank } from 'lucide-react';

const AyurvedaStartupForm = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <Card className="w-[450px] bg-white shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
        <CardHeader className="pb-2 relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 left-0 w-16 h-16 bg-indigo-100 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <CardTitle className="text-center text-[#2563EB] text-2xl font-semibold relative z-10">
            AYUSH Registartion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-6 text-sm text-center text-indigo-800">
              Select your category to continue:
            </div>
            <RadioGroup defaultValue="government" className="space-y-4">
              {[
                { value: "government", label: "Government Official", desc: "Engage with innovative solutions", icon: User2 },
                { value: "startup", label: "Startup", desc: "Innovate and grow with Ayurveda", icon: Lightbulb },
                { value: "investor", label: "Investor", desc: "Invest in the future of wellness", icon: PiggyBank }
              ].map((item) => (
                <div key={item.value} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-3 border-2 border-[#2563EB] rounded-lg p-4 bg-white transition-all duration-300 group-hover:shadow-md">
                    <RadioGroupItem value={item.value} id={item.value} className="text-[#2563EB]" />
                    <Label htmlFor={item.value} className="flex items-center cursor-pointer flex-1">
                      <item.icon className="w-6 h-6 mr-3 text-[#2563EB] transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <div className="font-medium text-base text-indigo-900">{item.label}</div>
                        <div className="text-sm text-indigo-700">{item.desc}</div>
                      </div>
                    </Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
            <Button className="w-full mt-8 bg-[#2563EB] hover:bg-blue-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AyurvedaStartupForm;