import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const BranchesCard = ({ 
  branches, 
  index, 
  isEditing, 
  editingBranches,
  onEdit, 
  onDelete, 
  onSaveEdit, 
  onCancelEdit, 
  onEditChange 
}) => {
  
  if (isEditing) {
    // Edit Mode
    return (
      <div className={`px-6 py-4 border-b border-gray-100 last:border-b-0 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
        <div className="grid grid-cols-6 gap-4 items-center">
          <input
            type="text"
            value={editingBranches.nombre}
            onChange={(e) => onEditChange({...editingBranches, nombre: e.target.value})}
            className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            value={editingBranches.direccion}
            onChange={(e) => onEditChange({...editingBranches, direccion: e.target.value})}
            className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            value={editingBranches.horarioAtencion}
            onChange={(e) => onEditChange({...editingBranches, horarioAtencion: e.target.value})}
            className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="flex space-x-2">
            <button
              onClick={onSaveEdit}
              className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            >
              Guardar
            </button>
            <button
              onClick={onCancelEdit}
              className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // View Mode
  return (
    <div className={`px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="text-sm font-medium text-gray-900">{branches.nombre}</div>
        <div className="text-sm text-gray-600">{branches.direccion}</div>
        <div className="text-sm text-gray-900 font-medium">{branches.horarioAtencion}</div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(branches)}
            className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
            title="Editar sucursal"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(branches.id)}
            className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
            title="Eliminar sucursal"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BranchesCard;