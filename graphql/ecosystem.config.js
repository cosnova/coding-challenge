module.exports = {
  apps: [
    {
      name: 'graphql',
      script: 'server.js',
      max_memory_restart: '512M',
      autorestart: true,
      // TODO revisit for stage/prod. Look at using nproc to determine available processors.
      instances: 1,
      output: './logs/out.log',
      error: './logs/error.log',
      log: './logs/qraphql.log',
      merge_logs: true,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
