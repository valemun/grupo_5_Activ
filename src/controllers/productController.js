const path = require( "path" );
const fs = require( "fs" );
let productos = require( "../data/product.json" );
let reviews = require( "../data/reviews.json" );
let productDetails = {
    categorias: ["Unisex", "Mujeres", "Hombres"],
    tipos: ["Ropa", "Tenis", "Accesorios"],
    tallas: ["XS", "S", "M", "L", "XL"],
    colores: ["Azul", "Verde", "Amarillo", "Naranja", "Rosa", "Rojo", "Morado", "Negro", "Blanco"]
};

//Controlador productos

const controller = {

    list: (req, res) => {
        res.render( "products/productList", {"productos":productos} );
    },

    new: (req, res) => {
        res.render( "products/productCreate",  {"detalles":productDetails} );
    },

    create: (req, res) => {

        let newId = 0;
        newId = productos[productos.length-1].id + 1;

        let producto = {
            id: newId,
            nombre: req.body.nombre,
            desc: req.body.desc,
            precio: req.body.precio,
            thumbnail: "/images/product-placeholder.jpg",
            categoria: req.body.categoria,
            tipo: req.body.tipo,
            mainPic: "/images/product-leggins.jpg",
            sidePic: "/images/product-leggins.jpg",
            alt: req.body.alt,
            tamano: req.body.talla,
            color: req.body.color,
        }

        productos.push(producto);

        let productosJSON = JSON.stringify(productos);

        fs.writeFileSync(path.resolve( "src/data/product.json" ), productosJSON);

        res.redirect( "products/");
    },

    detail: (req, res) => {

        let id = req.params.id;

        let producto = productos.find((producto) => {
            return producto.id == id
        })

        res.render( "products/productDetail",  {"producto":producto, "productos":productos, "review":reviews} );
    },

    edit: (req, res) => {
        let id = req.params.id;

        let producto = productos.find((producto) => {
            return producto.id == id
        })

        res.render( "products/productEdit",  {"producto":producto, "detalles": productDetails} )
    },

    update: (req, res) => {
        let id = req.params.id;
        
        productos.forEach( producto => {
            if(producto.id == id){
                producto.nombre = req.body.nombre;
                producto.desc = req.body.desc;
                producto.precio = req.body.precio;
                producto.thumbnail = "/images/product-placeholder.jpg";
                producto.categoria = req.body.categoria;
                producto.tipo = req.body.tipo;
                producto.mainPic = "/images/product-leggins.jpg";
                producto.sidePic = "/images/product-leggins.jpg";
                producto.alt = req.body.alt;
                producto.tamano = req.body.talla;
                producto.color = req.body.color;
            }}
        )

        let productosJSON = JSON.stringify(productos);

        fs.writeFileSync(path.resolve( "src/data/product.json" ), productosJSON);
        
        res.redirect( "/products/"+id);
    },
    
    delete: (req, res) => {
        let id = req.params.id;

        productos = productos.filter(
            producto => {
                if(producto.id != id){
                    return producto;

        }})

        let productosJSON = JSON.stringify(productos);

        fs.writeFileSync(path.resolve( "src/data/product.json" ), productosJSON);

        res.redirect( "/products/");
    }
}

module.exports = controller;