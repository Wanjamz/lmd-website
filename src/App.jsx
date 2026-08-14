import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import ContactPage from './pages/ContactPage';
import MappedPage from './pages/MappedPage';
import './index.css';

/* Old /case-studies/:id links keep working — anything already shared,
   indexed, or sitting in a proposal still lands on the right page. */
function LegacyWorkRedirect() {
  const { id } = useParams();
  return <Navigate to={`/work/${id}`} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<CaseStudiesPage />} />
        <Route path="/work/:id" element={<CaseStudyDetailPage />} />
        <Route path="/mapped" element={<MappedPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Off-menu but still live and linkable */}
        <Route path="/services/:id" element={<ServiceDetailPage />} />

        {/* Legacy paths */}
        <Route path="/case-studies" element={<Navigate to="/work" replace />} />
        <Route path="/case-studies/:id" element={<LegacyWorkRedirect />} />

        {/* Fallback to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
