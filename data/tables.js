/**
 * Created by Administrator on 14-3-24.
 * 用户数据
 */

(function(){
    exports.userTable = {
        //用户表
        users : [{
            uid : 'admin',
            pwd : '4QrcOUm6Wau+VuBX8g+IPg==', //123456
            likename : 'daneil',
            role : '2',//管理员是2,一般用户是1，vip是3
            logTimes : 0,//登录次数
            lastTime : '',
            weiboId : '',
            logins : 1,
            qqId : '',
            fans : 1,//粉丝数
            faceImg : ''
        },{
            uid : 'stevenxzw@163.com',
            pwd : '4QrcOUm6Wau+VuBX8g+IPg==',
            likename : 'steven',
            role : '1',
            logTimes : 0,
            lastTime : '',
            weiboId : '',
            qqId : '',
            fans : 1,
            faceImg : ''
        },{
            uid : 'stevenxzw@sina.com.cn',
            pwd : '4QrcOUm6Wau+VuBX8g+IPg==',
            likename : 'stevenxzw',
            role : '1',
            logTimes : 0,
            lastTime : '',
            weiboId : '',
            qqId : '',
            fans : 1,
            faceImg : ''
        }],
        //粉丝表
        fans : [{
            uid : 'stevenxzw@163.com',
            fans : 'admin',//fans的uid,字符串形式，多个用“，”隔开
            num : 1
        }, {
            uid : 'admin',
            fans :  'stevenxzw@163.com',
            num : 1
        }],
        //黑名单
        forbids : [{
            uid : 'admin',
            fid : 'stevenxzw@sina.com.cn'//黑名单的uid,字符串形式，多个用“，”隔开
        }],

        //申请加为好友表
        fansTemp : [{
            uid : 'admin',
            targetUid : 'stevenxzw@163.com',
            time : '1399369599222',
            text : '我是XX',
            source : ''
        }],

        //群组
        group : [{
            gid : '0001',
            create : 'admin',
            createTime : '1400144944448',
            name : '东景花园',
            des : '东景花园生活指南',
            members : 2,
            img : '',
            memberids :'admin,stevenxzw@163.com'
        }],

        //群组消息
        groupMessage : [{
            gid : '001',
            cuid : 'admin',
            message : 'ha---ha',
            createtime : '1400144944448',
            type : 'text'//信息类型
        }],

        //消息
        message : [{
           cuid : 'admin',//发布者
           ruid : 'stevenxzw@163.com',//接收者也可能是群组
           sendTimer : '1400144944448',
           text : 'haha',
           type : 'text',//信息类型
           readed : 0//已被阅读
        }],

        //语音消息

        //商店
        store : [{
            sid : '1',
            name : '京东',
            des : '日用品',
            uid : 'admin',
            proNumber : 100,//商品数量
            ctime : '1400144944448',
            ip : '23.123.113.395',
            area:'广州天河区中山五路'
        }],

        //商品
        product : [{
            id : '00001',
            sid : '1',
            uid : 'admin',
            name : '娃哈哈',
            looked :1,  //浏览次数
            order : 0,
            lock : 0,
            upTime : '1400144944448',
            img : '0002,0003'
        }],

        //个人订单
        order : [{
            id : 1,
            uid : 'admin',
            state : 0, //订单状态：0表示未完成 1表示完成
            pro : '{00001:1,00002:2}',//商品ID加商品数量
            bookTime : '1400144944448',
            msg : '六点前要送达',
            money : 53.6
        }],

        //图片列表
        pictures : [{
            id : '0001',
            uid : 'admin',
            type : 1,//发送来原(1是头像,2是消息内容，3商品，)
            url : 'http://file.gaofen.com//html/v5/img/logo.png',
            text : '好漂亮1',
            size : 1024,
            wh : '500,500'
        },{
            id : '0002',
            uid : 'admin',
            type : 1,//发送来原(1是头像,2是消息内容，3商品，)
            url : 'http://img3.bitautoimg.com/autoalbum/files/20120815/713/0439057132_3.jpg',
            text : '好漂亮2',
            size : 1024,
            wh : '500,500'
        },{
            id : '0003',
            uid : 'admin',
            type : 1,//发送来原(1是头像,2是消息内容，3商品，)
            url : 'http://img3.bitautoimg.com/autoalbum/files/20110622/878/1121408780_3.jpg',
            text : '好漂亮3',
            size : 1024,
            wh : '500,500'
        }]

    };

})()