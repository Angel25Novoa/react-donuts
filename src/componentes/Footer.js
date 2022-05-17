import React from 'react'
import { Fondo } from '../elementos/Formularios'

const Footer = () => {
  return (
    <Fondo>
        <div className='footer-content'>
          <h4>Instagram </h4>
          <h4>Twitter</h4>
          <h4>Facebook </h4>
        </div>
        <div className='footer-content'>
          <h4>Contacto</h4>
          <h4>mail@mail.com</h4>
          <h4>+64 17654321154</h4>
        </div>
        <div className='footer-content'>
          <h4>Acerca de Nosotros</h4>
          <h4>Trabaja con nosotros</h4>
          <h4>Legal</h4>
        </div>
    </Fondo>
  )
}

export default Footer