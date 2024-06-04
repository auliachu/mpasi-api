import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    image: {type:String, required:true},
    category: {type:String, required:true},
    age: {type:String, required:true, enum: ['tk1', 'tk2', 'tk3']},
    weight: {type: String, required: true, enum: ['≤6', '7-9', '≥10', '≤7', '8-10', '≥11', '≤8', '9-13', '≥14'] },
    frekuensi: {type: String, required: true, enum : ['1', '2', '3','4']},
    bahan: {type: String, required:true},
    recipe: {type:String, required: true}
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)
export default foodModel;