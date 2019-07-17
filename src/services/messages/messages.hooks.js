
const errors = require ('@feathersjs/errors');
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [(context) => {
      if (!context.data.author || !context.data.message) {
        throw new errors.GeneralError('author and message are required.');
      }
    }],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [(context) => {
      context.service.emit('messageCreated', context.result);
      return context;
    }],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
