
//=================================================针对特定功能定制的方法===============================================

/**
 * 初始化Echarts散点图
 * @param describe
 * @param json
 */
function initEcharts(describe,bat_echarts_dy,list,echartsDType,hwList) {
        divIdListHide.push(bat_echarts_dy)
        $("#"+bat_echarts_dy).css('height','500px');
        $("#"+bat_echarts_dy).css('width','100%');
        let hours = [];
        let data = [];
        let temp = "";
        let color = "";
        let sortArr = [];
        if(list.length > 0){
            for(let rt in list){
                let float = 0.0;
                let w = list[rt].w;
                if(echartsColorMap.get(describe)){
                    color = echartsColorMap.get(describe);
                }
                for(let hw in hwList){
                    let hwW =hwList[hw].kSNO;
                    if(hwW == w){
                        if(parseFloat(list[rt].v)){
                            float = parseFloat(list[rt].v);
                            if(float!=null){
                                sortArr.push(float);
                            }
                        }
                        let newData = [float,parseInt(hw),5,list[rt].wExt.hwName,list[rt].w]
                        data.push(newData);
                        break;
                    }
                }
            }
        }
        for(let i=0;i<hwList.length;i++){
            hours[i]=i;
        }
        let myChart=echarts.init(document.getElementById(bat_echarts_dy));
        var kedu=[];
        var maxValue=eval("Math.max(" + sortArr + ")");
        //取最大的值
        for(var i=0;i<(maxValue+1);i++){
            kedu.push({"value":i,textStyle:{color:'#FFF'}})
        }
    var option = {
        color:[color],//点的颜色
        title: {
            text: describe,
            subtext: formatDate(new Date().getTime()),
            textStyle:{color:'#eeeaf5'}
        },
        legend: {
            data: [describe],
            left: 'right',
            textStyle:{
                color:"#FFF"
            }
        },
        polar: {},
        tooltip: {
            formatter: function (params) {
                if(params.data[0] != null){
                    return "当前数据值为："+params.data[0]+"，设备名称："+params.data[3];
                }
            }
        },
        angleAxis: {
            type: 'category',
            data: hours,
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eeeaf5',
                    type: 'dashed',
                }
            },
            axisLabel: {
                interval:0,  //类目全显
            },
            axisLine: {
                show: false,
                lineStyle:{
                    color:'#eeeaf5'
                }
            }
        },
        radiusAxis: {
            type: 'category',
            data: kedu,
            show: false,
            axisLine: {
                show: false,
                lineStyle:{
                    color:'#eeeaf5'
                }
            },
            axisLabel: {
                rotate: 45,
                interval:20,
                textStyle:{color:'#FFF'},
            }
        },
        series: [{
            name: describe,//右上角红点
            type: 'scatter',
            coordinateSystem: 'polar',
            symbolSize: function (val) {
                return val[2] * 2;
            },
            data: data,
            animationDelay: function (idx) {
                return idx * 5;
            }
        }]
    };
        myChart.setOption(option);
        //echarts数据点的点击事件，用于点击显示其单体信息
        myChart.on('click', function (params) {
            let thisTag = $(this)[0]._dom.id;//获取点击数据点所在的标签
            if(thisTag){
                let w = params.data[4];//data[3]下标内容为w
                getDT_DEVICE_DATA(w,echartsDType);//加载所选择的单体设备光字牌数据
            }
         });
}

/***
 * 加载所选择的单体设备光字牌数据
 */
