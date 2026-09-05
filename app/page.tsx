import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CurrentlyBuilding } from '@/components/CurrentlyBuilding';
import { SelectedWork } from '@/components/SelectedWork';
import { About } from '@/components/About';
import { Journey } from '@/components/Journey';
import { Capabilities } from '@/components/Capabilities';
import { FromLinkedIn } from '@/components/FromLinkedIn';
import { Writing } from '@/components/Writing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-editorial-black font-sans selection:bg-editorial-black selection:text-bg">
      <Navbar />
      <main>
        <Hero />
        <CurrentlyBuilding />
        <SelectedWork />
        <About />
        <Journey />
        <Capabilities />
        <FromLinkedIn />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
