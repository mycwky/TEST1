
$(function(){
    reloadMainEcharts();
})




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
 * json数组排序
 * @param propertyName
 * @returns {Function}
 */
function compare_1(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value2 < value1) {
            return -1;
        } else if (value2 > value1) {
            return 1;
        } else {
            return 0;
        }
    }
}


/**
 * 日期处理
 * @param {*} param
 * @param {*} TOrF
 * @param {*} TOrF
 * @param {*} date
 * @param {*} i 当前循环i
 */
function cuiveSwitchDate(realTimeData, dataDateType, objArray, TOrF, date, i, param) {
    var array = [];
    var index = i;


    switch (dataDateType) {
        case "dataOfMonth":
            array = curveReturnDataOfMonth(objArray, index, date);
            break;

            objArray.sort(function (a, b) {
                return a.g - b.g;//时间正序
            })
            var val = [];
            val.push(date.getDate() + "日");
            val.push(parseFloat(objArray[i].v));
            return val;

        case "dataOfYear":
            array = curveReturnDataOfYear(objArray, index, date);
            break;

        case "dataOfDay":
            var list_1 = [];
            objArray.sort(function (a, b) {
                return a.t - b.t;//时间正序
            })
            if (TOrF) {
                for (var k in objArray[index].data) {
                    let data = [];
                    data.push(objArray[index].data[k].t);
                    data.push(parseFloat(objArray[index].v));
                    list_1.push(data);
                }
                var ifEqualStartDT = objArray[index].data.find(({t}) => param.startDT === t);

                if (!ifEqualStartDT) {  //如果第一个数据点不是0点，不是0点的数据处理过程
                    if (objArray[index].data[0].k) {
                        var first_v = objArray[index].data[0].v - (objArray[index].data[0].t - param.startDT) * objArray[index].data[0].k;
                        let data = [];
                        data.push(param.startDT);
                        data.push(parseFloat(first_v));
                        list_1.push(data);

                    } else {
                        var first_v = objArray[i].data[0].v - (objArray[i].data[0].t - startDT) * 0;
                        let data = [];
                        data.push(param.startDT);
                        data.push(parseFloat(first_v));
                        list_1.push(data);
                    }

                }
                array = curveRealTimeDataTail(realTimeData, objArray[index], index, array, false);

            } else {
                var result = curveGenGetFirstValue(param.divId, objArray[index], true, param.startDT);

                //参数是否一样，其他是否一样，查看是否可以取代下面整个尾巴的tail的处理??????????
                array = curveRealTimeDataTail(realTimeData, objArray[index], index, result, true);

                break;
            }
            break;
    }
    return array;

}

function name(obj) {
    for (var k in obj.data) {
        list.push({
            "value": [
                obj.data[k].t, parseFloat(obj.v)
            ]
        })
    }
}


/**
 * 处理dataOfMonth
 * @param {*} objArray
 * @param {*} i
 */
function curveReturnDataOfMonth(objArray, i, date) {
    objArray.sort(function (a, b) {
        return a.g - b.g;//时间正序
    })
    //var val = [date.getDate() + "日", parseFloat(objArray[i].v)];
    var val = [];
    val.push(date.getDate() + "日");
    val.push(parseFloat(objArray[i].v));
    return val;

}

/**
 * 处理DataOfYear
 * @param {*} objArray
 * @param {*} i
 */
function curveReturnDataOfYear(objArray, i, date) {
    objArray.sort(function (a, b) {
        return a.g - b.g;//时间正序
    })
    //var val = {"value": [(date.getMonth() + 1) + "月", parseFloat(objArray[i].v)]};
    var val = [];
    val.push((date.getMonth() + 1) + "月");
    val.push(parseFloat(objArray[i].v));
    return val;
}

function curveReturnDataOfDay(objArray, i, date) {
    objArray.sort(function (a, b) {
        return a.g - b.g;//时间正序
    })
    //var val = {"value": [(date.getMonth() + 1) + "月", parseFloat(objArray[i].v)]};
    var val = [];
    val.push((date.getMonth() + 1) + "月");
    val.push(parseFloat(objArray[i].v));
    return val;
}


/**
 * 处理第一个数据点不是0点，不是0点的数据处理过程
 * param  : objArray[i]
 *  */
function curveGetFirstValue(obj, startDT) {
    if (obj.data[0].k) {
        var first_v = obj.data[0].v - (obj.data[0].t - startDT) * obj.data[0].k;
        return first_v;
    } else {
        return obj.data[0].v;
    }
}

/**
 * 获取Div的actID
 * @param {*} divID
 */
function curveGetactID(divID) {
    for (var i in mainCurveDivNID.EchartsDiv) {
        if (mainCurveDivNID.EchartsDiv[i].divID == divID) {
            var actID = mainCurveDivNID.EchartsDiv[i].actID;
        }
    }
    return actID;

}


/**
 * div  : param.divId
 *  obj : objArray[i].data
 *  first : true
 *  startDT :param.startDT
 */

/**
 * 根据divID调用相应的处理方法
 * @param {*} divID
 * @param {*} obj    objArray[i]
 * @param {*} first  是否第一次
 */
function curveGenGetFirstValue(divID, obj, first, startDT) {
    var val = "";
    var actID = curveGetactID(divID);
    if (actID > 0) {
        val = curveGenUniqueProcess(actID, obj, first, startDT, divID);
    } else {
        val = curveGetFirstValue(obj, first);
    }
    return val;
}


/**
 * 针对具体DIV执行的特性处理过程
 * @param {*} actID
 * @param {*} objArray[i]
 * @param {*} first
 */
function curveGenUniqueProcess(actID, obj, first, startDT, divId) {// divobj from prj_UI_cfg.js dataobj from realdata
    var val = [];
    switch (actID) {
        case 1:
            val = curveUniquePowerForNK(obj, first, startDT, divId);
            break;

    }
    return val;
}


/**
 * 首次运行+正常运行
 * @param {*} obj  objArray[i]       XXX 1.objArray[i].data[k]   548
 * @param {*} first
 */
function curveUniquePowerForNK(obj, first, startDT, divId) {
    var val = [];
    if (first) {
        val = curveUniquePowerFirstForNK(obj, startDT, divId);
    } else {
        val = curveUniquePowerGenForNK(obj, startDT); //objArray[i].data[k]
    }
    return val;
}

/* 正常运行*/   //objArray[i].data[k]
//obj   objArray[i]  //obj   objArray[i].data[0].v   ????
function curveUniquePowerGenForNK(obj, startDT) {
    // if (obj.k) {
    //     var first_v = obj.v - (obj.t - startDT) * obj.k;
    //     return first_v;
    // } else {
    //     return obj.v;
    // }
    var list = [];

    for (var k in obj.data) {
        let array = [];
        array.push(obj.data[k].t);
        array.push(parseFloat(obj.v));
        if (parseFloat(obj.v) > 500) {
            console.log(parseFloat(obj.v))
        }
        list.push(array);
    }
}

// for (var k in objArray[i].data) {
//     list.push({
//         "value": [
//             objArray[i].data[k].t, parseFloat(objArray[i].v)
//         ]
//     })
// }

/* 首次首点向前预判点数据获取*/

//obj   objArray[i]
/**
 *
 * @param {*} obj      objArray[i]
 * @param {*} startDT
 */
function curveUniquePowerFirstForNK(obj, startDT, divId) {
    var firstvalue = curveUniquePowerFirstpointForNK(obj, startDT, divId);
    var prevalue = curveUniquePowerFirstPreForNK(obj, startDT, firstvalue);

    return prevalue;
}


/**
 * 首次首点数据获取
 * @param {*} obj   objArray[i]
 * @param {*} startDT
 */
