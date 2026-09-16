import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OfflineIndicator } from './components/OfflineIndicator';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { IOSInstallGuide } from './components/IOSInstallGuide';
import { ScrollToTop } from './components/ScrollToTop';

// Dedicated 6 Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<string>('');
  const [iosGuideOpen, setIosGuideOpen] = useState(false);

  const handleOpenOrder = (medicineName?: string) => {
    setSelectedMedicine(medicineName || '');
    setOrderModalOpen(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100 transition-colors selection:bg-[#0A8F6A] selection:text-white">
          {/* Offline PWA banner */}
          <OfflineIndicator />

          {/* Sticky Navigation Header */}
          <Header onOpenOrderModal={() => handleOpenOrder()} />

          {/* Main Content Router */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home onOpenOrderModal={handleOpenOrder} />} />
              <Route path="/about" element={<About onOpenOrderModal={() => handleOpenOrder()} />} />
              <Route path="/services" element={<Services onOpenOrderModal={handleOpenOrder} />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact onOpenOrderModal={() => handleOpenOrder()} />} />
              <Route path="/login" element={<Login onOpenOrderModal={() => handleOpenOrder()} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Global Footer with Mandatory WMIT Tracker & Popup Trigger */}
          <Footer />

          {/* Floating Actions (WhatsApp, Call, BackToTop, Mobile Sticky CTA Bar) */}
          <FloatingActions onOpenOrderModal={() => handleOpenOrder()} />

          {/* WhatsApp Medicine Order Modal */}
          <WhatsAppOrderModal
            isOpen={orderModalOpen}
            onClose={() => setOrderModalOpen(false)}
            initialMedicineName={selectedMedicine}
          />

          {/* iOS Safari Add to Home Screen Instructions */}
          <IOSInstallGuide
            isOpen={iosGuideOpen}
            onClose={() => setIosGuideOpen(false)}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}
