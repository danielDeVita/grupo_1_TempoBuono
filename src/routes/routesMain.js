const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require(path.join(__dirname, '..', 'controllers', 'mainController.js'));
const validator = require(path.join(__dirname, '..', 'middleware', 'express-validator.js')); 
const { body } = require('express-validator'); 
const authMiddleware = require("../middleware/authMiddleware");
const guestMiddleware = require("../middleware/guestMiddleware");

router.get('/', mainController.home);
router.get('/login', guestMiddleware, mainController.login);

router.post('/login', [
    body('email')
        .isEmail().withMessage('Por favor escribe un email válido'),
    body('password')
        .notEmpty().withMessage('Por favor escribe tu contraseña').bail()
        .isLength({ min: 8 }).withMessage('Su contraseña debe tener más de ocho caracteres.')
], mainController.processLogin); 




module.exports = router;