function curveUniquePowerFirstpointForNK(obj, startDT, divId) {
    //????
    var objj = obj;
    var list = [];

    var year = new Date().getFullYear();
    var mon = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var time = new Date(year + "-" + mon + "-" + day + " 06:00:00").getTime();

    for (var k = 0; k < objj.data.length; k++) {

        if (parseFloat(objj.data[k].t) < time && parseFloat(objj.data[k].v) > 100) {
            objj.data[k].v = "0";
        }
        // var fz = 500;
        var fz = 70000;
        if (divId == "echarts_div_2") {
            fz = 500
        }

        if (parseFloat(objj.data[k].v) < fz) {
            let array = [];
            array.push(objj.data[k].t);
            array.push(parseFloat(objj.data[k].v));
            list.push(array);
        }
    }
    return list;
}

//obj   objArray[i]
/**
 * 首次首点向前预判点数据获取
 * @param {*} obj     objArray[i]
 * @param {*} startDT
 */
function curveUniquePowerFirstPreForNK(obj, startDT, firstvalue) {
    var list = firstvalue;
    var array = [];

    var item1 = obj.data.find(({t}) => startDT === t);
    //var item2 =objArray[i].data.find(({t}) => new Date().getTime() === t);

    if (!item1) {
        if (obj.data[0].k) {
            var first_v = obj.data[0].v - (obj.data[0].t - startDT) * obj.data[0].k;
        } else {
            var first_v = obj.data[0].v - (obj.data[0].t - startDT) * 0;
        }
        if (parseFloat(first_v) > 100) {
            first_v = "0";
        }
        array.push(startDT);
        array.push(parseFloat(first_v));
        if (parseFloat(first_v) > 500) {
            console.log(parseFloat(first_v));
        }
        list.push(array);
    }
    return list;

}


//objArray[i].data[k]


/**
 * 实时数据的尾随处理
 * @param {*} realTimeData 实时数据数组
 * @param {*} obj          当前ObjArray数组的obj对象objArray[i]
 * @param {*} i            ObjArray[i]
 * @param {*} list_1      ???????
 */
function curveRealTimeDataTail(realTimeData, obj, i, list_1, TORF) {
    var list = list_1;
    var isFirst;
    if (TORF) {
        isFirst = realTimeData.length > 0;
    } else {
        isFirst = realTimeData != null && realTimeData[i];
    }
    if (isFirst) {  //实时数据数组有值
        var item2_rt = realTimeData[i].t == new Date().getTime();//得到当前时间戳
        if (item2_rt != true) {
            for (var rel in realTimeData) {
                if (realTimeData[rel].v != null) { //实时数据有值
                    //判断实时数据的w，d
                    if (realTimeData[rel].w == obj.w && realTimeData[rel].d == obj.d) {
                        if (!(realTimeData[rel].t == obj.data[obj.data.length - 1].t)) {
                            let array = [];
                            array.push(realTimeData[rel].t);
                            array.push(parseFloat(realTimeData[rel].v));
                            list.push(array);
                        }
                        var end_v_rt = realTimeData[rel].v - (realTimeData[rel].t - new Date().getTime()) * 0;
                        let array = [];
                        array.push(new Date().getTime());
                        array.push(parseFloat(end_v_rt));
                        list.push(array);
                    } else {
                        var item2_his = obj.data.find(({t}) => new Date().getTime() === t);
                        if (!item2_his) {
                            var end_v_his = obj.data[obj.data.length - 1].v - (obj.data[obj.data.length - 1].t - new Date().getTime()) * 0;
                            let array = [];
                            array.push(new Date().getTime());
                            array.push(parseFloat(end_v_his));
                            list.push(array);
                        }
                    }
                }
            }
        } else {   //实时数据数组无值
            var item2_his = obj.data.find(({t}) => new Date().getTime() === t);
            if (!item2_his) {
                var end_v_his = obj.data[obj.data.length - 1].v - (obj.data[obj.data.length - 1].t - new Date().getTime()) * 0;
                let array = [];
                array.push(new Date().getTime());
                array.push(parseFloat(end_v_his));
                list.push(array);
            }
        }
        list.sort(function (a, b) {
            return a[0] - b[0];//时间正序
        });
        return list;
    }
}

/**
 * 得到y
 * @param {*} map
 */
function curveGetY(map, param, objArray) {
    var test_list = [];  //存放map里的value0: Array(242) value [1587398400000,0]
    var list_1 = [];     //存放map里的值，更改为value: Array(242), w: "AA007", d: "1015"
    var list_color = [];

    map.forEach(function (value, key) {
        test_list.push(value);
        list_1.push({
            "value": value,
            "w": key.substring(0, key.indexOf("-")),
            "d": key.substring(key.indexOf("-") + 1)
        })
    });
    var y = [];
    for (var o in list_1) {
        var dUnit;

        if (param.dataType == "echarts_fd") {
            dUnit = "[h]";
        } else {
            //objArray[o].dExt.dUnit :kwh
            if (objArray[o].dExt.dUnit != null && objArray[o].dExt.dUnit != "") {
                dUnit = "[" + objArray[o].dExt.dUnit + "]";
            } else {
                dUnit = ""
            }
        }

        for (var uu in param.deviceIdAndDataId) {  // deviceIdAndDataId  0: {deviceId: "AA002", dataId: "1015", dataName: "HL010102", color: "rgb(237, 48, 48)", capacity: ""}
            if (list_1[o].w == param.deviceIdAndDataId[uu].deviceId && list_1[o].d == param.deviceIdAndDataId[uu].dataId) {
                var vv = list_1[o].value;
                var capacity; //容量
                if (param.deviceIdAndDataId[uu].capacity != "" && param.deviceIdAndDataId[uu].capacity != null && parseFloat(param.deviceIdAndDataId[uu].capacity) != 0) {
                    capacity = param.deviceIdAndDataId[uu].capacity;
                } else {
                    capacity = "1";
                }
                var vv2 = [];  //[1587398400000, "0.00"]

                for (var h in vv) {
                    if (param.showPercentYesOrNo == "true") {
                        //parseFloat(1587401907875, 0) 转为1587401907875
                        vv2.push({
                            "value": [
                                vv[h].value[0], (parseFloat(vv[h].value[1]) / parseFloat(capacity) * 100).toFixed(parseInt(param.xiaoshu)) //四舍五入方法
                            ]
                        });
                    } else {
                        vv2.push({
                            "value": [
                                vv[h].value[0], (parseFloat(vv[h].value[1]) / parseFloat(capacity)).toFixed(parseInt(param.xiaoshu))
                            ]
                        });
                    }
                }

                list_color.push(param.deviceIdAndDataId[uu].color);
                //objArray[o].dExt.dUnit
                var year = new Date().getFullYear();
                var mon = new Date().getMonth() + 1;
                var day = new Date().getDate();
                var time = new Date(year + "-" + mon + "-" + day + " 00:00:00").getTime();
                if (vv2.length > 2) {
                    if (parseFloat(vv2[0].value[0]) == time && parseFloat(vv2[0].value[1]) > 100) {
                        vv2[0].value[1] = "0"
                    }
                    ;
                    if (parseFloat(vv2[1].value[0]) == time && parseFloat(vv2[1].value[1]) > 100) {
                        vv2[1].value[1] = "0"
                    }
                    ;
                }
                y.push({//{name: "HL010301", type: "line", symbol: "none", data: Array(242)}
                    name: param.deviceIdAndDataId[uu].dataName,
                    type: param.showEchartsType,
                    //smooth: true, //是否平滑曲线显示
                    symbol: "none",
                    data: vv2
                })
            }
        }
    }
    return result = {
        "y": y,
        "list_color": list_color
    };
}


function curve_get_echart_type(data) {
    var input_echarts_fd;
    if (data.value.input_echarts_fd != "" && data.value.input_echarts_fd != null && parseFloat(data.value.input_echarts_fd) != 0) {
        input_echarts_fd = data.value.input_echarts_fd;
    } else {
        input_echarts_fd = 1
    }
    return input_echarts_fd;
}


