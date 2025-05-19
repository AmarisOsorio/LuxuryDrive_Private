/*
   campos: 
      name
      address
      openingHours
*/

import { Schema, model } from "mongoose";

const branchesSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            maxLeght: 100
        },
        address: {
            type: String,
            require: true,
            maxLeght: 150
        },
        openingHours: {
            type: String,
            require: true,
            maxLeght: 150

        }
        
    },
    {
        timestamps: true,
        strict: true
    }
)

export default model("Branches", branchesSchema)