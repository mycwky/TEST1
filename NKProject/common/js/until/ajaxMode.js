/**
 *  模板名：Ajax通用模块
 *  编写人：马宇晨
 *  版本  : 1.0
 *  完成日期 ：2020年04月？日
 * */ 

/**
 * ajax post请求：调用运行平台接口 "async"       : false,
 * @param {*} url    请求地址
 * @param {*} data   参数Json格式
 */




function postRunAsyncToFJson(url ,data){
    var list="";
    $.ajax({
        "async"       : false,
        "crossDomain" : true,
        "url"         : url,
        "method"      : "POST",
        "headers"     : {
            "Content-Type"  : "application/json",
            "Accept"        : "*/*",
            "Cache-Control" : "no-cache",
            "cache-control" : "no-cache"
        },
        "data": data
    }).done(function(response){
        list=response
       // return response;
    })
    return list;
}


/**
 * ajax post请求：调用运行平台接口 ,"async"       : true,
 * @param {*} url    请求地址
 * @param {*} data   参数Json格式
 */
function postRunAsyncToTJson(url ,data){
    var list="";
    $.ajax({
        "async"       : true,
        "crossDomain" : true,
        "url"         : url,
        "method"      : "POST",
        "headers"     : {
            "Content-Type"  : "application/json",
            "Accept"        : "*/*",
            "Cache-Control" : "no-cache",
            "cache-control" : "no-cache"
        },
        "data"        : data
    }).done(function(response){
        list = response
        // return response;
    })
    return list;
}


/**
 * ajax post请求：调用UI平台
 * @param {*} url    请求地址
 * @param {*} data   参数Json格式
 */
function postForUIJson(url ,data){
    var list ="" ;
    $.ajax({
        url      : url,
        type     : "POST",
        async    : false,
        dataType : "json",
        data     : data,
        success  : function(result){
            list =  result;
        }
    })
    return list;
}


/**
 * NK分界面调用js下的json文件
 * @param url
 * @returns {string}
 */
function getForJsToJson(url){
    var list="";
    $.ajax({
        url: url,
        type: "get",
        async: false,
        dataType: "json",
        success: function (data) {
            list = data;
        }
    })
    return list;
}




function postRunAsyncToFSetting(url, data) {
    var setting = {
        "async": false,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "cache-control": "no-cache"
        },
        "data": data
    };
    return setting;

}








