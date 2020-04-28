//===========================================初始化================================================
$(function () {

    // $.ajax({//查询保存所有描述的中间层的json
    //     url: "static/js/json/describe.json",
    //     type: "get",
    //     async: false,
    //     dataType: "json",
    //     success: function (data) {
    //         describeList = data.describeArr;
    //     }
    // })

    // $.ajax({//查询保存方法的中间层的json
    //     url: "static/js/json/function.json",
    //     type: "get",
    //     dataType: "json",
    //     async:false,
    //     success: function (data) {
    //         functionList = data.functionList;
    //     }
    // })
    /*中间层编辑的下拉框 */
    var middleSelect = getForJsToJson(urlSubpageMiddleSelect);
    describeList = middleSelect.functionList;

    $.ajax({//查询保存方法的中间层的json
        url: "static/js/json/bandingFun.json",
        type: "get",
        dataType: "json",
        async: false,
        success: function (data) {
            var bandingFun = data.functionName;
            for (let i in bandingFun) {
                $("#gz-select_jznbq_func").append("<option value='" + bandingFun[i].name + "'>" + bandingFun[i].describe + "</option>");
            }
        }
    })

    initData();//初始化打开页面所需的下拉菜单横幅等重要数据
    getWhichOneArea();//获取
    editStatus();//状态部分
    add_GZ();
    //editPulldown();//下拉框配置
    editEcharts();//编辑图表
    editSingle();//单体设备信息的编辑
    //$('.selectColor').colorpicker();
    //initArea(JSON.parse(sessionStorage.getItem("key")));//从主页点击获取参数跳转到指定页面
})


var dd=[{
    "text":"主页",
    "href":"NK_main_page_test.html",
    "state":{
        "expanded":true
    },
}];
function initData() {
    //组串式逆变器，接线图，非发电区
    // var data = {dicts: ['D_IOT_OBJ_TAG', 'D_IOT_HW_MODEL'], partyId: '208060df-d0fa-44bb-8fa3-d468b97d164a'};
    // var setting = postRunAsyncToFSetting(urlAlertTreeData, data);
    //
    // //拼接横向导航栏
    // $.ajax(setting).done(function (response) {
    //     let num = 0;
    //     for (var i in response.obj.list) {
    //         switch (response.obj.list[i].name) {
    //             case "D_IOT_OBJ_TAG":
    //                 num++;
    //                 D_IOT_OBJ_TAG = response.obj.list[i].data;
    //                 //新增： 集尘线路集合。新增导航栏集合
    //                 let lines = [];
    //                 for (let k in D_IOT_OBJ_TAG) {
    //                     if (num == 1) {
    //                         let obj = {
    //                             id: D_IOT_OBJ_TAG[k].key,
    //                             name: D_IOT_OBJ_TAG[k].val,
    //                             open: true
    //                         };
    //                         if (D_IOT_OBJ_TAG[k].pkey) {
    //                             obj.pId = D_IOT_OBJ_TAG[k].pkey
    //                         }
    //                         ;
    //                         zNodes.push(obj);
    //                         if (D_IOT_OBJ_TAG[k].pkey == "LINE") {
    //                             let obj = {};
    //                             obj.text = D_IOT_OBJ_TAG[k].val;
    //                             obj.href = "#";
    //                             obj.tags = [D_IOT_OBJ_TAG[k].key]
    //                             lines.push(obj)
    //                         }
    //                         //!!!!!!! 拼接   DEV_FFDQ：非发电区
    //                         if (D_IOT_OBJ_TAG[k].key == "DEV_FFDQ") {
    //                             $("#base_menu_bar").append("<div  style='flex:1;' id='" + D_IOT_OBJ_TAG[k].key + "' onclick=clickTitleId('" + D_IOT_OBJ_TAG[k].key + "','" + D_IOT_OBJ_TAG[k].val + "')><a class='title-a'>" + D_IOT_OBJ_TAG[k].val + "</a></div>")
    //                         }
    //                         //!!!!!!! NBQ_SERI 组串式逆变器的pkey
    //                         if (D_IOT_OBJ_TAG[k].key == "NBQ_SERI") {
    //                             ////////////
    //                             if (k == 1) {
    //                                 titleId = D_IOT_OBJ_TAG[k].key;
    //                             }
    //                             $("#base_menu_bar").prepend("<div style='flex:1;' id='" + D_IOT_OBJ_TAG[k].key + "' onclick=clickTitleId('" + D_IOT_OBJ_TAG[k].key + "','" + D_IOT_OBJ_TAG[k].val + "')><a class='title-a'>" + D_IOT_OBJ_TAG[k].val + "</a></div>")
    //                         }
    //                     }
    //                 }
    //                 //!!!!!!!  菜单栏下拉框赋值  可通用
    //                 if (num == 1) {
    //                     dd[0].nodes = lines;
    //                     $("#base_nav_stationlist_tree").treeview({//下拉菜单赋值
    //                         showBorder: false,
    //                         data: dd,
    //                         backColor: 'white',
    //                         enableLinks: true,
    //                         showTags: true,
    //                         onNodeSelected: function (event, data) {//当下拉菜单被点击时触发的事件
    //                             $("#popover860567").hide();//选择area以后隐藏选择的div
    //                             statusList = [];//点击区域清空状态的数组
    //                             initArea(data);
    //                         }
    //                     });
    //                     let flag = getQueryVariable("flag");
    //                     if (!flag) {
    //                         $("#base_nav_site").html(lines[0].text);
    //                         area = lines[0].tags[0];
    //                         $("#areaId").val(area);
    //                     } else {
    //                         for (let i in lines) {
    //                             if (lines[i].tags[0] == "LINE4") {
    //                                 $("#base_nav_site").html(lines[i].text);
    //                                 area = lines[i].tags[0];
    //                                 $("#areaId").val(area);
    //                             }
    //                         }
    //                     }
    //                 }
    //
    //                 for (var i in D_IOT_OBJ_TAG_TREE) {
    //                     if (D_IOT_OBJ_TAG_TREE[i].isLeaf == false) {
    //                         whichOneAreaTree.push({
    //                             id: D_IOT_OBJ_TAG_TREE[i].key,
    //                             name: D_IOT_OBJ_TAG_TREE[i].val,
    //                             pid: D_IOT_OBJ_TAG_TREE[i].pkey,
    //                             open: true
    //                         })
    //                     } else {
    //                         whichOneAreaTree.push({
    //                             id: D_IOT_OBJ_TAG_TREE[i].key,
    //                             name: D_IOT_OBJ_TAG_TREE[i].val,
    //                             pId: D_IOT_OBJ_TAG_TREE[i].pkey
    //                         })
    //                     }
    //                 }
    //                 break;
    //             case "D_IOT_HW_MODEL":
    //                 D_IOT_HW_MODEL = response.obj.list[i].data;
    //                 for (var i in D_IOT_HW_MODEL) {
    //                     if (D_IOT_HW_MODEL[i].isLeaf == false) {
    //                         D_IOT_HW_MODEL_TREE.push({
    //                             id: D_IOT_HW_MODEL[i].key,
    //                             name: D_IOT_HW_MODEL[i].val,
    //                             pid: D_IOT_HW_MODEL[i].pkey,
    //                             open: true
    //                         })
    //                     } else {
    //                         D_IOT_HW_MODEL_TREE.push({
    //                             id: D_IOT_HW_MODEL[i].key,
    //                             name: D_IOT_HW_MODEL[i].val,
    //                             pId: D_IOT_HW_MODEL[i].pkey
    //                         })
    //                     }
    //                 }
    //                 break;
    //             case "D_IOT_TELESIG_STATE":
    //                 D_IOT_TELESIG_STATE = response.obj.list[i].data;
    //                 break;
    //         }
    //     }
    // });
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



    //拼接横向导航栏
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
                            //!!!!!!! 拼接   DEV_FFDQ：非发电区
                            if (D_IOT_OBJ_TAG[k].key == "DEV_FFDQ") {
                                $("#base_menu_bar").append("<div  style='flex:1;' id='"+ D_IOT_OBJ_TAG[k].key+"' onclick=clickTitleId('"+D_IOT_OBJ_TAG[k].key+"','"+D_IOT_OBJ_TAG[k].val+"')><a class='title-a'>" + D_IOT_OBJ_TAG[k].val + "</a></div>")
                            }
                            //!!!!!!! NBQ_SERI 组串式逆变器的pkey
                            if (D_IOT_OBJ_TAG[k].key == "NBQ_SERI") {
                                ////////////
                                if(k==1){
                                    titleId=D_IOT_OBJ_TAG[k].key;
                                }
                                $("#base_menu_bar").prepend("<div style='flex:1;' id='"+ D_IOT_OBJ_TAG[k].key+"' onclick=clickTitleId('"+D_IOT_OBJ_TAG[k].key+"','"+D_IOT_OBJ_TAG[k].val+"')><a class='title-a'>" + D_IOT_OBJ_TAG[k].val + "</a></div>")
                            }
                        }
                    }
                    //!!!!!!!  菜单栏下拉框赋值
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
 * 获取对象系，初始化树形下拉框（该处用于对象系）
 */
