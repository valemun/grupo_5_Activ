import React, { useState, useEffect } from 'react';
import imagenFondo from '../assets/images/product-placeholder.jpg';

function LastProductInDb(){

    const [lastProductData, setLastProduct] = useState([]);

    const lastProductAPI = async () => {
		const url = "http://127.0.0.1:3001/api/products/last";
		const lastProduct = await fetch(url);
		const lastProductJSON = await lastProduct.json();
		setLastProduct(lastProductJSON.data);
	};

    useEffect(() => {
        lastProductAPI();
    }, [])

    let lastProductInfo = {};

    if(lastProductInfo != null){
        lastProductInfo = {
            nombre: lastProductData.product_name,
            precio: lastProductData.product_price, 
            desc: lastProductData.product_desc,
            image: lastProductData.product_thumbnail
        }
    }
    else{
        lastProductInfo = {
            nombre: "-",
            precio: "-", 
            desc: "-",
            image: "-"
        }
    }

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                </div>
                <div className="card-body text-center">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p><b>Nombre:</b> {lastProductInfo.nombre}</p>
                    <p><b>Precio:</b> {lastProductInfo.precio}</p>
                    <p><b>Descripción:</b> {lastProductInfo.desc}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalles del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
