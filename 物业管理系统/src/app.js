const express=require('express');
const login = require('./modules/login');

let app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./public'));
app.get('/', (req, res) => {
    return res.send("这是主页");
})


app.post('/login_admin',async(req,res)=>{
    let name =req.body.username;
    let password=req.body.password;
    let get_user=await login.get_admin(name);
    // console.log(get_user);
    if(get_user==null||get_user.password!=password)
        return res.json({status:400,message:'用户名或密码错误'});
    else
        return res.json({status:200,message:'登录成功'});
}) 
app.post('/login_user',async(req,res)=>{
    let name =req.body.username;
    let password=req.body.password;
    let q=await login.get_user(name);
    // console.log(get_user);
    if(q==null||q.password!=password)
        return res.json({status:400,message:'用户名或密码错误'});
    else
        return res.json({status:200,message:'登录成功'});
}) 

app.post('/query_user',async(req,res)=>{
    let name =req.body.username;
    let q=await login.get_user(name);
    // console.log(get_user);
    // console.log(q);
        return res.json({status:200,message:'查询成功',data:q});
}) 
app.post('/update_tel',async(req,res)=>{
    let name =req.body.username;
    let tel=req.body.tel;
    let q=await login.update_tel(name,tel);
    // console.log(get_user);
        return res.json({status:200,message:'更改成功'});
}) 
app.post('/update_password',async(req,res)=>{
    let name =req.body.username;
    let a=req.body.password;
    let q=await login.update_password(name,a);
    // console.log(get_user);
        return res.json({status:200,message:'更改成功'});
}) 
app.post('/update_address',async(req,res)=>{
    let name =req.body.username;
    let a=req.body.address;
    let q=await login.update_address(name,a);
    // console.log(get_user);
        return res.json({status:200,message:'更改成功'});
}) 
app.post('/insert_repair',async(req,res)=>{
    let date =req.body.date;
    let content=req.body.content;
    let id=req.body.id;
    // console.log(content);

    let q=await login.insert_repair(date,content,id);
    // console.log(get_user);
        return res.json({status:200,message:'添加成功'});
}) 
app.post('/insert_com',async(req,res)=>{
    let date =req.body.date;
    let content=req.body.content;
    let id=req.body.id;
    // console.log(content);

    let q=await login.insert_com(date,content,id);
    // console.log(get_user);
        return res.json({status:200,message:'投诉成功'});
}) 
app.get('/query_repair',async(req,res)=>{
    let q=await login.query_repair();
    return res.json({data:q});
})
app.get('/query_com',async(req,res)=>{
    let q=await login.query_com();
    return res.json({data:q});
})
app.post('/update_repair',async(req,res)=>{
    let id=req.body.id;
    let q=await login.update_repair(id);
    return res.json({status:200,message:'解决成功'});
})
app.post('/update_com',async(req,res)=>{
    let id=req.body.id;
    let q=await login.update_com(id);
    return res.json({status:200,message:'解决成功'});
})
app.post('/put_notice',async(req,res)=>{
    let content=req.body.content;
    let q=await login.put_notice(content);
    return res.json({status:200,message:'发布成功'});
})
app.post('/query_notice',async(req,res)=>{
    let q=await login.query_notice();
    return res.json({status:200,message:'查询成功',data:q});
})
app.listen(1234);