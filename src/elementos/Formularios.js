import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr, 1fr;
    gap: 20px;

    @media(max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${props => props.valido === 'false' && css`
        color: ${colores.error}
    `}
`;

const GrupoInput = styled.div`
    position: relative;
    z-indez: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }

    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;  
    `}

    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;  
    `}
`; 

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error}; 

    ${props => props.valido === 'true' && css`
        display: none;
    `}

    ${props => props.valido === 'false' && css`
        display: block;
    `}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

    ${props => props.valido === 'false' && css`
    opacity: 1;
    color: ${colores.error}
    `}

    ${props => props.valido === 'true' && css`
    opacity: 1;
    color: ${colores.exito}
    `}
`;

const ContenedorTerminos = styled.div`
    grid-column: span 2;

    input{
        margin-right: 10px;
    }
    
    @media (max-width: 800px){
		grid-column: span 1;
	}
`;

const ContBotonCent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;

    @media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover {
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
    }
`;

const MsgExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
`;

const MsgError = styled.div`
    height: 45px;
    line-height: 45px;
    background: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-colum: span 2;
    p{
        margin: 0;
    }
    b {
		margin-left: 10px;
	}
`;

const NavBar = styled.ul`
    width: 100%;
    height: 140px;
    padding: 2rem;
    font-size: 18px;
    display: flex;
    justify-content: center;
    border-radius: 32px;
    flex-direction: row;
`;

const Links = styled.button`
    width: 20%;
    text-decoration: none;
    padding: 10px;
    font-weight: 500;
    font-size: 20px;
    border-radius: 3px;
    border: none;
    margin: 7px;
    justify-content: space-around;
    background-color: #0438CC;
    @media (max-width: 800px){
		justify-content: center;
        width: auto;
	}
    a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
    }
    &:hover {
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
        background-color: #0489CC;
        transform: scale(1.1);
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    &:hover {
        transform: scale(1.2);
    }
    background-color: transparent;
`;

const Header = styled.div`
    margin: 0 0 50px 0;
    padding: 0;
    background-image: url("https://foodandtravel.mx/wp-content/uploads/2021/06/Donas-portada.jpg");
    background-size: cover;
    width: 100%;
    height: 15vh;
`;

const Fondo = styled.div`
    margin-top: 35px;
    background-color: #000000;
    color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 220px;
    justify-content: space-around;
    div {
        margin: 0 15px 0 15px;
    }
    @media (max-width: 800px){
        flex-direction: column;
        height: auto;
    }
`;

const Card = styled.div`
    width: 30%;
    height: 40vh;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(163, 163, 163, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px;
    @media (max-width: 800px){
        margin: 0;
        padding: 0;
        width: 90%;
        margin: 2rem;
        padding 0.8rem;
    }
`;

const Menus = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 30px rgba(163, 163, 163, 0.4);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px;
    font-family: 'Smooch', cursive;
    font-size: 20px;
    font-weight: 300;
`;

const BotonCompra = styled.button`
    width: 100%;
    height: 50px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;
    &:hover {
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
    }
`;

export {
    Formulario, 
    Label, 
    GrupoInput, 
    Input, 
    LeyendaError, 
    IconoValidacion, 
    ContenedorTerminos, 
    ContBotonCent, 
    Boton, 
    MsgExito, 
    MsgError,
    NavBar,
    Links,
    Logo,
    Header, 
    Fondo,
    Card,
    Menus,
    BotonCompra
};