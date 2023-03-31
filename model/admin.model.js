import { DataTypes, STRING } from "sequelize";
import sequelize from "../db/dbconfig.js";

const Admin =sequelize.define("admin",{
  
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
           isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contact:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isNumeric:true
        }
    }
});

sequelize.sync()
.then(()=>{console.log("admin Table Created SuccesFully")})
.catch((err)=>{console.log("Internal Server Problem")});

export default Admin;