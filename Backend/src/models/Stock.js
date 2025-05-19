/*
   campos: 
      idBranches
      idVehicles
      quantity
*/

import { Schema, model } from "mongoose";

const stockSchema = new Schema(
    {
    
        idBranches: {
            type: Schema.Types.ObjectId,
            ref: "Branches",    
            require: true
        },
        idVehicles: {
            type: Schema.Types.ObjectId,
            ref: "Vehicles",    
            require: true
        },
        quantity: {
            type: Number,
            require: true,
            min: 0
        }
        
    },
    {
        timestamps: true,
        strict: true
    }
)

export default model("Stock", stockSchema)