import Navbar from "@/components/Navbar";
import "../globals.css";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Home/Testimonials";
import Galary from "@/components/Home/Galary";
import ContactUs from "@/components/Home/Contactus";
import Univercity from "@/components/Home/Univercity";

export const metadata = {
  title: "MBBS in Uzbekistan",
  description: "Uzbekistan Medi",
};

export default function MbbsinUzbekistanLayout({ children }) {
  return (
    <>
        
        {children}
        <Univercity/>
        <ContactUs/>
        <Galary/>
        <Testimonials/>
      
    </>

    

      
  );
}
