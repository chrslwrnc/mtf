const buildConfig = (env) => require('./config/' + env + '.js')(env);

module.exports = buildConfig;
