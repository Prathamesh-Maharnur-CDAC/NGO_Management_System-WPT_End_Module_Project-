---------------------------- Prathamesh Maharnur NGO Management System --------------------------------

CREATE DATABASE ngo_mgmt_system;

USE ngo_mgmt_system;

CREATE TABLE application_list(
	appl_id INT AUTO_INCREMENT PRIMARY KEY,
	appl_name VARCHAR(100) NOT NULL,
	email VARCHAR(180) NOT NULL UNIQUE,
	phone VARCHAR(10) NOT NULL UNIQUE,
	dob DATE CHECK (dob < '2015-01-01'),
	appl_password VARCHAR(15) DEFAULT 'appli@123'
);

CREATE TABLE campaign(
	c_id INT AUTO_INCREMENT PRIMARY KEY,
	c_name VARCHAR(80) NOT NULL
);

CREATE TABLE volunteer(
	v_id INT AUTO_INCREMENT PRIMARY KEY,
	v_name VARCHAR(100) NOT NULL,
	email VARCHAR(180) NOT NULL,
	phone VARCHAR(10) NOT NULL UNIQUE,
	dob DATE CHECK (dob < '2015-01-01') NOT NULL,
	joining_date DATE NOT NULL,
	c_id INT NOT NULL,
	appl_id INT NOT NULL,
	v_password VARCHAR(15) DEFAULT 'volunteer@123',
	FOREIGN KEY (c_id) REFERENCES campaign(c_id),
	FOREIGN KEY (appl_id) REFERENCES application_list(appl_id)
);

CREATE TABLE admin(
	admin_id INT AUTO_INCREMENT PRIMARY KEY,
	admin_name VARCHAR(100) NOT NULL,
	email VARCHAR(180) NOT NULL UNIQUE,
	phone VARCHAR(10) NOT NULL UNIQUE,
	dob DATE CHECK (dob < '2000-01-01'),
	v_id INT,
	a_password VARCHAR(2000) DEFAULT 'admin@123',
	FOREIGN KEY (v_id) REFERENCES volunteer(v_id)
);

CREATE TABLE donations(
	d_id INT AUTO_INCREMENT PRIMARY KEY,
	d_name VARCHAR(100) NOT NULL,
	email VARCHAR(180) NOT NULL UNIQUE,
	phone VARCHAR(10) NOT NULL UNIQUE,
	occupation ENUM('Government service','Private service','Business','Retired','Farmer','Homemaker','Other') NOT NULL,
	payment_method ENUM('credit card','debit card','UPI') NOT  NULL,
	amount DECIMAL(10,2) CHECK (AMOUNT > 0),
	d_password VARCHAR(15) DEFAULT 'donor@123'
);

------------------------------------------ Insertion --------------------------------------------------------

-- Use the database
USE ngo_mgmt_system;

-- 1️⃣ Insert into application_list (20 applicants)
INSERT INTO application_list (appl_name, email, phone, dob)
VALUES
('Amit Sharma', 'amit@gmail.com', '9876543210', '1995-04-12'),
('Priya Singh', 'priya@gmail.com', '9876543211', '1998-07-23'),
('Rohan Patel', 'rohan@gmail.com', '9876543212', '1997-02-10'),
('Neha Verma', 'neha@gmail.com', '9876543213', '1996-08-30'),
('Suresh Das', 'suresh@gmail.com', '9876543214', '1990-05-22'),
('Kiran Rao', 'kiran@gmail.com', '9876543215', '1993-03-15'),
('Divya Nair', 'divya@gmail.com', '9876543216', '1994-10-18'),
('Vikram Mehta', 'vikram@gmail.com', '9876543217', '1992-09-12'),
('Ayesha Khan', 'ayesha@gmail.com', '9876543218', '1999-01-09'),
('Ravi Iyer', 'ravi@gmail.com', '9876543219', '1995-12-25'),
('Meena Joshi', 'meena@gmail.com', '9876543220', '1998-06-04'),
('Arjun Reddy', 'arjun@gmail.com', '9876543221', '1996-11-28'),
('Tina Paul', 'tina@gmail.com', '9876543222', '1997-03-10'),
('Sameer Khan', 'sameer@gmail.com', '9876543223', '1994-07-19'),
('Nisha Kulkarni', 'nisha@gmail.com', '9876543224', '1995-09-15'),
('Pankaj Gupta', 'pankaj@gmail.com', '9876543225', '1993-10-20'),
('Aarti Sharma', 'aarti@gmail.com', '9876543226', '1991-08-08'),
('Ritesh Patil', 'ritesh@gmail.com', '9876543227', '1992-01-30'),
('Swati Deshmukh', 'swati@gmail.com', '9876543228', '1997-04-18'),
('Jay Shah', 'jay@gmail.com', '9876543229', '1996-05-27');

