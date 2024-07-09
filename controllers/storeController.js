const Store = require('../models/store');

const asyncHandler = require('express-async-handler');

exports.store_list = asyncHandler(async(req,res,next) => {
    res.send("not implemented: store list")
});

exports.store_detail = asyncHandler(async(req,res,next) => {
    res.send(`Not implemented: store details: ${req.params.id}`)
});

exports.store_create_get = asyncHandler(async(req,res,next) => {
    res.send("Not Implemented: store create get")
});

exports.store_create_post = asyncHandler(async(req,res,next) => {
    res.send("Not Implemented: store create post")
});

exports.store_delete_get = asyncHandler(async(req,res,next) => {
    res.send("Not implemented: store delete get")
});

exports.store_delete_post = asyncHandler(async(req,res,next) => {
    res.send("Not Imp-lemented: store delete post")
});

exports.store_update_get = asyncHandler(async(res,res,next) => {
    res.send("Not Implemented: store update get")
})

exports.store_update_post = asyncHandler(async(res,res,next) => {
    res.send("Not Implemented: store update post")
})