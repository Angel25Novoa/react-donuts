import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Reserves = () => {
  const [info, setInfo] = useState({})
  const getInfo = async () => {
    const url = 'https://donas-back.herokuapp.com/reserves'
    const resp = await axios.get(url)
    setInfo(resp.data)
  }

  useEffect(() => {
    getInfo()
  }, []);

  const renderReserves = (arr) => {
    if(Array.isArray(arr)){
      return arr.map((item) => {
        // console.log(item)
        return (
          <li className='donuts-reserves' key={item.id}>
            <p>{item.nombre}</p>
            <p>{item.email}</p>
            <p>{item.telefono}</p>
            <h4>{item.fecha}</h4>
          </li>
        )
      })
    } else {
      return(<h4>Aún no hay reservaciones</h4>)
    }
  }

  return (
    <div className="App">
      <h1>Aquí puedes ver tus reservaciones</h1>
      <hr />
      <div className="App-header">
        <button className='reserv-button' onClick={getInfo}>Ver reservaciones</button>
        <ul className='donuts-reserves-container'>
          {renderReserves(info.data)}
        </ul>
      </div>
    </div>
  );
}

export default Reserves;