const path = require ('path');
const { body } = require('express-validator');

const validator = [
  body('usuario')
  .notEmpty().withMessage('Por favor escribe el nombre de usuario').bail()
  .isLength({min:5 , max:10}).withMessage('El nombre de usuario debe tener entre 5 y 10 caracteres'),
  body('imagen_usuario').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];
  
    if (!file) {
      throw new Error('Tienes que subir una imagen');
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
      }
    }
  
    return true;
  }),
  body('email')
  .isEmail().withMessage('Por favor escribe un email válido'),
  body('password')
  .notEmpty().withMessage('Por favor escribe tu contraseña').bail()
  .isLength({min:8}).withMessage('Su contraseña debe tener más de ocho caracteres.')
]

module.exports = validator;

