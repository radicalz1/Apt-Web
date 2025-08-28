import React from 'react';
import { Beaker } from 'lucide-react';

export const LabRender = () => {
  return (
    <div className="visual-wrapper lab-render">
      <div className="lab-bg"></div>
      <div className="lab-shelf"></div>
      <div className="lab-beaker beaker-1">
        <Beaker size={48} className="text-brand-400" />
        <div className="liquid"></div>
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </div>
      <div className="lab-beaker beaker-2">
         <Beaker size={32} className="text-accent-400" />
      </div>
    </div>
  );
};
