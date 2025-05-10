import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './pages/Hero';
import HowItWorks from './pages/HowItWorks';
import WhyChooseUs from './pages/WhyChooseUs';
import Testimonials from './pages/Testimonials';
import ContactForm from './pages/ContactForm';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import UploadLicensePage from './pages/UploadLicenseStep';
import GetValuation from './pages/GetValuation';
import GetPaid from './pages/GetPaid';

const App = () => {
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <Routes>
          {/* Only this page is routed */}
          <Route path="/upload-license" element={<UploadLicensePage/>} />
          <Route path="/get-valuation" element={<GetValuation />} />
          <Route path="/get-paid" element={<GetPaid />} />


          {/* Everything else still shows the default homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ChatWidget />
                <HowItWorks />
                <WhyChooseUs />
                <Testimonials />
                <ContactForm />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
