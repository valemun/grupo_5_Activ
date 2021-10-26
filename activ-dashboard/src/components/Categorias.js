import React, { useState, useEffect } from 'react';
import CategoryCard from "./CategoryCard";

function Categorias() {

  const [categoriesData, setCategories] = useState([]);

  const categoriesAPI = async () => {
		const url = "http://127.0.0.1:3001/api/products";
		const categories = await fetch(url);
		const categoriesJSON = await categories.json();
		setCategories(categoriesJSON.categories.categories_info);
	};

  useEffect(() => {
    categoriesAPI();
  }, [])

  let categoriesDataInfo = []

    if(categoriesData == null){
      categoriesDataInfo = [];
    }
    else{
      categoriesDataInfo = categoriesData;
    }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias de producto
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

          {categoriesDataInfo.map( (category, i) => {

            return <CategoryCard {...category} key={i}/>

            })}
          

          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;