function getWhichOneArea() {
    var defaults = {
        zNodes: zNodes,
        height: 233,
        chkStyle: "radio",
        callback: {
            onCheck: oncheckCalbask_1
        }
    }
    //带复选框tree树结构插件  选择对象系
    $("#select_jznbq_obj").drawMultipleTree(defaults);
}

/***
 * 树形下拉框选择后的回调
 * @param Nodelist
 */
// var checkedWhichArea=[];//选中的分区
function oncheckCalbask_1(Nodelist) {
    if(Nodelist.length>0){
        for(let i in Nodelist){
            let json={"id":Nodelist[i].id,"name":Nodelist[i].name};
            checkedWhichArea[0]=json;
        }
    }
}


/**
 * !!!!!!
 *  对下三个状态框的编辑操作
 */
function editStatus() {
    //提交更改  编辑模态框保存
    $("#save-status").click(function () {
        let selVal = $("#gz-selects select").val();
        let unit_type = $("#gz-unit").val();
        let dataId = $("#gz-dataId").val();
        let refreshAlert = $("#gz-refreshAlert").val();
        let list = [];
        list.push({"DId": unit_type, "dataId": dataId, "functionNameAndIsShow": selVal})
        let json = {"titleName": titleName, "list": list, "refreshAlert": refreshAlert};
        let divId = statusBtnVal;
        let type = "alert";
        let modal = 'myModal-rt-statu';
        let title = titleId;
        saveEditData(json, modal, type, title, divId);
        let tags = [$("#areaId").val()];
        let text = "";
        for (let d in D_IOT_OBJ_TAG) {
            if (D_IOT_OBJ_TAG[d].key == tags[0]) {
                text = D_IOT_OBJ_TAG[d].val;
                break;
            }
        }
        initArea({"text": text, "tags": tags, "titleId": titleId});
    })

    //打开编辑模态框  ajax请求赋值
    $(".btn-st").click(function () {
        $(".status-isShow").hide();
        $("#gz-selects").empty();
        $("#gz-selects").append("<select class='form-control' style='float:left;'><option value='0'>---请选择---</option></select>");
        statusBtnVal = $(this).val();
        if (functionList.length > 0) {
            for (let i in functionList) {
                if (functionList[i].functionName) {
                    $("#gz-selects select").append("<option value='" + functionList[i].functionName + "-" + functionList[i].functionIsShow + "'>" + functionList[i].name + "</option>");
                } else {
                    $("#gz-selects select").append("<option value=''>" + functionList[i].name + "</option>");
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
            if (val) {
                let str = val.split("-");
                if (str[1] == "N") {
                    $(".status-isShow").hide();
                } else {
                    $(".status-isShow").show();
                }
            }
        })


        var param = {
            "type": "alert",
                "area": $("#areaId").val(),
                "whichOneArea": titleId
        }

        var data = postForUIJson(urlHeadShow, param);
        if (data) {
            for (let d in data) {
                if (statusBtnVal == data[d].divId) {
                    $("#gz-selects select").val(data[d].value.list[0].functionNameAndIsShow).trigger("change");
                    //获取数据库中序列的信息
                    $("#gz-unit").val(data[d].value.list[0].DId);
                    $("#gz-dataId").val(data[d].value.list[0].dataId);
                    $("#gz-refreshAlert").val(data[d].value.refreshAlert)
                }
            }
        }

    })
}


/**
 * ！！！！右边的div
 * 对单体信息的编辑
 */
function editSingle() {
    let editLineNumData = [];
    //点击模态框添加按钮
    $("#addModel_DS_WhichArea").click(function () {
        var YC = $("#YC").val();
        var YX = $("#YX").val();
        var xiaoshu = $("#xiaoshu").val();
        var maxRowNum = $("#maxRowNum").val();
        var DATAID_STATUS = $("#DATAID_STATUS").val();
        var refresh_DT_DATA_LP = $("#refresh_DT_DATA_LP").val();
        var status = true;
        YX = YX.split(',')
        YC = YC.split(',')
        var obj = document.getElementById("DS_GROUP_TBODY");
        var trObj = obj.getElementsByTagName("tr");
        if (trObj.length > 0) {//判断序列是否存在tr
            for (var i = 0; i < trObj.length; i++) {
                var tdObj = trObj[i].getElementsByTagName("td");
                if ($("#dsId").val() == tdObj[0].innerText) {
                    status = false;
                } else {
                    status = true;
                }
            }
        }
        switch (status) {
            case true:
                let headStr = "<tr><td>" + $("#dsId").val() + "</td><td>[" + YC + "]</td><td>[" + YX + "]</td><td>" + DATAID_STATUS + "</td><td>" + xiaoshu + "</td><td hidden>" + imgFile + "</td><td>" + maxRowNum + "</td><td>" + refresh_DT_DATA_LP + "</td>";
                let endingStr = "<td>" + checkedModel[0].name + "</td><td style='display:table-cell; vertical-align:middle'><button id='removeDeviceIdAndDataId'onclick='removeModel_DS_WhichArea()'>移除</button></td></tr>";
                $("#DS_GROUP_TBODY").append(headStr + endingStr);
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
        checkedWhichArea = [];
        $("#myModal_DT_Device_Data").modal("show");
    })

    //提交修改行数
    $("#submitEditLineNum").click(function () {
        let editLineNum = $("#editLineNum").val();
        let val = $("#line-num-selects select").val();
        var data = [];
        for (let i in editLineNumData) {
            if (editLineNumData[i].serNum == val) {
                data.push(editLineNumData[i]);
                data[0].value.maxRowNum = editLineNum;
                delete data[0]._id;
                break;
            }
        }
        let param = {
            "area": $("#areaId").val(),
                "type": "whichArea_Model_DS",
                "checkedWhichArea": titleId,
                "list": JSON.stringify(editLineNumData)
        }
        let data1 = postForUIJson(urlSaveModel_DS, param);
        if (data1) {
            switch (data1.status) {
                case "保存成功":
                    status_save_DS = data1.status;
                    let tags = [$("#areaId").val()];
                    let text = "";
                    for (let d in D_IOT_OBJ_TAG) {
                        if (D_IOT_OBJ_TAG[d].key == tags[0]) {
                            text = D_IOT_OBJ_TAG[d].val;
                            break;
                        }
                    }
                    initArea({"text": text, "tags": tags, "titleId": titleId});
                    break;
                case "保存失败":
                    status_save_DS = data1.status;
                    return;
                    break;
            }
        }


    })

    //点击修改行数按钮
    $("#single-edit-lineNum").click(function () {
        editLineNumData = [];

        var param = {
            "area": $("#areaId").val(),
                "type": "whichArea_Model_DS",
                "checkedWhichArea": titleId
        };
        let data = postForUIJson(urlHeadShow, param);
        if (data) {
            if (data.length > 0) {
                $("#myModal-editLineNum").modal("show");
                $("#editLineNum").val("");//清空
                $("#line-num-selects").empty();
                $("#line-num-selects").append("<select class='form-control'style='float:left;'><option value='0'>---请选择---</option></select>");
                for (let i in data) {
                    let serNum = data[i].serNum;
                    $("#line-num-selects select").append("<option value='" + serNum + "'>" + serNum + "</option>");
                }
                editLineNumData = data;//保存当前获取到的数据
                $("#line-num-selects select").change(function () {
                    let selectSerNum = $(this).val();
                    for (let i in editLineNumData) {
                        if (editLineNumData[i].serNum == selectSerNum) {
                            $("#editLineNum").val(editLineNumData[i].value.maxRowNum);//将数据库中的行数赋值给input
                            break;
                        }
                    }
                })
            } else {
                alert("请点击编辑按钮添加数据");
            }
        }
    })


    var status_save_DS;


    //!!!!!!!!!单体设置的更改
    $("#save-single").click(function () {
        var list_1 = [];
        var obj = document.getElementById("DS_GROUP_TBODY");
        var trObj = obj.getElementsByTagName("tr");
        if (trObj.length > 0) {
            var json;
            for (var i = 0; i < trObj.length; i++) {
                var tdObj = trObj[i].getElementsByTagName("td");
                var serNum = tdObj[0].innerText;
                var YC = tdObj[1].innerText;
                var YX = tdObj[2].innerText;
                var DATAID_STATUS = tdObj[3].innerText;
                var xiaoshu = tdObj[4].innerText;
                var img = tdObj[5].innerText;
                var maxRowNum = tdObj[6].innerText;
                var refresh_DT_DATA_LP = tdObj[7].innerText;
                var hw = tdObj[8].innerText;
                if (hw) {
                    for (let i in D_IOT_HW_MODEL_TREE) {
                        if (D_IOT_HW_MODEL_TREE[i].name == hw) {
                            hw = {"name": D_IOT_HW_MODEL_TREE[i].name, "id": D_IOT_HW_MODEL_TREE[i].id};
                        }
                    }
                }
                json = {
                    "type": "whichArea_Model_DS",
                    "area": $("#areaId").val(),
                    "serNum": serNum,
                    "value": {
                        "singleDivId": singleDivId,
                        "checkedWhichArea": titleId,
                        "YX_DATA_ID_ARR": (YX.substring(1, YX.indexOf("]"))).split(/[,，]/),
                        "YC_DATA_ID_ARR": (YC.substring(1, YC.indexOf("]"))).split(/[,，]/),
                        "img": img,
                        "xiaoshu": xiaoshu,
                        "maxRowNum": maxRowNum,
                        "DATAID_STATUS": DATAID_STATUS,
                        "refresh_DT_DATA_LP": refresh_DT_DATA_LP,
                        "hw": hw
                    }
                }
                list_1.push(json);
            }



            let param = {
                "area": $("#areaId").val(),
                "type": "whichArea_Model_DS",
                "checkedWhichArea": titleId,
                "list": JSON.stringify(list_1)
            };
            var result = postForUIJson(urlSaveModel_DS2, param);
            if (result) {
                switch (result.status) {
                    case "保存成功":
                        status_save_DS = result.status
                        let tags = [$("#areaId").val()];
                        let text = "";
                        for (let d in D_IOT_OBJ_TAG) {
                            if (D_IOT_OBJ_TAG[d].key == tags[0]) {
                                text = D_IOT_OBJ_TAG[d].val;
                                break;
                            }
                        }
                        initArea({"text": text, "tags": tags, "titleId": titleId});
                        break;
                    case "保存失败":
                        status_save_DS = result.status;
                        return;
                        break;
                }
            }

        } else {
            let json = {
                "type": "whichArea_Model_DS",
                "area": $("#areaId").val(),
                "serNum": "",
                "value": {
                    "checkedWhichArea": titleId,
                }
            }
            list_1.push(json);

            let param = {
                "area": $("#areaId").val(),
                "type": "whichArea_Model_DS",
                "checkedWhichArea": titleId,
                "list": JSON.stringify(list_1)
            };
            var result1 = postForUIJson(urlSaveModel_DS, param);
            if (result1) {
                switch (result1.status) {
                    case "保存成功":
                        status_save_DS = result1.status;
                        let tags = [$("#areaId").val()];
                        let text = "";
                        for (let d in D_IOT_OBJ_TAG) {
                            if (D_IOT_OBJ_TAG[d].key == tags[0]) {
                                text = D_IOT_OBJ_TAG[d].val;
                                break;
                            }
                        }
                        initArea({"text": text, "tags": tags, "titleId": titleId});
                        break;
                    case "保存失败":
                        status_save_DS = result1.status;
                        return;
                        break;
                }
            }
        }
    })
}


/***
 * !!!!!!!验证编辑的时候不能重复
 * 增加多种设备型号的数据点规则
 */
function add_GZ() {
    $("#add_sj_gz").click(function () {
        var dataId = $("#sj_gz_dataId").val();
        var gzValue = $("#gzValue").val();
        var selectGZ = $("#selectGZ").val();
        var typeName = $("#select_gz_type").val();
        var gzName = $("#gzName").val();
        if (HW_MODEL != null && HW_MODEL != "" && dataId != null && dataId != "" && gzValue != null && gzValue != "" && selectGZ != null && selectGZ != "" && gzName != null && gzName != "") {
            for (var i = 0; i < deviceIdAndDataId.length; i++) {
                var j = deviceIdAndDataId[i];
                if (j.type == HW_MODEL && j.dataId == dataId || j.gzName == gzName) {
                    alert("设备型号，数据ID及规则描述不可重复！！！");
                    return;
                }
            }
            $("#gz_group").append("<p class='deviceIdAndDataId'>设备型号:<a class='type'>" + HW_MODEL[0].id + "</a>&nbsp;&nbsp;数据ID:<a class='dataId'>" + dataId + "</a>&nbsp;&nbsp;规则描述:<a class='gzName'>" + gzName + "</a>&nbsp;<a class='selectGZ'>" + selectGZ + "</a>&nbsp;<a class='gzValue'>" + gzValue + "</a>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeDeviceIdAndDataId(\"regulation\")'>移除</button>&nbsp;&nbsp;</p>");
            deviceIdAndDataId.push({
                "type": HW_MODEL,
                "dataId": dataId,
                "gzValue": gzValue,
                "selectGZ": selectGZ,
                "typeName": typeName,
                "gzName": gzName
            })
        } else {
            alert("设备型号,数据ID不可为空以及规则不可为空！！！");
        }
    })
}


/**
 * 图表编辑按钮的事件
 */
function editEcharts() {
    //点击添加按钮的事件
    $("#addRealTimeDataId").click(function () {
        let realTimeDataId = $("#realTimeDataId").val();
        let realTimeDataName = $("#realTimeDataName").val()
        let color = $("#charts-color").val();
        if (realTimeDataId && realTimeDataName) {
            let bool = true;//用于判断arr数组中是否存在该数据
            if (echartsArr.length > 0) {//判断echartsArr中是否是空的
                for (let i in echartsArr) {
                    for (let o in echarts_obj) {
                        if (echartsArr[i].describe == realTimeDataName && echartsArr[i].config.id == checkedModel[0].id && echartsArr[i].selectOption.id == echarts_obj[o].id) {//如果存在就为false
                            bool = false;
                        }
                    }
                }
                if (bool) {//如果不存在则为true，则在aechartsArrrr中添加一条，并且拼接标签
                    let id = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                    if (echarts_obj.length > 0) {
                        let headStr = "<p class='deviceIdAndDataId'>数据ID:<a>" + realTimeDataId + "</a>&nbsp;&nbsp;数据点名称:<a>" + realTimeDataName + "</a>&nbsp;&nbsp;设备名称:<a>" + checkedModel[0].name + "</a>";
                        let ending = "&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: " + color + "' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + realTimeDataName + "\")'>移除</button>&nbsp;&nbsp;</p>";
                        let colorArrStr = "";
                        for (let i in echarts_obj) {
                            colorArrStr = colorArrStr + "&nbsp;&nbsp;下拉框:<a>" + echarts_obj[i].name + "</a>";
                        }
                        $("#dataIdGroup").append(headStr + colorArrStr + ending);
                    } else {
                        $("#dataIdGroup").append("<p class='deviceIdAndDataId'>数据ID:<a>" + realTimeDataId + "</a>&nbsp;&nbsp;数据点名称:<a>" + realTimeDataName + "</a>&nbsp;&nbsp;设备名称:<a>" + checkedModel[0].name + "</a>&nbsp;&nbsp;下拉框:<a>未选择</a>&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: " + color + "' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + realTimeDataName + "\")'>移除</button>&nbsp;&nbsp;</p>");
                    }
                    if (checkedModel.length > 0) {
                        echartsArr.push({
                            "dataId": realTimeDataId,
                            "describe": realTimeDataName,
                            "color": color,
                            "grade": realTimeDataId,
                            "config": checkedModel[0],
                            "selectOption": echarts_obj
                        });
                    } else {
                        alert("请选择设备类型")
                    }
                } else {
                    alert("请勿重复添加！")
                }
            } else {//如果为空不进行其他操作，直接保存进入echartsArr数组，并且拼接标签
                let id = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                if (echarts_obj.length > 0) {
                    let headStr = "<p class='deviceIdAndDataId'>数据ID:<a>" + realTimeDataId + "</a>&nbsp;&nbsp;数据点名称:<a>" + realTimeDataName + "</a>&nbsp;&nbsp;设备名称:<a>" + checkedModel[0].name + "</a>&nbsp;&nbsp;下拉框:";
                    let ending = "&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: " + color + "' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + realTimeDataName + "\")'>移除</button>&nbsp;&nbsp;</p>";
                    let colorArrStr = "";
                    for (let i in echarts_obj) {
                        colorArrStr = colorArrStr + "<a>" + echarts_obj[i].name, +"</a>";
                    }
                    $("#dataIdGroup").append(headStr + colorArrStr + ending);
                } else {
                    $("#dataIdGroup").append("<p class='deviceIdAndDataId'>数据ID:<a>" + realTimeDataId + "</a>&nbsp;&nbsp;数据点名称:<a>" + realTimeDataName + "</a>&nbsp;&nbsp;设备名称:<a>" + checkedModel[0].name + "</a>&nbsp;&nbsp;下拉框:<a>未选择</a>&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: " + color + "' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + realTimeDataName + "\")'>移除</button>&nbsp;&nbsp;</p>");
                }
                if (checkedModel.length > 0) {
                    echartsArr.push({
                        "dataId": realTimeDataId,
                        "describe": realTimeDataName,
                        "grade": realTimeDataId,
                        "color": color,
                        "config": checkedModel[0],
                        "selectOption": echarts_obj
                    });
                } else {
                    alert("请选择设备类型")
                }
            }
        } else {
            alert("请填写完整！")
        }
    })

    //！！！！！！！！对编辑完成的配置进行保存
    $("#save-echarts-config").click(function () {
        let labelId = $("#echarts-edit").val();
        let realTimeDeviceTitle = $("#realTimeDeviceTitle").val();
        let refreshTagsModelData = $("#refreshTagsModelData").val();
        let json = {
            "labelId": labelId,
            "echartsTitle": realTimeDeviceTitle,
            "refreshTagsModelData": refreshTagsModelData,
            "list": echartsArr,
        };
        let type = "echarts";
        let title = $("#hide-titleId").val();
        let modal = 'myModal-head';
        saveEditData(json, modal, type, titleId, "");//调用公用保存方法
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
        for (let x in echartsConfig) {
            if (titleId == echartsConfig[x].whichOneArea && echartsConfig[x].area == $("#areaId").val()) {
                let list = echartsConfig[x].value.list;
                $("#refreshTagsModelData").val(echartsConfig[x].value.refreshTagsModelData);
                echartsArr = list;
                if (list.length > 0) {
                    $("#dataIdGroup").empty();
                    for (let i in list) {
                        if (list[i].selectOption.length > 0) {
                            let selectOption = list[i].selectOption;
                            let colorArrStr = "";
                            for (let i in selectOption) {
                                if (i == selectOption.length - 1) {
                                    colorArrStr = colorArrStr + selectOption[i].name;
                                } else {
                                    colorArrStr = colorArrStr + selectOption[i].name + ",";
                                }

                            }
                            $("#dataIdGroup").append("<p class='deviceIdAndDataId'>数据ID:<a>" + list[i].dataId + "</a>&nbsp;&nbsp;数据点描述:<a>" + list[i].describe + "</a>&nbsp;&nbsp;设备名称:<a>" + list[i].config.name + "</a>&nbsp;&nbsp;下拉框:<a>" + colorArrStr + "</a>&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: " + list[i].color + "' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + list[i].describe + "\")'>移除</button>&nbsp;&nbsp;</p>");
                        } else {
                            $("#dataIdGroup").append("<p class='deviceIdAndDataId'>数据ID:<a class='checkedWhichArea select-a' id='" + list[i].dataId + "'>" + list[i].dataId + "</a>&nbsp;&nbsp;数据点描述:<a class='checkedWhichArea select-a' id='" + list[i].describe + "'>" + list[i].describe + "</a>&nbsp;&nbsp;设备型号:<a class='checkedWhichArea select-a' id='" + list[i].config.id + "'>" + list[i].config.name + "</a>&nbsp;&nbsp;下拉框:<a class='checkedWhichArea select-a' >未选择</a>&nbsp;&nbsp;颜色:<input  class='selectColor' type='button' readonly style='border: 1px solid;border-radius: 4px;width: 25px;cursor: pointer;background-color: " + list[i].color + "' onclick='reloadColor()'>&nbsp;&nbsp;<button id='removeDeviceIdAndDataId'onclick='removeSelect(\"" + list[i].describe + "\")'>移除</button>&nbsp;&nbsp;</p>");
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
 * 主接线图   点击事件
 */
function getZJXT() {
    var h_1 = document.getElementById("base_menu_bar");
    var h_2 = h_1.getElementsByTagName('a');
    for (var i in h_2) {
        if (document.getElementById(h_2[i].id)) {
            document.getElementById(h_2[i].id).style.background = "";
        }
    }
    document.getElementById("zjxt").style.background = "#337ab7";
    $("#yzc_mainView .row").hide();
    $("#yzc_mainView iframe").remove();
    $("#yzc_mainView").append($("<iframe src='http://119.3.171.138:8080/ht-for-web/ht/skipShow?id=111'></iframe>"))
}


/**
 * 点击横幅初始化当前区域和对应的横幅下的数据
 */
// debugger
function clickTitleId(whichOneArea, name) {
    $("#myIframe").hide();  //影藏该元素

    //取消由setInterval()方法设置的定时器
    window.clearInterval(refreshDT_status1);
    window.clearInterval(refreshDT_Echarts);
    window.clearInterval(refreshDT_status2);
    window.clearInterval(refreshDT_Head_DATA)

    //?????????????暂无用
    for (let i in divIdListClear) {
        $("#" + divIdListClear[i]).text("0");
    }
    //?????????????暂无用
    for (let i in singleEmpty) {
        $("#" + singleEmpty[i]).empty();
    }
    for (let i in divIdListEmpty) {
        $("#" + divIdListEmpty[i]).empty();
    }

    //?????????????暂无用
    for (let i in divIdListHide) {
        $("#" + divIdListHide[i]).hide();
    }
    //?????????????暂无用
    for (let i in refreshDT_DEVICE_DATAList) {
        window.clearInterval(refreshDT_DEVICE_DATAList[i])
    }

    checkedWhichArea = [];
    arr1 = [];
    selects = [];
    arr = [];
    echartsArr = [];
    checkedModel = [];
    divInfo = [];
    hwTypeMap = new Map();
    if (titleBackgroundId) {
        $("#" + titleBackgroundId + " a").css("background", "");
    }
    let id = whichOneArea;//因为id和whichOneArea相同所以直接使用whichOneArea
    titleBackgroundId = whichOneArea;
    $("#" + id + " a").css("background", "#337ab7");
    //document.getElementById(id).style.background="#337ab7"
    titleName = name;
    titleId = whichOneArea;//点击横幅的按钮的Id
    let areaId = $("#areaId").val();
    //.each  jQuery 遍历
    $("#DT_Device div").each(function () {
        $(this).remove();
    })

    //！！！！！！！！！！！非法电区
    if (whichOneArea == "DEV_FFDQ") {
        $("#hw-gz").hide();
        $("#echarts_show_div").hide();
        $("#select_show_div").hide();
        $("#running_status").hide();
        $("#single-div").hide();
        $("#f_div_1").show();
        $("#f_div_2").show();
        $("#f_div_3").show();
        $("#f_div_4").show();
        let d1 = []
        for (let i = 1; i < 41; i++) {
            d1.push((1000 + i).toString());
        }
        let obj1 = {
            yc: d1
        }
        reloadDT_DEVICE_DATA_1("AB001", obj1, "2", "f_div_1", 1, "环境监测仪");

        let d2 = []
        for (let i = 1; i < 63; i++) {
            d2.push((1000 + i).toString());
        }
        let obj2 = {
            yc: d2
        }
        reloadDT_DEVICE_DATA_1("AD001", obj2, "2", "f_div_2", 1, "电能质量");
        let d3 = []
        for (let i = 1; i < 63; i++) {
            d3.push((1000 + i).toString());
        }
        let obj3 = {
            yc: d3
        }
        reloadDT_DEVICE_DATA_1("AE001", obj3, "2", "f_div_3", 1, "光伏开关柜");
        let d4 = []
        for (let i = 1; i < 15; i++) {
            d4.push((1000 + i).toString());
        }
        let d5 = []
        for (let i = 1; i < 14; i++) {
            d5.push((2000 + i).toString());
        }
        let obj4 = {
            yc: d3,
            yx: d5
        }
        reloadDT_DEVICE_DATA_1("AC001", obj4, "2", "f_div_4", 2, "防孤岛装置");
        $('iframe').hide(); //接线图
    } else if (whichOneArea == "yzc_mainView") {//接线图
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
    } else if (whichOneArea == "NBQ_SERI") {
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
        let json = {'tags': [area, titleBackgroundId,], 'partyId': '208060df-d0fa-44bb-8fa3-d468b97d164a'};
        var settings = postRunAsyncToFSetting(urlNBQ_SERIGetKey, JSON.stringify(json));
        $.ajax(settings).done(function (response) {
            tagsMap = new Map();
            if (response.obj) {
                let list = response.obj.list;
                if (list.length) {
                    let tags = response.obj.list[0].tags;
                    for (let i in tags) {
                        tagsMap.set(tags[i], "1");
                    }
                }
            }
        })
        initStatus();//初始化状态框(正常运行、异常运行、故障率)
        reloadGZ(titleId);
        findEcharts(area, whichOneArea)
    }
}


/***
 * ！！！！！！
 * 加载规则事件
 */
function reloadGZ(whichOneArea) {
    window.clearInterval(refreshGZ_1);
    $("#showGzAlert").empty();
    $("#rightTitle").html("");

    var param = {
        "type": "regulation",
        "whichOneArea": whichOneArea,
        "area": $("#areaId").val()
    }
    var data = postForUIJson(urlHeadShow, param);
    if (data.length > 0) {
        var refreshGZ = data[0].value.refreshGZ;
        if (data[0].value.dataIdArray) {
            var dataIdArray = data[0].value.dataIdArray;
            var models = [];
            for (var i in dataIdArray) {
                if (models.length == 0) {
                    let d = []
                    d.push(dataIdArray[i].dataId)
                    var _mdlObj = {
                        _mdl: dataIdArray[i].type[0].id,
                        d: d
                    }
                    models.push(_mdlObj);
                } else {
                    var count = 0;
                    var index = 0;
                    for (let o in models) {
                        if (models[o]._mdl == dataIdArray[i].type[0].id) {
                            count = 1;
                            index = o;
                            break;
                        }
                    }
                    if (count > 0) {
                        var _mdlObj = models[index];
                        _mdlObj.d.push(dataIdArray[i].dataId)
                    } else {
                        let d = [];
                        d.push(dataIdArray[i].dataId)
                        var _mdlObj = {
                            _mdl: dataIdArray[i].type[0].id,
                            d: d
                        }
                        models.push(_mdlObj);
                    }
                }

            }
            let yzckey = $('#areaId').val();
            if (models.length > 0) {
                let params = "{models:" + JSON.stringify(models) + ",partyId:'208060df-d0fa-44bb-8fa3-d468b97d164a',objTags:['" + whichOneArea + "','" + yzckey + "'],outSet:'NK001',isRT:true}"
                let settings = postRunAsyncToFSetting(urlAlertData, params);
                $("#rightTitle").html(data[0].value.title);
                var table = $("<table class='table table-bordered' id='gzTable'><thead><tr><th>设备名称</th><th>型号描述</th><th>型号</th><th>规则描述</th><th>时间</th></tr></thead></table>");
                reloadGZ_Data(settings, table, data);
                if (parseFloat(refreshGZ) > 0) {
                    window.clearInterval(refreshGZ_1);
                    refreshGZ_1 = window.setInterval(function () {
                        reloadGZ_Data(settings, table, data);
                    }, parseFloat(refreshGZ) * 1000)
                }
            }
        }
    }
}


/***
 * ！！！！！！！！！
 *加载规则数据
 * @param settings
 * @param table
 * @param data
 */
function reloadGZ_Data(settings, table, data) {

    $("#gzTable tbody").empty();
    $("#flipCver").empty()
    $.ajax(settings).done(function (response) {
        if (response.resMsg != "未找到匹配信息") {
            if (data[0].value.dataIdArray) {
                var dataIdArray = data[0].value.dataIdArray;
                for (var i in dataIdArray) {
                    for (var j in response.obj.list) {
                        if (dataIdArray[i].dataId == response.obj.list[j].d) {
                            switch (dataIdArray[i].selectGZ) {
                                case ">":
                                    if (parseFloat(response.obj.list[j].v) > parseFloat(dataIdArray[i].gzValue)) {
                                        var tr = $("<tr><th>" + response.obj.list[j].wExt.hwName + "</th><th>" + response.obj.list[j].wExt.descr + "</th><th>" + dataIdArray[i].type[0].name + "</th><th>" + dataIdArray[i].gzName + ">" + dataIdArray[i].gzValue + "当前为：" + response.obj.list[j].v + "</th><th>" + formatDate(response.obj.list[j].t) + "</th></tr>");
                                        table.append(tr);
                                    }
                                    break;
                                case "<":
                                    if (parseFloat(response.obj.list[j].v) < parseFloat(dataIdArray[i].gzValue)) {
                                        var tr = $("<tr><th>" + response.obj.list[j].wExt.hwName + "</th><th>" + response.obj.list[j].wExt.descr + "</th><th>" + dataIdArray[i].type[0].name + "</th><th>" + dataIdArray[i].gzName + "<" + dataIdArray[i].gzValue + "当前为：" + response.obj.list[j].v + "</th><th>" + formatDate(response.obj.list[j].t) + "</th></tr>");
                                        table.append(tr);
                                    }
                                    break;
                                case ">=":
                                    if (parseFloat(response.obj.list[j].v) >= parseFloat(dataIdArray[i].gzValue)) {
                                        var tr = $("<tr><th>" + response.obj.list[j].wExt.hwName + "</th><th>" + response.obj.list[j].wExt.descr + "</th><th>" + dataIdArray[i].type[0].name + "</th><th>" + dataIdArray[i].gzName + ">=" + dataIdArray[i].gzValue + "当前为：" + response.obj.list[j].v + "</th><th>" + formatDate(response.obj.list[j].t) + "</th></tr>");
                                        table.append(tr);
                                    }
                                    break;
                                case "<=":
                                    if (parseFloat(response.obj.list[j].v) <= parseFloat(dataIdArray[i].gzValue)) {
                                        var tr = $("<tr><th>" + response.obj.list[j].wExt.hwName + "</th><th>" + response.obj.list[j].wExt.descr + "</th><th>" + dataIdArray[i].type[0].name + "</th><th>" + dataIdArray[i].gzName + "<=" + dataIdArray[i].gzValue + "当前为：" + response.obj.list[j].v + "</th><th>" + formatDate(response.obj.list[j].t) + "</th></tr>");
                                        table.append($("<tbody></tbody>").append(tr));
                                    }
                                    break;
                                case "<<":
                                    var gzValue = dataIdArray[i].gzValue;
                                    if (gzValue.length > 0) {
                                        var gzValueList = gzValue.split(",");
                                        if (gzValueList.length == 0) {
                                            gzValueList = gzValue.split("，");
                                        }
                                        var minValue = gzValueList[0];
                                        var maxValue = gzValueList[1];
                                        if (minValue && maxValue) {
                                            if (parseFloat(response.obj.list[j].v) < parseFloat(minValue) || parseFloat(response.obj.list[j].v) > parseFloat(maxValue)) {
                                                var tr = $("<tr><th>" + response.obj.list[j].wExt.hwName + "</th><th>" + response.obj.list[j].wExt.descr + "</th><th>" + dataIdArray[i].type[0].name + "</th><th>" + minValue + "&lt" + dataIdArray[i].gzName + "&lt" + maxValue + "当前为：" + response.obj.list[j].v + "</th><th>" + formatDate(response.obj.list[j].t) + "</th></tr>");
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
        }
    })
}


//!!!!!!!!!!!!赋值echartsConfig
function findEcharts(areaData, oneArea) {
    var param = {
        "area": areaData,
        "whichOneArea": titleId,
        "type": "echarts",
    }

    var data = postForUIJson(urlHeadShow, param);
    if (data != null) {
        $("#select_show_div").empty
        echartsConfig = [];
        echartsConfig = data;
        let objName = [];
        objName.push({"value": oneArea, "obj": oneArea})
        for (let ec in data) {//echartsConfig是在初始化的时候在数据库中查询到的echarts配置的数据信息
            let refreshTagsModelData = data[ec].value.refreshTagsModelData;
            let echartsDType = [];
            let eList = data[ec].value.list;
            for (let ecl in eList) {
                let echartsTypeConfig = eList[ecl].config;
                echartsDType.push(echartsTypeConfig.id);
                echartsColorMap.set(eList[ecl].describe, eList[ecl].color);
            }
            if (ec == data.length - 1) {
                if (echartsDType.length > 0) {
                    window.clearInterval(refreshDT_Echarts);//创建定时
                    if (parseInt(refreshTagsModelData) > 0) {//如果存在刷新周期的值就定时刷新
                        refreshDT_Echarts = window.setInterval(function () {
                            initEchartsData(echartsDType, "initEcharts", objName, data[0].value.labelId);
                        }, parseInt(refreshTagsModelData) * 1000);
                        initEchartsData(echartsDType, "initEcharts", objName, data[0].value.labelId);
                    }
                }
            }
        }
    }
}


