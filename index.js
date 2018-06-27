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
        path:'/css/{file*}',
        handler:{
            directory:{
                path:'./public/css'
            }
        }
    });

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
        path:'/ajaxSync',
        handler:(request,h)=> {
            return h.file('./public/ajaxSync.html');
        }
    });

    server.route({
        method:'GET',
        path:'/ajaxCallback',
        handler:(request,h)=> {
            return h.file('./public/ajaxCallback.html');
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
        path:'/ajaxStep{step?}',
        handler:(request,h)=> {
            const step=encodeURIComponent(request.params.step);
            return h.file('./public/ajaxStep'+step+'.html');
        }
    });

    
    
    server.route({
        method:'GET',
        path:'/',
        handler:(request,h)=> {
            return 'hello, world';
        }
    });
    
    server.route({
        method:'GET',
        path:'/result/all',
        handler:(request,h)=> {
            var retJson= {
                "items":
                [
                    {
                        "menuName":"javascript"
                    },
                    {
                        "menuName":"react"
                    },
                    {
                        "menuName":"vue"
                    },
                    {
                        "menuName":"angular"
                    }
                ]
            };
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