function tranfertime(second) {

    var vartime = "00:00:00";
    try {
        vartime = parseInt(second / 3600) + ":" + (parseInt(second % 3600 / 60)) + ":" + (second % 3600 % 60);
    }
    catch (e) {

    }
    return vartime;

}
function strToJson(str) {
    if (str == "")
        return "";
    var json = eval('(' + str + ')');
    return json;
}
function loadXMLDoc() {
    var xmlhttpname;
    if (window.XMLHttpRequest) {// code for all new browsers
        xmlhttpname = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {// code for IE5 and IE6
        xmlhttpname = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttpname;
}
function GetQueryString(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURI(r[2]); //unescape, decodeURI, decodeURIComponent   //    return r[2];
    return null;
}

//显示提示文本，text为要显示的文本，second表示自动消失的秒数  
function showTip(text, second) {
    var tip = null;
    if (!tip) {
        tip = document.createElement('div');
        tip.style.backgroundColor = '#000';
        tip.style.color = '#fff';
        tip.style.fontSize = '18px';
        tip.style.fontWeight = 'bold';
        tip.style.fontFamily = '微软雅黑';
        tip.style.width = 'auto';
        tip.style.height = 'auto';
        tip.style.padding = '10px 30px 10px 30px';
        tip.style.borderRadius = '6px';
        tip.style.opacity = '0.7';
        tip.style.position = 'fixed';
        tip.style.zIndex = '99999';
        document.body.appendChild(tip);
    }
    tip.innerHTML = text;
    tip.style.display = 'inline-block';

    tip.style.top = (document.documentElement.clientHeight / 2 - tip.offsetHeight / 2) + 'px';
    tip.style.left = (document.documentElement.clientWidth / 2 - tip.offsetWidth / 2) + 'px';

    setTimeout(function disappear() {
        tip.style.display = 'none';
    }, second * 1000);
    return tip;
}