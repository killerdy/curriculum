function json_table(json) {
    var container = document.getElementById('container');
    
    if (Array.isArray(json))
        Array_table(json);
    else
        message_table(json);
}
function Array_table(json) {
    var tb = document.createElement('table');
    var tr1 = document.createElement('tr');
    for (var key in json[0]) {
        var th = document.createElement('th');
        var txt = document.createTextNode(key);
        th.appendChild(txt);
        tr1.appendChild(th);
    }
    tb.appendChild(tr1);
    for (var i in json) {
        var tr = document.createElement('tr');
        for (var key in json[i]) {
            var td = document.createElement('td');
            var txt = document.createTextNode(json[i][key]);
            td.appendChild(txt);
            tr.appendChild(td);
        }
        tb.appendChild(tr);
    }
    container.appendChild(tb);

}
function message_table(json) {
    var json_tb = document.createElement('table');
    var json_tr1 = document.createElement('tr');
    var json_tr = document.createElement('tr');
    for (var key in json) {
        var json_th = document.createElement('th');
        var json_td = document.createElement('td');
        var th_txt1 = document.createTextNode(key);
        var th_txt = document.createTextNode(json[key]);
        json_th.appendChild(th_txt1);
        json_tr1.appendChild(json_th);
        // json_th.style.border = '1px solid black';
        json_td.appendChild(th_txt);
        json_tr.appendChild(json_td);
        // json_td.style.border = '1px solid black';
    }
    json_tb.appendChild(json_tr1);
    json_tb.appendChild(json_tr);
    container.appendChild(json_tb);

}
async function question(array) {
    // var question = document.getElementById('question');
    var question=document.querySelector('#question');
    question.innerHTML="";
    return new Promise((resolve, reject) => {
        var box=document.createElement('div');
        var input = [];
        for (var key in array) {
            // input.push(key);
            // console.log(key);
            input[key] = document.createElement('input');
        }
        for (var key in array) {
            var div = document.createElement('div');
            var txt = document.createTextNode(array[key]);
            div.appendChild(txt);
            div.appendChild(input[key]);
            box.appendChild(div);
        }
        box.className='div';
        question.appendChild(box);
        window.addEventListener('keydown', function (e) {
            if (e.key == 'Enter') {
                var res = [];
                for (var key in array) {
                    res.push(input[key].value);
                }
                question.innerHTML = "";
                resolve(res);
            }
        })

        // console.log(123123);
    })

}
window.alert=function(s){
    // console.log(s);
    var div=document.createElement('div');
    var txt=document.createTextNode(s);
    div.appendChild(txt);
    div.className='div';
    window.setTimeout(function(){
        div.remove();
    },1000);
    document.body.appendChild(div);
}
function change_body(){
    var s=document.querySelector('h3');
    var root=document.querySelector('#root');
    var f=0;
    if(s.innerHTML=='教师登录系统')
    f=1;
    var txt='教师登录系统';
    if(f)
    txt='学生登录系统';
    s.innerHTML=txt;
}