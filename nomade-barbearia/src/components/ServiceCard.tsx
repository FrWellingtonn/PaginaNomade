import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, icon }) => {
  return (
    <div className="bg-gray-100 p-10 md:p-8 rounded-xl text-center transition-all duration-300 border-2 border-transparent hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(239,68,68,0.1)] hover:border-red-500">
      <div className="text-red-500 mb-6 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="text-2xl font-bold text-red-500">{price}</div>
    </div>
  );
};

export default ServiceCard;
