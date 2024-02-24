import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext.jsx'
import Header from '../Header.jsx'


const DetalleProducto = props => {
  const { total, setTotal, productos, carro, setCarro } = useContext(MyContext)
    const { id } = useParams();
  return (
    <>
    <Header />
    </>
  )
}



export default DetalleProducto