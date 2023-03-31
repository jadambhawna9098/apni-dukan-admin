import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

let Product =sequelize.define("product",{


});

sequelize.sync().then(result=>{
    console.log("product Table Created");
}).catch(err=>{
    console.log(err);
})

export default Product;