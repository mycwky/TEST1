var breakdown = 0;
var amount = "";//总数
/**
 * 常规方法
 * @param wdArr 设备ID+数据ID的JSON数组
 * @param list 数据库的所需部分数据
 */
function routineFun(wdArr,list) {
    if(list){
        if(list.area == $("#areaId").val()){
            divIdListClear.push(list.divId)
            //调用接口获取数据
            let wdList = [];
            for(let i in wdArr){
                if(wdArr[i].w != ""){
                    wdList.push({"w":wdArr[i].w,"d":wdArr[i].d})
                }
            }
            let json = {"wd":wdList, "isRT":true, "partyId":'208060df-d0fa-44bb-8fa3-d468b97d164a',"outSet": "NK001"}
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
                if(response.obj.list.length > 0){
                    let data = response.obj.list[0];
                    let whichOneArea =titleId;
                    let area = $("#areaId").val();
                    if(list.whichOneArea == whichOneArea && list.area == area){
                        if(data.w == list.w && data.d == list.d){
                            if(data.v){
                                amount = data.v;
                                $("#"+list.divId).text(data.v);
                            }else{
                                $("#"+list.divId).text("0");
                            }
                        }
                    }
                }else{
                    $("#"+list.divId).text("0");
                }
            })
        }
    }
}

/**
 * 计算出现异常的台数的函数
 */
function exceptionFun(data) {
    if(data.area == $("#areaId").val()){
        let boolean = false;
        if(statusList.length > 0){
            breakdown = 0;
            let map = new Map();
            for(let s in statusList){
                let hwName = statusList[s].wExt.hwName;
                let tags = statusList[s].wExt.tags;
                let evL = statusList[s].dExt.evL;
                if(statusList[s].v == "1"){
                    if(evL.indexOf("alert")!=-1 || evL.indexOf("fault")!=-1){
                        if(hwName.indexOf(data.titleName)!=-1){
                            for(let t in tags){
                                if(tags[t] == data.area){
                                    boolean = true;
                                    map.set(statusList[s].w,evL);
                                }
                            }
                        }
                    }
                }
            }
            breakdown = map.size;
            breakdown = breakdown+"";
            $("#"+data.divId).text(breakdown.toString());
        }else{
            $("#"+data.divId).text("0");
        }
        divIdListClear.push(data.divId)
    }
}

/**
 * 故障率计算函数
 */
function failureRateFun(data) {
    if(data.area == $("#areaId").val()){
        divIdListClear.push(data.divId)
        if(amount != null && amount != "" && breakdown != "" && breakdown != null){
            let sum = (parseInt(breakdown)/parseInt(amount));
            let num = sum * 100;
            $("#"+data.divId).text(num.toFixed(2));
        }else{
            $("#"+data.divId).text("0");
        }
    }
}