const router = require('express').Router();

const PaymentController = require('./PaymentController');
const {PaymentService} = require('./PaymentService');

const PaymentInstance = new PaymentController(new PaymentService())

router.post('/new', (req, res, next) => {PaymentInstance.getMercadoPagoLink(req, res, next)})

router.post('/webhook', (req, res) => PaymentInstance.webhook(req, res))

router.post('/feedback', (req, res) => console.log(req.body))

module.exports = router;

