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

    Colors.associate = function(models){

        Colors.belongsToMany(models.Products, {
            as: "color_products",
            through: "product_colors",
            foreignKey: "color_id",
            otherKey: "product_id",
            timestamps: false
        });
        
    }

    return Colors;
}