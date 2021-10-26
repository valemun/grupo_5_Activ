import React, { useState, useEffect } from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama','Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        Awards: 3
    },
    
]


function Chart (){

    const [productListData, setProductList] = useState([]);

    const productListAPI = async () => {
		const url = "http://127.0.0.1:3001/api/products";
		const productList = await fetch(url);
		const productListJSON = await productList.json();
		setProductList(productListJSON.data);
	};

    useEffect(() => {
        productListAPI();
    }, [])

    console.log(productListData);

    let productListInfo = []

    if(productListData == null){
        productListInfo = [];
    }
    else{
        productListInfo = productListData;
    }

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripcion</th>
                                <th>Categoria</th>
                                <th>Tipo</th>
                                <th>Imagen</th>
                                <th>Thumbnail</th>
                                <th>Detalles</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripcion</th>
                                <th>Categoria</th>
                                <th>Tipo</th>
                                <th>Imagen</th>
                                <th>Thumbnail</th>
                                <th>Detalles</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            productListInfo.map( ( product , i) => {
                                return <ChartRow { ...product} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;