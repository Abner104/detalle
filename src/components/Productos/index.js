import React from 'react'
import { NavLink } from 'react-router-dom';
import Data from '../../Data';

const ProductosLista = () => {
  const cardItem = (item) =>{
    return(
      <div className="producto" key={item.id}>
      <NavLink to="#">
        <div className="producto__img">
          <img src={item.image} alt="" />
        </div>
      </NavLink>
      <div className="producto__footer">
        <h1> {item.title} </h1>
        <p> {item.category} </p>
        <p className="price">${item.price}</p>
      </div>
      <div className="buttom">
        <button className="btn">
          Añadir al carrito
        </button>
        <div>
          <NavLink to={`/producto/${item.id}`} className="btn">
            Vista
          </NavLink>
        </div>
        
      </div>
    </div>
    )
  }


  return (
    <>

      <h1 className="title">Productos</h1>

      <div className="productos">
      {Data.map(cardItem)}
       
      </div>





    </>






  );
};

export default ProductosLista