// //este código configura la autenticación usando NextAuth.js y el proveedor de credenciales. se puede configurarar dependiendo de las necesidades de autenticacion
// import NextAuth from "next-auth/next";
// import CredentialsProvider from 'next-auth/providers/credentials'; //proveedor de autenticación de credenciales, nos permite autenticar las credenciales 
// import db from "@/Libs/db";//importamos la base de datos    
// import bcrypt from 'bcrypt'//encriptador y desencriptador   

// const authOptions={
//     providers:[
//         CredentialsProvider({//proveedor que permite iniciar secion con usuario y contraseña
//             name:"Credentials",//nombre de proveedor
//             credentials:{//se definen los campos de credenciales requeridos para la autenticacion
//                 email:{label:"Email",type:"text",placeholder:"jsmith"}, //estas propiedades generan el input de un login hubicado en //http://localhost:3000/api/auth/signin
//                 password:{label:"Password",type:"password",placeholder:"*****"}
//             },
//             async authorize(credentials,req){//funcion asincrona que verifica y autoriza a el usuario, si es correcta almacena user y mail en cookies
//                 const userFound=await db.user.findUnique({
//                     where:{
//                         email:credentials.email
//                     }
//                 })
//                 if(!userFound)throw new Error('No user found')

//                 const matchPassword=await bcrypt.compare(credentials.password,userFound.password)
//                 if(!matchPassword)throw new Error('Password wrong')

//                 return{
//                     id:userFound.id,
//                     name:userFound.username,
//                     email:userFound.email,
//                 }
//             }
//         })
//     ],
//     pages:{
//         signIn:"/auth/login"
//     }
// }

// const handler=NextAuth(authOptions);

// export{handler as GET,handler as POST}