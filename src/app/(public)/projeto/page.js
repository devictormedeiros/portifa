"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProjetoRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/projetos');
  }, [router]);

  return null;
} 