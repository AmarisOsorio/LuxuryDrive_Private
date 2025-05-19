const servicesProvidedController = {};
import servicesProvidedModel from "../models/ServicesProvided.js";


/********************** S E L E C T **************************/


servicesProvidedController.getServicesProvided = async (req , res) => {
    const servicesP = await servicesProvidedModel.find().populate("idServices").populate("idVehicles").populate("idClients")
    res.json(servicesP)
};


/********************** I N S E R T **************************/


servicesProvidedController.insertServicesProvided = async (req , res) => {
    const { idServices , idVehicles , idClients } = req.body;
    const newServiceP = new servicesProvidedModel({ idServices , idVehicles , idClients  })
    await newServiceP.save()
    res.json({messaje: "The service provided has been save"})
};


/********************** D E L E T E **************************/


servicesProvidedController.deleteServicesProvided = async (req , res) => {
    await servicesProvidedModel.findByIdAndDelete(req.params.id)
    res.json({message: "The service provided has been delete"})
};


/********************** U P D A T E **************************/


servicesProvidedController.updateServicesProvided = async (req , res) => {
    const { idServices , idVehicles , idClients } = req.body;
    const updatedServicesP = await servicesModel.findByIdAndUpdate(req.params.id, { idServices , idVehicles , idClients } , {new: true})
    res.json({message: "The service provided has been update"});
};

export default servicesProvidedController;