module.exports = (sequelize, dataTypes) => {
    let alias = "productsImages";
    let cols = {
        idproductsImages: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        productsImagesNombre: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        productsImagesDesc: {
            type: dataTypes.STRING(45),
        },
        products_idProd: {
            type: dataTypes.INTEGER,
            foreignKey: true
        } //Asesoria con Fede
        /* createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }, */
    };
    let config = {
        tableName: "productsImages",
        timestamps: false,
    };
    const productsImages = sequelize.define(alias, cols, config);
    productsImages.associate = function (models) {
        productsImages.belongsTo(models.products, { //ok
            as: "products",
            foreignKey: "products_idProd"
        })
    }
    return productsImages;
};