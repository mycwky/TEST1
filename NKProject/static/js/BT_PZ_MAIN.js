var D_IOT_EVENT_LEVEL=[];//事件等级
var D_IOT_STATE_CHANGE=[];//事件变化
var D_IOT_TELESIG_STATE=[];//状态域
var D_IOT_OBJ_TAG=[];
var D_IOT_HW_MODEL=[];
var LINE=[];
var refreshEcharts_1=[];
var refreshHead_1=[];
var refreshAlert_1=[];
$(function () {
  //业主字典
  $.ajax({
    "async": false,
    "crossDomain": true,
    "url": "http://www.chaotiaorap.info:21180/iot/api/dict/get",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      // "Host": "192.168.3.102",
      //"Connection": "keep-alive",
      "cache-control": "no-cache"
    },
    "data": "{dicts:['D_IOT_OBJ_TAG','D_IOT_HW_MODEL'],partyId:'199559ff-c2d0-46e2-92f1-1a22468104f2'}"
  }).done(function (response) {
    for(var i in response.obj.list){
      switch (response.obj.list[i].name) {
        case "D_IOT_OBJ_TAG":
          D_IOT_OBJ_TAG=response.obj.list[i].data;
          for(var i in D_IOT_OBJ_TAG){
            if(D_IOT_OBJ_TAG[i].pkey=="LINE"){
              LINE.push(D_IOT_OBJ_TAG[i])
            }
          }
          break;
        case "D_IOT_HW_MODEL":
          D_IOT_HW_MODEL=response.obj.list[i].data
              break;
      }
    }
  })
  /**
   * 行业字典
   */
  $.ajax({
    "async": false,
    "crossDomain": true,
    "url": "http://www.chaotiaorap.info:21180/iot/api/dict/get",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      // "Host": "192.168.3.102",
      //"Connection": "keep-alive",
      "cache-control": "no-cache"
    },
    "data": "{dicts:['D_IOT_EVENT_LEVEL','D_IOT_STATE_CHANGE','D_IOT_TELESIG_STATE'],industry:'ubiIoT'}"
  }).done(function (response) {
    for(var i in response.obj.list){
      switch (response.obj.list[i].name) {
        case "D_IOT_EVENT_LEVEL":
          D_IOT_EVENT_LEVEL=response.obj.list[i].data;
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
  var whichHtml=$("#whichHtml").val();
  var dd;
  switch (whichHtml) {
    case "pz":
      dd=[{
        "text":"主页",
        "href":"BT_PZ_MAIN.html",
        "state":{
          "expanded":true
        },
      }];
      var htmlArr=["bt_page_pz.html","bt_page_pz.html","bt_page_pz.html","bt_page_pz.html","bt_page_pz.html","bt_page_pz.html"];
      var dd_2=[];
      for(var i in LINE){
        dd_2.push({
          "text":LINE[i].val,
          "href":htmlArr[i],
          // "state":{
          //   "expanded":true
          // }
          "tags":[LINE[i].key]
        })
      }
      dd[0].nodes=dd_2;
      break;
    case "show":
      dd=[{
        "text":"主页",
        "href":"HKDemo.html",
        "state":{
          "expanded":true
        },
      }];
      var htmlArr=["bt_page_show.html","bt_page_show.html","bt_page_show.html","bt_page_show.html","bt_page_show.html","bt_page_show.html"];
      var dd_2=[];
      for(var i in LINE){
        dd_2.push({
          "text":LINE[i].val,
          "href":htmlArr[i],
          // "state":{
          //   "expanded":true
          // }
          "tags":[LINE[i].key]
        })
      }
      dd[0].nodes=dd_2;
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
      sessionStorage.setItem('key','{"text":"'+data.text+'","tags":["'+data.tags+'"]}')
    }
  });
  //下载excel
  $("#downLoad-mainExcel").click(function() {
    switch (type) {
      case "date":
        var exportExcel = new ExportExcel();
        exportExcel.exports("mainTable-excel","告警故障日报");
        break;
      case "month":
        var exportExcel = new ExportExcel();
        exportExcel.exports("mainTable-excel","告警故障月报");
        break;
    }

  })
  $(".badge").attr("style","display:none");
  reloadMainHead();
  reloadMainEcharts();
  reloadAlert();
  $("#search_area_report").append("<option value='main'>电站</option>")
  for(var i in LINE){
    $("#search_area_report").append("<option value='"+LINE[i].key+"'>"+LINE[i].val+"</option>")
  }
})

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
/***
 * 获取当月第一天和最后一天
 * @returns {{thisMonthLastDay: string, thisMonthFirstDay: string}}
 */
function getMonthFirstLastDay(value) {
  var myDate;
  if(value!=null&&value!=""){
    myDate = new Date(value);
  }else{
    myDate = new Date();
  }
  var currentMonth = myDate.getMonth();
  var firstDay = new Date(myDate.getFullYear(), currentMonth, 1)
  var lastDay = new Date(firstDay.getFullYear(), currentMonth + 1, 0);
  var json={
    "thisMonthFirstDay":firstDay.getFullYear()+'/'+(firstDay.getMonth()+1)+'/'+firstDay.getDate(),
    "thisMonthLastDay":lastDay.getFullYear()+'/'+(lastDay.getMonth()+1)+'/'+lastDay.getDate()
  }
  return json;
}

/***
 * 获取当年第一天和最后一天
 * @param date
 * @returns {*}
 */
