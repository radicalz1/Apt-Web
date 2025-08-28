import React from 'react';

export const MoleculeExplorer = () => {
  return (
    <div className="visual-wrapper molecule-explorer">
      <div className="molecule">
        <div className="atom-core"></div>
        <div className="bond bond-1"><div className="atom-outer"></div></div>
        <div className="bond bond-2"><div className="atom-outer"></div></div>
        <div className="bond bond-3"><div className="atom-outer"></div></div>
        <div className="bond bond-4"><div className="atom-outer"></div></div>
        <div className="bond bond-5"><div className="atom-outer"></div></div>
        <div className="bond bond-6"><div className="atom-outer"></div></div>
      </div>
    </div>
  );
};
