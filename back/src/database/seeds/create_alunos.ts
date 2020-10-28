import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('alunos').insert([
        {nome: 'Maria Joaquina da Silva', curso: 'Medicina', media: 8.2},
        {nome: 'João Arnaldo Toscano', curso: 'Sistemas para Internet', media: 8.7},
        {nome: 'Olsvado Dantas', curso: 'Design Gráfico', media: 9.4},
        {nome: 'Arlindo Ronaldo Domingues', curso: 'Design Gráfico', media: 7.2},
        {nome: 'Thiago Lima de Almeida', curso: 'Sistemas para Internet', media: 9.6},
        {nome: 'Liane Gabriela Barbosa', curso: 'Sistemas para Internet', media: 9.4},
    ]);
}