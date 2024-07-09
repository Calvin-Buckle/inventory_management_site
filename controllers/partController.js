const Part = require('../models/part');

const asyncHandler = require('express-async-handler');


exports.part_list = asyncHandler( async(req,res,next) => {
    res.send("Not Implemented: parts list")
});

exports.part_detail = asyncHandler( async(req,res,next) => {
    res.send(`Not Implemented: part details: ${req.params.id}`)
});

exports.part_create_get = asyncHandler( async(req,res,next) => {
    res.send("Not Implemented: part create get")
});

exports.part_create_post = asyncHandler(async(req,res,next) => {
    res.send("Not implemented: part create post")
});

exports.part_delete_get = asyncHandler(async(req,res,next) => {
    res.send("Not implemented: part delete get")
});

exports.part_delete_post = asyncHandler(async(req,res,next) => {
    res.send("not implemeneted: part delete post")
});

exports.part_update_get = asyncHandler(async(req,res,next) => {
    res.send("Not Implemeneted: part update get")
});

exports.part_update_post = asyncHandler(async(req,res,next) => {
    res.send("Not implemented: part update post")
})
