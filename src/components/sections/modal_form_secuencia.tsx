import React from 'react';

interface ModalFormSecuenciaProps {
  registro: any;
  onClose: () => void;
}

const ModalFormSecuencia: React.FC<ModalFormSecuenciaProps> = ({ registro, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Detalles de la Secuencia</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">ID</label>
          <p>{registro.id}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">#Oficio</label>
          <p>{registro.oficio}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Fecha Captura</label>
          <p>{registro.fechaCaptura}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Docente</label>
          <p>{registro.docente}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Asignatura</label>
          <p>{registro.asignatura}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Dirección</label>
          <p>{registro.direccion}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Estado</label>
          <p>{registro.estado}</p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => alert('Descargando...')}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Descargar
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalFormSecuencia;