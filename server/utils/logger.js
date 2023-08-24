const winston = require("winston");

const logLevels = {
    info: "info",
    error: "error",
    warn: "warn",
};

const transports = Object.keys(logLevels).map(
    (level) =>
        new winston.transports.File({
            filename: `log/${level}.log`,
            level: logLevels[level],
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
        })
);

transports.push(
    new winston.transports.File({
        filename: "log/all.log",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        ),
    })
);

const logger = winston.createLogger({
    levels: winston.config.syslog.levels,
    transports: transports,
});

module.exports = logger;
