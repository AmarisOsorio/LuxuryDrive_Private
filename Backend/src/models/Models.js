/*
   campos: 
      name
*/

import { Schema, model } from "mongoose";

const modelsSchema = new Schema(
    {
        name: {
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

export default model("Models", modelsSchema)
