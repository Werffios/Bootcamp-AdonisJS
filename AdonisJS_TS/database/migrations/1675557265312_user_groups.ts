import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema{
  protected tableName = 'user_groups'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('codigo_usuario').unsigned().references('codigo_usuario').inTable('users').onDelete('cascade')
      table.integer('codigo_grupo').unsigned().references('codigo_grupo').inTable('groups').onDelete('cascade')
      table.date('fecha_inicio').notNullable()
      table.unique(['codigo_usuario', 'codigo_grupo'])
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
