import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen  w-full mx-auto h-full bg-white">
     <Header />
     <HeroSection />
     <Footer/>
    
    </div>
  );
}
