import React, { useState } from 'react';
import { Search, Menu, User, Edit, Trash2, X, Users } from 'lucide-react';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      nombre: 'Juan Pérez',
      correo: 'juan.perez@empresa.com',
      telefono: '+1 (555) 123-4567',
      salario: '$45,000',
      area: 'Desarrollo'
    },
    {
      id: 2,
      nombre: 'María García',
      correo: 'maria.garcia@empresa.com',
      telefono: '+1 (555) 234-5678',
      salario: '$52,000',
      area: 'Marketing'
    },
    {
      id: 3,
      nombre: 'Carlos López',
      correo: 'carlos.lopez@empresa.com',
      telefono: '+1 (555) 345-6789',
      salario: '$48,000',
      area: 'Recursos Humanos'
    },
    {
      id: 4,
      nombre: 'Ana Martínez',
      correo: 'ana.martinez@empresa.com',
      telefono: '+1 (555) 456-7890',
      salario: '$55,000',
      area: 'Finanzas'
    },
    {
      id: 5,
      nombre: 'Roberto Silva',
      correo: 'roberto.silva@empresa.com',
      telefono: '+1 (555) 567-8901',
      salario: '$41,000',
      area: 'Soporte Técnico'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    salario: '',
    area: ''
  });

  const filteredEmployees = employees.filter(employee =>
    employee.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee({ ...employee });
  };

  const handleSaveEdit = () => {
    setEmployees(employees.map(emp => 
      emp.id === editingEmployee.id ? editingEmployee : emp
    ));
    setEditingEmployee(null);
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  const handleAddEmployee = () => {
    if (newEmployee.nombre && newEmployee.correo && newEmployee.telefono && newEmployee.salario && newEmployee.area) {
      const newId = Math.max(...employees.map(emp => emp.id)) + 1;
      setEmployees([...employees, { ...newEmployee, id: newId }]);
      setNewEmployee({
        nombre: '',
        correo: '',
        telefono: '',
        salario: '',
        area: ''
      });
      setShowAddModal(false);
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  const handleCancelAdd = () => {
    setNewEmployee({
      nombre: '',
      correo: '',
      telefono: '',
      salario: '',
      area: ''
    });
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={() => setShowAddModal(true)}>
                Agregar empleado
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Table Header */}
        <div className="bg-slate-500 text-white px-6 py-4 rounded-t-lg">
          <div className="grid grid-cols-6 gap-4 font-medium text-sm">
            <div>Nombre</div>
            <div>Correo</div>
            <div>Teléfono</div>
            <div>Salario</div>
            <div>Área de trabajo</div>
            <div>Acciones</div>
          </div>
        </div>

        {/* Employee Cards */}
        <div className="bg-white rounded-b-lg shadow-sm border border-gray-200 border-t-0">
          {filteredEmployees.length === 0 ? (
            <div className="text-center py-12">
              <User className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No hay empleados</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm ? 'No se encontraron empleados que coincidan con tu búsqueda.' : 'Comienza agregando un empleado.'}
              </p>
            </div>
          ) : (
            filteredEmployees.map((employee, index) => (
              <div key={employee.id} className={`px-6 py-4 border-b border-gray-100 last:border-b-0 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                {editingEmployee && editingEmployee.id === employee.id ? (
                  // Edit Mode
                  <div className="grid grid-cols-6 gap-4 items-center">
                    <input
                      type="text"
                      value={editingEmployee.nombre}
                      onChange={(e) => setEditingEmployee({...editingEmployee, nombre: e.target.value})}
                      className="px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <input
                      type="email"
                      value={editingEmployee.correo}
                      onChange={(e) => setEditingEmployee({...editingEmployee, correo: e.target.value})}
                      className="px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <input
                      type="text"
                      value={editingEmployee.telefono}
                      onChange={(e) => setEditingEmployee({...editingEmployee, telefono: e.target.value})}
                      className="px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <input
                      type="text"
                      value={editingEmployee.salario}
                      onChange={(e) => setEditingEmployee({...editingEmployee, salario: e.target.value})}
                      className="px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <input
                      type="text"
                      value={editingEmployee.area}
                      onChange={(e) => setEditingEmployee({...editingEmployee, area: e.target.value})}
                      className="px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSaveEdit}
                        className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                      >
                        Guardar
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <div className="grid grid-cols-6 gap-4 items-center">
                    <div className="text-sm font-medium text-gray-900">{employee.nombre}</div>
                    <div className="text-sm text-gray-600">{employee.correo}</div>
                    <div className="text-sm text-gray-600">{employee.telefono}</div>
                    <div className="text-sm text-gray-900 font-medium">{employee.salario}</div>
                    <div className="text-sm text-gray-600">{employee.area}</div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(employee)}
                        className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
                        title="Editar"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(employee.id)}
                        className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                        title="Eliminar"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer Info */}
        {filteredEmployees.length > 0 && (
          <div className="mt-4 text-sm text-gray-500 text-center">
            Mostrando {filteredEmployees.length} de {employees.length} empleados
          </div>
        )}
      </div>

      {/* Add Employee Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-100 rounded-full">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Agregar empleado</h3>
              </div>
              <button
                onClick={handleCancelAdd}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={newEmployee.nombre}
                  onChange={(e) => setNewEmployee({...newEmployee, nombre: e.target.value})}
                  className="w-full px-0 py-2 border-0 border-b-2 border-blue-200 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="correo@empresa.com"
                  value={newEmployee.correo}
                  onChange={(e) => setNewEmployee({...newEmployee, correo: e.target.value})}
                  className="w-full px-0 py-2 border-0 border-b-2 border-blue-200 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Teléfono"
                  value={newEmployee.telefono}
                  onChange={(e) => setNewEmployee({...newEmployee, telefono: e.target.value})}
                  className="w-full px-0 py-2 border-0 border-b-2 border-blue-200 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Salario"
                  value={newEmployee.salario}
                  onChange={(e) => setNewEmployee({...newEmployee, salario: e.target.value})}
                  className="w-full px-0 py-2 border-0 border-b-2 border-blue-200 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Área de trabajo"
                  value={newEmployee.area}
                  onChange={(e) => setNewEmployee({...newEmployee, area: e.target.value})}
                  className="w-full px-0 py-2 border-0 border-b-2 border-blue-200 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-center space-x-4 p-6 pt-4">
              <button
                onClick={handleCancelAdd}
                className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddEmployee}
                className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm font-medium"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;