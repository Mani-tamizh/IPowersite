import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

// Eagerly importing all components
import HomeOne from './pages/HomeOne';
import About from './pages/About';
import ServiceUs from './pages/Service';
import Portfolio from './pages/Portfolio';
import FAQMain from './pages/FAQ';
import ContactUs from './components/ContactUs/ContactUs';
import BlogParent from './components/Blog/Blog-parent';
import BlogPageOneMain from './pages/BlogPageOne';
import BlogPageTwoMain from './pages/BlogPageTwo';
import BlogPageThreeMain from './pages/BlogPageThree';

const App = () => {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<HomeOne />} />
      <Route path="/home" element={<HomeOne />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServiceUs />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/faq" element={<FAQMain />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blog" element={<BlogParent />} />
      <Route path="/blog/:id" element={<BlogPageOneMain />} />
      <Route path="/blog/post2" element={<BlogPageTwoMain />} />
      <Route path="/blog/post3" element={<BlogPageThreeMain />} />
    </Routes>
  </HashRouter>
  );
};

export default App;
