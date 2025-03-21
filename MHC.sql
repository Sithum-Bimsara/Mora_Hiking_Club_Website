-- Drop and create schema
DROP SCHEMA IF EXISTS mora_hiking_club;
CREATE SCHEMA mora_hiking_club;
USE mora_hiking_club;

-- Drop tables if they exist
DROP TABLE IF EXISTS knowledge;
DROP TABLE IF EXISTS knowledge_category;
DROP TABLE IF EXISTS partner;
DROP TABLE IF EXISTS event_category;
DROP TABLE IF EXISTS event;
DROP TABLE IF EXISTS emergency_contact_person;
DROP TABLE IF EXISTS applicant;
DROP TABLE IF EXISTS member;
DROP TABLE IF EXISTS event_partner;
DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS event_participant;
DROP TABLE IF EXISTS article_comment;
DROP TABLE IF EXISTS feedback;

-- Create tables
CREATE TABLE `knowledge` (
  `id` INT AUTO_INCREMENT,
  `topic` VARCHAR(255) NOT NULL,
  `images_link` TEXT,
  `description` TEXT,
  PRIMARY KEY (`id`)
);

-- CREATE TABLE `partner` (
--   `partner_id` INT AUTO_INCREMENT,
--   `partner_name` VARCHAR(255) NOT NULL,
--   `partner_logo_link` TEXT,
--   PRIMARY KEY (`partner_id`)
-- );


