//引入express框架
const myexpress = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = myexpress();
//解决跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});
// 定义日志和输出级别
app.use(logger('dev'));
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// __dirname:全局变量，当前文件的所在目录
app.use(myexpress.static(__dirname+"/public"));
console.log("999")
//登录
app.post('/logindo',function (request,response) {
    var username=request.body.username;
    var pwd=request.body.pwd;
    if (username=='wby' && pwd=='123'){
        let obj={
            username:username,
            code:200,
            success:'登录成功'
        }
        response.send(obj)
    }else {
        let obj={
            code:400,
            success:'登录失败'
        }
        response.send(obj)
    }
})
let list=[
    {"date":"2020/7/23 下午16:20:01","content":"我来了"},
    {"date":"2020/7/23 下午16:20:01","content":"我走了"},
    {"date":"2020/7/23 下午16:20:01","content":"天气不错"}
]
//获取list
app.post('/list',function (request,response) {
    response.send(list)
})
//增加
app.post('/addlist',function (request,response) {
    var obj=request.body.obj;
    list.push(obj)
    response.send(list)
})
//删除
app.post('/deletelist',(request,response)=>{
    var id=request.body.id;
    list.splice(id,1)
    response.send(list)
})
//端口号
app.listen("9999");