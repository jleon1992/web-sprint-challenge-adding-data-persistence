
exports.seed = function(knex, Promise) {
  return knex('projects_resources').insert([   
    { resource_id: 1, project_id: 1},

    { resource_id: 2, project_id: 2},
    { resource_id: 2, project_id: 4},
    { resource_id: 3, project_id: 2},
    { resource_id: 3, project_id: 4},
  ])
};
