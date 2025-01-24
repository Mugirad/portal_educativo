import React, { useState, useEffect } from 'react';
import ModalFormSecuencia from './modal_form_secuencia';

const SupervisionSecuencias: React.FC = () => {
  const [filtrosAdicionales, setFiltrosAdicionales] = useState<string[]>([]);
  const [docente, setDocente] = useState('');
  const [direccion, setDireccion] = useState('');
  const [estado, setEstado] = useState('');
  const [semestre, setSemestre] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [registroSeleccionado, setRegistroSeleccionado] = useState<any>(null);

  const filtrosDisponibles = [
    { label: 'Semestre', value: 'semestre' },
    { label: 'Rango de Fechas', value: 'fecha' },
    { label: 'Asignatura', value: 'asignatura' },
  ];

  const agregarFiltro = (filtro: string) => {
    if (!filtrosAdicionales.includes(filtro)) {
      setFiltrosAdicionales([...filtrosAdicionales, filtro]);
    }
    setMostrarFiltros(false);
  };

  const eliminarFiltro = (filtro: string) => {
    setFiltrosAdicionales(filtrosAdicionales.filter((f) => f !== filtro));
  };

  // Datos simulados
  const registros = [
    { id: 1, oficio: 'OF123', fechaCaptura: '2025-01-20', docente: 'Juan Pérez', asignatura: 'Matemáticas', direccion: 'Académica', estado: 'Aprobada' },
    { id: 2, oficio: 'OF124', fechaCaptura: '2025-01-21', docente: 'María Gómez', asignatura: 'Física', direccion: 'Investigación', estado: 'Pendiente' },
    { id: 3, oficio: 'OF125', fechaCaptura: '2025-01-22', docente: 'Carlos Sánchez', asignatura: 'Historia', direccion: 'Académica', estado: 'Rechazada' },
  ];

  // Función para filtrar registros
  const filtrarRegistros = () => {
    return registros.filter((registro) => {
      let pasaFiltro = true;

      // Filtrado por Docente
      if (docente && !registro.docente.toLowerCase().includes(docente.toLowerCase())) {
        pasaFiltro = false;
      }

      // Filtrado por Dirección
      if (direccion && !registro.direccion.toLowerCase().includes(direccion.toLowerCase())) {
        pasaFiltro = false;
      }

      // Filtrado por Estado
      if (estado && registro.estado !== estado) {
        pasaFiltro = false;
      }

      // Filtrado por Semestre
      if (semestre && !registro.id.toString().includes(semestre)) {
        pasaFiltro = false;
      }

      // Filtrado por Rango de Fechas
      if (fechaInicio && new Date(registro.fechaCaptura) < new Date(fechaInicio)) {
        pasaFiltro = false;
      }
      if (fechaFin && new Date(registro.fechaCaptura) > new Date(fechaFin)) {
        pasaFiltro = false;
      }

      // Filtrado por Asignatura
      if (asignatura && !registro.asignatura.toLowerCase().includes(asignatura.toLowerCase())) {
        pasaFiltro = false;
      }

      return pasaFiltro;
    });
  };

  const abrirModal = (registro: any) => {
    setRegistroSeleccionado(registro);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setRegistroSeleccionado(null);
  };

  // Bloquear scroll cuando el modal esté abierto
  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalVisible]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Supervisión de Secuencias</h1>

        {/* Filtros */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Filtros</h2>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <div className="flex-grow min-w-[300px]">
                <label className="block text-sm font-medium text-gray-600">Docente</label>
                <input
                  type="text"
                  value={docente}
                  onChange={(e) => setDocente(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm pl-2"
                  placeholder="Buscar por docente"
                  maxLength={35}
                />
              </div>
              <div className="w-52 min-w-[300px]">
                <label className="block text-sm font-medium text-gray-600">Dirección</label>
                <input
                  type="text"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm pl-2"
                  placeholder="Buscar por dirección"
                  maxLength={20}
                />
              </div>
              <div className="w-36 min-w-[160px]">
                <label className="block text-sm font-medium text-gray-600">Estado</label>
                <select
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm"
                >
                  <option value="">Todos</option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="Aprobada">Aprobada</option>
                  <option value="Rechazada">Rechazada</option>
                </select>
              </div>

              <div className="relative">
                <button
                  onClick={() => setMostrarFiltros(!mostrarFiltros)}
                  className="h-full px-4 py-0.5 bg-black text-white text-[12px] rounded-lg shadow-md hover:bg-orange-500"
                >
                  + Agregar filtro
                </button>
                {mostrarFiltros && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10 border border-gray-300">
                    {filtrosDisponibles.map((filtro) => (
                      <button
                        key={filtro.value}
                        onClick={() => agregarFiltro(filtro.value)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-300 hover:rounded-lg"
                      >
                        {filtro.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4">
            {filtrosAdicionales.map((filtro) => (
              <div key={filtro} className="flex items-center gap-2 mb-4">
                {filtro === 'semestre' && (
                  <div className="flex-grow min-w-[300px]">
                    <label className="block text-sm font-medium text-gray-600">Semestre</label>
                    <input
                      type="text"
                      value={semestre}
                      onChange={(e) => setSemestre(e.target.value)}
                      className="mt-1 w-1/6 mxs:w-full border-gray-300 rounded-lg shadow-sm pl-2"
                      placeholder="Buscar por semestre"
                    />
                  </div>
                )}
                {filtro === 'fecha' && (
                  <div className="flex-grow min-w-[300px]">
                    <label className="block text-sm font-medium text-gray-600">Rango de Fechas</label>
                    <div className="flex gap-4">
                      <input
                        type="date"
                        value={fechaInicio}
                        onChange={(e) => setFechaInicio(e.target.value)}
                        className="mt-1 w-auto border-gray-300 rounded-lg shadow-sm pl-2"
                      />
                      <input
                        type="date"
                        value={fechaFin}
                        onChange={(e) => setFechaFin(e.target.value)}
                        className="mt-1 w-auto border-gray-300 rounded-lg shadow-sm pl-2"
                      />
                    </div>
                  </div>
                )}
                {filtro === 'asignatura' && (
                  <div className="flex-grow min-w-[300px]">
                    <label className="block text-sm font-medium text-gray-600">Asignatura</label>
                    <input
                      type="text"
                      value={asignatura}
                      onChange={(e) => setAsignatura(e.target.value)}
                      className="mt-1 w-full border-gray-300 rounded-lg shadow-sm pl-2"
                      placeholder="Buscar por asignatura"
                    />
                  </div>
                )}
                <button
                  onClick={() => eliminarFiltro(filtro)}
                  className="text-red-500 text-sm ml-4"
                >
                  Eliminar filtro
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tabla de Registros */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Secuencias Didácticas</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left bg-gray-900 text-white ">
                <th className="px-4 py-2">Oficio</th>
                <th className="px-4 py-2">Fecha Captura</th>
                <th className="px-4 py-2">Docente</th>
                <th className="px-4 py-2">Asignatura</th>
                <th className="px-4 py-2">Dirección</th>
                <th className="px-4 py-2">Estado</th>
                <th className="px-4 py-2">Acción</th>
              </tr>
            </thead>
            <tbody>
              {filtrarRegistros().map((registro) => (
                <tr key={registro.id}>
                  <td className="px-4 py-2">{registro.oficio}</td>
                  <td className="px-4 py-2">{registro.fechaCaptura}</td>
                  <td className="px-4 py-2">{registro.docente}</td>
                  <td className="px-4 py-2">{registro.asignatura}</td>
                  <td className="px-4 py-2">{registro.direccion}</td>
                  <td className="px-4 py-2">{registro.estado}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => abrirModal(registro)}
                      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-orange-500"
                    >
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Detalles */}
      {modalVisible && registroSeleccionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-lg z-60 pointer-events-auto">
            <ModalFormSecuencia registro={registroSeleccionado} onClose={cerrarModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SupervisionSecuencias;