
import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { DataUploader } from '@/components/DataUploader';
import { PublicGallery } from '@/components/PublicGallery';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'upload':
        return <DataUploader />;
      case 'gallery':
        return <PublicGallery />;
      case 'features':
        return <FeaturesSection />;
      default:
        return <HeroSection onGetStarted={() => setActiveSection('upload')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="relative">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;
