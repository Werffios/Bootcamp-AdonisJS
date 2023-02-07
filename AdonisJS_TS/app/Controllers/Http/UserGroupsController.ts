import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserGroup from "App/Models/UserGroup";
import User from "App/Models/User";
import Group from "App/Models/Group";

export default class UserGroupsController {
  public async getUserGroup ({}: HttpContextContract)
  {
    return UserGroup.query().select('codigo_usuario', 'codigo_grupo', 'fecha_inicio')
  }
  public async setNewUserGroup ({request, response}: HttpContextContract)
  {
    try{
      const dataUserGroup = request.only(['codigo_usuario', 'codigo_grupo', 'fecha_inicio'])
      const user = await User.findBy('codigo_usuario', dataUserGroup.codigo_usuario)
      const group = await Group.findBy('codigo_grupo', dataUserGroup.codigo_grupo)
      if (!user) {
        return response.status(400).json({ msg: 'El usuario no existe'})
      }

      if (!group) {
        return response.status(400).json({ msg: 'El grupo no existe'})
      }
      // await UserGroup.create(dataUserGroup)

      const userGroup = new UserGroup()
      
      userGroup.codigo_usuario = dataUserGroup.codigo_usuario
      userGroup.codigo_grupo = dataUserGroup.codigo_grupo
      userGroup.fecha_inicio = dataUserGroup.fecha_inicio

      await userGroup.save()

      response.status(201).json({ msg: 'La relación usuario-grupo ha sido creada exitosamente', dataUserGroup})
    } catch (error) {
      response.status(500).json({ msg: 'Error del servidor', error})
    }
  }
}
