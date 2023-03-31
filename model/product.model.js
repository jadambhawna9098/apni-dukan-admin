import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

const Product = sequelize.define("product",{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.INTEGER
    },
    subCategory_ID:{
        type: DataTypes.INTEGER
    },
    category_name:{
        type: DataTypes.STRING
    },
    users_id:{
        type: DataTypes.INTEGER
    },
    bill:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    },
    images:{
        type: DataTypes.STRING
    }
  });
  
  sequelize.sync().then(result=>{
    console.log("Products table created successfully....");
  }).catch(err=>{
    console.log(err);
  });

  export default Product;