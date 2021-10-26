import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */


function ContentRowTotals(){

    const [productData, setProduct] = useState([]);

    const productAPI = async () => {
		const url = "http://127.0.0.1:3001/api/products";
		const products = await fetch(url);
		const productJSON = await products.json();
		setProduct(productJSON.meta);
	};

    const [categoryData, setCategory] = useState([]);

    const categoryAPI = async () => {
		const url = "http://127.0.0.1:3001/api/products";
		const category = await fetch(url);
		const categoryJSON = await category.json();
		setCategory(categoryJSON.categories);
	};

    const [userData, setUser] = useState([]);

    const userAPI = async () => {
		const url = "http://127.0.0.1:3001/api/users";
		const users = await fetch(url);
		const usersJSON = await users.json();
		setUser(usersJSON.meta);
	};

    useEffect(() => {
        productAPI();
        categoryAPI();
        userAPI();
    }, [])

    /* <!-- TOTALES --> */

    let productTotal = {
        title: 'Total de productos',
        color: 'purple', 
        cuantity: productData.total,
        icon: 'fa-clipboard-list'
    }

    let userTotal = {
        title:'Total de usuarios', 
        color:'success', 
        cuantity: userData.total,
        icon:'fa-users'
    }

    let categoryTotal = {
        title:'Total de categorias' ,
        color:'orange',
        cuantity: categoryData.categories_total,
        icon:'fa-check-square'
    }

    let cartProps = []

    if(productTotal == null || userData == null || categoryData == null){
        cartProps = [{
            title: 'Total de productos',
            color: 'purple', 
            cuantity: "-",
            icon: 'fa-clipboard-list'
        }, {
            title:'Total de usuarios', 
            color:'success', 
            cuantity: "-",
            icon:'fa-users'
        },{
            title:'Total de categorias' ,
            color:'orange',
            cuantity:'-',
            icon:'fa-check-square'
        }
    ];
    }
    else{
        cartProps = [productTotal, userTotal, categoryTotal];
    }

    

    return (
    
        <div className="row">
            
            {cartProps.map( (total, i) => {

                return <SmallCard {...total} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowTotals;