import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Publication extends BaseModel {
  @column({ isPrimary: true })
  public codigo_publicacion: number

  @column()
  public titulo: string

  @column()
  public cuerpo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
