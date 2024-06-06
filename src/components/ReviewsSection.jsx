import React from 'react';
import '../styles/ReviewsSection.css';

const ReviewsSection = () => {
  return (
    <div className="reviews-section">
      <h2>What Our Clients Say</h2>
      <div className="content">
        <img src="https://source.unsplash.com/random/802x600" alt="Client Reviews" className="fade-in-left" />
        <p>
          "CleverBooks has revolutionized our supply chain management. The automation and demand forecasting features have significantly improved our inventory turnover and customer satisfaction." - Diksha Pande, Co-founder, Samosa Party
        </p>
      </div>
    </div>
  );
}

export default ReviewsSection;
