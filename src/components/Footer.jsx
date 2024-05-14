import React from 'react'
import imgFooter from '../img/clientes.png'

const Footer = () => {
  return (
    <div>
        <div className='card-body'>
            <h5 className='card-title'>Direccion Calle falsa 123</h5>
            <p className='card-text'>correo pruebaproyecto@gmai.com - telefono 7111111 - 3007111111</p>
            <img src={imgFooter} alt="Imagen Footer" />
        </div>
        <div className='card-footer text-muted'>
            Lunes-viernes horario 8am-6pm
        </div>
    </div>
  )
}

export default Footer