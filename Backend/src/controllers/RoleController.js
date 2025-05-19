const RoleController = {};
import RoleModel from "../models/Role.js"

// Select 
RoleController.getRole = async (req, res) => {
    const Role = await RoleModel.find()
    res.json(Role)
};

//insert

RoleController.insertRole = async (req, res) => {
    const {roleType} = req.body;
    const newRole = new RoleModel({roleType})

    await newRole.save()
    res.json({message: "Role saved"});
};

//delete 
RoleController.deleteRole = async (req, res) => {
    await RoleModel.findByIdAndDelete(req.params.id);
    res.json({message: "Role Deleted"})
}; 

//update 

RoleController.updateRole = async (req, res) => {
    const {roleType} = req.body;
    const updatedRole = await RoleModel.findByIdAndUpdate(req.params.id, {roleType} , {new: true} )

    res.json({message: "Updated Role"})
};


export default RoleController;