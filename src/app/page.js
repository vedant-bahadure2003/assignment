import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Galary from "@/components/Galary";
import Herosection from "@/components/Herosection";
import HorizontalBox from "@/components/HorizontalBox";
import Navbar from "@/components/Navbar";
import Partner from "@/components/Partner";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Univercity from "@/components/Univercity";
import Whymedi from "@/components/Whymedi";
import WhyStudy from "@/components/WhyStudy";


export default function Home() {
  return (
   <>
   <Navbar/>
   <Herosection/>
   <WhyStudy/>
   <Univercity/>
   <Whymedi/>
   <Services/>
   <Partner/>
   <Testimonials/>
   <Blog/>
   <Galary/>
   <Faq/>
   <HorizontalBox/>
   <Footer/>
  
   </>
  );
}
