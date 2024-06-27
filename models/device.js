const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const deviceSchema = new Schema({
    oem: {type: String, required: true, maxLength: 100},
    model_name: {type: String, required: true, maxLength: 100},
    quantity: {type: Number, required:true},
})



deviceSchema.virtual("url").get(function(){
    return `/devices/${this._id}`;
});




module.exports = mongoose.model("Model", deviceSchema);