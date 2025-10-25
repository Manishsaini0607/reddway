import TestimonialCarousel from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowWorks from "@/components/HowWork";
import Process from "@/components/Process";
import Rating from "@/components/Rating";
import Video from "@/components/Video";
import Services from "@/components/Services";
import Templates from "@/components/Templates";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen  w-full mx-auto h-full bg-white">
     <Header />
     <HeroSection />
     <Rating/>
     <Video/>
     <Process/>
     <HowWorks/>
     <TestimonialCarousel />
     <Services />
     <Templates />
     <FAQSection/>
     <Footer/>
    
    </div>
  );
}
