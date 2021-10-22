module.exports = (sequelize, dataTypes) => {
    let alias = "CartProducts"
    let cols = {
        cart_product_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        cart_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        product_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        cart_product_size: {
            type: dataTypes.STRING(15),
            allowNull: false,
        },
        cart_product_color: {
            type: dataTypes.STRING(15),
            allowNull: false,
        },
        cart_product_cuantity: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    };
    let config = {
        tableName: "cart_products",
        timestamps: false
    };

    const CartProducts = sequelize.define(alias, cols, config);

    return CartProducts;
}