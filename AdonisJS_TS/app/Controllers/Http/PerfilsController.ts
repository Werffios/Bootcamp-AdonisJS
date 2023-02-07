import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Perfil from "App/Models/Perfil";

export default class PerfilsController {
  public async getPerfil ({}: HttpContextContract)
  {
    return Perfil.query().select('codigo_perfil', 'nombre_perfil', 'fecha_creacion')
  }

}


// insert into perfils(codigo_perfil, nombre_perfil, fecha_creacion) values (10, 'a45', '1996-12-02' );