CREATE TABLE `event` (
  `id` INT AUTO_INCREMENT,
  `event_category` VARCHAR(255) NOT NULL,
  `place_name` VARCHAR(255) NOT NULL,
  `place_description` TEXT,
  `date` DATE,
  `image_link` TEXT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `applicant` (
  `applicant_id` INT AUTO_INCREMENT,
  `application_status` ENUM('pending', 'approved', 'rejected') NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `full_name` VARCHAR(255) NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `NIC_no` VARCHAR(20) UNIQUE NOT NULL,
  `gender` ENUM('male', 'female') NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `contact_no` VARCHAR(20) NOT NULL,
  `university_id` VARCHAR(20) UNIQUE NOT NULL,
  `faculty` VARCHAR(255) NOT NULL,
  `degree_program` VARCHAR(255) NOT NULL,
  `year` INT NOT NULL,
  `bio_description` TEXT,
  -- `skills` ENUM('Photography', 'Videography', 'Photo Editing', 'Video Editing', 'First Aid', 'Article Writing', 'Sponsorship Hunting', 'Fund Raising', 'Event Planning', 'Risk Management', 'Designing(Photoshop, Coreldraw, Illustrator)', 'Web Designing and Development'),
  `skills` TEXT,
  `facebook_url` TEXT,
  `instagram_url` TEXT,
  `blood_type` ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
  `first_aid_skills` TEXT,
  `injuries` TEXT,
  `long_term_medical_issues` TEXT,
  `medicines` TEXT,
  `payment_proof_link` TEXT,
  `applied_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`applicant_id`)
);

CREATE TABLE `emergency_contact_person` (
  `person_id` INT AUTO_INCREMENT,
  `person_name` VARCHAR(100) NOT NULL,
  `applicant_id` INT NOT NULL,
  `relationship` VARCHAR(100) NOT NULL,
  `contact_no_1` VARCHAR(20) NOT NULL,
  `contact_no_2` VARCHAR(20),
  `address` TEXT NOT NULL,
  PRIMARY KEY (`person_id`),
  FOREIGN KEY (`applicant_id`) REFERENCES `applicant`(`applicant_id`)
);

CREATE TABLE `member` (
  `member_id` INT AUTO_INCREMENT,
  `applicant_id` INT UNIQUE,
  `membership_type` ENUM('regular member', 'fellow member') NOT NULL,
  `role` ENUM('member', 'admin', 'super_admin') NOT NULL,
  `profile_pic_link` TEXT,
  PRIMARY KEY (`member_id`),
  FOREIGN KEY (`applicant_id`) REFERENCES `applicant`(`applicant_id`)
) AUTO_INCREMENT=250000;

-- CREATE TABLE `event_partner` (
--   `partner_id` INT,
--   `event_id` INT,
--   PRIMARY KEY (`partner_id`, `event_id`),
--   FOREIGN KEY (`partner_id`) REFERENCES `partner`(`partner_id`),
--   FOREIGN KEY (`event_id`) REFERENCES `event`(`id`)
-- );

CREATE TABLE `article` (
  `id` INT AUTO_INCREMENT,
  `member_id` INT,
  `topic` VARCHAR(255) NOT NULL,
  `images_link` TEXT,
  `description` TEXT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`member_id`) REFERENCES `member`(`member_id`)
);

CREATE TABLE `event_participant` (
  `event_id` INT,
  `member_id` INT,
  `participation_status` ENUM('pending', 'selected', 'not selected') NOT NULL,
  PRIMARY KEY (`event_id`, `member_id`),
  FOREIGN KEY (`event_id`) REFERENCES `event`(`id`),
  FOREIGN KEY (`member_id`) REFERENCES `member`(`member_id`)
);

CREATE TABLE `article_comment` (
  `id` INT AUTO_INCREMENT,
  `article_id` INT,
  `commenter_name` VARCHAR(255) NOT NULL,
  `comment` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`article_id`) REFERENCES `article`(`id`) ON DELETE CASCADE
);

CREATE TABLE `feedback` (
  `id` INT AUTO_INCREMENT,
  `event_id` INT,
  `rating` INT CHECK (rating BETWEEN 0 AND 5),
  `review` TEXT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`event_id`) REFERENCES `event`(`id`)
);

-- Triggers
DELIMITER $$

-- Once applicant gets approved, they become members
CREATE TRIGGER after_applicant_approval
AFTER UPDATE ON applicant
FOR EACH ROW
BEGIN
    -- Check if the status changed to 'approved'
    IF OLD.application_status <> 'approved' AND NEW.application_status = 'approved' THEN
        INSERT INTO member (applicant_id, membership_type, role)
        VALUES (NEW.applicant_id, 'regular member', 'member');
    END IF;
END $$


-- Delete all comments related to an article when the article is deleted
CREATE TRIGGER before_article_deletion
BEFORE DELETE ON article
FOR EACH ROW
BEGIN
    DELETE FROM article_comment WHERE article_id = OLD.id;
END $$


-- Update application status to 'pending' when a payment proof is uploaded
CREATE TRIGGER before_payment_proof_upload
BEFORE UPDATE ON applicant
FOR EACH ROW
BEGIN
    IF OLD.payment_proof_link IS NULL AND NEW.payment_proof_link IS NOT NULL THEN
        SET NEW.application_status = 'pending';
    END IF;
END $$


CREATE PROCEDURE `AddNewApplicant` (
	IN p_password_hash VARCHAR(255),
    IN p_first_name VARCHAR(100),
    IN p_last_name VARCHAR(100),
    IN p_full_name VARCHAR(255),
    IN p_date_of_birth DATE,
    IN p_NIC_no VARCHAR(20),
    IN p_gender ENUM('male', 'female'),
    IN p_email VARCHAR(255),
    IN p_contact_no VARCHAR(20),
    IN p_university_id VARCHAR(20),
    IN p_faculty VARCHAR(255),
    IN p_degree_program VARCHAR(255),
    IN p_year INT,
    IN p_bio_description TEXT,
    IN p_skills TEXT,
    IN p_facebook_url TEXT,
    IN p_instagram_url TEXT,
    IN p_blood_type ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
    IN p_first_aid_skills TEXT,
    IN p_injuries TEXT,
    IN p_long_term_medical_issues TEXT,
    IN p_medicines TEXT,
    IN p_payment_proof_link TEXT,
    IN p_emergency_relationship VARCHAR(100),
    IN p_emergency_contact_name VARCHAR(255),
    IN p_emergency_contact_no_1 VARCHAR(20),
    IN p_emergency_contact_no_2 VARCHAR(20),
    IN p_emergency_address TEXT
)
BEGIN
    DECLARE new_applicant_id INT;

    -- Insert new applicant
    INSERT INTO applicant (
        application_status, password_hash, first_name, last_name, full_name, date_of_birth, NIC_no, gender, email, 
        contact_no, university_id, faculty, degree_program, year, bio_description, skills, facebook_url, 
        instagram_url, blood_type, first_aid_skills, injuries, long_term_medical_issues, medicines, payment_proof_link
    ) VALUES (
        'pending', p_password_hash, p_first_name, p_last_name, p_full_name, p_date_of_birth, p_NIC_no, 
        p_gender, p_email, p_contact_no, p_university_id, p_faculty, p_degree_program, p_year, p_bio_description, 
        p_skills, p_facebook_url, p_instagram_url, p_blood_type, p_first_aid_skills, p_injuries, 
        p_long_term_medical_issues, p_medicines, p_payment_proof_link
    );

    -- Get the last inserted applicant ID
    SET new_applicant_id = LAST_INSERT_ID();

    -- Insert emergency contact details
    INSERT INTO emergency_contact_person (
        applicant_id, relationship, person_name, contact_no_1, contact_no_2, address
    ) VALUES (
        new_applicant_id, p_emergency_relationship, p_emergency_contact_name, p_emergency_contact_no_1, p_emergency_contact_no_2, p_emergency_address
    );

END $$


DELIMITER ;




