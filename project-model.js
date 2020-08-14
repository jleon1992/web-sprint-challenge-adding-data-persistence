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
    findResourceById,
    getProjectResources,
    getProjectTasks,
    getResourceProjetcs
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

function getProjectResources(project_id){
    return db().select('r.name').from('resources as r')
        .join('projects_resources as pr', 'r.id', 'pr.resource_id')
        .where('pr.project_id', project_id)
}

function getProjectTasks(project_id){
    return db().select('t.name').from('tasks as t')
    // .join('projects_resources as pr', 'r.id', 'pr.resource_id')
    .where('t.project_id', project_id)
}

function getResourceProjetcs(resource_id){
    return db().select('p.name').from('project as p')
    .join('projects_resources as pr', 'p.id', 'pr.project_id')
    .join('resource as r', 'r.id', 'pr.resource_id')
    .where('pr.project_id', resource_id)
}