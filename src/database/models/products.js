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
            allowNull: false
        },
        ProductsDescription: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        ProductsPrice: {
            type: dataTypes.FLOAT(255),
            allowNull: false
        },
    };
    let config = {
        tableName: "products",
        timestamps: true
    };
    const products = sequelize.define(alias, cols, config);
    //products.associate = function(models){}
    return products;
}