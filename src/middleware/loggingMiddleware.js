const morgan = require('morgan');
const winston = require('winston');
const path = require('path');


const logger = winston.createLogger({
    level: 'http',
    format: winston.format.cli(),
    transports: [new winston.transports.File({
        level: 'info',
        filename: path.join(__dirname,'logs', 'access.log'),
        handleExceptions: true,
        json: true,
        maxsize: 5242880, //5MB
        maxFiles: 5,
        colorize: false
    }),
    new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
    })],
});


const morganMiddleware = morgan("combined", { stream: { write: message => logger.info(message) } });




module.exports = morganMiddleware
