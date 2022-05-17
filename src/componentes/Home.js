import React from 'react'
import MapContainer from './MapView'
import dona from '../recursos/Dona.png';
import {Logo} from '../elementos/Formularios';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <div>
        <Logo><img src={dona} alt='logo'/></Logo>
        <h1>Doubt-nuts</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quia, doloribus quo voluptatem repellat officiis unde beatae! In eos rem voluptatibus deserunt maiores maxime reprehenderit, sunt, atque quia repellat iste.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quia, doloribus quo voluptatem repellat officiis unde beatae! In eos rem voluptatibus deserunt maiores maxime reprehenderit, sunt, atque quia repellat iste.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quia, doloribus quo voluptatem repellat officiis unde beatae! In eos rem voluptatibus deserunt maiores maxime reprehenderit, sunt, atque quia repellat iste.</p>
      </div>
      <MapContainer />
      <Footer />
    </div>
  )
}

export default Home
