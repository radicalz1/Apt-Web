import React from 'react';

export const CellularAnimationNeural = () => {
  return (
    <div className="visual-wrapper neural-animation">
      <svg className="neural-svg" viewBox="0 0 400 400">
        <path id="neuron-path-1" d="M 50 200 C 150 100, 250 300, 350 200" stroke="none" fill="none" />
        <path id="neuron-path-2" d="M 200 50 C 100 150, 300 250, 200 350" stroke="none" fill="none" />
      </svg>
      <div className="neuron n1"></div>
      <div className="neuron n2"></div>
      <div className="neuron n3"></div>
      <div className="neuron n4"></div>
      <div className="signal s1"></div>
      <div className="signal s2"></div>
    </div>
  );
};