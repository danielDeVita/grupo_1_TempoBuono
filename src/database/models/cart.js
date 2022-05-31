module.exports = (sequelize, dataTypes) => {
  let alias = "Cart";
  let cols = {
    idCart: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    CardQantity: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    CartTotal: {
      type: dataTypes.FLOAT,
      allowNull: false,
    },
    CartDate: {
      type: dataTypes.DATE,
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
    tableName: "Cart",
    timestamps: true,
  };
  const Cart = sequelize.define(alias, cols, config);
  Cart.associate = function (models) {
    Cart.belongsTo(models.Users, {
      as: "users",
      foreignKey: "idCart",
    }),
    Cart.belongsToMany(models.products, {
      as: "products",
      through: "Cart_has_products",
      foreignKey: "idCart",
      otherKey: "idProd",
      timestamps: false,
    });
  };
  return Cart;
};