function getYearFirstLastDay(value) {
  var firstDay;var lastDay;
  if(value!=null&&value!=""){
    firstDay = new Date(value);
    lastDay = new Date(value);
  }else{
    firstDay = new Date();
    lastDay = new Date();
  }
  firstDay.setDate(1);
  firstDay.setMonth(0);

  lastDay.setFullYear(lastDay.getFullYear()+1);
  lastDay.setDate(0);
  lastDay.setMonth(-1);
  var json={
    "thisYearFirstDay":firstDay.getFullYear() + '/' + (firstDay.getMonth() + 1) + '/' + firstDay.getDate(),
    "thisYearLastDay":lastDay.getFullYear() + '/' + (lastDay.getMonth() + 1) + '/' + lastDay.getDate()
  }
  return json;
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
function conver(s) {
  return s < 10 ? '0' + s : s;
}

/***
 * 加载横幅数据
 */
function reloadMainHead() {
  for(var i in refreshHead_1){
    window.clearInterval(refreshHead_1[i]);
  }
  refreshHead_1=[];
  var headDiv=["mainHead_1","mainHead_2","mainHead_3","mainHead_4","mainHead_5","mainHead_6","aggregateData_1","aggregateData_2","aggregateData_3","aggregateData_4"]
  for (var i in headDiv){
    $.ajax({
       url:"http://127.0.0.1:9002/find",
       type:"post",
      async:false,
      dataType:"json",
      data:{
         "type":"head",
        "area":"nk_main",
        "divId":headDiv[i]
      },success:function (data) {
        var w;
        var d;
        var num_1;
        var xiaoshu;
        var inputRatio;
        var refreshHeadData;
        var divId;
        if(data.length>0){
          if(data[0].value!=null&&data[0].value!=""){
            w=data[0].value.inputHeadDeviceId;
            d=data[0].value.inputHeadDataId;
            divId=data[0].divId;
            if(w!=""&&d!=""){
              if(parseFloat(data[0].value.inputRatio)==0||data[0].value.inputRatio==""||data[0].value.inputRatio==null){
                inputRatio=1;
              }else{
                inputRatio=data[0].value.inputRatio;
              }
              if(parseFloat(data[0].value.xiaoShu)<=0||data[0].value.xiaoShu==""||data[0].value.xiaoShu==null){
                xiaoshu=0;
              }else{
                xiaoshu=data[0].value.xiaoShu;
              }
              refreshHeadData=data[0].value.refreshHeadData;
              getData_Head(w,d,divId,xiaoshu,inputRatio);
              if(parseFloat(refreshHeadData)>0){
                refreshHead_1.push(window.setInterval(function () {
                  getData_Head(w,d,divId,xiaoshu,inputRatio);
                },parseFloat(refreshHeadData)*1000))
              }

            }
            $("#"+headDiv[i]+" .name").html(data[0].value.inputHeadName);
            $("#"+headDiv[i]+" .unit").html(data[0].value.inputHeadUnit)

          }
        }
      }
    })
  }
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
var HeadResponseValue=0;
function getData_Head(w,d,divId,xiaoshu,inputRatio) {
  var dataObj={
    w:w,
    d:d,
    partyId:'199559ff-c2d0-46e2-92f1-1a22468104f2',
    isRT:true
  }
  $.ajax({
    "async": false,
    "crossDomain": true,
    "url": "http://www.chaotiaorap.info:21180/iot/api/dpt/data/find/1",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      //"Host": "192.168.3.102",
      //"Connection": "keep-alive",
      "cache-control": "no-cache"
    },
    "data": JSON.stringify(dataObj)
  }).done(function (response) {
    if(response.obj.list.length>0){
      if(response.obj.list[0].v!=null&&response.obj.list[0].v!=""){
        HeadResponseValue=response.obj.list[0].v
      }else{
        HeadResponseValue=0;
      }
    }else{
      HeadResponseValue=0;
    }
  });
  var num_1=parseFloat(inputRatio)*parseFloat(HeadResponseValue);
  $("#"+divId+" .numValue").html(num_1.toFixed(parseInt(xiaoshu)))
}

/***
 * 加载主界面曲线图表配置
 */
function reloadMainEcharts() {
  for(var i in refreshEcharts_1){
    window.clearInterval(refreshEcharts_1[i])
  }
  refreshEcharts_1=[];
  var divArray=["showMainEcharts_1","showMainEcharts_2","showMainEcharts_3","showMainEcharts_4","showMainEcharts_5","showMainEcharts_6"]
  for(var i=0;i<divArray.length;i++){
    $.ajax({
      url:"http://127.0.0.1:9002/find",
      type:"post",
      dataType:"json",
      async:false,
      data:{
        "divId":divArray[i],
        "area":"nk_main",
        "type":"echarts"
      },
      success:function (data) {
        if(data.length>0){
          $("#"+divArray[i]+" .title").html(data[0].value.name);
          $("#"+divArray[i]).attr("title",data[0].value.name);
          var showEchartsType=data[0].value.showEchartsType;
          var divId=data[0].value.echartsDivId;
          var deviceIdAndDataId=data[0].value.deviceIdAndDataId;
          var divType=data[0].type;
          var dataType=data[0].value.DataType;
          var input_echarts_fd;
          var w="[";
          var d="[";
          var wd='[';
          var dataNameArray=[];
          var xiaoshu;
          if(data[0].value.xiaoshu!=""&&data[0].value.xiaoshu!=null){
            xiaoshu=data[0].value.xiaoshu;
          }else{
            xiaoshu=0;
          }
          var whetherToDisplayDataLabels=data[0].value.whetherToDisplayDataLabels;
          switch (dataType) {
            case "echarts_fd":
              if(data[0].value.input_echarts_fd!=""&&data[0].value.input_echarts_fd!=null&&parseFloat(data[0].value.input_echarts_fd)!=0){
                input_echarts_fd=data[0].value.input_echarts_fd;
              }else{
                input_echarts_fd=1;
              }
              for(var j in deviceIdAndDataId){
                dataNameArray.push(deviceIdAndDataId[j].dataName);
                w+="'"+deviceIdAndDataId[j].deviceId+"'"
                d+="'"+deviceIdAndDataId[j].dataId+"'"
                wd+='{w:'+"'"+deviceIdAndDataId[j].deviceId+"',d:'"+deviceIdAndDataId[j].dataId+"'}"
                if(j<(deviceIdAndDataId.length-1)){
                  wd+=","
                  w+=","
                  d+=","
                }
              }
              wd+=']'
              break;
            case "echarts_mr":
              if(data[0].value.input_echarts_fd!=""&&data[0].value.input_echarts_fd!=null&&parseFloat(data[0].value.input_echarts_fd)!=0){
                input_echarts_fd=data[0].value.input_echarts_fd;
              }else{
                input_echarts_fd=1;
              }
              for(var j in deviceIdAndDataId){
                dataNameArray.push(deviceIdAndDataId[j].dataName);
                w+="'"+deviceIdAndDataId[j].deviceId+"'"
                d+="'"+deviceIdAndDataId[j].dataId+"'"
                wd+='{w:'+"'"+deviceIdAndDataId[j].deviceId+"',d:'"+deviceIdAndDataId[j].dataId+"'}"
                if(j<(deviceIdAndDataId.length-1)){
                  wd+=","
                  w+=","
                  d+=","
                }
              }
              wd+=']'
              break;
            case "echarts_alert":
              for(var j in deviceIdAndDataId){
                dataNameArray.push(deviceIdAndDataId[j].dataName);
                w+="'"+deviceIdAndDataId[j].evL+"'"
                if(j<(deviceIdAndDataId.length-1)){
                  w+=","
                }
              }
              break;
          }
          w+="]";
          d+="]"
          var startDT;
          var endDT;
          var dateTime;
          var formatterValue;
          var dataDateType=data[0].value.showDateEcharts;//数据显示的时间段范围
          var refreshData=data[0].value.refreshData;//刷新周期
          var showPercentYesOrNo=data[0].value.showPercentYesOrNo;
          if(showPercentYesOrNo=="true"){
            formatterValue="%";
          }else if(showPercentYesOrNo=="false"){
            formatterValue="";
          }
          if(data[0].value.showDateEcharts=="dataOfDay"){
            dateTime=new Date().getFullYear()+'年'+(new Date().getMonth()+1)+"月"+new Date().getDate()+"日";
            startDT=new Date(new Date().toLocaleDateString()).getTime();
            endDT=new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1;
            $("#"+divArray[i]+" .time").html(dateTime);
            getData_Echarts(dataDateType,wd,showEchartsType,startDT,endDT,divType,divId,whetherToDisplayDataLabels,formatterValue,dataNameArray,deviceIdAndDataId,xiaoshu,dataType,showPercentYesOrNo)
            if(parseFloat(refreshData)>0){
              refreshEcharts_1.push(window.setInterval(function () {
                getData_Echarts(dataDateType,wd,showEchartsType,startDT,endDT,divType,divId,whetherToDisplayDataLabels,formatterValue,dataNameArray,deviceIdAndDataId,xiaoshu,dataType,showPercentYesOrNo)
              },parseFloat(refreshData)*1000))
            }
          }else if(data[0].value.showDateEcharts=="dataOfMonth"){
            var curDate = new Date();
            var curMonth = curDate.getMonth();
            curDate.setMonth(curMonth + 1);
            curDate.setDate(0);
            dateTime=new Date().getFullYear()+'年'+(new Date().getMonth()+1)+"月"
            startDT=new Date(getMonthFirstLastDay().thisMonthFirstDay).getTime();
            //endDT=new Date(getMonthFirstLastDay().thisMonthLastDay).getTime();
            endDT=new Date(new Date(new Date(getMonthFirstLastDay().thisMonthLastDay)).toLocaleDateString()).getTime()+24*60*60*1000-1+1000;
            $("#"+divArray[i]+" .time").html(dateTime);
            getData_Echarts(dataDateType,wd,showEchartsType,startDT,endDT,divType,divId,whetherToDisplayDataLabels,formatterValue,dataNameArray,deviceIdAndDataId,xiaoshu,dataType,showPercentYesOrNo)
          }else if(data[0].value.showDateEcharts=="dataOfYear"){
            dateTime=new Date().getFullYear()+'年'
            startDT=new Date(getYearFirstLastDay().thisYearFirstDay).getTime();
            endDT=new Date(getYearFirstLastDay().thisYearLastDay).getTime();
            $("#"+divArray[i]+" .time").html(dateTime);
            getData_Echarts(dataDateType,wd,showEchartsType,startDT,endDT,divType,divId,whetherToDisplayDataLabels,formatterValue,dataNameArray,deviceIdAndDataId,xiaoshu,dataType,showPercentYesOrNo)
          }
        }
      }
    })
  }
}

/***
 * 获取曲线图表数据
 */
function getData_Echarts(dataDateType,wd,showEchartsType,startDT,endDT,divType,divId,whetherToDisplayDataLabels,formatterValue,dataNameArray,deviceIdAndDataId,xiaoshu,dataType,showPercentYesOrNo) {
  let dataObj = "{partyId:'199559ff-c2d0-46e2-92f1-1a22468104f2'";
  var realTimeData=[];
  var interfanceNum;
  switch (dataDateType) {
    case "dataOfDay":
      interfanceNum=3;
      //dataObj += ",w:"+w+",d:"+d+",startDT:" + startDT+",endDT:" + endDT+",outSet:'BT110'}"
      dataObj += ",wd:"+wd+",startDT:" + startDT+",endDT:" + endDT+",outSet:'BT110'}"
      $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "http://www.chaotiaorap.info:21180/iot/api/dpt/data/find/"+interfanceNum,
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Accept": "*/*",
          "Cache-Control": "no-cache",
          //"Host": "295587.ichengyun.net",
          //"Connection": "keep-alive",
          "cache-control": "no-cache"
        },
        "data": "{partyId:'199559ff-c2d0-46e2-92f1-1a22468104f2',wd:"+wd+",isRT:true,outSet:'BT110'}"
      }).done(function (data) {
        if(data.obj.list.length>0){
          realTimeData=data.obj.list;
        }
      })
      break;
    case "dataOfMonth":
      switch (dataType) {
        case "echarts_fd":
          interfanceNum=25;
          dataObj += ",wd:"+wd+",startDT:" + startDT+",rptType:'m',outSet:'BT110'}"
          break;
        case "echarts_mr":
          interfanceNum=25;
          dataObj += ",wd:"+wd+",startDT:" + startDT+",rptType:'m',outSet:'BT110'}"
          break;
        case "echarts_alert":
          interfanceNum=5;
          dataObj += ",evL:"+w+",startDT:" + startDT+",endDT:"+endDT+",outSet:'BT110'}"
          break;
      }
      break;
    case "dataOfYear":
      switch (dataType) {
        case "echarts_fd":
          interfanceNum=25;
          dataObj += ",wd:"+wd+",startDT:" + startDT+",rptType:'y',outSet:'BT110'}"
          break;
        case "echarts_mr":
          interfanceNum=25;
          dataObj += ",wd:"+wd+",startDT:" + startDT+",rptType:'y',outSet:'BT110'}"
          break;
        case "echarts_alert":
          interfanceNum=5;
          dataObj += ",evL:"+w+",startDT:" + startDT+",endDT:"+endDT+",outSet:'BT110'}"
          break;
      }

      break;
  }
  // if(w!="[]"&&d!=null){
  if(wd!="[]"){
    $.ajax({
      "async": true,
      "crossDomain": true,
      "url": "http://www.chaotiaorap.info:21180/iot/api/dpt/data/find/"+interfanceNum,
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "cache-control": "no-cache"
      },
      "data": dataObj
    }).done(function (response) {
      console.log(response)
      var objArray=response.obj.list;
      if(objArray.length>0){
        if (divType == "echarts") {
          var y=[];
          var map=new Map();
            for(var i in objArray){
            var date=new Date(objArray[i].g);
            var key=objArray[i].w+"-"+objArray[i].d;
            var list=map.get(key);
            if(map.get(key)){
              switch (dataDateType) {
                case "dataOfMonth":
                  objArray.sort(function (a,b) {
                    return a.g - b.g;//时间正序
                  })
                  switch (dataType) {
                    case "echarts_fd":
                      list.push({
                        "value":[
                          date.getDate()+"日",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                    case "echarts_mr":
                      list.push({
                        "value":[
                          date.getDate()+"日",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                    case "echarts_alert":
                      list.push({
                        "value":[
                          date.getDate()+"日",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                  }

                  break;
                case "dataOfYear":
                  objArray.sort(function (a,b) {
                    return a.g - b.g;//时间正序
                  })
                  switch (dataType) {
                    case "echarts_fd":
                      list.push({
                        "value":[
                          (date.getMonth()+1)+"月",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                    case "echarts_mr":
                      list.push({
                        "value":[
                          (date.getMonth()+1)+"月",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                    case "echarts_alert":
                      list.push({
                        "value":[
                          (date.getMonth()+1)+"月",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                  }

                  break;
                case "dataOfDay":
                  // list.push({
                  //   "value":[
                  //     date.getHours()+"点",parseFloat(objArray[i].v)
                  //   ]
                  // })
                  objArray[i].data.sort(function (a,b) {
                    return a.t - b.t;//时间正序
                  })

                  for(var k in objArray[i].data){
                    list.push({
                      "value":[
                        objArray[i].data[k].t,parseFloat(objArray[i].v)
                      ]
                    })
                  }

                  var item1 =objArray[i].data.find(({t}) => startDT === t);
                  // var item2 =objArray[i].data.find(({t}) => new Date().getTime() === t);
                  //var item2=realTimeData[i].t==new Date().getTime();

                  if(item1){
                  }else{
                    if(objArray[i].data[0].k){
                      var first_v=objArray[i].data[0].v-(objArray[i].data[0].t-startDT)*objArray[i].data[0].k;
                      list.push({
                        "value":[startDT,parseFloat(first_v)]
                      })
                    }else {
                      var first_v=objArray[i].data[0].v-(objArray[i].data[0].t-startDT)*0;
                      list.push({
                        "value":[startDT,parseFloat(first_v)]
                      })
                    }
                  }
                  if(realTimeData!=null&&realTimeData[i]){
                    var item2_rt=realTimeData[i].t==new Date().getTime();
                    if(item2_rt==true){
                    }else {
                      //var end_v=objArray[i].data[objArray[i].data.length-1].v-(objArray[i].data[objArray[i].data.length-1].t-new Date().getTime())*0;
                      for(var rel in realTimeData){
                        if(realTimeData[rel].v!=null){
                          if(realTimeData[rel].w==objArray[i].w&&realTimeData[rel].d==objArray[i].d){
                            if(realTimeData[rel].t==objArray[i].data[objArray[i].data.length-1].t){
                            }else{
                              list.push({
                                "value":[
                                  realTimeData[rel].t,parseFloat(realTimeData[rel].v)
                                ]
                              })
                            }
                            var end_v_rt =realTimeData[rel].v-(realTimeData[rel].t-new Date().getTime())*0;
                            list.push({
                              "value":[new Date().getTime(),parseFloat(end_v_rt)]
                            })
                          }
                        }else{
                          var item2_his =objArray[i].data.find(({t}) => new Date().getTime() === t);
                          if(item2_his){
                          }else{
                            var end_v_his=objArray[i].data[objArray[i].data.length-1].v-(objArray[i].data[objArray[i].data.length-1].t-new Date().getTime())*0;
                            list.push({
                              "value":[new Date().getTime(),parseFloat(end_v_his)]
                            })
                          }
                        }
                      }
                    }
                  }else{
                    var item2_his =objArray[i].data.find(({t}) => new Date().getTime() === t);
                    if(item2_his){
                    }else{
                      var end_v_his=objArray[i].data[objArray[i].data.length-1].v-(objArray[i].data[objArray[i].data.length-1].t-new Date().getTime())*0;
                      list.push({
                        "value":[new Date().getTime(),parseFloat(end_v_his)]
                      })
                    }
                  }
                  list.sort(function (a, b) {
                    return a.value[0] - b.value[0];//时间正序
                  });
                  break;
              }
            }else{
              var list_1=[];
              switch (dataDateType) {
                case "dataOfMonth":
                  objArray.sort(function (a,b) {
                    return a.g - b.g;//时间正序
                  })
                  switch (dataType) {
                    case "echarts_fd":
                      list_1.push({
                        "value":[
                          date.getDate()+"日",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                    case "echarts_mr":
                      list_1.push({
                        "value":[
                          date.getDate()+"日",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                    case "echarts_alert":
                      list_1.push({
                        "value":[
                          date.getDate()+"日",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                  }

                  break;
                case "dataOfYear":
                  objArray.sort(function (a,b) {
                    return a.g - b.g;//时间正序
                  })
                  switch (dataType) {
                    case "echarts_fd":
                      list_1.push({
                        "value":[
                          (date.getMonth()+1)+"月",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                    case "echarts_mr":
                      list_1.push({
                        "value":[
                          (date.getMonth()+1)+"月",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                    case "echarts_alert":
                      list_1.push({
                        "value":[
                          (date.getMonth()+1)+"月",parseFloat(objArray[i].v)
                        ]
                      })
                      break;
                  }

                  break;
                case "dataOfDay":
                  objArray[i].data.sort(function (a,b) {
                    return a.t - b.t;//时间正序
                  })
                  for(var k=0;k<objArray[i].data.length;k++){
                    list_1.push({
                      "value":[
                        objArray[i].data[k].t,parseFloat(objArray[i].data[k].v)
                      ]
                    })
                  }
                  var item1 =objArray[i].data.find(({t}) => startDT === t);
                  //var item2 =objArray[i].data.find(({t}) => new Date().getTime() === t);
                  if(item1){
                  }else{
                    if(objArray[i].data[0].k){
                      var first_v=objArray[i].data[0].v-(objArray[i].data[0].t-startDT)*objArray[i].data[0].k;
                      list_1.push({
                        "value":[startDT,parseFloat(first_v)]
                      })

                    }else{
                      var first_v=objArray[i].data[0].v-(objArray[i].data[0].t-startDT)*0;
                      list_1.push({
                        "value":[startDT,parseFloat(first_v)]
                      })
                    }
                  }
                 /* if(realTimeData!=null&&realTimeData[i]){*/
                  if(realTimeData.length>0){
                    var item2_rt=realTimeData[i].t==new Date().getTime();
                    if(item2_rt==true){
                    }else {
                      //var end_v=objArray[i].data[objArray[i].data.length-1].v-(objArray[i].data[objArray[i].data.length-1].t-new Date().getTime())*0;
                      for(var rel in realTimeData){
                        if(realTimeData[rel].v!=null){
                          if(realTimeData[rel].w==objArray[i].w&&realTimeData[rel].d==objArray[i].d){
                            if(realTimeData[rel].t==objArray[i].data[objArray[i].data.length-1].t){
                            }else{
                              list_1.push({
                                "value":[
                                  realTimeData[rel].t,parseFloat(realTimeData[rel].v)
                                ]
                              })
                            }
                            var end_v_rt =realTimeData[rel].v-(realTimeData[rel].t-new Date().getTime())*0;
                            list_1.push({
                              "value":[new Date().getTime(),parseFloat(end_v_rt)]
                            })
                          }
                        }else{
                          var item2_his =objArray[i].data.find(({t}) => new Date().getTime() === t);
                          if(item2_his){
                          }else{
                            var end_v_his=objArray[i].data[objArray[i].data.length-1].v-(objArray[i].data[objArray[i].data.length-1].t-new Date().getTime())*0;
                            list_1.push({
                              "value":[new Date().getTime(),parseFloat(end_v_his)]
                            })
                          }
                        }
                      }
                    }
                  }else{
                    var item2_his =objArray[i].data.find(({t}) => new Date().getTime() === t);
                    if(item2_his){
                    }else{
                      var end_v_his=objArray[i].data[objArray[i].data.length-1].v-(objArray[i].data[objArray[i].data.length-1].t-new Date().getTime())*0;
                      list_1.push({
                        "value":[new Date().getTime(),parseFloat(end_v_his)]
                      })
                    }
                  }
                  list_1.sort(function (a, b) {
                    return a.value[0] - b.value[0];//时间正序
                  });
                  break;
              }
              map.set(key,list_1);
            }
          }
          var test_list=[];
          var list_1=[];
          var list_color=[];

          map.forEach(function (value, key){
            test_list.push(value);
            list_1.push({"value":value,"w":key.substring(0,key.indexOf("-")),"d":key.substring(key.indexOf("-")+1)})
          })
          for(var o in list_1){
            var dUnit;
            if(dataType=="echarts_fd"){
              dUnit="[h]";
            }else{
              if(objArray[o].dExt.dUnit!=null&&objArray[o].dExt.dUnit!=""){
                dUnit="["+objArray[o].dExt.dUnit+"]";
              }else{
                dUnit=""
              }
            }
            for(var uu in deviceIdAndDataId){
              if(list_1[o].w==deviceIdAndDataId[uu].deviceId&&list_1[o].d==deviceIdAndDataId[uu].dataId){
                var vv=list_1[o].value;
                var capacity;
                if(deviceIdAndDataId[uu].capacity!=""&&deviceIdAndDataId[uu].capacity!=null&&parseFloat(deviceIdAndDataId[uu].capacity)!=0){
                  capacity=deviceIdAndDataId[uu].capacity;
                }else{
                  capacity="1";
                }
                var vv2=[];
                for(var h in vv){
                  // vv[i].value[1]=(parseFloat(vv[i].value[1])/parseFloat(deviceIdAndDataId[uu].capacity)).toFixed(parseInt(xiaoshu));
                  if(showPercentYesOrNo=="true"){
                    vv2.push({
                      "value":[
                        //vv[h].value[0],parseFloat((parseFloat(vv[h].value[1])/parseFloat(capacity)).toFixed(parseInt(xiaoshu)))*100
                        vv[h].value[0],(parseFloat(vv[h].value[1])/parseFloat(capacity)*100).toFixed(parseInt(xiaoshu))
                      ]
                    });
                  }else{
                    vv2.push({
                      "value":[
                        vv[h].value[0],(parseFloat(vv[h].value[1])/parseFloat(capacity)).toFixed(parseInt(xiaoshu))
                      ]
                    });
                  }
                }

                list_color.push(deviceIdAndDataId[uu].color);
                //objArray[o].dExt.dUnit
                y.push({
                  name:deviceIdAndDataId[uu].dataName+dUnit,
                  type: showEchartsType,
                  //smooth: true, //是否平滑曲线显示
                  data:vv2
                })
              }
            }
          }
          getMainEcharts2(y,divId,formatterValue,whetherToDisplayDataLabels,list_color,dataNameArray,dataDateType)
        }
      }
    });
  }
}

