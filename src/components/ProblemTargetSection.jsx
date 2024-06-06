import React from 'react';
import '../styles/ProblemTargetSection.css';

const ProblemTargetSection = () => {
  return (
    <div className="problem-target-section">
      <h2>Our Features</h2>
      <div className="content">
        <p>
          Automate your inventory management processes with real-time tracking and AI-driven insights. Predict demand accurately and ensure optimal stock levels with our advanced algorithms.
        </p>
        <img src="https://source.unsplash.com/random/803x600" alt="Features" className="fade-in-right" />
      </div>
    </div>
  );
}

export default ProblemTargetSection;
