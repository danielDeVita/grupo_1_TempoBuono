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
        /* createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }, */
    };
    let config = {
        tableName: "productsCategory",
        timestamps: false,
    };
    const productsCategory = sequelize.define(alias, cols, config);
    productsCategory.associate = function (models) {
        productsCategory.hasMany(models.products, { //ok
            as: "products",
            foreignKey: "productsCategory_idproductsCategory"
        })
    }
    return productsCategory;
}