-- 2️⃣ Insert into campaign (5 campaigns)
INSERT INTO campaign (c_name)
VALUES 
('Health Awareness'),
('Child Education'),
('Environmental Protection'),
('Women Empowerment'),
('Disaster Relief');

-- 3️⃣ Insert into volunteer (10 volunteers)
INSERT INTO volunteer (v_name, email, phone, dob, joining_date, c_id, appl_id)
VALUES
('Amit Sharma', 'amit_vol@gmail.com', '9810000001', '1995-04-12', '2022-01-15', 1, 1),
('Priya Singh', 'priya_vol@gmail.com', '9810000002', '1998-07-23', '2022-03-20', 2, 2),
('Rohan Patel', 'rohan_vol@gmail.com', '9810000003', '1997-02-10', '2021-07-01', 3, 3),
('Neha Verma', 'neha_vol@gmail.com', '9810000004', '1996-08-30', '2021-12-10', 4, 4),
('Suresh Das', 'suresh_vol@gmail.com', '9810000005', '1990-05-22', '2020-09-12', 5, 5),
('Kiran Rao', 'kiran_vol@gmail.com', '9810000006', '1993-03-15', '2023-02-01', 1, 6),
('Divya Nair', 'divya_vol@gmail.com', '9810000007', '1994-10-18', '2022-05-11', 2, 7),
('Vikram Mehta', 'vikram_vol@gmail.com', '9810000008', '1992-09-12', '2023-01-08', 3, 8),
('Ayesha Khan', 'ayesha_vol@gmail.com', '9810000009', '1999-01-09', '2023-04-20', 4, 9),
('Ravi Iyer', 'ravi_vol@gmail.com', '9810000010', '1995-12-25', '2023-06-05', 5, 10);

-- 4️⃣ Insert into admin (2 admins linked to volunteers)
INSERT INTO admin (admin_name, email, phone, dob, v_id)
VALUES
('Suresh Das', 'suresh_admin@gmail.com', '9820000001', '1980-05-22', 5),
('Vikram Mehta', 'vikram_admin@gmail.com', '9820000002', '1985-09-12', 8);

-- 5️⃣ Insert into donations (15 donors)
INSERT INTO donations (d_name, email, phone, occupation, payment_method, amount)
VALUES
('Ramesh Kumar', 'ramesh@gmail.com', '9900000001', 'Government service', 'UPI', 2500.00),
('Sneha Kapoor', 'sneha@gmail.com', '9900000002', 'Private service', 'credit card', 3500.00),
('Ajay Bhat', 'ajay@gmail.com', '9900000003', 'Business', 'debit card', 5000.00),
('Anita Rao', 'anita@gmail.com', '9900000004', 'Retired', 'UPI', 1200.00),
('Rahul Jain', 'rahul@gmail.com', '9900000005', 'Private service', 'credit card', 4200.00),
('Meera Joshi', 'meera@gmail.com', '9900000006', 'Homemaker', 'UPI', 800.00),
('Karan Singh', 'karan@gmail.com', '9900000007', 'Government service', 'debit card', 2000.00),
('Deepa Nair', 'deepa@gmail.com', '9900000008', 'Business', 'UPI', 10000.00),
('Vivek Sharma', 'vivek@gmail.com', '9900000009', 'Private service', 'credit card', 2500.00),
('Tina Mehta', 'tina@gmail.com', '9900000010', 'Homemaker', 'UPI', 1100.00),
('Ravi Menon', 'ravi_menon@gmail.com', '9900000011', 'Business', 'UPI', 7000.00),
('Anil Khanna', 'anil@gmail.com', '9900000012', 'Retired', 'debit card', 1500.00),
('Shalini Verma', 'shalini@gmail.com', '9900000013', 'Private service', 'credit card', 3000.00),
('Mohit Gupta', 'mohit@gmail.com', '9900000014', 'Government service', 'UPI', 2200.00),
('Nikita Das', 'nikita@gmail.com', '9900000015', 'Other', 'debit card', 900.00);
