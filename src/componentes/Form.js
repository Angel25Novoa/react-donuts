import React, {useState} from 'react'
import axios from 'axios'
import {
  Formulario, 
  Label, 
  ContenedorTerminos, 
  ContBotonCent, 
  Boton, 
  MsgExito, 
  MsgError,
  Logo
} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from './ComponenteInput';
import dona from '../recursos/Dona.png';
import Footer from './Footer';

const Form = () => {

  const [nombre, cambiarNombre] = useState({campo: '', valido: null})
  const [email, cambiarEmail] = useState({campo: '', valido: null})
  const [telefono, cambiarTelefono] = useState({campo: '', valido: null})
  const [fecha, cambiarFecha] = useState({campo: '', valido: null})
  const [terminos, cambiarTerminos] = useState(true)
  const [exito, cambiarExito] = useState(null)

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked)
  }

  const handleSubmit = (e) => {
    const dfcampo = {
        nombre: nombre.campo,
        email: email.campo,
        telefono: telefono.campo,
        fecha: fecha.campo
    };
    console.log(dfcampo);
    axios.post('http://localhost:5000/reserves', dfcampo)
    .then(res => res.json())
    .then(res => {
        alert('Tu reservacion esta hecha!')
    })
    .catch(err => {
      console.log(err);
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(nombre.valido === 'true' && 
    email.valido === 'true' && 
    telefono.valido === 'true' && 
    terminos === true){
    cambiarExito(true)
    cambiarNombre({campo: '', valido: null})
    cambiarEmail({campo: '', valido: null})
    cambiarTerminos({campo: '', valido: null})
    cambiarTelefono({campo: '', valido: null})
    handleSubmit()
    } else {
      cambiarExito(false)
    }
  }

  return (
    <>
    <Logo><img src={dona} alt='logo'/></Logo>
    <Formulario action="" onSubmit={onSubmit}>
      <ComponenteInput 
      estado={nombre}
      cambiarEstado={cambiarNombre}
      tipo="text"
      label="Nombre"
      placeholder ="Ingresa tu nombre completo"
      name="usuario"
      leyendaError=""
      expresionRegular={expresiones.nombre}
      />
      <ComponenteInput 
      estado={email}
      cambiarEstado={cambiarEmail}
      tipo="email"
      label="Correo electronico"
      placeholder ="correo@correo.com"
      name="usuario"
      leyendaError=""
      expresionRegular={expresiones.correo}
      />
      <ComponenteInput 
      estado={fecha}
      cambiarEstado={cambiarFecha}
      tipo="date"
      label="Fecha de reservacion"
      name="date"
      />
      <ComponenteInput 
      estado={telefono}
      cambiarEstado={cambiarTelefono}
      tipo="phone"
      label="Numero telefonico"
      placeholder ="Ingresa tu nombre completo"
      name="usuario"
      leyendaError=""
      expresionRegular={expresiones.telefono}
      />
      <ContenedorTerminos>
      <Label>
        <input 
        type="checkbox" 
        name="terminos" 
        id="terminos" 
        checked={terminos}
        onChange={onChangeTerminos}
        />
        Acepto los Terminos y Condiciones
      </Label>
      </ContenedorTerminos>
      {exito === false && <MsgError>
      <p>
          <FontAwesomeIcon icon={faExclamationTriangle}/>
          <b>Error:</b>Por favor rellena el formulario correctamente.
      </p> 
      </MsgError>}
      <ContBotonCent>
      <Boton onClick={onSubmit} type="button">Enviar</Boton>
      {exito === true && <MsgExito>Tu reservacion esta hecha!</MsgExito>}
      </ContBotonCent>
    </Formulario>
    <Footer />
  </>
  )
}

export default Form