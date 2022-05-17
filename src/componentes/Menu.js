import React from 'react'
import { Card, Menus, BotonCompra } from '../elementos/Formularios';
import { menu } from '../helpers/menu'
import Footer from './Footer';

const Menu = () => {
  return (
    <>
      <h1 className='menu-title'>Menú</h1>
      <Menus>
        {
          menu.map(({id, image,nombre, precio}) => (
            <Card key={id}>
              <img src={image} alt={nombre} className='menu-image'/>
              <h2>{nombre}</h2>
              <p>{precio}</p>
              <BotonCompra>Comprar</BotonCompra>
            </Card>
          ))
        }
      </Menus>
      <Footer/>
    </>
  )
}

export default Menu