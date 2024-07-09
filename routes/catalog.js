const express = require("express");

const router = express.Router();


const device_controller = require('../controllers/deviceController');
const part_controller = require('../controllers/partController');
const store_controller = require('../controllers/storeController');



//Device Routers

router.get('/', device_controller.index);

router.get('/device/create', device_controller.device_create_get);

router.post('/device/create', device_controller.device_create_post);

router.get('/device/:id/delete', device_controller.device_delete_get);

router.post('/device/:id/delete', device_controller.device_delete_post);

router.get('/device/:id/update', device_controller.device_update_get);

router.post('/device/:id/update', device_controller.device_update_post);

router.get('/device/:id', device_controller.device_detail);

router.get('/devices', device_controller.device_list);


//Part routers

router.get('/part/create', part_controller.part_create_get);

router.post('/part/create', part_controller.part_create_post);

router.get('/part/:id/delete', part_controller.part_delete_get);

router.post('/part/:id/delete', part_controller.part_delete_post);

router.get('/part/:id/update', part_controller.part_update_get);

router.post('/part/:id/update', part_controller.part_update_post);

router.get('/part/:id', part_controller.part_detail);

router.get('/parts', part_controller.part_list);


//Store Routers

router.get('/store/create', store_controller.store_create_get);

router.post('/store/create', store_controller.store_create_post);

router.get('/store/:id/delete', store_controller.store_delete_get);

router.post('/store/:id/delete', store_controller.store_delete_post);

router.get('/store/:id/update', store_controller.store_update_get);

router.post('/store/:id/update', store_controller.store_update_post);

router.get('/store/:id', store_controller.store_detail);

router.get('/stores', store_controller.store_list);




module.exports = router;