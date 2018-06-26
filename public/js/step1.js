var loadMenu=function(ret,target) {
    ret = JSON.parse(ret);
    var source = $("#languageMenuTmpl").html();
    var template = Handlebars.compile(source);
    $('#languageMenu').append(template(ret));
    $(target).empty();
};

var apiError=function(err) {
    console.log(err);
};

api("./js/menu.json",loadMenu,apiError,'#menuLoading');
