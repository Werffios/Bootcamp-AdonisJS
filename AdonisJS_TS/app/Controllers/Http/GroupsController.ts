import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Group from 'App/Models/Group'
import * as console from "console";

export default class GroupsController
{
  public async getGrupo ({}: HttpContextContract)
  {
    return Group.query().select('codigo_grupo', 'nombre_grupo')
  }
  public async setNewGroup ({request, response}: HttpContextContract)
  {
    try {
      const dataGroup = request.only(['codigo_grupo', 'nombre_grupo'])
      const codigoGrupo = dataGroup.codigo_grupo
      await Group.create(dataGroup)
      response.status(200).json({ msg: 'Grupo creado correctamente' })
    } catch (error) {
      if (error.code === '23505')
      {
        const dataGroup = request.only(['codigo_grupo', 'nombre_grupo'])
        const codigoGrupo = dataGroup.codigo_grupo
        response.status(400).json({ msg: 'El grupo ya existe', dataGroup})
      }
      else
      {
        response.status(500).json({ msg: 'Error del servidor', error })
      }
    }
  }

}