function curve_sendinfo_data(deviceIdAndDataId) {
    var w = "[";
    var d = "[";
    var wd = '[';
    var newDataNameArray = [];
    for (var j in deviceIdAndDataId) {
        newDataNameArray.push(deviceIdAndDataId[j].dataName);
        w += "'" + deviceIdAndDataId[j].deviceId + "'"
        d += "'" + deviceIdAndDataId[j].dataId + "'"
        wd += '{w:' + "'" + deviceIdAndDataId[j].deviceId + "',d:'" + deviceIdAndDataId[j].dataId + "'}"
        if (j < (deviceIdAndDataId.length - 1)) {
            wd += ","
            w += ","
            d += ","
        }
    }
    wd += ']'
    w += "]";
    d += "]";
    var result = {
        "wd": wd,
        "w": w,
        "d": d,
        "dataNameArray": newDataNameArray
    }
    return result;
}

function alert_sendinfo_data(deviceIdAndDataId) {
    var w = "[";
    var newDataNameArray = [];
    for (var j in deviceIdAndDataId) {
        dataNameArray.push(deviceIdAndDataId[j].dataName);
        w += "'" + deviceIdAndDataId[j].evL + "'"
        if (j < (deviceIdAndDataId.length - 1)) {
            w += ","
        }
    }
    w += "]";
    var result = {
        "w": w,
        "dataNameArray": newDataNameArray
    }
    return result;
}

function refreshEcharts_1_clearInt() {
    for (var i in refreshEcharts_1) {
        window.clearInterval(refreshEcharts_1[i])
    }
    refreshEcharts_1 = [];
}

/**
 * 获取某一个DIV的配置数据
 * @param {*} CurveDiv
 * @param {*} area
 */
function CurveGetDivData(CurveDiv, area) {
    var param = {
        "divId": CurveDiv,
        "area": area,
        "type": "echarts"
    };
    var data = postForUIJson(urlHeadShow, param);
    return data;
}


//主体


/***
 * 加载主界面曲线图表配置
 */
