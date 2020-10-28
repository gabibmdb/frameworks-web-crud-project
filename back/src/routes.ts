import express from 'express';
import knex from './database/database';

const routes = express.Router();


//PROFESSORES ---------------------------------------------------

routes.post('/professores', async (req, res) => {

    const {
        nome,
        cadeira,
        departamento
    } = req.body;
  
    await knex('professores').insert({
        nome,
        cadeira,
        departamento
    });

    return res.json({success: true});

});


routes.get('/professores', async(req, res) => {
    const professores = await knex('professores').select('*');
    return res.json({professores})
});


routes.put('/professores/:id', async(req, res) => {
  
    const {id} = req.params;

    const {
        nome,
        cadeira,
        departamento
    } = req.body;

    await knex('professores').where('id',id).update({
        nome,
        cadeira,
        departamento
    });

    return res.json({success: true})

});


routes.delete('/professores/:id', async(req, res) => {

    const {id} = req.params;

    await knex('professores').where('id', id).del();
    return res.json({success: true})
  
});


//ALUNOS ---------------------------------------------------

routes.post('/alunos', async (req, res) => {

    const {
        nome,
        curso,
        media
    } = req.body;
  
    await knex('alunos').insert({
        nome,
        curso,
        media
    })

    return res.json({success: true})
  });
  
  
routes.get('/alunos', async (req, res) => {

    const alunos = await knex('alunos').select('*');
    return res.json({alunos})
    
});
  
  
routes.put('/alunos/:id', async(req, res) => {

    const {
        nome,
        curso,
        media
    } = req.body;

    const { id } = req.params;

    await knex('alunos')
        .where('id', id)
        .update({
            nome,
            curso,
            media
          });

  return res.json({ success: true })

});


routes.delete('/alunos/:id', async(req, res) => {
    const { id } = req.params;

    await knex('alunos').where('id', id)

    return res.json({ success:true})
});

//DEPARTAMENTOS ---------------------------------------------

routes.post('/departamentos', async (req, res) => {

    const {
        nome,
        curso,
    } = req.body;
  
    await knex('departamentos').insert({
        nome,
        curso
    })

    return res.json({success: true})
  });
  
  
    routes.get('/departamentos', async (req, res) => {
        const departamentos = await knex('departamentos').select('*');
        return res.json({departamentos})
    });
  
  
routes.put('/departamentos/:id', async(req, res) => {

    const {
        nome,
        curso,
    } = req.body;

    const { id } = req.params;

    await knex('departamentos')
        .where('id', id)
        .update({
            nome,
            curso
          });

    return res.json({ success: true })

});


routes.delete('/departamentos/:id', async(req, res) => {
    const { id } = req.params;

    await knex('departamentos').where('id', id)

    return res.json({ success:true})
});
  

export default routes;