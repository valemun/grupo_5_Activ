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
        product_desc: {
            type: dataTypes.STRING(50),
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

    Products.associate = function(models){

        Products.belongsTo(models.Categories, {
            as: "product_category_info",
            foreignKey: "product_category"
        });

        Products.belongsTo(models.CategoryTypes, {
            as: "product_type_info",
            foreignKey: "product_type"
        });

        Products.belongsToMany(models.Sizes, {
            as: "product_sizes_info",
            through: "product_sizes",
            foreignKey: "product_id",
            otherKey: "size_id",
            timestamps: false
        });

        Products.belongsToMany(models.Colors, {
            as: "product_colors_info",
            through: "product_colors",
            foreignKey: "product_id",
            otherKey: "color_id",
            timestamps: false
        });

        Products.belongsToMany(models.Carts, {
            as: "product_cart_info",
            through: "cart_products",
            foreignKey: "product_id",
            otherKey: "cart_id",
            timestamps: false
        });
        
    }

    return Products;
}