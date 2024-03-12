const { NextResponse } = require("next/server")
import bcrypt from 'bcrypt'//encriptador
import db from '@/Libs/db'//importamos la funcion de db.js


export async function POST(request) {//creacion de usuario
    try {
        const data = await request.json()//transformamos los datos de JSON a js

        const userFound = await db.user.findUnique({//buscamos el email, en caso de existir le decimos ya existe
            where: {
                email: data.email
            }
        })
        if (userFound) {//si email existe
            return NextResponse.json({//envia esta respuesta
                message: "email already exist",//respuesta
            }, {
                status: 400//400 indica error en la peticion
            })
        }



        const usernameFound = await db.user.findUnique({//buscamos el nombre de usuario,si existe negamos creacion con ese nombre
            where: {
                username: data.username
            }
        })
        if (usernameFound) {
            return NextResponse.json({
                message: "username already exist",
            }, {
                status: 400
            })
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)//exncriptamos la pass con un nivel de cifrado de 10, equilibrado entre seguridad y rendimiento
        const newUser = await db.user.create({//creamos un nuevo usuario
            data: {
                username: data.username,
                email: data.email,
                password: hashedPassword,//enviamos la hash password
                cart: {
                    create: {
                        password: data.password
                    }
                },
                favorites: {
                    create: {
                        password: data.password
                    }
                },
                userPurchases: {
                    create: {}//creamos la relacion
                },
                userProducts: {
                    create: {}
                },
                notifications: {//creamos la notificacion ya relaciona a el usuario
                    create: {
                        notification: {
                            create: [
                                {
                                    type: 0,
                                    title: "Register succesfully",
                                    description: "Your notifications start here",
                                    view:true
                                }, {
                                    type: 10,
                                    title: "New Profile",
                                    icon: "https://static.vecteezy.com/system/resources/previews/000/367/333/original/edit-profile-vector-icon.jpg",
                                    description: "Click here to edit your profile",
                                }

                            ]

                        }
                    }
                }
            }
        })
        const { password: _, ...user } = newUser//copiamos el usuario sin password
        return NextResponse.json(user) //devolvemos usuario sin pass como respuesta
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500,
        })

    }
}


