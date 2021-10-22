module.exports = (sequelize, dataTypes) => {
    let alias = "ProductColors"
    let cols = {
        product_color_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        product_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        color_id: {
            type: dataTypes.TINYINT.UNSIGNED,
            allowNull: false,
        }
    };
    let config = {
        tableName: "product_colors",
        timestamps: false
    };

    const ProductColors = sequelize.define(alias, cols, config);

    return ProductColors;
}