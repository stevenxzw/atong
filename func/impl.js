/**
 * Created by Administrator on 14-3-23.
 * 功能实现类
 */

(function(){
    var mongo = require('./mongo-skin.js').skin,
        _debug = global._debug;

    var nodegrass = require('nodegrass');


    var importNum = 0;

    exports.Impl = {

        import : function(res, params){
            var des = '';
            if(params.time){//时间
                var t = Number(params.time);
                des['addTime'] = t;
            }
            if(params.page){
                des['page'] = Number(params.page);
            }else{
                des['page'] = 1;
            }
            if(params.pagesize){
                des['pagesize'] = params.pagesize;

            }else{
                des['pagesize'] = 1000;
            }
            this.importImpl(params, function(err, r){
                if(err){
                    res.json(200, {res : 'error'});
                }else{
                    res.json(200, {res :r});

                }

            });
        },

        importImpl : function(params, fn){
            var p = [], that = this;
            if(params.addTime){//时间
                var t = Number(params.addTime);
                p.push('addTime='+t);
            }
            if(params.page){
                p.push('page='+params.page);
            }else{
                params.page =1;
                p.push('page=1');
            }
            if(params.pagesize){
                p.push('pagesize='+params.pagesize);
            }else{
                params.pagesize =100;
                p.push('pagesize=100');
            }
            p.push('_id=0');
            var url = 'http://localhost:3002/exportOutqq';
            nodegrass.get(url+'?'+ p.join('&'),function(data,status,headers){
                if(data){
                    try {
                        data = JSON.parse(data);
                        console.log('------------------------');
                        console.log(data);
                        return ;
                        if(data.res.length>0){
                            importNum + data.res.length;
                            var newData = that.toExpressData(data.res, [], function(result){
                                ++params.page;
                                that.importImpl(params, fn);
                            });
                        }else{
                            fn('', '已导入:'+importNum);
                            importNum = 0;
                        }
                    } catch (e) {
                        console.log(e.name + ": " + e.message);
                    }
                }else{
                    fn && fn('', '完成');
                }
            },'utf8').on('error', function(e) {
                    console.log("Got error: " + e.message);
                    fn && fn('err', '');
            });
        },

        toExpressData : function(items, toItems, fn){
            if(items.length>0){
                var item = items.shift(), that = this;
                mongo.read('blogqq', {qq:item.qq, blogid:item.blogid}, function(err, r){
                    if(!err){
                        if(r.length>0){
                            console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<----------------------重复------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                            that.toExpressData(items, toItems, fn);
                        }else{
                            toItems.push({
                                qq :item.qq,
                                name : item.name,
                                blogid : item.blogid,
                                blogname:item.blogName,
                                qzoneid : item.qzoneid||'448530028',
                                addTime : item.addTime || +new Date,
                                area :item.area,
                                time :item.time
                            });
                            that.toExpressData(items, toItems, fn);
                        }
                    }
                })
            }else{
                this.saveBlogQQ(toItems, fn);
            }
        },

        saveBlogQQ : function(newData, fn){
            if(newData && newData.length>0){
                var that = this;
                mongo.add('blogqq', newData, function(r){
                    fn && fn();
                })
            }else{
                fn && fn({res : 'null improt'});
            }
        },

        uploadTable : function(table, condition, items, fn){
            mongo.update(table, condition, items, fn);
        },

        /*-----------------帐号功能------------------*/

        //密码比较
        comparePwdMD5 : function(dbpwd, pwd){
            var crypto = require('crypto');
            var md5 = crypto.createHash('md5');
            return md5.update(pwd).digest('base64') === dbpwd;
        },

        //取出帐号密码
        getUserPwd : function(uid, fn){
            mongo.read('users', {"uid":uid}, function(err, result){
                if(result.length){
                    fn && fn(err, result[0].pwd, result[0]);
                }else
                    fn && fn("帐号不存在", result);
            })
        },


        //获取帐号权限
        getRole : function(uid, fn){
            mongo.read('users', {"uid":uid}, function(err, result){
                if(result.length){
                    fn && fn(err, result[0].role);
                }else
                    fn && fn("帐号不存在", result);
            })
        },
        /*-----------------帐号功能结束------------------*/

        /*------------------session cookie*--------------------------*/
        setSessin : function(req, user){
            req.session.user_id = user.username || user.weiboId || user.qqId;
            //req.session.user = user;
        },

        getSession : function(req, key){
            _debug && console.log(req.session.user_id)
            if(req.session.user_id && key) return req.session[key];
             return req.session.user_id || '';
        },

        getCookie : function(__req){
            // 获得客户端的Cookie
            /*
            var Cookies = {};
            req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
                var parts = Cookie.split('=');
                Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
            });
            */
            _debug && console.log(__req.cookies);
            return __req.cookies;
        },

        setCookie : function(__res, cookies, seconds, domain, httpOnly){
            seconds = seconds ? seconds*1000 : 0;
            for(var key in cookies){
                __res.cookie(key, cookies[key], {maxAge:seconds, path:domain || '/', secure:false, httpOnly:httpOnly?httpOnly:false});
            }
        },


        /*------------------session cookie*--------------------------*/


        /*------------------ user --------------------------*/

        addUser : function(user, fn){
            mongo.add('users', user, function(err, result){
                if(err){
                    _debug && console.log('add---user---error');
                    throw err;
                }
                _debug && console.log('add---user---success');
                fn && fn(result);
            });
        },

        getHasFans : function(uid, fn){
            mongo.read('user', {'uid': uid}, function(err, result){
                if(err){
                    _debug && console.log('read---fans---error');
                    throw err;
                }
                _debug && console.log('add---user---success');
                fn && fn(result);
            });
        },




        addFans : function(user, fn){


        },

        getUserList : function(page, pageSize, fn){
            mongo.read('users','', function(err, result){
                /*
                 if(err){
                 _debug && console.log('read---cartype---error');
                 throw err;
                 }*/
                fn && fn(err, result);
            }, page, pageSize)
        }
        /*------------------ user 结束--------------------------*/
    }

})()
