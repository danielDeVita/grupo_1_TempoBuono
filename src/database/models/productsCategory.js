module.exports = (sequelize, dataTypes) => {
    let alias = "productsCategory";
    let cols = {
        idproductsCategory: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        productsCategorNombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        productsCategoryDesc: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
    };
    let config = {
        tableName: "productsCategory",
        timestamps: true
    };
    const productsCategory = sequelize.define(alias, cols, config);
    //aca van las relaciones productsCategory.associate
    return productsCategory;
}