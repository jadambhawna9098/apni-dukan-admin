import { request, response } from "express";
import Category from '../model/category.model.js'
import { validationResult } from "express-validator";


export const saveAll = async (request, response, next) => {
    try {
         const c = request.body; 
         console.log(c);     
           for (let category of c) {
            
            await Category.create({ categoryName: category })
            
        }
        return response.status(200).json({ message: "Category Saved", status: true });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ message: "Internal Server Error", status: false });
    }
}


export const getList = async (request, response, next) => {
    try {
        let category = await Category.findAll()
        return response.status(200).json({ category: category, message: "Category List" });
    } catch (err) {
        return response.status(500).json({ error: "Internal Server Error" });
    }
}


export const save = async (request, response, next) => {
    try {
        console.log(request.body);
        const error = await validationResult(request);
        console.log(error);
        if (!error.isEmpty())
            return response.status(400).json({ error: "Bad Request", status: false });
        const category = await Category.create(request.body);
        return response.status(200).json({ message: "Category Saved", status: true });
    } catch (err) {
        console.log(err)
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }

}


export const update = async (request, response, next) => {
    console.log(request.body);
    try {
        const category = await Category.findByPk(request.body.id);
        if (!category)
            return response.status(404).json({ error: "Request Resource Not Found", status: false });
        let status = await Category.update({ categoryName: request.body.categoryName }, {
            where: {
                id: request.body.id
            }
        })
        return response.status(200).json({ category: { ...category, category: request.body.categoryName }, message: "Update Category", status: true });
    } catch (err) {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}


export const remove = async (request, response, next) => {
    console.log(request.body);
    try {
        Category.destroy({
            where: {
                id: request.body.id
            }
        })
        return response.status(200).json({ message: "Category is Removed", status: true });

    } catch (err) {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }

}


