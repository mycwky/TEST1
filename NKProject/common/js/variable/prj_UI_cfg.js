/**
 *  模板名：页面名
 *  编写人：马宇晨
 *  版本  : 1.0
 *  完成日期 ：2020年04月？日
 *  描述： 
 *      
 * */ 
//"url": "http://119.3.171.138:8082/iot/api/dpt/data/find/" + interfanceNum,

/* AJAX请求地址 */
//主界面
var urlHeadSave = "http://119.3.171.138:9002/save";             //head保存URL +eacher
var f = "http://119.3.171.138:9002/find";             //head展示 +eacher  +分界面加载规则事件  +分界面eacher  +分界面台数那块编辑
var urlAlertData = "http://119.3.171.138:8082/iot/api/dpt/data/find/1";   //获取告警数据,head数据  +分界面分界面加载规则事件
var urlAlertTreeData = "http://119.3.171.138:8082/iot/api/dict/get";   //获取告警下拉树  + 分界面
var urlEchartsData = "http://119.3.171.138:8082/iot/api/dpt/data/find/";  //Echarts获取曲线数据
var urlAlertSave = "http://119.3.171.138:9002/save"//保存告警配置
var partyId = "208060df-d0fa-44bb-8fa3-d468b97d164a";  //NK项目生成的ID
var outSet1  = "NK001";      //唯一ID
var alertDiv = "#searchTree";      //告警Div的id



//分界面
var urlSubpageMiddleSelect ="static/js/json/function.json";  //得到中间层下拉框
var urlNBQ_SERIGetKey= "http://119.3.171.138:8082/iot/api/taged/gettags";   //NBQ_SERI 逆变器
var urlSaveModel_DS = "http://119.3.171.138:9002/saveModel_DS";   //保存Model_DS
var urlSaveModel_DS2 = "http://127.0.0.1:9002/saveModel_DS";  //保存Model_DS2











/*NK通用*/
var D_IOT_EVENT_LEVEL=[];//事件等级
var D_IOT_STATE_CHANGE=[];//事件变化
var D_IOT_TELESIG_STATE=[];//状态域



/* NK主界面 */
var MainName = "nk_main";//主页名
var headDiv = ["mainHead_1","mainHead_2","mainHead_3","mainHead_4","mainHead_5","mainHead_6","aggregateData_1","aggregateData_2","aggregateData_3","aggregateData_4"];
var mainCurveDiv=["showMainEcharts_1","showMainEcharts_2","showMainEcharts_3","showMainEcharts_4"];//main页面曲线图DIV
var mainCurveDivNID = {
    EchartsDiv:[
        {divID:"echarts_div_1",actID:1},
        {divID:"echarts_div_2",actID:1},
        {divID:"showMainEcharts_3",actID:0},
        {divID:"showMainEcharts_4",actID:0},
        {divID:"showMainEcharts_5",actID:0},
        {divID:"showMainEcharts_5",actID:0}
    ]
}
var refreshHead_1 = []; //头部栏
var refreshAlert_1 =[]; //告警栏
var LINE = [];
var refreshEcharts_1 = [];
var outSet = "NK001";
var area = "nk_main";
var whichOneArea;//梯次分区




/* NK分界面 */
var describeList = [];//获取json中的方法名
var D_IOT_HW_MODEL_TREE=[];//设备型号下拉树
var divIdListEmpty = [];//保存这些divID下动态生成的标签，用于更换区域的时候清空这些DIV
var checkedWhichArea=[];//选中的分区
var arr1 = [];
var selects = [];//记录编辑下拉框模态框中选中添加的数据
var arr = [];
var echartsArr = [];
var checkedModel =[];
var divInfo = [];//保存显示出的head方法中的w、d和divId
var hwTypeMap = new Map();//根据分类生成图表
var titleBackgroundId = "";//记录上一次点击横幅的按钮的ID
var titleName ="";
var echartsConfig = [];

var D_IOT_OBJ_TAG = [];
var D_IOT_OBJ_TAG_TREE = [];








var zNodes = [];//编辑界面下拉框的下拉数据



//
var treeData;               //tree数据
// var D_IOT_EVENT_LEVEL=[];   //事件等级
// var D_IOT_OBJ_TAG=[];       //同理储能电站
var whichOneAreaTree=[];    //梯次及预制仓分区下拉树
// var D_IOT_HW_MODEL_TREE=[]; //设备型号下拉树
// var  D_IOT_OBJ_TAG_TREE=[];
var type = [];
var tckey;



