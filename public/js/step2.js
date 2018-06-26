var loadSearchResult = function(ret, target) {
    ret=JSON.parse(ret);
    console.log(ret);
    var source = $("#languageSearchResultTmpl").html();
    var template = Handlebars.compile(source);
    $('#languageSearchResult').append(template(ret));
    $(target).empty();
}

api("https://hn.algolia.com/api/v1/search?query=javascript",loadSearchResult,apiError,'#resultLoading');