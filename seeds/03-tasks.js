
exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    { name: 'Create diagram', description: "for data modeling", notes: "Makes creating a database a lot easier" , project_id: 1 },
    { name: 'Create components', description: "Decide your application structure",  notes: "components are one of reacts main features", project_id: 3 },
    { name: 'Projects ', description: "Choose work you are proud of",  notes: "This is your chance to showcase you hard work!", project_id: 4}
  ])
};
