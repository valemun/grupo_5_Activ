module.exports = (sequelize, dataTypes) => {
    let alias = "Products"
    let cols = {
        product_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        product_name: {
            type: dataTypes.STRING(30),
            allowNull: false,
        },
        product_price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        product_type: {
            type: dataTypes.TINYINT.UNSIGNED,
            allowNull: false,
        },
        product_category: {
            type: dataTypes.TINYINT.UNSIGNED,
            allowNull: false,
        },
        product_image: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        product_thumbnail: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        product_alt: {
            type: dataTypes.STRING(25),
            allowNull: false,
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    };

    const Products = sequelize.define(alias, cols, config);

    return Products;
}