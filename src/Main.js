import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Facturas from './components/facturas/ListadoFacturas'
import Footer from './components/webpages/Footer';
import Menu from './components/webpages/Menu';
import Header from './components/webpages/Header';
import Modulos from './components/webpages/Modulos';
import ListadoUsu from './components/usuarios/ListadoUsu';

function Main() {

    const lista_datos = [
        { identificacion:'12.345.678', nombre_usu:'Usuario AAA',rol:'Administrador' },
        { identificacion:'12.345.678', nombre_usu:'Usuario BBB',rol:'Usuario Interno' },
        { identificacion:'12.345.678', nombre_usu:'Usuario CCC',rol:'Usuario Externo' }
    ];

    return (
        <div>
            <Header/>
            <Menu/>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/facturacion" element={<Facturas facturas={lista_datos}/>} />
                    <Route exact path="/usuarios" element={<ListadoUsu usuarios={lista_datos}/>} />
                </Routes>
            </BrowserRouter>
            <Modulos/>
            <Footer/>
        </div>
    )
}

export default Main