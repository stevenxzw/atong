
/**
 * Module dependencies.
 */

//设置全局变量
//global._debug = true;//测试状态
//global._local = true;//本地开发



var express = require('express');
var routes = require('./routes');
var api = require('./routes/api');
var user = require('./routes/user');
var http = require('http');
var path = require('path');



var app = express();
var hbs = require('hbs');
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.logger());
// 一个简单的 logger
// 开发环境
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
    global._debug = true;//测试状态
    global._local = true;//本地开发


}
hbs.registerHelper('json', function(context) {
    return JSON.stringify(context);
});


// 生产环境
if ('production' === app.get('env')) {
    global._debug = false;//测试状态
    global._local = false;//本地开发
};
app.set('title', 'atong管理后台');

app.use(express.cookieParser('123'));
app.use(express.session({maxAge:10000, secret: "andylau" }));
//app.use(express.session({cookie:{maxAge:2000000,secret: 'node'}}));
/*
app.use(function(req, res, next){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin','http://dev.caryous.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();

});
*/
app.engine('html', hbs.__express);
app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


/*
 //设置跨域访问
 app.all('*', function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
 res.header("X-Powered-By",' 3.2.1')
 res.header("Content-Type", "application/json;charset=utf-8");
 next();
 });
 */






//connectDb.connectDb();
/*
app.get('/', routes.index);
app.get('/users', user.list);

app.get('/s', function(req, res) {
    res.send('Hello World');
});

app.get('/api',api.api);


app.get('/list', function(req, res) {
    console.log(req);
    res.send('Hello World list');
});



app.get('/', function(req, res) {
    res.sendfile('./views/index.html', {name : 'mydata'}, function(){
        console.log('----------------');
    });
});

app.get('/', routes.index);
app.get('/list', user.list);
 */

//var conn = require('./public/javascripts/conn');
//var conn = require('./public/javascripts/connSkin');
//var DB  = new conn.seDB({connectType:'lab'});

//DB.insert('test1', {id:'001', accout:'test001'}, function(){ console.log('ok');DB.read();});




app.use(express.static('public'));
app.use(express.bodyParser());
app.use(express.cookieParser());

var myroute = require('./routes/myroute').routefn;
myroute.globalRoute(app);

/*
app.listen(app.get('port'),'dev.caryous.com', function(){
    console.log('Express server listening on port ' + app.get('port'));
});
*/
app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
/*
//app.get('/', function(req, res) {
//    debugger;
//})

// 加载数据模块
var Server = require('mongodb').Server,
    mongo = require('mongodb');

var dbhost = 'ds033709.mongolab.com';
var dbport = 33709;
var dbserver = new Server(dbhost,dbport, {auto_reconnect:true});
var dbconnector = new mongo.Db('stevenxie',dbserver,{safe:true});
var mdb;
var blogEngine = require('./data/blog');
app.get('/', function(req, res) {
    var _db =  mdb.collection('test1');
    _db.find({},function(err,cursor){

        var ids = [];

        console.log('=====');
        cursor.toArray(function(err, docs) {
            console.log(docs.length);
            var results = [];
            // Check that we have all the results we want
            docs.forEach(function(doc) {
               ids.push(doc.id);
            });
            res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries(), doc:ids.join('---')});
        });


    });
    //console.log(_db);

   // var _mdb = mdb.collection('users');

    //insertDb(mdb.collection('users'));

   // res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()});
});
app.get('/detail', function(req, res){
    var conn = require('./public/javascripts/mongo-skin').skin;
    conn.read('cartype','', function(data){});
    //conn.update('', '', '', conn.read);
    res.render('detail',{title:"详细内容"});
});

dbconnector.open(function(err,db){
    if(err) throw err;
    db.authenticate('admin', '123456', function(err, success) {//remenber to edit your username and password.
        mdb = db;
        //app.listen(3000, "127.0.0.1");
        app.listen(app.get('port'), function(){
            console.log('Express server listening on port ' + app.get('port'));
        });
        console.log("Server started on port 3000");
    });
});
*/
//app.listen(app.get('port'), function(){
//    console.log('Express server listening on port ' + app.get('port'));
//});

