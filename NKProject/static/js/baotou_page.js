var arr = [];
var colorList = [];
var arr1 = [];
var titleId = "";//最近一次点击的横幅按钮
var zNodes = [];//编辑界面下拉框的下拉数据
var selects = [];//记录编辑下拉框模态框中选中添加的数据
var resultListSelect = [];//点击区域得到查询数据库的数据组成编辑模态框中的数据
var statusBtnVal = "";//三个状态的编辑按钮点击后获取的被点击的按钮的VALUE
var map = new Map;//获取编辑状态的上一次配置的数据(key=区域的ID。value=存入数据库的信息
var D_IOT_OBJ_TAG = [];
var D_IOT_HW_MODEL_TREE=[];//设备型号下拉树
var D_IOT_OBJ_TAG_TREE=[];//总分区
var D_IOT_EVENT_LEVEL = [];
var D_IOT_STATE_CHANGE = [];
var D_IOT_TELESIG_STATE = [];
var statusList = [];
var whichOneAreaTree=[];//梯次及预制仓分区下拉树
var describeList = [];//获取json中的方法名
var selectIsOutputMap = new Map();
var echartsConfig = [];//读取到数据库中的所有echarts的配置
var divInfo = [];//保存显示出的head方法中的w、d和divId
var functionList = [];//function.json文件中的数组
var divIdListEmpty = [];//保存这些divID下动态生成的标签，用于更换区域的时候清空这些DIV
var singleEmpty =[];//保存divID,清除单体信息
var divIdListHide = [];//保存这些divID下动态生成的标签，用于更换区域的时候隐藏这些DIV
var divIdListClear = [];//保存这些divID下动态生成的标签，用于更换区域的时候恢复初始状态
var defaultValue = [];//用于点击菜单跳转到缺省横幅按钮后触发下拉框的change事件生成echarts图表的值
var refreshDT_Echarts; //用于echarts定时刷新的任务的变量
var refreshDT_Head_DATA;//用于页面顶部的定时刷新数据的变量
var refreshDT_DEVICE_DATAList=[];
var titleName ="";
var titleBackgroundId = "";//记录上一次点击横幅的按钮的ID
var refreshDT_status1 ; //三个状态框的刷新周期
var refreshDT_status2 ; //三个状态框的刷新周期
var refreshGZ_1;//规则
var tagsMap = new Map();//保存根据area和点击的横幅查出的有关联的对象系数组
var echartsArr = [];
var whichOneArea=[]; //点击title
/**
 * 点击横幅初始化当前区域和对应的横幅下的数据
 */
// debugger
function clickTitleId(whichOneArea,name) {
    $("#myIframe").hide();
    window.clearInterval(refreshDT_status1);
    window.clearInterval(refreshDT_Echarts);//创建定时
    window.clearInterval(refreshDT_status2);
    window.clearInterval(refreshDT_Head_DATA)
    for(let i in divIdListClear){
        $("#"+divIdListClear[i]).text("0");
    }
    for(let i in singleEmpty){
        $("#"+singleEmpty[i]).empty();
    }
    for(let i in divIdListEmpty){
        $("#"+divIdListEmpty[i]).empty();
    }
    for(let i in divIdListHide){
        $("#"+divIdListHide[i]).hide();
    }
    for(let i in refreshDT_DEVICE_DATAList){
        window.clearInterval(refreshDT_DEVICE_DATAList[i])
    }
    checkedWhichArea = [];
    arr1=[];
    selects=[];
    arr=[];
    echartsArr = [];
    checkedModel = [];
    divInfo = [];
    hwTypeMap = new Map();
    if(titleBackgroundId){
        $("#"+titleBackgroundId+" a").css("background","");
    }
    let id = whichOneArea;//因为id和whichOneArea相同所以直接使用whichOneArea
    titleBackgroundId = whichOneArea;
    $("#"+id+" a").css("background","#337ab7");
    //document.getElementById(id).style.background="#337ab7"
    titleName = name;
    titleId = whichOneArea;//点击横幅的按钮的Id
    let areaId = $("#areaId").val();
    $("#DT_Device div").each(function () {
        $(this).remove();
    })
    if(whichOneArea == "DEV_FFDQ"){
        $("#hw-gz").hide();
        $("#echarts_show_div").hide();
        $("#select_show_div").hide();
        $("#running_status").hide();
        $("#single-div").hide();
        $("#f_div_1").show();
        $("#f_div_2").show();
        $("#f_div_3").show();
        $("#f_div_4").show();
        let d1=[]
        for(let i=1;i<41;i++){
            d1.push((1000+i).toString());
        }
        let obj1={
            yc:d1
        }
        reloadDT_DEVICE_DATA_1("AB001",obj1,"2","f_div_1",1,"环境监测仪");

        let d2=[]
        for(let i=1;i<63;i++){
            d2.push((1000+i).toString());
        }
        let obj2={
            yc:d2
        }
        reloadDT_DEVICE_DATA_1("AD001",obj2,"2","f_div_2",1,"电能质量");
        let d3=[]
        for(let i=1;i<63;i++){
            d3.push((1000+i).toString());
        }
        let obj3={
            yc:d3
        }
        reloadDT_DEVICE_DATA_1("AE001",obj3,"2","f_div_3",1,"光伏开关柜");
        let d4=[]
        for(let i=1;i<15;i++){
            d4.push((1000+i).toString());
        }
        let d5=[]
        for(let i=1;i<14;i++){
            d5.push((2000+i).toString());
        }
        let obj4={
            yc:d3,
            yx:d5
        }
        reloadDT_DEVICE_DATA_1("AC001",obj4,"2","f_div_4",2,"防孤岛装置");
         $('iframe').hide(); //接线图
    }else if(whichOneArea == "yzc_mainView"){//接线图
        $("#myIframe").show();
        $("#hw-gz").hide();
        $("#echarts_show_div").hide();
        $("#select_show_div").hide();
        $("#running_status").hide();   //
        $("#single-div").hide();
        $("#f_div_1").hide();
        $("#f_div_2").hide();
        $("#f_div_3").hide();
        $("#f_div_4").hide();
    }else if(whichOneArea == "NBQ_SERI"){
        $("#hw-gz").show();
        $("#echarts_show_div").show();
        $("#select_show_div").hide();
        $("#running_status").show();
        $("#single-div").show();
        $("#f_div_1").hide();
        $("#f_div_2").hide();
        $("#f_div_3").hide();
        $("#f_div_4").hide();
        $('iframe').hide(); //接线图
        //f_div_1 echarts-div
        $("#echarts-div").show();
        let area = $("#areaId").val();
        let json = {'tags': [area,titleBackgroundId,],'partyId': '208060df-d0fa-44bb-8fa3-d468b97d164a'};
        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "http://119.3.171.138:8082/iot/api/taged/gettags",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                //"Host": "www.chaotiaorap.info:21180",
                //"Connection": "keep-alive",ii
                "cache-control": "no-cache"
            },
            "data":JSON.stringify(json)
        }
        $.ajax(settings).done(function (response) {
            tagsMap = new Map();
            if(response.obj){
                let list = response.obj.list;
                if(list.length){
                    let tags = response.obj.list[0].tags;
                    for(let i in tags){
                        tagsMap.set(tags[i],"1");
                    }
                }
            }
        })
        initStatus();//初始化状态框(正常运行、异常运行、故障率)
        reloadGZ(titleId);
        findEcharts(area,whichOneArea)

    }


}

function findEcharts(areaData,oneArea){
    $.ajax({//拿到数据库保存的echarts配置的数据
        url: "http://119.3.171.138:9002/find",
        type: "post",
        dataType: "json",
        async:false,
        data: {
            "area": areaData,
            "whichOneArea": titleId,
            "type": "echarts",
        },
        success: function (data) {
            ///
            $("#select_show_div").empty
            echartsConfig = [];
            echartsConfig = data;
            let objName = [];
            objName.push({"value":oneArea,"obj":oneArea})
            for (let ec in data) {//echartsConfig是在初始化的时候在数据库中查询到的echarts配置的数据信息
                let refreshTagsModelData = data[ec].value.refreshTagsModelData;
                let echartsDType = [];
                let eList = data[ec].value.list;
                for (let ecl in eList) {
                    let echartsTypeConfig = eList[ecl].config;
                    // if(echartsDType.length>0){
                    //     for(let e in echartsDType){
                    //         if(echartsDType.indexOf(echartsTypeConfig.id) == -1){
                    //             echartsDType.push(echartsTypeConfig.id);
                    //         }
                    //     }
                    // }else{
                    echartsDType.push(echartsTypeConfig.id);
                    // }
                    echartsColorMap.set(eList[ecl].describe,eList[ecl].color);
                }
                if(ec == data.length-1){
                    if(echartsDType.length>0){
                        window.clearInterval(refreshDT_Echarts);//创建定时
                        if(parseInt(refreshTagsModelData)>0){//如果存在刷新周期的值就定时刷新
                            refreshDT_Echarts = window.setInterval(function () {initEchartsData(echartsDType, "initEcharts", objName, data[0].value.labelId);},parseInt(refreshTagsModelData) * 1000);
                            initEchartsData(echartsDType, "initEcharts", objName, data[0].value.labelId);
                        }
                    }
                }
            }
            ///////
            // initEchartsData(echartsDType,"initEcharts",whichOneArea,data[0].value.labelId);
        }
    })
}

let headDivId = "";
/**
 * 打开页面顶部阳光、风力、温度、电力的模态框的编辑按钮，以及获取当前点击的编辑按钮属于哪一个
 */
function editHeadConfig(headType){
    headDivId = headType;
    var databaseData = [];
    $("#myModal-head").modal("show");
    if(headDivId){
        $.ajax({//将配置保存到数据库
            url: "http://119.3.171.138:9002/find",
            type: "post",
            dataType: "json",
            async:false,
            data: {
                "area": $("#areaId").val(),
                "type": "head",
                "divId": headDivId
            },
            success: function (data) {
                if(data.length>0){
                    databaseData = data;
                    falg:for(let i in databaseData){
                        if(databaseData[i].area == $("#areaId").val()){
                            let headData = databaseData[i].value;
                            let divId = databaseData[i].divId;
                            if(headType == divId){
                                $("#inputHeadDeviceId").val(headData.headDeviceId);
                                $("#inputHeadDataId").val(headData.headDataId);
                                $("#inputHeadName").val(headData.headName);
                                $("#inputHeadUnit").val(headData.headUnit);
                                $("#inputRatio").val(headData.headFloat);
                                $("#float").val(headData.headRatio);
                                $("#refreshHeadData").val(headData.refreshHeadData);
                                break falg;
                            }else{
                                $("#inputHeadDeviceId").val("");
                                $("#inputHeadDataId").val("");
                                $("#inputHeadName").val("");
                                $("#inputHeadUnit").val("");
                                $("#inputRatio").val("");
                                $("#float").val("");
                                $("#refreshHeadData").val("");
                            }
                        }
                    }
                }
            }
        })
    }
}

/**
 *  保存页面顶部编辑阳光、风力、温度、电力的编辑配置
 */
function saveHead(){
    $("#head-save-btn").click(function () {
        let headDeviceId = $("#inputHeadDeviceId").val();
        let headDataId = $("#inputHeadDataId").val();
        let headName = $("#inputHeadName").val();
        let headUnit = $("#inputHeadUnit").val();
        let headRatio = $("#inputRatio").val();
        let headFloat = $("#float").val();
        let refreshHeadData = $("#refreshHeadData").val();
        if(headDeviceId && headDataId && headName && headUnit) {
            let json = {
                "headDeviceId": headDeviceId,
                "headDataId": headDataId,
                "headName": headName,
                "headUnit": headUnit,
                "headRatio": headRatio,
                "headFloat": headFloat,
                "refreshHeadData": refreshHeadData
            };
            $.ajax({//将配置保存到数据库
                url: "http://119.3.171.138:9002/save",
                type: "post",
                dataType: "json",
                async:false,
                data: {
                    "area": $("#areaId").val(),
                    "type": "head",
                    "divId": headDivId,
                    "value": JSON.stringify(json)
                },
                success: function (data) {
                    if(data.status == "保存成功"){
                        alert(data.status);
                        let tags = [$("#areaId").val()];
                        let text = "";
                        for(let d in D_IOT_OBJ_TAG){
                            if(D_IOT_OBJ_TAG[d].key == tags[0]){
                                text=D_IOT_OBJ_TAG[d].val;
                                break;
                            }
                        }
                        initArea({"text":text,"tags":tags,"titleId":titleId});
                        //将模态框中的保存成功后的上一次输入清空并且隐藏模态框
                        json = {};
                        $("#inputHeadDeviceId").val("");
                        $("#inputHeadDataId").val("");
                        $("#inputHeadName").val("");
                        $("#inputHeadUnit").val("");
                        $("#inputRatio").val("");
                        $("#float").val("");
                        $("#refreshHeadData").val("");
                        $("#myModal-head").modal("hide");//隐藏模态框
                    }else{
                        alert(data.status);
                    }


                }
            })
        }
    })
}

/**
 * 图表编辑按钮的事件
 */
