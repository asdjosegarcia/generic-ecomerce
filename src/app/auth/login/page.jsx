"use client"
import React,{useState} from 'react'
import { useForm } from "react-hook-form";//para el manejo del formulario
import { signIn } from 'next-auth/react'; //para el envio del formulario a la DB
import { useRouter } from 'next/navigation'; //para la redirecciones
import "./LoginPage.css"


const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()//register para el manejo de los inputs, errors para el manejo de los errores, handleSubmit
  const router = useRouter()//para las redirecciones
  const [error,setError]=useState(null)//para almacenar el errror

  const onSubmit = handleSubmit(async data => { //data es la informacion que tomamos del usuario
    const res = await signIn('credentials', {//signIn es una funcion de next-auth para el logueo, ya sea con google,facebook etc, por defecto nos redirecciona

      email: data.email,
      password: data.password,
      redirect: false,//para evitar el redireccionamiento al loguearse
    })
    if (res.error) {
      // alert(res.error);
      setError(res.error)
    } else {
      // console.log('enviando a /dashboard')
      router.push('/') //si la autenticacion sale bien redireccionamos a el usuario a dashboard
      router.refresh() //y refresca, aqui se refrescaria el dashboard
    }
    // console.log('res', res)
  })


  return (
    <div className='login--form__container'>
      <form onSubmit={onSubmit} className=''>{/* una vez completado el formulario ejecuta la funcion onSubmit, que ejecuta handle submit */}
        <h1 className="">Login</h1>
        <label htmlFor="email" className="">Email</label>{/* texto superior */}
        <input type="text" {...(register("email", { required: { value: true, message: 'Email is required' } }))} placeholder="yourUser123@email.com" className="" />
        {
          errors.email && (//si error.email existe
          <span className="">{errors.email.message}</span>//se crea este span
          )
        }
        <br></br>
        <label htmlFor="password" className="">Password</label>{/* texto superior */}
        <input type="password" {...(register("password", { required: { value: true, message: 'Password is required' } }))} placeholder="******" className="" />
        {
          errors.password && (//si error.password existe
          <span className="">{errors.password.message}</span>//se crea este span
          )
        }
        {error && (
          <p className=''>{error}</p>
        )}
        <button className="">
          Login
        </button>
        <button className='login--form__register' onClick={()=>{router.push('/auth/register')}}>Register</button>
      </form>
    </div>
  )
}

export default LoginPage
