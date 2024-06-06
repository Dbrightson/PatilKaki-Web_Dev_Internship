import React from 'react';
import '../styles/KeyMetrics.css';
import keyMetricsImage from '../assets/key_metrics_image.svg'; // Importing relevant image
import Fade from 'react-reveal/Fade'; // Importing fade-in animation library

const KeyMetricsSection = () => {
  return (
    <div className="key-metrics-section">
      <h2 className="key-metrics-heading">Why Choose CleverBooks</h2>
      <div className="content">
        <Fade left>
          <p className="key-metrics-text">
            Our metrics speak for themselves. With CleverBooks, you can achieve 95% demand fulfillment and reduce daily stock-outs to less than 3%.
          </p>
        </Fade>
        <Fade right>
          <img src={keyMetricsImage} alt="Key Metrics" className="key-metrics-image" />
        </Fade>
      </div>
    </div>
  );
}

export default KeyMetricsSection;
