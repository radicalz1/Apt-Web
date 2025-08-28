import { TierFeature as TierFeatureType } from '../../../types/index.ts';
import { Info } from 'lucide-react';

export const TierFeature = ({ feature }: { feature: TierFeatureType }) => {
  return (
    <li className="flex items-start gap-2">
      <span className="text-brand-500 mt-0.5">✔</span>
      <span>
        {feature.text}
        {feature.tooltip && (
          <div className="feature-tooltip-container">
            <Info size={14} className="feature-tooltip-icon text-slate-400" />
            <span className="feature-tooltip-text">{feature.tooltip}</span>
          </div>
        )}
      </span>
    </li>
  );
};
