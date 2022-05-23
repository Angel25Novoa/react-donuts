import React from 'react';
import{
    Label, 
    GrupoInput, 
    Input, 
    LeyendaError, 
    IconoValidacion, 
} from '../elementos/Formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular}) => {
    const onChange = (e) =>{
        cambiarEstado({...estado, campo: e.target.value, name: e.target.name});
    }

    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'});
            } else {
                cambiarEstado({...estado, valido: 'false'});;
            }
        }
    }

    // const onInputChange = (e) => {
    //     this.setState({ name: e.target.value })
    // }

    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
                <Input type={tipo} 
                placeholder={placeholder} 
                id={name}
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}
                />
                <IconoValidacion 
                icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle} 
                valido={estado.valido}
                />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    );
}

export default ComponenteInput
