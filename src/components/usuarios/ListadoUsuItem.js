function ListadoUsuItem(props){
    return(
        <tr>
        <td style={{textAlign: 'left'}}>{props.identificacion}</td>
        <td >{props.nombre}</td>
        <td>{props.rol}</td>
        <td>
            <button data-toggle='tooltip' data-placement='top' title='Editar'
                className='btn btn-outline-primary btn-sm btnEditar' /*onClick="location.href='../usuarios/edit_usuarios.html'"*/><i className='fas fa-pencil-alt fa-sm'
                    aria-hidden='true' title='Editar'></i></button>
            <button data-toggle='tooltip' data-placement='top' title='Eliminar'
                className='btn btn-outline-danger btn-sm btnBorrar' /*onClick="location.href='../usuarios/elim_usuarios.html'"*/><i className='far fa-trash-alt fa-sm'
                    aria-hidden='true' title='Eliminar'></i></button>

        </td>
    </tr>
    )
}

export default ListadoUsuItem;