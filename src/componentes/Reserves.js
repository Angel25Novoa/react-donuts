import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Reserves = () => {
  const [info, setInfo] = useState({})
  const getInfo = async () => {
    const url = 'http://localhost:5010/reserves'
    const resp = await axios.get(url)
    setInfo(resp.data)
    // console.log(resp.data.data)
    // const items = resp.data.data
    // const renderReserves = (arr) => {
    //   if(Array.isArray(arr)){
    //   arr.map((item) => {
    //     console.log(item)
    //     return (
    //       <li key={item.id}>
    //         <p>{item.nombre}</p>
    //         <p>{item.email}</p>
    //         <p>{item.telefono}</p>
    //         <p>{item.fecha}</p>
    //       </li>
    //     )
    //   })
    //   } else {
    //     return(<h4>Aún no hay reservaciones</h4>)
    //   }
    // }
    // renderReserves(items)
  }

  useEffect(() => {
    getInfo()
  }, []);

  const renderReserves = (arr) => {
    if(Array.isArray(arr)){
      return arr.map((item) => {
        // console.log(item)
        return (
          <li key={item.id}>
            <p>{item.nombre}</p>
            <p>{item.email}</p>
            <p>{item.telefono}</p>
            <p>{item.fecha}</p>
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
        <ul>
          
            {console.log('------->',info.data)}
            {renderReserves(info.data)}
          
        </ul>
      </div>
    </div>
  );
}

export default Reserves;