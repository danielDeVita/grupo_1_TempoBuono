module.exports = (sequelize, dataTypes) => {
    let alias = "users";
    let cols = {
        idUsers: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        UsersNombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        UsersEmail: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        UsersPasswd: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
    };
    let config = {
        tableName: "users",
        timestamps: true
    };
    const users = sequelize.define(alias, cols, config);
    users.associate = function (models) {
        users.hasMany(models.usersCategory, {
            as: "usersCategory",
            foreignKey: "idUsers"
        })
        users.belongsTo(models.cart, {
            as: "cart",
            foreignKey: "idCart"
        })
    }
    return Users;
}