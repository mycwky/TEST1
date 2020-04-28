var NoUpdateInt = [];

var tableUpdate = true;


$(function() {
    setInterval("getTime();", 1000); //每隔一秒运行一次
})

//取得系统当前时间
function getTime() {
    var myDate = new Date();
    var hours = ("0" + myDate.getHours()).substr(-2);
    var minutes = ("0" + myDate.getMinutes()).substr(-2);
    var seconds = ("0" + myDate.getSeconds()).substr(-2);

    $("#showTime").html(hours + ":" + minutes + ":" + seconds); //将值赋给div
}


function reTableUpdate() {

    tableUpdate = true;
    $("a.reTableUpdate").remove();


}

function PagerChange(obj) {

    /*以下处理点页面时 不刷新*/

    $(obj).parents("nav").eq(0).prevAll("table[url]").eq(0).attr("noupdate", "1");

    tableUpdate = false;

    var nav = $(obj).parents("nav").eq(0);
    var currentPageIndex = parseInt(nav.find("li.active").text());
    var pages = parseInt(nav.find("li").eq(-2).text());
    var pageIndex = 0;




    //如果是点击的上、下页
    if ($(obj).attr("aria-label")) {
        pageIndex = currentPageIndex + ($(obj).attr("aria-label") == "Previous" ? -5 : 5);
        if (pageIndex <= 0) {
            pageIndex = 1;
        }

        if (pageIndex > pages) {
            pageIndex = pages;
        }
    } else {
        pageIndex = parseInt($(obj).text());
    }


    if (nav.nextAll("a.reTableUpdate").length == 0) {

        nav.after("<a class='reTableUpdate' href='javascript:reTableUpdate();'>重启刷新</a>")
    }


    nav.find("li.active").removeClass("active");
    nav.find("li:not(.blankPage)").eq(pageIndex).addClass("active");

    $("table[pager='" + nav[0].id + "']").each(function(tabInd, tab) {

        $(tab).find("tbody").length == 0 && $(tab).find("tr:gt(0)").addClass("hide") ||
            $(tab).find("tbody tr").addClass("hide");

        var pageSize = parseInt($(tab).attr("pageSize") || "20");

        $(tab).attr("pageIndex", pageIndex - 1);

        var fromIndex = (pageIndex - 1) * pageSize;

        $(tab).find("tbody").length == 0 && $(tab).find("tr:gt(" + (fromIndex + 1) + "):lt(" + pageSize + ")").removeClass("hide") ||
            $(tab).find("tbody tr:gt(" + (fromIndex - 1) + "):lt(" + pageSize + ")").removeClass("hide");
        if (fromIndex == 0) {
            $(tab).find("tbody tr:lt(" + pageSize + ")").removeClass("hide");
        }

    });

    //如果是带缩的页码，就添加省略号
    if ($(obj).parents("ul").eq(0).find("li.hide").length > 0) {

        //先全隐藏
        nav.find("ul>li").addClass("hide");

        //显示前1，后1页
        nav.find("ul>li").eq(-3).nextAll().removeClass("hide");
        nav.find("ul>li").eq(2).prevAll().removeClass("hide");
        ++pageIndex;

        //显示当前页码前2后2
        for (var i = pageIndex - 2; i <= pageIndex + 2; i++) {
            if (i < 4) {
                nav.find("ul>li").eq(i + 1).prevAll().removeClass("hide");
                continue;
            }

            if (i + 3 > pages) {
                nav.find("ul>li").eq(i - 1).nextAll().removeClass("hide");
                continue;
            }

            nav.find("ul>li").eq(i).removeClass("hide");
        }

        //不连续的页码用省略号填充
        nav.find("li.blankPage").remove();

        var lastPage = 0;
        nav.find("li").not(".hide").not(":has(a[aria-label])").not('.blankPage').each(function(i, d) {
            console.log(i + ":" + d.outerHTML);
            currentPage = parseInt($(d).text());
            console.log("last:" + lastPage + ",curr:" + currentPage);
            if (lastPage != 0 && currentPage != lastPage + 1 && currentPage != 1) {
                $(d).before("<li class='blankPage'><a href='javascript:void(0)'>...</a></li>");
                console.log("*");

            }

            lastPage = currentPage;
        });

    }



}

