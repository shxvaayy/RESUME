import { useEffect } from 'react';
import StarsBackground from "@/components/stars-background";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import CertificationsSection from '@/components/certifications-section';

export default function HomePage() {
  useEffect(() => {
    fetch('/api/notify-visit', { method: 'POST' });
  }, []);
  return (
    <div className="min-h-screen bg-[var(--dark-primary)] text-white font-sans overflow-x-hidden">
      <StarsBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
