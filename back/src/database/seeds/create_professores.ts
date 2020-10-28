import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('professores').insert([
        {nome: 'Diego Menezes', cadeira: 'Banco de dados I', departamento: 'Ciências da Saúde'},
        {nome: 'Jacqueline Lima Brito', cadeira: 'Programação para dispositivos móveis', departamento: 'Informática'},
        {nome: 'Cleiton Leite Dantas', cadeira: 'Photoshop II', departamento: 'Design'},
        {nome: 'Mateus Spinozza', cadeira: 'Ilustração veotorial', departamento: 'Design'},
        {nome: 'Ana Sophia Carlinto', cadeira: 'Frameworks web', departamento: 'Informática'},
        {nome: 'Thomás Jurandir', cadeira: 'Engenharia de Software', departamento: 'Informática'},
    ]);
}