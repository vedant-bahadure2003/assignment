import React from "react";
import HeroSection from "@/components/mbbsinuzbekistan/colleges/HeroSection";
import Xyz from "@/components/mbbsinuzbekistan/colleges/Xyz";
import YouTube from "@/components/mbbsinuzbekistan/colleges/YouTube";
import HightLightTable from "@/components/mbbsinuzbekistan/colleges/HightLightTable";
import WhyStudy from "@/components/mbbsinuzbekistan/colleges/WhyStudy";
import KeyFacts from "@/components/mbbsinuzbekistan/colleges/KeyFacts";
import FeesStructure from "@/components/mbbsinuzbekistan/colleges/FeesStructure";
import Elegibility from "@/components/mbbsinuzbekistan/colleges/Elegibility";
import Admission from "@/components/mbbsinuzbekistan/colleges/Admission";
import DocumentReq from "@/components/mbbsinuzbekistan/colleges/DocumentReq";
import Hero from "@/components/mbbsinuzbekistan/colleges/Hero";
export default function page() {
  return (
    <>
      <HeroSection />
      <Xyz />
      <YouTube />
      <HightLightTable />
      <WhyStudy />
      <KeyFacts />
      <FeesStructure />
      <Elegibility />
      <Admission />
      <DocumentReq />
      <Hero />
    </>
  );
}
