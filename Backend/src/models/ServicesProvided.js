/*
   campos: 
      idServices
      idVehicles
      idClients
*/

import { Schema, model } from "mongoose";

const servicesProvidedSchema = new Schema(
    {
    
        idServices: {
            type: Schema.Types.ObjectId,
            ref: "Services",    
            require: true
        },
        idVehicles: {
            type: Schema.Types.ObjectId,
            ref: "Vehicles",    
            require: true
        },
        idClients: {
            type: Schema.Types.ObjectId,
            ref: "Clients",    
            require: true
        }
        
    },
    {
        timestamps: true,
        strict: true
    }
)

export default model("ServicesProvided", servicesProvidedSchema)