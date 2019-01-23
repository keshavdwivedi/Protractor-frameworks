"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class log4jsconfig {
    static Log() {
        var log4js = require('log4js');
        log4js.configure('./log4jconfig/log4j.json');
        //var logger = log4js.getLogger(); //for both console and file
        let log = log4js.getLogger("file");
        return log;
    }
}
exports.log4jsconfig = log4jsconfig;
