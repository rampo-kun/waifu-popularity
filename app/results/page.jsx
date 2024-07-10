import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const ResultsClient = dynamic(() => import('./ResultsClient'), { ssr: false });

const ResultsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsClient />
    </Suspense>
  );
};

export default ResultsPage;