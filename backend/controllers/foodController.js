
import { request } from "http";
import foodModel from "../models/foodModel.js";

import fs from "fs"
import { response } from "express";
import { log } from "console";

//add food item


const addFood = async (request, response) => {
    let image_filename = `${request.file.filename}`;
    const food = new foodModel({
        name: request.body.name,
        description: request.body.description,
        price: request.body.price,
        category: request.body.category,
        image: image_filename,

    })
    try {
        await food.save();
        response.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error)
        response.json({success:false,message:"Error Occured while storing product"});
    }
}


//list of food

const listFood = async (request,response)=>{
    try {
        const foods = await foodModel.find({});
        response.json({success:true,data:foods});
    } catch (error) {
        console.log("Error occured while listing food");
        response.json({success:false,message:error});
    }
}

// remove food 

const removeFood = async (request,response)=>{
try {
    const food = await foodModel.findById(request.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{});
    await foodModel.findByIdAndDelete(request.body.id);
    response.json({success:true,message:"Food Deleted"});
    
} catch (error) {
    console.log("Error Occured");
    response.json({success:false,message:error});
    
}
}

export {removeFood, addFood , listFood }