function reloadMainEcharts() {
    refreshEcharts_1_clearInt();

    for (var i = 0; i < mainCurveDiv.length; i++) {
        var data = CurveGetDivData(mainCurveDiv[i], area);
        if (mainCurveDiv[i] == "showMainEcharts_3") {
            console.log(mainCurveDiv[i]);
        }

        if (data.length > 0) {
            $("#" + mainCurveDiv[i] + " .title").html(data[0].value.name);
            $("#" + mainCurveDiv[i]).attr("title", data[0].value.name);
            var param = {
                "wd": "",
                "startDT": "",
                "endDT": "",
                "formatterValue": "",
                "dataNameArray": "",
                "xiaoshu": "",
                "whetherToDisplayDataLabels": "",
                "showPercentYesOrNo": "",

                "showEchartsType": data[0].value.showEchartsType,     //曲线柱状图
                "divType": data[0].type,
                "divId": data[0].value.echartsDivId,
                "deviceIdAndDataId": data[0].value.deviceIdAndDataId,
                "dataType": data[0].value.DataType,

                "dataDateType": data[0].value.showDateEcharts,
                "refreshData": data[0].value.refreshData,//刷新周期
                "showPercentYesOrNo": data[0].value.showPercentYesOrNo
            }
            //var showEchartsType = data[0].value.showEchartsType;     //曲线柱状图
            //var divId = data[0].value.echartsDivId;
            //var deviceIdAndDataId = data[0].value.deviceIdAndDataId; //
            //var divType = data[0].type;
            //var dataType = data[0].value.DataType;    //echarts_fd , echarts_mr
            var input_echarts_fd;
            //var w = "[";
            //var d = "[";
            //var wd = '[';

            var xiaoshu;
            if (data[0].value.xiaoshu != "" && data[0].value.xiaoshu != null) {
                xiaoshu = data[0].value.xiaoshu;
                param.xiaoshu = xiaoshu;
            } else {
                xiaoshu = 0;
                param.xiaoshu = xiaoshu;
            }

            param.whetherToDisplayDataLabels = data[0].value.whetherToDisplayDataLabels;  //是否显示
            switch (param.dataType) {
                case "echarts_fd":
                    //没用到，待定！！！
                    if (data[0].value.input_echarts_fd != "" && data[0].value.input_echarts_fd != null && parseFloat(data[0].value.input_echarts_fd) != 0) {
                        input_echarts_fd = data[0].value.input_echarts_fd;
                    } else {
                        input_echarts_fd = 1;
                    }
                    input_echarts_fd = curve_get_echart_type(data[0]);
                    var result = curve_sendinfo_data(param.deviceIdAndDataId);
                    param.wd = result.wd;
                    param.w = result.w;
                    param.d = result.d;
                    param.dataNameArray = result.dataNameArray;

                    break;
                case "echarts_mr":
                    if (data[0].value.input_echarts_fd != "" && data[0].value.input_echarts_fd != null && parseFloat(data[0].value.input_echarts_fd) != 0) {
                        input_echarts_fd = data[0].value.input_echarts_fd;
                    } else {
                        input_echarts_fd = 1;
                    }
                    //没用到，待定！！！
                    input_echarts_fd = curve_get_echart_type(data[0]);
                    var result = curve_sendinfo_data(param.deviceIdAndDataId);
                    param.wd = result.wd;
                    param.w = result.w;
                    param.d = result.d;
                    param.dataNameArray = result.dataNameArray;
                    break;
                case "echarts_alert":
                    var result = alert_sendinfo_data(param.deviceIdAndDataId);
                    //待定！！！！
                    param.w = result.w;
                    param.dataNameArray = result.dataNameArray;
                    break;
            }
            var startDT;
            var endDT;
            var dateTime;
            //var dataDateType = data[0].value.showDateEcharts;//数据显示的时间段范围
            // var refreshData = data[0].value.refreshData;//刷新周期
            // var showPercentYesOrNo = data[0].value.showPercentYesOrNo;
            if (param.showPercentYesOrNo == "true") {
                param.formatterValue = "%";
            } else if (param.showPercentYesOrNo == "false") {
                param.formatterValue = "";
            }


            if (data[0].value.showDateEcharts == "dataOfDay") {
                dateTime = new Date().getFullYear() + '年' + (new Date().getMonth() + 1) + "月" + new Date().getDate() + "日";
                startDT = new Date(new Date().toLocaleDateString()).getTime();
                endDT = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1;
                // $("#" + mainCurveDiv[i] + " .time").html(dateTime);


            } else if (data[0].value.showDateEcharts == "dataOfMonth") {
                var curDate = new Date();
                var curMonth = curDate.getMonth();
                curDate.setMonth(curMonth + 1);
                curDate.setDate(0);
                dateTime = new Date().getFullYear() + '年' + (new Date().getMonth() + 1) + "月"
                startDT = new Date(getMonthFirstLastDay().thisMonthFirstDay).getTime();
                //endDT=new Date(getMonthFirstLastDay().thisMonthLastDay).getTime();
                endDT = new Date(new Date(new Date(getMonthFirstLastDay().thisMonthLastDay)).toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1 + 1000;
                // $("#" + mainCurveDiv[i] + " .time").html(dateTime);
            } else if (data[0].value.showDateEcharts == "dataOfYear") {
                dateTime = new Date().getFullYear() + '年'
                startDT = new Date(getYearFirstLastDay().thisYearFirstDay).getTime();
                endDT = new Date(getYearFirstLastDay().thisYearLastDay).getTime();
                // $("#" + mainCurveDiv[i] + " .time").html(dateTime);
            }
            param.dateTime = dateTime;
            param.startDT = startDT;
            param.endDT = endDT;
            $("#" + mainCurveDiv[i] + " .time").html(dateTime);

            getData_Echarts(param);

            if (data[0].value.showDateEcharts == "dataOfDay") {
                if (parseFloat(param.refreshData) > 0) {
                    refreshEcharts_1.push(window.setInterval(function () {
                        getData_Echarts(param);
                    }, parseFloat(param.refreshData) * 1000))
                }
            }

        }
    }
}


/**
 * 返回的时间+时间单位+数值
 * @param {*} date
 * @param {*} time
 */
function curvelistValue(date, timeUnit, val) {
    var val = [date + timeUnit, val];
    return val;
}

/***
 * 获取曲线图表数据
 */
//function getData_Echarts(dataDateType,wd,showEchartsType,startDT,endDT,divType,divId,whetherToDisplayDataLabels,formatterValue,dataNameArray,deviceIdAndDataId,xiaoshu,dataType,showPercentYesOrNo) {
function getData_Echarts(param) {
    let dataObj = "{partyId:" + "'" + partyId + "'";
    var realTimeData = [];
    var interfanceNum;
    switch (param.dataDateType) {  //日，月，年
        case "dataOfDay":
            interfanceNum = 3;
            dataObj += ",wd:" + param.wd + ",startDT:" + param.startDT + ",endDT:" + param.endDT + ",outSet:" + "'" + outSet + "'" + "}";
            var dataParam = {   //AJAX请求的DATA
                "partyId": partyId,
                "wd": param.wd,
                "isRT": true,
                "outSet": outSet
            }
            // var url = "http://119.3.171.138:8082/iot/api/dpt/data/find/" + interfanceNum;
            // var datas = "{partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a',wd:" + param.wd + ",isRT:true,outSet:'NK001'}";
            // console.log(url + "--" + datas);

            $.ajax({
                "async": true,
                "crossDomain": true,
                //"url": url,
                "url": "http://119.3.171.138:8082/iot/api/dpt/data/find/" + interfanceNum,
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Cache-Control": "no-cache",
                    "cache-control": "no-cache"
                },
                //"data": datas
                //"data": dataParam
                "data": "{partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a',wd:" + param.wd + ",isRT:true,outSet:'NK001'}"
            }).done(function (data) {
                console.log(data);
                if (data.obj.list.length > 0) {
                    realTimeData = data.obj.list;
                }
            });
            break;

        case "dataOfMonth":
            switch (param.dataType) {
                case "echarts_fd":
                    interfanceNum = 25;
                    dataObj += ",wd:" + param.wd + ",startDT:" + param.startDT + ",rptType:'m',outSet:'NK001'}"
                    break;
                case "echarts_mr":
                    interfanceNum = 25;
                    dataObj += ",wd:" + param.wd + ",startDT:" + param.startDT + ",rptType:'m',outSet:'NK001'}"
                    break;
                case "echarts_alert":
                    interfanceNum = 5;
                    dataObj += ",evL:" + param.w + ",startDT:" + param.startDT + ",endDT:" + param.endDT + ",outSet:'NK001'}"
                    break;
            }
            break;
        case "dataOfYear":
            switch (param.dataType) {
                case "echarts_fd":
                    interfanceNum = 25;
                    dataObj += ",wd:" + param.wd + ",startDT:" + param.startDT + ",rptType:'y',outSet:" + "'" + outSet + "'" + "}";
                    break;
                case "echarts_mr":
                    interfanceNum = 25;
                    dataObj += ",wd:" + param.wd + ",startDT:" + param.startDT + ",rptType:'y',outSet:" + "'" + outSet + "'" + "}";
                    break;
                case "echarts_alert":
                    interfanceNum = 5;
                    dataObj += ",evL:" + param.w + ",startDT:" + param.startDT + ",endDT:" + endDT + ",outSet:" + "'" + outSet + "'" + "}";
                    break;
            }

            break;
    }
    // if(w!="[]"&&d!=null){
    if (param.wd != "[]") {

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "http://119.3.171.138:8082/iot/api/dpt/data/find/" + interfanceNum,
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "cache-control": "no-cache"
            },
            "data": dataObj
        }).done(function (response) {
            var objArray = response.obj.list;
            if (objArray.length > 0) {
                if (param.divType == "echarts") {
                    var y = [];
                    //组合当前w——d
                    var map = new Map();

                    for (var i in objArray) {       //对每一条历史数据记录进行处理
                        var date = new Date(objArray[i].g);
                        var key = objArray[i].w + "-" + objArray[i].d;
                        var list = map.get(key);//get方法用来获取一个Map对象中指定元素
                        var TORF;

                        if (map.get(key)) {
                            TORF = true;
                            var list_2 = cuiveSwitchDate(realTimeData, param.dataDateType, objArray, TORF, date, i, param);

                            if (param.dataDateType == "dataOfDay") {
                                for (var l in list_2) {
                                    list.push({"value": list_2[l]});
                                }
                            } else {
                                list.push({"value": list_2});
                            }

                        } else {
                            TORF = false;
                            var newlist = cuiveSwitchDate(realTimeData, param.dataDateType, objArray, TORF, date, i, param);

                            var list_3 = [];
                            if (param.dataDateType == "dataOfDay") {
                                for (var z in newlist) {
                                    if (newlist[z][1] > 500) {
                                        console.log(newlist[1][1]);
                                    }
                                    list_3.push({"value": newlist[z]});

                                }
                            } else {
                                list_3.push({"value": newlist});
                            }
                            //list_3.push({"value": newlist});
                            map.set(key, list_3);
                        }
                    }
                    var result = curveGetY(map, param, objArray);
                    //function getData_Echarts(dataDateType,wd,showEchartsType,startDT,endDT,divType,divId,whetherToDisplayDataLabels,formatterValue,dataNameArray,deviceIdAndDataId,xiaoshu,dataType,showPercentYesOrNo) {
                    getMainEcharts2(result.y, param.divId, param.formatterValue, param.whetherToDisplayDataLabels, result.list_color, param.dataNameArray, param.dataDateType);
                }
            }
        })

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
function getMainEcharts2(y, divId, formatterValue, whetherToDisplayDataLabels, colorArray, dataNameArray, dataDateType) {
    var myChart = echarts.init(document.getElementById(divId));
    var xAxisObj;
    var tooltipObj;
    for (var u in y) {
        for (var z in y[u].data) {
            //console.log(y[u].data[z].value[1]);
            if (y[u].data[z].value[1] > 500) {
                console.log("y的i:"+u+ ",y[u]的name"+y[u].name+",data的i:"+u+",data的value[0]:"+z+y[u].data[z].value[0]+",data的value[1]:"+ y[u].data[z].value[1]);
                //console.log(y[u].data[z].value[0]+"+——+"+ y[u].data[z].value[1]);
            }
        }
    }
    switch (dataDateType) {
        case "dataOfDay":
            xAxisObj = {
                type: 'time',
                splitLine: {
                    show: true
                },
                axisLabel: {
                    formatter: function (value, index) {
                        var date = new Date(value);
                        let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
                        let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
                        return h + ':' + min;
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#FFF'
                    },
                },
                maxInterval: 7200 * 1000
            }
            tooltipObj = {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                },
                formatter: function (params) {
                    var htmlStr = '<div>';
                    for (var i in params) {
                        var date = new Date(params[i].value[0]);
                        let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
                        let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
                        let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                        htmlStr += '<a style="color: ' + params[i].color + '">' + params[i].seriesName + ':' + params[i].value[1] + formatterValue + '</a></br>';
                        htmlStr += '<a style="color: ' + params[i].color + '">时间:&nbsp;' + h + ':' + min + ':' + sec + '</a></br>';
                    }
                    htmlStr += "</div>"
                    return htmlStr;
                },
            }
            break;
        case "dataOfMonth":
            var days = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
            var daysArr = [];
            for (var j = 0; j < days; j++) {
                daysArr.push((j + 1) + "日")
            }
            xAxisObj = {
                type: 'category',
                data: daysArr,
                splitLine: {
                    show: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#FFF'
                    },

                },
                splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: true, //是否显示分隔线。默认数值轴显示，类目轴不显示。
                    lineStyle: { //分隔线样式
                        type: 'solid', //分隔线线的类型。
                        color: "#8A8A8A"
                    },
                },
            }
            tooltipObj = {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                },
                formatter: function (params) {
                    var htmlStr = '<div>';
                    for (var i in params) {
                        var date = new Date();
                        let y = date.getFullYear();
                        let m = date.getMonth() + 1;
                        htmlStr += '<a style="color: ' + params[i].color + '">' + params[i].seriesName + ':' + params[i].value[1] + formatterValue + '</a></br>';
                        htmlStr += '<a style="color: ' + params[i].color + '">时间:&nbsp;' + y + '年' + m + '月' + params[i].name + '</a></br>';
                    }
                    htmlStr += "</div>"
                    return htmlStr;
                },
            }
            break;
        case "dataOfYear":
            var monthArr = [];
            for (var j = 0; j < 12; j++) {
                monthArr.push((j + 1) + "月");
            }
            xAxisObj = {
                type: 'category',
                data: monthArr,
                splitLine: {
                    show: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#FFF'
                    },

                },
                splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: true, //是否显示分隔线。默认数值轴显示，类目轴不显示。
                    lineStyle: { //分隔线样式
                        type: 'solid', //分隔线线的类型。
                        color: "#8A8A8A"
                    },
                },
            }
            tooltipObj = {
                trigger: 'axis',
                axisPointer: {
                    animation: false
                },
                formatter: function (params) {
                    var htmlStr = '<div>';
                    for (var i in params) {
                        var date = new Date();
                        let y = date.getFullYear();
                        htmlStr += '<a style="color: ' + params[i].color + '">' + params[i].seriesName + ':' + params[i].value[1] + formatterValue + '</a></br>';
                        htmlStr += '<a style="color: ' + params[i].color + '">时间:&nbsp;' + y + '年' + params[i].name + '</a></br>';
                    }
                    htmlStr += "</div>"
                    return htmlStr;
                },
            }
            break;
    }
    var formatter = '{value}' + formatterValue;
    var labelJson;
    if (whetherToDisplayDataLabels == "true") {
        labelJson = {
            show: true,
            position: 'top',
            fontSize: 15,
            fontWeight: 'bolder',
            fontFamily: '宋体',
        }
    } else if (whetherToDisplayDataLabels == "false") {
        labelJson = {
            show: false,
            position: 'top',
            fontSize: 15,
            fontWeight: 'bolder',
            fontFamily: '宋体',
        }
    }
    option = {
        /*X轴设置*/
        xAxis: xAxisObj,
        tooltip: tooltipObj,
        legend: {
            x: 'center',
            //data: dataNameArray,
            textStyle: {
                color: '#ffffff'//字体颜色
            }

        },
        label: labelJson,
        color: colorArray,
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
                formatter: formatter
            },
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#FFF',
                }
            }
        }],
        series: y
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
}

