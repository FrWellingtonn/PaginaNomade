import React from 'react';

const SobreSection: React.FC = () => {
  return (
    <div
      id="sobre-container"
      className="min-h-screen bg-gray-100 py-20 px-5 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl md:text-4xl font-bold text-gray-800 m-0 flex flex-col gap-3">
            Sobre a Nômade
            <span className="w-20 h-1 bg-red-600 block"></span>
          </h2>
          <p className="text-base leading-relaxed text-gray-600 m-0">
            A Barbearia Nômade nasceu da paixão por criar experiências únicas de
            cuidado masculino. Combinamos a tradição das antigas barbearias com
            técnicas modernas e produtos de alta qualidade.
          </p>
          <p className="text-base leading-relaxed text-gray-600 m-0">
            Nosso ambiente foi pensado para proporcionar momentos de
            relaxamento e renovação, onde cada cliente se sente em casa enquanto
            cuida de sua aparência e bem-estar.
          </p>
          <div className="border-2 border-red-600 rounded-xl p-6 flex gap-4 mt-5">
            <div className="text-3xl text-red-600">📍</div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 m-0 mb-2">Localização</h3>
              <p className="text-sm text-gray-600 my-1">Centro Fashion Fortaleza - Setor Amarelo</p>
              <p className="text-sm text-gray-600 my-1">Ceara, Fortaleza - CEP: 61604-290</p>
              <p className="text-sm text-gray-600 my-1">Princesa Isabel, 2309</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-5 items-start">
            <div className="text-3xl text-red-600">👤</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 m-0 mb-2">Profissionais Qualificados</h3>
              <p className="text-sm text-gray-600 leading-relaxed m-0">
                Equipe experiente com mais de 10 anos no mercado
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="text-3xl text-red-600">👥</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 m-0 mb-2">Atendimento Personalizado</h3>
              <p className="text-sm text-gray-600 leading-relaxed m-0">
                Cada cliente recebe atenção especial e cuidado individual
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="text-3xl text-red-600">🕐</div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 m-0 mb-2">Horários Flexíveis</h3>
              <p className="text-sm text-gray-600 leading-relaxed m-0">
                Funcionamos todos os dias com horários estendidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreSection;
