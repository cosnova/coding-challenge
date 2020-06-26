import LOG_ENV from './logger.config';

var environment = process.env.NODE_ENV || 'development';

var logConf = LOG_ENV[environment];

export { environment, logConf };
