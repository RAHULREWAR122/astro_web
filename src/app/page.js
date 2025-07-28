import Image from "next/image";
import Navbar from "@/components/Navbar/page";
import Hero from "@/components/Hero/Hero";
import VastuBonousBooks from "@/components/BonousBooks/page";
import AstroInformation from "@/components/AstroInfo/AstroInformation";
import LogicalVastuWorkshop from "@/components/VastuWorkshop/page";
import FQS from "@/components/FQS/page";
import ModulePackegs from "@/components/ModulePackages/page";
import Footer from "@/components/Footer/page";
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
     <Navbar/>
     <Hero/>
     <ModulePackegs/>
     <LogicalVastuWorkshop/>
     <AstroInformation/>
     <VastuBonousBooks/>
     <FQS/>
     <Footer/>
    </div>
  );
}