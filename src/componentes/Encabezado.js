import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Blog from './Blog';
import Form from './Form';
import './styles/styles.css';
import {  
    NavBar,
    Links, 
    Header
} from '../elementos/Formularios';
import Menu from './Menu';

const Encabezado = () => {

    return (
        <>
            <header>
                <Router>
                    <Header>
                        <NavBar>
                            <Links href="/"><Link className='Home' to="/">Home</Link></Links>
                            <Links href="/Blog"><Link className='Blog' to="/Blog">Blog</Link></Links>
                            <Links href="/Formulario"><Link className='Form' to="/Form">Reservaciones</Link></Links>
                            <Links href="/Menu"><Link className='Home' to="/Menu">Menú</Link></Links>
                        </NavBar>
                    </Header>
                    <Routes>
                        <Route path="/Form" element={<Form/>}/>
                        <Route path="/"  element={<Home/>}/>
                        <Route path="/Blog" element={<Blog/>}/>
                        <Route path="/Menu" element={<Menu/>}/>
                    </Routes>
                </Router>
            </header>
        </>
    )
}

export default Encabezado