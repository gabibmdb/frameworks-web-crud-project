import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('departamentos').insert([
        {nome: 'Ciências da Saúde', curso: 'Medicina'},
        {nome: 'Informática', curso: 'Sistemas para Internet'},
        {nome: 'Design', curso: 'Design Gráfico'},
    ]);
}