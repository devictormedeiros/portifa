'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl text-white-70 mb-8">Página não encontrada</h2>
        <p className="text-white-40 mb-8">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-primary text-gray-700 rounded hover:bg-primary/90 transition-colors"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
} 