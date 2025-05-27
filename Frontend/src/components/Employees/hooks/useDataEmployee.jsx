import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const useDataEmployees = () => {
    const ApiRegister = "http://localhost:4000/api/registerEmployees";
    const ApiEmployees = "http://localhost:4000/api/employees";
 
    const [activeTab, setActiveTab] = useState("list");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [salaries, setSalaries] = useState("");
    const [idRole, setIdRole] = useState("");
    const [errorEmpleado, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [employees, setEmployees] = useState([]);
    
    const cleanData = () => {
        setName("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
        setSalaries("");
        setIdRole("");
        setId("");
    };
    
    // Función para guardar los datos del usuario
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!name || !phoneNumber || !email || !password || !salaries) {
            setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
            return;
        }

        // Validar que el salario sea un número positivo
        if (parseFloat(salaries) < 0) {
            setError("El salario debe ser un número positivo");
            toast.error('El salario debe ser un número positivo');
            return;
        }

        // Validar longitud mínima de contraseña
        if (password.length < 4) {
            setError("La contraseña debe tener al menos 4 caracteres");
            toast.error('La contraseña debe tener al menos 4 caracteres');
            return;
        }
    
        try {
            setLoading(true);
            const newEmployee = {
                name,
                phoneNumber,
                email,
                password,
                salaries: parseFloat(salaries),
                idRole: idRole || null
            };
    
            console.log(newEmployee, "datos nuevo empleado");
    
            const response = await fetch(ApiRegister, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEmployee),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Hubo un error al registrar el empleado");
            }
    
            const data = await response.json();
            toast.success('Empleado registrado correctamente');
            setSuccess("Empleado registrado correctamente");
            cleanData();
            setActiveTab("list");
            fetchData();
        } catch (error) {
            setError(error.message);
            console.error("Error:", error);
            toast.error(error.message || 'Ocurrió un error al registrar el empleado');
        } finally {
            setLoading(false);
        }
    };
    
    // Función para obtener los datos de los empleados
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(ApiEmployees);
            if (!response.ok) {
                throw new Error("Error al obtener los empleados");
            }
            const data = await response.json();
            console.log(data);
            setEmployees(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Error al cargar los empleados");
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const deleteEmployee = async (employeeId) => {
        if (!window.confirm("¿Estás seguro de que deseas eliminar este empleado?")) {
            return;
        }

        try {
            const response = await fetch(`${ApiEmployees}/${employeeId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });
    
            if (!response.ok) {
                throw new Error("Error al eliminar el empleado");
            }
    
            const result = await response.json();
            console.log("Deleted:", result);
            toast.success('Empleado eliminado correctamente');
            fetchData();
        } catch (error) {
            console.error("Error deleting employee:", error);
            toast.error("Error al eliminar el empleado");
        }
    };
    
    const updateEmployee = async (dataEmployee) => {
        setId(dataEmployee._id);
        setName(dataEmployee.name);
        setPhoneNumber(dataEmployee.phoneNumber);
        setEmail(dataEmployee.email);
        setSalaries(dataEmployee.salaries?.toString() || "");
        setIdRole(dataEmployee.idRole || "");
        // No establecer la contraseña por seguridad
        setPassword("");
        setError(null);
        setSuccess(null);
        setActiveTab("form");
    };
    
    const handleUpdate = async (e) => {
        e.preventDefault();
    
        if (!name || !phoneNumber || !email || !salaries) {
            setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
            return;
        }

        // Validar que el salario sea un número positivo
        if (parseFloat(salaries) < 0) {
            setError("El salario debe ser un número positivo");
            toast.error('El salario debe ser un número positivo');
            return;
        }

        // Solo validar contraseña si se proporciona
        if (password && password.length < 4) {
            setError("La contraseña debe tener al menos 4 caracteres");
            toast.error('La contraseña debe tener al menos 4 caracteres');
            return;
        }
    
        try {
            setLoading(true);
            const updatedEmployee = {
                name,
                phoneNumber,
                email,
                salaries: parseFloat(salaries),
                idRole: idRole || null
            };

            // Solo incluir contraseña si se proporciona
            if (password) {
                updatedEmployee.password = password;
            }
    
            const response = await fetch(`${ApiEmployees}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedEmployee),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Error al actualizar el empleado");
            }
    
            toast.success('Empleado actualizado correctamente');
            setSuccess("Empleado actualizado correctamente");
            cleanData();
            setActiveTab("list");
            fetchData();
        } catch (error) {
            setError(error.message);
            console.error("Error:", error);
            toast.error(error.message || "Error al actualizar el empleado");
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
        phoneNumber,
        setPhoneNumber,
        email,
        setEmail,
        password,
        setPassword,
        salaries,
        setSalaries,
        idRole,
        setIdRole,
        errorEmpleado,
        setError,
        success,
        setSuccess,
        loading,
        setLoading,
        employees,
        setEmployees,
        cleanData,
        handleSubmit,
        fetchData,
        deleteEmployee,
        updateEmployee,
        handleUpdate,
    };
};

export default useDataEmployees;
