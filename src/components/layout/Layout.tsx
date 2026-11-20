import React, { useState } from 'react';
import { Navbar } from '../navigation/Navbar';
import { Footer } from './Footer';
import { SearchModal } from '../navigation/SearchModal';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-earth-cream text-earth-soil selection:bg-earth-terracotta selection:text-white">
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};
