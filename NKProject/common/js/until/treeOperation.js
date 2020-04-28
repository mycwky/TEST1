/**
 *  模板名：Tree树通用模块
 *  编写人：马宇晨
 *  版本  : 1.0
 *  完成日期 ：2020年04月？日
 *  描述： 
 *      1.选中全部父节点
 *      2.取消全部父节点
 *      3.级联选中所有子节点
 *      4.级联取消所有子节点
 *      5.tree树选中节点展示
 * */




/***
 * 加载树形组件
 * @param {*} treeData   tree树的数据
 * @param {*} divId      DIV的ID
 */
// function reloadTreeView(treeData, divId, treeCheck) {
//   $("'#" +divId+ "'")
//
//   $("'#" +divId+ "'").treeview({
//     showCheckbox: true,
//     data: treeData,
//     levels: 1,
//     onNodeChecked: nodeChecked,
//     onNodeUnchecked: nodeUnchecked,
//   });
//
//
//   var nodeCheckedSilent = false;
//
//   function nodeChecked(event, node) {
//     if (nodeCheckedSilent) {
//       return;
//     }
//     nodeCheckedSilent = true;
//     checkAllParent(node);
//     checkAllSon(node);
//     nodeCheckedSilent = false;
//   }
//
//   var nodeUncheckedSilent = false;
//   function nodeUnchecked(event, node) {
//     if (nodeUncheckedSilent)
//       return;
//     nodeUncheckedSilent = true;
//     uncheckAllParent(node);
//     uncheckAllSon(node);
//     nodeUncheckedSilent = false;
//   }
//
//   //选中全部父节点
//   function checkAllParent(node) {
//     $("'#" +divId+ "'").treeview('checkNode', node.nodeId, {
//       silent: true
//     });
//     var parentNode = $("'#" +divId+ "'").treeview('getParent', node.nodeId);
//     if (!("nodeId" in parentNode)) {
//       return;
//     } else {
//       checkAllParent(parentNode);
//     }
//   }
//   //取消全部父节点
//   function uncheckAllParent(node) {
//     $("'#" +divId+ "'").treeview('uncheckNode', node.nodeId, {
//       silent: true
//     });
//     var siblings = $("'#" +divId+ "'").treeview('getSiblings', node.nodeId);
//     var parentNode = $("'#" +divId+ "'").treeview('getParent', node.nodeId);
//     if (!("nodeId" in parentNode)) {
//       return;
//     }
//     var isAllUnchecked = true; //是否全部没选中
//     for (var i in siblings) {
//       if (siblings[i].state.checked) {
//         isAllUnchecked = false;
//         break;
//       }
//     }
//     if (isAllUnchecked) {
//       uncheckAllParent(parentNode);
//     }
//   }
//
//   //级联选中所有子节点
//   function checkAllSon(node) {
//     $("'#" +divId+ "'").treeview('checkNode', node.nodeId, {
//       silent: true
//     });
//     if (node.nodes != null && node.nodes.length > 0) {
//       for (var i in node.nodes) {
//         checkAllSon(node.nodes[i]);
//       }
//     }
//   }
//   //级联取消所有子节点
//   function uncheckAllSon(node) {
//     $("'#" +divId+ "'").treeview('uncheckNode', node.nodeId, {
//       silent: true
//     });
//     if (node.nodes != null && node.nodes.length > 0) {
//       for (var i in node.nodes) {
//         uncheckAllSon(node.nodes[i]);
//       }
//     }
//   }
//
//   //tree树选中节点展示
//   function uncheckTreeNodes(treeCheck) {
//     if (treeCheck != null && treeCheck != "") {
//       var refreshAlert = data[0].refreshAlert;
//       if (refreshAlert != null && refreshAlert != "") {
//         $("#refreshAlert").val(refreshAlert)
//       }
//       var value = data[0].value;
//       if (value != null) {
//         for (var i = 0; i < value.length; i++) {
//           var nodes = value[i].nodes;
//           $("'#" +divId+ "'").treeview('checkNode', [parseInt(value[i].nodeId), { silent: true }]);
//           if (nodes != null && nodes != "") {
//             for (var j = 0; j < nodes.length; j++) {
//               $("'#" +divId+ "'").treeview('checkNode', [parseInt(nodes[j].nodeId), { silent: true }]);
//             }
//           }
//         }
//       }
//     }
//   }
//
//
//
//
//
//   $.ajax({
//     url: "http://119.3.171.138:9002/find",
//     type: "post",
//     dataType: "json",
//     data: {
//       "type": "alert",
//       "area": area,
//     },
//     success: function (data) {
//       if (data != null && data != "") {
//         var refreshAlert = data[0].refreshAlert;
//         if (refreshAlert != null && refreshAlert != "") {
//           $("#refreshAlert").val(refreshAlert)
//         }
//         var value = data[0].value;
//         if (value != null) {
//           for (var i = 0; i < value.length; i++) {
//             var nodes = value[i].nodes;
//             $("'#" +divId+ "'").treeview('checkNode', [parseInt(value[i].nodeId), { silent: true }]);
//             if (nodes != null && nodes != "") {
//               for (var j = 0; j < nodes.length; j++) {
//                 $("'#" +divId+ "'").treeview('checkNode', [parseInt(nodes[j].nodeId), { silent: true }]);
//               }
//             }
//           }
//         }
//       }
//     }
//   })
// }

/***
 * 加载树形组件
 */
function reloadTreeView(area){
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
        if( refreshAlert!=null && refreshAlert!="" ){
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
