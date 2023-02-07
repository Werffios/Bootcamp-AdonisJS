import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
export default class UserGroup extends BaseModel {

  @column() public codigo_usuario: Number
  @column() public codigo_grupo: Number
  @column() public fecha_inicio: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

