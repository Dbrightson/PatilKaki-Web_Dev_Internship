import React from 'react';
import { motion } from 'framer-motion';
import '../styles/KeyMetrics.css';
import keyMetricsImage from '../assets/key_metrics_image.svg'; // Importing relevant image

const KeyMetricsSection = () => {
  return (
    <div className="key-metrics-section">
      <h2 className="key-metrics-heading">Why Choose CleverBooks</h2>
      <div className="content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="key-metrics-text">
            Our metrics speak for themselves. With CleverBooks, you can achieve 95% demand fulfillment and reduce daily stock-outs to less than 3%.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={keyMetricsImage} alt="Key Metrics" className="key-metrics-image" />
        </motion.div>
      </div>
    </div>
  );
}

export default KeyMetricsSection;
