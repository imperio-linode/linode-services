"use strict";
Object.defineProperty(exports, "__esModule", { value: true })
const express_1 = require("express")
const Logger_1 = require("../utils/Logger")
const router = (0, express_1.Router)()
router.get('/test', (req, res, next) => {
    res.render('index', { title: 'Express' })
})
router.get('/a', (req, res, next) => {
    (0, Logger_1.info)("Got request")
    res.send({ elo: "eloa" })
})
router.post('/engine/add', (req, res, next) => {
    (0, Logger_1.info)("Got request")
    (0, Logger_1.infob)(Object.keys(req.body))
    res.send(req.body)
})
exports.default = router;
