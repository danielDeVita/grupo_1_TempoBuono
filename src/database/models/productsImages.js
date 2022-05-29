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
    productsImages.associate = function(models){
        productsImages.belongsTo(models.products,{
            as:"products",
            foreignKey:"idProd"
        })
    }
    return productsImages;
};