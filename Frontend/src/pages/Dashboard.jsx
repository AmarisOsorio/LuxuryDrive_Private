import { useState } from 'react';
import { Bell, Car, Settings, BarChart3, Megaphone } from 'lucide-react';

export default function Dashboard() {
  // Estado para controlar las secciones 
  const [activeSection, setActiveSection] = useState(null);

  // Datos para la gráfica de tendencias en ventas
  const salesData = [
    { year: "2019", sales: 150 },
    { year: "2020", sales: 220 },
    { year: "2021", sales: 280 },
    { year: "2022", sales: 330 },
    { year: "2023", sales: 380 },
    { year: "2024", sales: 450 },
    { year: "2025", sales: 500 },
    { year: "2026", sales: 580 },
  ];

  // Datos para las notificaciones
  const notifications = [
    { id: 1, message: "Nuevo vehículo asignado", details: "El BMW 320d con matrícula 4075JHZ ha sido asignado" },
    { id: 2, message: "Nuevo vehículo asignado", details: "El Audi A1 con matrícula 2364BCN ha sido asignado" },
    { id: 3, message: "Nuevo vehículo asignado", details: "El sedan con matrícula 7823RTY ha sido asignado" },
    { id: 4, message: "Nuevo vehículo asignado", details: "El vehículo con matrícula 5472POI ha sido asignado" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Sección de Mantenimiento */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
          <div className="flex justify-center">
            <div className="bg-gray-800 p-2 rounded-lg mb-2">
              <Settings className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-gray-800 mb-2">Mantenimiento</h3>
          <p className="text-center text-xs text-gray-600 mb-4">
            Gestiona la ficha de los vehículos y sus citas de taller
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-gray-600 text-xs border border-gray-300 rounded-full px-4 py-1 flex items-center">
              Ir a mantenimiento
              <span className="ml-1 bg-gray-200 rounded-full h-4 w-4 flex items-center justify-center text-gray-600">&#62;</span>
            </button>
          </div>
        </div>
        
        {/* Sección de Importaciones */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
          <div className="flex justify-center">
            <div className="bg-gray-800 p-2 rounded-lg mb-2">
              <Car className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-gray-800 mb-2">Importaciones</h3>
          <p className="text-center text-xs text-gray-600 mb-4">
            Gestiona la ficha de los vehículos y sus datos de importación
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-gray-600 text-xs border border-gray-300 rounded-full px-4 py-1 flex items-center">
              Ir a importaciones
              <span className="ml-1 bg-gray-200 rounded-full h-4 w-4 flex items-center justify-center text-gray-600">&#62;</span>
            </button>
          </div>
        </div>
        
        {/* Sección de Marketing y desarrollo */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
          <div className="flex justify-center">
            <div className="bg-gray-800 p-2 rounded-lg mb-2">
              <Megaphone className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-gray-800 mb-2">Marketing y desarrollo</h3>
          <p className="text-center text-xs text-gray-600 mb-4">
            Gestiona la ficha de los vehículos y sus datos de marketing
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-gray-600 text-xs border border-gray-300 rounded-full px-4 py-1 flex items-center">
              Ir a marketing
              <span className="ml-1 bg-gray-200 rounded-full h-4 w-4 flex items-center justify-center text-gray-600">&#62;</span>
            </button>
          </div>
        </div>
        
        {/* Sección de Ventas */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
          <div className="flex justify-center">
            <div className="bg-gray-800 p-2 rounded-lg mb-2">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-center font-bold text-gray-800 mb-2">Ventas</h3>
          <p className="text-center text-xs text-gray-600 mb-4">
            Gestiona la ficha de vehículos y datos de este área
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-gray-600 text-xs border border-gray-300 rounded-full px-4 py-1 flex items-center">
              Ir a ventas
              <span className="ml-1 bg-gray-200 rounded-full h-4 w-4 flex items-center justify-center text-gray-600">&#62;</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Fila inferior con notificaciones y tendencias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Notificaciones */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
          <h3 className="font-bold text-gray-800 mb-4">Últimas Notificaciones</h3>
          <div className="space-y-2">
            {notifications.map((notification) => (
              <div key={notification.id} className="bg-blue-100 p-3 rounded-md flex items-start">
                <div className="bg-indigo-500 p-1 rounded-md mr-3 mt-1">
                  <Bell className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-gray-800">{notification.message}</h4>
                  <p className="text-xs text-gray-600">{notification.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tendencias en ventas */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
          <div className="flex justify-between items-center mb-6">
            <div />
            <h3 className="font-bold text-gray-800">Tendencias en ventas</h3>
          </div>
          
          {/* Gráfico simulado - En una aplicación real usarías una librería como Chart.js o recharts */}
          <div className="h-64">
            {salesData.map((data, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="w-8 text-xs text-right pr-2">{data.year}</div>
                <div 
                  className="bg-teal-400 h-6 rounded-sm" 
                  style={{ width: `${data.sales / 8}%` }}
                />
                <div className="text-xs ml-2">{data.sales}</div>
              </div>
            ))}
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <div>100</div>
              <div>200</div>
              <div>300</div>
              <div>400</div>
              <div>500</div>
              <div>600</div>
              <div>700</div>
              <div>800</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}