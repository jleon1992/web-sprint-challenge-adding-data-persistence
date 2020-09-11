
exports.seed = function(knex, Promise) {
  return knex('resource').insert([   
    { name: 'Node ', description: "javascript off the web" },
    { name: 'react', description: "Javascript library for creating apps" },
    { name: 'HTML and CSS', description: "The building blocks of every website"}
  ])
};
