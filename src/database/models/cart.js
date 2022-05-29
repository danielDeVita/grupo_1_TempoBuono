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
          allowNull: false
      },
      CartTotal: {
          type: dataTypes.FLOAT,
          allowNull: false
      },
      users_IdUsers: {
          type: dataTypes.INTEGER,
          allowNull: false
      },
      CartDate: {
          type: dataTypes.DATE,
          allowNull: false
      },
  };
  let config = {
      tableName: "Cart",
      timestamps: true
  };
  const Cart = sequelize.define(alias, cols, config);
  //aca van las relaciones Users.associate
  return Cart;
}