/***
 * 曲线图和柱形图
 * @param x
 * @param y
 * @param divId
 * @param formatterValue
 * @param whetherToDisplayDataLabels
 * @param colorArray
 *
 */
function getMainEcharts2(y,divId,formatterValue,whetherToDisplayDataLabels,colorArray,dataNameArray,dataDateType) {
  var myChart=echarts.init(document.getElementById(divId));
  var xAxisObj;var tooltipObj;
  switch (dataDateType) {
    case "dataOfDay":
      xAxisObj={
        type: 'time',
        splitLine: {
          show: true
        },
        axisLabel: {
          formatter: function (value, index) {
            var date = new Date(value);
            let h=date.getHours()<10? '0'+date.getHours():date.getHours();
            let min=date.getMinutes()<10? '0'+date.getMinutes():date.getMinutes();
            return h+':'+min;
          },
        },
        axisLine:{
          lineStyle:{
            color:'#FFF'
          },
        },
        maxInterval:7200 * 1000
      }
      tooltipObj={
        trigger: 'axis',
        axisPointer: {
          animation: false
        },
        formatter: function (params) {
          var htmlStr = '<div>';
          for(var i in params){
            var date = new Date(params[i].value[0]);
            let h=date.getHours()<10? '0'+date.getHours():date.getHours();
            let min=date.getMinutes()<10? '0'+date.getMinutes():date.getMinutes();
            let sec=date.getSeconds()<10? '0'+date.getSeconds():date.getSeconds();
            htmlStr +='<a style="color: '+params[i].color+'">'+params[i].seriesName+':'+params[i].value[1]+formatterValue+'</a></br>';
            htmlStr +='<a style="color: '+params[i].color+'">时间:&nbsp;'+h+':'+min+':'+sec+'</a></br>';
          }
          htmlStr +="</div>"
          return  htmlStr;
        },
      }
      break;
    case "dataOfMonth":
      var days=new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate();
      var daysArr=[];
      for(var j=0;j<days;j++){
        daysArr.push((j+1)+"日")
      }
      xAxisObj={
        type: 'category',
        data:daysArr,
        splitLine: {
          show: true
        },
        axisLine:{
          lineStyle:{
            color:'#FFF'
          },

        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
          show: true, //是否显示分隔线。默认数值轴显示，类目轴不显示。
          lineStyle: { //分隔线样式
            type: 'solid', //分隔线线的类型。
            color:"#8A8A8A"
          },
        },
      }
      tooltipObj={
        trigger: 'axis',
        axisPointer: {
          animation: false
        },
        formatter: function (params) {
          var htmlStr = '<div>';
          for(var i in params){
            var date = new Date();
            let y=date.getFullYear();
            let m=date.getMonth()+1;
            htmlStr +='<a style="color: '+params[i].color+'">'+params[i].seriesName+':'+params[i].value[1]+formatterValue+'</a></br>';
            htmlStr +='<a style="color: '+params[i].color+'">时间:&nbsp;'+y+'年'+m+'月'+params[i].name+'</a></br>';
          }
          htmlStr +="</div>"
          return  htmlStr;
        },
      }
      break;
    case "dataOfYear":
      var monthArr=[];
      for(var j=0;j<12;j++){
        monthArr.push((j+1)+"月");
      }
      xAxisObj={
        type: 'category',
        data:monthArr,
        splitLine: {
          show: true
        },
        axisLine:{
          lineStyle:{
            color:'#FFF'
          },

        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
          show: true, //是否显示分隔线。默认数值轴显示，类目轴不显示。
          lineStyle: { //分隔线样式
            type: 'solid', //分隔线线的类型。
            color:"#8A8A8A"
          },
        },
      }
      tooltipObj={
        trigger: 'axis',
        axisPointer: {
          animation: false
        },
        formatter: function (params) {
          var htmlStr = '<div>';
          for(var i in params){
            var date = new Date();
            let y=date.getFullYear();
            htmlStr +='<a style="color: '+params[i].color+'">'+params[i].seriesName+':'+params[i].value[1]+formatterValue+'</a></br>';
            htmlStr +='<a style="color: '+params[i].color+'">时间:&nbsp;'+y+'年'+params[i].name+'</a></br>';
          }
          htmlStr +="</div>"
          return  htmlStr;
        },
      }
      break;
  }
  var formatter='{value}'+formatterValue;
  var labelJson;
  if(whetherToDisplayDataLabels=="true"){
    labelJson={
      show:true,
      position: 'top',
      fontSize:15,
      fontWeight:'bolder',
      fontFamily:'宋体',
    }
  }else if(whetherToDisplayDataLabels=="false"){
    labelJson={
      show:false,
      position: 'top',
      fontSize:15,
      fontWeight:'bolder',
      fontFamily:'宋体',
    }
  }
  option = {
    /*X轴设置*/
    xAxis: xAxisObj,
    tooltip :tooltipObj ,
    legend: {
      x: 'center',
      //data: dataNameArray,
      textStyle:{
        color: '#ffffff'//字体颜色
      }

    },
    label:labelJson,
    color:colorArray,
    // itemStyle: {
    //   /*圆点颜色*/
    //    color: "#4876FF",
    //    borderColor: "#48D1CC",
    //   borderWidth: 4
    // },
    yAxis: [{
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter:formatter
      },
      position: 'left',
      axisLine:{
        lineStyle:{
          color:'#FFF',
        }
      }
    }],
    series:y
  };
  // 为echarts对象加载数据
  myChart.setOption(option);
}

