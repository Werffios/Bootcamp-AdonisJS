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
      const codigoGrupo = await this.getValidarGrupoExistente(dataGroup.codigo_grupo)
      if (codigoGrupo===0)
      {
        await Group.create(dataGroup as Partial<Group>)
        response.status(200).json({ msg: 'Grupo creado correctamente' })
      } else {
        response.status(400).json({ msg: 'El grupo ya existe', codigoGrupo })
      }

    }catch (error){
      response.status(500).json({ msg: 'Error del servidor', error })

    }
  }
  public async getValidarGrupoExistente(codigo_Grupo: Number) :Promise<Number>
  {
    const total = await Group.query().where({"codigo_grupo":codigo_Grupo}).count('*').from('groups')
    console.log(total)
    return total[0]['count(*)'] || 0
  }

}
