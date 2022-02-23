import React from 'react';

const UserTable = ({ users, deleteUser, editRow }) => {

    console.log(users)

    return ( <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>NickName</th>
                <th>Opciones</th>
            </tr>
        </thead>
        <tbody>

            {
                users.length > 0 ?
                users.map( user => (
                    <tr key={user.id}>
                        <td>{ user.name }</td>
                        <td>{ user.username }</td>
                        <td>
                            <button 
                                className="button muted-button"
                                onClick={ ()=> { editRow( user ) } }
                            >Editar</button>
                            <button 
                                className="button muted-button"
                                onClick={ ()=> { deleteUser( user.id ) } }
                            >Borrar</button>
                        </td>
                    </tr>
                ) )
                : (
                    <tr>
                        <td colSpan={3}>No hay usuarios</td>
                    </tr>
                )
            }

            
        </tbody>
    </table> );
}

export default UserTable;