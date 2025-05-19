const stockController = {};
import stockModel from "../models/Stock.js"


/********************** S E L E C T **************************/


stockController.getStock = async (req , res) => {
    const stock = await stockModel.find().populate("idBranches").populate("idVehicles")
    res.json(stock)
};


/********************** I N S E R T **************************/


stockController.insertStock = async (req , res) => {
    const { idBranches , idVehicles, quantity } = req.body;
    const newStock = stockModel({ idBranches , idVehicles, quantity })
    await newStock.save()
    res.json({message: "Stock has been save"})
};


/********************** D E L E T E **************************/


stockController.deleteStock = async (req , res) => {
    await stockModel.findByIdAndDelete(req.params.id)
    res.json({message: "Stock has been delete"})
};


/********************** U P D A T E **************************/


stockController.updateStock = async (req , res) => {
    const { idBranches , idVehicles, quantity } = req.body;
    await stockModel.findByIdAndUpdate(req.params.id,{idBranches , idVehicles, quantity},{new : true})
    res.json({message: "Stock has been update"})
};


export default stockController;