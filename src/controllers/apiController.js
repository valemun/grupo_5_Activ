const path = require( "path" );
const db = require("../database/models");


const controller = {

    userList: (req, res) => {
        
        db.Users.findAll({
            attributes: ["user_id", "user_type", "user_firstname", "user_lastname", "user_email"]
        })
        .then((users) => {



            return res.status(200).json({

                meta: {
                    status:200,
                    total:users.length,
                    url: "/api/users"
                },
                data: users.map((user) => {
                    return {
                        user_id: user.user_id,
                        user_type: user.user_type,
                        user_firstname: user.user_firstname,
                        user_lastname: user.user_lastname,
                        user_email: user.user_email,
                        user_detail: "/api/users/"+user.user_id
                    }
                })
            })
        });
        
        
    },

    userDetail: (req, res) => {
        
        db.Users.findByPk(req.params.id)
        .then((user) => {

            return res.status(200).json({
                user_id: user.user_id,
                user_type: user.user_type,
                user_firstname: user.user_firstname,
                user_lastname: user.user_lastname,
                user_email: user.user_email,
                user_dob: user.user_dob,
                user_avatar: user.user_avatar,
                user_detail: "/api/users/"+user.user_id
            })

        })
        
    },

    productList: (req, res) => {
        
        db.Products.findAll({
        })
        .then((products) => {

            db.Products.findAll({
                where: {
                    product_category: 1
                }
            }).then((unisex)=>{

                db.Products.findAll({
                    where:{
                        product_category:2
                    }
                }).then((mujeres)=>{

                    db.Products.findAll({
                        where: {
                            product_category:3
                        }
                    }).then((hombres) => {

                        return res.status(200).json({

                            meta: {
                                status:200,
                                total:products.length,
                                url: "/api/products"
                            },
                            categories: {
                                unisex: unisex.length,
                                mujeres: mujeres.length,
                                hombre: hombres.length
                            },
                            data: products.map((product) => {
                                return {
                                    product_id: product.product_id,
                                    product_name: product.product_name,
                                    product_price: product.product_price,
                                    product_desc: product.product_desc,
                                    product_category: product.product_category,
                                    product_type: product.product_type,
                                    product_image: product.product_image,
                                    product_thumbnail: product.product_thumbnail,
                                    product_alt: product.product_alt,
                                    product_detail: "/api/products/"+product.product_id
                                }
                            })
                        })

                    })

                })

            })

        });
        
        
    },

    productDetail: (req, res) => {


        db.Products.findByPk(req.params.id,{
            include: [
                {model: db.Categories, as: "product_category_info"},
                {model: db.CategoryTypes, as: "product_type_info"}, 
                {model: db.Sizes, as: "product_sizes_info"},
                {model: db.Colors, as: "product_colors_info"}  
        ]})
        .then((product) => {
            return res.status(200).json({
                    product_id: product.product_id,
                    product_name: product.product_name,
                    product_price: product.product_price,
                    product_desc: product.product_desc,
                    product_category: product.product_category,
                    product_type: product.product_type,
                    product_image: product.product_image,
                    product_thumbnail: product.product_thumbnail,
                    product_alt: product.product_alt,
                    product_detail: "/api/products/"+product.product_id,
                    product_category_info: product. product_category_info,
                    product_type_info: product. product_type_info,
                    product_sizes_info: product. product_sizes_info,
                    product_colors_info: product. product_colors_info

                })
        });
        
    }
}

module.exports = controller;