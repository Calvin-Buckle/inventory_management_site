const Device = require('../models/device');
const { body, validationResult } = require('express-validator');


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
    res.render("device_form", {title: "Create a new Device"})
});


exports.device_create_post =
[
    body('model', 'Must contain atleast 3 characters')
    .trim()
    .isLength({min: 3})
    .escape(),

    body('oem', 'Must contain atleast 3 characters')
    .trim()
    .isLength({min: 3})
    .escape(),

    body('quantity', 'Quantity must be a number greater than 0')
    .isInt({gt:0}),

 asyncHandler(async(req,res,next) => {
    const errors = validationResult(req);

    const device = new Device({model_name: req.body.model, oem: req.body.oem, quantity: req.body.quantity})
    if (!errors.isEmpty()) {
        res.render("device_form", {
            title: "Create Device",
            model_name: model_name,
            oem: oem,
            quantity: quantity,
            errors: errors.array(),
        });
        return;
    } else {
        const deviceExists = await Device.findOne({ DeviceId: req.body.model })
        .collation({ locale: "en", strength: 2 })
        .exec();
    if (deviceExists) {
        res.redirect(deviceExists.url);
    } else {
        await device.save();
        res.redirect(`/devices/${device._id}`);
    }
}
    }
)
];


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



