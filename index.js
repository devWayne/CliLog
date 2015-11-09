var TYPE = {
    Error: 0,
    Warn: 1,
    Info: 2,
    Debug: 3
}
var log = {
    print: function(msgType, msg) {
        switch (msgType) {
            case TYPE.Error:
                console.log('\033[31m' + msg + '\033[0m');
                break;
            case TYPE.Warn:
                console.log('\033[1;33m' + msg + '\033[0m');
                break;
            case TYPE.Info:
                console.log('\033[36m' + msg + '\033[0m');
                break;
            case TYPE.Debug:
                console.log('\033[1;32m' + msg + '\033[0m');
                break;
        }
    },

    error: function(msg) {
        log.print(TYPE.Error, msg);
    },

    warn: function(msg) {
        log.print(TYPE.Warn, msg);
    },

    info: function(msg) {
        log.print(TYPE.Info, msg);
    },

    debug: function(msg) {
        log.print(TYPE.Debug, msg);
    }
}


module.exports = log;
