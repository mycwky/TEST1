$(function(){
    reloadAlert();
})

function getAlertNamee(area) {
    var e = e||window.event;
    objAlert=e.target||e.srcElement;
    reloadTreeView(area);
}

// /***
//  * 获取预警框所处div信息
//  * @param e
//  */
// function alert_getCfgInfo(area, e) {
//     var e = e || window.event;
//     objAlert = e.target || e.srcElement;
//     var divId = alertDiv;
//     var data = {
//         "type": "alert",
//         "area": area,
//     };
//     var treeCheck = postForUIJson(urlHeadShow, data);
//
//     reloadTreeView(treeData, alertDiv, treeCheck);
// }

/***
 * 加载设置的告警框内容：运行时
 */
function reloadAlert() {
    for (var i in refreshAlert_1) {
        window.clearInterval(refreshAlert_1[i])
    }
    refreshAlert_1 = [];
    var data = {
        "type": "alert",
        "area": area,
        "divId": 'alert_div'
    }
    var result = postForUIJson(urlHeadShow, data);
    if (result != null && result != "") {
        var value = result[0].value;
        var alertArray;
        if (value != null) {
            alertArray = "[";
            for (var i in value) {
                for (var j in value[i].nodes) {
                    alertArray += "'" + value[i].nodes[j].id + "',"
                }
            }
            alertArray = alertArray.substring(0, alertArray.length - 1)
            alertArray += "]"
        } else {
            alertArray = [];
        }
        var refreshAlert = result[0].refreshAlert;
        var startDT = new Date(new Date().toLocaleDateString()).getTime();
        var endDT = new Date().getTime() + 86400000 - (new Date().getHours() * 60 * 60 + new Date().getMinutes() * 60 + new Date().getSeconds()) * 1000
        reloadAlertData(alertArray, startDT, endDT);
        if (parseFloat(refreshAlert) > 0) {
            refreshAlert_1.push(window.setInterval(function () {
                reloadAlertData(alertArray, startDT, endDT);
            }, parseFloat(refreshAlert) * 1000))
        }
    }
}

/***
 * 保存预警框设置
 * @param area 所属界面
 */
function saveAlert(area, node) {
    var list = $("'" + alertDiv + "'").treeview('getChecked', node)
    var value = [];
    var child = [];
    var obj = {};
    var refreshAlert = $("#refreshAlert").val();
    for (var i = 0; i < list.length; i++) {
        if (list[i].PPID == 0) {
            if (i > 0) {
                value.push(obj);
                child = [];
            }
            obj = {
                "text": list[i].text,
                "nodes": child,
                "nodeId": list[i].nodeId.toString(),
                "PPID": list[i].PPID.toString(),
                "id": list[i].id,
            };
        } else if (list[i].PPID != 0) {
            child.push({
                "text": list[i].text,
                "PPID": list[i].PPID.toString(),
                "id": list[i].id,
                "nodeId": list[i].nodeId.toString(),
            })
        }
        if (i == list.length - 1) {
            value.push(obj)
        }
    }
    
    var data = {
        "type"  : "alert",
        "area"  : area,
        "divId" : objAlert.parentNode.id,
        "value" : JSON.stringify(value),
        "refreshAlert": refreshAlert
    };
    var result = postForUIJson(urlAlertSave, data);
    alert(data.status);
}

//需要改动
/***
 * 加载告警数据 :运行时（动态刷出报警信息）
 */
