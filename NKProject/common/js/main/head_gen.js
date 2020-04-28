/**
 *  模板名：head信息通用模块
 *  编写人：马宇晨
 *  版本  : 1.0
 *  完成日期 ：2020年04月？日
 *  描述： 
 *      1.保存头部展示块设置的数据ID及设备ID
 *      
 *      
 * */

$(function() {
    //alert("进入了head_gen.js");


    //行业字典接口
    $.ajax({
        "async": false,
        "crossDomain": true,
        "url": "http://119.3.171.138:8082/iot/api/dict/get",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            //"Host": "295587.ichengyun.net",
            //"Connection": "keep-alive",
            "cache-control": "no-cache"
        },
        "data": "{dicts:['D_IOT_EVENT_LEVEL'],industry:'ubiIoT'}"
    }).done(function (response) {
        for (var i in response.obj.list) {
            switch (response.obj.list[i].name) {
                case "D_IOT_EVENT_LEVEL":
                    D_IOT_EVENT_LEVEL = response.obj.list[i].data;
                    var array = [];
                    var PPObj = {};
                    var nodes = [];
                    for (var i in D_IOT_EVENT_LEVEL) {
                        if (D_IOT_EVENT_LEVEL[i].pkey) {
                            nodes.push({
                                "text": D_IOT_EVENT_LEVEL[i].val,
                                "PPID": D_IOT_EVENT_LEVEL[i].pkey,
                                "id": D_IOT_EVENT_LEVEL[i].key,
                            })
                        } else {
                            if (i > 0) {
                                array.push(PPObj);
                                nodes = [];
                            }
                            PPObj = {
                                "text": D_IOT_EVENT_LEVEL[i].val,
                                "PPID": 0,
                                "id": D_IOT_EVENT_LEVEL[i].key,
                                "nodes": nodes
                            }
                        }
                        if (i == D_IOT_EVENT_LEVEL.length - 1) {
                            array.push(PPObj)
                        }
                    }
                    treeData = array;
                    break;
            }
        }
    })

    // var whichHtml=$("#whichHtml").val();
    var whichHtml = "pz";
    var dd;
    switch (whichHtml) {
        case "pz":
            dd = [{
                "text": "主页",
                "href": "NK_main_page_test.html",
                "state": {
                    "expanded": true
                },
            }];
            var htmlArr = ["NK_page_test.html"];
            var dd_2 = [];
        {
            dd_2.push({
                "text": "分页",
                "href": "NK_page_test.html",
                "state": {
                    "expanded": true
                },
            })
        }
            dd[0].nodes = dd_2;
            break;
        case "show":
            dd = [{
                "text": "主页",
                "href": "NK_main_show_test.html",
                "state": {
                    "expanded": true
                },
            }];
            var htmlArr = ["NK_page_show.html", "NK_page_show.html", "NK_page_show.html", "NK_page_show.html", "NK_page_show.html", "NK_page_show.html"];
            var dd_2 = [];
            for (var i in '分页') {
                dd_2.push({
                    "text": LINE[i].val,
                    "href": htmlArr[i],
                    // "state":{
                    //   "expanded":true
                    // }
                    "tags": [LINE[i].key]
                })
            }
            dd[0].nodes = dd_2;
            break;
    }

    //$("#siteTree").val(JSON.stringify(dd))
    $("#base_nav_stationlist_tree").treeview({//下拉菜单赋值
        showBorder: false,
        data: dd,
        backColor: 'white',
        enableLinks: true,
        showTags: true,
        onNodeSelected: function (event, data) {//当下拉菜单被点击时触发的事件
            $("#base_nav_site").html(data.text);
            sessionStorage.setItem('key', '{"text":"' + data.text + '","tags":["' + data.tags + '"]}')
        }
    });
    reloadMainHead();

})




/***
 * 加载横幅数据：运行显示
 * type : 类型
 * area : 页面名
 * divId: div的ID
 */
