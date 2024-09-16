"use client";

import { useRouter } from 'next/navigation';
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import ClientSideBarChart from "./ClientSideBarChart";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import Link from 'next/link';

const data = [
  { name: "Jan", value: 1000 },
  { name: "Feb", value: 5000 },
  { name: "Mar", value: 3000 },
  { name: "Apr", value: 6000 },
  { name: "May", value: 2000 },
  { name: "Jun", value: 5000 },
  { name: "Jul", value: 3300 },
  { name: "Aug", value: 3100 },
  { name: "Sep", value: 5000 },
  { name: "Oct", value: 2000 },
  { name: "Nov", value: 1800 },
  { name: "Dec", value: 3000 },
];

const StatCard = ({ title, value, icon, change }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{change}</p>
    </CardContent>
  </Card>
);

const RecentSale = ({ name, email, amount }) => (
  <div className="flex items-center">
    <div className="space-y-1">
      <p className="text-sm font-medium leading-none">{name}</p>
      <p className="text-sm text-muted-foreground">{email}</p>
    </div>
    <div className="ml-auto font-medium">+${amount}</div>
  </div>
);

const Dashboard = () => {
  const router = useRouter();
  
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-4 w-4" />
          <span>Jan 20, 2023 - Feb 09, 2023</span>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-primary text-primary-foreground px-3 py-2 rounded">
                Log Out
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right">Name</label>
                  <input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3 input"
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="username" className="text-right">Username</label>
                  <input
                    id="username"
                    value="@peduarte"
                    className="col-span-3 input"
                  />
                </div>
              </div>

              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>

              <div className="mt-6 border-t pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Do you want to log out?
                </p>
                <div className="flex justify-between">
                  <Button variant="destructive">Log Out</Button>
                  <Button variant="outline">Home Page</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Total Revenue Generated"
          value="$45,231.89"
          icon="$"
          change="+20.1% from last month"
        />
        <StatCard
          title="Startups"
          value="+2350"
          icon="👥"
          change="+180.1% from last month"
        />
        <StatCard
          title="Sales"
          value="+12,234"
          icon="💳"
          change="+19% from last month"
        />
        <StatCard
          title="New Reviews"
          value="+573"
          icon="📈"
          change="+201 since last hour"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ClientSideBarChart data={data} />
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Reviews</CardTitle>

            <Link href="/dashboard/govt_officials/review" passHref>
            <Button
              className="bg-primary text-primary-foreground px-3 py-2 rounded"
            >
              View All
            </Button>
            </Link>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                You have 265 new requests for reviews
              </p>
              <div className="space-y-8 mt-4">
                <RecentSale
                  name="Olivia Martin"
                  email="olivia.martin@email.com"
                  amount="1,999.00"
                />
                <RecentSale
                  name="Jackson Lee"
                  email="jackson.lee@email.com"
                  amount="39.00"
                />
                <RecentSale
                  name="Isabella Nguyen"
                  email="isabella.nguyen@email.com"
                  amount="299.00"
                />
                <RecentSale
                  name="William Kim"
                  email="will@email.com"
                  amount="99.00"
                />
                <RecentSale
                  name="Sofia Davis"
                  email="sofia.davis@email.com"
                  amount="39.00"
                />
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
