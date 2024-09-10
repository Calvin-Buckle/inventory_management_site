const Store = require('../models/store');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');


exports.store_detail = asyncHandler(async(req,res,next) => {
    try{
        const store = await Store.findById(req.params.id).exec()
        if (!store) {
            return res.status(404).send("There are no stores");
        }
        res.render("store_detail",{
            title: store.location,
            store: store,
        } )
    } catch(error){
        next(error)
    }
   
});

exports.store_create_get = (req, res, next) => {
res.render("store_form", {title: "Create a new store"});
}

exports.store_create_post = [
    body("name", "Store name must contain atleast 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

    asyncHandler(async (req,res,next) => {
        
        const errors = validationResult(req)

        const store = new Store({location: req.body.name})

        if(!errors.isEmpty()){
            res.render("store_form",{
                title: "Create store",
                store: store,
                errors: errors.array(),
            });
            return;
        }else{
            const storeExists = await Store.findOne({name: req.body.name})
            .collation({ locale: "en", strength: 2})
            .exec();
        if(storeExists){
            res.redirect(storeExists.url);
        }else{
            await store.save();
            res.redirect(`/catalog/stores/${store._id}`)
        }
        }
    })
]

exports.store_delete_get = asyncHandler(async (req, res, next) => {
    const store = await Store.findById(req.params.id).exec();
    if(store === null){
        res.redirect("/catalog/stores");
    }
    res.render("store_delete",{
        title: "Delete Stores ",
        store: store,
    });
});

exports.store_delete_post = asyncHandler(async (req, res, next) => {
    console.log("Received delete request for store ID:", req.body.storeid); 
    const store = await Store.findById(req.body.storeid).exec();
    if (store) {
        await Store.findByIdAndDelete(req.body.storeid);
        res.redirect("/catalog/stores");
    } else {
        res.status(404).send("Store not found");
    }
});


exports.store_update_get = asyncHandler(async(req,res,next) => {
    res.send("Not Implemented: store update get")
})

exports.store_update_post = asyncHandler(async(req,res,next) => {
    res.send("Not Implemented: store update post")
})