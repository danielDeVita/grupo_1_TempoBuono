module.exports = (sequelize, dataTypes) => {
  let alias = "products";
  let cols = {
    idProd: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    ProductsName: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    ProductsDescription: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    ProductsPrice: {
      type: dataTypes.FLOAT(255),
      allowNull: false,
    },

    /* createdAt: {
      type: dataTypes.DATE
    },
    updatedAt: {
      type: dataTypes.DATE
    }, */
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };
  const products = sequelize.define(alias, cols, config);
  products.associate = function (models) {
    products.belongsToMany(models.Cart, {
      //ok
      as: "cart",
      through: "Cart_has_products",
      foreignKey: "products_idProd",
      otherKey: "Cart_idCart",
      timestamps: false,
    }),
      products.hasMany(models.productsImages, {
        //ok
        as: "productsImages",
        foreignKey: "products_idProd",
      }),
      products.belongsTo(models.productsCategory, {
        //ok
        as: "productsCategory",
        foreignKey: "productsCategory_idproductsCategory",
      }),
      products.belongsToMany(models.productsCombo, {
        //ok
        as: "productCombo",
        through: "products_has_productsCombo",
        foreignKey: "products_idProd",
        otherKey: "productsCombo_idproductsCombo",
        timestamps: false,
      });
  };
  return products;
};
