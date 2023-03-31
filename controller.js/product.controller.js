import { Op } from "sequelize";
import{Product}from"../model/association.js";



export const list =async(request,response,next)=>{
    try{
        let product = await Product.findAll()
        return response.status(200).json({product:product,message:"Product List",status:true});
    }catch(err){
       return response.status(500).json({message:"Internal Server Error",status:false});
    }
   }