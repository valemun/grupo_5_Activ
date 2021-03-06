module.exports = (sequelize, dataTypes) => {
    let alias = "Categories"
    let cols = {
        category_id: {
            type: dataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        category_name: {
            type: dataTypes.STRING(15),
            allowNull: false,
        }
    };
    let config = {
        tableName: "categories",
        timestamps: false
    };

    const Categories = sequelize.define(alias, cols, config);

    Categories.associate = function(models){

        Categories.hasMany(models.Products, {
            as: "products_info",
            foreignKey: "product_category"
        });
        
    }

    return Categories;
}