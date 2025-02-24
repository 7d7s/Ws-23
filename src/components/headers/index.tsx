// index.tsx
import React from 'react';
import Banner from './Banner';

const Home: React.FC = () => {
  return (
    <div className="justify-center w-full mx-auto bg-gray-100 border-b">
      <Banner />
    </div>
  );
};

export default Home;
