import React from 'react';
import { FaInstagram as Instagram, FaPhone as Phone, FaEnvelope as Mail } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#181818] text-white">
      <div className="flex justify-between gap-8 max-w-7xl mx-auto flex-wrap px-4 md:px-8">
        <div className="flex-1 min-w-[220px] mb-8">
          <h3 className="text-3xl font-bold mb-4">NÔMADE</h3>
          <p className="mb-4">
            Mais que uma barbearia, somos artesãos do estilo masculino.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/nomadebarbearia?igsh=emNteDVoczlocTNp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl transition-colors duration-200 hover:text-red-600"
            >
              <Instagram />
            </a>
            <a
              href="tel:+5585981696095"
              className="text-white text-2xl transition-colors duration-200 hover:text-red-600"
            >
              <Phone />
            </a>
            <a
              href="mailto:contato@nomade.com.br"
              className="text-white text-2xl transition-colors duration-200 hover:text-red-600"
            >
              <Mail />
            </a>
          </div>
        </div>
        <div className="flex-1 min-w-[220px] mb-8">
          <h4 className="text-lg mb-2">Contato</h4>
          <p className="text-base mb-1">(85) 98169-6095</p>
          <p className="text-base mb-1">contato@nomade.com.br</p>
          <p className="text-base mb-1">@nomadebarbearia</p>
        </div>
        <div className="flex-1 min-w-[220px] mb-8">
          <h4 className="text-lg mb-2">Localização</h4>
          <p className="text-base mb-1">Princesa Isabel, 2309</p>
          <p className="text-base mb-1">Centro Fashion Fortaleza - Setor Amarelo</p>
          <p className="text-base mb-1">CEP: 61604-290</p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 border-t border-gray-800 pt-4 mt-4">
        <p>© 2025 Barbearia Nômade. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
