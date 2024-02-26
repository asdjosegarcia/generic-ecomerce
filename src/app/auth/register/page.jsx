"use client"
import react,{useState} from "react";
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
  const [error,setError]=useState(null)//para almacenar el errror
    const [getPasswordNoMatch,setPasswordNoMatch]=useState(null)


    const onSubmit=handleSubmit(async(data)=>{//
        // console.log(data) datos que enviamos
        
        if(data.password !== data.confirmPassword){//comprobamos si contraseña y confirmarcontraseña no coinciden
            // alert("password do not match")
            setPasswordNoMatch("Password does not match")
        }else{
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
                if(res.ok ){//comborbamos respuesta
                        router.push('/auth/login')//si todo sale bien al ejecutar la funcion redirifimos a el usuario a el Login
                }else{
                     const errorResponse= await res.json()
                     setError(errorResponse.message)
                     console.log(errorResponse.message)
                }
        }
    })
    
    return(
       /*  <secition className='register--form__section'> */
        <div className="register--form__container" >
            <form onSubmit={onSubmit}>
                <h2>Sing up</h2>
                <label>Username</label>
                <input type="text" {...(register("username", { required: { value: true, message: 'Username is required' } }))} placeholder="user123"></input>
                {/*  
                required:  //requerimientos del input
                value:true //requerimos que el parametro sea obligatorio
                message:'' //en caso de no cumplirse el requerimiento carga message, el error se carga en errors.message
                ...        //desgloza las propiedades devueltas por el objeto register
                "username" //nombre del campo
                */}
                {
                    errors.username && (//error que se genera en username
                        <span>{errors.username.message}</span>//mostramos el error que cargamos desde el span
                    )
                }
                <br></br>

                <label>Email</label>
                <input type="email" {...(register("email", {required: { value: true, message: 'Email is required' }  }))} placeholder="user@mail.com"></input>
                {
                    errors.email && (
                        <span>{errors.email.message}</span>
                    )
                }
                <br></br>
                <label>Password</label>
                <input className="register--form__password-input" type="password" {...(register("password", {required: { value: true, message: 'Password is required' }  }))} placeholder="*******"></input>
                {!errors.confirmPassword && getPasswordNoMatch?(<span>{getPasswordNoMatch}</span>):(<span>{errors.password?.message}</span>)}
                <br></br>
                <label>Confirm Password</label>
                <input className="register--form__password-input" type="password" {...(register("confirmPassword", {required: { value: true, message: 'Confirm Password is required' }}))} placeholder="*******"></input>
                {!errors.confirmPassword && getPasswordNoMatch?(<span>{getPasswordNoMatch}</span>):(<span>{errors.confirmPassword?.message}</span>)}
                {/* operador ternario para mostrar uno u otro mensaje */}

                {
                    error && (<p>{error}</p>)
                }
                <button>Register</button>
                <button className="register--form__login" onClick={()=>{router.push('/auth/login')}}>Login</button>
                

            </form>
        </div>
    )
}
export default Registerpage