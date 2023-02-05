import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Group from 'App/Models/Group'

export default class GroupsController
{
  public async getGrupo ({}: HttpContextContract)
  {
    const grupos = await Group.query().select('codigo_grupo', 'nombre_grupo')
    return grupos
  }
  public async setNewGroup ({}: HttpContextContract)
  {
    
  }
}
