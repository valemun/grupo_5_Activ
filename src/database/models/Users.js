module.exports = (sequelize, dataTypes) => {
    let alias = "Users"
    let cols = {
        user_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        user_type: {
            type: dataTypes.TINYINT.UNSIGNED,
            allowNull: false,
        },
        user_firstname: {
            type: dataTypes.STRING(20),
            allowNull: false,
        },
        user_lastname: {
            type: dataTypes.STRING(20),
            allowNull: false,
        },
        user_email: {
            type: dataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        user_password: {
            type: dataTypes.STRING(150),
            allowNull: false,
        },
        user_dob: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        user_avatar: {
            type: dataTypes.STRING(100),
            allowNull: false,
        }
    };
    let config = {
        tableName: "users",
        timestamps: false
    };

    const Users = sequelize.define(alias, cols, config);

    return Users;
}