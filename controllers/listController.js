const Device = require('../models/device');
const Store = require('../models/store');
const Part = require('../models/part');
const asyncHandler = require('express-async-handler');


exports.index = asyncHandler(async(req, res, next)=> {
    const [
        numDevices,
        numParts,
        numStores,
    ] = await Promise.all([
        Device.countDocuments({}).exec(),
        Part.countDocuments({}).exec(),
        Store.countDocuments({}).exec(),
    ])
    res.render('index', {
        title: 'Mobile Inventory Management System',
        device_count: numDevices,
        part_count: numParts,
        store_count: numStores,
    })
});

exports.device_list = asyncHandler(async (req, res, next) => {
    const allDevices = await Device.find({}, "model_name quantity oem")
    .exec()
    res.render('device_list', {title: "Device List", device_list: allDevices })
});

exports.part_list = asyncHandler( async(req,res,next) => {
   const allParts = await Part.find({}, "partNumber oem quantity")
   res.render('part_list', {title: "Parts List", part_list: allParts})
});

exports.store_list = asyncHandler(async(req,res,next) => {
    const allStores = await Store.find({}, "location")
    res.render('store_list', {title: "Stores list", store_list: allStores})
});