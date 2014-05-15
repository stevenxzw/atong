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
            pnumber : 100,
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
            img : '1.jpg,2.jpg'
        }],

        //个人订单

        order : [{
            id : 1,
            uid : 'admin',
            state : 0, //订单状态：0表示未完成 1表示完成
            pro : '00001-1,00002-2',
            btime : '1400144944448',
            msg : ''

        }]


    };

})()