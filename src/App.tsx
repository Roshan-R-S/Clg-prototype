import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Layout } from '@/components/organisms';
import Home from '@/pages/Home';
import About from '@/pages/About';
import AboutPunjab from '@/pages/AboutPunjab';
import VisionMission from '@/pages/VisionMission';
import Courses from '@/pages/Courses';
import Admissions from '@/pages/Admissions';
import Placements from '@/pages/Placements';
import Infrastructure from '@/pages/Infrastructure';
import CampusLife from '@/pages/CampusLife';
import VirtualTour from '@/pages/VirtualTour';
import Contact from '@/pages/Contact';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/punjab-association" element={<AboutPunjab />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}