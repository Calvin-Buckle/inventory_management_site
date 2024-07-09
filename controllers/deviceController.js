const Device = require('../models/device');

const asyncHandler = require('express-async-handler');

exports.index = asyncHandler(async(req, res, next)=> {
    res.send('Not Implemented: site home page')
});


exports.device_list = asyncHandler(async (req, res, next) => {
    res.send("Not implemented: List of all devices")
});


exports.device_detail = asyncHandler(async (req,res,next) => {
    res.send(`Not Implemented: Device Details: ${req.params.id}`)
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



