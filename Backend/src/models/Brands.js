/*
   campos: 
      name
*/

import { Schema, model } from "mongoose";

const bransSchema = new Schema(
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

export default model("Brands", bransSchema)
