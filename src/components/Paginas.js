import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Inicio from './Inicio'
import ProductosLista from './Productos'
import ProductoDetail from './Productos/ProductoDetail'


const Paginas = () => {
  return (
    <section>
      <BrowserRouter>
      <Routes>
        <Route exact path="/inicio" element={<Inicio/>} />
        <Route exact path="/productos" element={<ProductosLista/>} />
        <Route exact path="/productos/:id" element={<ProductoDetail/>} />
      </Routes>
      </BrowserRouter>

    </section>
  )
}

export default Paginas