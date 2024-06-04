import foodModel from "../models/foodModel.js";
import fs from 'fs'


//add food item
const addFood = async (req,res) =>{
    
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        image:image_filename,
        age: req.body.age,
        weight: req.body.weight,
        frekuensi: req.body.frekuensi,
        bahan: req.body.bahan,
        recipe: req.body.recipe
    })
    try{
        await food.save();
        res.json({success:true, message:"Food Added"})
    } catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

//all food list
const listFood = async(req,res) =>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"error"})
    }
}

//find food by id
const getFoodById = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        res.json({success:true, data:food})
    } catch (error) {
        res.json({success:false, message:"Error"})
    }
}

//remove food
const removeFood = async (req, res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food succesfully removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"error"})

    }
}

export{addFood, listFood, removeFood, getFoodById}
