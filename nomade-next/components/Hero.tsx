'use client';

import React from 'react';
import Button from './Button';

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => void;
  onWhatsAppClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavClick, onWhatsAppClick }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-[70px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(/imgnavalha.jpg)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-4">
        <div className="max-w-[600px]">
          <h1 className="text-8xl md:text-6xl lg:text-5xl font-black text-white tracking-wide mb-6 leading-none">
            NÔMADE
          </h1>
          <div className="w-20 h-1 bg-red-600 mb-8"></div>
          <p className="text-xl md:text-lg text-white/90 leading-relaxed mb-12 max-w-[500px]">
            Mais que uma barbearia, somos artesãos do estilo. Criamos looks únicos
            que refletem sua personalidade, combinando técnicas tradicionais com
            tendências contemporâneas.
          </p>
          <div className="flex gap-6 flex-wrap md:flex-col md:items-start lg:flex-row lg:justify-center lg:text-center">
            <Button onClick={onWhatsAppClick} variant="primary" animated>
              Agendar Horário
            </Button>
            <Button 
              onClick={(e) => {
                if (e) {
                  onNavClick(e, 'servicos');
                }
              }} 
              variant="outline"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
