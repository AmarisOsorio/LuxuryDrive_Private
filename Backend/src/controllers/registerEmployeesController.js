import Employees from "../models/Employees.js";
import bcryptjs from "bcryptjs"; //Encriptar
import jsonwebtoken from "jsonwebtoken"; //Generar Token
import {config} from "../config.js"


const resgisterEmployeesController = {};

resgisterEmployeesController.register = async ( req , res ) => {
    const {name,phoneNumber,email,idRole,salaries,password} = req.body;

    try{

        const existEmployee = await Employees.findOne({email});
        if(existEmployee){
            return res.json({message: "This employee already exists"})
        }

        const passwordHash = await bcryptjs.hash(password , 10 ); 

        const newEmployee = new Employees({name,phoneNumber,email,idRole,salaries,password: passwordHash})
        await newEmployee.save();

        jsonwebtoken.sign(
            //1
            {id: newEmployee._id},
        
            //2
            config.JWT.secret,

            //3
            {expiresIn: config.JWT.expiresIn},

            //4
            (error, token) => {
                if(error) console.log(error);
                res.cookie("authToken", token)
                res.json({message: "Employee successfully registered"})
            }

        )

    }catch(error){
        console.log(error)
        res.json({message: "Failed to register employee"})
    }
    
}

export default resgisterEmployeesController;