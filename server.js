const express = require('express');
const helmet = require('helmet');

const Projects = require('./project-model')

const db = require('./data/db-config.js');
const { json } = require('express');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('welcome to the projects api!')
})

server.get('/api/projects', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
})

server.get('/api/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
})

server.get('/api/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
})

server.get('/api/projects/:id', (req, res) => {
  const id = req.params.id
  Projects.findProjectById(id)
      .then(project => {
          res.status(200).json(project)
      })
})

server.get('/api/tasks/:id', (req, res) => {
  const id = req.params.id
  Projects.findTaskById(id)
      .then(task => {
          res.status(200).json(task)
      })
})

server.get('/api/resources/:id', (req, res) => {
  const id = req.params.id
  Projects.findResourceById(id)
      .then(resource => {
          res.status(200).json(resource)
      })
})



server.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;

  Projects.deleteProject(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete project' });
  });
});

server.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;

  Projects.deleteTask(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find task with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete task' });
  });
});

server.delete('/api/resources/:id', (req, res) => {
  const { id } = req.params;

  Projects.deleteResource(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find resource with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete resource' });
  });
});

server.post('/api/projects', (req, res) => {
    const project = req.body
    Projects.addProject(project)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
})

server.post('/api/tasks', (req, res) => {
    const task = req.body
    Projects.addTasks(task)
  .then(task => {
    res.status(201).json(task);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task' });
  });
})

server.post('/api/resources', (req, res) => {
    const resource = req.body
    Projects.addResource(resource)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
})

server.put('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.updateProject(id)
  .then(project => {
    if (project) {
      projects.updateProject(changes, id)
      .then(updatedProject => {
        res.json(updatedProject);
      });
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update project' });
  });
});

server.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.findById(id)
  .then(tasks => {
    if (tasks) {
      Projects.updateTask(changes, id)
      .then(updatedTask => {
        res.json(updatedTask);
      });
    } else {
      res.status(404).json({ message: 'Could not find task with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update task' });
  });
});

server.put('/api/resources/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.findById(id)
  .then(resource => {
    if (resource) {
      Projects.updateResource(changes, id)
      .then(updatedResource => {
        res.json(updatedResource);
      });
    } else {
      res.status(404).json({ message: 'Could not find resource with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update resource' });
  });
});
module.exports = server;
