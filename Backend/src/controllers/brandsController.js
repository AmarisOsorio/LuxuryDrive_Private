const brandsController = {};
import brandsModel from "../models/Brands.js"


/********************** S E L E C T **************************/


brandsController.getBrands = async (req , res) => {
    const brands = await brandsModel.find()
    res.json(brands)
};


/********************** I N S E R T **************************/


brandsController.insertBrands = async (req , res) => {
    const { name } = req.body;
    const newBrands = brandsModel({ name })
    await newBrands.save()
    res.json({message: "Brands has been save"})
};


/********************** D E L E T E **************************/


brandsController.deleteBrands = async (req , res) => {
    await brandsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Brands has been delete"})
};


/********************** U P D A T E **************************/


brandsController.updateBrands = async (req , res) => {
    const { name } = req.body;
    await gradeModel.findByIdAndUpdate(req.params.id,{name},{new : true})
    res.json({message: "Brands has been update"})
};


export default brandsController;