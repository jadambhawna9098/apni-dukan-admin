import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";
const Category = sequelize.define("category",{
    categoryName:{
        type:DataTypes.STRING,
        allowNull:false
    }},{
        timestamps:false
    });

sequelize.sync().then(()=>{
    console.log("Categories Table is Created");
}).catch((err)=>{
    console.log(err);
})

export default Category;