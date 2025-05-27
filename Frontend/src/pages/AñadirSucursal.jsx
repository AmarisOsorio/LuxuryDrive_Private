import React, { useState, useEffect } from "react";
import RegisterBranches from "../components/Branches/RegisterBranches.jsx"
import ListBranches from "../components/Branches/ListBranches.jsx";
import { Toaster } from 'react-hot-toast';

import useDataBranches from "../components/Branches/hooks/useDataBranches.jsx";

const Branches = () => {
  // Efecto para cambiar el título de la página cuando se carga la página
  useEffect(() => {
    document.title = 'Empleados';
  }, []);

  const {
    activeTab,
    setActiveTab,
    id,
    setId,
    name,
    setName,
    address,
    setAddress,
    openingHours,
    setOpeningHours,
    errorBranches,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    branches,
    setBranches,
    cleanData,
    handleSubmit,
    fetchData,
    deleteBranches,
    updateBranches,
    handleUpdate,
  } = useDataBranches();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestión de Sucursales</h1>
        
       
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "list"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("list")}
              >
                Lista de Sucursales
              </button>
              <button
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "form"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => {
                  setActiveTab("form");
                  cleanData();
                }}
              >
                {id ? "Editar Sucursal" : "Agregar Sucursal"}
              </button>
            </nav>
          </div>
        </div>

        
        <div>
          {activeTab === "list" && (
            <ListBranches
              setId={setId}
              setActiveTab={setActiveTab}
              updateBranches={updateBranches}
              handleUpdate={handleUpdate}
              deleteBranches={deleteBranches}
              branches={branches}
              loading={loading}
            />
          )}
          
          {activeTab === "form" && (
            <div className="flex justify-center">
              <RegisterBranches
                id={id}
                setId={setId}
                name={name}
                setName={setName}
                address={address}
                setAddress={setAddress}
                openingHours={openingHours}
                setOpeningHours={setOpeningHours}
                errorBranches={errorBranches}
                setError={setError}
                success={success}
                setSuccess={setSuccess}
                loading={loading}
                setLoading={setLoading}
                branches={branches}
                setBranches={setBranches}
                cleanData={cleanData}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
              />
            </div>
          )}
        </div>
      </div>
      
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
};

export default Branches;