DROP TABLE REQUEST;
create table REQUEST (
        reqId number(10,0) not null,
		empId number(10,0) not null,
        amount float not null,
        description varchar2(255),
        status varchar2(255),
		resolvedBy varchar2(255),
        primary key (reqId)
);

DROP TABLE WORKER;
create table WORKER (
	workerId number(10,0) not null,
	lastName varchar2(255),
	firstName varchar2(255),
	username varchar2(255),
	passCode varchar2(255),
	title varchar2(255),
	reportsTo number(10,0) not null,
	hireDate varchar2(255),
	streetAddress varchar2(255),
	city varchar2(255),
	state varchar2(255),
	zip varchar2(255),
	phone varchar2(255),
	email varchar2(255),
	primary key (workerId)
);



insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Ten', 'Ben', 'benjamin721', 'benchee5151', 'Data Coordiator', 10, '4/24/2019', '41 Randy Pass', 'Boston', 'Massachusetts', '02124', '617-772-4221', 'bpavluk2@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Ten', 'Gwen', 'benjamin722', 'benchee5252', 'Data Coordiator', 10, '4/24/2018', '42 Randy Pass', 'Boston', 'Massachusetts', '22222', '617-772-4221', 'ben2@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Ten', 'Kevin', 'benjamin723', 'benchee5353', 'IT Tech', 10, '4/24/2019', '43 Randy Pass', 'Boston', 'Massachusetts', '33333', '617-772-4221', 'ben3@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Pope', 'Steven', 'benjamin724', 'benchee5454', 'IT Tech', 10, '4/24/2019', '44 Randy Pass', 'Boston', 'Massachusetts', '12345', '617-772-4221', 'ben4@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Eleven', 'Johnny', 'benjamin725', 'benchee5555', 'IT Tech', 10, '4/24/2019', '45 Randy Pass', 'Ann Arbor', 'Michigan', '2213', '617-772-4221', 'ben5@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Ten', 'Kevin', 'benjamin726', 'benchee5656', 'IT Tech', 10, '1/24/2019', '46 Randy Pass', 'Boston', 'Massachusetts', '02124', '617-772-4221', 'ben6@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Dover', 'Ben', 'benjamin727', 'benchee5757', ' Accountant', 10, '1/24/2019', '47 Randy Pass', 'Boston', 'Massachusetts', '11754', '617-772-4221', 'ben7@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Dover', 'Gwen', 'benjamin728', 'benchee5858', ' Accountant', 10, '1/24/2019', '48 Randy Pass', 'Michigan City', 'Michigan', '5452`', '617-772-4221', 'ben8@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Tuff', 'Lucas', 'benjamin729', 'benchee5959', ' Accountant', 10, '1/24/2019', '49 Randy Pass', 'Ann Arbor', 'Michigan', '54786', '617-772-4221', 'ben9@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Dover', 'Gwen', 'benjamin720', 'benchee5050', ' Manager', 0, '1/1/2016', '48 Randy Pass', 'Ann Arbor', 'Michigan', '77544', '617-772-4221', 'ben10@yahoo.com');

insert into REQUEST VALUES(request_seq.nextval, 2, 300, 'New printer for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 4, 50, 'Office supplies', 'APPROVED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 4, 20, 'Uber Transportation', 'DENIED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 6, 200, 'New printer for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 3, 100000, 'You know why -_-', 'APPROVED', 'Gwen Dover');

commit;