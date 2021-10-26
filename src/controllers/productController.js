const path = require( "path" );
const fs = require( "fs" );
const db = require("../database/models");
const Op = db.Sequelize.Op;
let reviews = require( "../data/reviews.json" );
const { sequelize } = require("../database/models");
const { validationResult } = require( "express-validator" );


//Controlador productos

const controller = {

    list: (req, res) => {

        if(req.query.query != undefined && req.query.query != ""){

            db.Products.findAll({
                where: {
                    product_name: {[Op.like]: "%"+req.query.query+"%"}
                }
            })
            .then((productos) => {

            res.render( "products/productList", {"productos":productos} );

        });

        }else if(req.query.type != undefined && req.query.type != ""){

            db.Products.findAll({include: [
                {model: db.CategoryTypes, as: "product_type_info"}
                ]
            })
            .then((productos) => {

            let productsCategory = productos.filter((product) => {
                return product.product_type_info.category_type_name == req.query.type
            })
            
            res.render( "products/productList", {"productos":productsCategory} );

        });
        } else{

            db.Products.findAll()
            .then((productos) => {

            res.render( "products/productList", {"productos":productos} );

        });

        }
        
    },

    new: (req, res) => {

        db.Categories.findAll()
            .then((categorias) => {

                db.CategoryTypes.findAll()
                .then((tipos) => {
                    
                    db.Sizes.findAll()
                    .then((tallas) => {
                        
                        db.Colors.findAll()
                        .then((colores) => {

                            res.render( "products/productCreate",  {"categorias":categorias, "tipos":tipos, "tallas":tallas, "colores": colores} )

                        })

                    })

                })

            })
        
    },

    create: (req, res) => {

        let errores = validationResult(req);

        if(!errores.isEmpty()){

            db.Categories.findAll()
            .then((categorias) => {

                db.CategoryTypes.findAll()
                .then((tipos) => {
                    
                    db.Sizes.findAll()
                    .then((tallas) => {
                        
                        db.Colors.findAll()
                        .then((colores) => {

                            res.render( "products/productCreate",  {"categorias":categorias, "tipos":tipos, "tallas":tallas, "colores": colores, "errores": errores.mapped(), "old":req.body})

                        })

                    })

                })

            })

        }
        else{

        db.Products.create({

            product_name: req.body.nombre,
            product_price: req.body.precio,
            product_desc: req.body.desc,
            product_category: req.body.categoria,
            product_type: req.body.tipo,
            product_image: "/images/product-leggins.jpg",
            product_thumbnail: "/images/product-placeholder.jpg",
            product_alt: req.body.alt

        })
        .then((product) => {

            const saveTallayColor = async() => {

                for(i=0; i<req.body.talla.length; i++){
                    db.ProductSizes.create({
                        product_id: product.product_id,
                        size_id: req.body.talla[i]
                    })
                }
                
                for(i=0; i<req.body.color.length; i++){
                    db.ProductColors.create({
                        product_id: product.product_id,
                        color_id: req.body.color[i]
                    })
                }

                return true;
            }

            saveTallayColor().then((response) => {
                res.redirect( "/products/");
            })

        })

        }
        
    },

    detail: (req, res) => {

        let id = req.params.id;

        db.Products.findByPk(id, {
            include: [
                {model: db.Categories, as: "product_category_info"},
                {model: db.CategoryTypes, as: "product_type_info"}, 
                {model: db.Sizes, as: "product_sizes_info"},
                {model: db.Colors, as: "product_colors_info"}  
        ]})
        .then((producto) => {

            db.Products.findAll()
            .then((productos) => {

            res.render( "products/productDetail",  {"producto":producto, "productos":productos, "review":reviews} );

        });

        });
    },

    edit: (req, res) => {

        let id = req.params.id;

        db.Products.findByPk(id, {
            include: [
                {model: db.Categories, as: "product_category_info"},
                {model: db.CategoryTypes, as: "product_type_info"}, 
                {model: db.Sizes, as: "product_sizes_info"},
                {model: db.Colors, as: "product_colors_info"}  
        ]})
        .then((producto) => {

            db.Categories.findAll()
            .then((categorias) => {

                db.CategoryTypes.findAll()
                .then((tipos) => {
                    
                    db.Sizes.findAll()
                    .then((tallas) => {
                        
                        db.Colors.findAll()
                        .then((colores) => {

                            res.render( "products/productEdit",  {"producto":producto, "categorias":categorias, "tipos":tipos, "tallas":tallas, "colores": colores} )

                        })

                    })

                })

            })

        });
    },

    update: (req, res) => {

        db.Products.update({

            product_name: req.body.nombre,
            product_price: req.body.precio,
            product_desc: req.body.desc,
            product_category: req.body.categoria,
            product_type: req.body.tipo,
            product_image: "/images/product-leggins.jpg",
            product_thumbnail: "/images/product-placeholder.jpg",
            product_alt: req.body.alt

        },
        {
            where: {
                product_id: req.params.id
            }
        })
        .then((product) => {
            
        
            db.CartProducts.destroy({
                where: {
                    product_id: req.params.id
                }
            })
            .then(() => {
    
                db.ProductSizes.destroy({
                    where: {
                        product_id: req.params.id
                    }
                })
                .then(() => {
    
                    db.ProductColors.destroy({
                        where: {
                            product_id: req.params.id
                        }
                    })
                    .then(() => {

                        const saveTallayColor = async() => {

                            for(i=0; i<req.body.talla.length; i++){
                                db.ProductSizes.create({
                                    product_id: req.params.id,
                                    size_id: req.body.talla[i]
                                })
                            }
                            
                            for(i=0; i<req.body.color.length; i++){
                                db.ProductColors.create({
                                    product_id: req.params.id,
                                    color_id: req.body.color[i]
                                })
                            }

                            return true;
                        }

                        saveTallayColor().then((response) => {
                            res.redirect( "/products/"+req.params.id);
                        })
                        
                    })
    
                })
    
            })
    
        })
        
    },
 
    delete: (req, res) => {

        db.CartProducts.destroy({
            where: {
                product_id: req.params.id
            }
        })
        .then(() => {

            db.ProductSizes.destroy({
                where: {
                    product_id: req.params.id
                }
            })
            .then(() => {

                db.ProductColors.destroy({
                    where: {
                        product_id: req.params.id
                    }
                })
                .then(() => {

                    db.Products.destroy({
                        where: {
                            product_id: req.params.id
                        }
                    })
                    .then(() => {
                        
                        res.redirect( "/products/");

                    })

                })

            })

        })

    }
}

module.exports = controller;