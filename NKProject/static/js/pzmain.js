var obj;
var echartsObj;
var objHead;
var objAlert;
var whichOneArea;//梯次分区
var whichOneArea_yzc;//预制仓分区
var base64Value;
var fileName;
var deviceIdAndDataId=[];
var batDivId_dy;
var batDivId_wd;
var D_IOT_OBJ_TAG=[];//同理储能电站
var D_IOT_EVENT_LEVEL=[];//事件等级
var D_IOT_HW_MODEL=[];//设备型号
var D_IOT_OBJ_TAG_TREE=[];//总分区
var whichOneAreaTree=[];//梯次及预制仓分区下拉树
var D_IOT_HW_MODEL_TREE=[];//设备型号下拉树
var treeData;
var HW_MODEL;//所选择的设备型号
var tckey;
var yzckey;
var head_1;var head_2;var head_3;var head_4;
$(function () {
  //业主字典接口
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
    "data": "{dicts:['D_IOT_OBJ_TAG','D_IOT_HW_MODEL'],partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a'}"
  }).done(function (response) {
    for(var i in response.obj.list){
      switch (response.obj.list[i].name) {
        case "D_IOT_OBJ_TAG":
          var tcarray=[];var yzcarray=[];
          D_IOT_OBJ_TAG=response.obj.list[i].data;
          for(var i in D_IOT_OBJ_TAG){
            if(D_IOT_OBJ_TAG[i].val=="组串式逆变器"){
              tckey=D_IOT_OBJ_TAG[i].key;
              D_IOT_OBJ_TAG_TREE.push(D_IOT_OBJ_TAG[i]);
            }
            // if(D_IOT_OBJ_TAG[i].val==" "){
            //   yzckey=D_IOT_OBJ_TAG[i].key;
            //   D_IOT_OBJ_TAG_TREE.push(D_IOT_OBJ_TAG[i]);
            // }
            if(tckey!=null&&tckey!=""){
              if(D_IOT_OBJ_TAG[i].pkey==tckey){
                tcarray.push({"name":D_IOT_OBJ_TAG[i].val,"id":D_IOT_OBJ_TAG[i].key})
                D_IOT_OBJ_TAG_TREE.push(D_IOT_OBJ_TAG[i]);
              }
            }
            if(yzckey!=null&&yzckey!=""){
              if(D_IOT_OBJ_TAG[i].pkey==yzckey){
                yzcarray.push({"name":D_IOT_OBJ_TAG[i].val,"id":D_IOT_OBJ_TAG[i].key})
                D_IOT_OBJ_TAG_TREE.push(D_IOT_OBJ_TAG[i]);
              }
            }
          }
          // whichOneArea=tcarray[0].id;
          // whichOneArea_yzc=yzcarray[0].id;
          for(var i in D_IOT_OBJ_TAG_TREE){
            if(D_IOT_OBJ_TAG_TREE[i].isLeaf==false){
              whichOneAreaTree.push({
                id:D_IOT_OBJ_TAG_TREE[i].key,
                name:D_IOT_OBJ_TAG_TREE[i].val,
                pid:D_IOT_OBJ_TAG_TREE[i].pkey,
                open: true
              })
            }else{
              whichOneAreaTree.push({
                id:D_IOT_OBJ_TAG_TREE[i].key,
                name:D_IOT_OBJ_TAG_TREE[i].val,
                pId:D_IOT_OBJ_TAG_TREE[i].pkey
              })
            }
          }
          break;
        case "D_IOT_HW_MODEL":
          D_IOT_HW_MODEL=response.obj.list[i].data;
          for(var i in D_IOT_HW_MODEL){
            if(D_IOT_HW_MODEL[i].isLeaf==false){
              D_IOT_HW_MODEL_TREE.push({
                id:D_IOT_HW_MODEL[i].key,
                name:D_IOT_HW_MODEL[i].val,
                pid:D_IOT_HW_MODEL[i].pkey,
                open: true
              })
            }else{
              D_IOT_HW_MODEL_TREE.push({
                id:D_IOT_HW_MODEL[i].key,
                name:D_IOT_HW_MODEL[i].val,
                pId:D_IOT_HW_MODEL[i].pkey
              })
            }
          }
          break;
      }
    }
  })

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
    for(var i in response.obj.list){
      switch (response.obj.list[i].name) {
        case "D_IOT_EVENT_LEVEL":
          D_IOT_EVENT_LEVEL=response.obj.list[i].data;
          var array=[];
          var PPObj={};
          var nodes=[];
          for(var i in D_IOT_EVENT_LEVEL){
            if(D_IOT_EVENT_LEVEL[i].pkey){
              nodes.push({
                "text":D_IOT_EVENT_LEVEL[i].val,
                "PPID":D_IOT_EVENT_LEVEL[i].pkey,
                "id":D_IOT_EVENT_LEVEL[i].key,
              })
            }else{
              if(i>0){
                array.push(PPObj);
                nodes=[];
              }
              PPObj={
                "text":D_IOT_EVENT_LEVEL[i].val,
                "PPID":0,
                "id":D_IOT_EVENT_LEVEL[i].key,
                "nodes":nodes
              }
            }
            if(i==D_IOT_EVENT_LEVEL.length-1){
              array.push(PPObj)
            }
          }
          treeData=array;
          break;
      }
    }
  })

  /***
   * 鼠标移出事件
   */
// $("#inputHeadDeviceId").mouseleave(function () {
//   var val=$("#inputHeadDeviceId").val();
//   if(!isNumber(val)){
//     head_1="false";
//     document.getElementById("inputHeadDeviceId").style.border="2px solid red";
//   }else{
//     head_1="true";
//     document.getElementById("inputHeadDeviceId").style.border="";
//   }
//   if(head_1=="true"&&head_2=="true"&&head_3=="true"&&head_4=="true"){
//     $("#HEAD_BT_SAVE").attr("disabled",false);
//   }else{
//     $("#HEAD_BT_SAVE").attr("disabled",true);
//   }
// })
//
//
//   $("#inputHeadDataId").mouseleave(function () {
//     var val=$("#inputHeadDeviceId").val();
//     if(!isNumber(val)){
//       head_2="false";
//       document.getElementById("inputHeadDataId").style.border="2px solid red";
//     }else{
//       head_2="true";
//       document.getElementById("inputHeadDataId").style.border="";
//     }
//     if(head_1=="true"&&head_2=="true"&&head_3=="true"&&head_4=="true"){
//       $("#HEAD_BT_SAVE").attr("disabled",false);
//     }else{
//       $("#HEAD_BT_SAVE").attr("disabled",true);
//     }
//   })
//
//   $("#inputHeadName").mouseleave(function () {
//     var val=$("#inputHeadName").val();
//     if(val==null||val==""){
//       head_3="false";
//       document.getElementById("inputHeadName").style.border="2px solid red";
//     }else{
//       head_3="true";
//       document.getElementById("inputHeadName").style.border="";
//     }
//     if(head_1=="true"&&head_2=="true"&&head_3=="true"&&head_4=="true"){
//       $("#HEAD_BT_SAVE").attr("disabled",false);
//     }else{
//       $("#HEAD_BT_SAVE").attr("disabled",true);
//     }
//   })
//
//   $("#inputHeadUnit").mouseleave(function () {
//     var val=$("#inputHeadUnit").val();
//     if(val==null||val==""){
//       head_4="false";
//       document.getElementById("inputHeadUnit").style.border="2px solid red";
//     }else{
//       head_4="true";
//       document.getElementById("inputHeadUnit").style.border="";
//     }
//     if(head_1=="true"&&head_2=="true"&&head_3=="true"&&head_4=="true"){
//       $("#HEAD_BT_SAVE").attr("disabled",false);
//     }else{
//       $("#HEAD_BT_SAVE").attr("disabled",true);
//     }
//   })
})

/***
 * 鼠标移出事件
 */
// function onMouseleave(value) {
//   var e = e||window.event;
//   var o_1=e.target||e.srcElement;
//   if(!isNumber(value)){
//     document.getElementById(o_1.id).style.border="2px solid red";
//     //$("#bt_sub").attr("disabled",true);
//   }else{
//     document.getElementById(o_1.id).style.border="";
//     //$("#bt_sub").attr("disabled",false);
//   }
// }

/***
 *  验证是否为数字
 * @param value
 * @returns {boolean}
 */
