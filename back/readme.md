# Projeto CRUD - Frameworks Web

Projeto de CRUD realizado para a disciplina de Programação com Frameworks Web utilizando Node.Js, Express, Typescript, Knex e Sqlite3

## Instalando e iniciando o servidor

Utilize os seguintes scripts para instalar as dependências e iniciar o servidor:

```bash
npm install
npm start
```

O servidor está configurado para a porta 3333;

## Base de dados

A base de dados utilizada neste projeto é o Sqlite3 com o *query builder* Knex.
Caso deseje rodar os seeds e/ou as migrações, utilize os seguintes scripts:

```python
npm run knex:migrate
npm run knex:seed
```

## Dependências

```python
Express
Knex
Sqlite3
Typescript
```

