/**
 * Created by Administrator on 14-3-25.
 * 后台公共数据
 */

(function(){
    var cutil = require('./../func/cutil').util;
    exports.pd = {
        getPd : function(d){
            var cd = cutil.deepClone(commonData);
            return  cutil.extend(d||{},cutil.extend(cd,adminPublicData));
        },

        getCommonPd : function(){
            return commonData;
        }
    };

    var commonData = {
        project_name : 'Atong',

        _debug : global._debug

    };

    var adminPublicData = {
        items : [{
            cls :'',
            item : 'Home',
            uri : '/admin'

        },{             //用户列表
            cls : '',
            item : 'UsersList',
            uri : '/admin/usersList'
        },{             //用户
            cls : '',
            item : 'User',
            uri : '/admin/user'
        },{             //群组
            cls : '',
            item : 'Group',
            uri : '/admin/group'
        },{             //商店列表
            cls : '',
            item : 'StoresList',
            uri : '/admin/storeslist'
        },{             //商店
            cls : '',
            item : 'Store',
            uri : '/admin/store'
        }]

    };

})()
