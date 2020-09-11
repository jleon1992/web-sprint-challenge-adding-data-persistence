exports.seed = function(knex, Promise) {
  return knex('resource_tasks').insert([   
    { task_id: 1, resource_id: 1},
    { task_id: 1, resource_id:2},
    { task_id: 2, resource_id:2},
    { task_id: 2, resource_id: 3},
    { task_id: 3, resource_id: 2},
  ])
};
