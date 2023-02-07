import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserGroup extends BaseModel {

  @column()
  public codigo_usuario: number

  @column()
  public codigo_grupo: number

  @column()
  public fecha_inicio: DateTime

  @column({ isPrimary: true })  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

