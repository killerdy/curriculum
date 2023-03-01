const express = require('express');
// const { use } = require('express/lib/application');
// const req = require('express/lib/request');
// const { rmSync } = require('fs');
// const { isGeneratorFunction } = require('util/types');
// const { resourceLimits } = require('worker_threads');
const login = require('./models/oper');

let app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./public'));
app.get('/', (req, res) => {
    return res.send("这是主页");
})

/*
userame 
password

body
post 用body
get 用 query

400 失败
200 成功

*/
app.post('/change_subject',async(req,res)=>{
    let username=req.body.username;
    let number =req.body.number;
    let subject=req.body.subject;
    // console.log(username);
    let q=await login.query_student(username);
    // console.log(q);
    if(!q||q.number!=number)
    return res.json({status:400,message:'请输入正确的学生信息：'});
    q=await login.change_subject(username,subject);
    if(!q)
    return res.json({status:400,message:'已选过这门课'});
    return res.json({status:200,message:'选课成功'});
    
})
app.post('/update_grade', async (req, res) => {
    let username = req.body.username;
    let subject = req.body.subject;
    let grade = req.body.grade;
    let q = await login.update_grade(username, subject, grade);
    // console.log(q.message);
    // console.log(11);
    if (q.message!='(Rows matched: 0  Changed: 0  Warnings: 0')
        return res.json({ status: 200, message: "添加成功" });
    else
        return res.json({ status: 400, message: "添加失败,可能学生信息输入有误" });
})
app.post('/query_grade', async (req, res) => {
    let subject = req.body.subject;
    let q = await login.query_grade(subject);
    if (q)
        return res.json({ status: 200, message: "查询成功", data: q });
    else
        return res.json({ status: 400, message: "查询失败，请正确输入学科名" });
})
app.post('/login', async (req, res) => {
    // console.log(req.body.username);
    let username = req.body.username;
    let password = req.body.password;

    let user_info = await login.get_user_by_name(username);
    if (user_info == null || user_info.password != password)
        return res.json({ status: 400, message: '用户名或密码错误' });
    else
        return res.json({ status: 200, message: "登录成功" });
})
app.post('/insert', async (req, res) => {
    let name = req.body.name;
    let class_id = req.body.class_id;
    let s_number = req.body.s_number;
    let create_student = await login.create_student(name, class_id, s_number);
    if (create_student)
        return res.json({ status: 200, message: "添加成功" });
    else
        return res.json({ status: 400, message: "添加失败,可能学号重复" });
})
app.get('/query_student', async (req, res) => {
    let name = req.query.name;
    // console.log(name);
    let query_student = await login.query_student(name);
    if (query_student)
        return res.json({ status: 200, message: "查询成功", data: query_student });
    else
        return res.json({ status: 400, message: "查询失败，请正确输入姓名" });
})
app.get('/query_class_student', async (req, res) => {
    let class_id = req.query.id;
    // console.log(class_id);
    let q = await login.query_class_student(class_id);
    if (q)
        return res.json({ status: 200, message: "查询成功", data: q });
    else
        return res.json({ status: 400, message: "查询失败，请正确输入班级号" });
})
// app.get('xxxx',async())
app.post('/update_password', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    // console.log(username);
    // console.log(password);
    let q = await login.update_password(username, password);
    if (q)
        return res.json({ status: 200, message: "修改成功", data: q });
    else
        return res.json({ status: 400, message: "修改失败" });
})
app.get('/query_student_grade',async(req,res)=>{
    let username =req.query.username;
    // console.log(username);
    let q=await login.query_student_grade(username);
    if (q)
        return res.json({ status: 200, message: "查询成功", data: q });
    else
        return res.json({ status: 400, message: "查询失败" });
    

})
app.listen(80);