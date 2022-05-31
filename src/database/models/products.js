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
    createdAt: {
      type: dataTypes.DATE
    },
    updatedAt: {
      type: dataTypes.DATE
    },
  };
  let config = {
    tableName: "products",
    timestamps: true,
  };
  const products = sequelize.define(alias, cols, config);
  products.associate = function (models) {
    products.belongsToMany(models.Cart, {
      as: "cart",
      through: "Cart_has_products",
      foreignKey: "idProd",
      otherKey: "idCart",
      timestamps: false,
    }),
      products.hasMany(models.productsImages, {
        as: "productsImages",
        foreignKey: "idproductsImages"
      }),
      products.belongsTo(models.productsCategory, {
        as: "productsCategory",
        foreignKey: "idproductsCategory"
      }),
      products.belongsToMany(models.productsCombo, {
        as: "productCombo",
        through: "products_has_productsCombo",
        foreignKey: "idProd",
        otherKey: "idproductsCombo",
        timestamps: false
      })
  };
  return products;
};