function reloadAlertData(alertArray, startDT, endDT) {
    //$("#base_nav_text_alert_table thead").empty();
    $("#base_nav_text_alert_table tbody").empty();

    if (alertArray.length > 0) {
        $.ajax({
            //"async": false,
            "crossDomain": true,
            "url": urlAlertData,
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Cache-Control": "no-cache"
            },
            "data": "{evL:"+alertArray+",partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a',isRT:true,v:'1'outSet:'NK001'}"
            //"data": "{evL:"+alertArray+",partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a',startDT:"+startDT+",endDT:"+endDT+",outSet:'NK001'}"
            //"data": "{evL:" + alertArray + ",partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a',t:" + new Date().getTime() + ",outSet:'NK001'}"
            //!!!"data": "{evL:" + alertArray + ",partyId:" + "'" + partyId + "'" + ",isRT:" + true + ",v:'1'" + ",outSet:" + "'" + outSet1 + "'" + "}"
            //"data": "{evL:"  +alertArray+",partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a',isRT:true,v:'1'outSet:'NK001'}"
        }).done(function (response) {

            if (response.obj.list.length > 0) {
                var list = response.obj.list;

                list = list.sort(compare_1("t"));
                var showList = [];
                for (var i in list) {
                    var evLevel;
                    var p_zty;
                    var s_zty;
                    var line;
                    var area;
                    var tags = list[i].wExt.tags;
                    var item1 = D_IOT_EVENT_LEVEL.find(({ key }) => list[i].dExt.evL === key);
                    if (item1) {
                        evLevel = item1.val;
                    } else {
                        evLevel = "--";
                    }

                    var item2 = D_IOT_TELESIG_STATE.find(({ key }) => list[i].dExt.zty === key);
                    if (item2) {
                        p_zty = item2.val;
                    } else {
                        p_zty = "--";
                    }

                    for (var k in tags) {
                        if (tags[k].indexOf("LINE") >= 0) {
                            var item3 = D_IOT_OBJ_TAG.find(({ key }) => tags[k] === key);
                            if (item3) {
                                line = item3.val;
                            } else {
                                line = "--";
                            }
                        }

                        if (tags[k].indexOf("PVBZONE") >= 0) {
                            var item4 = D_IOT_OBJ_TAG.find(({ key }) => tags[k] === key);
                            if (item4) {
                                area = item4.val;
                            } else {
                                area = "--";
                            }
                        }
                    }

                    for (var k in D_IOT_TELESIG_STATE) {
                        if (list[i].dExt.zty == D_IOT_TELESIG_STATE[k].pkey && D_IOT_TELESIG_STATE[k].key.indexOf(list[i].v) >= 0) {
                            s_zty = D_IOT_TELESIG_STATE[k].val;//状态值
                            break;
                        } else {
                            s_zty = "--";
                        }
                    }
                    if (list[i].zty == "event" && list[i].v == "0" || list[i].zty == "clamp" && list[i].v == "0") {

                    } else {
                        showList.push(
                            {
                                "v": s_zty,
                                "zty": p_zty,
                                "evL": evLevel,
                                "hwName": list[i].wExt.hwName,
                                "dDescr": list[i].dExt.dDescr,
                                "t": formatDate(list[i].t),
                                "line": line,
                                "area": area
                            }
                        )
                    }
                }
                document.getElementById("base_nav_text_flag").innerText = showList.length;
                for (var j in showList) {
                    var tr = ($("<tr style='background-color:rgb(238,238,238)'><th>" + showList[j].hwName + "</th><th>" + showList[j].dDescr + "</th><th>" + showList[j].zty + "|" + showList[j].v + "</th><th>" + showList[j].t + "</th><th>" + showList[j].evL + "</th><th>" + showList[j].line + "</th><th>" + showList[j].area + "</th></tr>"));
                    $("#alert_div table tbody").append(tr)
                }
            }
        })
    }
}
//             if (response.obj.list.length > 0) {
//
//                 var list = response.obj.list;
//
//                 list = list.sort(compare_1("t"));
//                 var showList = [];
//                 for (var i in list) {
//                     var evLevel;
//                     var p_zty;
//                     var s_zty;
//                     var line;
//                     var area;
//                     var tags = list[i].wExt.tags;
//                     var item1 = D_IOT_EVENT_LEVEL.find(({key}) => list[i].dExt.evL === key);
//                     if (item1) {
//                         evLevel = item1.val;
//                     } else {
//                         evLevel = "--";
//                     }
//
//                     var item2 = D_IOT_TELESIG_STATE.find(({key}) => list[i].dExt.zty === key);
//                     if (item2) {
//                         p_zty = item2.val;
//                     } else {
//                         p_zty = "--";
//                     }
//
//                     for (var k in tags) {
//                         if (tags[k].indexOf("LINE") >= 0) {
//                             var item3 = D_IOT_OBJ_TAG.find(({key}) => tags[k] === key);
//                             if (item3) {
//                                 line = item3.val;
//                             } else {
//                                 line = "--";
//                             }
//                         }
//
//                         if (tags[k].indexOf("PVBZONE") >= 0) {
//                             var item4 = D_IOT_OBJ_TAG.find(({key}) => tags[k] === key);
//                             if (item4) {
//                                 area = item4.val;
//                             } else {
//                                 area = "--";
//                             }
//                         }
//                     }
//
//                     for (var k in D_IOT_TELESIG_STATE) {
//                         if (list[i].dExt.zty == D_IOT_TELESIG_STATE[k].pkey && D_IOT_TELESIG_STATE[k].key.indexOf(list[i].v) >= 0) {
//                             s_zty = D_IOT_TELESIG_STATE[k].val;//状态值
//                             break;
//                         } else {
//                             s_zty = "--";
//                         }
//                     }
//                     if (list[i].zty == "event" && list[i].v == "0" || list[i].zty == "clamp" && list[i].v == "0") {
//
//                     } else {
//                         showList.push(
//                             {
//                                 "v": s_zty,
//                                 "zty": p_zty,
//                                 "evL": evLevel,
//                                 "hwName": list[i].wExt.hwName,
//                                 "dDescr": list[i].dExt.dDescr,
//                                 "t": formatDate(list[i].t),
//                                 "line": line,
//                                 "area": area
//                             }
//                         )
//                     }
//
//                 }
//
//             }
//
//         })
//
//
//
//         // var data = "{evL:" + alertArray + ",partyId:" +"'"+ partyId +"'"+  ",t:" + new Date().getTime() + ",outSet:" +"'"+ outSet1 + "'"+"}";
//         //            "var data = "{evL:"+alertArray+",partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a',isRT:true,v:'1'outSet:'NK001'}"
//         //var response = postRunAsyncToTJson(urlAlertData, data);
//
// }
//
//
// }
