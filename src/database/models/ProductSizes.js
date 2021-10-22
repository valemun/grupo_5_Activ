module.exports = (sequelize, dataTypes) => {
    let alias = "ProductSizes"
    let cols = {
        product_size_id: {
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
        size_id: {
            type: dataTypes.TINYINT.UNSIGNED,
            allowNull: false,
        }
    };
    let config = {
        tableName: "product_sizes",
        timestamps: false
    };

    const ProductSizes = sequelize.define(alias, cols, config);

    return ProductSizes;
}