const clientsController = {};
import clientsModel from "../models/Clients.js";


/********************** S E L E C T **************************/


clientsController.getClient = async (req , res) => {
    const clients = await clientsModel.find()
    res.json(clients)
};


/********************** I N S E R T **************************/


clientsController.insertClient = async (req , res) => {
    const { name , address , email , telephone , dui , driversLicense , monthlyIncome } = req.body;
    const newClient = new clientsModel({ name , address , email , telephone , dui , driversLicense , monthlyIncome  })
    await newClient.save()
    res.json({messaje: "The client has been save"})
};


/********************** D E L E T E **************************/


clientsController.deleteClient = async (req , res) => {
    await clientsModel.findByIdAndDelete(req.params.id)
    res.json({message: "The client has been delete"})
};


/********************** U P D A T E **************************/


clientsController.updateClient = async (req , res) => {
    const { name , address , email , telephone , dui , driversLicense , monthlyIncome } = req.body;
    const updatedProduct = await productsModel.findByIdAndUpdate(req.params.id, { name , address , email , telephone , dui , driversLicense , monthlyIncome } , {new: true})
    res.json({message: "The client has been update"});
};

export default clientsController;