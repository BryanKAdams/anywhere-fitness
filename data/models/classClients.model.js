const db = require('../dbConfig');

function find() {
  return db('class_clients');
}

function findBy(filter) {
  return db('class_clients')
    .where(filter)
    .returning('*');
}

function add(mapping) {
  return db('class_clients')
    .insert(mapping)
    .returning('*');
}

function remove(classId, clientId) {
  return db('class_clients')
    .where({ classId, clientId })
    .del();
}

module.exports = { find, findBy, add, remove };
