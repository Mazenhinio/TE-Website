import PageTransition from '../components/ui/PageTransition';
import HeroSection from '../components/sections/HeroSection';
import ValueProp from '../components/sections/ValueProp';
import BuiltForHotels from '../components/sections/BuiltForHotels';
import TrustedLogos from '../components/sections/TrustedLogos';
import StatsBar from '../components/sections/StatsBar';
import AutomationSystem from '../components/sections/AutomationSystem';
import DoneForYou from '../components/sections/DoneForYou';
import CampaignResults from '../components/sections/CampaignResults';
import IntegrationsSection from '../components/sections/IntegrationsSection';
import SecuritySummary from '../components/sections/SecuritySummary';
import FinalCTA from '../components/sections/FinalCTA';
import OperationsSolutions from '../components/sections/OperationsSolutions';

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <TrustedLogos />      
      <ValueProp />
      <BuiltForHotels />
      <StatsBar />
      {/* 
        OperationsSolutions fits between StatsBar and optionally others, 
        or it can be placed after AutomationSystem. We'll leave it here as it 
        holds the Unified Inbox and other module definitions.
       */}
      <OperationsSolutions />

      <AutomationSystem />
      <DoneForYou />
      <CampaignResults />
      <IntegrationsSection />
      <SecuritySummary />
      <FinalCTA />
    </PageTransition>
  )
}