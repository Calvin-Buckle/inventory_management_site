const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const storeSchema = new Schema({
    location: {type: String, require: true, maxLength: 100},
})




storeSchema.virtual("url").get(function(){

    return `/store/${this._id}`;
});


module.exports = mongoose.model("Store", storeSchema)
