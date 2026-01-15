'use client';

import React, { FormEvent } from 'react';
import FormCard from '../../components/FormCard';

export default function CadastrarPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Adicionar lógica de submit aqui
    console.log('Form submitted');
  };

  return <FormCard onSubmit={handleSubmit} />;
}
