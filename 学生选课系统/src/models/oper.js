const sql = require('../sql')


async function get_user_by_name(username) {
    let sql_ins = 'select * from user_tab where username =?';
    let sql_res = await sql.query_res(sql_ins, [username]);
    if (!sql_res.verdict || sql_res.data.length == 0)
        return null;
    return sql_res.data[0];
}


async function create_student(name, class_id,s_number) {
    let sql_ins = 'insert into student_tab(username,class_id,number) values(?,?,?)';
    let sql_res = await sql.query_res(sql_ins, [name, class_id,s_number]);
    return sql_res.verdict;
}

async function create_user(username, password) {
    let sql_ins = 'insert into user_tab(username,password) values(?,?)';
    let sql_res = await sql.query_res(sql_ins, [username, password]);
    return sql_res.verdict;
}

async function get_user_info(user_id) {
    let sql_ins = 'select * from user_tab where id =?';
    let sql_res = await sql.query_res(sql_ins, [user_id]);
    if (!sql_res.verdict || sql_res.data.length == 0)
        return null;
    return sql_res.data[0];
}

async function query_student(name) {
    // let sql_ins='select * from student_tab where username=?';
    // let sql_ins = 'select * from student_tab where id =?';
    let sql_ins = 'select * from student_tab where username =?';
    let sql_res = await sql.query_res(sql_ins, [name]);
    if (!sql_res.verdict || sql_res.data.length == 0)
        return null;
    return sql_res.data[0];
}
async function query_class_student(class_id) {
    let sql_ins='select * from student_tab where class_id=?';
    let sql_res = await sql.query_res(sql_ins,[class_id]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}
async function update_password(username,password){
    let sql_ins='update user_tab set password=? where username=?';
    let sql_res=await sql.query_res(sql_ins,[password,username]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}
async function update_grade(name,subject,grade){
    let sql_ins='update student_grade set grade=? where username=? and subject_id=?';
    let sql_res =await sql.query_res(sql_ins,[grade,name,subject]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}
async function query_grade(subject){
    let sql_ins='select username,grade from student_grade where subject_id=?'
    let sql_res=await sql.query_res(sql_ins,[subject]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}
async function change_subject(name,subject){
    let sql_ins='insert into student_grade(username,subject_id) values(?,?)'
    let sql_res=await sql.query_res(sql_ins,[name,subject]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}
async function query_student_grade(username){
    let sql_ins='select subject_id,grade from student_grade where username=?';
    let sql_res=await sql.query_res(sql_ins,[username]);
    if(!sql_res.verdict||sql_res.data.length==0)
    return null;
    return sql_res.data;
}

module.exports = {
    get_user_info,
    query_student,
    query_class_student,
    get_user_by_name,
    create_user,
    update_grade,
    query_student_grade,
    query_grade,
    create_student,
    change_subject,
    update_password
}
