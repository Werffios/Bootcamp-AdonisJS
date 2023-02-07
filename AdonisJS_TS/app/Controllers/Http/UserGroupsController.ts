import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserGroup from "App/Models/UserGroup";

export default class UserGroupsController {
  public async getUserGroup ({}: HttpContextContract)
  {
    return UserGroup.query().select('codigo_usuario', 'codigo_grupo', 'fecha_inicio')
  }
}
