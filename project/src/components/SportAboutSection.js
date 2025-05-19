import React from 'react';

const SportAboutSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestra Empresa</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Visión</h3>
            <p className="text-gray-600">Ser la tienda deportiva líder en innovación y calidad, inspirando a atletas de todos los niveles a alcanzar su máximo potencial.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Misión</h3>
            <p className="text-gray-600">Ofrecer equipamiento deportivo de alta calidad con un servicio excepcional, promoviendo el deporte y vida saludable.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Objetivos</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Ampliar nuestra red de distribución</li>
              <li>Ofrecer productos ecológicos</li>
              <li>Apoyar a jóvenes talentos</li>
              <li>Innovación constante</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportAboutSection;