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
    /* createdAt: {
      type: dataTypes.DATE
    },
    updatedAt: {
      type: dataTypes.DATE
    }, */
  };
  let config = {
    tableName: "Cart",
    timestamps: false,
  };
  const Cart = sequelize.define(alias, cols, config);
  Cart.associate = function (models) {
    Cart.belongsTo(models.Users, { //ok
      as: "users",
      foreignKey: "users_idUsers",
    }),
    Cart.belongsToMany(models.products, { //ok
      as: "products",
      through: "Cart_has_products",
      foreignKey: "Cart_idCart",
      otherKey: "products_idProd",
      timestamps: false,
    });
  };
  return Cart;
};