/***
 * 加载设置的告警框内容
 */
function reloadAlert() {
  for(var i in refreshAlert_1){
    window.clearInterval(refreshAlert_1[i])
  }
  refreshAlert_1=[];
  $.ajax({
    url:"http://127.0.0.1:9002/find",
    type:"post",
    //async:false,
    dataType:"json",
    data:{
      "type":"alert",
      "area":"nk_main",
      "divId":'alert_div'
    },
    success:function (data) {
      if(data!=null&&data!=""){
        var value=data[0].value;
        var alertArray;
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
          alertArray=[];
        }
        var refreshAlert=data[0].refreshAlert;
        var startDT=new Date(new Date().toLocaleDateString()).getTime();
        var endDT=new Date().getTime()+86400000-(new Date().getHours()*60*60+new Date().getMinutes()*60+new Date().getSeconds())*1000
        reloadAlertData(alertArray,startDT,endDT);
        if(parseFloat(refreshAlert)>0){
          refreshAlert_1.push(window.setInterval(function () {
            reloadAlertData(alertArray,startDT,endDT);
          },parseFloat(refreshAlert)*1000))
        }
      }
    }
  })
}

/***
 * 加载告警数据
 */
function reloadAlertData(alertArray,startDT,endDT) {
  //$("#base_nav_text_alert_table thead").empty();
  $("#base_nav_text_alert_table tbody").empty();
  if(alertArray.length>0){
    $.ajax({
      //"async": false,
      "crossDomain": true,
      "url": "http://www.chaotiaorap.info:21180/iot/api/dpt/data/find/1",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        //"Host": "192.168.3.102",
        //"Connection": "keep-alive",
        "cache-control": "no-cache"
      },
      //"data": "{evL:"+alertArray+",partyId:'199559ff-c2d0-46e2-92f1-1a22468104f2',startDT:"+startDT+",endDT:"+endDT+",outSet:'BT110'}"
      "data": "{evL:"+alertArray+",partyId:'199559ff-c2d0-46e2-92f1-1a22468104f2',t:"+new Date().getTime()+",outSet:'BT110'}"
    }).done(function (response) {
      if(response.obj.list.length>0){
        var list=response.obj.list;


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
        var showList=[];
        for(var i in list){
          var evLevel;
          var p_zty;
          var s_zty;
          var line;
          var area;
          var tags=list[i].wExt.tags;
          var item1=D_IOT_EVENT_LEVEL.find(({key})=>list[i].dExt.evL===key);
          if(item1){
            evLevel=item1.val;
          }else{
            evLevel="--";
          }
          // for(var q in D_IOT_EVENT_LEVEL){
          //   if(list[i].dExt.evL==D_IOT_EVENT_LEVEL[q].key){
          //     evLevel=D_IOT_EVENT_LEVEL[q].val;
          //     break;
          //   }else{
          //     evLevel="--";
          //   }
          // }
          var item2=D_IOT_TELESIG_STATE.find(({key})=>list[i].dExt.zty===key);
          if(item2){
            p_zty=item2.val;
          }else{
            p_zty="--";
          }

              for(var k in tags){
                if(tags[k].indexOf("LINE")>=0){
                  var item3=D_IOT_OBJ_TAG.find(({key})=>tags[k]===key);
                  if(item3){
                    line=item3.val;
                  }else{
                    line="--";
                  }
                }

                if(tags[k].indexOf("PVBZONE")>=0){
                  var item4=D_IOT_OBJ_TAG.find(({key})=>tags[k]===key);
                  if(item4){
                    area=item4.val;
                  }else{
                    area="--";
                  }
                }
              }


          // for(var k in D_IOT_TELESIG_STATE){
          //   if(list[i].dExt.zty==D_IOT_TELESIG_STATE[k].key){
          //     p_zty=D_IOT_TELESIG_STATE[k].val;//状态域
          //     break;
          //   }else{
          //     p_zty="--";
          //   }
          // }
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
                 "line":line,
                 "area":area
               }
             )
          }
        }
        document.getElementById("base_nav_text_flag").innerText=showList.length;
        for(var j in showList){
          var tr=($("<tr style='background-color:rgb(238,238,238)'><th>"+showList[j].hwName+"</th><th>"+showList[j].dDescr+"</th><th>"+showList[j].zty+"|"+showList[j].v+"</th><th>"+showList[j].t+"</th><th>"+showList[j].evL+"</th><th>"+showList[j].line+"</th><th>"+showList[j].area+"</th></tr>"));
          $("#alert_div table tbody").append(tr)
        }
      }
    })
  }
}

