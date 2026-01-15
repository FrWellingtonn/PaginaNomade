'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AgendeSection from '../components/AgendeSection';
import SobreSection from '../components/SobreSection';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Home() {
  const [mostrarMais, setMostrarMais] = useState<boolean>(false);
  const [fade, setFade] = useState<boolean>(false);

  // Função para abrir o Whatsapp
  const abrirWhatsApp = () => {
    if (typeof window === 'undefined') return;
    const message = encodeURIComponent('Olá! Gostaria de agendar um corte.');
    window.open(`https://wa.me/5585987035124?text=${message}`, '_blank');
  };

  // Função auxiliar para animação de scroll com duração personalizada
  function scrollToWithOffset(targetY: number, duration: number = 700): void {
    if (typeof window === 'undefined') return;
    
    const startY = window.pageYOffset || window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    function animation(currentTime: number): void {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // EaseInOutQuad para suavidade
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // Fechar menu ao navegar
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    id: string
  ): void => {
    e.preventDefault();
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 70;
      const sectionTop =
        section.getBoundingClientRect().top + (window.pageYOffset || window.scrollY);
      scrollToWithOffset(sectionTop - navbarHeight, 900);
    }
  };

  // Função para mostrar mais com fade-in
  const handleMostrarMais = (): void => {
    setMostrarMais(true);
    setTimeout(() => setFade(true), 50);
  };

  // Função para mostrar menos com fade-out
  const handleMostrarMenos = (): void => {
    setFade(false);
    setTimeout(() => setMostrarMais(false), 500);
  };

  // Serviços principais
  const servicosPrincipais = [
    {
      title: 'CORTE',
      description: 'Corte social, degradê ou na tesoura - lavagem inclusa',
      price: 'R$ 35',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 6l12 12" />
          <path d="M6 18L18 6" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: 'BARBA',
      description:
        'Corte alinhamento dos fios, com definição no contorno e acabamento limpo - vapor de ozônio incluso',
      price: 'R$ 35',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12h18" />
          <path d="M8 8c0-2.5 2-4 4-4s4 1.5 4 4" />
          <path d="M8 16c0 2.5 2 4 4 4s4-1.5 4-4" />
        </svg>
      ),
    },
    {
      title: 'COMBO NÒMADE',
      description: 'Corte & Barba',
      price: 'R$ 65',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.19 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
          <path d="M12.56 6.6A9 9 0 0 0 9 12.25" />
          <path d="M12.56 6.6c-.4 1.65-.6 3.35-.6 5.05 0 .81.05 1.6.13 2.39a9 9 0 0 0 8.44-7.15c-.41-.56-.94-1.02-1.53-1.29z" />
        </svg>
      ),
    },
    {
      title: 'CORTE NA ZERO',
      description: 'Corte na máquina ou navalha no zero',
      price: 'R$ 20',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
  ];

  // Segunda coluna de serviços
  const servicosSegundaColuna = [
    {
      title: 'PEZINHO',
      description:
        'Acabamento nas laterais , nuca e testa para manter o corte alinhado',
      price: 'R$ 20',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 6l12 12" />
          <path d="M6 18L18 6" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: 'CORTE INFANTIL',
      description: '6 a 10 anos',
      price: 'R$ 40',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12h18" />
          <path d="M8 8c0-2.5 2-4 4-4s4 1.5 4 4" />
          <path d="M8 16c0 2.5 2 4 4 4s4-1.5 4-4" />
        </svg>
      ),
    },
    {
      title: 'CORTES LONGOS',
      description:
        'Corte longo com acabamento preciso, ajuste de pontas e definição do formato.',
      price: 'R$ 50',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.19 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
          <path d="M12.56 6.6A9 9 0 0 0 9 12.25" />
          <path d="M12.56 6.6c-.4 1.65-.6 3.35-.6 5.05 0 .81.05 1.6.13 2.39a9 9 0 0 0 8.44-7.15c-.41-.56-.94-1.02-1.53-1.29z" />
        </svg>
      ),
    },
    {
      title: 'LIMPEZA AURICULAR OU NASAL',
      description: 'Remoção dos pelos da orelha ou nariz cera quente',
      price: 'R$ 15',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
  ];

  // Terceira coluna de serviços
  const servicosTerceiraColuna = [
    {
      title: 'SOBRANCELHA',
      description: '',
      price: 'R$ 25',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 6l12 12" />
          <path d="M6 18L18 6" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: 'ESCOVA',
      description: '',
      price: 'R$ 20',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12h18" />
          <path d="M8 8c0-2.5 2-4 4-4s4 1.5 4 4" />
          <path d="M8 16c0 2.5 2 4 4 4s4-1.5 4-4" />
        </svg>
      ),
    },
    {
      title: 'HIDRATAÇÃO',
      description: '',
      price: 'R$ 20',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.19 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
          <path d="M12.56 6.6A9 9 0 0 0 9 12.25" />
          <path d="M12.56 6.6c-.4 1.65-.6 3.35-.6 5.05 0 .81.05 1.6.13 2.39a9 9 0 0 0 8.44-7.15c-.41-.56-.94-1.02-1.53-1.29z" />
        </svg>
      ),
    },
    {
      title: 'SKINCARE',
      description: '',
      price: 'R$ 20',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
  ];

  // Quarta coluna de serviços
  const servicosQuartaColuna = [
    {
      title: 'PENTEADO OU FINALIZAÇÃO',
      description: '',
      price: 'R$ 25',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 6l12 12" />
          <path d="M6 18L18 6" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: 'MÃO DE OBRA',
      description: '',
      price: 'SOB CONSULTA',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12h18" />
          <path d="M8 8c0-2.5 2-4 4-4s4 1.5 4 4" />
          <path d="M8 16c0 2.5 2 4 4 4s4-1.5 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar onNavClick={handleNavClick} />

      <Hero onNavClick={handleNavClick} onWhatsAppClick={abrirWhatsApp} />

      <ServicesSection
        services={servicosPrincipais}
        showHeader={true}
      />

      <ServicesSection
        services={servicosSegundaColuna}
        showHeader={false}
      />

      {!mostrarMais && (
        <div className="text-center my-8">
          <Button onClick={handleMostrarMais} variant="primary" animated>
            Descubra mais
          </Button>
        </div>
      )}

      {mostrarMais && (
        <div
          className={`transition-all duration-500 ${
            fade
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-8 pointer-events-none'
          }`}
        >
          <ServicesSection
            services={servicosTerceiraColuna}
            showHeader={false}
          />

          <ServicesSection
            services={servicosQuartaColuna}
            showHeader={false}
          />

          <div className="text-center my-8">
            <Button onClick={handleMostrarMenos} variant="primary" animated>
              Mostrar menos
            </Button>
          </div>
        </div>
      )}

      <AgendeSection onWhatsAppClick={abrirWhatsApp} />

      <SobreSection />

      <Footer />
    </main>
  );
}
