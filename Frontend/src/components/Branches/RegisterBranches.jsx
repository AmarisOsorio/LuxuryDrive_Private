import React from "react";

const RegisterEmployees = ({
  id,
  name,
  setName,
  address,
  setAddress,
  openingHours,
  setOpeningHours,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full mr-3">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            {id ? "Editar sucursal" : "Agregar sucursal"}
          </h2>
        </div>

        <form onSubmit={id ? handleUpdate : handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-0 py-2 border-0 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-transparent"
              placeholder="Nombre sucursal"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-0 py-2 border-0 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-transparent"
              placeholder="dirección"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="openingHours"
              value={openingHours}
              onChange={(e) => setOpeningHours(e.target.value)}
              className="w-full px-0 py-2 border-0 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none bg-transparent"
              placeholder="horario de atencion"
              required
            />
          </div>
          
          

          <div className="flex justify-center space-x-4 pt-6">
            <button
              type="button"
              className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
              onClick={() => {
                // Reset form o cerrar modal
                setName("");
                setAddress("");
                setOpeningHours("");
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
              {id ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterEmployees;
    