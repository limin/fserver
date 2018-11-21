/**
 * @file
 * 
 * @copyright 2018 {@link https://limin.github.io Min Li}
 * 
 * @license Licensed under {@link https://www.apache.org/licenses/LICENSE-2.0.html Apache License 2.0}
 * 
 */
const config = require('./fserver.config')
const winston = require('winston')
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.json()
      ),    
    transports: [
        new winston.transports.File({ filename: `${config.logger.path}/error.log`, level: 'error' }),        
        new winston.transports.File({ filename: `${config.logger.path}/combined.log`, level: config.logger.level})
    ]
  });
logger.level = config.logger.level

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.combine(
        winston.format.splat(),
        winston.format.simple()
      )
    }))
}

module.exports = logger
