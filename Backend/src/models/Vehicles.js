/*
   campos: 
      idBrand
      idModels
      price
*/

import { Schema, model } from "mongoose";

const vehiclesSchema = new Schema(
    {

        idBrand: {
            type: Schema.Types.ObjectId,
            ref: "Brands",    
            require: true
        },
        idModels: {
            type: Schema.Types.ObjectId,
            ref: "Models",    
            require: true
        },
        price: {
            type: Number,
            require: true,
            min: 0
        }
        
    },
    {
        timestamps: true,
        strict: false
    }
)

export default model("Vehicles", vehiclesSchema)