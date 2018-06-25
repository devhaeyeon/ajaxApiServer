'use strict';

exports.register=function(server,options,next) {

    require('inert');
    server.route({
        method:'GET',
        path:'/viewHtml',
        handler:(request,h)=> {
            return h.file('./public/viewHtml.html');
        }
    });
    
    /*server.route({
        method:'GET',
        path:'/',
        handler:(request,h)=> {
            return 'hello, world';
        }
    });
    
    server.route({
        method:'GET',
        path:'/product/all',
        handler:(request,h)=> {
            var retJson= [{
                key:1,
                name:'하라주쿠',
                price:'20,000',
                likeCnt:'100000'
            },{
                key:2,
                name:'하라주쿠',
                price:'30,000',
                likeCnt:'10000'
            }];
            return retJson;
        }
    });
    console.log(`Server running at: ${server.info.uri}`);*/
    next();
};
exports.register.attributes ={
    name:'default',
    version:'1.0.0'
};