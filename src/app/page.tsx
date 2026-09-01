import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import Machinery from "@/components/Machinery";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <Sectors />
      <Machinery />
      <Clients />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
