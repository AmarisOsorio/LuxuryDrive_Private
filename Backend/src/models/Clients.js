/*
   Campos: 
     name
     address
     email
     telephone
     dui
     driversLicense
     monthlyIncome
*/

import { Schema , model } from "mongoose";

const clientsSchema = new Schema({
    name: {
      type: String,
      require: true,
      maxLength: 100
    },
    address: {
      type: String,
      require: true,
      maxLength: 150
    },
    email: {
      type: String,
      require: true,
      maxLength: 100
    },
    telephone: {
        type: String,
        maxLength: 100
      },
    dui: {
        type: String,
        require: true,
        maxLength: 10
      },
    driversLicense: {
      type: String,
      require: false,
      maxLength: 10
    },
    monthlyIncome: {
        type: Number,
        require: true,
        min : 0
    }
},{
    timestamps: true,
    strict: true
}); 

export default model("Clients", clientsSchema);