import React from 'react';
import ProgressBar from '../components/ProgressBar';
import StatusText from '../components/StatusText';

const LoaderPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen gap-4">
    <img src="logo.png" alt="KingdomsRise" className="w-32 h-32" />
    <ProgressBar />
    <StatusText />
  </div>
);

export default LoaderPage;
