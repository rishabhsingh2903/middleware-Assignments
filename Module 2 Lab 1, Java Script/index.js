const httpServer = require('http');

const url=require('url');
const fs=require('fs');
const replaceTemplate = require('./modules/replaceTemplate');


//read data from file
const tempCourse=fs.readFileSync(
    `${__dirname}/data/data.json`,
    'utf-8'
);
const templateHTMLCourse=fs.readFileSync(
    `${__dirname}/template/templateCourse.html`,
    'utf-8'
);



const dataObj=JSON.parse(tempCourse);
const server=httpServer.createServer((req,res)=>{
    const {query,pathname}=url.parse(req.url,true);//object destructor
    // console.log(urlParameter.query);
    // console.log(urlParameter.pathname);
    if(query.id){
        if(pathname==='/'||pathname.toLowerCase()==='/courses'){
            res.writeHead(200,{
                'Content-type':'text/html'
            });
            const course=dataObj[Number(query.id)];
            const strCourseName=JSON.stringify(course);
            const courseHTML=replaceTemplate(templateHTMLCourse,course);
            // res.end(`we received our first request from the client ${urlParameter.pathname.toLowerCase()} with query parameter${urlParameter.query.id}
            // ${strCourseName}
            // `);
            res.end(courseHTML);
        }
        else{
            res.writeHead(404,{
                'Content-type':'text/html'
            });
            res.end('resource not found')
        }
    }

});



server.listen(8000,'localhost',()=>{
    console.log('listening to requests on port 8000')
});
