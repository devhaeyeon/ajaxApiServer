var api = function(url, cb, err, loadTarget) {
    var req=new XMLHttpRequest();
    req.open('GET',url);
    req.send();
    req.onreadystatechange=function(e) {

        if(req.readyState===XMLHttpRequest.DONE) {
            if(req.status ===200) {
                cb(req.responseText,loadTarget);
            } else {
                err('Error!');
            }
        }
    };
};

var apiError=function(err) {
    console.log(err);
};