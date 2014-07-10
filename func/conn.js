/**
 * Created by zhiwen on 14-3-17.
 * 连接数据库
 */

(function(){
    /*
    var _debug = global._debug;
    if(_debug) console.log('========================conn-----------------------');
    var mongo = require('mongoskin');
    if(global._local){
        console.log('localhost DB');
        exports.db = mongo.db('mongodb://localhost/atong');
    }else{
        exports.db = mongo.db('mongodb://admin:123456@ds033087.mongolab.com:33087/atong');
    }
    */
    var _debug = global._debug, localConn = global._local;
    //if(_debug) console.log('========================conn-----------------------');
    var mongo = require('mongoskin');
    if(localConn){
        exports.db = mongo.db('mongodb://localhost/catchqq');
        if(_debug) console.log('本地数据库-------conn------');
    }else{
        if(_debug) console.log('外网数据库-------conn------');
        exports.db = mongo.db('mongodb://admin:123456@ds049898.mongolab.com:49898/catchqq');
    }
})();
