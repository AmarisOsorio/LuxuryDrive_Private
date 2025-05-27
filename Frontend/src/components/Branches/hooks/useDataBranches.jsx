import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const useDataBranches= () => {

    const ApiBranches = "http://localhost:4000/api/branches";
 
    const [activeTab, setActiveTab] = useState("list");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [openingHours, setOpeningHours] = useState("");
    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    
    const cleanData = () => {
        setName("");
        setAddress("");
        setOpeningHours("");
    };
    
    // Función para guardar los datos del usuario
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!name || !address || !openingHours ) {
            setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
            return;
        }
    
        try {
            setLoading(true);
            const newBranches = {
                name,
                address,
                openingHours
            };
    
            console.log(newBranches, "Nuevo registro de sucursal");
    
            const response = await fetch(ApiBranches, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBranches),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Hubo un error al registrar la sucursal");
            }
    
            const data = await response.json();
            toast.success('La sucursal se registrado correctamente');
            setSuccess("La sucursal se registrado correctamente");
            cleanData();
            setActiveTab("list");
            fetchData();
        } catch (error) {
            setError(error.message);
            console.error("Error:", error);
            toast.error(error.message || 'Ocurrió un error al registrar la sucursal');
        } finally {
            setLoading(false);
        }
    };
    
    // Función para obtener los datos de los empleados
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(ApiBranches);
            if (!response.ok) {
                throw new Error("Error al obtener las sucursales");
            }
            const data = await response.json();
            console.log(data);
            setBranches(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Error al cargar las sucursales");
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const deleteBranches = async (branchesId) => {
        if (!window.confirm("¿Estás seguro de que deseas eliminar esta sucursal?")) {
            return;
        }

        try {
            const response = await fetch(`${ApiBranches}/${branchesId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });
    
            if (!response.ok) {
                throw new Error("Error al eliminar la sucursal");
            }
    
            const result = await response.json();
            console.log("Deleted:", result);
            toast.success('Sucursal eliminada correctamente');
            fetchData();
        } catch (error) {
            console.error("Error deleting branches:", error);
            toast.error("Error al eliminar la sucursal");
        }
    };
    
    const updateBranches = async (dataBranches) => {
        setId(dataBranches._id);
        setName(dataBranches.name);
        setAddress(dataBranches.address);
        setOpeningHours(dataBranches.openingHours);
        setSuccess(null);
        setActiveTab("form");
    };
    
    const handleUpdate = async (e) => {
        e.preventDefault();
    
        if (!name || !address || !openingHours ) {
            setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
            return;
        }
    
        try {
            setLoading(true);
            const updatedBrnaches = {
                name,
                address,
                openingHours
            };
    
            const response = await fetch(`${ApiBranches}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedBrnaches),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Error al actualizar la sucursal");
            }
    
            toast.success('Sucursal actualizada correctamente');
            setSuccess("Sucursal actualizada correctamente");
            cleanData();
            setActiveTab("list");
            fetchData();
        } catch (error) {
            setError(error.message);
            console.error("Error:", error);
            toast.error(error.message || "Error al actualizar sucursal");
        } finally {
            setLoading(false);
        }
    };

    return {
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
        branches,
        setBranches,
        cleanData,
        handleSubmit,
        deleteBranches,
        updateBranches,
        handleUpdate
    };
};

export default useDataBranches;