function isNumber(value) {
      var patrn = /^(-)?\d+(\.\d+)?$/;
       if (patrn.exec(value) == null || value == "") {
            return false
         } else {
            return true
         }
   }

/***
 * 获取梯次储能所点击的分区
 * @param value
 */
function getArea(value) {
  deviceIdAndDataId=[];
  whichOneArea=value;
  whichOneArea_yzc=value;
  getObjTags(value);
}

/***
 * 选择echarts图表数据类型
 */
function selectEcharts_Data_Type(value) {
  switch (value) {
    case "echarts_mr":
      $("#needInputWorD").show();
      $("#needInputEvl").hide();
      //$("#input_echarts_fd").attr("disabled",false);
      $("#showDateEcharts").empty();
      $("#showDateEcharts").append("<option value='dataOfDay'>当天</option><option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
      $("#showEchartsType").empty();
      $("#showEchartsType").append("<option value='bar' disabled>柱形图</option><option value='line'>曲线图</option>");
      break;
    case "echarts_fd":
      $("#needInputWorD").show();
      $("#needInputEvl").hide();
      //$("#input_echarts_fd").attr("disabled",false);
      $("#showDateEcharts").empty();
      $("#showDateEcharts").append("<option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
      $("#showEchartsType").empty();
      $("#showEchartsType").append("<option value='bar'>柱形图</option><option value='line'>曲线图</option>");
      break;
    case "echarts_alert":
      $("#needInputWorD").hide();
      $("#needInputEvl").show();
      //$("#input_echarts_fd").attr("disabled",true);
      $("#showDateEcharts").empty();
      $("#showDateEcharts").append("<option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
      $("#showEchartsType").empty();
      $("#showEchartsType").append("<option value='bar'>柱形图</option><option value='line'>曲线图</option>");
      break;
  }
}



/**
 * 获取预制仓储能所点击的分区
 * @param value
 */
// function getYZCArea(value) {
//   whichOneArea_yzc=value;
// }

/***
 * 选择显示哪种时间范围的echarts曲线数据
 */
// function selectWhatTimeEchartsData(value) {
//    switch (value) {
//      case "dataOfDay":
//      $("#refreshData").attr("disabled",false);
//        break;
//      case "dataOfMonth":
//        $("#refreshData").attr("disabled",true);
//        break;
//      case "dataOfYear":
//        $("#refreshData").attr("disabled",true);
//        break;
//    }
// }

/***
 * 保存曲线展示块设置的信息
 * @param area
 */
function saveEchartsDeviceIdAndDataId(area) {
  var fatherId=obj.parentElement.id;
  var echartsDivId=echartsObj.id;
  var colors=[];
  var colorFatherDivId=document.getElementById('deviceIdAndDataId');
  var colorInput=colorFatherDivId.getElementsByTagName('input');
  for(var j in deviceIdAndDataId){
    if(colorInput[j].value!=null){
      colors.push(colorInput[j].value);
    }
    deviceIdAndDataId[j].color=colorInput[j].value;
  }
  for(var i in colorInput){
    if(colorInput[i].value!=null){
      colors.push(colorInput[i].value);
    }
  }
  // var showDateEcharts=$("#showDateEcharts").find("option:selected").text();
  //var showEchartsType=$("#showEchartsType").find("option:selected").text();
  var showDateEcharts=$("#showDateEcharts").val();
  var showEchartsType=$("#showEchartsType").val();
  var whetherToDisplayDataLabels=$("#whetherToDisplayDataLabels").val();//是否显示数据标签
  var refreshData=$("#refreshData").val()//数据刷新周期
  var json;
  if(area=="nk_main"){
     json={
       "type":"echarts",
       "divId":fatherId,
       "area":area,
       "value":JSON.stringify({
         "deviceIdAndDataId":deviceIdAndDataId,
         "name":$("#inputName-echarts").val(),
         "showDateEcharts":showDateEcharts,
         "echartsDivId":echartsDivId,
         "showPercentYesOrNo":$("#showPercentYesOrNo").val(),
         "showEchartsType":showEchartsType,
         "whetherToDisplayDataLabels":whetherToDisplayDataLabels,
         "colors":colors,
         "refreshData":refreshData,
         "DataType":$("#select_echart_data_type").val(),
         "input_echarts_fd":$("#input_echarts_fd").val(),
         "xiaoshu":$("#xiaoshu_echarts").val()
       })
    }
  }else{
    json={
      "whichOneArea":whichOneArea,
      "area":area,
      "divId":fatherId,
      "type":"echarts",
      "value":JSON.stringify({
        "deviceIdAndDataId":deviceIdAndDataId,
        "name":$("#inputName-echarts").val(),
        "showDateEcharts":showDateEcharts,
        "echartsDivId":echartsDivId,
        "showPercentYesOrNo":$("#showPercentYesOrNo").val(),
        "showEchartsType":showEchartsType,
        "whetherToDisplayDataLabels":whetherToDisplayDataLabels,
        "colors":colors,
        "refreshData":refreshData,
        "DataType":$("#select_echart_data_type").val(),
        "input_echarts_fd":$("#input_echarts_fd").val(),
        "xiaoshu":$("#xiaoshu_echarts").val()
      })
    }
  }
  $.ajax({
    url:"http://119.3.171.138:9002/save",
    type:"post",
    dataType:"json",
    data:json,
    success:function (data) {
      alert(data.status);
      var myChart_1=echarts.init(document.getElementById(echartsDivId));
      myChart_1.clear();
      reloadMainEcharts(whichOneArea);
    }
  })
}

/**
 * 获取曲线图表展示块入库的信息
 * @param area
 * @param e
 */
function getEchartsName(area,e) {
   deviceIdAndDataId=[];
  $("#deviceIdAndDataId").empty();
  var e = e||window.event;
  obj=e.target||e.srcElement;
  var faId=obj.parentElement.id;
  echartsObj=obj.nextSibling.nextSibling;
  //var showDateEcharts=$("#showDateEcharts").val();
  // switch (showDateEcharts) {
  //   case "dataOfDay":
  //     $("#refreshData").attr("disabled",false);
  //     break;
  //   case "dataOfMonth":
  //     $("#refreshData").attr("disabled",true);
  //     break;
  //   case "dataOfYear":
  //     $("#refreshData").attr("disabled",true);
  //     break;
  // }


  var json;
  $("#myModalLabel-echarts").html(obj.parentElement.innerText.substring(0,obj.parentElement.innerText.indexOf("编")))
  //$("#inputName-echarts").val(obj.parentElement.innerText.substring(0,obj.parentElement.innerText.indexOf("编")))
  if(area=="nk_main"){
    json={
      "divId": faId,
      "area": area,
      "type":"echarts"
    }
  }else{
    json={
      "divId": faId,
      "area": area,
      "whichOneArea":whichOneArea,
      "type":"echarts"
    }
  }
  $.ajax({
    url: "http://119.3.171.138:9002/find",
    type: "post",
    dataType: "json",
    async: false,
    data: json,
    success: function (data) {
      if(data!=null&&data!=""){
        if(data[0].value!=null&&data[0].value!=""){

          switch (data[0].value.DataType) {
            case "echarts_fd":
              if(data[0].value.deviceIdAndDataId!=null&&data[0].value.deviceIdAndDataId!=""){
                for(var i=0;i<data[0].value.deviceIdAndDataId.length;i++){
                  $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>设备ID:<a class='deviceId'>"+data[0].value.deviceIdAndDataId[i].deviceId+"</a>&nbsp;&nbsp;数据ID:<a class='dataId'>"+data[0].value.deviceIdAndDataId[i].dataId+"</a>&nbsp;&nbsp;数据点名称:<a class='dataName'>"+data[0].value.deviceIdAndDataId[i].dataName+"</a>&nbsp;&nbsp;装机容量:<a class='capacity'>"+data[0].value.deviceIdAndDataId[i].capacity+"</a>&nbsp;&nbsp;选择颜色：<input class='selectColor'  type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;background-color: "+data[0].value.colors[i]+";color:"+data[0].value.colors[i]+";cursor: pointer' onclick='reloadColor()'id='"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"' value='"+data[0].value.colors[i]+"'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>")
                  // 颜色选择器基本实例化:
                  $('.selectColor').colorpicker();
                  deviceIdAndDataId.push({
                    "deviceId":data[0].value.deviceIdAndDataId[i].deviceId,
                    "dataId":data[0].value.deviceIdAndDataId[i].dataId,
                    "dataName":data[0].value.deviceIdAndDataId[i].dataName,
                    "color":data[0].value.deviceIdAndDataId[i].color,
                    "capacity":data[0].value.deviceIdAndDataId[i].capacity
                  })
                }
              }
              $("#input_echarts_fd").attr("disabled",false);
              $("#showDateEcharts").empty();
              $("#showDateEcharts").append("<option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
              $("#showEchartsType").empty();
              $("#showEchartsType").append("<option value='bar'>柱形图</option><option value='line'>曲线图</option>");

              $("#showPercentYesOrNo").val(Array(data[0].value.showPercentYesOrNo));
              $("#showDateEcharts").val(Array(data[0].value.showDateEcharts));
              $("#showEchartsType").val(Array(data[0].value.showEchartsType));
              $("#select_echart_data_type").val(Array(data[0].value.DataType));
              $("#whetherToDisplayDataLabels").val(Array(data[0].value.whetherToDisplayDataLabels));
              $("#inputHeadUnit").val(data[0].value.inputHeadUnit);
              $("#xiaoshu_echarts").val(data[0].value.xiaoshu)
              $("#inputName-echarts").val(data[0].value.name);
              $("#refreshData").val(data[0].value.refreshData);
              // switch (data[0].value.showDateEcharts) {
              //   case "dataOfDay":
              //     $("#refreshData").val(data[0].value.refreshData)
              //     //$("#refreshData").attr("disabled",false);
              //     break;
              //   case "dataOfMonth":
              //     //$("#refreshData").attr("disabled",true);
              //     break;
              //   case "dataOfYear":
              //     //$("#refreshData").attr("disabled",true);
              //     break;
              // }
              $("#input_echarts_fd").val(data[0].value.input_echarts_fd);

              break;
            case "echarts_mr":
              if(data[0].value.deviceIdAndDataId!=null&&data[0].value.deviceIdAndDataId!=""){
                for(var i=0;i<data[0].value.deviceIdAndDataId.length;i++){
                  $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>设备ID:<a class='deviceId'>"+data[0].value.deviceIdAndDataId[i].deviceId+"</a>&nbsp;&nbsp;数据ID:<a class='dataId'>"+data[0].value.deviceIdAndDataId[i].dataId+"</a>&nbsp;&nbsp;数据点名称:<a class='dataName'>"+data[0].value.deviceIdAndDataId[i].dataName+"</a>&nbsp;&nbsp;装机容量:<a class='capacity'>"+data[0].value.deviceIdAndDataId[i].capacity+"</a>&nbsp;&nbsp;选择颜色：<input class='selectColor'  type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;background-color: "+data[0].value.colors[i]+";color:"+data[0].value.colors[i]+";cursor: pointer' onclick='reloadColor()'id='"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"' value='"+data[0].value.colors[i]+"'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>")
                  // 颜色选择器基本实例化:
                  $('.selectColor').colorpicker();
                  deviceIdAndDataId.push({
                    "deviceId":data[0].value.deviceIdAndDataId[i].deviceId,
                    "dataId":data[0].value.deviceIdAndDataId[i].dataId,
                    "dataName":data[0].value.deviceIdAndDataId[i].dataName,
                    "color":data[0].value.deviceIdAndDataId[i].color,
                    "capacity":data[0].value.deviceIdAndDataId[i].capacity
                  })
                }
              }
              $("#input_echarts_fd").attr("disabled",false);
              $("#showDateEcharts").empty();
              $("#showDateEcharts").append("<option value='dataOfDay'>当天</option><option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
              $("#showEchartsType").empty();
              $("#showEchartsType").append("<option value='bar' disabled>柱形图</option><option value='line'>曲线图</option>");

              $("#showPercentYesOrNo").val(Array(data[0].value.showPercentYesOrNo));
              $("#showDateEcharts").val(Array(data[0].value.showDateEcharts));
              $("#showEchartsType").val(Array(data[0].value.showEchartsType));
              $("#select_echart_data_type").val(Array(data[0].value.DataType));
              $("#whetherToDisplayDataLabels").val(Array(data[0].value.whetherToDisplayDataLabels));
              $("#inputHeadUnit").val(data[0].value.inputHeadUnit);
              $("#xiaoshu_echarts").val(data[0].value.xiaoshu)
              $("#inputName-echarts").val(data[0].value.name);
              $("#refreshData").val(data[0].value.refreshData);
              // switch (data[0].value.showDateEcharts) {
              //   case "dataOfDay":
              //     $("#refreshData").val(data[0].value.refreshData)
              //     //$("#refreshData").attr("disabled",false);
              //     break;
              //   case "dataOfMonth":
              //     //$("#refreshData").attr("disabled",true);
              //     break;
              //   case "dataOfYear":
              //     //$("#refreshData").attr("disabled",true);
              //     break;
              // }
              $("#input_echarts_fd").val(data[0].value.input_echarts_fd);
              break;
            case "echarts_alert":
              if(data[0].value.deviceIdAndDataId!=null&&data[0].value.deviceIdAndDataId!=""){
                for(var i=0;i<data[0].value.deviceIdAndDataId.length;i++){
                  $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>事件等级:<a class='evL'>"+data[0].value.deviceIdAndDataId[i].evL+"</a>&nbsp;&nbsp;事件名称:<a class='dataName'>"+data[0].value.deviceIdAndDataId[i].dataName+"</a>&nbsp;&nbsp;装机容量:<a class='capacity'>"+data[0].value.deviceIdAndDataId[i].capacity+"</a>&nbsp;&nbsp;选择颜色：<input class='selectColor'  type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;background-color: "+data[0].value.colors[i]+";color:"+data[0].value.colors[i]+";cursor: pointer' onclick='reloadColor()'id='"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"' value='"+data[0].value.colors[i]+"'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>")
                  // 颜色选择器基本实例化:
                  $('.selectColor').colorpicker();
                  deviceIdAndDataId.push({
                    "evL":data[0].value.deviceIdAndDataId[i].evL,
                    "dataName":data[0].value.deviceIdAndDataId[i].dataName,
                    "color":data[0].value.deviceIdAndDataId[i].color,
                    "capacity":data[0].value.deviceIdAndDataId[i].capacity
                  })
                }
              }
              $("#showDateEcharts").empty();
              $("#showDateEcharts").append("<option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
              $("#showEchartsType").empty();
              $("#showEchartsType").append("<option value='bar'>柱形图</option><option value='line'>曲线图</option>");

              $("#showPercentYesOrNo").val(Array(data[0].value.showPercentYesOrNo));
              $("#showDateEcharts").val(Array(data[0].value.showDateEcharts));
              $("#showEchartsType").val(Array(data[0].value.showEchartsType));
              $("#select_echart_data_type").val(Array(data[0].value.DataType));
              $("#whetherToDisplayDataLabels").val(Array(data[0].value.whetherToDisplayDataLabels));
              $("#inputHeadUnit").val(data[0].value.inputHeadUnit);
              $("#xiaoshu_echarts").val(data[0].value.xiaoshu)
              $("#inputName-echarts").val(data[0].value.name);
              $("#refreshData").val(data[0].value.refreshData);
              // switch (data[0].value.showDateEcharts) {
              //   case "dataOfDay":
              //     $("#refreshData").val(data[0].value.refreshData)
              //     //$("#refreshData").attr("disabled",false);
              //     break;
              //   case "dataOfMonth":
              //     //$("#refreshData").attr("disabled",true);
              //     break;
              //   case "dataOfYear":
              //     //$("#refreshData").attr("disabled",true);
              //     break;
              // }
              $("#input_echarts_fd").attr("disabled",true);

              break;
          }
        }
      }else{
        var DataType=$("#select_echart_data_type").val();
        switch (DataType) {
          case "echarts_fd":
            $("#needInputWorD").show();
            $("#needInputEvl").hide();
            $("#input_echarts_fd").attr("disabled",false);
            $("#showDateEcharts").empty();
            $("#showDateEcharts").append("<option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
            $("#showEchartsType").empty();
            $("#showEchartsType").append("<option value='bar'>柱形图</option><option value='line'>曲线图</option>");
            break;
          case "echarts_mr":
            $("#needInputWorD").show();
            $("#needInputEvl").hide();
            $("#input_echarts_fd").attr("disabled",false);
            $("#showDateEcharts").empty();
            $("#showDateEcharts").append("<option value='dataOfDay'>当天</option><option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
            $("#showEchartsType").empty();
            $("#showEchartsType").append("<option value='bar' disabled>柱形图</option><option value='line'>曲线图</option>");
            break;
          case "echarts_alert":
            $("#needInputWorD").hide();
            $("#needInputEvl").show();
            $("#input_echarts_fd").attr("disabled",true);
            $("#showDateEcharts").empty();
            $("#showDateEcharts").append("<option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
            $("#showEchartsType").empty();
            $("#showEchartsType").append("<option value='bar'>柱形图</option><option value='line'>曲线图</option>");
            break;
        }
      }
    }
  })
}


/***
 * 获取头部展示块入库的信息
 * @param area
 * @param e
 */
function getHeadName(area,e) {
  var e = e||window.event;
  objHead=e.target||e.srcElement;
  var fatherDiv=objHead.parentElement.parentElement;
  var DataJson={};
  switch (area) {
    case "nk_main":
      DataJson={
        "area":area,
        "divId":objHead.parentElement.id,
        "type":"head"
      }
      break;
  }
  $.ajax({
    url:"http://119.3.171.138:9002/find",
    type:"post",
    dataType:"json",
    data:DataJson,
    success:function (data) {
      if(data[0]!=null&&data[0]!=""){
        $("#h_1").attr("hidden",false);
        $("#h_2").attr("hidden",false);
        $("#myModalLabel-head").html(data[0].value.inputHeadName);
        $("#inputHeadDeviceId").val(data[0].value.inputHeadDeviceId);
        $("#inputHeadDataId").val(data[0].value.inputHeadDataId);
        $("#inputHeadName").val(data[0].value.inputHeadName);
        $("#inputHeadUnit").val(data[0].value.inputHeadUnit);
        $("#xiaoShu").val(data[0].value.xiaoShu);
        $("#inputRatio").val(data[0].value.inputRatio);
        $("#refreshHeadData").val(data[0].value.refreshHeadData);
      }
    }
  })
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
var json={
  "inputHeadDeviceId":$("#inputHeadDeviceId").val(),
  "inputHeadDataId":$("#inputHeadDataId").val(),
  "inputHeadName":$("#inputHeadName").val(),
  "inputHeadUnit":$("#inputHeadUnit").val(),
  "xiaoShu":$("#xiaoShu").val(),
  "inputRatio":$("#inputRatio").val(),
  "refreshHeadData":$("#refreshHeadData").val(),
}
var DataJson={};
switch (area) {
  case "nk_main":
    DataJson={
      "type":"head",
      "area":area,
      "divId":objHead.parentElement.id,
      "value":JSON.stringify(json)
    }
    break;
}
  $.ajax({
    url:"http://119.3.171.138:9002/save",
    type:"post",
    dataType:"json",
    data:DataJson,
    success:function (data) {
      alert(data.status)
      reloadMainHead(whichOneArea)
    }
  })
}



/***
 * 获取预警框所处div信息
 * @param e
 */
function getAlertName(area,e) {
  var e = e||window.event;
  objAlert=e.target||e.srcElement;
  reloadTreeView(area);
}




/***
 * 保存预警框设置
 * @param area 所属界面
 */
function saveAlert(area,node) {
  //console.log( $('#searchTree').treeview('getChecked',node.nodeId))
  var list=$('#searchTree').treeview('getChecked',node)
  // console.log(list)
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
    data:{
      "type":"alert",
      "area":area,
      "divId":objAlert.parentNode.id,
      "value":JSON.stringify(value),
      "refreshAlert":refreshAlert
    },
    success:function (data) {
      alert(data.status);
    }
  })
}




/***
 * 加载树形组件
 */
function reloadTreeView(area){
  // var treeData = [{
  //   text: "事件",
  //   id:1,
  //   PPID:0,
  //   nodes: [{
  //     text: "1级",
  //     id:1,
  //     PPID:1
  //   }, {
  //     text: "2级",
  //     id:2,
  //     PPID:1
  //   }, {
  //     text: "3级",
  //     id:3,
  //     PPID:1
  //   }]
  // }, {
  //   text: "告警",
  //   id:2,
  //   PPID:0,
  //   nodes: [{
  //     text: "1级",
  //     id:1,
  //     PPID:2
  //   }, {
  //     text: "2级",
  //     id:2,
  //     PPID:2
  //   }, {
  //     text: "3级",
  //     id:3,
  //     PPID:2
  //   }]
  // }, {
  //   text: "其他",
  //   id:3,
  //   PPID:0,
  //   nodes: [{
  //     text: "1级",
  //     id:1,
  //     PPID:3
  //   }, {
  //     text: "2级",
  //     id:2,
  //     PPID:3
  //   }, {
  //     text: "3级",
  //     id:3,
  //     PPID:3
  //   }]
  // }, {
  //   text: "状态",
  //   id:4,
  //   PPID:0,
  // }, {
  //   text: "时间",
  //   id:5,
  //   PPID:0,
  // }];
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

  //选中全部父节点
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
  //取消全部父节点
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

  //级联选中所有子节点
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
  //级联取消所有子节点
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
      case "echarts":
        var echartsDataType=$("#select_echart_data_type").val();
        switch (echartsDataType) {
          case "echarts_mr":
            for(var i=0;i< deviceIdAndDataId.length;i++) {
              var j = deviceIdAndDataId[i];
              var test_w= fatherObj.childNodes[1].innerText;
              var test_d=fatherObj.childNodes[3].innerText;
              var test_n=fatherObj.childNodes[5].innerText;
              //j.deviceId!=test_w&&j.dataId!=test_d
              if (j.deviceId!=test_w&&j.dataName!=test_n||j.dataId!=test_d&&j.dataName!=test_n) {
                newArr.push(j);
              }
            }
            break;
          case "echarts_fd":
            for(var i=0;i< deviceIdAndDataId.length;i++) {
              var j = deviceIdAndDataId[i];
              var test_w= fatherObj.childNodes[1].innerText;
              var test_d=fatherObj.childNodes[3].innerText;
              var test_n=fatherObj.childNodes[5].innerText;
              //j.deviceId!=test_w&&j.dataId!=test_d
              if (j.deviceId!=test_w&&j.dataName!=test_n||j.dataId!=test_d&&j.dataName!=test_n) {
                newArr.push(j);
              }
            }
            break;
          case "echarts_alert":
            for(var i=0;i< deviceIdAndDataId.length;i++) {
              var j = deviceIdAndDataId[i];
              var test_w= fatherObj.childNodes[1].innerText;
              var test_n=fatherObj.childNodes[3].innerText;
              if (j.evL!=test_w&&j.dataName!=test_n) {
                newArr.push(j);
              }
            }
            break;
        }

        break;
      case "battery":
        for(var i=0;i< deviceIdAndDataId.length;i++) {
          var j = deviceIdAndDataId[i];
          if (j.dataId != fatherObj.childNodes[1].innerText&&j.name!= fatherObj.childNodes[3].innerText) {
            newArr.push(j);
          }
        }
        break;
      case "regulation":
        //console.log(fatherObj.childNodes)
        for(var i=0;i< deviceIdAndDataId.length;i++) {
          var j = deviceIdAndDataId[i];
          var test_d=fatherObj.childNodes[3].innerText;
          var test_n=fatherObj.childNodes[5].innerText;
          if (j.dataId !=test_d &&j.gzName!=test_n) {
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

/***
 * 默认加载事件
 */
$(function () {
  /**
   * 文件上传
   * @type {HTMLElement}
   */
  var test = document.getElementById("uploadFile");
  if(test!=null&&test!=""){
    if (typeof (FileReader) === 'undefined') {
      result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
      test.setAttribute('disabled', 'disabled');
    } else {
      test.addEventListener('change', readFile, false);
    }
  }

  /***
   * 增加多种设备型号的数据点规则
   */
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
      $("#gz_group").append("<p class='deviceIdAndDataId'>设备型号:<a class='type'>"+HW_MODEL+"</a>&nbsp;&nbsp;数据ID:<a class='dataId'>"+dataId+"</a>&nbsp;&nbsp;规则描述:<a class='gzName'>"+gzName+"</a>&nbsp;<a class='selectGZ'>"+selectGZ+"</a>&nbsp;<a class='gzValue'>"+gzValue+"</a>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"regulation\")'>移除</button>&nbsp;&nbsp;</p>");
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

  /***
   * 增加多组电池数据ID
   */
  $("#addRealTimeDataId").click(function () {
    var dataId=$("#realTimeDataId").val();
    var name=$("#realTimeDataName").val();
    if(dataId!=null&&dataId!=""&&name!=null&&name!=""){
      for(var i=0;i< deviceIdAndDataId.length;i++){
        var j=deviceIdAndDataId[i];
        if(j.dataId==dataId){
          alert("数据ID不可重复！！！");
          return;
        }else if(j.name==name){
          alert("名称不可完全一样！！！")
          return;
        }
      }
      $("#dataIdGroup").append("<p class='deviceDataId'>数据ID:<a class='dataId'>"+dataId+"</a>&nbsp;&nbsp;数据点名称:<a class='dataName'>"+name+"</a>&nbsp;&nbsp;选择颜色：<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer' onclick='reloadColor()'id='"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"battery\")'>移除</button></p>");
      $('.selectColor').colorpicker();
      deviceIdAndDataId.push({
        "dataId":dataId,
        "name":name,
      })
    }else {
      alert("设备ID和数据ID不可为空！！！");
    }
  })

  /***
   * 增加多组设备ID及数据ID
   */
  $("#addDeviceIdAndDataId").click(function () {
    var echartsDataType=$("#select_echart_data_type").val();
    switch (echartsDataType) {
      case "echarts_mr":
        var deviceId=$("#inputDeviceId-echarts").val();
        var dataId=$("#inputDataId-echarts").val();
        var dataName=$("#inputDataName-echarts").val();
        var capacity=$("#capacity").val();
        if(deviceId!=null&&deviceId!=""&&dataId!=null&&dataId!=""&&dataName!=null&&dataName!=""){
          for(var i=0;i< deviceIdAndDataId.length;i++){
            var j=deviceIdAndDataId[i];
            if(j.deviceId==deviceId&&j.dataId==dataId||j.dataName==dataName){
              alert("设备ID,数据点ID及数据点名称不可重复！！！");
              return;
            }
          }
          $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>设备ID:<a class='deviceId'>"+deviceId+"</a>&nbsp;&nbsp;数据ID:<a class='dataId'>"+dataId+"</a>&nbsp;&nbsp;数据点名称:<a class='dataName'>"+dataName+"</a>&nbsp;&nbsp;装机容量:<a class='capacity'>"+capacity+"</a>&nbsp;&nbsp;选择颜色：<input class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer' onclick='reloadColor()'id='"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>");
          // 颜色选择器基本实例化:
          $('.selectColor').colorpicker();
          deviceIdAndDataId.push({
            "deviceId":deviceId,
            "dataId":dataId,
            "dataName":dataName,
            "capacity":capacity
          })
        }else {
          alert("设备ID,数据点ID及数据点名称不可为空！！！");
        }
        break;
      case "echarts_fd":
        var deviceId=$("#inputDeviceId-echarts").val();
        var dataId=$("#inputDataId-echarts").val();
        var dataName=$("#inputDataName-echarts").val();
        var capacity=$("#capacity").val();
        if(deviceId!=null&&deviceId!=""&&dataId!=null&&dataId!=""&&dataName!=null&&dataName!=""){
          for(var i=0;i< deviceIdAndDataId.length;i++){
            var j=deviceIdAndDataId[i];
            if(j.deviceId==deviceId&&j.dataId==dataId||j.dataName==dataName){
              alert("设备ID,数据点ID及数据点名称不可重复！！！");
              return;
            }
          }
          $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>设备ID:<a class='deviceId'>"+deviceId+"</a>&nbsp;&nbsp;数据ID:<a class='dataId'>"+dataId+"</a>&nbsp;&nbsp;数据点名称:<a class='dataName'>"+dataName+"</a>&nbsp;&nbsp;装机容量:<a class='capacity'>"+capacity+"</a>&nbsp;&nbsp;选择颜色：<input class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer' onclick='reloadColor()'id='"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>");
          // 颜色选择器基本实例化:
          $('.selectColor').colorpicker();
          deviceIdAndDataId.push({
            "deviceId":deviceId,
            "dataId":dataId,
            "dataName":dataName,
            "capacity":capacity
          })
        }else {
          alert("设备ID,数据点ID及数据点名称不可为空！！！");
        }
        break;
      case "echarts_alert":
        var evL=$("#inputEvl-echarts").val();
        var dataName=$("#inputDataName-echarts").val();
        var capacity=$("#capacity").val();
        if(evL!=null&&evL!=""&&dataName!=null&&dataName!=""){
          for(var i=0;i< deviceIdAndDataId.length;i++){
            var j=deviceIdAndDataId[i];
            if(j.evL==evL&&j.dataName==dataName){
              alert("事件等级及事件名称不可重复！！！");
              return;
            }
          }
          $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>事件等级:<a class='evL'>"+evL+"</a>&nbsp;&nbsp;事件名称:<a class='dataName'>"+dataName+"</a>&nbsp;&nbsp;装机容量:<a class='capacity'>"+capacity+"</a>&nbsp;&nbsp;选择颜色：<input class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer' onclick='reloadColor()'id='"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>");
          // 颜色选择器基本实例化:
          $('.selectColor').colorpicker();
          deviceIdAndDataId.push({
            "evL":evL,
            "dataName":dataName,
            "capacity":capacity
          })
        }else {
          alert("事件等级及事件名称不可为空！！！");
        }
        break;
    }

  })
 })


/***
 * 增加状态域描述设置
 */
function addStatus_IdAndInfo() {
var status_id=$("#status_id").val();
var status_info=$("#status_info").val();
var choice_Status_Model=$("#choice_Status_Model").val();
if(status_id!=null&&status_info!=null){
  for(var i=0;i< deviceIdAndDataId.length;i++){
    var j=deviceIdAndDataId[i];
    if(j.status_id==status_id){
      if(j.status_info==status_info||j.choice_Status_Model==choice_Status_Model){
        alert("相同状态值下模式及状态描述不可重复！！！");
        return;
      }
    }else if(j.status_id!=status_id){
      if(j.status_info==status_info){
        alert("不同状态值下状态描述不可重复！！！");
        return;
      }
    }
  }
  $("#status_group").append("<p class='deviceIdAndDataId'>状态描述:<a>"+status_info+"</a>&nbsp;&nbsp;状态值:<a>"+status_id+"</a>&nbsp;&nbsp;模式:<a>"+choice_Status_Model+"</a>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"status_IdAndInfo\")'>移除</button></p>");
  deviceIdAndDataId.push({
    "status_id":status_id,
    "status_info":status_info,
    "choice_Status_Model":choice_Status_Model
  })
}else {
  alert("状态域描述及状态值设置不可为空！！！")
  return;
}
}

/***
 *保存状态域描述设置
 */
function saveStatus_IdAndInfo() {
  $.ajax({
    url:"http://119.3.171.138:9002/save",
    type:"post",
    dataType:"json",
    data:{
      "type":"Status_IdAndInfo",
      "value":JSON.stringify({
        "statusIdAndInfo":deviceIdAndDataId
      })
    },
    success:function (data) {
      alert(data.status);
    }
  })
}

/***
 * 获取状态域描述设置
 */
function getStatus_IdAndInfo() {
  deviceIdAndDataId=[];
  $("#status_group").empty();
  $.ajax({
    url:"http://119.3.171.138:9002/find",
    type:"post",
    dataType:"json",
    data:{
      "type":"Status_IdAndInfo",
    },
    success:function (data) {
      if(data.length>0){
        deviceIdAndDataId=data[0].value.statusIdAndInfo;
        for(var i in data[0].value.statusIdAndInfo){
          $("#status_group").append("<p class='deviceIdAndDataId'>状态描述:<a>"+data[0].value.statusIdAndInfo[i].status_info+"</a>&nbsp;&nbsp;状态值:<a>"+data[0].value.statusIdAndInfo[i].status_id+"</a>&nbsp;&nbsp;<a>"+data[0].value.statusIdAndInfo[i].choice_Status_Model+"</a>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"status_IdAndInfo\")'>移除</button></p>");
        }
      }
    }
  })

}

/***
 * 将excel文件转换为base64
 */
function readFile() {
  var file = this.files[0];
  fileName=file.name.substring(0,file.name.indexOf("."))
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
      base64Value=this.result.substring(this.result.indexOf(',')+1);
      $("#fileName").val(fileName);
  }
}


/***
 * 将解析的base64文件上传至后台
 * @param area
 */
function uploadFile(area) {
  var dataJson={};
  if(base64Value==null||base64Value==""){
    alert("请选择文件后再进行上传!!!")
  }else{
    if(area=="zcn"){
      dataJson={
        "base64Value":base64Value,
        "fileName":fileName,
        "area":area
      }
    }else if(area=="tc"){
      dataJson={
        "base64Value":base64Value,
        "fileName":fileName,
        "area":area,
        "whichOneArea":whichOneArea
      }
    }else if(area=="yzc"){
      dataJson={
        "base64Value":base64Value,
        "fileName":fileName,
        "area":area,
        "whichOneArea":whichOneArea
      }
    }
    $.ajax({
      //url:"http://www.chaotiaorap.info:21081/report/excel/importReportTemple",
      //url:"http://192.168.3.210:8081/report/excel/importReportTemple",
      url:"http://127.0.0.1:8080/report/excel/importReportTemple",
      type:"post",
      dataType:"json",
      async:false,
      data:dataJson,
      success:function (data) {
        alert(data[0].status)
        getReportTemplate(whichOneArea);
      },err:function () {
        alert("报错")
      }
    })
  }
}

/***
 * 下载界面配置文件
 */
function downloadJson() {
  $.ajax({
    url:"http://119.3.171.138:9002/findAll",
    type:"post",
    dataType:"json",
    success:function (data) {
      var blob = new Blob([JSON.stringify(data)], { type: "" });
      saveAs(blob, "界面配置.json");
    }
  })
}

// /***
//  * 上传界面配置文件
//  */
// function check() {
//   var status1;
//   var objFile = document.getElementById("uploadPZ");
//   if (objFile.value == "") {
//     alert("不能空")
//   }
//   var files = $('#uploadPZ').prop('files');//获取到文件列表
//   if (files.length == 0) {
//     alert('请选择文件');
//   } else {
//     var fileName=files[0].name;
//     if(fileName.indexOf("json")<0){
//       alert("上传的界面配置文件格式有误");
//       return;
//     }
//     var reader = new FileReader();//新建一个FileReader
//     reader.readAsText(files[0], "UTF-8");//读取文件
//     reader.onload = function (evt) { //读取完文件之后会回来这里
//       var fileString =JSON.parse(evt.target.result) ; // 读取文件内容
//       var collections=["REPORT_ALERT","REPORT_BAT","REPORT_DS","REPORT_ECHARTS","REPORT_HEAD","REPORT_ID","REPORT_TEMPLATE","REPORT_STATE_FIELD_SETTINGS","REPORT_CALCULATION_MODE"];
//       for(var i in collections){
//         if(fileString[i].name==collections[i]){
//           if(fileString[i].value.length>0){
//             $.ajax({
//               url:"http://119.3.171.138:9002/uploadAll",
//               type:"post",
//               dataType:"json",
//               async:false,
//               data:{
//                 "collectionName":collections[i],
//                 "data":JSON.stringify(fileString[i].value)
//               },
//               success:function (data) {
//                 status1=data.status;
//               }
//             })
//           }
//         }
//       }
//       alert(status1)
//     }
//   }
// }

// /***
//  * 点击浏览按钮触发文件选择
//  * @constructor
//  */
// function JsonFileOnClick() {
//   var test_1 = document.getElementById("uploadPZ");
//   if(test_1!=null&&test_1!=""){
//     if (typeof (FileReader) === 'undefined') {
//       result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
//       test_1.setAttribute('disabled', 'disabled');
//     } else {
//       $('input[id=uploadPZ]').click();
//       test_1.addEventListener('change', readJsonFile, false);
//     }
//   }
// }

// /***
//  * 读取选择的json文件
//  */
// function readJsonFile() {
//   var files = $('#uploadPZ').prop('files');//获取到文件列表
//   var fileName=files[0].name;
//   $("#photoCover").val(fileName.substring(0,fileName.indexOf(".")))
// }

/***
 * 获取对象系标签
 */
function getObjTags(area,e) {
  deviceIdAndDataId=[];
  $("#checkBoxObjTags").empty();
  $("#dataIdGroup").empty();
  var e = e||window.event;
  var obj=e.target||e.srcElement;
  batDivId_dy=obj.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0].nextSibling.childNodes[1].id
  batDivId_wd=obj.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[2].nextSibling.childNodes[1].id
    for(var i in D_IOT_OBJ_TAG){
      if(D_IOT_OBJ_TAG[i].pkey=="tongli_dev_bat"){
        $("#checkBoxObjTags").append("<input type='checkbox' value='"+D_IOT_OBJ_TAG[i].val+"' name='ObjTags' id='"+D_IOT_OBJ_TAG[i].key+"'/><label class='mark' for='"+D_IOT_OBJ_TAG[i].key+"'>"+D_IOT_OBJ_TAG[i].val+"</label>&nbsp;&nbsp;")
      }
    }
    $.ajax({
      url:"http://119.3.171.138:9002/find",
      type:"post",
      dataType:"json",
      data:{
        "type":"battery",
        "whichOneArea":whichOneArea,
        "area":area,
      },
      success:function (data) {
        if(data.length>0){

          var dataIdArray=data[0].value.dataIdArray;
          $("#realTimeDeviceTitle").val(data[0].value.title);
          $("#pageSize").val(data[0].value.pageSize);
          $("#refreshTagsModelData").val(data[0].value.refreshTagsModelData)

          if(dataIdArray!=null){
            deviceIdAndDataId=dataIdArray;
          }else{
            deviceIdAndDataId=[];
          }
          for(var i in deviceIdAndDataId){
            if(deviceIdAndDataId[i].name.indexOf('温度')>=0){
              $("#dataIdGroup").append("<p class='deviceDataId'>数据ID:<a class='dataId'>"+dataIdArray[i].dataId+"</a>&nbsp;&nbsp;数据点名称:<a class='name'>"+dataIdArray[i].name+"</a>&nbsp;&nbsp;选择颜色：<input class='selectColor'  type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;background-color: "+data[0].value.colors[i]+";color:"+data[0].value.colors[i]+";cursor: pointer' onclick='reloadColor()' id='"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"'  value='"+data[0].value.colors[i]+"'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"battery\")'>移除</button></p>");
            }else if(deviceIdAndDataId[i].name.indexOf('电压')>=0){
              $("#dataIdGroup").append("<p class='deviceDataId'>数据ID:<a class='dataId'>"+dataIdArray[i].dataId+"</a>&nbsp;&nbsp;数据点名称:<a class='name'>"+dataIdArray[i].name+"</a>&nbsp;&nbsp;选择颜色：<input class='selectColor'  type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;background-color: "+data[0].value.colors[i]+";color:"+data[0].value.colors[i]+";cursor: pointer' onclick='reloadColor()' id='"+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+"'  value='"+data[0].value.colors[i]+"'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"battery\")'>移除</button></p>");
            }
          }
          // 颜色选择器基本实例化:
          $('.selectColor').colorpicker();
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
    //console.log(imgFile)
    $("#photoName").val(fileName)
  }
  reader.readAsDataURL(img.files[0]);
}
/***
 * 配置单体设备数据集合
 */
function addModel_DS_WhichArea(){
  var DS=$("#DS").val();
  var maxRowNum=$("#maxRowNum").val();
  var DATAID_STATUS=$("#DATAID_STATUS").val();
  var refresh_DT_DATA_LP=$("#refresh_DT_DATA_LP").val();
  var status="true";
  dataIdArray=DS.split(',')
  var obj=document.getElementById("DS_GROUP_TBODY");
  var trObj=obj.getElementsByTagName("tr");
  if(trObj.length>0) {
    for (var i = 0; i < trObj.length; i++) {
      var tdObj = trObj[i].getElementsByTagName("td");
      if($("#dsId").val()==tdObj[0].innerText){
        status="false";
      }else{
        status="true";
      }
    }
  }
  switch (status) {
    case "true":
      $("#DS_GROUP_TBODY").append("<tr><td>"+$("#dsId").val()+"</td><td>["+checkedWhichArea+"]</td><td>["+checkedModel+"]</td><td>["+dataIdArray+"]</td><td>"+DATAID_STATUS+"</td><td hidden>"+imgFile+"</td><td>"+maxRowNum+"</td><td>"+refresh_DT_DATA_LP+"</td><td style='display:table-cell; vertical-align:middle'><button id='removeDeviceIdAndDataId'onclick='removeModel_DS_WhichArea()'>移除</button></td></tr>")
      break;
    case "false":
      alert("编号不可重复！！！")
      break;
  }

}

/**
 * 保存单体设备数据集合
 */
var status_save_DS;
function saveModel_DS_WhichArea(area) {
  var json;
  var list_1=[];
  var obj=document.getElementById("DS_GROUP_TBODY");
  var trObj=obj.getElementsByTagName("tr");
  if(trObj.length>0){
    for(var i=0;i<trObj.length;i++) {
      var tdObj = trObj[i].getElementsByTagName("td");
      var serNum = tdObj[0].innerText;
      var arr_a = tdObj[1].innerText;
      var arr_m = tdObj[2].innerText;
      var arr_d = tdObj[3].innerText;
      var DATAID_STATUS=tdObj[4].innerText;
      var img = tdObj[5].innerText;
      var maxRowNum=tdObj[6].innerText;
      var refresh_DT_DATA_LP=tdObj[7].innerText;
      json = {
        "type": "whichArea_Model_DS",
        "area": area,
        "serNum": serNum,
        "value": {
          "checkedWhichArea": (arr_a.substring(1, arr_a.indexOf("]"))).split(","),
          "checkedModel": (arr_m.substring(1, arr_m.indexOf("]"))).split(","),
          "dataIdArray": (arr_d.substring(1, arr_d.indexOf("]"))).split(/[,，]/),
          "img": img,
          "maxRowNum":maxRowNum,
          "DATAID_STATUS":DATAID_STATUS,
          "refresh_DT_DATA_LP":refresh_DT_DATA_LP
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
        "area":area,
        "type": "whichArea_Model_DS",
        "list":JSON.stringify(list_1)
      },
      success:function (data) {
        switch (data.status) {
          case "保存成功":
            status_save_DS=data.status
            break;
          case "保存失败":
            status_save_DS=data.status;
            return;
            break;
        }
      }
    })
  }else{
    $.ajax({
      url:"http://119.3.171.138:9002/deleteModel_DS",
      type:"post",
      async:false,
      dataType:"json",
      data:{
        "type":"whichArea_Model_DS",
        "area":area,
      },
      success:function (data) {
        switch (data.status) {
          case "保存成功":
            status_save_DS=data.status
            break;
          case "保存失败":
            status_save_DS=data.status;
            return;
            break;
        }
      }
    })
  }
  alert(status_save_DS)
  reloadDT_DEVICE(whichOneArea);
}

/***
 *保存设备型号绑定数据点集合ID的设置
 * @param area
 */
function saveModel_DS_WhichArea_1(area) {
  var obj=document.getElementById("model_ds_group");
  var trObj=obj.getElementsByTagName("tr");
  var list_1=[];
  if(trObj.length>0){
    for(var i=0;i<trObj.length;i++){
      console.log(trObj[i])
      var tdObj = trObj[i].getElementsByTagName("td");
      var DSID = tdObj[0].innerText;
      var checkedModel = tdObj[1].innerText;
      list_1.push({
        "type":"save_ds_model",
        "area":area,
        "whichOneArea":whichOneArea,
        "checkedModel":checkedModel,
        "DSID":DSID
      });
    }
    $.ajax({
      url:"http://119.3.171.138:9002/saveModel_DS",
      type:"post",
      dataType:"json",
      async:false,
      data:{
        "type":"save_ds_model",
        "area":area,
        "whichOneArea":whichOneArea,
        "list":JSON.stringify(list_1)
      },success:function (data) {
        switch (data.status) {
          case "保存成功":
            status_save_DS=data.status
            break;
          case "保存失败":
            status_save_DS=data.status;
            return;
            break;
        }
      },error:function () {
        alert("系统异常")
      }
    })
  }else{
    $.ajax({
      url:"http://119.3.171.138:9002/deleteModel_DS",
      type:"post",
      async:false,
      dataType:"json",
      data:{
        "type":"save_ds_model",
        "area":area,
        "whichOneArea":whichOneArea,
      },
      success:function (data) {
        switch (data.status) {
          case "保存成功":
            status_save_DS=data.status
            break;
          case "保存失败":
            status_save_DS=data.status;
            return;
            break;
        }
      },error:function () {
        alert("系统异常")
      }
    })
  }
  alert(status_save_DS)
  reloadDT_DEVICE(whichOneArea);
}

/***
 * 获取单体设备数据集合设置
 */
function getModel_DS_WhichArea(area) {
  getWhichOneArea();
  getModels();
  $("#DS_GROUP_TBODY").empty();
  $.ajax({
    url:"http://119.3.171.138:9002/find",
    type:"post",
    dataType:"json",
    data:{
      "area":area,
      "type":"whichArea_Model_DS"
    },
    success:function (data) {
      for(var i in data){
        var tr=$("<tr><td>"+data[i].serNum+"</td><td>["+data[i].value.checkedWhichArea+"]</td><td>["+data[i].value.checkedModel+"]</td><td>["+data[i].value.dataIdArray+"]</td><td>"+data[i].value.DATAID_STATUS+"</td><td hidden>"+data[i].value.img+"</td><td>"+data[i].value.maxRowNum+"</td><td>"+data[i].value.refresh_DT_DATA_LP+"</td><td style='display:table-cell; vertical-align:middle'><button id='removeDeviceIdAndDataId'onclick='removeModel_DS_WhichArea()'>移除</button></td></tr>")
        $("#DS_GROUP_TBODY").append(tr)
      }
    }
  })
}

/***
 * 获取单体设备数据集合设置
 */
function getModel_DS_WhichArea_1(area) {
  getModels();
  $("#model_ds_group").empty();
  $.ajax({
    url:"http://119.3.171.138:9002/find",
    type:"post",
    dataType:"json",
    data:{
      "area":area,
      "whichOneArea":whichOneArea,
      "type":"save_ds_model",
    },
    success:function (data) {
      console.log(data)
      if(data.length>0){
        for(var i in data){
          $.ajax({
            url:"http://119.3.171.138:9002/find",
            type:"post",
            dataType:"json",
            data:{
              "serNum":data[i].DSID,
              "type":"whichArea_Model_DS",
            },success:function (data) {
              if(data.length>0){
                for(var i in data){
                  $("#model_ds_group").append("<tr><td style='word-wrap:break-word;'>"+data[i].serNum+"</td><td style='word-wrap:break-word;'>"+data[i].value.checkedModel+"</td><td style='word-wrap:break-word;'>"+data[i].value.dataIdArray+"</td><td>"+data[i].value.DATAID_STATUS+"</td><td>"+data[i].value.maxRowNum+"</td><td>"+data[i].value.refresh_DT_DATA_LP+"</td><td><img style='height: 100px;width: 50px' src="+data[i].value.img+"></td><td><button id='removeDeviceIdAndDataId'onclick='removeModel_DS_WhichArea()'>移除</button></td></tr>")
                }
              }
            }
          })
        }

      }
    }
  })
}


/***
 * 获取分区
 */
function getWhichOneArea() {
  var defaults = {
    zNodes: whichOneAreaTree,
    height:233,
    //chkStyle: "radio",
    callback:{
      onCheck: oncheckCalbask_1
    }
  }
 
  $("#select_whichOneArea").drawMultipleTree(defaults);
}

/***
 * 树形下拉框选择后的回调
 * @param Nodelist
 */
var checkedWhichArea=[];//选中的分区
//var checkedModel=[];//选中的设备型号
var checkedModel;//选中的设备型号
function oncheckCalbask_1(Nodelist) {
  checkedWhichArea=[];
  if(Nodelist.length>0){
    for(var i in Nodelist){
      checkedWhichArea.push(Nodelist[i].id)
    }
  }
}

/***
 * 获取选择的设备型号
 * @param Nodelist
 */
function oncheckCalbask_2(Nodelist) {
  $("#select_DS_ID").empty();
  checkedModel;
  if(Nodelist.length>0){
    for(var i in Nodelist){
      //checkedModel.push(Nodelist[i].id)
      checkedModel=Nodelist[i].id;
    }
  }
  if(checkedModel!=null&&checkedModel!=""){
    $.ajax({
      url:"http://119.3.171.138:9002/find",
      type:"post",
      dataType:"json",
      data:{
        checkedModel:checkedModel,
        type:"whichArea_Model_DS"
      },success:function (data) {
        if(data.length>0){
          for(var i in data){
            $("#select_DS_ID").append("<option value='"+data[i].serNum+"'>"+data[i].serNum+"</option>")
          }
        }
        if($("#select_DS_ID").val()!=null){
          if(data.length>0){
            $.ajax({
              url:"http://119.3.171.138:9002/find",
              type:"post",
              dataType:"json",
              data:{
                "serNum":$("#select_DS_ID").val(),
                "type":"whichArea_Model_DS",
              },success:function (data) {
                console.log(data)
                if(data.length>0){
                  for(var i in data){
                    new_DS_OBJ=("<tr><td style='word-wrap:break-word;'>"+data[i].serNum+"</td><td style='word-wrap:break-word;'>"+data[i].value.checkedModel+"</td><td style='word-wrap:break-word;'>"+data[i].value.dataIdArray+"</td><td>"+data[i].value.DATAID_STATUS+"</td><td>"+data[i].value.maxRowNum+"</td><td>"+data[i].value.refresh_DT_DATA_LP+"</td><td><img style='height: 100px;width: 50px' src="+data[i].value.img+"></td><td><button id='removeDeviceIdAndDataId'onclick='removeModel_DS_WhichArea()'>移除</button></td></tr>")
                  }
                }
              }
            })
          }
        }
      }

    })
  }
}

/***
 * 获取选择的型号的数据点
 */
var new_DS_OBJ;
function getDataIdByDSId(value) {
  $.ajax({
    url:"http://119.3.171.138:9002/find",
    type:"post",
    dataType:"json",
    data:{
      "serNum":value,
      "type":"whichArea_Model_DS",
    },success:function (data) {
      if(data.length>0){
        for(var i in data){
          new_DS_OBJ=("<tr><td style='word-wrap:break-word;'>"+data[i].serNum+"</td><td style='word-wrap:break-word;'>"+data[i].value.checkedModel+"</td><td style='word-wrap:break-word;'>"+data[i].value.dataIdArray+"</td><td>"+data[i].value.DATAID_STATUS+"</td><td>"+data[i].value.maxRowNum+"</td><td>"+data[i].value.refresh_DT_DATA_LP+"</td><td><img style='height: 100px;width: 50px' src="+data[i].value.img+"></td><td><button id='removeDeviceIdAndDataId'onclick='removeModel_DS_WhichArea()'>移除</button></td></tr>")
        }
      }
    }
  })
}

/***
 * 增加新的配置
 */
function add_new_DS() {
  var td_1=$(new_DS_OBJ)
  // console.log(td_1[0].cells[1].innerHTML)
  var obj=document.getElementById("model_ds_group");
  var trObj=obj.getElementsByTagName("tr");
  var boolean="false";
  if(trObj.length>0){
    for(var i=0;i<trObj.length;i++){
      var tdObj = trObj[i].getElementsByTagName("td");
      var model = tdObj[1].innerText;
      if(model.toString()==td_1[0].cells[1].innerHTML.toString()){
        boolean="false";
      }else{
        boolean="true";
      }
    }
  }else{
    boolean="true";
  }
  if(boolean=="true"){
    $("#model_ds_group").append(new_DS_OBJ);
  }else{
    alert("同分区同一型号不可重复绑定！！");
  }
}

/***
 * 选择设备电池状态的显示方式：表格或图表
 */
function selectObjTages(value) {
  if(value=="table"){
    $("#sb_MaxVlue").attr("disabled",true);
    $("#pageSize").attr("disabled",false);
  }else if(value=="matplot"){
    $("#sb_MaxVlue").attr("disabled",false);
    $("#pageSize").attr("disabled",true);
  }
}

/***
 * 保存电池数据点设置
 * @param value
 */
function saveObjTags(area) {
 var realTimeDeviceTitle=$("#realTimeDeviceTitle").val();
 var pageSize=$("#pageSize").val();
 var refreshTagsModelData=$("#refreshTagsModelData").val();
 var chk_value =[];
 var colors=[];
 var colorFatherDivId=document.getElementById('dataIdGroup');
 var colorInput=colorFatherDivId.getElementsByTagName('input');
 for(var i in colorInput){
   if(colorInput[i].value!=null){
     colors.push(colorInput[i].value);
   }
 }
  var select_sb_showType=$("#select_sb_showType").val();
  $('input[name="ObjTags"]:checked').each(function(){
    chk_value.push({
      "name":$(this).val(),
      "id":this.id
    });
  });
  var json={
    "area":area,
    "whichOneArea":whichOneArea,
    "type":"battery",
    "value":JSON.stringify({
      "dataIdArray":deviceIdAndDataId,
      "title":realTimeDeviceTitle,
      "chk_value":chk_value,
      "pageSize":pageSize,
      "bat_echarts_dy":batDivId_dy,
      "bat_echarts_wd":batDivId_wd,
      "select_sb_showType":select_sb_showType,
      "refreshTagsModelData":refreshTagsModelData,
      "colors":colors
    })
  }
  $.ajax({
    url:"http://119.3.171.138:9002/save",
    type:"post",
    dataType:"json",
    data:json,
    success:function (data) {
      alert(data.status);
      switch (area) {
        case "tc":
          $("#tc_bat").load(location.href + " #tc_bat")
          reloadTC_BAT(whichOneArea);
          break;
        case "yzc":
          $("#yzc_bat").load(location.href + " #tc_bat")
          reloadYZC_BAT(whichOneArea);
          break;
      }
    }
  })

}

/***
 * 保存规则
 */
function saveGz(area) {
var sj_gz_title=$("#sj_gz_title").val();
  var json={
    "area":area,
    "whichOneArea":whichOneArea,
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
    data:json,
    success:function (data) {
      alert(data.status);
      reloadGZ(whichOneArea)
    }
  })
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
 
  $("#select_Model").drawMultipleTree(defaults);
}


/***
 * 获取设置的设备规则
 * @param area
 */
function getGZ(area) {
  deviceIdAndDataId=[];
  $("#gz_group").empty();
  $("#select_gz_type").empty();
  var defaults = {
    zNodes: D_IOT_HW_MODEL_TREE,
    height:233,
    chkStyle: "radio",
    callback:{
      onCheck: oncheckCalbask
    }
  }
  
  $("#select_gz_type").drawMultipleTree(defaults);
    $.ajax({
      url:"http://119.3.171.138:9002/find",
      type:"post",
      dataType:"json",
      data:{
        "type":"regulation",
        "whichOneArea":whichOneArea,
        "area":area,
      },
      success:function (data) {
        if(data[0]!=null&&data[0]!=""){
          for (var i in data[0].value.dataIdArray){
            $("#gz_group").append("<p class='deviceIdAndDataId'>设备型号:<a class='type'>"+data[0].value.dataIdArray[i].type+"</a>&nbsp;&nbsp;数据ID:<a class='dataId'>"+data[0].value.dataIdArray[i].dataId+"</a>&nbsp;&nbsp;规则描述:<a class='gzName'>"+data[0].value.dataIdArray[i].gzName+"</a>&nbsp;<a class='selectGZ'>"+data[0].value.dataIdArray[i].selectGZ+"</a>&nbsp;<a class='gzValue'>"+data[0].value.dataIdArray[i].gzValue+"</a>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"regulation\")'>移除</button>&nbsp;&nbsp;</p>");
            deviceIdAndDataId.push({
              "type":data[0].value.dataIdArray[i].type,
              "dataId":data[0].value.dataIdArray[i].dataId,
              "gzValue":data[0].value.dataIdArray[i].gzValue,
              "selectGZ":data[0].value.dataIdArray[i].selectGZ,
              "typeName":data[0].value.dataIdArray[i].typeName,
              "gzName":data[0].value.dataIdArray[i].gzName
            })
          }
          $("#sj_gz_title").val(data[0].value.title);
          $("#refreshGZ").val(data[0].value.refreshGZ)
        }
      }
    })
}


/***
 * 树形下拉框选择后的回调
 * @param Nodelist
 */
function oncheckCalbask(Nodelist) {
  if(Nodelist.length>0){
    HW_MODEL=Nodelist[0].id
  }
}

