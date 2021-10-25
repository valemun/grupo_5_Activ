module.exports = (sequelize, dataTypes) => {
    let alias = "UserTypes"
    let cols = {
        user_type_id: {
            type: dataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        user_type_name: {
            type: dataTypes.STRING(15),
            allowNull: false,
        }
    };
    let config = {
        tableName: "user_types",
        timestamps: false
    };

    const UserTypes = sequelize.define(alias, cols, config);

    UserTypes.associate = function(models){

        UserTypes.hasMany(models.Users, {
            as: "users_info",
            foreignKey: "user_type"
        });
        
    }

    return UserTypes;
}