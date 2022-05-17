import React from 'react';
import useAxios from '../helpers/useAxios';

const Reservaciones = (data) => {
  const url = 'http://localhost:5000/reserves'
  useAxios(url)
  return (<h1>Reservaciones</h1>)
  // return (
  //   <>
  //   <h1>Aquí puedes ver tu reservación</h1>
  //   <hr />
  //   <h1>Reservaciones</h1>
  //   <ul>
  //     {
  //       data.data.map(item => {
  //         console.log('------>',item)
  //         return (
  //           <li className='reservation' key={item.id}>
  //             <h4>{item.fecha}</h4>
  //             <p>{item.email}</p>
  //             <p>{item.telefono}</p>
  //             <p>{item.nombre}</p>
  //           </li>
  //         )
  //       })
  //     }
  //   </ul>
  //   </>
  // )
}

export default Reservaciones