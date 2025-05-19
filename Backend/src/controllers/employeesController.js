const EmployeesController = {};
import EmployeesModel from "../models/Employees.js"

// Select 
EmployeesController.getEmployees = async (req, res) => {
    const Employees = await EmployeesModel.find().populate("idRole")
    res.json(Employees)
};

//insert

EmployeesController.insertEmployees = async (req, res) => {
    const {name,phoneNumber,email,idRole,salaries} = req.body;
    const newEmployees = new EmployeesModel({name,phoneNumber,email,idRole,salaries})

    await newEmployees.save()
    res.json({message: "Employees saved"});
};

//delete 
EmployeesController.deleteEmployees = async (req, res) => {
    await EmployeesModel.findByIdAndDelete(req.params.id);
    res.json({message: "Employees Deleted"})
}; 

//update 

EmployeesController.updateEmployees = async (req, res) => {
    const {name,phoneNumber,email,idRole,salaries} = req.body;
    const updatedEmployees = await EmployeesModel.findByIdAndUpdate(req.params.id, {name,phoneNumber,email,idRole,salaries} , {new: true} )

    res.json({message: "Updated Employees"})
};


export default EmployeesController;
