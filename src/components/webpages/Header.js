/* eslint-disable jsx-a11y/alt-text */
import logo from '../../assets/images/logo.png';

function Header(){
    return(

        <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 border">

            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 ">
                <span>
                        <img src={logo} width="50"/> 
                    <label htmlFor="" className="negrita">Sistema de Facturación</label>                   
                </span>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 ">

                <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 px-2 py-2 justify-content-end align-self-end">
                    <span style={{fontSize: '1.5rem', color: '#fb3000'}}>
                        <i className="fas fa-user"></i>
                        <label htmlFor="" style={{fontWeight: 300}}>Nombre del Usuario</label>
                    </span>

                    <span className="px-2">
                        <button data-toggle='tooltip' data-placement='top' title='Salir del Sistema' type="button"
                             className="btn btn-danger  btn-sm">Cerrar Sesión</button>
                    </span>
                </div>
            </div>

        </div>

    )
    
}

export default Header;