import {Schema, model} from "mongoose";

const RolShema = new Schema({

    
    roleType: {
        type: String,
        require: true,
        
    }
},{
    timestamps: true,
    strict: false
})


export default model("Rol", RolShema)