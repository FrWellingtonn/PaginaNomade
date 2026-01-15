'use client';

import React from 'react';

interface AgendeSectionProps {
  onWhatsAppClick: () => void;
}

const AgendeSection: React.FC<AgendeSectionProps> = ({ onWhatsAppClick }) => {
  return (
    <div
      id="agende-container"
      className="flex items-center justify-center min-h-[50vh] bg-black/95 p-4"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-7xl md:text-5xl lg:text-4xl font-bold text-gray-50 mb-8 tracking-tight">
          Agende seu Corte
        </h1>
        <button
          className="inline-flex items-center justify-center gap-3 bg-red-700 text-white text-lg font-medium py-6 px-8 border-none rounded-xl cursor-pointer shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(220,38,38,0.4)] w-full md:w-auto"
          onClick={onWhatsAppClick}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          Agendar pelo WhatsApp
        </button>
      </div>
    </div>
  );
};

export default AgendeSection;
