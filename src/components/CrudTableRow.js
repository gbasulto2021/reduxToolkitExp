import React from 'react';

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    let {name,constellation, id} = el;
    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
              <button onClick={(e)=> setDataToEdit(el)}>Editar</button>
              <button onClick={(e)=> deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow;
