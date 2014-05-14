/**
 * Created by zhiwen on 14-3-19.
 */
(function(){
    var _debug = global._debug,
        mongo = require('./mongo-skin.js').skin,
        cutil = require('./cutil').util;


    exports.initClass = {


        //用户创建
        initUsers : function(req, res){
            mongo.add('user', require('./../data/usersData.js').userTable.users, function(err, result){
                if(err){
                    _debug && console.log('add---users---error');
                    throw err;
                }
                _debug && console.log('add---users---success');
                res && res.send('add---users---success!');
            });
        },

        initFans : function(req, res){


        }






    };

})()
