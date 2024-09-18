import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LockKeyhole, UserCircle2 } from 'lucide-react';

const CreativeGovernmentPortal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center text-green-700">
            Government Portal
          </CardTitle>
          <p className="text-center text-gray-500">Please enter your credentials to continue</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="government-id" className="text-sm font-medium text-gray-700">
              Government ID
            </Label>
            <div className="relative">
              <UserCircle2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="government-id"
                placeholder="Enter your Government ID"
                className="pl-10 border-green-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </Label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your Password"
                className="pl-10 border-green-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700 transition-colors duration-300">
            Login
          </Button>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-gray-600">
            Not part of the government?{' '}
            <a href="#" className="text-green-600 hover:underline">
              Join as a Startup or Investor
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreativeGovernmentPortal;