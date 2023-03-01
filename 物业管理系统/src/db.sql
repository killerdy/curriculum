create table user_tab (
    id varchar(20) unique not null,
    username varchar(20),
    password varchar(20),
    tel varchar(20),
    address varchar(50)
);

create table admin_tab(
    id int primary key auto_increment,
    username varchar(20),
    password int
);

create table repair(
    repair_id int primary key auto_increment,
    repair_time varchar(20) ,
    content varchar(50),
    user_id varchar(20),
    state varchar(20)
);  
insert into user_tab(id,username,password) values('101','wp','123');
insert into user_tab(id,username,password) values('102','lwy','123');
update user_tab set tel='13174031288' where username='wp';
update user_tab set address='13栋503' where username='wp';
-- insert into repair(repair_time,content,user_id) values(?,?,?);

create table notice(
    notice_id int primary key auto_increment,
    content varchar(100)
);
create table complaint(
    id int primary key auto_increment,
    time varchar(20) ,
    content varchar(50),
    user_id varchar(20),
    state varchar(20)

);  
alter table complaint modify column time varchar(20);
alter table complaint alter column state set default '未处理';
alter table repair modify column repair_time varchar(20);
insert into admin_tab(id,username,password) values('001','dy','123');
insert into admin_tab(id,username,password) values('002','lwy','123');
insert into admin_tab(id,username,password) values('003','dl','123');
create table charge (
    money int ,
    name varchar(20) primary key ,
    user_id varchar(20),
    time date
);
alter table complaint modify column content varchar(20) not null;
delete from complaint where id between 4 and 11;