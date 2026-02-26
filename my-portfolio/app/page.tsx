import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MissionSection from '@/components/MissionSection'
import WorksSection from '@/components/WorksSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <WorksSection />
      <Footer />
    </main>
  )
}
