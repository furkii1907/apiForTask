const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

 

// lale satış oranlarını dönen API endpoint
router.get('/lale-sales', controller.getLaleSales); 

// nergiz satış oranlarını dönen API endpoint
router.get('/nergiz-sales', controller.getNergizSales);

// papatya satış oranlarını dönen API endpoint
router.get('/papatya-sales', controller.getPapatyaSales);

// açelya satış oranlarını dönen API endpoint
router.get('/açelya-sales', controller.getAçelyaSales);




module.exports = router;