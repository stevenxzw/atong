/**
 * Created by zhiwen on 14-3-19.
 * 路由控制器(建立在express基本上)
 */
(function(){

    var _debug = global._debug ,
        initClass = require('./../func/initFun').initClass,
        impl = require('./../func/impl').Impl,
        filter = require('./../func/filter').routerFilter,
        cutil = require('./../func/cutil').util,
        apiUser = require('./../API/user').apiUser,
        apiCar = require('./../API/car').apiCar,
        getSchool =  require('./../func/exportSchool').getSchool,
        adminPage = require('./../func/adminPage').adminPage,
        conn = require('./../func/mongo-skin.js').skin;



    var routes = {
        '/test' :[false, function(req, res){
           res.send('<div>test</div>');
        }],

        //把mongolab数据导入本地数据库

        '/import' : function(req, res){
            var params  = cutil.getHttpRequestParams(req);
            impl.import(res, params);
        },

        '/countnull' : function(req, res){
            conn.count('blogqq', {area : ''}, function(err, rel){
                res.send('地区为空的QQ有：'+rel);
                //res.json(200, {num : rel});
            });
        },

        /*----------------------初始化数据-------------------------*/
        '/init/tables' : [false, function(req, res){
            initClass.initTables(req, res);
        }],
        '/init/qq' : [false, function(req, res){
            initClass.initQQTables(req, res);
        }],
        /*----------------------初始化数据结束-------------------------*/

        /*--------------------------API---------------------------*/
        '/api/getApp' : [false, function(req, res){
           console.log(getSchool.getApp(req, res));
        }],

        '/api/login'   : apiUser.login,

        /*-------------------------------------登录后台路由-----------------------------------------*/
        //登录页面
        '/admin/login' : [true, adminPage.login],

        '/admin/users' : [true, function(req, res){
            //adminPage.getQQFanke('79186391','@CvfFdCeRR');
            var data = adminPage.usersList(req, res);
            //console.log('**********************');
            //console.log(res.locals.email);
            //res.render('detail',{title:"详细内容"});

        }],


        /*-------------------------------------登录后台路由结束-------------------------------------*/

        '/admin' : [true, function(req, res){
            //adminPage.getQQfriend();
            //adminPage.getQQFanke('873206974', '@LTyQIp6Lb');
            //adminPage.getQQFanke('154036777', '@k483NM36B');
            _debug && console.log(req.session.user_id);
            var data = adminPage.index(req, res);
            var blogEngine = require('./../data/blog');
            res.render('admin/index',cutil.extend({
                layout: 'adminLayout',
                action : 'admin/index', title:"管理后台", entries:blogEngine.getBlogEntries(), doc:"---"},data));
        }],

        '/detail' : [true, function(req, res){
            var conn = require('./../func/mongo-skin').skin;
            conn.read('cartype','', function(err,data){
                if(_debug) console.log(data);
            });
            //console.log('**********************');
            //console.log(res.locals.email);
            res.render('detail',{
                layout : 'templateLayout',
                title:"详细内容"});
        }],

        '/admin/template/*' : [false, function(req, res){
            var p = req.params[0];

            if(p.indexOf('.html') > -1) p = p.replace('.html', '');
            if(p.indexOf('modal')> -1) p = p.replace('modal/','');
            console.log('------------:'+p);
            res.render('admin/template/modal/'+p,{
                layout : 'templateLayout',
                title:"详细内容"});

        }],
        '/admin/template/1' : [false, function(req, res){
            console.log('------11---------');

        }]



    }

    var fn = {

        getUri : function(eapp){
            return eapp.route;
        },

        globalRoute : function(eapp){
            /*
            //统一过滤器
            eapp.get('/admin/?:action', filter, function(req, res, next){
                next();
            });
            */
            var isFilter = true;
            for(var rot in routes){
                var item =  routes[rot], type = cutil.getType(item);
                if(isFilter && type === 'array' && item.length && item[0] === true){
                    eapp.get(rot, filter.authorize, item[1]);
                    eapp.post(rot, filter.authorize, item[1]);
                }else{
                    eapp.get(rot, type === 'array' ? item[1] : item);
                    eapp.post(rot, type === 'array' ? item[1] : item);
                }
            }
        },

        templateRouter : function(app){

            app.get('')
        }


    }

    exports.routefn = fn;
    //initClass.initTables();
    //initClass.importCars();
    //初始化数据
    //initClass.initUsers();
    //initClass.importCarTypes();
    /*
    var http = require('http'),
        op = {
            host: '127.0.0.1',
            port: 8087,
            method: 'GET',
            path: 'http://api.car.bitauto.com/CarInfo/MasterBrandToSerialNew.aspx?type=2&pid=2&rt=serial&serias=m&key=serial_2_2_m&include=1'
        }
    var req = http.request(op, function (res) {
        res.on('data', function (chunk) {
            console.log('BODY:' + chunk);
        });
    });
    req.on('error', function (e) {
        console.log('Error got: ' + e.message);
    });
    req.end();
    */


})()
