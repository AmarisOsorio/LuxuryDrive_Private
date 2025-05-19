const modelsController = {};
import modelsModel from "../models/Models.js"


/********************** S E L E C T **************************/


modelsController.getModels = async (req , res) => {
    const models = await modelsModel.find()
    res.json(models)
};


/********************** I N S E R T **************************/


modelsController.insertModels = async (req , res) => {
    const { name } = req.body;
    const newModels = modelsModel({ name })
    await newModels.save()
    res.json({message: "Models has been save"})
};


/********************** D E L E T E **************************/


modelsController.deleteModels = async (req , res) => {
    await modelsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Models has been delete"})
};


/********************** U P D A T E **************************/


modelsController.updateModels = async (req , res) => {
    const { name } = req.body;
    await modelsModel.findByIdAndUpdate(req.params.id,{ name },{new : true})
    res.json({message: "Models has been update"})
};


export default modelsController;