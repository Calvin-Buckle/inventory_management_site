const express = require("express");
const router = express.Router();

const device_controller = require('../controllers/deviceController');
const part_controller = require('../controllers/partController');
const store_controller = require('../controllers/storeController');
const list_controller = require('../controllers/listController');

// Order matters: more specific routes should come before less specific ones

// Main routes
router.get('/', list_controller.index);
router.get('/parts', list_controller.part_list);
router.get('/stores', list_controller.store_list);

// Device routes
router.get('/devices', list_controller.device_list);
router.get('/device/create', device_controller.device_create_get);
router.post('/device/create', device_controller.device_create_post);
router.get('/device/:id/delete', device_controller.device_delete_get);
router.post('/device/:id/delete', device_controller.device_delete_post);
router.get('/device/:id/update', device_controller.device_update_get);
router.post('/device/:id/update', device_controller.device_update_post);
router.get('/:id', device_controller.device_detail);

// Part routes
router.get('/part/create', part_controller.part_create_get);
router.post('/part/create', part_controller.part_create_post);
router.get('/parts/:id/delete', part_controller.part_delete_get);
router.post('/parts/:id/delete', part_controller.part_delete_post);
router.get('/part/:id/update', part_controller.part_update_get);
router.post('/part/:id/update', part_controller.part_update_post);
router.get('/parts/:id', part_controller.part_detail);

// Store routes
router.get('/store/create', store_controller.store_create_get);
router.post('/store/create', store_controller.store_create_post);
router.get('/stores/:id/delete', store_controller.store_delete_get);
router.post('/stores/:id/delete', store_controller.store_delete_post);
router.get('/store/:id/update', store_controller.store_update_get);
router.post('/store/:id/update', store_controller.store_update_post);
router.get('/stores/:id', store_controller.store_detail);

module.exports = router;
