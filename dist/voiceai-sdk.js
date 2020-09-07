'use strict';

const util = {
    generateId() {
        return Math.random().toString(36).substr(2);
    }
};

class Engine {
    constructor(appid) {
        this.id = util.generateId();
        this.appid = appid;
        this.init();
    }

    init() {
        console.log('开始监听小程序啦~~~');
    }
}

let monitor = null;

var main = {
    init: function (appid) {
        if (!appid || monitor) {
            return;
        }
        monitor = new Engine(appid);
    }
};

module.exports = main;
