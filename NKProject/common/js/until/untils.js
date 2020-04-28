/***
 * 获取当月第一天和最后一天
 * @returns {{thisMonthLastDay: string, thisMonthFirstDay: string}}
 */
function getMonthFirstLastDay(value) {
    var myDate;
    if (value != null && value != "") {
        myDate = new Date(value);
    } else {
        myDate = new Date();
    }
    var currentMonth = myDate.getMonth();
    var firstDay = new Date(myDate.getFullYear(), currentMonth, 1)
    var lastDay = new Date(firstDay.getFullYear(), currentMonth + 1, 0);
    var json = {
        "thisMonthFirstDay": firstDay.getFullYear() + '/' + (firstDay.getMonth() + 1) + '/' + firstDay.getDate(),
        "thisMonthLastDay": lastDay.getFullYear() + '/' + (lastDay.getMonth() + 1) + '/' + lastDay.getDate()
    }
    return json;
}

/***
 * 获取当年第一天和最后一天
 * @param date
 * @returns {*}
 */
function getYearFirstLastDay(value) {
    var firstDay; var lastDay;
    if (value != null && value != "") {
        firstDay = new Date(value);
        lastDay = new Date(value);
    } else {
        firstDay = new Date();
        lastDay = new Date();
    }
    firstDay.setDate(1);
    firstDay.setMonth(0);

    lastDay.setFullYear(lastDay.getFullYear() + 1);
    lastDay.setDate(0);
    lastDay.setMonth(-1);
    var json = {
        "thisYearFirstDay": firstDay.getFullYear() + '/' + (firstDay.getMonth() + 1) + '/' + firstDay.getDate(),
        "thisYearLastDay": lastDay.getFullYear() + '/' + (lastDay.getMonth() + 1) + '/' + lastDay.getDate()
    }
    return json;
}