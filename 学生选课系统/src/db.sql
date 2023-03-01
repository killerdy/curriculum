create table user_tab(
    id int primary key auto_increment,
    username varchar(20) unique,
    password varchar(20)
);

create table student_tab(
    id int primary key auto_increment,
    username varchar(20) unique,
    class_id varchar(20)
);
create table student_grade(
    id int primary key auto_increment,
    username varchar(20) unique,
    subject_id varchar(20),
    grade int 
);
insert into user_tab(username,password) values('dy',123);
insert into student_grade(username,subject_id,grade) values ('戴赟','数据结构','94');
select * from student_grade;
alter table student_tab modify column number varchar(20) not null;

alter table student_grade drop index username;
create table subject (
    subject_id int primary key,
    subject_name varchar(20)  unique,
)
alter table student_tab add column number int;
alter table student_grade add primary key(username,subject_id);
create table subject_tab (
    id int primary key auto_increment,
    start_time date,
    over_time date,
    teacher_id int,
    other_message varchar(20)
);
ALTER TABLE <表名> DROP INDEX <唯一约束名>;
alter table student_grade drop index username;