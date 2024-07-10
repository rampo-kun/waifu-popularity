"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = searchParams.get('score') || '0';

  const handleRetry = () => {
    router.push('/');
  };

  return (
    <div className='text-center flex items-center justify-center p-10 flex-col gap-10'>
      <h1 className='text-4xl font-semibold'>
        Game Over :(
      </h1>
      <p className='text-2xl font-semibold'>Your Score: <span>{score}</span></p>
      <button 
        onClick={handleRetry}
        className='border-2 border-white rounded-xl w-36 h-24 hover:bg-green-400 hover:text-black text-xl transition-colors duration-200'
      >
        Retry?
      </button>
    </div>
  );
};

export default ResultsPage;