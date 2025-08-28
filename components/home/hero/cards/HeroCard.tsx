import React from 'react';

interface PositionConfig {
  gridPosition: { row: string; col: string; };
  rotation: string;
}

interface HeroCardProps extends PositionConfig {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  isInactive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const HeroCard = (props: HeroCardProps) => {
  const wrapperClasses = `hero-card-wrapper ${props.isActive ? 'is-active' : ''} ${props.isInactive ? 'is-inactive' : ''}`;

  return (
    <div
      style={{
        gridRow: props.gridPosition.row,
        gridColumn: props.gridPosition.col,
      }}
      className={wrapperClasses}
      onClick={props.onClick}
    >
      <div className="hero-card-rotator" style={{ transform: props.rotation }}>
        <div className={`hero-card flex flex-col h-full is-stat`}>
          <div className="flex items-start justify-between gap-2">
            <h3 className="flex-grow font-semibold text-sm text-slate-800 dark:text-slate-100">{props.title}</h3>
            <div className="h-8 w-8 grid place-items-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 flex-shrink-0">
              {props.icon}
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-center items-center text-center">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};