var type="date";
function selectReportDate(value) {
  var inputDate = $("#selectDate").clone(true);
  $(inputDate).removeAttr("lay-key");
  $("#selectDate").after(inputDate);
  $("#selectDate").remove();

  switch (value) {
    case "date":
      type="date"
      break;
    case "month":
      type="month"
      break;
    case "year":
      type="year"
      break;
  }
  selectedDate(type);
}
$(function () {
  selectedDate(type);
})

function selectedDate(type) {
  layui.use('laydate', function () {
    var laydate = layui.laydate;
    laydate.render({
      elem: "#selectDate",
      type: type,
      done: function (value) {
        //获取下拉框选择的excel表格
        if (value != null && value != "") {
          var startDT;var endDT;
          switch (type) {
            case "date":
              var nowTimeDate = new Date(value)
              startDT = nowTimeDate.setHours(0, 0, 0, 0);
              endDT = new Date(new Date(value).toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1 + 1000;
              break;
            case "month":
              startDT = new Date(getMonthFirstLastDay(value).thisMonthFirstDay).getTime();
              endDT = new Date(new Date(new Date(getMonthFirstLastDay(value).thisMonthLastDay)).toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1 + 1000;
              break;
            case "year":
              console.log(getYearFirstLastDay(value))
              startDT = new Date(getYearFirstLastDay(value).thisYearFirstDay).getTime();
              endDT = new Date(getYearFirstLastDay(value).thisYearLastDay).getTime();
              break;
          }
          getHistoryReport(startDT,endDT,$("#search_area_report").val())
        } else {
          return;
        }
      }
    });
  });
}
//mainTable-tbody
/***
 * 查询历史事件记录
 * @param startDT
 * @param endDT
 */
function getHistoryReport(startDT,endDT,objTag) {
  $("#mainTable-tbody").empty();
  $("#flipCver").empty();
  var setting;
  if(objTag=="main"){
    setting={
      "async": true,
      "crossDomain": true,
      "url": "http://www.chaotiaorap.info:21180/iot/api/dpt/data/find/5",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        //"Host": "192.168.3.102",
        //"Connection": "keep-alive",
        "cache-control": "no-cache"
      },
      "data": "{startDT:" + startDT + ",endDT:" + endDT + ",partyId:'199559ff-c2d0-46e2-92f1-1a22468104f2',evL:['alert1','alert2','alert3','fault1','fault2','fault3'],outSet:'BT110'}"
    }
  }else{
    setting={
      "async": true,
      "crossDomain": true,
      "url": "http://www.chaotiaorap.info:21180/iot/api/dpt/data/find/5",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        //"Host": "192.168.3.102",
        //"Connection": "keep-alive",
        "cache-control": "no-cache"
      },
      "data": "{startDT:" + startDT + ",endDT:" + endDT + ",partyId:'199559ff-c2d0-46e2-92f1-1a22468104f2',evL:['alert1','alert2','alert3','fault1','fault2','fault3'],objTags:['"+objTag+"'],outSet:'BT110'}"
    }
  }
  $.ajax(setting).done(function (response) {
    // console.log(D_IOT_OBJ_TAG)
    //  console.log(response)
    if(response.resMsg=="信息获取成功"){
      if(response.obj.list.length>0){
        var list=response.obj.list;
        var valueArray = [];
        for(var i in list){
          var tags=list[i].wExt.tags;
          var data=list[i].data;
          for(var j in data){
            var evLevel;var p_zty;var s_zty;var line;var area;
            var item1 =D_IOT_EVENT_LEVEL.find(({key}) => list[i].dExt.evL === key);
            var item2=D_IOT_TELESIG_STATE.find(({key})=>list[i].dExt.zty===key);
            var item3=[];

            for(var k in D_IOT_TELESIG_STATE){
              if(list[i].dExt.zty == D_IOT_TELESIG_STATE[k].pkey){
                item3.push({
                  "key":D_IOT_TELESIG_STATE[k].key.substring(D_IOT_TELESIG_STATE[k].key.indexOf("_")+1),
                  "val":D_IOT_TELESIG_STATE[k].val,
                })
              }
            }
            if(item1){
              evLevel=item1.val;
            }else{
              evLevel="--";
            }
            if(item2){
              p_zty=item2.val
            }else{
              p_zty="--";
            }
            var item3_1=item3.find(({key})=>list[i].data[j].v===key)
            if(item3_1){
              s_zty=item3_1.val

            }else{
              s_zty="--"
            }
            for(var k in tags){
              if(tags[k].indexOf("LINE")>=0){
                var item4=D_IOT_OBJ_TAG.find(({key})=>tags[k]===key);
                if(item4){
                  line=item4.val;
                }else{
                  line="--";
                }
              }

              if(tags[k].indexOf("PVBZONE")>=0){
                var item5=D_IOT_OBJ_TAG.find(({key})=>tags[k]===key);
                if(item5){
                  area=item5.val;
                }else{
                  area="--"
                }
              }
            }
            valueArray.push(
              {
                "v":s_zty,
                "zty":p_zty,
                "evL":evLevel,
                "hwName":list[i].wExt.hwName,
                "dDescr":list[i].dExt.dDescr,
                "t":formatDate(list[i].data[j].t),
                "line":line,
                "area":area
              }
            );
          }
        }
        valueArray.sort(function (a, b) {
          return Date.parse(a.t) - Date.parse(b.t);//时间正序
        });
        showMessage("人家查到啦( •̀ ω •́ )y，一共有"+valueArray.length+"条记录",1000)
        for(var i in valueArray){
          var tr=$("<tr><td>"+(parseInt(i)+1)+"</td><td>"+valueArray[i].hwName+"</td><td>"+valueArray[i].dDescr+"</td><td>"+valueArray[i].zty+"|"+valueArray[i].v+"</td><td>"+valueArray[i].t+"</td><td>"+valueArray[i].evL+"</td><td>"+valueArray[i].line+"</td><td>"+valueArray[i].area+"</td></tr>");
          $("#mainTable-excel tbody").append(tr);
        }
        $("#flipCver").append('<span id="btn0" style="color: white"></span>' +
          '<input id="pageSize" type="text" size="1" maxlength="2" value="getDefaultValue()"/>' +
          '<span style="color: white"> 条 </span>' +
          '<button id="pageSizeSet" class="setPage">设置</button>&nbsp;' +
          '<span id="sjzl" style="color: white"></span>&nbsp;&nbsp;' +
          '<button  id="btn1" class="setPage">首页</button>' +
          '&nbsp;&nbsp;<button id="btn2"  class="setPage">上一页</button>&nbsp;&nbsp;' +
          '<button id="btn3" class="setPage">下一页</button>&nbsp;&nbsp;' +
          '<button id="btn4" class="setPage">尾页</button>&nbsp;&nbsp;' +
          '<span style="color: white">转到&nbsp;</span>' +
          '<input id="changePage" type="text" size="1" maxlength="4"/>' +
          '<span style="color: white">页&nbsp;</span>' +
          '<button id="btn5" class="setPage">跳转</>')
        pageSize();
      }else{
        showMessage("人家没有查询到相关记录啦≧ ﹏ ≦",1000)
      }
    }else{
      showMessage("人家没有查询到相关记录啦≧ ﹏ ≦",1000)
    }
  })
}



