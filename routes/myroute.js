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
        adminPage = require('./../func/adminPage').adminPage;




    var routes = {
        '/test' :[false, function(req, res){
           res.send('<div>test</div>');
        }],
        /*----------------------初始化数据-------------------------*/
        '/init/tables' : [false, function(req, res){
            initClass.initTables(req, res);
        }],
        /*----------------------初始化数据结束-------------------------*/

        /*--------------------------API---------------------------*/


        '/api/login'   : apiUser.login,

        /*-------------------------------------登录后台路由-----------------------------------------*/
        //登录页面
        '/admin/login' : [true, adminPage.login],

        '/admin/users' : [true, function(req, res){
            var http = require('http');
            http.get("http://g.qzone.qq.com/cgi-bin/friendshow/cgi_get_visitor_simple?uin=137629479&mask=3&clear=1&sd=0.1574706707919601&g_tk=5381", function(res) {
                var size = 0;
                var chunks = [];
                res.on('data', function(chunk){
                    size += chunk.length;
                    chunks.push(chunk);
                });
                res.on('end', function(){
                    var data = Buffer.concat(chunks, size);
                    console.log(data.toString());
                    var test;
                });
            }).on('error', function(e) {
                    console.log("Got error: " + e.message);
                });
            var data = adminPage.usersList(req, res);
            //console.log('**********************');
            //console.log(res.locals.email);
            //res.render('detail',{title:"详细内容"});

        }],


        /*-------------------------------------登录后台路由结束-------------------------------------*/

        '/admin' : [true, function(req, res){
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
