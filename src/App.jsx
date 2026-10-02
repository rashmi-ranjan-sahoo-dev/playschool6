import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ClassesSection from './components/ClassesSection';
import TeachersSection from './components/TeachersSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TourBookingModal from './components/TourBookingModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleOpenTourModal = (programName = '') => {
    setSelectedProgram(programName);
    setIsTourModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] font-sans-clean text-slate-800 antialiased selection:bg-[#9C29B2] selection:text-white">
      {/* 1. Purple Top Bar & Scalloped Navbar */}
      <Navbar onOpenTourModal={handleOpenTourModal} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section with Authentic Indian Playschool Visuals */}
        <Hero onOpenTourModal={handleOpenTourModal} />

        {/* 3. Reference Service Section with Indian Playschool Content & Visuals */}
        <ServicesSection onOpenTourModal={handleOpenTourModal} />

        {/* 4. Reference About Us Section with Organic Blue Blob Slider & Indian Visuals */}
        <AboutSection onOpenTourModal={handleOpenTourModal} />

        {/* 5. Reference Classes Section with Indian Playschool Visuals */}
        <ClassesSection onOpenTourModal={handleOpenTourModal} />

        {/* 6. Reference Teachers Section with Dedicated Indian Educators */}
        <TeachersSection onOpenTourModal={handleOpenTourModal} />

        {/* 7. Simple & Authentic Indian Parent Testimonials Section */}
        <TestimonialsSection onOpenTourModal={handleOpenTourModal} />

        {/* 8. Reference Contact / Make Appointment Section */}
        <ContactSection onOpenTourModal={handleOpenTourModal} />
      </main>

      {/* 4. Footer */}
      <Footer onOpenTourModal={handleOpenTourModal} />

      {/* Floating Interactive WhatsApp Desk */}
      <FloatingWhatsApp />

      {/* Interactive Tour Booking Modal */}
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        initialProgram={selectedProgram}
      />
    </div>
  );
}
