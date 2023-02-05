import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_groups'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('Codigo_Usuario').unsigned().index('Codigo_Usuario')
      table.integer('Codigo_Grupo').unsigned().index('Codigo_Grupo')
      table.date('Fecha_Inicio').notNullable()
      table.foreign('Codigo_Usuario').references('users.Codigo_Usuario').onDelete('cascade')
      table.foreign('Codigo_Grupo').references('groups.Codigo_Grupo').onDelete('cascade')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
