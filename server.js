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
module.exports = server;
