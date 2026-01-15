'use client';

import React, { FormEvent } from 'react';

interface FormCardProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const FormCard: React.FC<FormCardProps> = ({ onSubmit }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 md:p-4 relative">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center blur-lg"
        style={{ backgroundImage: `url(/imgnavalha.jpg)` }}
      ></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/70 to-black/90"></div>

      {/* Content */}
      <div className="w-full max-w-md z-10">
        <div className="backdrop-blur-md bg-black/70 border border-white/10 rounded-xl p-8 md:p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5),0_10px_10px_-5px_rgba(0,0,0,0.4)] animate-[zoomIn_0.5s_ease-out]">
          {/* Logo */}
          <div className="flex justify-center mb-8 relative">
            <div className="w-20 h-20 md:w-16 md:h-16 rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)] relative z-10">
              <svg
                className="w-10 h-10 md:w-8 md:h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
              </svg>
              <div className="absolute inset-0 rounded-full bg-red-500 opacity-50 animate-pulse-logo"></div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-2xl font-bold text-red-500 mb-2">
              Barbearia Nômade
            </h1>
            <p className="text-gray-400 text-sm">Crie sua conta e agende seu horário</p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            {/* Nome Completo */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-100">
                Nome Completo
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                  className="w-full py-3 pl-12 pr-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 text-base transition-all duration-300 outline-none focus:border-red-500 focus:shadow-[0_0_0_2px_rgba(220,38,38,0.3)]"
                />
              </div>
            </div>

            {/* E-mail */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-100">
                E-mail
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                  className="w-full py-3 pl-12 pr-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 text-base transition-all duration-300 outline-none focus:border-red-500 focus:shadow-[0_0_0_2px_rgba(220,38,38,0.3)]"
                />
              </div>
            </div>

            {/* Telefone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-100">
                Telefone
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  required
                  className="w-full py-3 pl-12 pr-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 text-base transition-all duration-300 outline-none focus:border-red-500 focus:shadow-[0_0_0_2px_rgba(220,38,38,0.3)]"
                />
              </div>
            </div>

            {/* Senha */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-100">
                Senha
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full py-3 pl-12 pr-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 text-base transition-all duration-300 outline-none focus:border-red-500 focus:shadow-[0_0_0_2px_rgba(220,38,38,0.3)]"
                />
              </div>
            </div>

            {/* Confirmar Senha */}
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-100">
                Confirmar Senha
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="••••••••"
                  required
                  className="w-full py-3 pl-12 pr-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 text-base transition-all duration-300 outline-none focus:border-red-500 focus:shadow-[0_0_0_2px_rgba(220,38,38,0.3)]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 mt-2 hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-5px_rgba(239,68,68,0.5)] active:translate-y-0"
            >
              Criar Conta
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-6 text-sm text-gray-400">
            Já tem uma conta?{' '}
            <a href="#login" className="text-red-500 no-underline font-semibold transition-all duration-300 hover:text-red-400 hover:underline">
              Fazer login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
