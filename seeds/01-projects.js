
exports.seed = function(knex, Promise) {
  return knex(' project').insert([   
    { name: 'database', description: "Create a database with node" },
    { name: 'landing page', description: "Demonstrate mastery over HTML and CSS" },
    { name: 'create app', description: "demonstrate abilities with react" },
    { name: 'Portfolio', description: "Build an online portfolio to showcase work" }
  ]);
};