function reloadMainHead( ) {
    // for (var i in refreshHead_1) {
    //     window.clearInterval(refreshHead_1[i]);
    // }
    // refreshHead_1 = [];
    for (var i in headDiv) {
        var param = {
            "type" : "head",
            "area" : area,
            "divId": headDiv[i]
        };
        var data = postForUIJson(urlHeadShow, param);
        var w;
        var d;
        var xiaoshu;
        var inputRatio;
        var refreshHeadData;
        var divId;
        if (data.length > 0) {
            if (data[0].value != null && data[0].value != "") {
                w = data[0].value.inputHeadDeviceId;
                d = data[0].value.inputHeadDataId;
                divId = data[0].divId;
                if (w != "" && d != "") {
                    if (parseFloat(data[0].value.inputRatio) == 0 || data[0].value.inputRatio == "" || data[0].value.inputRatio == null) {
                        inputRatio = 1;
                    } else {
                        inputRatio = data[0].value.inputRatio;
                    }
                    if (parseFloat(data[0].value.xiaoShu) <= 0 || data[0].value.xiaoShu == "" || data[0].value.xiaoShu == null) {
                        xiaoshu = 0;
                    } else {
                        xiaoshu = data[0].value.xiaoShu;
                    }
                    refreshHeadData = data[0].value.refreshHeadData;
                    
                    var params = {
                        "w": w,
                        "d": d,
                        "divId": divId,
                        "xiaoshu": xiaoshu,
                        "inputRatio": inputRatio
                    }; 
                    Head_getData(params);
                    if (parseFloat(refreshHeadData) > 0) {
                        refreshHead_1.push(window.setInterval(function () {
                            Head_getData(params);
                        }, parseFloat(refreshHeadData) * 1000))
                    }

                }
                $("#"+headDiv[i]+" .name").html(data[0].value.inputHeadName);
                $("#"+headDiv[i]+" .unit").html(data[0].value.inputHeadUnit)

            }
        }
    }
}


/***
 * 获取头部展示块入库的信息
 * @param area
 * @param e
 */
function Head_getCfgInfo(area, e) {
    var e = e||window.event;
    objHead=e.target||e.srcElement;
    var fatherDiv=objHead.parentElement.parentElement;

    var DataJson={
          "area" : area,
          "divId": objHead.parentElement.id,
          "type" : "head"
    }

    var result = postForUIJson(urlHeadShow, DataJson);
    if(result[0] !=null && result[0] !=""){
        $("#myModalLabel-head").html(result[0].value.inputHeadName);
        $("#inputHeadDeviceId").val(result[0].value.inputHeadDeviceId);
        $("#inputHeadDataId").val(result[0].value.inputHeadDataId);
        $("#inputHeadName").val(result[0].value.inputHeadName);
        $("#inputHeadUnit").val(result[0].value.inputHeadUnit);
        $("#xiaoShu").val(result[0].value.xiaoShu);
        $("#inputRatio").val(result[0].value.inputRatio);
        $("#refreshHeadData").val(result[0].value.refreshHeadData);
      }
  }



  /***
 * 保存头部展示块设置的数据ID及设备ID
 * @param area 所属界面
 * inputHeadDeviceId  //设备ID
 * inputHeadDataId  //数据点ID
 * inputHeadName   //标题
 * inputHeadUnit  //单位
 * showDateOfDate  //时间段范围数据
 * xiaoShu  //小数位
 * inputRatio  //比例系数
 * status  //计算模式
 * refreshHeadData  //数据刷新周期
 */
function saveHeadDeviceIdAndDataId(area) {
    var json = {
      "inputHeadDeviceId" : $("#inputHeadDeviceId").val(),
      "inputHeadDataId"   : $("#inputHeadDataId").val(),
      "inputHeadName"     : $("#inputHeadName").val(),
      "inputHeadUnit"     : $("#inputHeadUnit").val(),
      "xiaoShu"           : $("#xiaoShu").val(),
      "inputRatio"        : $("#inputRatio").val(),
      "refreshHeadData"   : $("#refreshHeadData").val(),
    }

    var DataJson = {
         "type" : "head",
         "area" : area,
         "divId": objHead.parentElement.id,
         "value": JSON.stringify(json)
     }

    var result = postForUIJson(urlHeadSave, DataJson);
 //   alert(result.status);
    reloadMainHead(whichOneArea);
}





/***
 * 调取后台编号3接口
 * @param w 设备ID
 * @param d 数据ID
 * @param t 时间点
 * @param type 图表类型
 * @param startDT 开始时间（毫秒数）
 * @param endDT  结束时间（毫秒数）
 * @param divType 数据展示方式
 * @param divId   divId
 * @param whetherToDisplayDataLabels  是否需要数据标签
 * @param colorArray 图表曲线和柱子颜色
 */
var HeadResponseValue = 0;
function Head_getData(param) {
    var HeadResponseValue ;
    var dataObj = {
        w: param.w,
        d: param.d,
        partyId: partyId,
        isRT: true
    }
    var response = postRunAsyncToFJson(urlAlertData, JSON.stringify(dataObj));
    if (response.obj.list.length > 0) {
        if (response.obj.list[0].v != null && response.obj.list[0].v != "") {
            HeadResponseValue = response.obj.list[0].v
        } else {
            HeadResponseValue = 0;
        }
    } else {
        HeadResponseValue = 0;
    }
    var num_1 = parseFloat(param.inputRatio) * parseFloat(HeadResponseValue);
    $("#"+param.divId+" .numValue").html(num_1.toFixed(parseInt(param.xiaoshu)))
}