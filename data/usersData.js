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
        }]

        //群组
    };

})()