function editEcharts(){
    //点击添加按钮的事件
    $("#addRealTimeDataId").click(function () {
        let realTimeDataId = $("#realTimeDataId").val();
        let realTimeDataName = $("#realTimeDataName").val()
        let color = $("#charts-color").val();
        if(realTimeDataId && realTimeDataName){
            let bool = true;//用于判断arr数组中是否存在该数据
            if(echartsArr.length > 0){//判断echartsArr中是否是空的
                for(let i in echartsArr){
                    for(let o in echarts_obj){
                        if(echartsArr[i].describe == realTimeDataName && echartsArr[i].config.id == checkedModel[0].id && echartsArr[i].selectOption.id == echarts_obj[o].id){//如果存在就为false
                            bool = false;
                        }
                    }
                }
                if(bool){//如果不存在则为true，则在aechartsArrrr中添加一条，并且拼接标签
                    let id = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                    if(echarts_obj.length>0){
                        let headStr = "<p class='deviceIdAndDataId'>数据ID:<a>" + realTimeDataId + "</a>&nbsp;&nbsp;数据点名称:<a>" + realTimeDataName + "</a>&nbsp;&nbsp;设备名称:<a>" + checkedModel[0].name + "</a>";
                        let ending = "&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: " + color + "' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + realTimeDataName +"\")'>移除</button>&nbsp;&nbsp;</p>";
                        let colorArrStr = "";
                        for(let i in echarts_obj){
                            colorArrStr=colorArrStr+"&nbsp;&nbsp;下拉框:<a>" + echarts_obj[i].name + "</a>";
                        }
                        $("#dataIdGroup").append(headStr+colorArrStr+ending);
                    }else{
                        $("#dataIdGroup").append("<p class='deviceIdAndDataId'>数据ID:<a>" + realTimeDataId + "</a>&nbsp;&nbsp;数据点名称:<a>" + realTimeDataName + "</a>&nbsp;&nbsp;设备名称:<a>" + checkedModel[0].name + "</a>&nbsp;&nbsp;下拉框:<a>未选择</a>&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: " + color + "' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + realTimeDataName +"\")'>移除</button>&nbsp;&nbsp;</p>");
                    }
                    if(checkedModel.length>0) {
                        echartsArr.push({
                            "dataId": realTimeDataId,
                            "describe": realTimeDataName,
                            "color": color,
                            "grade": realTimeDataId,
                            "config": checkedModel[0],
                            "selectOption": echarts_obj
                        });
                    }else{
                        alert("请选择设备类型")
                    }
                }else{
                    alert("请勿重复添加！")
                }
            }else{//如果为空不进行其他操作，直接保存进入echartsArr数组，并且拼接标签
                let id = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                if(echarts_obj.length>0){
                    let headStr = "<p class='deviceIdAndDataId'>数据ID:<a>" + realTimeDataId + "</a>&nbsp;&nbsp;数据点名称:<a>" + realTimeDataName + "</a>&nbsp;&nbsp;设备名称:<a>" + checkedModel[0].name + "</a>&nbsp;&nbsp;下拉框:";
                    let ending = "&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: " + color + "' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + realTimeDataName +"\")'>移除</button>&nbsp;&nbsp;</p>";
                    let colorArrStr = "";
                    for(let i in echarts_obj){
                        colorArrStr=colorArrStr+"<a>" + echarts_obj[i].name, + "</a>";
                    }
                    $("#dataIdGroup").append(headStr+colorArrStr+ending);
                }else{
                    $("#dataIdGroup").append("<p class='deviceIdAndDataId'>数据ID:<a>" + realTimeDataId + "</a>&nbsp;&nbsp;数据点名称:<a>" + realTimeDataName + "</a>&nbsp;&nbsp;设备名称:<a>" + checkedModel[0].name + "</a>&nbsp;&nbsp;下拉框:<a>未选择</a>&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: " + color + "' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + realTimeDataName +"\")'>移除</button>&nbsp;&nbsp;</p>");
                }
                if(checkedModel.length>0) {
                    echartsArr.push({
                        "dataId": realTimeDataId,
                        "describe": realTimeDataName,
                        "grade": realTimeDataId,
                        "color":color,
                        "config":checkedModel[0],
                        "selectOption":echarts_obj
                    });
                }else{
                    alert("请选择设备类型")
                }
            }
        }else{
            alert("请填写完整！")
        }
    })

    //对编辑完成的配置进行保存
    $("#save-echarts-config").click(function () {
        let labelId = $("#echarts-edit").val();
        let realTimeDeviceTitle = $("#realTimeDeviceTitle").val();
        let refreshTagsModelData = $("#refreshTagsModelData").val();
            let json = {
                "labelId":labelId,
                "echartsTitle":realTimeDeviceTitle,
                "refreshTagsModelData":refreshTagsModelData,
                "list":echartsArr,
            };
            let type = "echarts";
            let title = $("#hide-titleId").val();
            let modal ='myModal-head';
            saveEditData(json,modal,type,titleId,"");//调用公用保存方法
            $("#refreshTagsModelData").val('')
            $("#singleDataId").val('')
            $("#realTimeDeviceTitle").val('');

    })

    //点击编辑按钮打开模态框，将数据库中上一次编辑的值赋值并将输入框中的输入清空
    $("#echarts-edit").click(function () {
        checkedModel = [];
        echarts_obj = [];
        echartsArr = [];
        $("#dataIdGroup").empty();
        $("#refreshTagsModelData").val('')
        $("#singleDataId").val('')
        $("#realTimeDeviceTitle").val('');
        for(let x in echartsConfig) {
            if (titleId == echartsConfig[x].whichOneArea && echartsConfig[x].area == $("#areaId").val()) {
                let list = echartsConfig[x].value.list;
                $("#refreshTagsModelData").val(echartsConfig[x].value.refreshTagsModelData);
                echartsArr = list;
                if (list.length > 0) {
                    $("#dataIdGroup").empty();
                    for (let i in list) {
                        if(list[i].selectOption.length > 0){
                            let selectOption = list[i].selectOption;
                            let colorArrStr = "";
                            for(let i in selectOption){
                                if(i == selectOption.length-1){
                                    colorArrStr=colorArrStr+selectOption[i].name;
                                }else{
                                    colorArrStr=colorArrStr+selectOption[i].name+",";
                                }

                            }
                            $("#dataIdGroup").append("<p class='deviceIdAndDataId'>数据ID:<a>" + list[i].dataId + "</a>&nbsp;&nbsp;数据点描述:<a>" + list[i].describe + "</a>&nbsp;&nbsp;设备名称:<a>" + list[i].config.name + "</a>&nbsp;&nbsp;下拉框:<a>"+colorArrStr+"</a>&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: " + list[i].color + "' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + list[i].describe +"\")'>移除</button>&nbsp;&nbsp;</p>");
                        }else{
                            $("#dataIdGroup").append("<p class='deviceIdAndDataId'>数据ID:<a class='checkedWhichArea select-a' id='" + list[i].dataId + "'>" + list[i].dataId + "</a>&nbsp;&nbsp;数据点描述:<a class='checkedWhichArea select-a' id='" + list[i].describe + "'>" + list[i].describe + "</a>&nbsp;&nbsp;设备型号:<a class='checkedWhichArea select-a' id='" + list[i].config.id + "'>" + list[i].config.name + "</a>&nbsp;&nbsp;下拉框:<a class='checkedWhichArea select-a' >未选择</a>&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: "+list[i].color+"' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + list[i].describe + "\")'>移除</button>&nbsp;&nbsp;</p>");
                        }
                    }
                }
            }
        }
        $('#myModal-rt-sb').modal("show");//打开模态框
        getEcharts_jznbq_obj();
       // getWhichOneArea();//初始化树形下拉框（该处用于对象系）
        getModels();//初始化树形下拉框（该处用于设备类型）
    })

}

/***
 * 移除编辑按钮显示的模态框添加后的隐藏的数组中的数据
 */
function removeSelect(par,type) {
    var e = e || window.event;
    var deviceIdAndDataIdObj = e.target || e.srcElement;
    var fatherObj = deviceIdAndDataIdObj.parentElement;
    fatherObj.remove();

    for(let i in selects){
        if(selects[i].config.id == par){
            selects.splice(i, 1);
        }
    }
    for(let i in arr){
        if(arr[i].grade == par){
            arr.splice(i, 1);
        }
    }
    for(let i in arr1){
        if(arr1[i].grade == par){
            arr1.splice(i, 1);
        }
    }
    for(let i in colorList){
        if(colorList[i].describe == par){
            colorList.splice(i, 1);
        }
    }
    for(let i in echartsArr){
        if(echartsArr[i].describe == par){
            echartsArr.splice(i, 1);
        }
    }

}

/***
 * 获取对象系
 */
function getWhichOneArea() {
    var defaults = {
        zNodes: zNodes,
        height:233,
        chkStyle: "radio",
        callback:{
            onCheck: oncheckCalbask_1
        }
    }
    $("#select_jznbq_obj").drawMultipleTree(defaults);
}
/***
 * 树形下拉框选择后的回调
 * @param Nodelist
 */
var checkedWhichArea=[];//选中的分区
function oncheckCalbask_1(Nodelist) {
    if(Nodelist.length>0){
        for(let i in Nodelist){
            let json={"id":Nodelist[i].id,"name":Nodelist[i].name};
            checkedWhichArea[0]=json;
        }
    }
}
/***
 * 获取对象系
 */
function getEcharts_jznbq_obj() {
    var defaults = {
        zNodes: zNodes,
        height:233,
        //chkStyle: "radio",
        callback:{
            onCheck: echarts_jznbq_obj
        }
    }
    $("#echarts_jznbq_obj").drawMultipleTree(defaults);
}

/***
 * 树形下拉框选择后的回调
 * @param Nodelist
 */
var echarts_obj=[];//选中的分区
function echarts_jznbq_obj(Nodelist) {
    echarts_obj= [];
    if(Nodelist.length>0){
        let NodeArr = [];
        for(let i in Nodelist){
            let json={"id":Nodelist[i].id,"name":Nodelist[i].name};
            NodeArr.push(json);
        }
        echarts_obj=NodeArr;
    }
}

/***
 * 获取设备型号下拉框
 */
function getModels() {
    var defaults = {
        zNodes: D_IOT_HW_MODEL_TREE,
        height:233,
        chkStyle: "radio",
        callback:{
            onCheck: oncheckCalbask_2
        }
    }
    $("#single_jznbq_hw").drawMultipleTree(defaults);
    $("#echarts_jznbq_hw").drawMultipleTree(defaults);
    $("#select_Model").drawMultipleTree(defaults);
}
var checkedModel =[];
function oncheckCalbask_2(Nodelist) {
    if(Nodelist.length>0){
        for(let i in Nodelist){
            let json={"id":Nodelist[i].id,"name":Nodelist[i].name};
            checkedModel[0]=json;

        }
    }
}

function conver(s) {
    return s < 10 ? '0' + s : s;
}

function formatDateTime(val) {
    let date = new Date(parseInt(val));
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return (hours + ":" + minutes + ":" + seconds)
}

/***
 * 将毫米数时间转换位正常时间
 * @param val
 * @returns {string}
 */
function formatDate(val) {
    let date = new Date(parseInt(val));
    let year = date.getFullYear();
    let month = conver(date.getMonth() + 1);
    let day = conver(date.getDate());
    let hours = conver(date.getHours());
    let minutes = conver(date.getMinutes());
    let seconds = conver(date.getSeconds());
    return (year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds)
}
function initArea(data){

    for(let i in divIdListClear){
        $("#"+divIdListClear[i]).text("0");
    }
    for(let i in divIdListEmpty){
        $("#"+divIdListEmpty[i]).empty();
    }
    for(let i in divIdListHide){
        $("#"+divIdListHide[i]).hide();
    }
    if(data){
        $("#base_nav_site").html(data.text)
        let area = data.tags[0];
        $("#areaId").val(area);
        if(data.titleId){
            $("#"+data.titleId).click();
        }else{
            $("#NBQ_SERI").click();   //原箱变key
        }
    }else{
        $("#areaId").val("LINE1");
        $("#base_nav_site").html("农垦分界面")
        $("#NBQ_SERI").click();     //原箱变key
    }
    $(".unit").text("");
    $(".head").text("");
    initHead();//点击选择区域的时候显示数据
    reloadAlert();//初始化右上角的警示框的内容
    initPulldownChange()
    //initEditPulldown();
}
/**
 * 根据配置获取数据初始化导航和集成线路菜单
 */
var dd=[{
  "text":"主页",
  "href":"NK_Main.html",
  "state":{
    "expanded":true
  },
}];
function initData() {
    var settings1 = {//获取D_IOT_EVENT_LEVEL、D_IOT_TELESIG_STATE标签里面的内容
        "async": false,
        "crossDomain": true,
        "url": "http://119.3.171.138:8082/iot/api/dict/get",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            //"Host": "www.chaotiaorap.info:21180",
            //"Connection": "keep-alive",
            "cache-control": "no-cache"
        },
        "data": "{dicts:['D_IOT_EVENT_LEVEL','D_IOT_TELESIG_STATE'],industry:'ubiIoT'}"
    };
    $.ajax(settings1).done(function (response) {
        let num = 0;
        for (var i in response.obj.list) {
            switch (response.obj.list[i].name) {
                case "D_IOT_EVENT_LEVEL":
                    D_IOT_EVENT_LEVEL = response.obj.list[i].data;
                    var array = [];
                    var PPObj = {};
                    var nodes = [];
                    for (var i in D_IOT_EVENT_LEVEL) {//将数据拼接成警示编辑模态框中的树形多选框的格式
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
                case "D_IOT_STATE_CHANGE":
                    D_IOT_STATE_CHANGE=response.obj.list[i].data;
                    break;
                case "D_IOT_TELESIG_STATE":
                    D_IOT_TELESIG_STATE=response.obj.list[i].data;
                    break;
            }
        }
    })
    var settings2 = {//获取D_IOT_OBJ_TAG、D_IOT_STATE_CHANGE、D_IOT_STATE_CHANGE三个标签中的数据
        "async": false,
        "crossDomain": true,
        "url": "http://119.3.171.138:8082/iot/api/dict/get",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            //"Host": "www.chaotiaorap.info:21180",
            //"Connection": "keep-alive",
            "cache-control": "no-cache"
        },
        "data": "{dicts:['D_IOT_OBJ_TAG','D_IOT_HW_MODEL'],partyId: '208060df-d0fa-44bb-8fa3-d468b97d164a'}"
    };
    $.ajax(settings2).done(function (response) {
        let num = 0;
        for (var i in response.obj.list) {
            switch (response.obj.list[i].name) {
                case "D_IOT_OBJ_TAG":
                    num++;
                    D_IOT_OBJ_TAG = response.obj.list[i].data;
                    //新增： 集尘线路集合。新增导航栏集合
                    let lines = [];
                    for (let k in D_IOT_OBJ_TAG) {
                        if (num == 1) {
                            let obj={
                                id: D_IOT_OBJ_TAG[k].key,
                                name: D_IOT_OBJ_TAG[k].val,
                                open: true
                            };
                            if(D_IOT_OBJ_TAG[k].pkey){
                                obj.pId=D_IOT_OBJ_TAG[k].pkey
                            };
                            zNodes.push(obj);
                            if (D_IOT_OBJ_TAG[k].pkey == "LINE") {
                                let obj = {};
                                obj.text = D_IOT_OBJ_TAG[k].val;
                                obj.href = "#";
                                obj.tags = [D_IOT_OBJ_TAG[k].key]
                                lines.push(obj)
                            }
                            if (D_IOT_OBJ_TAG[k].key == "DEV_FFDQ") {
                                $("#base_menu_bar").append("<div  style='flex:1;' id='"+ D_IOT_OBJ_TAG[k].key+"' onclick=clickTitleId('"+D_IOT_OBJ_TAG[k].key+"','"+D_IOT_OBJ_TAG[k].val+"')><a class='title-a'>" + D_IOT_OBJ_TAG[k].val + "</a></div>")
                            }
                            if (D_IOT_OBJ_TAG[k].key == "NBQ_SERI") {
                                ////////////
                                if(k==1){
                                    titleId=D_IOT_OBJ_TAG[k].key;
                                }
                                $("#base_menu_bar").prepend("<div style='flex:1;' id='"+ D_IOT_OBJ_TAG[k].key+"' onclick=clickTitleId('"+D_IOT_OBJ_TAG[k].key+"','"+D_IOT_OBJ_TAG[k].val+"')><a class='title-a'>" + D_IOT_OBJ_TAG[k].val + "</a></div>")
                            }
                        }
                    }
                    if (num == 1) {
                      dd[0].nodes=lines;
                        $("#base_nav_stationlist_tree").treeview({//下拉菜单赋值
                            showBorder: false,
                            data: dd,
                            backColor: 'white',
                            enableLinks: true,
                            showTags: true,
                            onNodeSelected: function (event, data) {//当下拉菜单被点击时触发的事件
                                $("#popover860567").hide();//选择area以后隐藏选择的div
                                statusList = [];//点击区域清空状态的数组
                                initArea(data);
                            }
                        });
                        let flag = getQueryVariable("flag");
                        if (!flag) {
                            $("#base_nav_site").html(lines[0].text);
                            area = lines[0].tags[0];
                            $("#areaId").val(area);
                        } else {
                            for (let i in lines) {
                                if (lines[i].tags[0] == "LINE4") {
                                    $("#base_nav_site").html(lines[i].text);
                                    area = lines[i].tags[0];
                                    $("#areaId").val(area);
                                }
                            }
                        }
                    }
                    for (var i in D_IOT_OBJ_TAG_TREE) {
                        if (D_IOT_OBJ_TAG_TREE[i].isLeaf == false) {
                            whichOneAreaTree.push({
                                id: D_IOT_OBJ_TAG_TREE[i].key,
                                name: D_IOT_OBJ_TAG_TREE[i].val,
                                pid: D_IOT_OBJ_TAG_TREE[i].pkey,
                                open: true
                            })
                        } else {
                            whichOneAreaTree.push({
                                id: D_IOT_OBJ_TAG_TREE[i].key,
                                name: D_IOT_OBJ_TAG_TREE[i].val,
                                pId: D_IOT_OBJ_TAG_TREE[i].pkey
                            })
                        }
                    }
                    break;
                case "D_IOT_HW_MODEL":
                    D_IOT_HW_MODEL = response.obj.list[i].data;
                    for (var i in D_IOT_HW_MODEL) {
                        if (D_IOT_HW_MODEL[i].isLeaf == false) {
                            D_IOT_HW_MODEL_TREE.push({
                                id: D_IOT_HW_MODEL[i].key,
                                name: D_IOT_HW_MODEL[i].val,
                                pid: D_IOT_HW_MODEL[i].pkey,
                                open: true
                            })
                        } else {
                            D_IOT_HW_MODEL_TREE.push({
                                id: D_IOT_HW_MODEL[i].key,
                                name: D_IOT_HW_MODEL[i].val,
                                pId: D_IOT_HW_MODEL[i].pkey
                            })
                        }
                    }
                    break;
                case "D_IOT_TELESIG_STATE":
                    D_IOT_TELESIG_STATE=response.obj.list[i].data;
                    break;
            }
        }
    });
}
/**
 * 选择区域和设备抬头以后获取数据，将find接口的数据遍历获取其数组对应的MSR接口中的对象系生成对应的下拉框
 */