// function getMainEcharts2(y, divId, formatterValue, whetherToDisplayDataLabels, colorArray, dataNameArray, dataDateType) {
//     if (divId == "echarts_div_3") {
//         console.log(divId);
//     }
//     if (divId == "echarts_div_4") {
//         console.log(divId);
//     }
//     if (divId == "echarts_div_1") {
//         console.log(divId);
//     }
//     if (divId == "echarts_div_2") {
//         console.log(divId);
//     }
//
//     y[1].data[1].value[1]
//     for (var n in y) {
//         for (var z in y[n].data) {
//             if(y[n].data[z] >500){
//                 console.log(y[n].data[z].value[1]);
//             }
//         }
//     }
//
//     var myChart = echarts.init(document.getElementById(divId));//创建的实例
//     var xAxisObj;
//     var tooltipObj;
//
//     switch (dataDateType) {
//         case "dataOfDay":
//             xAxisObj = {
//                 type: 'time',
//                 splitLine: {
//                     show: true
//                 },
//                 axisLabel: {
//                     formatter: function (value, index) {
//                         var date = new Date(value);
//                         let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
//                         let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
//                         return h + ':' + min;
//                     },
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         color: '#FFF'
//                     },
//                 },
//                 maxInterval: 7200 * 1000
//             }
//             tooltipObj = {
//                 trigger: 'axis',
//                 axisPointer: {
//                     animation: false
//                 },
//                 formatter: function (params) {
//                     var htmlStr = '<div>';
//                     for (var i in params) {
//                         var date = new Date(params[i].value[0]);
//                         let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
//                         let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
//                         let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
//                         htmlStr += '<a style="color: ' + params[i].color + '">' + params[i].seriesName + ':' + params[i].value[1] + formatterValue + '</a></br>';
//                         htmlStr += '<a style="color: ' + params[i].color + '">时间:&nbsp;' + h + ':' + min + ':' + sec + '</a></br>';
//                     }
//                     htmlStr += "</div>"
//                     return htmlStr;
//                 },
//             }
//             break;
//         case "dataOfMonth":
//             var days = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
//             var daysArr = [];
//             for (var j = 0; j < days; j++) {
//                 daysArr.push((j + 1) + "日")
//             }
//             xAxisObj = {
//                 type: 'category',
//                 data: daysArr,
//                 splitLine: {
//                     show: true
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         color: '#FFF'
//                     },
//
//                 },
//                 splitLine: { //坐标轴在 grid 区域中的分隔线。
//                     show: true, //是否显示分隔线。默认数值轴显示，类目轴不显示。
//                     lineStyle: { //分隔线样式
//                         type: 'solid', //分隔线线的类型。
//                         color: "#8A8A8A"
//                     },
//                 },
//             }
//             tooltipObj = {
//                 trigger: 'axis',
//                 axisPointer: {
//                     animation: false
//                 },
//                 formatter: function (params) {
//                     var htmlStr = '<div>';
//                     for (var i in params) {
//                         var date = new Date();
//                         let y = date.getFullYear();
//                         let m = date.getMonth() + 1;
//                         htmlStr += '<a style="color: ' + params[i].color + '">' + params[i].seriesName + ':' + params[i].value[1] + formatterValue + '</a></br>';
//                         htmlStr += '<a style="color: ' + params[i].color + '">时间:&nbsp;' + y + '年' + m + '月' + params[i].name + '</a></br>';
//                     }
//                     htmlStr += "</div>"
//                     return htmlStr;
//                 },
//             }
//             break;
//         case "dataOfYear":
//             var monthArr = [];
//             for (var j = 0; j < 12; j++) {
//                 monthArr.push((j + 1) + "月");
//             }
//             xAxisObj = {
//                 type: 'category',
//                 data: monthArr,
//                 splitLine: {
//                     show: true
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         color: '#FFF'
//                     },
//
//                 },
//                 splitLine: { //坐标轴在 grid 区域中的分隔线。
//                     show: true, //是否显示分隔线。默认数值轴显示，类目轴不显示。
//                     lineStyle: { //分隔线样式
//                         type: 'solid', //分隔线线的类型。
//                         color: "#8A8A8A"
//                     },
//                 },
//             }
//             tooltipObj = {
//                 trigger: 'axis',
//                 axisPointer: {
//                     animation: false
//                 },
//                 formatter: function (params) {
//                     var htmlStr = '<div>';
//                     for (var i in params) {
//                         var date = new Date();
//                         let y = date.getFullYear();
//                         htmlStr += '<a style="color: ' + params[i].color + '">' + params[i].seriesName + ':' + params[i].value[1] + formatterValue + '</a></br>';
//                         htmlStr += '<a style="color: ' + params[i].color + '">时间:&nbsp;' + y + '年' + params[i].name + '</a></br>';
//                     }
//                     htmlStr += "</div>"
//                     return htmlStr;
//                 },
//             }
//             break;
//     }
//     var formatter = '{value}' + formatterValue;
//     var labelJson;
//     if (whetherToDisplayDataLabels == "true") {
//         labelJson = {
//             show: true,
//             position: 'top',
//             fontSize: 15,
//             fontWeight: 'bolder',
//             fontFamily: '宋体',
//         }
//     } else if (whetherToDisplayDataLabels == "false") {
//         labelJson = {
//             show: false,
//             position: 'top',
//             fontSize: 15,
//             fontWeight: 'bolder',
//             fontFamily: '宋体',
//         }
//     }
//     option = {
//         /*X轴设置*/
//         xAxis: xAxisObj,
//         tooltip: tooltipObj,
//         legend: {
//             x: 'center',
//             //data: dataNameArray,
//             textStyle: {
//                 color: '#ffffff'//字体颜色
//             }
//
//         },
//         label: labelJson,
//         color: colorArray,
//         // itemStyle: {
//         //   /*圆点颜色*/
//         //    color: "#4876FF",
//         //    borderColor: "#48D1CC",
//         //   borderWidth: 4
//         // },
//         yAxis: [{
//             type: 'value',
//             axisLabel: {
//                 show: true,
//                 interval: 'auto',
//                 formatter: formatter
//             },
//             position: 'left',
//             axisLine: {
//                 lineStyle: {
//                     color: '#FFF',
//                 }
//             }
//         }],
//         series: y
//     };
//     // 为echarts对象加载数据
//     myChart.setOption(option);
// }


