import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.product_id}</td>
                    <td>{props.product_name}</td>
                    <td>{props.product_price}</td>
                    <td>{props.product_desc}</td>
                    <td>{props.product_category_info.category_name}</td>
                    <td>{props.product_type_info.category_type_name}</td>
                    <td>{props.product_image}</td>
                    <td>{props.product_thumbnail}</td>
                    <td>{props.product_detail}</td>
                </tr>
            )
    }
    
        

export default ChartRow;