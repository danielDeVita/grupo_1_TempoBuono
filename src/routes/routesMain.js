const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require(path.join(__dirname, '..', 'controllers', 'mainController.js'));
const validator = require(path.join(__dirname, '..', 'middleware', 'express-validator.js')); //agrego dani, pero no sirve
const { body } = require('express-validator'); //agrego dani

router.get('/', mainController.home);
router.get('/login', mainController.login);

router.post('/login', [
    body('email')
        .isEmail().withMessage('Por favor escribe un email válido'),
    body('password')
        .notEmpty().withMessage('Por favor escribe tu contraseña').bail()
        .isLength({ min: 8 }).withMessage('Su contraseña debe tener más de ocho caracteres.')
], mainController.processLogin); //agrego dani




module.exports = router;
