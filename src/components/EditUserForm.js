import React from 'react'
import { useForm } from 'react-hook-form';


const EditUserForm = ({ currentUser, updateUser }) => {

    console.log( currentUser )

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: currentUser
    })

    setValue('name', currentUser.name)
    setValue('username', currentUser.username)

    const onSubmit = ( data, e )=>{

        console.log(data)
        data.id = currentUser.id
        updateUser( currentUser.id, data )

        //Limpiar campos
        e.target.reset()
    }

    return ( 
        <form onSubmit={ handleSubmit(onSubmit) } >
            <label>Nombre</label>
            <input className='box-input' type="text" name="name"
                {...register('name',{
                    required:{
                        value:true,
                        message: 'Nombre es requerido.'
                    }
                })}
            />
            <div>
                { errors?.name?.message }
            </div>
            
            <label>NickName</label>
            <input type="text" name="username" 
                {...register('username',{
                    required:{
                        value:true,
                        message: 'UserName es requerido.'
                    }
                })}
            />
            {
                errors?.username?.type == 'required' && <span>Campo requerido</span>
            }
            <button>Editar Usuario</button>
        </form>
    );
}

export default EditUserForm;