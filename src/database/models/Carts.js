module.exports = (sequelize, dataTypes) => {
    let alias = "Carts"
    let cols = {
        cart_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        user_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        cart_numitems: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        cart_totalprice: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false,
        }
    };
    let config = {
        tableName: "carts",
        timestamps: false
    };

    const Carts = sequelize.define(alias, cols, config);

    return Carts;
}