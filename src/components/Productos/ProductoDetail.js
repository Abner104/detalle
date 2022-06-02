import { Button } from 'bootstrap';
import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../Data';

const ProductoDetail = () => {
    const proid = useParams();
    const proDetail = Data.filter(x=>x.id === proid.id)
    const producto = proDetail[0];
    console.log(producto);

    

    return (
        <>

        <div className="container">
            <div className="row">
                <img src={producto.image} alt={producto.title}/>
            </div>
            <div className="col-md-6">
                <h1>{producto.title}</h1>
                <hr/>
                <h2>{producto.price}</h2>
                <p>{producto.category}</p>
                <Button className="btn btn-outline-primary">AGREGAR</Button>
            </div>

        </div>








        </>
    )
}

export default ProductoDetail