function getDT_DEVICE_DATA(w,echartsDType) {
    $.ajax({
        url:"http://119.3.171.138:9002/find",
        type:"post",
        dataType:"json",
        async:false,
        data:{
            "type":"whichArea_Model_DS",
            "area":$("#areaId").val(),
            "checkedWhichArea":titleId,
        },
        success:function (data) {
            if(data.length>0) {
                $("#DT_Device").empty();
                for(let i in data){
                    if(w){
                        let wHwName = hwTypeMap.get(w);
                        if(wHwName){
                            if(data[i].value.hw.id == wHwName){
                                $("#single-div").show();//显示隐藏的设备单体信息的div
                                if(divIdListHide.indexOf("single-div") == -1){
                                    divIdListHide.push("single-div");
                                }
                                var DATAID_STATUS=data[i].value.DATAID_STATUS;
                                var refresh_DT_DATA_LP = data[i].value.refresh_DT_DATA_LP;
                                var xiaoshu = data[i].value.xiaoshu;
                                reloadDT_DEVICE_DATA(data[i], w,DATAID_STATUS,xiaoshu)
                                if (parseFloat(refresh_DT_DATA_LP) > 0) {
                                    var refreshDT_DEVICE_DATA;
                                    refreshDT_DEVICE_DATA=window.setInterval(function () {
                                        reloadDT_DEVICE_DATA(data[i], w,DATAID_STATUS,xiaoshu)

                                    },parseFloat(refresh_DT_DATA_LP)*1000)
                                    refreshDT_DEVICE_DATAList.push(refreshDT_DEVICE_DATA);
                                }
                            }
                        }
                    }else{
                        if(data[i].serNum){
                            var ref = "refreshDT_DEVICE_DATA-"+data[i].serNum;
                            $("#single-div").show();//显示隐藏的设备单体信息的div
                            var DATAID_STATUS=data[i].value.DATAID_STATUS;
                            var refresh_DT_DATA_LP = data[i].value.refresh_DT_DATA_LP;
                            var xiaoshu = data[i].value.xiaoshu;
                            reloadDT_DEVICE_DATA(data[i], data[i].serNum,DATAID_STATUS,xiaoshu)
                            if (parseFloat(refresh_DT_DATA_LP) > 0) {
                                refreshDT_DEVICE_DATAList.push(ref)
                                ref=window.setInterval(function () {
                                    reloadDT_DEVICE_DATA(data[i], data[i].serNum,DATAID_STATUS,xiaoshu)
                                },parseFloat(refresh_DT_DATA_LP)*1000)
                            }
                        }
                    }
                }
            }
        }
    })
}

/***
 * 生成单体设备光字牌
 * @param data
 * @param value
 */
function reloadDT_DEVICE_DATA(data,w,DATAID_STATUS,xiaoshu) {
    // $("#DT_IMG").empty();
    // $("#DT_DS_DATA_YX").empty();
    // $("#DT_DS_DATA_YC").empty();
    let random = Math.round(Math.random()*16);
    var dt_img = "DT_IMG"+random;
    var yx = "DT_DS_DATA_YX"+random;
    var yc = "DT_DS_DATA_YC"+random;
    var ds_data = "DT_DS_DATA1"+random;
    var div_img = "div_img"+random;
    var single_list_div = "single_list_div"+random;
    $("#DT_Device").append("<div class='row' id='"+single_list_div+"'><div class='col-md-2' id='"+div_img+"'><div id='"+dt_img+"'></div></div><div class='col-md-10' id='"+ds_data+"'><div style='float: left' id='"+yc+"' ></div><div id='"+yx+"'></div></div>");
    var maxRowNum=data.value.maxRowNum;
    let DId = w+"";
    var json_yx={
        "w":DId,
        "d":data.value.YX_DATA_ID_ARR,
        "partyId":"208060df-d0fa-44bb-8fa3-d468b97d164a",
        "isRT":true,
        "outSet":"NK001"
    }
    var json_yc={
        "w":DId,
        "d":data.value.YC_DATA_ID_ARR,
        "partyId":"208060df-d0fa-44bb-8fa3-d468b97d164a",
        "isRT":true,
        "outSet":"NK001"
    }
    var settings_yc = {
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
        "data":JSON.stringify(json_yc)
    }
    var settings_yx = {
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
        "data":JSON.stringify(json_yx)
    }
    if( data.value.img != "undefined" && data.value.img!=""){
        var DT_IMG=document.getElementById(dt_img);
        var img = new Image();
        img.src=data.value.img;
        img.style.height="300px";
        img.style.width="100%";
        if(DT_IMG){
            $("#DT_IMG").show();
            DT_IMG.style.border="5px solid slategrey";
            DT_IMG.style.width="80%"
            DT_IMG.style.marginTop="10px";
            DT_IMG.appendChild(img);
        }
        var spanObjID= document.createAttribute("id");
        spanObjID.value = "run_status";
        var spanObj = document.createElement('span');
        spanObj.style.borderRadius="10px";
        spanObj.style.display="block";
        spanObj.style.position="absolute";
        spanObj.style.left="50px";
        spanObj.style.top="50px";
        spanObj.style.fontSize="13px";
        spanObj.style.color="white";
        spanObj.setAttributeNode(spanObjID);
        $("#DT_Device").children("#"+single_list_div).children(" #"+div_img+" #"+dt_img).append(spanObj);
        //document.getElementById(img).appendChild(spanObj);
        if(DATAID_STATUS!=null&&DATAID_STATUS!=""){
            $.ajax({
                "async": false,
                "crossDomain": true,
                "url": "http://119.3.171.138:8082/iot/api/dpt/data/find/1",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Cache-Control": "no-cache",
                    //"Host": "295587.ichengyun.net",
                    //"Connection": "keep-alive",
                    "cache-control": "no-cache"
                },
                "data":"{w:'"+DId+"',d:'"+DATAID_STATUS+"',isRT:true,partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a'}"
            }).done(function (response) {
                if(response.obj.list.length>0){
                    if(response.obj.list[0].v<=0){
                        //spanObj.style.background="red";
                        $("#run_status").append($("<a style='color: red;font-size: 20px'>●</a>"))
                    }else if(response.obj.list[0].v>=1){
                        //spanObj.style.background="green";
                        $("#run_status").append($("<a style='color: green;font-size: 20px'>●</a>"))
                    }
                }
            })
        }
    }else{
        $("#DT_Device").children("#"+single_list_div).children("#"+div_img).remove();
        $("#DT_Device").children("#"+single_list_div).children("#"+ds_data).attr("class","col-md-12")
        // $("#"+ds_data).attr("class","col-md-12")
    }
    /***
     * 遥测（模拟量）
     */
    $.ajax(settings_yc).done(function (response) {
        var qy=false;
        var divNum=parseInt(response.obj.list.length/parseInt(maxRowNum));
        if(response.obj.list.length%parseInt(maxRowNum)==0){
            qy=false;
        }else{
            qy=true;
        }
        // var doc=document.getElementById("DT_DS_DATA_YC").ch;
        var doc = $("#DT_Device").children("#"+single_list_div).children("#"+ds_data).children("#"+yc);
        if(divNum<=0){
            var div=document.createElement('div');
            var divattr = document.createAttribute("class");
            var divId=document.createAttribute('id');
            divattr.value =yc+"sub";
            divId.value=yc+"sub";
            //把属性class = "test"添加到div  
            div.setAttributeNode(divattr);
            div.setAttributeNode(divId);
            //div.style.border="5px solid black";
            div.style.cssFloat="left";
            div.style.marginLeft="10px";
            div.style.marginTop="10px";
            doc.append(div);
            //doc.insertBefore(div,doc.lastChild)
        }else if(divNum>0){
            if(qy){
                for(var i=0;i<(divNum+1);i++){
                    var div=document.createElement('div');
                    var divattr = document.createAttribute("class");
                    var divId=document.createAttribute('id');
                    var style = document.createAttribute("style");
                    div.setAttributeNode(style);
                    div.style.cssFloat="left";
                    div.style.marginLeft="10px";
                    div.style.marginTop="10px";
                    //div.style.border="5px solid black";
                    divattr.value = yc+"sub";
                    divId.value=yc+"sub";
                    //把属性class = "test"添加到div  
                    div.setAttributeNode(divattr);
                    div.setAttributeNode(divId);
                    doc.append(div);
                    // doc.insertBefore(div,doc.lastChild)
                }
            }else{
                for(var i=0;i<divNum;i++){
                    var div=document.createElement('div');
                    var divattr = document.createAttribute("class");
                    var divId=document.createAttribute('id');
                    var style = document.createAttribute("style");
                    div.setAttributeNode(style);
                    div.style.cssFloat="left";
                    div.style.marginLeft="10px";
                    div.style.marginTop="10px";
                    //div.style.border="5px solid black";
                    divattr.value = yc+"sub";
                    divId.value= yc+"sub";
                    //把属性class = "test"添加到div  
                    div.setAttributeNode(divattr);
                    div.setAttributeNode(divId);
                    doc.append(div);
                    //doc.insertBefore(div,doc.lastChild)
                }
            }
        }
        if(response.obj.list.length>0){
            var list=response.obj.list;
            var divObj = $("#DT_Device").children("#"+single_list_div).children("#"+ds_data).children("#"+yc).children("."+yc);
            // var divObj=doc.getElementsByClassName("DT_DATA_DIV_YC");
            if(qy){
                for(var i =0;i<(divNum+1);i++){
                    //   var div_id=divObj[i].id;
                    var table=$("<table class=' table-bordered' style='border: 5px solid slategrey; width: 200px;'></table>")
                    for(var j=parseInt(maxRowNum)*i;j<parseInt(maxRowNum)*(i+1);j++){
                        if(j<list.length){
                            var dDescr;var dUnit;
                            if(list[j].dExt){
                                dDescr=list[j].dExt.dDescr
                                dUnit=list[j].dExt.dUnit;
                            }else{
                                dDescr="--"
                                dUnit="--"
                            }
                            table.append("<tr style='color: white;font-weight: lighter;font-size: 12px'><td>"+dDescr+"</td><td>"+parseFloat(list[j].v).toFixed(parseInt(xiaoshu))+"</td><td>["+dUnit+"]</td></tr>")
                        }
                    }
                    divObj.append(table)
                }
            }else{
                for(var i =0;i<divNum;i++){
                    //  var div_id=divObj[i].id;
                    var table=$("<table class=' table-bordered' style='border: 5px solid slategrey; width: 200px;'></table>")
                    for(var j=parseInt(maxRowNum)*i;j<parseInt(maxRowNum)*(i+1);j++){
                        var dDescr;
                        if(list[j].dExt){
                            dDescr=list[j].dExt.dDescr
                        }else{
                            dDescr="--"
                        }
                        table.append("<tr style='color: white;'><td>"+dDescr+"</td><td>"+list[j].v+"</td></tr>")
                    }
                    divObj.append(table)
                    // $("#"+div_id).append(table)
                }
            }
        }
    })


    /***
     * 遥信（开关量）
     */
    $.ajax(settings_yx).done(function (response) {
        //$("#"+yx).empty();
        var qy=false;
        var divNum=parseInt(response.obj.list.length/parseInt(maxRowNum));
        if(response.obj.list.length%parseInt(maxRowNum)==0){
            qy=false;
        }else{
            qy=true;
        }
        var doc = $("#DT_Device").children("#"+single_list_div).children("#"+ds_data).children("#"+yx);
        if(divNum<=0){
            var div=document.createElement('div');
            var divattr = document.createAttribute("class");
            var divId=document.createAttribute('id');
            divattr.value = yx+"sub";
            divId.value=yx+"sub";
            //把属性class = "test"添加到div  
            div.setAttributeNode(divattr);
            div.setAttributeNode(divId);
            //div.style.border="5px solid black";
            div.style.cssFloat="left";
            div.style.marginLeft="10px";
            div.style.marginTop="10px";
            doc.append(div);
        }else if(divNum>0){
            if(qy){
                for(var i=0;i<(divNum+1);i++){
                    var div=document.createElement('div');
                    var divattr = document.createAttribute("class");
                    var divId=document.createAttribute('id');
                    var style = document.createAttribute("style");
                    div.setAttributeNode(style);
                    div.style.cssFloat="left";
                    div.style.marginLeft="10px";
                    div.style.marginTop="10px";
                    //div.style.border="5px solid black";
                    divattr.value = yx+"sub";
                    divId.value=yx+"sub";
                    //把属性class = "test"添加到div  
                    div.setAttributeNode(divattr);
                    div.setAttributeNode(divId);
                    doc.append(div);
                }
            }else{
                for(var i=0;i<divNum;i++){
                    var div=document.createElement('div');
                    var divattr = document.createAttribute("class");
                    var divId=document.createAttribute('id');
                    var style = document.createAttribute("style");
                    div.setAttributeNode(style);
                    div.style.cssFloat="left";
                    div.style.marginLeft="10px";
                    div.style.marginTop="10px";
                    //div.style.border="5px solid black";
                    divattr.value = yx+"sub";
                    divId.value=yx+"sub";
                    //把属性class = "test"添加到div  
                    div.setAttributeNode(divattr);
                    div.setAttributeNode(divId);
                    doc.append(div);
                }
            }
        }
        if(response.obj.list.length>0){
            var list=response.obj.list;
            // var divObj=doc.getElementsByClassName("DT_DATA_DIV");

            var divObj = $("#DT_Device").children("#"+single_list_div).children("#"+ds_data).children("#"+yx).children("#"+yx+"sub");
            if(qy){
                for(var i =0;i<(divNum+1);i++){
                    // var div_id=divObj[i].id;
                    var table=$("<table class='table-bordered' style='border: 5px solid slategrey;width: 145px;text-align: center;'></table>")
                    for(var j=parseInt(maxRowNum)*i;j<parseInt(maxRowNum)*(i+1);j++){
                        if(j<list.length){
                            if(parseInt(list[j].v)<=0){
                                var dDescr;
                                if(list[j].dExt){
                                    dDescr=list[j].dExt.dDescr
                                }else{
                                    dDescr="--"
                                }
                                table.append("<tr style='color: white;font-weight: lighter;font-size: 12px'><td>"+dDescr+"</td></tr>")
                            }else if(list[j].v==null){
                                var dDescr;
                                if(list[j].dExt){
                                    dDescr=list[j].dExt.dDescr
                                }else{
                                    dDescr="--"
                                }
                                table.append("<tr style='color: white;font-weight: lighter;font-size: 12px;background-color: #c2c2c2'><td>"+dDescr+"</td></tr>")
                            }else{
                                for(var e in D_IOT_EVENT_LEVEL){
                                    if(list[i].dExt){
                                        if(list[i].dExt.evL==D_IOT_EVENT_LEVEL[e].key){
                                            var dDescr;
                                            switch (D_IOT_EVENT_LEVEL[e].pkey) {
                                                case "info":
                                                    if(list[j].dExt){
                                                        dDescr=list[j].dExt.dDescr
                                                    }else{
                                                        dDescr="--"
                                                    }
                                                    table.append("<tr style='background-color: green;color: white;font-weight: lighter;font-size: 12px'><td>"+dDescr+"</td></tr>")
                                                    break;
                                                case "alert":
                                                    if(list[j].dExt){
                                                        dDescr=list[j].dExt.dDescr
                                                    }else{
                                                        dDescr="--"
                                                    }
                                                    table.append("<tr style='background-color: green;color: white;font-weight: lighter;font-size: 12px'><td>"+dDescr+"</td></tr>")
                                                    break;
                                                case "fault":
                                                    if(list[j].dExt){
                                                        dDescr=list[j].dExt.dDescr
                                                    }else{
                                                        dDescr="--"
                                                    }
                                                    table.append("<tr style='background-color: green;color: white;font-weight: lighter;font-size: 12px'><td>"+dDescr+"</td></tr>")
                                                    break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    divObj.append(table);
                }
            }else{
                for(var i =0;i<divNum;i++){
                    //var div_id=divObj[i].id;
                    var table=$("<table class='table-bordered' style='border: 5px solid slategrey;width: 145px;text-align: center;'></table>")
                    for(var j=parseInt(maxRowNum)*i;j<parseInt(maxRowNum)*(i+1);j++){
                        if(parseInt(list[j].v)<=0){
                            var dDescr;
                            if(list[j].dExt){
                                dDescr=list[j].dExt.dDescr
                            }else{
                                dDescr="--"
                            }
                            table.append("<tr style='color: white;font-weight: lighter;font-size: 12px'><td>"+dDescr+"</td></tr>")
                        }else if(list[j].v==null){
                            var dDescr;
                            if(list[j].dExt){
                                dDescr=list[j].dExt.dDescr
                            }else{
                                dDescr="--"
                            }
                            table.append("<tr style='color: white;font-weight: lighter;font-size: 12px;background-color: #c2c2c2'><td>"+dDescr+"</td></tr>")
                        } else{
                            for(var e in D_IOT_EVENT_LEVEL){
                                if(list[i].dExt){
                                    if(list[i].dExt.evL==D_IOT_EVENT_LEVEL[e].key){
                                        var dDescr;
                                        switch (D_IOT_EVENT_LEVEL[e].pkey) {
                                            case "info":
                                                if(list[j].dExt){
                                                    dDescr=list[j].dExt.dDescr
                                                }else{
                                                    dDescr="--"
                                                }
                                                table.append("<tr style='background-color: green;color: white;font-weight: lighter;font-size: 12px'><td>"+dDescr+"</td></tr>")
                                                break;
                                            case "alert":
                                                if(list[j].dExt){
                                                    dDescr=list[j].dExt.dDescr
                                                }else{
                                                    dDescr="--"
                                                }
                                                table.append("<tr style='background-color: yellow;color: white;font-size: 12px'><td>"+dDescr+"</td></tr>")
                                                break;
                                            case "fault":
                                                if(list[j].dExt){
                                                    dDescr=list[j].dExt.dDescr
                                                }else{
                                                    dDescr="--"
                                                }
                                                table.append("<tr style='background-color: red;color: white;font-weight: lighter;font-size: 12px'><td>"+dDescr+"</td></tr>")
                                                break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    divObj.append(table)
                }
            }
        }
    })
}