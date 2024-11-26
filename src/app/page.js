import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Form from "@/Components/Form";
import Footer from "@/Components/Footer";
import End from "@/Components/End";
import Choose from "@/Components/Choose";
import Industry from "@/Components/Industry";
import Solution from "@/Components/Solution";
import Header from "@/Components/Header";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Header/>
      <Solution/>
      <Industry/>
      <Choose/>
      <End/>
      <Form/>
      <Footer/>
    </div>
  );
}
