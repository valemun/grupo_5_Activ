import React from 'react';
import LastProductInDb from './LastProductInDb';
import Categorias from './Categorias';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Ultimo producto -->*/}
            <LastProductInDb />
            {/*<!-- End content row Ultimo producto -->*/}

            {/*<!-- Categorias en base de datos -->*/}
            <Categorias />

        </div>
    )
}

export default ContentRowCenter;