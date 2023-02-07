import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Perfil from "App/Models/Perfil";
import User from "App/Models/User";

export default class PerfilsController {
  public async getPerfil ({}: HttpContextContract)
  {
    return Perfil.query().select('codigo_perfil', 'nombre_perfil', 'fecha_creacion', 'codigo_usuario')
  }
  public async setNewPerfil ({request, response}: HttpContextContract)
  {
    try{
      const dataPerfil = request.only(['codigo_perfil', 'nombre_perfil', 'fecha_creacion', 'codigo_usuario'])
      const user = await User.findBy('codigo_usuario', dataPerfil.codigo_usuario)
      if (!user) {
        return response.status(400).json({ msg: 'El usuario no existe'})
      }
      await Perfil.create(dataPerfil)
      response.status(201).json({ msg: 'Perfil creado correctamente' })
    }catch (error){
      if (error.code === '23505')
      {
        const dataPerfil = request.only(['codigo_perfil', 'nombre_perfil', 'fecha_creacion', 'codigo_usuario'])
        response.status(400).json({ msg: 'El perfil ya existe', dataPerfil})
      }
      else
      {
        response.status(500).json({ msg: 'Error del servidor', error })
      }
    }
  }
}


// insert into perfils(codigo_perfil, nombre_perfil, fecha_creacion) values (10, 'a45', '1996-12-02' );