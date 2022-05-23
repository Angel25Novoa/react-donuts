import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
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
                        <NavLink className='Home' to="/"><Links>Home</Links></NavLink>
                        <NavLink className='Blog' to="/Blog"><Links>Blog</Links></NavLink>
                        <NavLink className='Form' to="/Form"><Links>Reservaciones</Links></NavLink>
                        <NavLink className='Home' to="/Menu"><Links>Menú</Links></NavLink>
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