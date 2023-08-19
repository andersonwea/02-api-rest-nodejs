/* eslint-disable prettier/prettier */
import { Knex } from 'knex'

// método para criar, alterar tabelas no banco
export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.uuid('session_id').after('id').index()
  })
}

// método para reverter todas as mudanças feitas na migratio
export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.dropColumn('session_id')
  })
}
