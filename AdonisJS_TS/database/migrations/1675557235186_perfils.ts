import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'perfils'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('codigo_perfil').primary().unsigned()
      table.string('nombre_perfil', 100).notNullable()
      table.date('fecha_creacion').notNullable()
      table.integer('codigo_usuario').unsigned().unique().index('codigo_usuario_perfil')
      table.foreign('codigo_usuario').references('users.codigo_usuario').onDelete('cascade')
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
