
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";
import ScriptSection from "./_components/ScriptSection";
import SevenPillarFramework from "./_components/SevenPillarFramework";
import TemplateSection from "./_components/TemplateSection";
import PricingAccess from "./_components/Pricing";
import MemberDashboard from "./_components/UserDashboardShow";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Header/>
    <ScriptSection/>
    <SevenPillarFramework/>
    <TemplateSection/>
    <PricingAccess/>
    <MemberDashboard/>
  
   </div>
  );
}
