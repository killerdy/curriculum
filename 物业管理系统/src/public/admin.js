let url='http://121.4.156.134:1234';
async function login(username,password) {
    console.log(username);
    const res=await axios.post(url+'/login_admin',{
        username,
        password
    });
    return res.data;
}
async function login_user(username,password) {
    console.log(username);
    console.log(password);
    const res=await axios.post(url+'/login_user'    ,{
        username,
        password
    });
    return res.data;
}
async function query_user(username) {
    // console.log(username);
    // console.log(111);
    const res=await axios.post(url+'/query_user',{
        username
    });
    // console.log(res.data);
    return res.data;
}
async function update_tel(username,tel) {
    console.log(username);
    const res=await axios.post(url+'/update_tel',{
        username,
        tel
    });
    return res.data;
}
async function update_password(username,password) {
    console.log(username);
    const res=await axios.post(url+'/update_password',{
        username,
        password
    });
    return res.data;
}
async function update_address(username,address) {
    console.log(username);
    const res=await axios.post(url+'/update_address',{
        username,
        address
    });
    return res.data;
}
async function insert_repair(date,content,id) {
    // console.log(username);
    // console.log(id);
    const res=await axios.post(url+'/insert_repair',{
        date,
        content,
        id
    });
    return res.data;
}
async function insert_com(date,content,id) {
    // console.log(username);
    // console.log(id);
    const res=await axios.post(url+'/insert_com',{
        date,
        content,
        id
    });
    return res.data;
}
async function query_repair(){
    
    const res=await axios.get(url+'/query_repair',{
    })
    console.log(res.data);
    return res.data;
}
async function query_com(){
    
    const res=await axios.get(url+'/query_com',{
    })
    console.log(res.data);
    return res.data;
}
async function update_repair(id){
    const res=await axios.post(url+'/update_repair',{
        id
    })
    return res.data;
}
async function update_com(id){
    const res=await axios.post(url+'/update_com',{
        id
    })
    return res.data;
}
async function put_notice(content){
    console.log(content);
    const res=await axios.post(url+'/put_notice',{
        content
    })
    return res.data;
}
async function query_notice(){
    const res=await axios.post(url+'/query_notice',{
    })
    return res.data;
}