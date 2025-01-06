import Accreditation from "@/components/mbbsinuzbekistan/Accreditation";
import AdmissionProcess from "@/components/mbbsinuzbekistan/AdmissionProcess";
import CareerScope from "@/components/mbbsinuzbekistan/CareerScope";
import CourseOffered from "@/components/mbbsinuzbekistan/CourseOffered";
import Document from "@/components/mbbsinuzbekistan/Document";
import Eligibility from "@/components/mbbsinuzbekistan/Eligibility";
import FeesStructure from "@/components/mbbsinuzbekistan/FeesStructure";
import Herosection from "@/components/mbbsinuzbekistan/Herosection";
import Highlight from "@/components/mbbsinuzbekistan/Highlight";
import HostelFacility from "@/components/mbbsinuzbekistan/HostelFacility";
import Intake from "@/components/mbbsinuzbekistan/Intake";
import PassingPercentage from "@/components/mbbsinuzbekistan/PassingPercentage";
import Planningform from "@/components/mbbsinuzbekistan/Planningform";
import Syllabus from "@/components/mbbsinuzbekistan/Syllabus";
import UniversitySection from "@/components/mbbsinuzbekistan/UniversitySection";
import UzbekistanVsIndiaMbbs from "@/components/mbbsinuzbekistan/UzbekistanVsIndiaMbbs";
import Whystudy from "@/components/mbbsinuzbekistan/Whystudy";
import YtFrame from "@/components/mbbsinuzbekistan/YtFrame";

export default function Page() {
    return (
        <>
        <Herosection/>
        <Highlight/>
        <Planningform/>
        <YtFrame/>
        <Whystudy/>
        <FeesStructure/>
        <Eligibility/>
        <AdmissionProcess/>
        <Document/>
        <Syllabus/>
        <UniversitySection/>
        <Intake/>
        <Accreditation/>
        <UzbekistanVsIndiaMbbs/>
        <CourseOffered/>
        <CareerScope/>
        <PassingPercentage/>
        <HostelFacility/>
        </>
    );
}