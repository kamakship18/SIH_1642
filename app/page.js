"use client";

import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Info from "@/components/Info";

import Footer from "@/components/Footer";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Info />

      <Footer />
    </div>
  );
}
