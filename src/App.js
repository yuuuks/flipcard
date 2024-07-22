import React from 'react';
import ServiceCard from './components/FlipCard';

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900">
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-purple-600 uppercase font-semibold mb-2">Mes Services</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Ce que je fais ?</h3>
          <div className="flex justify-center">
            <ServiceCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
