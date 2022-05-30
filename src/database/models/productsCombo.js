module.exports = (sequelize, dataTypes) => {
  let alias = "productsCombo";
  let cols = {
    idproductsCombo: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    productsComprecio: {
      type: dataTypes.FLOAT,
      allowNull: false,
    },
  };
  let config = {
    tableName: "productsCombo",
    timestamps: true,
  };
  const productsCombo = sequelize.define(alias, cols, config);
  productsCombo.associate = function (models) {
    productsCombo.belongsToMany(models.products, {
      as: "products", 
      through: "products_has_productsCombo",
      foreignKey: "idproductsCombo",
      otherKey: "idProd",
      timestamps: false
    })
  }
  return productsCombo;
};
