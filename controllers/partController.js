const Part = require('../models/part');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');




exports.part_detail = asyncHandler( async(req,res,next) => {
    try{
        const part = await Part.findById(req.params.id).exec()
            if(!part){
               return res.status(404).send("There are no parts")
            }
        res.render('part_detail',{
            title: part.partname,
            oem: part.oem,
            partNumber: part.partNumber,
            quantity: part.quantity,
            part: part,
        })
    }
    catch(error){
        next(error)
    }
});

exports.part_create_get = asyncHandler( async(req,res,next) => {
    res.render("part_form", {title: "Add a new part"})
});

exports.part_create_post = [
    body('partNumber', 'part name must contain atleast 3 characters')
    .trim()
    .isLength({min : 3})
    .escape(),

    body('oem', 'OEM must contain at least 3 characters')
    .trim()
    .isLength({min:3})
    .escape(),


    body('quantity', 'Quantity must be a number greater than 0')
    .isInt({gt:0}),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        
        const part = new Part({ partNumber: req.body.partNumber, oem: req.body.oem, quantity: req.body.quantity });
    
        if (!errors.isEmpty()) {
            res.render("part_form", {
                title: "Create Part",
                partNumber: partNumber,
                oem: oem,
                quantity: quantity,
                errors: errors.array(),
            });
            return;
        } else {
            const partExists = await Part.findOne({ partNumber: req.body.partNumber })
                .collation({ locale: "en", strength: 2 })
                .exec();
    
            if (partExists) {
                res.redirect(partExists.url);
            } else {
                await part.save();
                res.redirect(`/catalog/parts/${part._id}`);
            }
        }
    })
];


exports.part_delete_get = asyncHandler(async(req,res,next) => {
    const part = await Part.findById(req.params.id).exec()
    if(part === null){
        res.redirect('/catalog/parts')
    }
    
        res.render('part_delete',{
        title: 'Delete part',
        part: part
        })
    
});

exports.part_delete_post = asyncHandler(async(req,res,next) => {
    console.log("Received delete request for part ID:", req.body.partid); 
    const part = await Part.findById(req.body.partid).exec();
    if (part) {
        await Part.findByIdAndDelete(req.body.partid);
        res.redirect("/catalog/parts");
    } else {
        res.status(404).send("Part not found");
    }
});

exports.part_update_get = asyncHandler(async(req,res,next) => {
    res.send("Not Implemeneted: part update get")
});

exports.part_update_post = asyncHandler(async(req,res,next) => {
    res.send("Not implemented: part update post")
})
