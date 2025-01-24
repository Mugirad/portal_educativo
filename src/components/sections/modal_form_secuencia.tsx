import React from 'react';
import { CheckCircle, XCircle, Download, Send } from 'lucide-react';
import SecuenciaFormato from '../sections/formato_secuencia';

interface ModalFormSecuenciaProps {
  registro: any;
  onClose: () => void;
}

const ModalFormSecuencia: React.FC<ModalFormSecuenciaProps> = ({ registro, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-4/6 h-5/6 p-8 border border-gray-300 flex flex-col">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Detalles de la Secuencia</h2>

        {/* Contenedor con grid para dividir en 2 columnas */}
        <div className="grid grid-cols-12 gap-6 flex-grow h-3/4">
          {/* Columna 1 - 70% del ancho */}
          <div className="col-span-9 border border-gray-300 rounded-lg p-4 max-h-full overflow-auto">
            {/* Información de la secuencia */}
            {['ID', '#Oficio', 'Fecha Captura', 'Docente', 'Asignatura', 'Dirección', 'Estado'].map((label, index) => (
              <SecuenciaFormato key={index}/>
            ))}
          </div>

          {/* Columna 2 - 30% del ancho */}
          <div className="col-span-3 border border-gray-300 rounded-lg p-4 h-full overflow-x-auto">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Comentarios Cargados</label>
              <div className="space-y-2">
                {['Comentario 1 cargado.', 'Comentario 2 cargado.'].map((comentario, index) => (
                  <div className="p-2 border border-gray-300 rounded-lg" key={index}>
                    <p><strong>Docente:</strong> {comentario}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contenedor para textarea y botones */}
        <div className="flex flex-col mt-auto mb-0 flex-grow">
          {/* Area para escribir comentario */}
          <div className="mb-1">
            <label className="block text-sm font-medium text-gray-600">Comentario</label>
            <div className="relative">
              <textarea
                className="w-full border rounded-lg py-1 px-2 resize-none focus:ring-2 focus:ring-blue-300"
                rows={2}
                placeholder="Escribe tu comentario aquí..."
              />
              <button
                onClick={() => alert('Comentario enviado')}
                className="absolute bottom-1/2 transform translate-y-1/2 right-2 flex items-center justify-center bg-black text-white p-2 rounded-full hover:bg-green-500 focus:outline-none shadow"
                aria-label="Enviar comentario"
              >
                <Send size={18} />
              </button>
            </div>
          </div>

          {/* Botones */}
          <div className="border rounded-lg p-1 flex justify-center items-center w-min mx-auto space-x-2">
            <button
              onClick={() => alert('Secuencia aprobada')}
              className="flex items-center bg-black text-white py-2 px-4 rounded-lg hover:bg-green-600"
              aria-label="Aprobar secuencia"
            >
              <CheckCircle className="mr-2" size={18} />
              Aprobada
            </button>
            <button
              onClick={() => alert('Secuencia rechazada')}
              className="flex items-center bg-black text-white py-2 px-4 rounded-lg hover:bg-red-600"
              aria-label="Rechazar secuencia"
            >
              <XCircle className="mr-2" size={18} />
              Rechazada
            </button>
            <button
              onClick={() => alert('Descargando...')}
              className="bg-black text-white p-2 rounded-full hover:bg-orange-500"
              aria-label="Descargar"
            >
              <Download size={20} />
            </button>
            <button
              onClick={onClose}
              className="bg-black text-white py-2 px-4 rounded-lg hover:bg-orange-500"
              aria-label="Cerrar modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFormSecuencia;