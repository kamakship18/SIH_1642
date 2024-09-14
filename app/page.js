import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Slide from "@/components/Slide";
import Counter from "@/components/Counter";
import Info from "@/components/Info";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slide />
      <Header />
      <Main />
      <Counter />
      <Info />
      <Footer />
    </div>
  );
}
