import React from 'react';
import response from '../helpers/useAxios';

// response.then(data => {
//   console.log('data',data)
// })

const Reservaciones = (data) => {
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