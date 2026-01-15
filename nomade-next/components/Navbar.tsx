'use client';

import React, { useState } from 'react';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [menuAberto, setMenuAberto] = useState<boolean>(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMenuAberto(false);
    onNavClick(e, id);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-[1000] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 md:px-4 h-[70px] flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wider m-0">
            NÔMADE
          </h1>
        </div>
        <button
          className="flex md:hidden flex-col justify-center bg-transparent border-none cursor-pointer ml-auto z-[1300] p-2"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
          type="button"
        >
          <span className="w-[26px] h-[3px] bg-white my-1 rounded transition-all block"></span>
          <span className="w-[26px] h-[3px] bg-white my-1 rounded transition-all block"></span>
          <span className="w-[26px] h-[3px] bg-white my-1 rounded transition-all block"></span>
        </button>
        <ul
          className={`list-none gap-10 m-0 p-0 ${
            menuAberto
              ? 'fixed top-[70px] left-0 w-screen h-[calc(100vh-70px)] bg-[#111] flex flex-col items-start p-8 gap-8 transform translate-y-0 transition-transform duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-y-auto z-[999]'
              : 'hidden md:flex md:static md:flex-row md:items-center md:h-auto md:bg-transparent md:shadow-none md:p-0 md:gap-10 md:transform-none md:w-auto md:overflow-visible'
          }`}
        >
          <li className="m-0 w-full md:w-auto">
            <a
              href="#hero"
              className="text-white no-underline text-base font-medium py-2 px-4 rounded transition-all duration-300 block md:inline-block w-full md:w-auto text-left md:text-center border-b md:border-b-0 border-[#222] md:border-0 hover:bg-[#222] md:hover:bg-white/5 hover:text-red-600"
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              Início
            </a>
          </li>
          <li className="m-0 w-full md:w-auto">
            <a
              href="#servicos"
              className="text-white no-underline text-base font-medium py-2 px-4 rounded transition-all duration-300 block md:inline-block w-full md:w-auto text-left md:text-center border-b md:border-b-0 border-[#222] md:border-0 hover:bg-[#222] md:hover:bg-white/5 hover:text-red-600"
              onClick={(e) => handleNavClick(e, 'servicos')}
            >
              Serviços
            </a>
          </li>
          <li className="m-0 w-full md:w-auto">
            <a
              href="#agende-container"
              className="text-white no-underline text-base font-medium py-2 px-4 rounded transition-all duration-300 block md:inline-block w-full md:w-auto text-left md:text-center border-b md:border-b-0 border-[#222] md:border-0 hover:bg-[#222] md:hover:bg-white/5 hover:text-red-600"
              onClick={(e) => handleNavClick(e, 'agende-container')}
            >
              Agendar
            </a>
          </li>
          <li className="m-0 w-full md:w-auto">
            <a
              href="#sobre-container"
              className="text-white no-underline text-base font-medium py-2 px-4 rounded transition-all duration-300 block md:inline-block w-full md:w-auto text-left md:text-center border-b md:border-b-0 border-[#222] md:border-0 hover:bg-[#222] md:hover:bg-white/5 hover:text-red-600"
              onClick={(e) => handleNavClick(e, 'sobre-container')}
            >
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
