import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MyContext } from './components/context/MyContext'
import HomePage from './components/pages/HomePage'
import Carrito from './components/pages/Carrito'
import Checkout from './components/pages/Checkout'
import DetalleProducto from './components/pages/DetalleProducto'

function App() {
  const [total, setTotal] = useState(0)
  const [totalOrder, setTotalOrder] = useState(0)
  const [productos, setProductos] = useState([])
  const [carro, setCarro] = useState([])
  const [orderProducts, setOrderProducts] = useState([])
  const [open, setOpen] = useState(false)

  return (
    <>

    <MyContext.Provider value={{ total, setTotal, productos, setProductos, carro, setCarro, orderProducts, setOrderProducts, totalOrder, setTotalOrder, open, setOpen }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Producto/:id" element={<DetalleProducto />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </MyContext.Provider>    
      
    </>
  )
}

export default App
