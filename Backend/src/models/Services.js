/*
   campos: 
      serviceType
*/

import { Schema, model } from "mongoose";

const servicesSchema = new Schema(
    {
        serviceType: {
            type: String,
            require: true,
            maxLeght: 100
        }
        
    },
    {
        timestamps: true,
        strict: true
    }
)

export default model("Services", servicesSchema)