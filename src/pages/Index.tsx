
import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { TrendsBentoGrid } from '@/components/TrendsBentoGrid';
import { Navigation } from '@/components/Navigation';
import { AIChatbot } from '@/components/AIChatbot';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'trends':
        return <TrendsBentoGrid />;
      case 'chatbot':
        return <AIChatbot />;
      default:
        return <HeroSection onExplore={() => setActiveSection('trends')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="relative">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;
