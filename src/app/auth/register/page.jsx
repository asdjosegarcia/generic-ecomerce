"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import "./RegisterPage.css"



const Registerpage=()=>{
    const {register,handleSubmit, formState:{errors}}=useForm()//descomponemos el objeto devuelto por la funcion useForm()
        //register para poder acceder a las funcionalidades de useForm
        //handlesubmit que cancela el comportamiento por defecto
        //formState objeto que tiene informacion del formulario, si se envio, si tiene algun error,
        //objeto que alamcena los datos que extrae formState
    const router=useRouter()//para redirigir a el usuario

    const onSubmit=handleSubmit(async(data)=>{//
        console.log(data)
        
        if(data.password !== data.confirmPassword){//comprobamos si contraseña y confirmarcontraseña no coinciden
            alert("password do not match")
        }

        const res=await fetch('/api/auth/register',{//enviamos los datos a register
            method:'POST',
            body:JSON.stringify({//transformamos el objeto a JSON
                username:data.username,//enviamos los datos de data por separado
                email:data.email,
                password:data.password
            }),
            headers:{
                'Content-type':'application/json'
            }
        })
        if(res.ok){
            router.push('/auth/login')//si todo sale bien al ejecutar la funcion redirifimos a el usuario a el Login
        }
    })
    return(
       /*  <secition className='register--form__section'> */
        <div className="register--form__container" >
            <form onSubmit={onSubmit}>
                <h2>Sing up</h2>
                <label>Username</label>
                <input type="text" {...(register("username", { required: { value: true, message: 'Username is required' } }))} placeholder="user123"></input>{/*  */}
                <label>Email</label>
                <input type="email" {...(register("email", {required: { value: true, message: 'Email is required' }  }))} placeholder="user@mail.com"></input>
                <label>Password</label>
                <input type="password" {...(register("password", {required: { value: true, message: 'Password is required' }  }))} placeholder="*******"></input>
                <label>Confirm Password</label>
                <input type="password" {...(register("confirmPassword", {required: { value: true, message: 'Confirm Password is required' }}))} placeholder="*******"></input>
                <button>Register</button>
                

            </form>
        </div>
    )
}
export default Registerpage