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
        }
    };
    let config = {
        tableName: "productsImages",
        timestamps: true,
    };
    const productsImages = sequelize.define(alias, cols, config);
    //aca van las relaciones productsImages.associate
    return productsImages;
};