//初始化简单分页组件
function initPager() {

    $("nav.SolarisPager").each(function(ind, nav) {

        var maxPages = 0;

        $(nav).css("display", "inline-block");

        $("table[pager='" + nav.id + "']").each(function(tabInd, tab) {


            $(tab).find("tbody tr").addClass("hide");
            if ($(tab).find("tbody").length == 0) {
                $(tab).find("tr:gt(0)").addClass("hide");
            }

            $(tab).removeClass("hide");

            var pageSize = parseInt($(tab).attr("pageSize") || "20");
            var pageIndex = parseInt($(tab).attr("pageIndex") || "0");

            var pages = Math.ceil(($(tab).find("tbody tr").length) / pageSize);

            if ($(tab).find("tbody").length == 0) {
                pages = Math.ceil(($(tab).find("tr").length - 1) / pageSize);
            }

            maxPages = ((pages > maxPages && pages) || maxPages);

            if ($(tab).find("tbody").length > 0) {

                $(tab).find("tbody tr:lt(" + pageSize + ")").removeClass("hide");
            } else {
                $(tab).find("tr:lt(" + (pageSize + 1) + ")").removeClass("hide");
            }
        });

        //表格后面如果有分页组件就定义一下
        if (maxPages >= 2) {

            var pageHTML = '\
                 <ul class="pagination" style = "font-size:12px" >\
                        <li><a href="javascript:void(0);" aria-label="Previous" onclick="PagerChange(this);"><span aria-hidden="true">«</span></a></li>\
                        <li class="active"><a href="javascript:void(0);"  onclick="PagerChange(this);">1</a></li>\
                        <li><a href="javascript:void(0);"  onclick="PagerChange(this);">2</a></li>\
                        <li><a href="javascript:void(0);"  onclick="PagerChange(this);" aria-label="Next"><span aria-hidden="true">»</span></a></li>\
                        </ul>';

            nav = $(nav);

            nav.html(pageHTML);

            for (var i = 3; i <= maxPages; i++) {
                nav.find("ul>li").last().before("<li class='hide'><a href='javascript:void(0);'  onclick='PagerChange(this);'>" + i + "</a></li>");
            }

            //显示前3，后3页
            nav.find("ul>li").eq(-5).nextAll().removeClass("hide");
            nav.find("ul>li").eq(4).prevAll().removeClass("hide");

            //如果一共有9页，就全部显示
            if (nav.find("ul>li.hide").length <= 3) {
                nav.find("ul>li.hide").removeClass("hide");
            } else {
                nav.find("ul>li").eq(4).before("<li class='blankPage'><a href='javascript:void(0)'>....</a></li>"); //中间就使用...代替
            }

        } else {

            $(nav).html("");
        }


    });

}


function errorFunc(jqXHR, textStatus, errorThrown) {

    console.log("Error in Ajax:" + jqXHR.status + ":" + jqXHR.statusText + "\r\n" + jqXHR.responseText + "\r\n" + textStatus);

}



//刷新UL
function updateUL(obj) {



    $.ajax({
        url: $(obj).attr('url'),
        success: function(listData) {

            if (typeof(listData) != "object") {
                try {
                    listData = $.parseJSON(listData);
                } catch (error) {
                    console.log('error in Parse:' + listData);
                    console.log(error.message);
                }
            }

            $(obj).html('');
            $.each(listData, function(i, d) {
                $(obj).append('<li>' + d + '</li>');
            });

        }
    });

}

