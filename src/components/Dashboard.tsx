import React, { useState } from 'react';
import { BookOpen, ClipboardList, LogOut, User, GraduationCap } from 'lucide-react';
import SupervisionSecuencias from './sections/supervision_secuencias';
import SecuenciaDidactica from './sections/secuencia_did';

interface DashboardProps {
  userEmail: string;
  onLogout: () => void;
}

function Dashboard({ userEmail, onLogout }: DashboardProps) {
  const [currentSection, setCurrentSection] = useState('secuencia');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <GraduationCap  className="h-8 w-8 text-blue-600" />
                <span className="bg-blue-200 m-2 text-blue-600 text-xs font-medium me-2 px-2 py-1 rounded-xl  dark:text-blue-300 dark:bg-gray-700 border border-blue-300">v.Alpha</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  onClick={() => setCurrentSection('secuencia')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    currentSection === 'secuencia'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <BookOpen className="h-5 w-5 mr-1" />
                  Secuencia Didáctica
                </button>
                <button
                  onClick={() => setCurrentSection('supervision')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    currentSection === 'supervision'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <ClipboardList className="h-5 w-5 mr-1" />
                  Supervisión de Secuencias
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 relative group">
                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:text-gray-900 focus:outline-none">
                  <User className="h-6 w-6" />
                </button>
                <div className="hidden group-hover:block absolute right-0 w-48 py-1 mt-2 bg-white rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 text-sm text-gray-700">{userEmail}</div>
                  <button
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <button
              onClick={() => setCurrentSection('secuencia')}
              className={`w-full flex items-center px-3 py-2 text-base font-medium ${
                currentSection === 'secuencia'
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Secuencia Didáctica
            </button>
            <button
              onClick={() => setCurrentSection('supervision')}
              className={`w-full flex items-center px-3 py-2 text-base font-medium ${
                currentSection === 'supervision'
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              <ClipboardList className="h-5 w-5 mr-2" />
              Supervisión de Secuencias
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          {currentSection === 'secuencia' ? (
            <SecuenciaDidactica />
          ) : (
            <SupervisionSecuencias />
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;