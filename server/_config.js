var config = {};

config.mongoURI = {
  development: 'mongodb://localhost/node-msrs',
  test: 'mongodb://localhost/node-test',
  // auth: 'mongodb://localhost/mean-auth',
  stage: process.env.MONGOLAB_URI
};


module.exports = config;