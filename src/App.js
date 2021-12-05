import './App.css';
/*import Modulos from './components/webpages/Modulos';*/
import Footer from './components/webpages/Footer';
import Menu from './components/webpages/Menu';
import Header from './components/webpages/Header';
import ListadoUsu from './components/usuarios/ListadoUsu';
import Modulos from './components/webpages/Modulos'




function App() {

  const lista_datos = [
    { identificacion:'12.345.678', nombre_usu:'Usuario AAA',rol:'Administrador' },
    { identificacion:'12.345.678', nombre_usu:'Usuario BBB',rol:'Usuario Interno' },
    { identificacion:'12.345.678', nombre_usu:'Usuario CCC',rol:'Usuario Externo' }

  ];


  return (

    <div>
    <Header/>
    <Menu/>
    <ListadoUsu usuarios={lista_datos}/>
    <Modulos/>
    <Footer/>
    
    </div>




  )
}

export default App;
