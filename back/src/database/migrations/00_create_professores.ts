import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('professores', table => {
        table.increments('id').primary();
        table.string('nome').notNullable;
        table.string('cadeira').notNullable;
        table.string('departamento').notNullable;
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('professores');
}