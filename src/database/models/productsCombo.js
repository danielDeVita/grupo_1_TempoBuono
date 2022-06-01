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
    createdAt: {
      type: dataTypes.DATE
    },
    updatedAt: {
      type: dataTypes.DATE
    },
  };
  let config = {
    tableName: "productsCombo",
    timestamps: true,
  };
  const productsCombo = sequelize.define(alias, cols, config);
  productsCombo.associate = function (models) {
    productsCombo.belongsToMany(models.products, { //ok
      as: "products",
      through: "products_has_productsCombo",
      foreignKey: "productsCombo_idproductsCombo",
      otherKey: "products_idProd",
      timestamps: false
    })
  }
  return productsCombo;
};
