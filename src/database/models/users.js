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
    //aca van las relaciones Users.associate
    return Users;
}