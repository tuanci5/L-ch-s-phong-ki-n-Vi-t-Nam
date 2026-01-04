import React from 'react';

interface DynastySkeletonProps {
  name: string;
  period: string;
}

export const DynastySkeleton: React.FC<DynastySkeletonProps> = ({ name, period }) => {
  return (
    <div className="mb-12 border-b-2 border-stone-200 pb-12 opacity-70">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-l-4 border-stone-300 pl-4">
        <div>
          <h2 className="text-3xl font-bold text-stone-400">{name}</h2>
          <span className="text-stone-400 font-medium text-lg mt-1 inline-block bg-stone-100 px-3 py-1 rounded-md">
            {period}
          </span>
        </div>
        <div className="flex items-center gap-2 text-amber-600 mt-2 md:mt-0 animate-pulse">
           <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
           <span className="text-sm font-medium">Đang nghiên cứu dữ liệu...</span>
        </div>
      </div>

      {/* 3 Columns Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-stone-50 rounded-xl p-6 border border-stone-100 h-64 flex flex-col justify-between relative overflow-hidden">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-stone-200"></div>
              <div className="h-6 w-32 bg-stone-200 rounded"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-stone-200 rounded"></div>
              <div className="h-4 w-5/6 bg-stone-200 rounded"></div>
              <div className="h-4 w-4/6 bg-stone-200 rounded"></div>
              <div className="h-4 w-full bg-stone-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};