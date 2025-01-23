// src/components/sections/secuencia_did.tsx

import React, { useState } from 'react';
import CapturaSecuencia from './captura_secuencia';
import ObservacionesSecuencia from './observaciones_secuencia';

const SecuenciaDidactica = () => {
  const [activeTab, setActiveTab] = useState('captura'); // Estado para controlar la pestaña activa

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Secuencia Didáctica</h2>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-4" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('captura')}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'captura'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Captura de Secuencia
          </button>
          <button
            onClick={() => setActiveTab('observaciones')}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'observaciones'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Observaciones
          </button>
        </nav>
      </div>

      {/* Contenido Dinámico */}
      <div className="mt-6">
        {activeTab === 'captura' && <CapturaSecuencia />}
        {activeTab === 'observaciones' && <ObservacionesSecuencia />}
      </div>
    </div>
  );
};

export default SecuenciaDidactica;
