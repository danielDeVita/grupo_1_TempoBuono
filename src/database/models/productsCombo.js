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
  //aca van las relaciones productsCombo.associate
  return productsCombo;
};
