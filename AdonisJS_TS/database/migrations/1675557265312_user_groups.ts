import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_groups'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('codigo_usuario').unsigned().index('codigo_usuario')
      table.integer('codigo_grupo').unsigned().index('codigo_grupo')
      table.date('fecha_inicio').notNullable()
      table.foreign('codigo_usuario').references('users.codigo_usuario').onDelete('cascade')
      table.foreign('codigo_grupo').references('groups.codigo_grupo').onDelete('cascade')

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
