const sql=require('../sql');

async function get_admin(username) {
    let sql_ins='select * from admin_tab where username=?';
    let sql_res= await sql.query_res(sql_ins,[username]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data[0];
}
async function get_user(username) {
    let sql_ins='select * from user_tab where username=?';
    let sql_res= await sql.query_res(sql_ins,[username]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data[0];
}
async function update_tel(username,tel) {
    let sql_ins='update user_tab set tel=? where username=?';
    let sql_res= await sql.query_res(sql_ins,[tel,username]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data[0];
}
async function update_password(username,password) {
    let sql_ins='update user_tab set password=? where username=?';
    let sql_res= await sql.query_res(sql_ins,[password,username]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data[0];
}
async function update_address(username,address) {
    let sql_ins='update user_tab set address=? where username=?';
    let sql_res= await sql.query_res(sql_ins,[address,username]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data[0];
}
async function insert_repair(date,content,id) {
    console.log(date);
    console.log(content);
    console.log(id);
    let sql_ins='insert into repair(repair_time,content,user_id) values(?,?,?)';
    // let sql_ins='update user_tab set address=? where username=?';
    let sql_res= await sql.query_res(sql_ins,[date,content,id]);
    
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data[0];
}
async function insert_com(date,content,id) {
    // console.log(date);
    let sql_ins='insert into complaint(time,content,user_id) values(?,?,?)';
    // let sql_ins='update user_tab set address=? where username=?';
    let sql_res= await sql.query_res(sql_ins,[date,content,id]);
    
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data[0];
}
async function query_repair(){
    let sql_ins = 'select * from repair where state=?';
    let sql_res=await sql.query_res(sql_ins,['未处理']);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}
async function query_com(){
    let sql_ins = 'select * from complaint where state=?';
    let sql_res=await sql.query_res(sql_ins,['未处理']);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}
async function update_repair(id){
    let sql_ins ='update repair set state=? where repair_id=?';
    let sql_res=await sql.query_res(sql_ins,['已解决',id]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}
async function update_com(id){
    let sql_ins ='update complaint set state=? where id=?';
    let sql_res=await sql.query_res(sql_ins,['已处理',id]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}
async function put_notice(content){
    let sql_ins ='insert into notice(content) values(?)';
    let sql_res=await sql.query_res(sql_ins,[content]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}
async function query_notice(){
    let sql_ins ='select * from  notice';
    let sql_res=await sql.query_res(sql_ins);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}
async function main(){
    // console.log(await update_repair(14));
    // let q=await insert_com('2003','meidiaanl','1011');
    // console.log(q);
    // console.log(await query_notice());
}
main().then();
module.exports={
    get_admin,
    update_tel,
    update_address,
    update_password,
    get_user,
    update_repair,
    query_repair,
    put_notice,
    query_com,
    insert_com,
    update_com,
    query_notice,
    insert_repair
}