/*
   Campos: 
     idClients
     idVehicles
     total
     paymentMethod
     orderStatus
*/

import { Schema , model } from "mongoose";

const ordersSchema = new Schema({
    idClients: {
        type: Schema.Types.ObjectId,
        ref: "Clients",
        require : true
    },
    idVehicles: {
        type: Schema.Types.ObjectId,
        ref: "Vehicles",
        require : true
    },
    total: {
      type: Number,
      require: true,
      min: 0
    },
    paymentMethod: {
        type: String,
        require: true,
        maxLength: 50
      },
    orderStatus: {
        type: String,
        require: true,
        maxLength: 25
      }
},{
    timestamps: true,
    strict: true
}); 

export default model("Orders", ordersSchema);