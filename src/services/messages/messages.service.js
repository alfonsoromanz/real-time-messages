// Initializes the `messages` service on path `/messages`
const createService = require('feathers-memory');
const hooks = require('./messages.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate,
    events: ['messageCreated']
  };

  // Initialize our service with any options it requires
  app.use('/messages', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('messages');

  service.hooks(hooks);
};
