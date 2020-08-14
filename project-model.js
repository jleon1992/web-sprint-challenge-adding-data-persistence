const knex = require('knex')
const db = require('./data/db-config')

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTasks
    // getInstructions
}

function getProjects(){
    return db('project')
}

function addProject(project){
    return db('project')
        .insert(project)
}

function getResources(){
    return db('resource')
}

function getTasks(){
    return db('tasks')
}

function addResource(resource){
    return db('resource')
        .insert(resource)
}

function addTasks(task){
    return db('tasks')
        .insert(task)
}
// function getShoppingList(recipe_id){
//     return db('recipes_ingredients as ri')        
//         .join('ingredients', 'ingredients.id', 'ri.ingredients_id')
//         .select('ingredients.name', 'ri.quantity')
//         .where('ri.recipe_id', recipe_id)
// }

// function getInstructions(recipe_id){
//     return db().select('instructions').from('instructions as i')
//         .where('i.recipes_id', recipe_id)
// }