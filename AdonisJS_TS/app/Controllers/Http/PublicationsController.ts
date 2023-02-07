import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Publication from "App/Models/Publication";
import User from "App/Models/User";

export default class PublicationsController {
  public async getPublication ({}: HttpContextContract)
  {
    return Publication.query().select('codigo_publicacion', 'codigo_usuario', 'titulo', 'cuerpo')
  }
  public async setNewPublication ({request, response}: HttpContextContract)
  {
    try{
      const dataPublication = request.only(['codigo_publicacion', 'codigo_usuario', 'titulo', 'cuerpo'])
      const user = await User.findBy('codigo_usuario', dataPublication.codigo_usuario)
      if (!user) {
        return response.status(400).json({ msg: 'El usuario no existe'})
      }
      await Publication.create(dataPublication)
      response.status(201).json({ msg: 'Publicación creada correctamente' })
    } catch (error) {
      if (error.code === '23505')
      {
        const dataPublication = request.only(['codigo_publicacion', 'codigo_usuario', 'titulo', 'cuerpo'])
        response.status(400).json({ msg: 'La publicación ya existe', dataPublication})
      }
      else
      {
        response.status(500).json({ msg: 'Error del servidor', error })
      }
    }
  }
}
