
var url='http://121.4.156.134:80';
async function login(username, password) {
    const res = await axios.post(url+'/login', {
        username,
        password
    })
    // console.log(res.data);
    return res.data;
}
async function student_insert(name, class_id,s_number) {
    const res = await axios.post(url+'/insert', {
        name,
        class_id,
        s_number
    });
    return res.data;
}
async function query_student(name) {
    // console.log(name);
    const res = await axios.get(url+'/query_student', {
        params: {
            name
        }
    });
    return res.data;
}
async function query_class_student(id) {
    const res = await axios.get(url+'/query_class_student', {
        params: {
            id
        }
    });
    return res.data;
}
async function update_password(username, password){
    // console.log(username);
    // console.log(password);
    const res=await axios.post(url+'/update_password',{
        username,
        password
    });
    // console.log(res.data);
    return res.data;
}
async function update_grade(username,subject,grade){
    const res=await axios.post(url+'/update_grade',{
        username,
        subject,
        grade
    });
    return res.data;
}
async function query_grade(subject){
    const res=await axios.post(url+'/query_grade',{
        subject
    });
    return res.data;
}
async function change_subject(username,number,subject){
    const res=await axios.post(url+'/change_subject',{
        username,
        number,
        subject
    })
    // console.log(res.data);
    return res.data;
}
async function query_student_grade(username){
    // console.log(username);
    const res=await axios.get(url+'/query_student_grade',{
        params: {
            username
        }
    });
    return res.data;
}