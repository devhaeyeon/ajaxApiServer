'use strict';

const Hapi = require('hapi');
const server = Hapi.server({
    port : 8989,
    host:'localhost'
});

const init = async()=> {
    await server.register(require('inert'));
    server.route({
        method:'GET',
        path:'/viewHtml',
        handler:(request,h)=> {
            return h.file('./public/viewHtml.html');
        }
    });

    server.route({
        method:'GET',
        path:'/exercise',
        handler:(request,h)=> {
            return h.file('./public/exercise.html');
        }
    });

    server.route({
        method:'GET',
        path:'/css/{file*}',
        handler:{
            directory:{
                path:'./public/css'
            }
        }
    });

    server.route({
        method:'GET',
        path:'/js/{file*}',
        handler:{
            directory:{
                path:'./public/js'
            }
        }
    });

    server.route({
        method:'GET',
        path:'/ajaxStep1',
        handler:(request,h)=>{
            return h.file('./public/ajaxStep1.html');
        }
    })
    
    server.route({
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

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandleRejection',(err)=>{
    console.log(err);
    process.exit(1);
});

init();