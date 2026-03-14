import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AlertBar from '@/components/AlertBar'
import CapabilitiesMatrix from '@/components/CapabilitiesMatrix'
import ProcessArchitecture from '@/components/ProcessArchitecture'
import TeamSection from '@/components/TeamSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AlertBar />
      <CapabilitiesMatrix />
      <ProcessArchitecture />
      <TeamSection />
      <Footer />
    </main>
  );
}
