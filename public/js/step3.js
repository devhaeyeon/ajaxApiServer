// cross domain

function createCORSRequest(method, url){
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

var api = function(url, cb, err, loadTarget) {
    var req=createCORSRequest('get',url);
    /*req.onreadystatechange=function(e) {

        if(req.readyState===XMLHttpRequest.DONE) {
            if(req.status ===200) {
                cb(req.responseText,loadTarget);
            } else {
                err('Error!');
            }
        }
    };*/
    req.onload = function() {
        cb(req.responseText,loadTarget);
    };
    // https://zqzhang.github.io/blog/2016/04/18/why-use-onload-in-cross-domain-ajax.html 사용한 이유 
    req.send();
};

var apiError=function(err) {
    console.log(err);
};

var loadResult = function(ret) {
    console.log(ret);
};

api("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo",loadResult,apiError);

/*
JSONP 사용한 방법중 하나의 예제
http://schock.net/articles/2013/02/05/how-jsonp-really-works-examples/

function processJSON (json) {
    console.log(json);
};
var script_element = document.createElement('script');
script_element.src = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=processJSON&tags=monkey&tagmode=any&format=json';
document.getElementsByTagName('head')[0].appendChild(script_element);
*/
