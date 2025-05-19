const ordersController = {};
import ordersModel from "../models/Orders.js";


/********************** S E L E C T **************************/


ordersController.getOrders = async (req , res) => {
    const orders = await ordersModel.find().populate("idClients").populate("idVehicles")
    res.json(orders)
};


/********************** I N S E R T **************************/


ordersController.insertOrders = async (req , res) => {
    const { idClients , idVehicles , total , paymentMethod , orderStatus } = req.body;
    const newOrder = new ordersModel({ idClients , idVehicles , total , paymentMethod , orderStatus  })
    await newOrder.save()
    res.json({messaje: "The order has been save"})
};


/********************** D E L E T E **************************/


ordersController.deleteOrders = async (req , res) => {
    await ordersModel.findByIdAndDelete(req.params.id)
    res.json({message: "The order has been deleted"})
};


/********************** U P D A T E **************************/


ordersController.updateOrders = async (req , res) => {
    const { idClients , idVehicles , total , paymentMethod , orderStatus } = req.body;
    const updatedProduct = await ordersModel.findByIdAndUpdate(req.params.id, { idClients , idVehicles , total , paymentMethod , orderStatus } , {new: true})
    res.json({message: "The order has been updated"});
};

export default ordersController;