//let inputId = "";
function initEditPulldown() {
    let area = $("#areaId").val();
    let mapValue = tagsMap.get(area);//map中的value
   // if(mapValue){
        $.ajax({//获取数据库中存储的的select的配置
            url:"http://119.3.171.138:9002/find",
            type:"post",
            dataType:"json",
            async:false,
            data:{
                "area":$("#areaId").val(),
                "whichOneArea" : titleId,
                "type": "select_dt",
            },
            success:function (data) {
                $("#selects").empty();//清空select，防止上一次存在select
                if(data.length > 0){
                    let resultArr = data[0].value.list;
                    let selects = data[0].value.labelId;
                    let showName = data[0].value.showName;
                    let echartsDiv = data[0].value.echartsDiv;
                    let functionName = "";
                    let addP = true;
                    resultListSelect = data[0];

                    defaultValue = [];
                    for(let i in resultArr){
                        var count = 0;//判断所在的for循环时候第一次进入if判断
                        if(resultArr[i].isShow == 'Y'){
                            if(addP){
                                $("#"+selects).append("<p style='display:inline'>"+showName+"  "+"</p>");
                                addP=false;
                            }
                            divIdListEmpty.push(selects);
                            selectIsOutputMap.set(resultArr[i].config.id,resultArr[i].isOutput);//保存每一个select是否输出，用于initPulldownChange方法
                            $("#"+selects).append( "<select class='form-control select-class echarts-select' style='display:inline' id='"+resultArr[i].config.id+"' style='float:left;'><option class='option' value='0'>---请选择---</option></select>");
                                let list = D_IOT_OBJ_TAG;
                                for(let x in  list){
                                    let pkey = list[x].pkey;
                                    let key = list[x].key;
                                    let mapValue = tagsMap.get(key);//map中的value
                                    if(pkey == resultArr[i].config.id && mapValue){
                                        let optionValue = list[x].key;
                                        let selectId = resultArr[i].config.id;
                                        if(count == 0){
                                            $("#"+resultArr[i].config.id).append("<option class='option' id='"+resultArr[i].config.id+"-"+x+"' value='"+list[x].key+"'>"+list[x].val+"</option>");
                                            if(defaultValue.length >0 ){
                                                for(let dv in defaultValue){
                                                    if(defaultValue[dv].optionValue != optionValue && defaultValue[dv].selectId != selectId){
                                                        defaultValue.push({"optionValue":optionValue,"selectId":selectId});//用于initPulldownChange方法中触发change事件的value
                                                    }
                                                }
                                            }else{
                                                defaultValue.push({"optionValue":optionValue,"selectId":selectId});//用于initPulldownChange方法中触发change事件的value
                                            }
                                            count++;
                                        }else{
                                            $("#"+resultArr[i].config.id).append("<option class='option' id='"+resultArr[i].config.id+"-"+x+"' value='"+list[x].key+"'>"+list[x].val+"</option>");
                                        }

                                    }
                                }
                        }else{
                            //如果判断是否显示不为Y，即为隐性的属性，隐藏在div中，所以创建一个input为其赋值，然后隐藏input
                            functionName =resultArr[i].functionName;
                            inputId = resultArr[i].config.id;
                            obj = resultArr[i].config.name;
                            $("#"+selects).append( "<input class='form-control' value='"+resultArr[i].config.id+"'  type='hidden' id='hide-titleId' style='float:left;'>");
                        }
                    }
                    if($("#"+selects+" select").length>0){
                        initPulldownChange();//在生成所有的select之后调用该方法，用于动态生成刚刚创建的select的change事件
                    }else{
                        if(echartsConfig.length>0) {
                            let objName = [];
                            objName.push({"value":inputId,"obj":inputId})
                            for (let ec in echartsConfig) {//echartsConfig是在初始化的时候在数据库中查询到的echarts配置的数据信息
                                let refreshTagsModelData = echartsConfig[ec].value.refreshTagsModelData;
                                let echartsDType = [];
                                let eList = echartsConfig[ec].value.list;
                                for (let ecl in eList) {
                                    let echartsTypeConfig = eList[ecl].config;
                                    if(echartsDType.length>0){
                                        for(let e in echartsDType){
                                            if(echartsDType.indexOf(echartsTypeConfig.id) == -1){
                                                echartsDType.push(echartsTypeConfig.id);
                                            }
                                        }
                                    }else{
                                        echartsDType.push(echartsTypeConfig.id);
                                    }
                                    echartsColorMap.set(eList[ecl].describe,eList[ecl].color);
                                }
                                if(ec == echartsConfig.length-1){
                                    if(echartsDType.length>0){
                                        window.clearInterval(refreshDT_Echarts);//创建定时
                                        if(parseInt(refreshTagsModelData)>0){//如果存在刷新周期的值就定时刷新
                                            refreshDT_Echarts = window.setInterval(function () {initEchartsData(echartsDType, functionName, objName, echartsDiv);},parseInt(refreshTagsModelData) * 1000);
                                            initEchartsData(echartsDType, functionName, objName, echartsDiv);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
        for(let dv in defaultValue){
            $('#'+defaultValue[dv].selectId).val(defaultValue[dv].optionValue).trigger("change");
        }
   // }
}


var echartsColorMap = new Map();//获取到每个图表配置中的颜色
/**
 * 初始化select的Change事件
 */
function initPulldownChange(){
    let title = $("#hide-titleId").val();
    $.ajax({//拿到数据库保存的下拉框配置的数据
        url: "http://119.3.171.138:9002/find",
        type: "post",
        dataType: "json",
        async:false,
        data: {
            "area": $("#areaId").val(),
            "whichOneArea":title,
            "type": "select_dt"
        },
        success: function (data) {
            if(data.length > 0){
                for(let q in data){
                    let dataList = data[q].value.list;//拿到数据库保存的下拉框配置的数据
                    let labelId = data[q].value.labelId;
                    let echartsDiv = data[q].value.echartsDiv;
                    let refreshTagsModelData = "";
                    //存入数据库select的父级divId的Id，然后获取children("select")来得到生成的select，并为其绑定change时间
                    $("#"+labelId).children("select").change(function() {
                        echartsColorMap = new Map();
                        let echartsDType = [];
                        var opt = [];
                        $("#" + labelId).children("select").each(function () {
                            if ($(this).val() != 0) {
                                opt.push({"obj": $(this).attr("id"), "value": $(this).val()});//得到他的所有的id和val  id=对象系名称 、val = 选中的option
                            }
                        });
                        for(let i in singleEmpty){
                            $("#"+singleEmpty[i]).empty();
                        }
                        if (opt.length == $("#" + labelId).children("select").length) {//判断opt的长度和select的长度是否相等
                            if(echartsConfig.length>0){
                                let bool = true;
                                for(let ec in echartsConfig){//echartsConfig是在初始化的时候在数据库中查询到的echarts配置的数据信息
                                    let eList = echartsConfig[ec].value.list;
                                    for(let ecl in eList){
                                        let echartsTypeConfig = eList[ecl].config;
                                        for(let o in opt){
                                            if(eList[ecl].selectOption.length>0){
                                                let selectOption = eList[ecl].selectOption;
                                                for(let s in selectOption){
                                                    if(selectOption[s].id == opt[o].value){
                                                        bool = false;
                                                        if(echartsDType.length>0){
                                                            for(let e in echartsDType){
                                                                if(echartsDType[e].indexOf(echartsTypeConfig.id) == -1){
                                                                    echartsDType.push(echartsTypeConfig.id);//echarts中配置的设备类型
                                                                }
                                                            }
                                                        }else{
                                                            echartsDType.push(echartsTypeConfig.id);//echarts中配置的设备类型
                                                        }
                                                        echartsColorMap.set(eList[ecl].describe,eList[ecl].color);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    refreshTagsModelData = echartsConfig[ec].value.refreshTagsModelData;
                                }
                                if(bool){
                                    for(let ec in echartsConfig){//echartsConfig是在初始化的时候在数据库中查询到的echarts配置的数据信息
                                        let eList = echartsConfig[ec].value.list;
                                        for(let ecl in eList){
                                            let echartsTypeConfig = eList[ecl].config;
                                            if(echartsDType.length>0){
                                                for(let e in echartsDType){
                                                    if(echartsDType[e].indexOf(echartsTypeConfig.id) == -1){
                                                        echartsDType.push(echartsTypeConfig.id);//echarts中配置的设备类型
                                                    }
                                                }
                                            }else{
                                                echartsDType.push(echartsTypeConfig.id);//echarts中配置的设备类型
                                            }
                                            echartsColorMap.set(eList[ecl].describe,eList[ecl].color);
                                        }
                                    }
                                }
                            }
                            if (echartsDType.length>0) {//得到设备类型，如果没有得到就清空echarts图表所在的div，删除上一次生成的图表
                                for (let i in dataList) {//dataList为数据库中获取的select的配置
                                    if (selectIsOutputMap.get(dataList[i].config.id) == "Y") {//对比是否为显示，"Y"即为显示
                                        let resultFunctionName = dataList[i].functionName;//获取方法名，用于通过中间层调用方法
                                        window.clearInterval(refreshDT_Echarts);//创建定时
                                        if(parseInt(refreshTagsModelData)>0){//如果存在刷新周期的值就定时刷新
                                            opt.push({"value":inputId,"obj":inputId})
                                            refreshDT_Echarts = window.setInterval(function () {initEchartsData(echartsDType,resultFunctionName,opt,echartsDiv);},parseInt(refreshTagsModelData) * 1000);
                                        }
                                        //初始化echarts的数据
                                        initEchartsData(echartsDType,resultFunctionName,opt,echartsDiv);
                                    }
                                }
                            }else{
                                $("#"+echartsDiv).empty();
                            }
                        }
                    })
                }
            }
        }
    })
}

/**
 *  根据分类生成图表
 * @param dType 设备类型 用于调用接口
 * @param resultFunctionName 方法名，用于eval()
 * @param objName 对象系名称
 * @param echartsDiv 图表展示的父级divID
 */
var hwTypeMap = new Map();//
function initEchartsData(echartsDType,resultFunctionName,objName,echartsDiv) {
    $("#"+echartsDiv).empty();
    let area = $("#areaId").val();
    let whichOneArea = $("#hide-titleId").val();
    let dataIDArr = [];
    let dataIDArrMap = new Map();
    let dataIdArrMapList = [];
    for (let y in echartsConfig) {
        refreshTagsModelData = echartsConfig[y].value.refreshTagsModelData;
        let echartsConfigList = echartsConfig[y].value.list;
        //将数据根据数据点名称进行分类，存入map
        if (echartsConfigList.length > 0) {
            let bool = true;
            for (let a in echartsConfigList) {
                for(let o in objName){
                    if(echartsConfigList[a].selectOption.length>0){
                        let selectOption = echartsConfigList[a].selectOption;
                        for(let so in selectOption){
                            if(objName[o].value == selectOption[so].id){
                                bool = false;
                                dataIDArr = dataIDArrMap.get(echartsConfigList[a].describe);
                                if(dataIDArr){
                                    dataIDArr.push(echartsConfigList[a].dataId);
                                    dataIDArrMap.set(echartsConfigList[a].describe,{"dataIDArr":dataIDArr,"hwType":echartsDType[0]})
                                }else{
                                    dataIDArr = [];
                                    dataIDArr.push(echartsConfigList[a].dataId);
                                    dataIDArrMap.set(echartsConfigList[a].describe,{"dataIDArr":dataIDArr,"hwType":echartsDType[0]})
                                }
                            }
                        }
                    }
                }
            }
            if(bool){
                for (let a in echartsConfigList) {
                    dataIDArr = dataIDArrMap.get(echartsConfigList[a].describe);
                    if(!dataIDArr){
                        for(let i in echartsDType){
                            if(echartsDType[i] == echartsConfigList[a].config.id){
                                if(dataIDArr){
                                    dataIDArr.push(echartsConfigList[a].dataId);
                                    dataIDArrMap.set(echartsConfigList[a].describe,{"dataIDArr":dataIDArr,"hwType":echartsDType[i]})
                                }else{
                                    dataIDArr = [];
                                    dataIDArr.push(echartsConfigList[a].dataId);
                                    dataIDArrMap.set(echartsConfigList[a].describe,{"dataIDArr":dataIDArr,"hwType":echartsDType[i]})
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (dataIDArrMap.size > 0) {//判断是否有数据存入map
        let size = dataIDArrMap.size;
        var num = 12/size;//取map得size设置col-md的占比，页面宽度等分12分
        let objTags = [area];//先创建一个数组，其中存在区域ID和横幅的当前被点击的按钮的ID，id即为对象系
        for(let n in objName){//遍历调用该方法的方法传入的objName参数，并且遍历，查找是否与objTags是否存在相同数据，如果不存在则存入objTags数组
            let flag = true;
            for(let on in objTags){//判断
                if(objTags[on] == objName[n].obj){//如果存在则为false
                    flag = false;
                }
            }
            if(flag){//为true即为不存在，就保存进入objTags
                objTags.push(objName[n].value)
            }
        }
        let count = 0;
        dataIDArrMap.forEach(function (value, key, map) {//遍历分类后的dataIDArrMap
            let dataIDArr = value.dataIDArr;
            let hwType = value.hwType;
            var totalrecord = 0;
            let models = [];
            models.push({_mdl: hwType, d: dataIDArr})
            let hwJson = {};
            hwJson = {"objTags": objTags,"_mdl": hwType,
                "partyId":'208060df-d0fa-44bb-8fa3-d468b97d164a'
            };
            let json = {
                "objTags": objTags,//区域、title
                "models": models,//设备型号、数据集合
                "isRT": true,
                "partyId": "208060df-d0fa-44bb-8fa3-d468b97d164a",
                "outSet": "NK001"
            }
            let settings = {
                "async": false,
                "crossDomain": true,
                "url": "http://119.3.171.138:8082/iot/api/dpt/data/find/1",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Cache-Control": "no-cache",
                    "cache-control": "no-cache"
                },
                "data": JSON.stringify(json)
            }
            $.ajax(settings).done(function (response) {
                if(response.obj != null && response.resMsg == "信息获取成功"){
                    var hwList = [];
                    $.ajax({
                        "async": false,
                        "crossDomain": true,
                        "url": "http://119.3.171.138:8082/iot/api/hw/find",
                        "method": "POST",
                        "headers": {
                            "Content-Type": "application/json",
                            "Accept": "*/*",
                            "Cache-Control": "no-cache",
                            "cache-control": "no-cache"
                        },
                        "data": JSON.stringify(hwJson)
                    }).done(function (response) {
                        hwList = response.obj.list;
                        for(let h in hwList){
                            hwTypeMap.set(hwList[h].kSNO,hwList[h]._mdl)
                        }
                    })
                        var responseList = response.obj.list;
                        let funcName = "";
                        if(num != 12){
                            divIdListEmpty.push(echartsDiv)
                            $("#"+echartsDiv).append("<div class='col-md-"+num+" parent-bat' id='echartsDiv"+count+"'><div id='echartsDivSub"+count+"' class='bat'></div></div>");
                            funcName =resultFunctionName + "(key,'echartsDivSub'+count,responseList,echartsDType,hwList)";//拼接方法
                        }else{
                            $("#"+echartsDiv).append("<div class='col-md-"+num+" parent-bat' id='echartsDiv"+count+"'><div id='echartsDivSub"+count+"' class='bat'></div></div>");
                            funcName =resultFunctionName + "(key,'echartsDiv'+count,responseList,echartsDType,hwList)";//拼接方法
                        }
                        if(funcName != ""){
                            eval(funcName)//使用eval方法将方法字符串转为js代码
                        }
                        count++;
                }else{
                    $("#"+echartsDiv).empty();
                    $("#"+echartsDiv).append("<div style='padding-left:50%;color:#FFFFFF'>暂无设备类型！</div>");
                }
            })
        });
    }else{
        $("#"+echartsDiv).empty();
        $("#"+echartsDiv).append("<div style='padding-left:50%;color:#FFFFFF'>暂无设备类型！</div>");
    }
}

/**
 * 配置页面点击状态框后获取对应的数据在模态框中显示上一次配置
 * @param statusBtnVal 点击的状态框的value
 */
function findStatusConfig(statusBtnVal){
    $.ajax({
        url:"http://119.3.171.138:9002/find",
        type:"post",
        dataType:"json",
        async:false,
        data:{
            "area":$("#areaId").val(),
            "whichOneArea" : titleId,
            "type": "alert"
        },
        success:function (data) {
            $("#gz-group-status").empty();
            if (data.length > 0) {
                let resultArr = data[0].value.list;
                let resultStatusBtnVal = data[0].value.statusBtnVal;//获取属于哪个状态框
                if(statusBtnVal == resultStatusBtnVal){//判断是否是同一个状态框
                    arr = resultArr;//将数据库中上次保存的数据的json数组存入arr
                    for (let i in resultArr) {
                        $("#gz-group-status").append("<p class='deviceIdAndDataId'>设备型号:<a class='status-unit-type'>" + resultArr[i].type + "</a>&nbsp;&nbsp;数据ID:<a class='status-dataId'>" + resultArr[i].dataId + "</a>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + resultArr[i].type + "\")'>移除</button>&nbsp;&nbsp;</p>");
                    }
                }
            }
        }
    })
}



/**
 *  用于onclick事件
 * @param echartsDiv echarts要显示的Div的id
 */
var echartsDivStr = "";//用于获取echarts要显示的Div的id
function saveLabelId(echartsDiv){
    echartsDivStr = echartsDiv;
}

/**
 *  用于onclick事件
 * @param echartsDiv echarts要显示的Div的id
 */

function saveSelect(selectDiv){
    var saveSelectList = [];
    let count = 0;
    let hideInputValue = $("#"+selectDiv +" input").val();
    let selectParent = $("#"+selectDiv).attr("id");
    let p = $("#"+selectDiv +" p").text();
    $("#"+selectDiv+" select").each(function() {
        let id = $(this).attr("id");
        let ret =[];
        $("#"+id+" option").each(function(e){
            //遍历所有option
            let value = $(this).val();   //获取option值
            let text = $(this).text();
            if(text!=''){
                let o = {"text":text,"value":value};
                ret.push(o);
            }
        });
        saveSelectList.push({"count":count,"id":id,"selectOption":ret})
        count++;
    })
    var json = {};
    $.ajax({//拿到数据库保存的下拉框配置的数据
        url: "http://119.3.171.138:9002/find",
        type: "post",
        dataType: "json",
        async: false,
        data: {
            "area": $("#areaId").val(),
            "whichOneArea": $("#hide-titleId").val(),
            "type": "select_dt",
        },
        success: function (data) {
            if(data.length>0){
                let functionName = "";
                let echartsDiv = data[0].value.echartsDiv;
                let list = data[0].value.list;
                for(let l in list){
                    let lLd = list[l].config.id;
                    for(let s in saveSelectList){
                        let sID = saveSelectList[s].id;
                        if(lLd == sID){
                            functionName = list[l].functionName;
                            saveSelectList[s].isOutput =list[l].isOutput;
                        }
                    }
                }
                if(!functionName){
                    for(let l in list){
                        functionName = list[l].functionName;
                    }
                }
                json = {"selectParent":selectParent,"hideInput":hideInputValue,"functionName":functionName,"selectList":saveSelectList,"name":p,"echartsDiv":echartsDiv};
            }
        }
    })

    $.ajax({//拿到数据库保存的下拉框配置的数据
        url: "http://119.3.171.138:9002/save",
        type: "post",
        dataType: "json",
        async: false,
        data: {
            "area": $("#areaId").val(),
            "whichOneArea": $("#hide-titleId").val(),
            "type": "select_ui",
            "value": JSON.stringify(json)
        },
        success: function (data) {
            if(data.status == "保存成功"){
                alert(data.status);
                let tags = [$("#areaId").val()];
                let text = "";
                for(let d in D_IOT_OBJ_TAG){
                    if(D_IOT_OBJ_TAG[d].key == tags[0]){
                        text=D_IOT_OBJ_TAG[d].val;
                        break;
                    }
                }
                initArea({"text":text,"tags":tags,"titleId":titleId});
            }else{
                alert(data.status);
            }
        }
    })
}
/**
 * 下拉框编辑具体操作
 */
function editPulldown(){
    //编辑模态框增加下拉框的配置
    $("#add-seletes").click(function () {
        let func = $("#gz-select_jznbq_func").val();
        let isshow = $("#gz-select_jznbq_isshow").val();
        let output = $("#gz-select_jznbq_output").val();
        var deviceIdAndDataIdText = '';
        if (isshow && output) {
            if($("#gz-group-select").children().length > 0){
                let status = false;
                $(".select-a").each(function () {
                    deviceIdAndDataIdText = $(this).attr("id");
                    if(deviceIdAndDataIdText != null && deviceIdAndDataIdText != "" &&deviceIdAndDataIdText != undefined){
                        if(checkedWhichArea[0].id == deviceIdAndDataIdText){
                            status = true;//如果为true说明数组中有相同的
                        }
                    }
                })
                if(!status){
                    let id=checkedWhichArea[0].id;
                    $("#gz-group-select").append("<p class='deviceIdAndDataId'>设备型号:<a class='checkedWhichArea select-a' id='"+id+"'>" + checkedWhichArea[0].name + "</a>&nbsp;&nbsp;绑定方法:<a class='func select-a'>" + func + "</a>&nbsp;&nbsp;是否显性:<a class='isshow select-a'>" + isshow + "</a>&nbsp;&nbsp;是否输出:<a class='output select-a'>" + output + "</a>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + id + "\")'>移除</button>&nbsp;&nbsp;</p>");
                    selects.push({"isOutput":output,"isShow":isshow,"functionName":func,"config":checkedWhichArea[0]});
                }
            }else{
                let id;
                if(checkedWhichArea.length>0){
                    id=checkedWhichArea[0].id;
                }else{
                    alert("请重新选择对象系");
                }
                $("#gz-group-select").append("<p class='deviceIdAndDataId'>设备型号:<a class='checkedWhichArea select-a' id='"+id+"'>" + checkedWhichArea[0].name + "</a>&nbsp;&nbsp;绑定方法:<a class='func select-a'>" + func + "</a>&nbsp;&nbsp;是否显性:<a class='isshow select-a'>" + isshow + "</a>&nbsp;&nbsp;是否输出:<a class='output select-a'>" + output + "</a>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + id + "\")'>移除</button>&nbsp;&nbsp;</p>");
                selects.push({"isOutput":output,"isShow":isshow,"functionName":func,"config":checkedWhichArea[0]});
            }
        } else {
            alert("请填写完整！");
        }
    });
    //编辑模态框删除按钮
    $("#rm-select").click(function () {
        checkedWhichArea = [];
        selects = [];
        $("#gz-group-select").empty();
    })
    //编辑模态框保存按钮
    $("#save_select").click(function () {
        let showName = $("#gz-select_jznbq_show_name").val();
        let labelId =$('#select-jznbq-btn').prev().attr("id");
        let json ={"list":selects,"labelId":labelId,"echartsDiv":echartsDivStr,"showName":showName};
        saveEditData(json,"myModal-rt-seletes","select_dt",titleId,"");
        let tags = [$("#areaId").val()];
        let text = "";
        for(let d in D_IOT_OBJ_TAG){
            if(D_IOT_OBJ_TAG[d].key == tags[0]){
                text=D_IOT_OBJ_TAG[d].val;
                break;
            }
        }
        initArea({"text":text,"tags":tags,"titleId":titleId});
    })

    //打开编辑模态框
    $("#select-jznbq-btn").click(function () {
        $("#gz-group-select").empty();
        checkedWhichArea = [];
        selects = [];
        let areaId = $("#areaId").val();
        if(titleId == resultListSelect.whichOneArea && areaId == resultListSelect.area){
            let value =  resultListSelect.value.list;
            let showName =  resultListSelect.value.showName;
            selects = value;
            $("#gz-select_jznbq_show_name").val(showName);
            if(value.length>0){
                $("#gz-group-select").empty();
                for(let i in value){
                    $("#gz-group-select").append("<p class='deviceIdAndDataId'>设备型号:<a class='checkedWhichArea' id='"+value[i].config.id+"'>" + value[i].config.name + "</a>&nbsp;&nbsp;绑定方法:<a class='func select-a'>" + value[i].functionName + "</a>&nbsp;&nbsp;是否显性:<a class='isshow select-a'>" + value[i].isShow + "</a>&nbsp;&nbsp;是否输出:<a class='output select-a'>" + value[i].isOutput + "</a>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + value[i].config.id + "\")'>移除</button>&nbsp;&nbsp;</p>");
                }
            }
        }else{
            $("#gz-select_jznbq_show_name").val("");
        }
        getWhichOneArea();
        //获取数据库中序列的信息
        $("#select_jznbq_type").val("");
        $("#select_jznbq_number").val('');
        $('#myModal-rt-seletes').modal("show");

    })
}

/***
 * 移除设备ID和数据ID
 */
function removeDeviceIdAndDataId(type){
    var e = e||window.event;
    var deviceIdAndDataIdObj=e.target||e.srcElement;
    //console.log(deviceIdAndDataIdObj.parentElement.innerText)
    var fatherObj=deviceIdAndDataIdObj.parentElement;
    //console.log(fatherObj.childNodes)
    deviceIdAndDataIdObj.parentElement.remove();
    var newArr = new Array();
    switch (type) {
        case "regulation":
            for(var i=0;i< deviceIdAndDataId.length;i++) {
                var j = deviceIdAndDataId[i];
                var test_d=fatherObj.childNodes[3].innerText;
                var test_n=fatherObj.childNodes[5].innerText;
                if (j.gzName!=test_n) {
                    newArr.push(j);
                }
            }
            break;
        case "status_IdAndInfo":
            for(var i=0;i< deviceIdAndDataId.length;i++) {
                var j = deviceIdAndDataId[i];
                var test_d=fatherObj.childNodes[1].innerText;
                var test_n=fatherObj.childNodes[3].innerText;
                if (j.status_info !=test_d &&j.status_id!=test_n) {
                    newArr.push(j);
                }
            }
            break;
    }
    deviceIdAndDataId=newArr;
}

/***
 * 移除已有的单体设备数据集合设置
 */
function removeModel_DS_WhichArea() {
    var e = e||window.event;
    var deviceIdAndDataIdObj=e.target||e.srcElement;
    var fatherObj=deviceIdAndDataIdObj.parentElement.parentElement
    fatherObj.remove();
}
/**
 *  编辑按钮通用的保存方法
 * @param json 编辑的数据
 * @param modal 编辑按钮绑定的模态框ID
 * @param type 存到的数据表名对应的类型
 * @param titleId 隐藏的的对象系
 * @param divId 区分
 */
function saveEditData(json,modal,type,titleId,divId) {
    let data = {};
    if(divId!=""){
        data = {
            "area": $("#areaId").val(),
            "whichOneArea":titleId,
            "divId":divId,
            "type": type,
            "value":JSON.stringify(json),
        };
    }else{
        if(titleId){
            data = {
                "area": $("#areaId").val(),
                "whichOneArea":titleId,
                "type": type,
                "value":JSON.stringify(json),
            };
        }else{
            data = {
                "area": $("#areaId").val(),
                "type": type,
                "value":JSON.stringify(json),
            };
        }
    }
    $.ajax({
        url:"http://119.3.171.138:9002/save",
        type:"post",
        async:false,
        dataType:"json",
        data:data,
        success:function (data) {

            if(data.status == "保存成功"){
                alert(data.status);
                let tags = [$("#areaId").val()];
                let text = "";
                for(let d in D_IOT_OBJ_TAG){
                    if(D_IOT_OBJ_TAG[d].key == tags[0]){
                        text=D_IOT_OBJ_TAG[d].val;
                        break;
                    }
                }
                initArea({"text":text,"tags":tags,"titleId":titleId});
            }
            checkedWhichArea = [];
            arr1=[];
            selects=[];
            arr=[];
            $('#'+modal).modal('hide');
        }
    })
}

/**
 * 初始化页面头部的阳光、风俗、温度等数据
 */
function initHead(){
    var refreshHeadData = "";
    $.ajax({//获取数据库中保存的配置
        type:"post",
        url:"http://119.3.171.138:9002/find",
        dataType:"json",
        async:false,
        data:{
            "type" : "head",
            "area" : $("#areaId").val(),
            "divId": ""
        },
        success:function (data) {
            if(data.length > 0){
                divInfo = [];
                let wdArr = [];
                for(let i in data){
                    let w = data[i].value.headDeviceId;
                    let d = data[i].value.headDataId;
                    if(refreshHeadData==""){//获取刷新周期的时间
                        refreshHeadData = data[i].value.refreshHeadData;
                    }
                    if(wdArr.length > 0 && divInfo.length > 0){
                        var wdArrBool = 0;
                        var divInfoBool = 0;
                        for(let a in wdArr){
                            if(wdArr[a].w == w && wdArr[a].d == d){
                                wdArrBool++;
                            }
                        }
                        if(wdArrBool == 0){
                            wdArr.push({"w":w,"d":d}) //将数据ID 和设备ID的json存入数据
                        }
                        for(let a in divInfo){
                            if(divInfo[a].w == w && divInfo[a].d == d){
                                divInfoBool++;
                            }
                        }
                        if(divInfoBool == 0){
                            divInfo.push({"w":w,"d":d,"divId":data[i].divId,"unit":data[i].value.headUnit})//存入所需要的用到的具体信息
                        }
                    }else{
                        wdArr.push({"w":w,"d":d}) //将数据ID 和设备ID的json存入数据
                        divInfo.push({"w":w,"d":d,"divId":data[i].divId,"unit":data[i].value.headUnit})//存入所需要的用到的具体信息
                    }
                }
                if(parseInt(refreshHeadData) > 0){//如果存在刷新周期时间就设置刷新周期
                    refreshDT_Head_DATA = window.clearInterval(refreshDT_Head_DATA)
                    refreshDT_Head_DATA = setInterval(function () {findHeadData(wdArr,divInfo)},parseInt(refreshHeadData) * 1000);
                }
                findHeadData(wdArr,divInfo);//调用方法请求数据，并且给页面头部赋值
            }else{
                if(divInfo.length > 0){
                    for(let i in divInfo){
                        let str = divInfo[i].divId;
                        let strArr = str.split("-");
                        $("#"+str).text("");
                        $("#"+strArr[0]).text("");
                    }
                }
            }
        }
    })
}

/**
 * 调用方法请求数据，并且给页面头部赋值
 * @param wdArr 设备ID 和 数据ID 的JSON数组
 * @param divInfo 用于获取数据成功后赋值所需要用的具体信息
 */
function findHeadData(wdArr,divInfo){
    let json = {"wd":wdArr, "isRT":true, "partyId":'208060df-d0fa-44bb-8fa3-d468b97d164a',"outSet": "NK001"}
    let settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://119.3.171.138:8082/iot/api/dpt/data/find/5",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify(json)
    }
    $.ajax(settings).done(function (response) {
        if(response.obj != null){
            let list = response.obj.list;
            if(response.obj.totalrecord > 0){//判断是否为空
                for(let x in list){
                    flag:for(let i in divInfo){
                        if(list[x].w == divInfo[i].w && list[x].d == divInfo[i].d){//对比设备ID和数据ID是否相等
                            let str = divInfo[i].divId;
                            let strArr = str.split("-")
                            if(list[x].v){
                                $("#"+str).text(divInfo[i].unit);
                                $("#"+strArr[0]).text(parseFloat(list[x].v).toFixed(2));
                                break flag;
                            }else{
                                $("#"+str).text(divInfo[i].unit);
                                $("#"+strArr[0]).text("0");
                                break flag;
                            }
                        }
                    }
                }
            }
        }
    })
}

/***
 * 初始化颜色选择器
 */
function reloadColor(){
    // 添加change事件 改变背景色
    var e = e||window.event;
    var deviceIdAndDataIdObj=e.target||e.srcElement;
    var selectColorID=deviceIdAndDataIdObj.id;
    var fatherObj=deviceIdAndDataIdObj.parentElement;
    $('#'+selectColorID).on('change', function (event) {
        $('#'+selectColorID).css('background-color', event.color.toString()).val('');
        $('#'+selectColorID).css('color', event.color.toString()).val('');
        $("#"+selectColorID).val(event.color.toString());
    });
}

var singleDivId = "";
function getSingleId(param) {
    singleDivId=param;
}

/***
 * 移除已有的单体设备数据集合设置
 */
function removeModel_DS_WhichArea() {
    var e = e||window.event;
    var deviceIdAndDataIdObj=e.target||e.srcElement;
    var fatherObj=deviceIdAndDataIdObj.parentElement.parentElement
    fatherObj.remove();
}
/**
 * 对单体信息的编辑
 */
function editSingle() {
    let editLineNumData = [];
    //点击模态框添加按钮
    $("#addModel_DS_WhichArea").click(function () {
        var YC=$("#YC").val();
        var YX=$("#YX").val();
        var xiaoshu=$("#xiaoshu").val();
        var maxRowNum=$("#maxRowNum").val();
        var DATAID_STATUS=$("#DATAID_STATUS").val();
        var refresh_DT_DATA_LP=$("#refresh_DT_DATA_LP").val();
        var status=true;
        YX=YX.split(',')
        YC=YC.split(',')
        var obj=document.getElementById("DS_GROUP_TBODY");
        var trObj=obj.getElementsByTagName("tr");
        if(trObj.length>0) {//判断序列是否存在tr
            for (var i = 0; i < trObj.length; i++) {
                var tdObj = trObj[i].getElementsByTagName("td");
                if($("#dsId").val()==tdObj[0].innerText){
                    status=false;
                }else{
                    status=true;
                }
            }
        }
        switch (status) {
            case true:
                let headStr = "<tr><td>"+$("#dsId").val()+"</td><td>["+YC+"]</td><td>["+YX+"]</td><td>"+DATAID_STATUS+"</td><td>"+xiaoshu+"</td><td hidden>"+imgFile+"</td><td>"+maxRowNum+"</td><td>"+refresh_DT_DATA_LP+"</td>";
                let endingStr = "<td>"+checkedModel[0].name+"</td><td style='display:table-cell; vertical-align:middle'><button id='removeDeviceIdAndDataId'onclick='removeModel_DS_WhichArea()'>移除</button></td></tr>";
                $("#DS_GROUP_TBODY").append(headStr+endingStr);
                break;
            case false:
                alert("编号不可重复！！！")
                break;
        }
    })
    //点击编辑按钮打开模态框
    $("#single-edit").click(function () {
        getModels();
        $("#DS_GROUP_TBODY").empty();
        getModel_DS_WhichArea();
        $("#YC").val('');
        $("#YX").val('');
        $("#maxRowNum").val('');
        $("#DATAID_STATUS").val('');
        $("#refresh_DT_DATA_LP").val('');
        checkedWhichArea=[];
        $("#myModal_DT_Device_Data").modal("show");
    })

    //提交修改行数
    $("#submitEditLineNum").click(function () {
        let editLineNum=$("#editLineNum").val();
        let val = $("#line-num-selects select").val();
        var data = [];
        for(let i in editLineNumData){
            if(editLineNumData[i].serNum == val){
                data.push(editLineNumData[i]);
                data[0].value.maxRowNum = editLineNum;
                delete data[0]._id;
                break;
            }
        }
        $.ajax({
            url:"http://119.3.171.138:9002/saveModel_DS",
            type:"post",
            async:false,
            dataType:"json",
            data:{
                "area":$("#areaId").val(),
                "type": "whichArea_Model_DS",
                "checkedWhichArea":titleId,
                "list":JSON.stringify(editLineNumData)
            },
            success:function (data) {
                switch (data.status) {
                    case "保存成功":
                        status_save_DS=data.status;
                        let tags = [$("#areaId").val()];
                        let text = "";
                        for(let d in D_IOT_OBJ_TAG){
                            if(D_IOT_OBJ_TAG[d].key == tags[0]){
                                text=D_IOT_OBJ_TAG[d].val;
                                break;
                            }
                        }
                        initArea({"text":text,"tags":tags,"titleId":titleId});
                        break;
                    case "保存失败":
                        status_save_DS=data.status;
                        return;
                        break;
                }
            }
        })
    })
    //点击修改行数按钮
    $("#single-edit-lineNum").click(function () {
        editLineNumData = [];
        $.ajax({
            url:"http://119.3.171.138:9002/find",
            type:"post",
            async:false,
            dataType:"json",
            data:{
                "area":$("#areaId").val(),
                "type":"whichArea_Model_DS",
                "checkedWhichArea":titleId
            },
            success:function (data) {
                if(data.length>0){
                    $("#myModal-editLineNum").modal("show");
                    $("#editLineNum").val("");//清空
                    $("#line-num-selects").empty();
                    $("#line-num-selects").append("<select class='form-control'style='float:left;'><option value='0'>---请选择---</option></select>");
                    for(let i in data){
                        let serNum = data[i].serNum;
                        $("#line-num-selects select").append("<option value='"+serNum+"'>"+serNum+"</option>");
                    }
                    editLineNumData = data;//保存当前获取到的数据
                    $("#line-num-selects select").change(function () {
                        let selectSerNum = $(this).val();
                        for(let i in editLineNumData){
                            if(editLineNumData[i].serNum == selectSerNum){
                                $("#editLineNum").val(editLineNumData[i].value.maxRowNum);//将数据库中的行数赋值给input
                                break;
                            }
                        }
                    })
                }else{
                    alert("请点击编辑按钮添加数据");
                }
            }
        })
    })



    var status_save_DS;
    // $("#save-single").click(function () {
    //     var list_1=[];
    //     var obj=document.getElementById("DS_GROUP_TBODY");
    //     var trObj=obj.getElementsByTagName("tr");
    //     if(trObj.length>0){
    //         var json;
    //         for(var i=0;i<trObj.length;i++) {
    //             var tdObj = trObj[i].getElementsByTagName("td");
    //             var serNum = tdObj[0].innerText;
    //             var YC = tdObj[1].innerText;
    //             var YX = tdObj[2].innerText;
    //             var DATAID_STATUS = tdObj[3].innerText;
    //             var xiaoshu = tdObj[4].innerText;
    //             var img = tdObj[5].innerText;
    //             var maxRowNum=tdObj[6].innerText;
    //             var refresh_DT_DATA_LP = tdObj[7].innerText;
    //             var hw = tdObj[8].innerText;
    //             if(hw){
    //                 for(let i in D_IOT_HW_MODEL_TREE){
    //                     if(D_IOT_HW_MODEL_TREE[i].name == hw){
    //                         hw ={"name":D_IOT_HW_MODEL_TREE[i].name,"id":D_IOT_HW_MODEL_TREE[i].id};
    //                     }
    //                 }
    //             }
    //             json = {
    //                 "type": "whichArea_Model_DS",
    //                 "area":$("#areaId").val(),
    //                 "serNum": serNum,
    //                 "value": {
    //                     "singleDivId": singleDivId,
    //                     "checkedWhichArea": titleId,
    //                     "YX_DATA_ID_ARR": (YX.substring(1, YX.indexOf("]"))).split(/[,，]/),
    //                     "YC_DATA_ID_ARR":(YC.substring(1, YC.indexOf("]"))).split(/[,，]/),
    //                     "img": img,
    //                     "xiaoshu":xiaoshu,
    //                     "maxRowNum":maxRowNum,
    //                     "DATAID_STATUS":DATAID_STATUS,
    //                     "refresh_DT_DATA_LP":refresh_DT_DATA_LP,
    //                     "hw":hw
    //                 }
    //             }
    //             list_1.push(json);
    //         }
    //         $.ajax({
    //             url:"http://119.3.171.138:9002/saveModel_DS",
    //             type:"post",
    //             async:false,
    //             dataType:"json",
    //             data:{
    //                 "area":$("#areaId").val(),
    //                 "type": "whichArea_Model_DS",
    //                 "checkedWhichArea":titleId,
    //                 "list":JSON.stringify(list_1)
    //             },
    //             success:function (data) {
    //                 switch (data.status) {
    //                     case "保存成功":
    //                         status_save_DS=data.status
    //                         let tags = [$("#areaId").val()];
    //                         let text = "";
    //                         for(let d in D_IOT_OBJ_TAG){
    //                             if(D_IOT_OBJ_TAG[d].key == tags[0]){
    //                                 text=D_IOT_OBJ_TAG[d].val;
    //                                 break;
    //                             }
    //                         }
    //                         initArea({"text":text,"tags":tags,"titleId":titleId});
    //                         break;
    //                     case "保存失败":
    //                         status_save_DS=data.status;
    //                         return;
    //                         break;
    //                 }
    //             }
    //         })
    //     }else{
    //         let json = {
    //             "type": "whichArea_Model_DS",
    //             "area":$("#areaId").val(),
    //             "serNum": "",
    //             "value": {
    //                 "checkedWhichArea": titleId,
    //             }
    //         }
    //         list_1.push(json);
    //         $.ajax({
    //             url:"http://119.3.171.138:9002/saveModel_DS",
    //             type:"post",
    //             async:false,
    //             dataType:"json",
    //             data:{
    //                 "area":$("#areaId").val(),
    //                 "type": "whichArea_Model_DS",
    //                 "checkedWhichArea":titleId,
    //                 "list":JSON.stringify(list_1)
    //             },
    //             success:function (data) {
    //                 switch (data.status) {
    //                     case "保存成功":
    //                         status_save_DS=data.status;
    //                         let tags = [$("#areaId").val()];
    //                         let text = "";
    //                         for(let d in D_IOT_OBJ_TAG){
    //                             if(D_IOT_OBJ_TAG[d].key == tags[0]){
    //                                 text=D_IOT_OBJ_TAG[d].val;
    //                                 break;
    //                             }
    //                         }
    //                         initArea({"text":text,"tags":tags,"titleId":titleId});
    //                         break;
    //                     case "保存失败":
    //                         status_save_DS=data.status;
    //                         return;
    //                         break;
    //                 }
    //             }
    //         })
    //     }
    //     //reloadDT_DEVICE(whichOneArea);
    // })

    $("#save-single").click(function () {
        var list_1=[];
        var obj=document.getElementById("DS_GROUP_TBODY");
        var trObj=obj.getElementsByTagName("tr");
        if(trObj.length>0){
            var json;
            for(var i=0;i<trObj.length;i++) {
                var tdObj = trObj[i].getElementsByTagName("td");
                var serNum = tdObj[0].innerText;
                var YC = tdObj[1].innerText;
                var YX = tdObj[2].innerText;
                var DATAID_STATUS = tdObj[3].innerText;
                var xiaoshu = tdObj[4].innerText;
                var img = tdObj[5].innerText;
                var maxRowNum=tdObj[6].innerText;
                var refresh_DT_DATA_LP = tdObj[7].innerText;
                var hw = tdObj[8].innerText;
                if(hw){
                    for(let i in D_IOT_HW_MODEL_TREE){
                        if(D_IOT_HW_MODEL_TREE[i].name == hw){
                            hw ={"name":D_IOT_HW_MODEL_TREE[i].name,"id":D_IOT_HW_MODEL_TREE[i].id};
                        }
                    }
                }
                json = {
                    "type": "whichArea_Model_DS",
                    "area":$("#areaId").val(),
                    "serNum": serNum,
                    "value": {
                        "singleDivId": singleDivId,
                        "checkedWhichArea": titleId,
                        "YX_DATA_ID_ARR": (YX.substring(1, YX.indexOf("]"))).split(/[,，]/),
                        "YC_DATA_ID_ARR":(YC.substring(1, YC.indexOf("]"))).split(/[,，]/),
                        "img": img,
                        "xiaoshu":xiaoshu,
                        "maxRowNum":maxRowNum,
                        "DATAID_STATUS":DATAID_STATUS,
                        "refresh_DT_DATA_LP":refresh_DT_DATA_LP,
                        "hw":hw
                    }
                }
                list_1.push(json);
            }
            $.ajax({
                url:"http://119.3.171.138:9002/saveModel_DS",
                type:"post",
                async:false,
                dataType:"json",
                data:{
                    "area":$("#areaId").val(),
                    "type": "whichArea_Model_DS",
                    "checkedWhichArea":titleId,
                    "list":JSON.stringify(list_1)
                },
                success:function (data) {
                    switch (data.status) {
                        case "保存成功":
                            status_save_DS=data.status
                            let tags = [$("#areaId").val()];
                            let text = "";
                            for(let d in D_IOT_OBJ_TAG){
                                if(D_IOT_OBJ_TAG[d].key == tags[0]){
                                    text=D_IOT_OBJ_TAG[d].val;
                                    break;
                                }
                            }
                            initArea({"text":text,"tags":tags,"titleId":titleId});
                            break;
                        case "保存失败":
                            status_save_DS=data.status;
                            return;
                            break;
                    }
                }
            })
        }else{
            let json = {
                "type": "whichArea_Model_DS",
                "area":$("#areaId").val(),
                "serNum": "",
                "value": {
                    "checkedWhichArea": titleId,
                }
            }
            list_1.push(json);
            $.ajax({
                url:"http://119.3.171.138:9002/saveModel_DS",
                type:"post",
                async:false,
                dataType:"json",
                data:{
                    "area":$("#areaId").val(),
                    "type": "whichArea_Model_DS",
                    "checkedWhichArea":titleId,
                    "list":JSON.stringify(list_1)
                },
                success:function (data) {
                    switch (data.status) {
                        case "保存成功":
                            status_save_DS=data.status;
                            let tags = [$("#areaId").val()];
                            let text = "";
                            for(let d in D_IOT_OBJ_TAG){
                                if(D_IOT_OBJ_TAG[d].key == tags[0]){
                                    text=D_IOT_OBJ_TAG[d].val;
                                    break;
                                }
                            }
                            initArea({"text":text,"tags":tags,"titleId":titleId});
                            break;
                        case "保存失败":
                            status_save_DS=data.status;
                            return;
                            break;
                    }
                }
            })
        }
        //reloadDT_DEVICE(whichOneArea);
    })
}/***
 * 获取单体设备数据集合设置
 */
function getModel_DS_WhichArea() {
    getWhichOneArea();
    getModels();
    $("#DS_GROUP_TBODY").empty();
    $.ajax({
        url:"http://119.3.171.138:9002/find",
        type:"post",
        async:false,
        dataType:"json",
        data:{
            "area":$("#areaId").val(),
            "type":"whichArea_Model_DS",
            "checkedWhichArea":titleId
        },
        success:function (data) {
            for(var i in data){
                if(data[i].value.YX_DATA_ID_ARR && data[i].value.YC_DATA_ID_ARR){
                    let hw = data[i].value.hw;
                    var tr=$("<tr><td>"+data[i].serNum+"</td><td>["+data[i].value.YC_DATA_ID_ARR+"]</td><td>["+data[i].value.YX_DATA_ID_ARR+"]</td><td>"+data[i].value.DATAID_STATUS+"</td><td>"+data[i].value.xiaoshu+"</td><td hidden>"+data[i].value.img+"</td><td>"+data[i].value.maxRowNum+"</td><td>"+data[i].value.refresh_DT_DATA_LP+"</td><td>"+hw.name+"</td><td style='display:table-cell; vertical-align:middle'><button id='removeDeviceIdAndDataId'onclick='removeModel_DS_WhichArea()'>移除</button></td></tr>")
                    $("#DS_GROUP_TBODY").append(tr)

                }
            }
        }
    })
}



/***
 * 将选择的图片转为base64
 */
var imgFile;
var fileName;
function imgChange(img) {
    // 生成一个文件读取的对象
    var file = img.files[0];
    fileName=file.name;
    const reader = new FileReader();
    reader.onload = function (ev) {
        // base64码
        imgFile =ev.target.result;//或e.target都是一样的
        $("#photoName").val(fileName)
    }
    reader.readAsDataURL(img.files[0]);
}
/**
 *  对下三个状态框的编辑操作
 */
function editStatus() {
    //编辑模态框保存
    $("#save-status").click(function () {
            let selVal = $("#gz-selects select").val();
            let unit_type = $("#gz-unit").val();
            let dataId = $("#gz-dataId").val();
            let refreshAlert = $("#gz-refreshAlert").val();
            let list = [];
            list.push({"DId":unit_type,"dataId":dataId,"functionNameAndIsShow":selVal})
            let json = {"titleName":titleName,"list":list,"refreshAlert":refreshAlert};
            let divId = statusBtnVal;
            let type = "alert";
            let modal = 'myModal-rt-statu';
            let title = titleId;
            saveEditData(json,modal,type,title,divId);
            let tags = [$("#areaId").val()];
            let text = "";
            for(let d in D_IOT_OBJ_TAG){
                if(D_IOT_OBJ_TAG[d].key == tags[0]){
                    text=D_IOT_OBJ_TAG[d].val;
                    break;
                }
            }
            initArea({"text":text,"tags":tags,"titleId":titleId});
    })

    //打开编辑模态框
    $(".btn-st").click(function () {
        $(".status-isShow").hide();
        $("#gz-selects").empty();
        $("#gz-selects").append("<select class='form-control' style='float:left;'><option value='0'>---请选择---</option></select>");
        statusBtnVal=$(this).val();
        if(functionList.length>0){
            for(let i in functionList){
                if(functionList[i].functionName){
                    $("#gz-selects select").append("<option value='"+functionList[i].functionName+"-"+functionList[i].functionIsShow+"'>"+functionList[i].name+"</option>");
                }else{
                    $("#gz-selects select").append("<option value=''>"+functionList[i].name+"</option>");
                }
            }
        }

        //获取数据库中序列的信息
        $("#gz-unit").val('');
        $("#gz-dataId").val('');
        $("#gz-group-status").empty();
        $('#myModal-rt-statu').modal("show");
        //去数据库取之前配置的数据，并拼接显示
        findStatusConfig(statusBtnVal);
        //判断动态生成的select的事件
        $("#gz-selects select").change(function (e) {
            let val = $(this).val();
            if(val){
                let str = val.split("-");
                if(str[1] == "N"){
                    $(".status-isShow").hide();
                }else{
                    $(".status-isShow").show();
                }
            }
        })

        $.ajax({
            type: "post",
            url: "http://119.3.171.138:9002/find",
            dataType: "json",
            async:false,
            data: {
                "type": "alert",
                "area": $("#areaId").val(),
                "whichOneArea": titleId
            },
            success: function (data) {
                if(data){
                    for(let d in data){
                        if(statusBtnVal == data[d].divId){
                            $("#gz-selects select").val(data[d].value.list[0].functionNameAndIsShow).trigger("change");
                            //获取数据库中序列的信息
                            $("#gz-unit").val(data[d].value.list[0].DId);
                            $("#gz-dataId").val(data[d].value.list[0].dataId);
                            $("#gz-refreshAlert").val(data[d].value.refreshAlert)
                        }
                    }
                }
            }
        })
    })
}


/**
 * 初始化三个状态格
 */
function initStatus(){
    let list = [];
    var wdArr = [];
    //获取数据库中存储的编辑保存的数据
    $.ajax({
        type: "post",
        url:  "http://119.3.171.138:9002/find",
        dataType: "json",
        async:false,
        data: {
            "type": "alert",
            "area": $("#areaId").val(),
            "whichOneArea":titleId
        },
        success: function (data) {
            if(data.length > 0){
                for(let i in data){
                    if(data[i].area == $("#areaId").val()) {
                        var refreshAlert = data[i].value.refreshAlert;
                        if (refreshAlert == null && refreshAlert == "") {
                            refreshAlert = "30";
                        }
                        wdArr.push({"w": data[i].value.list[0].DId, "d": data[i].value.list[0].dataId});
                        let str = data[i].value.list[0].functionNameAndIsShow;
                        let strSplitList = str.split("-");
                        $("#" + data[i].divId).text("0");
                        let json = {
                            "divId": data[i].divId,
                            "area": data[i].area,
                            "whichOneArea": data[i].whichOneArea,
                            "refreshAlert": refreshAlert,
                            "w": data[i].value.list[0].DId,
                            "d": data[i].value.list[0].dataId,
                            "functionName": strSplitList[0],
                            "isShow": strSplitList[1],
                            "titleName": data[i].value.titleName
                        }
                        list.push(json);
                    }
                }
                for(let i in list){
                    let functionName = list[i].functionName;
                    let w = list[i].w;
                    let d = list[i].d;
                    let time = parseInt(list[i].refreshAlert);
                    if(w!="" && d!=""){
                        if(time!=null && time>0){
                            window.clearInterval(refreshDT_status1);
                            refreshDT_status1 = window.setInterval(function () {eval(functionName+"(wdArr,list[i])")},time*1000)
                        }
                        eval(functionName+"(wdArr,list[i])");
                    }else{
                        if(time!=null && time>0){
                            window.clearInterval(refreshDT_status2);
                            refreshDT_status2 = window.setInterval(function () {eval(functionName+"(list[i])")},time*1000)
                        }
                        eval(functionName+"(list[i])");
                    }
                }
            }else{
                $(".status").text("0");
            }
        }
    })
}

/***
 * 获取预警框所处div信息
 * @param e
 */
function getAlertName() {
    var e = e||window.event;
    objAlert=e.target||e.srcElement;
    let area = $("#areaId").val();
    reloadTreeView(area);
}

/***
 * 加载树形组件
 */
function reloadTreeView(area){
    var nodeCheckedSilent = false;
    function nodeChecked(event, node) {
        if (nodeCheckedSilent) {
            return;
        }
        nodeCheckedSilent = true;
        checkAllParent(node);
        checkAllSon(node);
        nodeCheckedSilent = false;
    }

    var nodeUncheckedSilent = false;
    function nodeUnchecked(event, node) {
        if (nodeUncheckedSilent)
            return;
        nodeUncheckedSilent = true;
        uncheckAllParent(node);
        uncheckAllSon(node);
        nodeUncheckedSilent = false;
    }

    /**
     * 选中全部父节点
     * @param node
     */
    function checkAllParent(node) {
        $('#searchTree').treeview('checkNode', node.nodeId, {
            silent: true
        });
        var parentNode = $('#searchTree').treeview('getParent', node.nodeId);
        if (!("nodeId" in parentNode)) {
            return;
        } else {
            checkAllParent(parentNode);
        }
    }

    /**
     * 取消全部父节点
     * @param node
     */
    function uncheckAllParent(node) {
        $('#searchTree').treeview('uncheckNode', node.nodeId, {
            silent: true
        });
        var siblings = $('#searchTree').treeview('getSiblings', node.nodeId);
        var parentNode = $('#searchTree').treeview('getParent', node.nodeId);
        if (!("nodeId" in parentNode)) {
            return;
        }
        var isAllUnchecked = true; //是否全部没选中
        for (var i in siblings) {
            if (siblings[i].state.checked) {
                isAllUnchecked = false;
                break;
            }
        }
        if (isAllUnchecked) {
            uncheckAllParent(parentNode);
        }
    }

    /**
     * 级联选中所有子节点
     * @param node
     */
    function checkAllSon(node) {
        $('#searchTree').treeview('checkNode', node.nodeId, {
            silent: true
        });
        if (node.nodes != null && node.nodes.length > 0) {
            for (var i in node.nodes) {
                checkAllSon(node.nodes[i]);
            }
        }
    }

    /**
     * 级联取消所有子节点
     * @param node
     */
    function uncheckAllSon(node) {
        $('#searchTree').treeview('uncheckNode', node.nodeId, {
            silent: true
        });
        if (node.nodes != null && node.nodes.length > 0) {
            for (var i in node.nodes) {
                uncheckAllSon(node.nodes[i]);
            }
        }
    }
    $('#searchTree').treeview({
        showCheckbox: true,
        data: treeData,
        levels:1,
        onNodeChecked: nodeChecked,
        onNodeUnchecked: nodeUnchecked,
    });
    $.ajax({
        url:"http://119.3.171.138:9002/find",
        type:"post",
        dataType:"json",
        async:false,
        data:{
            "type":"alert",
            "area":area,
        },
        success:function (data) {
            if(data!=null&&data!=""){
                var refreshAlert=data[0].refreshAlert;
                if(refreshAlert!=null&&refreshAlert!=""){
                    $("#refreshAlert").val(refreshAlert)
                }
                var value=data[0].value;
                if(value!=null){
                    for(var i=0;i<value.length;i++){
                        var nodes=value[i].nodes;
                        $('#searchTree').treeview('checkNode', [parseInt(value[i].nodeId), { silent: true }]);
                        if(nodes!=null&&nodes!=""){
                            for(var j=0;j<nodes.length;j++){
                                $('#searchTree').treeview('checkNode', [parseInt(nodes[j].nodeId), { silent: true }]);
                            }
                        }
                    }
                }
            }
        }
    })
}

/***
 * 保存预警框设置
 * @param area 所属界面
 */
function saveAlert(node) {
    let area = $("#areaId").val();
    var list=$('#searchTree').treeview('getChecked',node)
    var value=[];
    var child=[];
    var obj={};
    var refreshAlert=$("#refreshAlert").val();
    for(var i=0;i<list.length;i++){
        if(list[i].PPID==0){
            if(i>0){
                value.push(obj);
                child=[];
            }
            obj={
                "text":list[i].text,
                "nodes":child,
                "nodeId":list[i].nodeId.toString(),
                "PPID":list[i].PPID.toString(),
                "id":list[i].id,
            };
        }else if(list[i].PPID!=0){
            child.push({
                "text":list[i].text,
                "PPID":list[i].PPID.toString(),
                "id":list[i].id,
                "nodeId":list[i].nodeId.toString(),
            })
        }
        if(i==list.length-1){
            value.push(obj)
        }
    }
    $.ajax({
        url:"http://119.3.171.138:9002/save",
        type:"post",
        dataType:"json",
        async:false,
        data:{
            "type":"alert",
            "area":$("#areaId").val(),
            "divId":objAlert.parentNode.id,
            "value":JSON.stringify(value),
            "refreshAlert":refreshAlert
        },
        success:function (data) {
            if(data.status == "保存成功"){
                alert(data.status);
                let tags = [$("#areaId").val()];
                let text = "";
                for(let d in D_IOT_OBJ_TAG){
                    if(D_IOT_OBJ_TAG[d].key == tags[0]){
                        text=D_IOT_OBJ_TAG[d].val;
                        break;
                    }
                }
                initArea({"text":text,"tags":tags,"titleId":titleId});
            }else{
                alert(data.status);
            }
        }
    })
}

var HW_MODEL =[];
function oncheckCalbask_hW(Nodelist) {
    if(Nodelist.length>0){
        HW_MODEL = Nodelist;
    }
}
/***
 * 增加多种设备型号的数据点规则
 */
function add_GZ(){
    $("#add_sj_gz").click(function () {
        var dataId=$("#sj_gz_dataId").val();
        var gzValue=$("#gzValue").val();
        var selectGZ=$("#selectGZ").val();
        var typeName=$("#select_gz_type").val();
        var gzName=$("#gzName").val();
        if(HW_MODEL!=null&&HW_MODEL!=""&&dataId!=null&&dataId!=""&&gzValue!=null&&gzValue!=""&&selectGZ!=null&&selectGZ!=""&&gzName!=null&&gzName!=""){
            for(var i=0;i< deviceIdAndDataId.length;i++){
                var j=deviceIdAndDataId[i];
                if(j.type==HW_MODEL&&j.dataId==dataId||j.gzName==gzName){
                    alert("设备型号，数据ID及规则描述不可重复！！！");
                    return;
                }
            }
            $("#gz_group").append("<p class='deviceIdAndDataId'>设备型号:<a class='type'>"+HW_MODEL[0].id+"</a>&nbsp;&nbsp;数据ID:<a class='dataId'>"+dataId+"</a>&nbsp;&nbsp;规则描述:<a class='gzName'>"+gzName+"</a>&nbsp;<a class='selectGZ'>"+selectGZ+"</a>&nbsp;<a class='gzValue'>"+gzValue+"</a>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"regulation\")'>移除</button>&nbsp;&nbsp;</p>");
            deviceIdAndDataId.push({
                "type":HW_MODEL,
                "dataId":dataId,
                "gzValue":gzValue,
                "selectGZ":selectGZ,
                "typeName":typeName,
                "gzName":gzName
            })
        }else {
            alert("设备型号,数据ID不可为空以及规则不可为空！！！");
        }
    })
}

/***
 * 获取设置的设备规则
 * @param area
 */
function getGZ() {
    deviceIdAndDataId=[];
    $("#gz_group").empty();
    $("#select_gz_type").empty();
    var defaults = {
        zNodes: D_IOT_HW_MODEL_TREE,
        height:233,
        chkStyle: "radio",
        callback:{
            onCheck: oncheckCalbask_hW
        }
    }
    $("#select_gz_type").drawMultipleTree(defaults);
    $.ajax({
        url:"http://119.3.171.138:9002/find",
        type:"post",
        dataType:"json",
        async:false,
        data:{
            "type":"regulation",
            "whichOneArea":titleId,
            "area":$("#areaId").val(),
        },
        success:function (data) {
            if(data[0]!=null&&data[0]!=""){
                for (var i in data[0].value.dataIdArray){
                    $("#gz_group").append("<p class='deviceIdAndDataId'>设备型号:<a class='type'>"+data[0].value.dataIdArray[i].type[0].name+"</a>&nbsp;&nbsp;数据ID:<a class='dataId'>"+data[0].value.dataIdArray[i].dataId+"</a>&nbsp;&nbsp;规则描述:<a class='gzName'>"+data[0].value.dataIdArray[i].gzName+"</a>&nbsp;<a class='selectGZ'>"+data[0].value.dataIdArray[i].selectGZ+"</a>&nbsp;<a class='gzValue'>"+data[0].value.dataIdArray[i].gzValue+"</a>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"regulation\")'>移除</button>&nbsp;&nbsp;</p>");
                    deviceIdAndDataId.push({
                        "type":data[0].value.dataIdArray[i].type,
                        "dataId":data[0].value.dataIdArray[i].dataId,
                        "gzValue":data[0].value.dataIdArray[i].gzValue,
                        "selectGZ":data[0].value.dataIdArray[i].selectGZ,
                        "typeName":data[0].value.dataIdArray[i].typeName,
                        "gzName":data[0].value.dataIdArray[i].gzName,
                        "xiaoshuGZ":data[0].value.dataIdArray[i].xiaoshuGZ,
                    })
                }
                $("#sj_gz_title").val(data[0].value.title);
                $("#refreshGZ").val(data[0].value.refreshGZ);
                $("#xiaoshuGZ").val(data[0].value.xiaoshu)
            }
        }
    })
}

/***
 * 保存规则
 */
function saveGz() {
    let whichOneArea = $("#hide-titleId").val();
    var sj_gz_title=$("#sj_gz_title").val();
    var json={
        "area":$("#areaId").val(),
        "whichOneArea":titleId,
        "type":"regulation",
        "value":JSON.stringify({
            "dataIdArray":deviceIdAndDataId,
            "title":sj_gz_title,
            "refreshGZ":$("#refreshGZ").val()
        })
    }
    $.ajax({
        url:"http://119.3.171.138:9002/save",
        type:"post",
        dataType:"json",
        async:false,
        data:json,
        success:function (data) {
            if(data.status == "保存成功"){
                alert(data.status);
                reloadGZ(titleId)
            }else{
                alert(data.status);
            }

        }
    })
}
/***
 * 加载规则事件
 */
function reloadGZ(whichOneArea) {
    window.clearInterval(refreshGZ_1);
    $("#showGzAlert").empty();
    $("#rightTitle").html("");
    $.ajax({
        url:"http://119.3.171.138:9002/find",
        type:"post",
        dataType:"json",
        async:false,
        data:{
            "type":"regulation",
            "whichOneArea":whichOneArea,
            "area":$("#areaId").val( )
        },success:function (data) {
            if(data.length>0){
                var refreshGZ=data[0].value.refreshGZ;
                if(data[0].value.dataIdArray){
                    var alertArray="[";
                    var dataIdArray=data[0].value.dataIdArray;
                      for(var i in dataIdArray){
                        alertArray+="{_mdl:"+"'"+dataIdArray[i].type[0].id+"'"+",d:"+"'"+dataIdArray[i].dataId+"'},"
                    }
                    alertArray=alertArray.substring(0,alertArray.length-1);
                    alertArray+="]"
                    let yzckey = $('#areaId').val();
                    if(alertArray.length>2){
                        var settings = {
                            "async": false,
                            "crossDomain": true,
                            "url": "http://119.3.171.138:8082/iot/api/dpt/data/find/1",
                            "method": "POST",
                            "headers": {
                                "Content-Type": "application/json",
                                "Accept": "*/*",
                                "Cache-Control": "no-cache",
                                //"Host": "www.chaotiaorap.info:21180",
                                //"Connection": "keep-alive",
                                "cache-control": "no-cache"
                            },
                            //"data": "{models:"+alertArray+",startDT:"+new Date(getMonthFirstLastDay().thisMonthFirstDay).getTime()+",endDT:"+new Date(getMonthFirstLastDay().thisMonthLastDay).getTime()+",partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a',objTags:['"+whichOneArea+"','"+yzckey+"']}"
                            "data": "{models:"+alertArray+",partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a',objTags:['"+whichOneArea+"','"+yzckey+"'],outSet:'NK001',isRT:true}"
                        }
                        $("#rightTitle").html(data[0].value.title);
                        var table=$("<table class='table table-bordered' id='gzTable'><thead><tr><th>设备名称</th><th>型号描述</th><th>型号</th><th>规则描述</th><th>时间</th></tr></thead></table>");
                        reloadGZ_Data(settings,table,data);
                        if(parseFloat(refreshGZ)>0){
                            window.clearInterval(refreshGZ_1);
                            refreshGZ_1=window.setInterval(function () {
                                reloadGZ_Data(settings,table,data);
                            },parseFloat(refreshGZ)*1000)
                        }
                   }
                }
            }
        }
    })
}

/***
 *加载规则数据
 * @param settings
 * @param table
 * @param data
 */
function reloadGZ_Data(settings,table,data) {
    $("#gzTable tbody").empty();
    $("#flipCver").empty()
    $.ajax(settings).done(function (response) {
        if(response.resMsg!="未找到匹配信息"){
            if(data[0].value.dataIdArray){
                var dataIdArray=data[0].value.dataIdArray;
                for(var i in dataIdArray){
                    for(var j in response.obj.list){
                        if(dataIdArray[i].dataId==response.obj.list[j].d){
                            let value=response.obj.list[j].v;
                            var xiaoshu=data[0].value.xiaoshuGZ
                            if(xiaoshu){
                                value=parseFloat(value).toFixed(parseInt(xiaoshu))
                            }
                            switch (dataIdArray[i].selectGZ) {
                                case ">":
                                    if(parseFloat(response.obj.list[j].v) > parseFloat(dataIdArray[i].gzValue)){
                                        var tr=$("<tr><th>"+response.obj.list[j].wExt.hwName+"</th><th>"+response.obj.list[j].wExt.descr+"</th><th>"+dataIdArray[i].type[0].name+"</th><th>"+dataIdArray[i].gzName+">"+dataIdArray[i].gzValue+"当前为："+value +"</th><th>"+formatDate(response.obj.list[j].t)+"</th></tr>");
                                        table.append(tr);
                                    }
                                    break;
                                case "<":
                                    if(parseFloat(response.obj.list[j].v) < parseFloat(dataIdArray[i].gzValue)){
                                        var tr=$("<tr><th>"+response.obj.list[j].wExt.hwName+"</th><th>"+response.obj.list[j].wExt.descr+"</th><th>"+dataIdArray[i].type[0].name+"</th><th>"+dataIdArray[i].gzName+"<"+dataIdArray[i].gzValue+"当前为："+value +"</th><th>"+formatDate(response.obj.list[j].t)+"</th></tr>");
                                        table.append(tr);
                                    }
                                    break;
                                case ">=":
                                    if(parseFloat(response.obj.list[j].v) >= parseFloat(dataIdArray[i].gzValue)){
                                        var tr=$("<tr><th>"+response.obj.list[j].wExt.hwName+"</th><th>"+response.obj.list[j].wExt.descr+"</th><th>"+dataIdArray[i].type[0].name+"</th><th>"+dataIdArray[i].gzName+">="+dataIdArray[i].gzValue+"当前为："+value +"</th><th>"+formatDate(response.obj.list[j].t)+"</th></tr>");
                                        table.append(tr);
                                    }
                                    break;
                                case "<=":
                                    if(parseFloat(response.obj.list[j].v) <= parseFloat(dataIdArray[i].gzValue)){
                                        var tr=$("<tr><th>"+response.obj.list[j].wExt.hwName+"</th><th>"+response.obj.list[j].wExt.descr+"</th><th>"+dataIdArray[i].type[0].name+"</th><th>"+dataIdArray[i].gzName+"<="+dataIdArray[i].gzValue+"当前为："+value +"</th><th>"+formatDate(response.obj.list[j].t)+"</th></tr>");
                                        table.append($("<tbody></tbody>").append(tr));
                                    }
                                    break;
                                case "<<":
                                    var gzValue = dataIdArray[i].gzValue;
                                    if(gzValue.length>0){
                                        var gzValueList = gzValue.split(",");
                                        if(gzValueList.length == 0){
                                            gzValueList = gzValue.split("，");
                                        }
                                        var minValue = gzValueList[0];
                                        var maxValue = gzValueList[1];
                                        if(minValue && maxValue){
                                            if(parseFloat(response.obj.list[j].v) < parseFloat(minValue) || parseFloat(response.obj.list[j].v) > parseFloat(maxValue)){
                                                var tr=$("<tr><th>"+response.obj.list[j].wExt.hwName+"</th><th>"+response.obj.list[j].wExt.descr+"</th><th>"+dataIdArray[i].type[0].name+"</th><th>"+minValue+"&lt"+dataIdArray[i].gzName+"&lt"+maxValue+"当前为："+value +"</th><th>"+formatDate(response.obj.list[j].t)+"</th></tr>");
                                                table.append($("<tbody></tbody>").append(tr));
                                            }
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                }
            }
            $("#showGzAlert").append(table);
            // $("#flipCver").append('<span id="btn0" style="color: white"></span>' +
            //     '<input id="pageSize" type="text" size="1" maxlength="2" value="getDefaultValue()"/><span style="color: white"> 条 </span> <span id="pageSizeSet" style="cursor: pointer;color: white">设置</span>&nbsp;' +
            //     '<span id="sjzl" style="color: white"></span>&nbsp;&nbsp;<span  id="btn1" style="cursor: pointer;color: white">首页</span>&nbsp;&nbsp;<span id="btn2" style="cursor: pointer;color: white">上一页</span>&nbsp;&nbsp;<span id="btn3" style="cursor: pointer;color: white">下一页</span>&nbsp;&nbsp;<span id="btn4" style="cursor: pointer;color: white">尾页</span>&nbsp;&nbsp;' +
            //     '<span style="color: white">转到&nbsp;</span><input id="changePage" type="text" size="1" maxlength="4"/><span style="color: white">页&nbsp;</span><span id="btn5" style="cursor: pointer;color: white">跳转</>')
            // pageSize();
        }
    })
}


/**
 * 表格分页
 */
function pageSize() {
    var pageSize = 1;    //每页显示的记录条数
    var curPage=0;        //当前页
    var lastPage;        //最后页
    var direct=0;        //方向
    var len;            //总行数
    var page;            //总页数
    var begin;
    var end;

    len =$("#gzTable tr").length - 1;    // 求这个表的总行数，剔除第一行介绍
    page=len % pageSize==0 ? len/pageSize : Math.floor(len/pageSize)+1;//根据记录条数，计算页数
    // alert("page==="+page);
    curPage=1;    // 设置当前为第一页
    displayPage(1);//显示第一页
    document.getElementById("btn0").innerHTML="当前 " + curPage + "/" + page + " 页    每页 ";    // 显示当前多少页
    document.getElementById("sjzl").innerHTML="数据总量 " + len + "";        // 显示数据量
    document.getElementById("pageSize").value = pageSize;

    $("#btn1").click(function firstPage(){    // 首页
        curPage=1;
        direct = 0;
        displayPage();
    });
    $("#btn2").click(function frontPage(){    // 上一页
        direct=-1;
        displayPage();
    });
    $("#btn3").click(function nextPage(){    // 下一页
        direct=1;
        displayPage();
    });
    $("#btn4").click(function lastPage(){    // 尾页
        curPage=page;
        direct = 0;
        displayPage();
    });
    $("#btn5").click(function changePage(){    // 转页
        curPage=document.getElementById("changePage").value * 1;
        if (!/^[1-9]\d*$/.test(curPage)) {
            alert("请输入正整数");
            return ;
        }
        if (curPage > page) {
            alert("超出数据页面");
            return ;
        }
        direct = 0;
        displayPage();
    });


    $("#pageSizeSet").click(function setPageSize(){    // 设置每页显示多少条记录
        pageSize = document.getElementById("pageSize").value;    //每页显示的记录条数
        if (!/^[1-9]\d*$/.test(pageSize)) {
            alert("请输入正整数");
            return ;
        }
        len =$("#gzTable tr").length - 1;
        page=len % pageSize==0 ? len/pageSize : Math.floor(len/pageSize)+1;//根据记录条数，计算页数
        curPage=1;        //当前页
        direct=0;        //方向
        firstPage();
    });

    function displayPage(){
        if(curPage <=1 && direct==-1){
            direct=0;
            alert("已经是第一页了");
            return;
        } else if (curPage >= page && direct==1) {
            direct=0;
            alert("已经是最后一页了");
            return ;
        }

        lastPage = curPage;

        // 修复当len=1时，curPage计算得0的bug
        if (len > pageSize) {
            curPage = ((curPage + direct + len) % len);
        } else {
            curPage = 1;
        }
        document.getElementById("btn0").innerHTML="当前 " + curPage + "/" + page + " 页    每页 ";        // 显示当前多少页

        begin=(curPage-1)*pageSize + 1;// 起始记录号
        end = begin + 1*pageSize - 1;    // 末尾记录号


        if(end > len ) end=len;
        $("#gzTable tr").hide();    // 首先，设置这行为隐藏
        $("#gzTable tr").each(function(i){    // 然后，通过条件判断决定本行是否恢复显示
            if((i>=begin && i<=end) || i==0 )//显示begin<=x<=end的记录
                $(this).show();
        });
    }
}
var setInterval_reloadAlert;
/*加载设置的预警框样式*/
function reloadAlert() {
    $("#base_nav_text_alert_table tbody").empty();//http://119.3.171.138:8082/iot/api/dpt/data/find/1
    $("#base_nav_text_flag").text("..")
    let divId = "alert_div";
    var alertArray;
    var startDT;
    var endDT;
    var refreshAlert;
    //去掉定时器的方法
    window.clearInterval(setInterval_reloadAlert);
    $.ajax({
        url:"http://119.3.171.138:9002/find",
        type:"post",
        async:false,
        dataType:"json",
        data:{
            "type":"alert",
            "area":$("#areaId").val(),
            "divId":divId
        },
        success:function (data) {
            if(data!=null&&data!=""){
                var resultValue=data;
                var value = {};
                for(let i in resultValue){
                    if(resultValue[i].divId == divId){
                        value = resultValue[i].value;
                    }
                }
                if(value!=null){
                    alertArray="[";
                    for(var i in value){
                        for(var j in value[i].nodes){
                            alertArray+="'"+value[i].nodes[j].id+"',"
                        }
                    }
                    alertArray=alertArray.substring(0,alertArray.length-1)
                    alertArray+="]"
                }else {
                    alertArray="[]";
                }
                refreshAlert=data[0].refreshAlert;
                startDT=new Date(new Date().toLocaleDateString()).getTime();
                endDT=new Date().getTime()+86400000-(new Date().getHours()*60*60+new Date().getMinutes()*60+new Date().getSeconds())*1000
                reloadAlertData(alertArray,startDT,endDT);
                if(parseFloat(refreshAlert)>0){
                    setInterval_reloadAlert = window.setInterval(function () {
                        reloadAlertData(alertArray,startDT,endDT);
                    },parseFloat(refreshAlert)*1000)
                }
            }else{
                alertArray = "";
            }
        }
    })

}


/***
 * 加载告警
 * @param alertArray
 * @param startDT
 * @param endDT
 */
function reloadAlertData(alertArray,startDT,endDT) {
    //$("#base_nav_text_alert_table thead").empty();
    $("#base_nav_text_alert_table tbody").empty();
    let area = $("#areaId").val();
    if(alertArray.length<=1){
        alertArray="[]";
    }
    if(alertArray.length>2){
        $.ajax({
            "async": false,
            "crossDomain": true,
            "url": "http://119.3.171.138:8082/iot/api/dpt/data/find/1",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "cache-control": "no-cache"
            },
            "data": "{objTags: ['"+area+"'],evL:"+alertArray+",partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a',t:"+new Date().getTime()+",outSet:'NK001'}"
        }).done(function (response) {
            if(response.obj){
                if(response.obj.list.length>0){
                    var list=response.obj.list;
                    $("#alert_div table thead").empty();
                    $("#alert_div table thead").append($("<tr style='background-color:rgb(238,238,238)'><th>设备名称</th><th>事件描述</th><th>状态</th><th>时间</th><th>事件等级</th></tr>"))
                    divIdListEmpty.push("alert_div table thead");
                    // for(var i in list){
                    //   var valueArray=[];
                    //   for(var j in list[i].data){
                    //     list[i].data[j].w=list[i].w;
                    //     list[i].data[j].d=list[i].d;
                    //     list[i].data[j].wExt=list[i].wExt;
                    //     list[i].data[j].dExt=list[i].dExt;
                    //    valueArray.push(list[i].data[j]);
                    //   }
                    //   valueArray=valueArray.sort(compare_1("t"));
                    //   valueArray=UniquePay_1(valueArray,"evL")
                    //   for(var z in valueArray){
                    //     var evLevel;
                    //     var p_zty;
                    //     var s_zty;
                    //     for(var q in D_IOT_EVENT_LEVEL){
                    //       if(valueArray[z].dExt.evL==D_IOT_EVENT_LEVEL[q].key){
                    //         evLevel=D_IOT_EVENT_LEVEL[q].val;
                    //       }
                    //     }
                    //     for(var k in D_IOT_TELESIG_STATE){
                    //       if(valueArray[z].dExt.zty==D_IOT_TELESIG_STATE[k].key){
                    //         p_zty=D_IOT_TELESIG_STATE[k].val;//状态域
                    //       }
                    //       if(valueArray[z].dExt.zty==D_IOT_TELESIG_STATE[k].pkey&&D_IOT_TELESIG_STATE[k].key.indexOf(valueArray[z].v)>=0){
                    //         s_zty=D_IOT_TELESIG_STATE[k].val;//状态值
                    //       }
                    //     }
                    //     var tr=($("<tr style='background-color:rgb(238,238,238)'><th>"+valueArray[z].wExt.hwName+"</th><th>"+valueArray[z].dExt.dDescr+"</th><th>"+p_zty+"</th><th>"+s_zty+"</th><th>"+formatDate(valueArray[z].t)+"</th><th>"+evLevel+"</th></tr>"));
                    //     $("#alert_div table tbody").append(tr)
                    //   }
                    // }

                    list=list.sort(compare_1("t"));
                    statusList=list;//将告警事件保存到statusList数组，用于获取异常设备
                    var showList=[];
                    for(var i in list){
                        var evLevel;
                        var p_zty;
                        var s_zty;
                        var item1=D_IOT_EVENT_LEVEL.find(({key})=>list[i].dExt.evL===key);
                        if(item1){
                            evLevel=item1.val;
                        }else{
                            evLevel="--";
                        }
                        var item2=D_IOT_TELESIG_STATE.find(({key})=>list[i].dExt.zty===key);
                        if(item2){
                            p_zty=item2.val;
                        }else{
                            p_zty="--";
                        }
                        for(var k in D_IOT_TELESIG_STATE){
                            if(list[i].dExt.zty==D_IOT_TELESIG_STATE[k].pkey&&D_IOT_TELESIG_STATE[k].key.indexOf(list[i].v)>=0){
                                s_zty=D_IOT_TELESIG_STATE[k].val;//状态值
                                break;
                            }else{
                                s_zty="--";
                            }
                        }

                      if(list[i].zty=="event"&&list[i].v=="0"||list[i].zty=="clamp"&&list[i].v=="0"){
                      }else{
                        showList.push(
                          {
                            "v":s_zty,
                            "zty":p_zty,
                            "evL":evLevel,
                            "hwName":list[i].wExt.hwName,
                            "dDescr":list[i].dExt.dDescr,
                            "t":formatDate(list[i].t),
                          }
                        )
                      }
                    }
                  document.getElementById("base_nav_text_flag").innerText=showList.length;
                 for(var j in showList){
                   var tr=($("<tr style='background-color:rgb(238,238,238)'><th>"+showList[j].hwName+"</th><th>"+showList[j].dDescr+"</th><th>"+showList[j].zty+"|"+showList[j].v+"</th><th>"+showList[j].t+"</th><th>"+showList[j].evL+"</th></tr>"));
                   $("#alert_div table tbody").append(tr)
                 }
                }
            }
        })
    }else{
        $("#base_nav_text_alert_table tbody").empty();
        $("#base_nav_text_flag").text("..")
    }
}
/***
 * json数组排序
 * @param propertyName
 * @returns {Function}
 */
function compare_1(propertyName) {
    return function(object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if(value2 < value1) {
            return -1;
        } else if(value2 > value1) {
            return 1;
        } else {
            return 0;
        }
    }
}
/***
 * json数组排序
 * @param propertyName
 * @returns {Function}
 */
function compare(propertyName) {
    return function(object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if(value2 > value1) {
            return -1;
        } else if(value2 < value1) {
            return 1;
        } else {
            return 0;
        }
    }
}
/***
 * json数组去重
 * @param array
 * @param key_1
 * @param key_2
 * @returns {*[]}
 * @constructor
 */
function UniquePay(array, key_1,key_2){
    var result = [array[0]];
    for(var i = 1; i < array.length; i++){
        var item = array[i];
        var repeat = false;
        for (var j = 0; j < result.length; j++) {
            if (item[key_1] == result[j][key_1]&&item[key_2]==result[j][key_2]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            result.push(item);
        }
    }
    return result;
}


/***
 * json数组去重
 * @param array
 * @param key_1
 * @returns {*[]}
 * @constructor
 */
function UniquePay_1(array, key_1){
    var result = [array[0]];
    for(var i = 1; i < array.length; i++){
        var item = array[i];
        var repeat = false;
        for (var j = 0; j < result.length; j++) {
            if (item[key_1] == result[j][key_1]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            result.push(item);
        }
    }
    return result;
}


/**
 * 获取url参数
 * @param variable
 * @returns {string|boolean}
 */
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
/***
 * 主接线图
 */
function getZJXT() {
    var h_1= document.getElementById("base_menu_bar");
    var h_2=h_1.getElementsByTagName('a');
    for(var i in h_2){
        if(document.getElementById(h_2[i].id)){
            document.getElementById(h_2[i].id).style.background="";
        }
    }
    document.getElementById("zjxt").style.background="#337ab7";
    $("#yzc_mainView .row").hide();
    $("#yzc_mainView iframe").remove();
    $("#yzc_mainView").append($("<iframe src='http://119.3.171.138:8080/ht-for-web/ht/skipShow?id=111'></iframe>"))
}
// 非发电区
function getFFDQ() {
    var h_1= document.getElementById("base_menu_bar");
    var h_2=h_1.getElementsByTagName('a');
    for(var i in h_2){
        if(document.getElementById(h_2[i].id)){
            document.getElementById(h_2[i].id).style.background="";
        }
    }
    document.getElementById("ffdq").style.background="#337ab7";
    $("#hw-gz").hide();  //设备型号
    $("#echarts_show_div").hide(); //散点图
    $("#select_show_div").hide(); //下拉框
    $("#running_status").hide();   //重要信息
}



//===========================================初始化================================================
$(function () {

    $.ajax({//查询保存所有描述的中间层的json
        url: "static/js/json/describe.json",
        type: "get",
        async:false,
        dataType: "json",
        success: function (data) {
            describeList = data.describeArr;
        }
    })
    $.ajax({//查询保存方法的中间层的json
        url: "static/js/json/function.json",
        type: "get",
        dataType: "json",
        async:false,
        success: function (data) {
            functionList = data.functionList;
        }
    })
    $.ajax({//查询保存方法的中间层的json
        url: "static/js/json/bandingFun.json",
        type: "get",
        dataType: "json",
        async:false,
        success: function (data) {
            var bandingFun = data.functionName;
            for(let i in bandingFun){
                $("#gz-select_jznbq_func").append("<option value='"+bandingFun[i].name+"'>"+bandingFun[i].describe+"</option>");
            }
        }
    })
   // $("#single-div").hide();//设备单体信息点击echarts数据点后显示，所以在初始化时隐藏
    saveHead();//保存页面顶部配置的方法
    initData();//初始化打开页面所需的下拉菜单横幅等重要数据
    getWhichOneArea();//获取
    editStatus();//状态部分
    add_GZ();
    //pageSize();
    editPulldown();//下拉框配置
    editEcharts();//编辑图表
    editSingle();//单体设备信息的编辑
    $('.selectColor').colorpicker();


    initArea(JSON.parse(sessionStorage.getItem("key")));//从主页点击获取参数跳转到指定页面

})


