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
  };
  let config = {
    tableName: "products",
    timestamps: true,
  };
  const products = sequelize.define(alias, cols, config);
  products.associate = function (models) {
    products.belongsToMany(models.cart, {
      as: "cart", //otra posibilidad es products (tabla de la relación)
      through: "Cart_has_products",
      foreignKey: "idProd",
      otherKey: "idCart",
      timestamps: false,
    });
  };
  return products;
};
