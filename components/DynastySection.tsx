import React from 'react';
import { STATIC_HISTORY_DATA } from '../data/staticDatabase';
import { DynastyRow } from './DynastyRow';
import { DynastySkeleton } from './DynastySkeleton';

interface DynastySectionProps {
  name: string;
  period: string;
  isLast: boolean;
}

export const DynastySection: React.FC<DynastySectionProps> = ({ name, period, isLast }) => {
  // Access data directly from the static database
  const data = STATIC_HISTORY_DATA[name];

  if (!data) {
    // Fallback if key doesn't exist (though it should based on constants)
    return (
      <div className="mb-12 pb-12 border-b-2 border-stone-200">
         <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-stone-800 mb-2">{name}</h3>
            <p className="text-red-600">Dữ liệu đang được cập nhật...</p>
         </div>
      </div>
    );
  }

  // Render immediately, no loading state needed
  return <DynastyRow dynasty={data} isLast={isLast} />;
};