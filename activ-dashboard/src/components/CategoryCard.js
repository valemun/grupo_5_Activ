import React from "react";

function CategoryCard(props) {
  return (
        <div className="col-lg-8 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    <b>{props.category_name}</b>
                    <p className="total-p">Total de productos: {props.category_total}</p>
                </div>
              </div>
        </div>
  );
}

export default CategoryCard;
