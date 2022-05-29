module.exports = (sequelize, dataTypes) => {
    let alias = "usersCategory";
    let cols = {
        idusersCategory: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        usersCategoryDesc: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        usersCategoryNombre: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
    };
    let config = {
        tableName: "usersCategory",
        timestamps: true,
    };
    const usersCategory = sequelize.define(alias, cols, config);
    usersCategory.associate = function (models) {
        usersCategory.belongsTo(models.users, {
            as: "users",
            foreignKey: "idUsers"
        })
    }
    return usersCategory;
};