//刷新表格的数据
function updateTable(obj) {

    if (!tableUpdate) { return; }


    var colNum = $(obj).find("tr").first().find("td,th").length;

    $.ajax({

        url: $(obj).attr("url"),
        success: function(data) {
            // console.log("table:" + data);
            //try {



            if (typeof(data) != "object") {
                try {
                    data = $.parseJSON(data);
                } catch (err) {
                    console.log(err.message);
                    return false;
                }
            }


            //给数据手工排序,给箱变的列表数据手工排序
            if (obj.id == 'transformer_area_list_table') {

                //进行排序保证显示顺序一样xx
                var compare = function(obj1, obj2) {

                    var val1 = obj1[1].replace(/\d+/g, function(num) {
                        return ("0000000000000000" + num).substr(-3);
                    });
                    var val2 = obj2[1].replace(/\d+/g, function(num) {
                        return ("0000000000000000" + num).substr(-3);
                    });



                    if (val1 < val2) {
                        return -1;
                    } else if (val1 > val2) {
                        return 1;
                    } else {
                        return 0;
                    }

                }


                data = data.sort(compare);


            }

            if (data) {

                console.log($(obj).attr("url") + 'table:\n' + JSON.stringify(data));

                $(obj).attr("pageData", JSON.stringify(data));

                //处理有筛选的行
                //如果table 有.tableFilter的tr,那么就添加相应的筛选下拉框
                $(obj).find("tr.tableFilter").each(function() {

                    if (data.length == 0) {
                        return false;
                    }

                    var filterTR = this;
                    $(filterTR).find("th,td").each(function(col, obj) {
                        if (this.tagName.toLowerCase() == "th" && $(this).find("select,input").length == 0) {

                            $(this).append("<select class='form-control'></select>");
                            var obj_select = $(this).find("select")[0];
                            $(obj_select).append("<option>-所有-</option>");
                            var inLineOptions = [];
                            col = col % data[0].length;
                            $.each(data, function(i, d) {
                                if (inLineOptions.find(a => a == d[col]) == undefined) {
                                    inLineOptions.push(d[col]);
                                    $(obj_select).append("<option>" + d[col] + "</option>");
                                }
                            });

                            $(obj_select).change(function() {

                                var tabl = $(this).parents("table").first();
                                var typeValue = $(this).val();
                                var colIndex = $(this).parent().index();

                                var pageData = data;

                                $(tabl).find("tbody").html("");

                                $.each(pageData, function(ind, row) {
                                    if (row[colIndex].indexOf(typeValue) >= 0 || typeValue.indexOf('所有') >= 0) {
                                        $(tabl).find("tbody").append("<tr></tr>");
                                        $.each(row, function(col, cell) {
                                            $(tabl).find("tbody tr:last").append("<td>" + cell + "</td>");
                                        });
                                    }
                                });

                                initPager();

                            });

                        }
                    });

                });

                $(obj).attr("pageIndex", "0");

                var pageSize = parseInt($(obj).attr("pageSize") || "600") * parseInt($(obj).attr("columns") || "1");
                var pageIndex = parseInt($(obj).attr("pageIndex") || "0");
                var pageCol = parseInt($(obj).attr("columns") || "1"); //共有几栏



                var currentCol = 0; //当前是第几栏

                var currentColMaxRow = Math.ceil(data.length / pageCol);

                if (currentColMaxRow > parseInt($(obj).attr("pageSize") || "600")) {

                    currentColMaxRow = parseInt($(obj).attr("pageSize") || "600"); //当前列最大几行

                }

                var currentRow = 0; //当前第几行

                //除了第1行，其它全清空
                $(obj).find("tbody tr").not(".tableFilter").remove();

                $(obj).find("tr").first().nextAll().not(".tableFilter").remove();

                if ($(obj).find("tbody").length == 0) {
                    $(obj).append("<tbody></tbody>");
                }

                obj = $(obj).find("tbody")[0];


                console.log($(obj).parent()[0].id);

                $.each(data, function(ind, row) {

                    //当需要换新分栏时
                    if ((currentRow + 1) % currentColMaxRow == 1 && currentRow != 0) {

                        ++currentCol;

                        if (currentCol % pageCol == 0) {
                            currentCol = 0;


                        } else {
                            currentRow -= parseInt(currentColMaxRow);

                        }

                        //currentColMaxRow = Math.ceil((pageSize - ind % pageSize) / (pageCol - currentCol));

                    }

                    if (currentCol == 0) {

                        $(obj).append("<tr></tr>");

                    }


                    /*
                     console.log('currentCol:' + currentCol + ' '+
                        'currentColMaxRow:' + currentColMaxRow + ' ' +
                        'currentRow:' + currentRow + " "+
                        'ind:' + ind
                    );*/






                    $.each(row, function(ci, cell) {
                        var headText = $(obj).parent().find("thead tr:first").find("td,th").eq(ci + row.length * currentCol).text().trim();
                        var classString = $(obj).parent().find("thead tr:first").find("td,th").eq(ci + row.length * currentCol).attr("class");
                        //console.log(headText);
                        //如果是告警窗口那么直接就
                        if ($(obj).parent()[0].id == 'base_nav_text_alert_table' && ci == 1 && window.location.pathname.toLowerCase().indexOf('/areahome') >= 0) {
                            $(obj).find("tr").eq(currentRow).append("<td><a href='/" + row[0] + "/change_bysid/'>" + cell + "</a></td>");
                        } else {
                            if (headText == '功率') {
                                cell += 'kW';
                            }

                            $(obj).find("tr").eq(currentRow).append("<td>" + cell + "</td>");
                            $(obj).find("tr").eq(currentRow).find("td:last").attr("class", classString);

                        }


                    });

                    ++currentRow;
                });

                var pages = Math.ceil(data.length / pageSize);

                initPager();
                /*

                if ($(obj).nextAll("nav").not(".SolarisPager").length > 0) {

                    $(obj).nextAll("nav").html("");

                    //表格后面如果有分页组件就定义一下
                    if (pages >= 2) {

                        var pageHTML = '<ul class="pagination" style="font-size:12px">\
                                    <li><a href="javascript:void(0);" aria-label="Previous" onclick="tablePageChange(this);"><span aria-hidden="true">«</span></a></li>\
                                    <li class="active"><a href="javascript::void(0);"  onclick="tablePageChange(this);">1</a></li>\
                                    <li><a href="javascript:void(0);"  onclick="tablePageChange(this);">2</a></li>\
                                    <li><a href="javascript:void(0);"  onclick="tablePageChange(this);" aria-label="Next"><span aria-hidden="true">»</span></a></li>\
                                    </ul>';

                        $(obj).nextAll("nav").eq(0).html(pageHTML);

                        nav = $(obj).next("nav");
                        for (var i = 3; i <= pages; i++) {
                            nav.find("ul>li").last().before("<li class='hide'><a href='javascript:void(0);'  onclick='tablePageChange(this);'>" + i + "</a></li>");
                        }

                        //显示前3，后3页
                        nav.find("ul>li").eq(-5).nextAll().removeClass("hide");
                        nav.find("ul>li").eq(4).prevAll().removeClass("hide");

                        //如果一共有9页，就全部显示
                        if (nav.find("ul>li.hide").length <= 3) {
                            nav.find("ul>li.hide").removeClass("hide");
                        }
                        else {
                            nav.find("ul>li").eq(4).before("<li class='blankPage'><a href='javascript:void(0)'>....</a></li>"); //中间就使用...代替
                        }

                    }

                }*/

            }

            // } catch (e) {
            //   console.log("Error:" + e.message);
            //}
        }
    });

}

