import PageTransition from '../components/ui/PageTransition';
import HeroSection from '../components/sections/HeroSection';
import TrustedLogos from '../components/sections/TrustedLogos';
import StatsBar from '../components/sections/StatsBar';
import OperationsSolutions from '../components/sections/OperationsSolutions';
import CampaignResults from '../components/sections/CampaignResults';
import AutomationSystem from '../components/sections/AutomationSystem';
import BuiltForHotels from '../components/sections/BuiltForHotels';
import DoneForYou from '../components/sections/DoneForYou';
import SecuritySummary from '../components/sections/SecuritySummary';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsBar />
      <OperationsSolutions />
      <CampaignResults />
      <AutomationSystem />
      <BuiltForHotels />
      <DoneForYou />
      <TrustedLogos />
      <SecuritySummary />
      <FinalCTA />
    </PageTransition>
  )
}