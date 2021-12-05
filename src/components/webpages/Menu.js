function Menu(){
    return(
        <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand negrita" href="../webpages/modulos.html">Gas Natural Cundiboyasence</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

                <li className="nav-item dropdown active">
                    <a className="nav-link" href="../webpages/acercade.html"><span>Acerca de</span></a>
                </li>

                <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle negrita" href="none" id="navbarDropdownMenuLink" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mi cuenta
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="../index.html">Login</a>
                        <a className="dropdown-item" href="../usuarios/add_usuarios.html">Registro</a>
                    </div>
                    
                </li>
                <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle negrita" href="none" id="navbarDropdownMenuLink" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Facturación
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="../index.html">Consulta de Facturas</a>
                        <a className="dropdown-item" href="../usuarios/add_usuarios.html">Configuración de tarifas</a>
                    </div>
                    
                </li>


                <li className="nav-item dropdown active">
                    <a className="nav-link" href="../usuarios/listado_usu.html">Administración de Usuarios</a>                    
                </li>

                <li className="nav-item dropdown active">
                    <a className="nav-link" href="../predios/listado_pred.html">Predios</a>                    
                </li>

                <li className="nav-item dropdown active">
                    <a className="nav-link" href="../mediciones/listado_med.html">Mediciones</a>                    
                </li>

            </ul>
        </div>
    </nav>
</div>
    )
}

export default Menu;