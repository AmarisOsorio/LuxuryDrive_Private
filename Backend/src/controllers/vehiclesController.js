const vehiclesController = {};
import vehiclesModel from "../models/Vehicles.js"


/********************** S E L E C T **************************/


vehiclesController.getVehicles = async (req , res) => {
    const vehicles = await vehiclesModel.find().populate("idBrand").populate("idModels")
    res.json(vehicles)
};


/********************** I N S E R T **************************/


vehiclesController.insertVehicles = async (req , res) => {
    const { idBrand , idModels , price } = req.body;
    const newVehicles = vehiclesModel({ idBrand , idModels , price })
    await newVehicles.save()
    res.json({message: "Vehicles has been save"})
};


/********************** D E L E T E **************************/


vehiclesController.deleteVehicles = async (req , res) => {
    await vehiclesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Vehicles has been delete"})
};


/********************** U P D A T E **************************/


vehiclesController.updateEvaluation = async (req , res) => {
    const { idBrand , idModels , price } = req.body;
    await gradeModel.findByIdAndUpdate(req.params.id,{idBrand , idModels , price},{new : true})
    res.json({message: "Vehicles has been update"})
};


export default vehiclesController;