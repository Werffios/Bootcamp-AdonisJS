import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";

export default class UsersController {
  public async getUser ({}: HttpContextContract)
  {
    return User.query().select('codigo_usuario', 'nombre_usuario', 'contrasena', 'email', 'telefono')
  }

  public async setNewUser ({request, response}: HttpContextContract)
  {
    try{
      const dataUser = request.only(['codigo_usuario', 'nombre_usuario', 'contrasena', 'email', 'telefono'])
      await User.create(dataUser)
      response.status(201).json({ msg: 'Usuario creado correctamente' })
    }catch (error){
      if (error.code === '23505')
      {
        const dataUser = request.only(['username', 'email', 'password'])
        response.status(400).json({ msg: 'El usuario ya existe', dataUser})
      }
  else
  {
    response.status(500).json({ msg: 'Error del servidor', error })
  }
    }
  }
}
