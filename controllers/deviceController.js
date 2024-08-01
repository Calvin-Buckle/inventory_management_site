const Device = require('../models/device');


const asyncHandler = require('express-async-handler');





exports.device_detail = asyncHandler(async (req, res, next) => {
    try {
        const device = await Device.findById(req.params.id).exec();
        
        if (!device) {
            return res.status(404).send("Device not found");
        }

        res.render('device_detail', {
            title: device.model_name,
            device: device,  // Pass the entire device object
        });
    } catch (error) {
        next(error);
    }
});


exports.device_create_get = asyncHandler(async(req,res,next) => {
    res.send("Not implemented: Device create get")
});


exports.device_create_post = asyncHandler(async(req,res,next) => {
    res.send("Not implemented: Device create post")
});


exports.device_delete_get = asyncHandler(async(req,res,next) => {
    res.send("Not implemented: Device Delete Get")
});


exports.device_delete_post = asyncHandler(async(req,res,next) => {
    res.send("Not implemented: Device Delete Post")
});


exports.device_update_get = asyncHandler(async(req,res,next) => {
    res.send("Not Implemented: Device update Get")
});


exports.device_update_post = asyncHandler(async(req,res,next) => {
    res.send("Not Implemented: Device Update Post")
});



