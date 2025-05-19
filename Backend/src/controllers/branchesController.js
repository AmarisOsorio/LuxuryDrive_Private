const branchesController = {};
import branchesModel from "../models/Branches.js"


/********************** S E L E C T **************************/


branchesController.getBranches = async (req , res) => {
    const branches = await branchesModel.find()
    res.json(branches)
};


/********************** I N S E R T **************************/


branchesController.insertBranches = async (req , res) => {
    const { name , address , openingHours } = req.body;
    const newBranches = branchesModel({ name , address , openingHours })
    await newBranches.save() 
    res.json({message: "Branches has been saved"})
};


/********************** D E L E T E **************************/


branchesController.deleteBranches = async (req , res) => {
    await branchesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Branches has been deleted"})
};


/********************** U P D A T E **************************/


branchesController.updateBranches = async (req , res) => {
    const { name , address , openingHours } = req.body;
    await branchesModel.findByIdAndUpdate(req.params.id,{name , address , openingHours},{new : true})
    res.json({message: "Branches has been update"})
};


export default branchesController;