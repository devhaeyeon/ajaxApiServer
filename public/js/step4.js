// promise pattern
const urlArr = [
    "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo",
    "./js/menu.json"
];
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}
var api = function(url, cb, err) {
    return new Promise(function(cb,err) {
        var req=createCORSRequest('get',url);

        req.onload = function() {
            cb(req.responseText);
        };
        req.send();
    });
};
var apiError=function(err) {
    console.log(err);
};
var loadResult = function(ret) {
    console.log("test : "+ret);
};
api(urlArr[0],loadResult,apiError)
.then(function(ret){
    loadResult(ret);
    return api(urlArr[1],loadResult,apiError);
})
.then(function(ret){
    loadResult(ret);
    return api(urlArr[0],loadResult,apiError);
})
.then(function(ret){
    loadResult(ret);
    return api(urlArr[1],loadResult,apiError);
})
.then(function(ret){
    loadResult(ret);
    return api(urlArr[0],loadResult,apiError);
})
.then(function(ret){
    loadResult(ret);
}).catch(function(err){
    console.log(err);
});
