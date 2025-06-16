import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";
import ScriptSection from "./_components/ScriptSection";
import SevenPillarFramework from "./_components/SevenPillarFramework";
import TemplateSection from "./_components/TemplateSection";
import PricingAccess from "./_components/Pricing";
import MemberDashboard from "./_components/UserDashboardShow";
import AIScriptGenerator from "./_components/ScriptGenerator";
import AdditionalInfo from "./_components/AdditionalInfo";
import Footer from "./_components/Footer";

export default function Home() {
  return (
   <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
    <Navbar/>
    <Header/>
    <ScriptSection/>
    <SevenPillarFramework/>
    <TemplateSection/>
    <PricingAccess/>
    <MemberDashboard/>
    <AIScriptGenerator/>
    <AdditionalInfo/>
    <Footer/>
   </div>
  );
}
