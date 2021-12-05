import ListadoFacturasItem from "./ListadoFacturasItem";


function ListadoFacturas (props) {
    
    const facturas = props.facturas;
    // eslint-disable-next-line no-unused-vars
    const ListaFacturas = facturas.map( p =>

        <ListadoFacturasItem
            identificacion={p.identificacion}
            nombre={p.nombre_usu}
            rol={p.rol}
            key={p.nombre_usu + p.identificacion}
        />

    );

    return(
        <div className="container py-2">
            <div>
                <div className="row negrita col-xs-12 col-sm-12 col-md-12 col-lg-12 justify-content-center align-self-center">
                    <span>
                        <h5 style={{marginTop:'55px'}}>LISTADO DE LAS FACTURAS DEL SISTEMA</h5>
                    </span>
                </div>
                <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 justify-content-center align-self-center border">
                    <table className="display responsive compact table-striped table-dark table-bordered table-hover" cellSpacing="0"
                        cellPadding='0' style={{width: '100%', fontSize: '10px'}}>
                        <thead>
                            <tr>
                                <th className="col-sm-2"># Ident.Usuario</th>
                                <th className="col-sm-5">Nombre del Usuario</th>
                                <th className="col-sm-3">Rol / Perfil</th>
                                <th className="col-sm-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {ListaFacturas}

                        </tbody>
                    </table>

                </div>
                <hr>
                </hr>
                <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 py-2">
                    <button data-toggle='tooltip' data-placement='top' title='Crear un nuevo usuario'
                        className="btn btn-outline-success  btn-sm" type="button"
                        /*onClick="location.href='../usuarios/add_usuarios.html'"*/>Crear Nuevo Usuario</button>
                                        
                    <span>&nbsp;</span>

                    <button data-toggle='tooltip' data-placement='top' title='Retornar a la página anterior' className="btn btn-outline-danger  btn-sm" type="button" /*onClick="location.href='../webpages/modulos.html'"*/>Retornar</button>
                </div>
            </div>
        </div>

    )

}

export default ListadoFacturas;