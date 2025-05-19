import ClientsModel from "../models/Clients.js"
import EmployeesModel from "../models/Employees.js"
import bcrypt from "bcryptjs";
import jsonwebtokenerror from "jsonwebtoken";
import  {config} from "../config.js";


const loginController ={};

loginController.login = async ( req , res ) => {
    const { email , password } = req.body;
    try{

        let userFound; //variable para que encontremos un usuario
        let userType; // variable que nos dice su tipo de usuario

        /*1. Admin*/
        if(email === config.emailAdmin.email && password === config.emailAdmin.password){
            userType = "Admin";
            userFound = {_id : "Admin"};
        }else{
            /*2. Empleados*/
            userFound = await EmployeesModel.findOne({email});
            userType = "Employee"

            /*3. Clientes*/
            if(!userFound){
                userFound = await ClientsModel.findOne({email});
                userType = "Clients"
            }
        }

        /*Si no encontramos un usuario */
        if(!userFound){
            return res.json({message: "User not found"});
        }

        if(!userType !== "Admin"){
            const isMatch = bcrypt.compare(password , userFound.password);
            if(!isMatch){
                return res.json({message: "Invalid password"});
            } 
            
        }

        jsonwebtokenerror.sign(
            {id: userFound._id , userType},

            config.JWT.secret,

            {expiresIn: config.JWT.expiresIn},

            (error , token) => {
                if(error) console.log(error);

                res.cookie("authToken",token)
                res.json({message: "Login successful!"})
                
            }
        )
    }
    catch(error){
        console.log(error)
    }
}


export default loginController;