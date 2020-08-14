const knex = require('knex')
const db = require('./data/db-config')

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTasks,
    updateProject,
    updateResource,
    updateTask,
    deleteProject,
    deleteResource,
    deleteTask,
    findProjectById,
    findTaskById,
    findResourceById
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

function updateProject(changes, id){
    return db('project')
        .where({id})
        .update(changes)
}

function updateResource(changes, id){
    return db('resource')
        .where({id})
        .update(changes)
}

function updateTask(changes, id){
    return db('tasks')
        .where({id})
        .update(changes)
}



function deleteProject(id){
    return db('project')
    .where('id', id)
    .del()
}

function deleteTask(id){
    return db('tasks')
    .where('id', id)
    .del()
}

function deleteResource(id){
    return db('resource')
    .where('id', id)
    .del()
}

function findProjectById(id) {
    return db('project')
      .where({id})
      .first()

}

function findTaskById(id) {
    return db('resource')
      .where({id})
      .first()

}

function findResourceById(id) {
    return db('resource')
      .where({id})
      .first()

}