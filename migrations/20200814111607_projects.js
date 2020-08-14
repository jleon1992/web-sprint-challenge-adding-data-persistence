exports.up = function (knex) {
    return knex.schema
        .createTable("project", tbl => {
            tbl.increments("id");

            tbl.string("name", 255).notNullable().unique().index();
            tbl.string("description", 255).unique().index();
            tbl.boolean("completed").notNullable().defaultTo(false);
        })
        .createTable("resource", tbl => {
            tbl.increments("id");

            tbl.string("name", 255).notNullable().unique().index();
            tbl.string("description", 255).unique().index();

        })
        .createTable("tasks", tbl => {
            tbl.increments("id");

            tbl.string("name", 255).notNullable().unique().index();
            tbl.string("notes", 255).unique().index();
            tbl.string("description", 255).notNullable().unique().index();
            tbl.boolean("completed", 255).notNullable().defaultTo(false);
            tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("projects.id")
            .onDelete("RESTRICT") 
            .onUpdate("CASCADE");
        })
        .createTable('projects_resources', tbl => {
            tbl.increments('id').primary()
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resource')
                .onDelete("RESTRICT") 
                .onUpdate("CASCADE");
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete("RESTRICT") 
                .onUpdate("CASCADE");
         
            })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("project")
        .dropTableIfExists("resource")
        .dropTableIfExists("tasks")
        .dropTableIfExists("projects_resources")
};
