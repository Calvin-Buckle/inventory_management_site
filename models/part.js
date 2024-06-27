const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const partSchema = new Schema({
    oem: {type: String, required: true, maxLength: 100},
    partNumber: {type: String, required: true, maxLength: 100},
    quantity: {type: Number, required: true},
})




partSchema.virtual("url").get(function(){
    return `/part/${this._id}`
})



module.exports = mongoose.model("Part", partSchema)