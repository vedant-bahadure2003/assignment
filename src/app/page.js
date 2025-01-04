import Blog from "@/components/Home/Blog";
import Contactus from "@/components/Home/Contactus";
import Faq from "@/components/Home/Faq";
import Footer from "@/components/Footer";
import Galary from "@/components/Home/Galary";
import Herosection from "@/components/Home/Herosection";
import Navbar from "@/components/Navbar";
import Partner from "@/components/Home/Partner";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import Univercity from "@/components/Home/Univercity";
import Whymedi from "@/components/Home/Whymedi";
import WhyStudy from "@/components/Home/WhyStudy";


export default function Home() {
  return (
   <>
  
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
   

   <Contactus/>
  
   
  
   </>
  );
}