/***
 *
 * 选择echarts图表数据类型
 * value : this.value
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
 * 获取曲线图表展示块入库的信息
 * @param area
 * @param e
 */
function getEchartsName(area, e) {
    deviceIdAndDataId = [];
    $("#deviceIdAndDataId").empty();
    var e = e || window.event;
    obj = e.target || e.srcElement;
    var faId = obj.parentElement.id;
    echartsObj = obj.nextSibling.nextSibling;

    var json;
    $("#myModalLabel-echarts").html(obj.parentElement.innerText.substring(0, obj.parentElement.innerText.indexOf("编")))
    if (area == "nk_main") {
        json = {
            "divId": faId,
            "area": area,
            "type": "echarts"
        }
    } else {
        json = {
            "divId": faId,
            "area": area,
            "whichOneArea": whichOneArea,
            "type": "echarts"
        }
    }
    urlHeadShow
    var data = postForUIJson(urlHeadShow, json);
    if (data != null && data != "") {
        if (data[0].value != null && data[0].value != "") {

            switch (data[0].value.DataType) {
                case "echarts_fd":
                    if (data[0].value.deviceIdAndDataId != null && data[0].value.deviceIdAndDataId != "") {
                        for (var i = 0; i < data[0].value.deviceIdAndDataId.length; i++) {
                            $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>设备ID:<a class='deviceId'>" + data[0].value.deviceIdAndDataId[i].deviceId + "</a>&nbsp;&nbsp;数据ID:<a class='dataId'>" + data[0].value.deviceIdAndDataId[i].dataId + "</a>&nbsp;&nbsp;数据点名称:<a class='dataName'>" + data[0].value.deviceIdAndDataId[i].dataName + "</a>&nbsp;&nbsp;装机容量:<a class='capacity'>" + data[0].value.deviceIdAndDataId[i].capacity + "</a>&nbsp;&nbsp;选择颜色：<input class='selectColor'  type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;background-color: " + data[0].value.colors[i] + ";color:" + data[0].value.colors[i] + ";cursor: pointer' onclick='reloadColor()'id='" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + "' value='" + data[0].value.colors[i] + "'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>")
                            // 颜色选择器基本实例化:
                            $('.selectColor').colorpicker();
                            deviceIdAndDataId.push({
                                "deviceId": data[0].value.deviceIdAndDataId[i].deviceId,
                                "dataId": data[0].value.deviceIdAndDataId[i].dataId,
                                "dataName": data[0].value.deviceIdAndDataId[i].dataName,
                                "color": data[0].value.deviceIdAndDataId[i].color,
                                "capacity": data[0].value.deviceIdAndDataId[i].capacity
                            })
                        }
                    }
                    $("#input_echarts_fd").attr("disabled", false);
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
                    $("#input_echarts_fd").val(data[0].value.input_echarts_fd);

                    break;
                case "echarts_mr":
                    if (data[0].value.deviceIdAndDataId != null && data[0].value.deviceIdAndDataId != "") {
                        for (var i = 0; i < data[0].value.deviceIdAndDataId.length; i++) {
                            $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>设备ID:<a class='deviceId'>" + data[0].value.deviceIdAndDataId[i].deviceId + "</a>&nbsp;&nbsp;数据ID:<a class='dataId'>" + data[0].value.deviceIdAndDataId[i].dataId + "</a>&nbsp;&nbsp;数据点名称:<a class='dataName'>" + data[0].value.deviceIdAndDataId[i].dataName + "</a>&nbsp;&nbsp;装机容量:<a class='capacity'>" + data[0].value.deviceIdAndDataId[i].capacity + "</a>&nbsp;&nbsp;选择颜色：<input class='selectColor'  type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;background-color: " + data[0].value.colors[i] + ";color:" + data[0].value.colors[i] + ";cursor: pointer' onclick='reloadColor()'id='" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + "' value='" + data[0].value.colors[i] + "'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>")
                            // 颜色选择器基本实例化:
                            $('.selectColor').colorpicker();
                            deviceIdAndDataId.push({
                                "deviceId": data[0].value.deviceIdAndDataId[i].deviceId,
                                "dataId": data[0].value.deviceIdAndDataId[i].dataId,
                                "dataName": data[0].value.deviceIdAndDataId[i].dataName,
                                "color": data[0].value.deviceIdAndDataId[i].color,
                                "capacity": data[0].value.deviceIdAndDataId[i].capacity
                            })
                        }
                    }
                    $("#input_echarts_fd").attr("disabled", false);
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
                    $("#input_echarts_fd").val(data[0].value.input_echarts_fd);
                    break;
                case "echarts_alert":
                    if (data[0].value.deviceIdAndDataId != null && data[0].value.deviceIdAndDataId != "") {
                        for (var i = 0; i < data[0].value.deviceIdAndDataId.length; i++) {
                            $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>事件等级:<a class='evL'>" + data[0].value.deviceIdAndDataId[i].evL + "</a>&nbsp;&nbsp;事件名称:<a class='dataName'>" + data[0].value.deviceIdAndDataId[i].dataName + "</a>&nbsp;&nbsp;装机容量:<a class='capacity'>" + data[0].value.deviceIdAndDataId[i].capacity + "</a>&nbsp;&nbsp;选择颜色：<input class='selectColor'  type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;background-color: " + data[0].value.colors[i] + ";color:" + data[0].value.colors[i] + ";cursor: pointer' onclick='reloadColor()'id='" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + "' value='" + data[0].value.colors[i] + "'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>")
                            // 颜色选择器基本实例化:
                            $('.selectColor').colorpicker();
                            deviceIdAndDataId.push({
                                "evL": data[0].value.deviceIdAndDataId[i].evL,
                                "dataName": data[0].value.deviceIdAndDataId[i].dataName,
                                "color": data[0].value.deviceIdAndDataId[i].color,
                                "capacity": data[0].value.deviceIdAndDataId[i].capacity
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
                    $("#input_echarts_fd").attr("disabled", true);

                    break;
            }
        }
    } else {
        var DataType = $("#select_echart_data_type").val();
        switch (DataType) {
            case "echarts_fd":
                $("#needInputWorD").show();
                $("#needInputEvl").hide();
                $("#input_echarts_fd").attr("disabled", false);
                $("#showDateEcharts").empty();
                $("#showDateEcharts").append("<option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
                $("#showEchartsType").empty();
                $("#showEchartsType").append("<option value='bar'>柱形图</option><option value='line'>曲线图</option>");
                break;
            case "echarts_mr":
                $("#needInputWorD").show();
                $("#needInputEvl").hide();
                $("#input_echarts_fd").attr("disabled", false);
                $("#showDateEcharts").empty();
                $("#showDateEcharts").append("<option value='dataOfDay'>当天</option><option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
                $("#showEchartsType").empty();
                $("#showEchartsType").append("<option value='bar' disabled>柱形图</option><option value='line'>曲线图</option>");
                break;
            case "echarts_alert":
                $("#needInputWorD").hide();
                $("#needInputEvl").show();
                $("#input_echarts_fd").attr("disabled", true);
                $("#showDateEcharts").empty();
                $("#showDateEcharts").append("<option value='dataOfMonth'>当月</option><option value='dataOfYear'>当年</option>");
                $("#showEchartsType").empty();
                $("#showEchartsType").append("<option value='bar'>柱形图</option><option value='line'>曲线图</option>");
                break;
        }
    }
}


/***
 * 保存曲线展示块设置的信息
 * @param area
 */
function saveEchartsDeviceIdAndDataId(area) {
    var fatherId = obj.parentElement.id;
    var echartsDivId = echartsObj.id;
    var colors = [];
    var colorFatherDivId = document.getElementById('deviceIdAndDataId');
    var colorInput = colorFatherDivId.getElementsByTagName('input');
    for (var j in deviceIdAndDataId) {
        if (colorInput[j].value != null) {
            colors.push(colorInput[j].value);
        }
        deviceIdAndDataId[j].color = colorInput[j].value;
    }
    for (var i in colorInput) {
        if (colorInput[i].value != null) {
            colors.push(colorInput[i].value);
        }
    }
    var showDateEcharts = $("#showDateEcharts").val();
    var showEchartsType = $("#showEchartsType").val();
    var whetherToDisplayDataLabels = $("#whetherToDisplayDataLabels").val();//是否显示数据标签
    var refreshData = $("#refreshData").val()//数据刷新周期
    var json;
    if (area == "nk_main") {
        json = {
            "type": "echarts",
            "divId": fatherId,
            "area": area,
            "value": JSON.stringify({
                "deviceIdAndDataId": deviceIdAndDataId,
                "name": $("#inputName-echarts").val(),
                "showDateEcharts": showDateEcharts,
                "echartsDivId": echartsDivId,
                "showPercentYesOrNo": $("#showPercentYesOrNo").val(),
                "showEchartsType": showEchartsType,
                "whetherToDisplayDataLabels": whetherToDisplayDataLabels,
                "colors": colors,
                "refreshData": refreshData,
                "DataType": $("#select_echart_data_type").val(),
                "input_echarts_fd": $("#input_echarts_fd").val(),
                "xiaoshu": $("#xiaoshu_echarts").val()
            })
        }
    } else {
        json = {
            "whichOneArea": whichOneArea,
            "area": area,
            "divId": fatherId,
            "type": "echarts",
            "value": JSON.stringify({
                "deviceIdAndDataId": deviceIdAndDataId,
                "name": $("#inputName-echarts").val(),
                "showDateEcharts": showDateEcharts,
                "echartsDivId": echartsDivId,
                "showPercentYesOrNo": $("#showPercentYesOrNo").val(),
                "showEchartsType": showEchartsType,
                "whetherToDisplayDataLabels": whetherToDisplayDataLabels,
                "colors": colors,
                "refreshData": refreshData,
                "DataType": $("#select_echart_data_type").val(),
                "input_echarts_fd": $("#input_echarts_fd").val(),
                "xiaoshu": $("#xiaoshu_echarts").val()
            })
        }
    }

    var data = postForUIJson(urlHeadSave, json);
    alert(data.status);
    var myChart_1 = echarts.init(document.getElementById(echartsDivId));
    myChart_1.clear();
    reloadMainEcharts(whichOneArea);

}


/***
 * 增加多组设备ID及数据ID
 */
$("#addDeviceIdAndDataId").click(function () {
    var echartsDataType = $("#select_echart_data_type").val();
    switch (echartsDataType) {
        case "echarts_mr":
            var deviceId = $("#inputDeviceId-echarts").val();
            var dataId = $("#inputDataId-echarts").val();
            var dataName = $("#inputDataName-echarts").val();
            var capacity = $("#capacity").val();
            if (deviceId != null && deviceId != "" && dataId != null && dataId != "" && dataName != null && dataName != "") {
                for (var i = 0; i < deviceIdAndDataId.length; i++) {
                    var j = deviceIdAndDataId[i];
                    if (j.deviceId == deviceId && j.dataId == dataId || j.dataName == dataName) {
                        alert("设备ID,数据点ID及数据点名称不可重复！！！");
                        return;
                    }
                }
                $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>设备ID:<a class='deviceId'>" + deviceId + "</a>&nbsp;&nbsp;数据ID:<a class='dataId'>" + dataId + "</a>&nbsp;&nbsp;数据点名称:<a class='dataName'>" + dataName + "</a>&nbsp;&nbsp;装机容量:<a class='capacity'>" + capacity + "</a>&nbsp;&nbsp;选择颜色：<input class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer' onclick='reloadColor()'id='" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + "'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>");
                // 颜色选择器基本实例化:
                $('.selectColor').colorpicker();
                deviceIdAndDataId.push({
                    "deviceId": deviceId,
                    "dataId": dataId,
                    "dataName": dataName,
                    "capacity": capacity
                })
            } else {
                alert("设备ID,数据点ID及数据点名称不可为空！！！");
            }
            break;
        case "echarts_fd":
            var deviceId = $("#inputDeviceId-echarts").val();
            var dataId = $("#inputDataId-echarts").val();
            var dataName = $("#inputDataName-echarts").val();
            var capacity = $("#capacity").val();
            if (deviceId != null && deviceId != "" && dataId != null && dataId != "" && dataName != null && dataName != "") {
                for (var i = 0; i < deviceIdAndDataId.length; i++) {
                    var j = deviceIdAndDataId[i];
                    if (j.deviceId == deviceId && j.dataId == dataId || j.dataName == dataName) {
                        alert("设备ID,数据点ID及数据点名称不可重复！！！");
                        return;
                    }
                }
                $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>设备ID:<a class='deviceId'>" + deviceId + "</a>&nbsp;&nbsp;数据ID:<a class='dataId'>" + dataId + "</a>&nbsp;&nbsp;数据点名称:<a class='dataName'>" + dataName + "</a>&nbsp;&nbsp;装机容量:<a class='capacity'>" + capacity + "</a>&nbsp;&nbsp;选择颜色：<input class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer' onclick='reloadColor()'id='" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + "'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>");
                // 颜色选择器基本实例化:
                $('.selectColor').colorpicker();
                deviceIdAndDataId.push({
                    "deviceId": deviceId,
                    "dataId": dataId,
                    "dataName": dataName,
                    "capacity": capacity
                })
            } else {
                alert("设备ID,数据点ID及数据点名称不可为空！！！");
            }
            break;
        case "echarts_alert":
            var evL = $("#inputEvl-echarts").val();
            var dataName = $("#inputDataName-echarts").val();
            var capacity = $("#capacity").val();
            if (evL != null && evL != "" && dataName != null && dataName != "") {
                for (var i = 0; i < deviceIdAndDataId.length; i++) {
                    var j = deviceIdAndDataId[i];
                    if (j.evL == evL && j.dataName == dataName) {
                        alert("事件等级及事件名称不可重复！！！");
                        return;
                    }
                }
                $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>事件等级:<a class='evL'>" + evL + "</a>&nbsp;&nbsp;事件名称:<a class='dataName'>" + dataName + "</a>&nbsp;&nbsp;装机容量:<a class='capacity'>" + capacity + "</a>&nbsp;&nbsp;选择颜色：<input class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer' onclick='reloadColor()'id='" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + "'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>");
                // 颜色选择器基本实例化:
                $('.selectColor').colorpicker();
                deviceIdAndDataId.push({
                    "evL": evL,
                    "dataName": dataName,
                    "capacity": capacity
                })
            } else {
                alert("事件等级及事件名称不可为空！！！");
            }
            break;
    }

})


/***
 * 增加多组设备ID及数据ID
 */
$("#addDeviceIdAndDataId").click(function () {
    var echartsDataType = $("#select_echart_data_type").val();
    switch (echartsDataType) {
        case "echarts_mr":
            var deviceId = $("#inputDeviceId-echarts").val();
            var dataId = $("#inputDataId-echarts").val();
            var dataName = $("#inputDataName-echarts").val();
            var capacity = $("#capacity").val();
            if (deviceId != null && deviceId != "" && dataId != null && dataId != "" && dataName != null && dataName != "") {
                for (var i = 0; i < deviceIdAndDataId.length; i++) {
                    var j = deviceIdAndDataId[i];
                    if (j.deviceId == deviceId && j.dataId == dataId || j.dataName == dataName) {
                        alert("设备ID,数据点ID及数据点名称不可重复！！！");
                        return;
                    }
                }
                $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>设备ID:<a class='deviceId'>" + deviceId + "</a>&nbsp;&nbsp;数据ID:<a class='dataId'>" + dataId + "</a>&nbsp;&nbsp;数据点名称:<a class='dataName'>" + dataName + "</a>&nbsp;&nbsp;装机容量:<a class='capacity'>" + capacity + "</a>&nbsp;&nbsp;选择颜色：<input class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer' onclick='reloadColor()'id='" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + "'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>");
                // 颜色选择器基本实例化:
                $('.selectColor').colorpicker();
                deviceIdAndDataId.push({
                    "deviceId": deviceId,
                    "dataId": dataId,
                    "dataName": dataName,
                    "capacity": capacity
                })
            } else {
                alert("设备ID,数据点ID及数据点名称不可为空！！！");
            }
            break;
        case "echarts_fd":
            var deviceId = $("#inputDeviceId-echarts").val();
            var dataId = $("#inputDataId-echarts").val();
            var dataName = $("#inputDataName-echarts").val();
            var capacity = $("#capacity").val();
            if (deviceId != null && deviceId != "" && dataId != null && dataId != "" && dataName != null && dataName != "") {
                for (var i = 0; i < deviceIdAndDataId.length; i++) {
                    var j = deviceIdAndDataId[i];
                    if (j.deviceId == deviceId && j.dataId == dataId || j.dataName == dataName) {
                        alert("设备ID,数据点ID及数据点名称不可重复！！！");
                        return;
                    }
                }
                $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>设备ID:<a class='deviceId'>" + deviceId + "</a>&nbsp;&nbsp;数据ID:<a class='dataId'>" + dataId + "</a>&nbsp;&nbsp;数据点名称:<a class='dataName'>" + dataName + "</a>&nbsp;&nbsp;装机容量:<a class='capacity'>" + capacity + "</a>&nbsp;&nbsp;选择颜色：<input class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer' onclick='reloadColor()'id='" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + "'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>");
                // 颜色选择器基本实例化:
                $('.selectColor').colorpicker();
                deviceIdAndDataId.push({
                    "deviceId": deviceId,
                    "dataId": dataId,
                    "dataName": dataName,
                    "capacity": capacity
                })
            } else {
                alert("设备ID,数据点ID及数据点名称不可为空！！！");
            }
            break;
        case "echarts_alert":
            var evL = $("#inputEvl-echarts").val();
            var dataName = $("#inputDataName-echarts").val();
            var capacity = $("#capacity").val();
            if (evL != null && evL != "" && dataName != null && dataName != "") {
                for (var i = 0; i < deviceIdAndDataId.length; i++) {
                    var j = deviceIdAndDataId[i];
                    if (j.evL == evL && j.dataName == dataName) {
                        alert("事件等级及事件名称不可重复！！！");
                        return;
                    }
                }
                $("#deviceIdAndDataId").append("<p class='deviceIdAndDataId'>事件等级:<a class='evL'>" + evL + "</a>&nbsp;&nbsp;事件名称:<a class='dataName'>" + dataName + "</a>&nbsp;&nbsp;装机容量:<a class='capacity'>" + capacity + "</a>&nbsp;&nbsp;选择颜色：<input class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer' onclick='reloadColor()'id='" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + "'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"echarts\")'>移除</button></p>");
                // 颜色选择器基本实例化:
                $('.selectColor').colorpicker();
                deviceIdAndDataId.push({
                    "evL": evL,
                    "dataName": dataName,
                    "capacity": capacity
                });
            } else {
                alert("事件等级及事件名称不可为空！！！");
            }
            break;
    }
})


/***
 * 移除设备ID和数据ID
 */
function removeDeviceIdAndDataId(type) {
    var e = e || window.event;
    var deviceIdAndDataIdObj = e.target || e.srcElement;
    //console.log(deviceIdAndDataIdObj.parentElement.innerText)
    var fatherObj = deviceIdAndDataIdObj.parentElement;
    //console.log(fatherObj.childNodes)
    deviceIdAndDataIdObj.parentElement.remove();
    var newArr = new Array();
    switch (type) {
        case "echarts":
            var echartsDataType = $("#select_echart_data_type").val();
            switch (echartsDataType) {
                case "echarts_mr":
                    for (var i = 0; i < deviceIdAndDataId.length; i++) {
                        var j = deviceIdAndDataId[i];
                        var test_w = fatherObj.childNodes[1].innerText;
                        var test_d = fatherObj.childNodes[3].innerText;
                        var test_n = fatherObj.childNodes[5].innerText;
                        //j.deviceId!=test_w&&j.dataId!=test_d
                        if (j.deviceId != test_w && j.dataName != test_n || j.dataId != test_d && j.dataName != test_n) {
                            newArr.push(j);
                        }
                    }
                    break;
                case "echarts_fd":
                    for (var i = 0; i < deviceIdAndDataId.length; i++) {
                        var j = deviceIdAndDataId[i];
                        var test_w = fatherObj.childNodes[1].innerText;
                        var test_d = fatherObj.childNodes[3].innerText;
                        var test_n = fatherObj.childNodes[5].innerText;
                        //j.deviceId!=test_w&&j.dataId!=test_d
                        if (j.deviceId != test_w && j.dataName != test_n || j.dataId != test_d && j.dataName != test_n) {
                            newArr.push(j);
                        }
                    }
                    break;
                case "echarts_alert":
                    for (var i = 0; i < deviceIdAndDataId.length; i++) {
                        var j = deviceIdAndDataId[i];
                        var test_w = fatherObj.childNodes[1].innerText;
                        var test_n = fatherObj.childNodes[3].innerText;
                        if (j.evL != test_w && j.dataName != test_n) {
                            newArr.push(j);
                        }
                    }
                    break;
            }

            break;
        case "battery":
            for (var i = 0; i < deviceIdAndDataId.length; i++) {
                var j = deviceIdAndDataId[i];
                if (j.dataId != fatherObj.childNodes[1].innerText && j.name != fatherObj.childNodes[3].innerText) {
                    newArr.push(j);
                }
            }
            break;
        case "regulation":
            //console.log(fatherObj.childNodes)
            for (var i = 0; i < deviceIdAndDataId.length; i++) {
                var j = deviceIdAndDataId[i];
                var test_d = fatherObj.childNodes[3].innerText;
                var test_n = fatherObj.childNodes[5].innerText;
                if (j.dataId != test_d && j.gzName != test_n) {
                    newArr.push(j);
                }
            }
            break;
        case "status_IdAndInfo":
            for (var i = 0; i < deviceIdAndDataId.length; i++) {
                var j = deviceIdAndDataId[i];
                var test_d = fatherObj.childNodes[1].innerText;
                var test_n = fatherObj.childNodes[3].innerText;
                if (j.status_info != test_d && j.status_id != test_n) {
                    newArr.push(j);
                }
            }
            break;
    }
    deviceIdAndDataId = newArr;
}