const express = require('express');
const path = require('path');
const routerUser = express.Router();
const userController = require(path.join(__dirname, '..', 'controllers', 'userController.js'));
const validator = require(path.join(__dirname, '..', 'middleware', 'express-validator.js'));
const authMiddleware = require("../middleware/authMiddleware");
const guestMiddleware = require("../middleware/guestMiddleware");
const { body } = require('express-validator');

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "/../../public/img/users"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const uploadFile = multer({ storage });

routerUser.get('/register', guestMiddleware, userController.register);
routerUser.post("/register", uploadFile.single("imagen_usuario"), validator, userController.create);
routerUser.get('/login', guestMiddleware, userController.login);
routerUser.post('/login', [
    body('email')
        .isEmail().withMessage('Por favor escribe un email válido'),
    body('password')
        .notEmpty().withMessage('Por favor escribe tu contraseña').bail()
        .isLength({ min: 8 }).withMessage('Su contraseña debe tener más de ocho caracteres.')
], userController.processLogin);
routerUser.get("/profile", authMiddleware, userController.profile);
routerUser.get('/logout', userController.logout);

module.exports = routerUser;