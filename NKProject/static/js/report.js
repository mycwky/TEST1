$(function () {
    setInterval("getTime();", 1000); //每隔一秒运行一次
})
var isShuting = false; //弹出层 是否正在被关闭
var isShowing = null; //正在显示的是哪一个弹出窗口

//取得系统当前时间
function getTime() {
    var myDate = new Date();
    var hours = ("0" + myDate.getHours()).substr(-2);
    var minutes = ("0" + myDate.getMinutes()).substr(-2);
    var seconds = ("0" + myDate.getSeconds()).substr(-2);
    $("#showTime").html(hours + ":" + minutes + ":" + seconds); //将值赋给div
}


//如果是业主就显示树
if ($("#siteTree").val() != '' && $("#siteTree").val() != '[]') {
    if ($("#siteTree").val()) {
        var json = JSON.parse($("#siteTree").val());
        $("#base_nav_stationlist").hide();
        $("#base_nav_stationlist_tree").treeview({
            showBorder: false,
            data: json,
            backColor: 'white',
            enableLinks: true
        });
    }
}

$("#base_nav_site").parent().mouseover(function () {
    isSiteMenuShutting = false;
    $("#popover860567").css("left", $("#base_nav_site").offset().left + $("#base_nav_site").width() / 2 - $("#popover860567").width() / 2);
    $("#popover860567").show();
}).mouseleave(function () {
    isSiteMenuShutting = true;
    setTimeout(function () {
        if (isSiteMenuShutting) {
            $("#popover860567").hide();
        }
    }, 400);

});


//当输入查找站
$("body").on("keyup", "#base_nav_site_input", function () {
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

//鼠标移到  触发控件 或 是面板本身上
$('body').on('mouseover', '.popover,*[data-toggle="popover"]', function () {
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
    } else if (isShowing && obj && isShuting && $("body .popover:visible").length >= 1 && obj[0] == isShowing[0]) {
        isShuting = false; //如果正在关闭弹出框，并且当前弹出框可见时，中断关闭操作
    }
});
//鼠标移出  触发控件 或 是面板本身
$('body').on('mouseleave', '.popover,*[data-toggle="popover"]', function () {
    var obj = $(this);
    if ($(this).hasClass("popover")) {
        obj = $(this).prev("*[data-toggle='popover']");
    }
    //console.log("leave-obj:" + obj[0].id);
    if (isShuting == false) {
        isShuting = true; //准备关闭
        //延迟后，关闭所有弹出面板
        setTimeout(function () {
            if (isShuting) {
                $("*[data-toggle='popover']").popover('destroy');
                isShowing = null;
                isShuting = false;
            }
        }, 400);
    }
});
