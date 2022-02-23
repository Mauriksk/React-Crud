import React from 'react'
import { useForm } from 'react-hook-form';


const AddUserForm = ({ addUser }) => {

    const { register, errors, handleSubmit } = useForm()

    const onSubmit = ( data, e )=>{
        console.log(data)

        addUser( data )

        //Limpiar campos
        e.target.reset()
    }

    return ( 
        <form onSubmit={ handleSubmit(onSubmit) } >
            <label>Name</label>
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
            
            <label>Username</label>
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
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;