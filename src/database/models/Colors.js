module.exports = (sequelize, dataTypes) => {
    let alias = "Colors"
    let cols = {
        color_id: {
            type: dataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        color_name: {
            type: dataTypes.STRING(15),
            allowNull: false,
        }
    };
    let config = {
        tableName: "colors",
        timestamps: false
    };

    const Colors = sequelize.define(alias, cols, config);

    return Colors;
}