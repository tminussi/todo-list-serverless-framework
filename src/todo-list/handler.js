'use strict';

const todoService = require('./service/todo-service')

module.exports.create = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Todo created successfully',
      data: await todoService.put(JSON.parse(event.body)),
    }),
  };
};
