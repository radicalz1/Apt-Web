import React from 'react';

export const CellularAnimation = () => {
  return (
    <div className="visual-wrapper cellular-animation">
      <div className="cell-bg">
        <div className="mitochondrion">
          <div className="particle p1"></div>
          <div className="particle p2"></div>
          <div className="particle p3"></div>
          <div className="particle p4"></div>
        </div>
        <div className="nucleus"></div>
      </div>
    </div>
  );
};
