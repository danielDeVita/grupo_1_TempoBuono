module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
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
    const Users = sequelize.define(alias, cols, config);
    Users.associate = function (models) {
        Users.hasMany(models.usersCategory, {
            as: "usersCategory",
            foreignKey: "idUsers"
        })
        Users.belongsTo(models.cart, {
            as: "cart",
            foreignKey: "idCart"
        })
    }
    return Users;
}