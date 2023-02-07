import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Publication from "App/Models/Publication";

export default class PublicationsController {
  public async getPublication ({}: HttpContextContract)
  {
    return Publication.query().select('codigo_publicacion', 'titulo', 'cuerpo')
  }
}