/**
 * 表格分页
 */
function pageSize() {
  var pageSize = 10;    //每页显示的记录条数
  var curPage=0;        //当前页
  var lastPage;        //最后页
  var direct=0;        //方向
  var len;            //总行数
  var page;            //总页数
  var begin;
  var end;


  $(document).ready(function display(){
    len =$("#mainTable-excel tr").length - 1;    // 求这个表的总行数，剔除第一行介绍
    page=len % pageSize==0 ? len/pageSize : Math.floor(len/pageSize)+1;//根据记录条数，计算页数
    // alert("page==="+page);
    curPage=1;    // 设置当前为第一页
    displayPage(1);//显示第一页

    document.getElementById("btn0").innerHTML="当前 " + curPage + "/" + page + " 页    每页 ";    // 显示当前多少页
    document.getElementById("sjzl").innerHTML="数据总量 " + len + "";        // 显示数据量
    document.getElementById("pageSize").value = pageSize;



    $("#btn1").click(function () {
      firstPage();
    });
    $("#btn2").click(function () {
      frontPage();
    });
    $("#btn3").click(function () {
      nextPage();
    });
    $("#btn4").click(function () {
      lastPage1();
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
      len =$("#mainTable-excel tr").length - 1;
      page=len % pageSize==0 ? len/pageSize : Math.floor(len/pageSize)+1;//根据记录条数，计算页数
      curPage=1;        //当前页
      direct=0;        //方向
      firstPage();
    });
  });


  function firstPage(){    // 首页
    curPage=1;
    direct = 0;
    displayPage();
  }
  function frontPage(){    // 上一页
    direct=-1;
    displayPage();
  }
  function nextPage(){    // 下一页
    direct=1;
    displayPage();
  }
  function lastPage1(){    // 尾页
    curPage=page;
    direct = 0;
    displayPage();
  }

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
    $("#mainTable-excel tr").hide();    // 首先，设置这行为隐藏
    $("#mainTable-excel tr").each(function(i){    // 然后，通过条件判断决定本行是否恢复显示
      if((i>=begin && i<=end) || i==0 )//显示begin<=x<=end的记录
        $(this).show();
    });
  }
}
