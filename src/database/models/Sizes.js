module.exports = (sequelize, dataTypes) => {
    let alias = "Sizes"
    let cols = {
        size_id: {
            type: dataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        size_name: {
            type: dataTypes.STRING(15),
            allowNull: false,
        }
    };
    let config = {
        tableName: "sizes",
        timestamps: false
    };

    const Sizes = sequelize.define(alias, cols, config);

    return Sizes;
}