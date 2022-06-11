const path = require ('path');
const { body } = require('express-validator');

const validatorProducts = [
  body('nombre_producto')
  .notEmpty().withMessage('Por favor escribe el nombre de producto').bail()
  .isLength({min:5}).withMessage('El nombre del producto debe tener mínimo 5 caracteres, que pena!! Sorry!'),
  
  body('descripcion_producto')
  .isLength({min:20}).withMessage('La descripción del producto debe tener mínimo 20 caracteres'),

  body('imagen_producto').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
  
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

  body('categoria')
  .notEmpty().withMessage('Por favor elige una categoría'),


  body('precio_producto')
  // .notEmpty().withMessage('Por favor escribe un precio').bail()
  .isNumeric().withMessage('El precio debe ser un valor numérico')
  
  
]

module.exports = validatorProducts;

