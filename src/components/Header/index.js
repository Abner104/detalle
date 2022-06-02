import React from 'react'


const Header = () => {




  return (
   <header>
     <a href="#">
       <div className="logo">
         <img src="logoFIN.png" alt="" width="150px" />
       </div>
     </a>
     <ul>
       <li>
         <a href="/inicio">INICIO</a>
       </li>
       <li>
         <a href="/productos">PRODUCTOS</a>
       </li>
       <li>
         <a href="/info">Info</a>
       </li>
       <li>
         <a href="/contacto">Contacto</a>
       </li>
     </ul>
     <div className="cart">
       <box-icon name="cart"></box-icon>
       <span className="item__total">0</span>
     </div>

   </header>
  )
}

export default Header