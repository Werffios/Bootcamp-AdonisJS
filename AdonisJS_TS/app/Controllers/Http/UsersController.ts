import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";

export default class UsersController {
  public async getUser ({}: HttpContextContract)
  {
    return User.query().select('codigo_usuario', 'nombre_usuario', 'contrasena', 'email', 'telefono')
  }
}
