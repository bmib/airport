var systemTitle = "机场安全监管系统";

//角色
var roleJson = [
	{ "UUID": "A1", "NAME": "管理员", "USER": "用户1" },
	{ "UUID": "A2", "NAME": "机场管理机构人员", "USER": "用户2" },
	{ "UUID": "A3", "NAME": "局方监察员", "USER": "用户3" },
	{ "UUID": "A4", "NAME": "管理局监察员", "USER": "用户4" },
	{ "UUID": "A5", "NAME": "监管局监察员", "USER": "用户5" }			
];

//菜单组数据
var menuGroupJson = [
	{ "UUID": "B1", "NAME": "许可证管理", "ROLEID": "A1" },
    { "UUID": "B2", "NAME": "现场安全检查", "ROLEID": "A1" },
    { "UUID": "B3", "NAME": "飞行区报告", "ROLEID": "A1" },
    { "UUID": "B4", "NAME": "不停航施工", "ROLEID": "A1" },
    { "UUID": "B5", "NAME": "人员管理", "ROLEID": "A1" },
    { "UUID": "B6", "NAME": "机场信息库", "ROLEID": "A1" },
    { "UUID": "B7", "NAME": "规章管理", "ROLEID": "A1" },
	
    { "UUID": "B8", "NAME": "许可证", "ROLEID": "A2" },
    { "UUID": "B9", "NAME": "安全检查", "ROLEID": "A2" },
    { "UUID": "B10", "NAME": "飞行区报告", "ROLEID": "A2" },
    { "UUID": "B11", "NAME": "不停航施工", "ROLEID": "A2" },
    { "UUID": "B12", "NAME": "人员库", "ROLEID": "A2" },
    { "UUID": "B13", "NAME": "机场信息库", "ROLEID": "A2" },
    { "UUID": "B14", "NAME": "规章管理", "ROLEID": "A2" }
];

//菜单数据
var menuJson = [
    { "UUID": "C1", "NAME": "许可证申请", "MENUGROUPID": "B8", "SELECTED": true, "PAGEURL": "pages/airport/apply.html" },
	{ "UUID": "C2", "NAME": "许可证变更", "MENUGROUPID": "B8", "SELECTED": true, "PAGEURL": "pages/airport/apply.html" },
	{ "UUID": "C3", "NAME": "许可证注销", "MENUGROUPID": "B8", "SELECTED": true, "PAGEURL": "pages/airport/apply.html" },
	{ "UUID": "C4", "NAME": "机场使用手册修订", "MENUGROUPID": "B8", "SELECTED": true, "PAGEURL": "pages/airport/apply.html" },
	
	{ "UUID": "C5", "NAME": "整改措施", "MENUGROUPID": "B9", "SELECTED": true, "PAGEURL": "pages/airport/apply.html" },
	
	{ "UUID": "C6", "NAME": "快报", "MENUGROUPID": "B10", "SELECTED": true, "PAGEURL": "pages/airport/apply.html" },
	{ "UUID": "C7", "NAME": "周报", "MENUGROUPID": "B10", "SELECTED": true, "PAGEURL": "pages/airport/apply.html" },
	{ "UUID": "C8", "NAME": "月报", "MENUGROUPID": "B10", "SELECTED": true, "PAGEURL": "pages/airport/apply.html" }
];

$(function () {
    $("#id-title").html(systemTitle);
    $("#id-title-2").html(systemTitle);
    $("#id-title-3").html("<img src='dist/img/minilogo.png' />");
    var currentUser = sessionStorage.getItem("currentUser");
    var roleID;
    for (var i = 0; i < roleJson.length; i++) {
        if (roleJson[i].USER == currentUser) {
            roleID = roleJson[i].UUID;
            $("#id-username-1").html(roleJson[i].USER);
            $("#id-username-2").html(roleJson[i].USER + " - " + roleJson[i].NAME);
            $("#id-username-3").html(roleJson[i].USER);
        }
    }

    var menuHTML = '<li class="header">菜单列表</li>';
    var iconList = ["fa-laptop", "fa-table", "fa-folder", "fa-pie-chart", "fa-share", "fa-circle-o"];
    var num = 0;
    for (var k = 0; k < menuGroupJson.length; k++) {
        if (num == 6) {
            num = 0;
        }
        if (menuGroupJson[k].ROLEID == roleID) {
            menuHTML += '<li class="treeview"><a href="#"><i class="fa ' + iconList[num] + '"></i> <span>' + menuGroupJson[k].NAME + '</span> <i class="fa fa-angle-left pull-right"></i></a><ul class="treeview-menu">';
            for (var j = 0; j < menuJson.length; j++) {
                if (menuJson[j].MENUGROUPID == menuGroupJson[k].UUID) {
                    menuHTML += '<li><a href="' + menuJson[j].PAGEURL + '"><i class="fa fa-circle-o"></i> ' + menuJson[j].NAME + '</a></li>';
                }
            }
            menuHTML += '</ul></li>';
            num++;
        }
    }

    $("#id-ul-sidebar-menu").html(menuHTML);
});
