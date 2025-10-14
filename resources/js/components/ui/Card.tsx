import React from 'react';

type CardProps = {
  children: React.ReactNode;
}
export function Card({children}: CardProps) {
  
  return (
    <div className={'bg-gray-900/50 border border-gray-700/60 rounded-xl p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-gray-500/80 hover:shadow-gray-500/20'}>
        {children}
      </div>
  );
}