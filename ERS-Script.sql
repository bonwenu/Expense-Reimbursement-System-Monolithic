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

alter table WORKER 
        add constraint UK_cren5h0hsio1a11dxeqvotyb4 unique (username);
DROP SEQUENCE WORKER_SEQ;
DROP SEQUENCE REQUEST_SEQ;

CREATE SEQUENCE  "ADMIN"."WORKER_SEQ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE ;

CREATE SEQUENCE  "ADMIN"."REQUEST_SEQ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE ;


insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Ten', 'Ben', 'benjamin721', 'benchee5151', 'Data Coordiator', 10, '1/1/2019', '41 Randy Pass', 'Boston', 'Massachusetts', '02124', '611-772-4221', 'bpavluk2@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Ten', 'Gwen', 'benjamin722', 'benchee5252', 'Data Coordiator', 10, '1/1/2018', '42 Portland', 'Boston', 'Massachusetts', '22222', '612-772-4222', 'ben2@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Ten', 'Kevin', 'benjamin723', 'benchee5353', 'IT Tech', 10, '3/24/2017', '2314 Boulevard', 'Boston', 'Massachusetts', '33333', '613-772-4223', 'ben3@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Pope', 'Steven', 'benjamin724', 'benchee5454', 'IT Tech', 10, '5/2/2014', '66474 Randy Pass', 'Boston', 'Massachusetts', '12345', '614-772-4224', 'ben4@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Eleven', 'Johnny', 'benjamin725', 'benchee5555', 'IT Tech', 10, '4/24/2000', '44256 Hall Place', 'Ann Arbor', 'Michigan', '2213', '617-772-4221', 'ben5@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Ten', 'Kevin', 'benjamin726', 'benchee5656', 'IT Tech', 10, '1/24/2019', '46 Randy Pass', 'Lakolm', 'Virginia', '02124', '617-772-4221', 'ben6@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Dover', 'Ben', 'benjamin727', 'benchee5757', 'Accountant', 10, '1/13/2016', '41442 Lincoln Rd', 'Boston', 'Massachusetts', '11754', '617-772-4221', 'ben7@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Dover', 'Gwen', 'benjamin728', 'benchee5858', 'Accountant', 10, '1/24/2019', '256232 Randy Pass', 'Michigan City', 'Michigan', '5452`', '617-772-4221', 'ben8@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Tuff', 'Lucas', 'benjamin729', 'benchee5959', 'Accountant', 10, '1/13/2011', '32154 Yeti Ave', 'Ann Arbor', 'Michigan', '54786', '617-772-4221', 'ben9@admin.ch');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Dover', 'Gwen', 'benjamin720', 'benchee5050', 'Manager', 0, '1/1/2016', '43255 Pennman', 'St Louis', 'Missouri', '77544', '617-772-4221', 'ben10@yahoo.com');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Hagger', 'Arny', 'ahagger0', 'ZIfvfpbYm', 'Developer',15 , '7/28/2019', '56248 Rowland Pass', 'Shawnee Mission', 'Kansas', '66220', '913-561-7825', 'ahagger0@digg.com');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'McKeand', 'Jennee', 'jmckeand1', 'OmN4mNbkk', 'Developer', 15, '5/6/2011', '95 Garrison Lane', 'Kansas City', 'Missouri', '64142', '816-995-5558', 'jmckeand1@ftc.gov');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Burmaster', 'Brigitte', 'bburmaster2', 'RjHt1s', 'DBA', 15, '10/14/2019', '020 Muir Way', 'Boynton Beach', 'Florida', '33436', '561-135-8161', 'bburmaster2@devhub.com');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Dahlen', 'Lucine', 'ldahlen3', 'BrOqDAxXW0B', 'DBA', 10, '7/22/2019', '7 Sheridan Circle', 'Riverside', 'California', '92513', '951-187-7136', 'ldahlen3@imageshack.us');
insert into WORKER (workerId, lastName, firstName, username, passCode, title, reportsTo, hireDate, streetAddress, city, state, zip, phone, email) values (worker_seq.nextval, 'Doe', 'John', 'java', 'basics101', 'Manager', 0, '5/7/2019', '0 Hovde Way', 'Clearwater', 'Florida', '34629', '727-798-2321', 'ecockney4@time.com');

insert into REQUEST VALUES(request_seq.nextval, 2, 300, 'New printer for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 4, 50, 'Office supplies', 'APPROVED', 'John Doe');
insert into REQUEST VALUES(request_seq.nextval, 4, 20, 'Uber Transportation', 'DENIED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 6, 200, 'New printer for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 3, 100000, 'You know why -_-', 'APPROVED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 4, 300, 'New carpet for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 14, 50, 'Bottled water for office', 'APPROVED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 7, 20, 'Uber Transportation', 'DENIED', 'John Doe');
insert into REQUEST VALUES(request_seq.nextval, 4, 200, 'New printer for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 3, 333, 'New vacum', 'APPROVED', 'John Doe');
insert into REQUEST VALUES(request_seq.nextval, 2, 300, 'New printer for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 4, 50, 'Office supplies', 'APPROVED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 8, 20, 'Uber Transportation', 'DENIED', 'John Doe');
insert into REQUEST VALUES(request_seq.nextval, 6, 200, 'New printer for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 12, 100000, 'You know why -_-', 'APPROVED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 2, 300, 'New printer for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 4, 50, 'Office supplies', 'APPROVED', 'John Doe');
insert into REQUEST VALUES(request_seq.nextval, 4, 20, 'Uber Transportation', 'DENIED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 8, 200, 'New printer for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 4, 100000, 'You know why -_-', 'APPROVED', 'John Dow');
insert into REQUEST VALUES(request_seq.nextval, 4, 7, 'Coffee for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 4, 50, 'Office supplies', 'APPROVED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 3, 444, 'Lyft Transportation', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 4, 200, 'New printer for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 3, 100000, 'You know why -_-', 'APPROVED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 4, 100000, 'Just Becuase ', 'APPROVED', 'John Dow');
insert into REQUEST VALUES(request_seq.nextval, 4, 7, 'Coffee for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 4, 50, 'Office supplies', 'APPROVED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 9, 444, 'Lyft Transportation', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 4, 200, 'New chair for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 4, 100000, 'You know why -_-', 'APPROVED', 'Gwen Dover');
insert into REQUEST VALUES(request_seq.nextval, 4, 50, 'Office supplies', 'APPROVED', 'John Doe');
insert into REQUEST VALUES(request_seq.nextval, 6, 444, 'Lyft Transportation', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 13, 200, 'New chair for office', 'PENDING', '--');
insert into REQUEST VALUES(request_seq.nextval, 11, 100000, 'You know why -_-', 'APPROVED', 'John Doe');



commit;