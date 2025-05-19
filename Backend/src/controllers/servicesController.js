const servicesController = {};
import servicesModel from "../models/Services.js";


/********************** S E L E C T **************************/


servicesController.getServices = async (req , res) => {
    const services = await servicesModel.find()
    res.json(services)
};


/********************** I N S E R T **************************/


servicesController.insertServices = async (req , res) => {
    const { serviceType } = req.body;
    const newService = new servicesModel({ serviceType  })
    await newService.save()
    res.json({messaje: "The service has been save"})
};


/********************** D E L E T E **************************/


servicesController.deleteServices = async (req , res) => {
    await servicesModel.findByIdAndDelete(req.params.id)
    res.json({message: "The service has been delete"})
};


/********************** U P D A T E **************************/


servicesController.updateServices = async (req , res) => {
    const { serviceType } = req.body;
    const updatedProduct = await servicesModel.findByIdAndUpdate(req.params.id, { serviceType } , {new: true})
    res.json({message: "The service has been update"});
};

export default servicesController;