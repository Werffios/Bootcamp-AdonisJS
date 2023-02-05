import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'publications'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('codigo_publicacion').primary().unsigned()
      table.string('titulo', 100).notNullable()
      table.string('cuerpo', 100).notNullable()
      table.integer('codigo_usuario').unsigned().index('codigo_usuario_publicacion')
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