var optionList = [];

function selectFilter(sourceObj) {

    var target = $("#" + $(sourceObj).attr("to"));
    var targetList = optionList.find(ht => ht.select == target[0].id)
    if (targetList == undefined) {
        var options = []
        target.find("option").each(function(i, d) {
            options.push(d.outerHTML);
        });

        targetList = { select: target[0].id, options: options };
        optionList.push(targetList);
    }

    target.html("");
    $.each(targetList.options, function(i, d) {
        if ($(d).attr("upid") == $(sourceObj).val()) {
            target.append(d);
        }
    });

    target.trigger("change");

}


$(document).ready(function() {

    //leftUrl的初始值
    $("div[leftUrl][for]").each(function() {

        $(this).attr("url", $(this).attr("leftUrl") + $("#" + $(this).attr("for")).val());

    });

    //列表高反效果
    $("#transformer_area_list_table").on("mousemove", "td", function() {

        $(this).parents("table").eq(0).find("td").removeClass("onover");


        $(this).addClass("onover");
        $(this).prevUntil(".hide").addClass("onover");
        $(this).nextUntil(".hide").addClass("onover");

    }).on("mouseout", "td", function() {
        $(this).removeClass("onover");
        $(this).prevUntil(".hide").removeClass("onover");
        $(this).nextUntil(".hide").removeClass("onover");
    });


    //select 初次装载
    $("select[to]").each(function() {
        selectFilter(this);
    }).change(function() {
        selectFilter(this);
    });



    //如果是业主就显示树
    if ($("#siteTree").val() != '' && $("#siteTree").val() != '[]') {
        var json = JSON.parse($("#siteTree").val());
        $("#base_nav_stationlist").hide();
        $("#base_nav_stationlist_tree").treeview({ showBorder: false, data: json, backColor: 'white', enableLinks: true });
    }



    $(".charGrid[htmlurl]").each(function() {
        var obj = $(this)[0];
        setInterval2(function() {
            updateChart(obj);
        }, 1000 * parseInt($(obj).attr("time") || 60));

    });

    if ($(".textUrl[url]").length > 0) {
        //刷新数字
        setInterval2(function() {
            $.ajax({
                url: $(".textUrl").attr("url"),
                success: function(getData) {
                    if (getData) {

                        try {
                            if (typeof(getData) != "object") {
                                getData = JSON.parse(getData);
                            }

                            $("span[dict]").each(function() {
                                $(this).html(getData[$(this).attr("dict")]);

                            });
                        } catch (e) {
                            console.log("Error:" + e.message);
                        }
                    }
                }
            });

        }, 60 * 1000);
    }


    //图形的刷新
    $(".charGrid[url]").each(function() {
        var obj = $(this)[0];
        setInterval2(function() {
            updateChart(obj);
        }, 1000 * (parseInt($(obj).attr("time") || 60)));

    });

    //UL的刷新
    $("ul[url]").each(function() {
        var obj = $(this)[0];
        setInterval2(function() {
            updateUL(obj);
        }, 1000 * (parseInt($(obj).attr("time") || 60)));

    });


    //含有表格的面板后台刷新
    $("table[url]").each(function() {

        //console.log(colNum);

        var obj = $(this)[0];

        if ($(obj).attr("time") == "0") {
            updateTable(obj);
        } else {
            setInterval2(function() {
                updateTable(obj);
            }, parseInt($(obj).attr("time") || "60") * 1000);
        }
    });


    //select后台
    $("select[url]").each(function() {
        var obj = $(this)[0];
        $.ajax({
            url: $(obj).attr("url"),
            success: function(getData) {
                if (getData) {

                    try {

                        if (typeof(getData) != "object") {
                            getData = JSON.parse(getData);
                        }

                        getData = JSON.parse(getData);
                        $(obj).html("");
                        $.each(getData, function(i, d) {
                            $(obj).append("<option value='" + d.id + "'>" + d.name + "</option>");
                        });
                    } catch (e) {
                        console.log("Error:" + e.message);
                    }
                }

            }
        });


    });

    //从后台刷新
    $("span[url]").each(function() {
        var obj = $(this)[0];
        setInterval2(function() {
            $.ajax({
                url: $(obj).attr("url"),
                success: function(data) {
                    var jobj;
                    try {
                        if (typeof(data) != "object") {
                            jobj = JSON.parse(data);
                        } else {
                            jobj = data;
                        }
                        $(obj).html(jobj["value"]);
                        $(obj).attr("title", "Upated at " + (new Date()).toTimeString().split(' ')[0]);
                    } catch (e) {
                        console.log("Error:" + e.message);
                    }
                }

            });


        }, 1000 * (parseInt($(obj).attr("time") || 60)));

    });

    //当输入查找站
    $("body").on("keyup", "#base_nav_site_input", function() {
        var keywork = $(this).val();
        if (keywork == "") {
            $("#base_nav_stationlist").hide();

        } else {
            $("#base_nav_stationlist").show();

            // 先全部隐藏，然后显示包含keyword的li
            $("#base_nav_stationlist li").show();
            $("#base_nav_stationlist li").hide();
            $("#base_nav_stationlist li").filter(':contains(' + keywork + ')').show();
        }

    });




    //中间菜单按钮，显示选中的菜单
    $("#base_menu_bar>div>a,#base_menu_bar>div>div[data-toggle]").filter("[href*='" + window.location.pathname + "']").addClass("active");

    //设备监控按钮，突出显示当前按钮
    $(".base_menu_bar_dev_menu a").filter("[href*='" + window.location.pathname + "']").addClass("active");

    //第2项菜单文字，显示选中的设备
    if ($(".base_menu_bar_dev_menu a.active").length > 0) {
        $("#base_menu_bar>div>div[data-toggle]").addClass("active");
        $("#base_menu_bar_2 span").html("设备监测(" + $(".base_menu_bar_dev_menu a.active").html() + ")");

    }

    var isSiteMenuShutting = false;

    $("#popover860567").hide();

    $("#base_nav_site").parent().mouseover(function() {
        isSiteMenuShutting = false;
        $("#popover860567").css("left", $("#base_nav_site").offset().left + $("#base_nav_site").width() / 2 - $("#popover860567").width() / 2);
        $("#popover860567").show();
    }).mouseleave(function() {
        isSiteMenuShutting = true;
        setTimeout(function() {
            if (isSiteMenuShutting) {
                $("#popover860567").hide();
            }
        }, 400);

    });






    /*
        以下完成对Rich Popover组件(基于BootStrap的Popover)的封装，
            by 张彦 dosboy@sina.com http://dosboy.cnblogs.com
        
        说明：
            1、弹出窗口的HTML，放在“触发控件(包含data-toggle='popover')”内的.tooltip_html隐藏标记中。
            2、鼠标移进触发控件就显示弹出层。
            3、鼠标在移出触发控件，快速移进弹出窗口时，不会消失。
        
        实例：
        <div data-toggle="popover">
            这是触发控件文本
            <div class="hidden tooltip_html">
               这是弹出层
            </div>
        </div>

    */

    var isShuting = false; //弹出层 是否正在被关闭          
    var isShowing = null; //正在显示的是哪一个弹出窗口




    $("*[data-toggle='popover']").on('shown.bs.popover', function() {
        isShowing = $(this);
    });

    //鼠标移到  触发控件 或 是面板本身上
    $('body').on('mouseover', '.popover,*[data-toggle="popover"]', function() {
        //console.log("enter:" + $(this)[0].id);
        var obj = $(this);

        if ($(this).hasClass("popover")) {
            obj = $(this).prev("*[data-toggle='popover']");
        }

        if (!obj) {
            return;
        }

        //console.log("obj:" + obj[0].id);


        //如果当前弹出框也不可见时，就要显示
        if ($("body .popover:visible").length == 0) {

            $(obj).popover("destroy");

            $(obj).popover({
                html: true,
                trigger: 'click',
                placement: 'bottom',
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                content: $(this).find(".tooltip_html").html()
            });


            obj.popover('show');
            isShuting = false;
            isShowing = obj;
        } else
        if (isShowing && obj && isShuting && $("body .popover:visible").length >= 1 && obj[0] == isShowing[0]) {
            isShuting = false; //如果正在关闭弹出框，并且当前弹出框可见时，中断关闭操作
        }



    });

    //鼠标移出  触发控件 或 是面板本身
    $('body').on('mouseleave', '.popover,*[data-toggle="popover"]', function() {

        var obj = $(this);
        if ($(this).hasClass("popover")) {
            obj = $(this).prev("*[data-toggle='popover']");
        }

        //console.log("leave-obj:" + obj[0].id);

        if (isShuting == false) {

            isShuting = true; //准备关闭

            //延迟后，关闭所有弹出面板
            setTimeout(function() {
                if (isShuting) {
                    $("*[data-toggle='popover']").popover('destroy');
                    isShowing = null;
                    isShuting = false;
                }
            }, 400);

        }
    });






});
