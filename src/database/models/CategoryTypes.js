module.exports = (sequelize, dataTypes) => {
    let alias = "CategoryTypes"
    let cols = {
        category_type_id: {
            type: dataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        category_type_name: {
            type: dataTypes.STRING(15),
            allowNull: false,
        }
    };
    let config = {
        tableName: "category_types",
        timestamps: false
    };

    const CategoryTypes = sequelize.define(alias, cols, config);

    return CategoryTypes;
}