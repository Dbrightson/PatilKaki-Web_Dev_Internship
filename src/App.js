import React from 'react';
import HeroSection from './components/HeroSection';
import KeyProblemsSection from './components/KeyProblemsSection';
import KeyMetricsSection from './components/KeyMetricsSection';
import ReviewsSection from './components/ReviewsSection';
import ProblemTargetSection from './components/ProblemTargetSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <KeyProblemsSection />
      <KeyMetricsSection />
      <ReviewsSection />
      <ProblemTargetSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

export default App;
