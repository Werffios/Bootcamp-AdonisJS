import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'perfils'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('Codigo_Perfil').primary().unsigned()
      table.string('Nombre_Perfil', 100).notNullable()
      table.date('Fecha_Creacion').notNullable()
      table.integer('Codigo_Usuario').unsigned().unique().index('Codigo_Usuario_Perfil')
      table.foreign('Codigo_Usuario').references('users.Codigo_Usuario').onDelete('cascade')
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
