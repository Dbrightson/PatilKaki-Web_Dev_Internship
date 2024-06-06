import React from 'react';
import '../styles/KeyProblemsSection.css';

const KeyProblemsSection = () => {
  return (
    <div className="key-problems-section">
      <h2>Key Problems Solved</h2>
      <div className="content">
        <img src="https://source.unsplash.com/random/800x600" alt="Key Problems" className="fade-in-left" />
        <p>
          CleverBooks addresses critical issues such as overstocking, under-stocking, and inaccurate demand forecasting. Our advanced algorithms ensure optimal inventory levels and improve overall supply chain efficiency.
        </p>
      </div>
    </div>
  );
}

export default KeyProblemsSection;
