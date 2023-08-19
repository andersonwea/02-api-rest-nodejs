/* eslint-disable prettier/prettier */
import { Knex } from 'knex'

// método para criar, alterar tabelas no banco
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

// método para reverter todas as mudanças feitas na migratio
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
