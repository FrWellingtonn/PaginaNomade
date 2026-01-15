import React from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

interface ServicesSectionProps {
  services: Service[];
  title?: string;
  description?: string;
  showHeader?: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  title = 'Nossos Serviços',
  description = 'Oferecemos uma gama completa de serviços para cuidar do seu estilo com excelência e atenção aos detalhes.',
  showHeader = true,
}) => {
  const defaultIcon = (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12" />
      <path d="M6 18L18 6" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  return (
    <section className="servicos py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {showHeader && (
          <div className="text-center mb-16">
            <h2 className="mt-24 md:mt-0 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 mb-4 tracking-wide">
              {title}
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300/80 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              icon={service.icon || defaultIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
