-- Set delimiter to handle multi-line procedures
DELIMITER $$

-- Stored Procedure: Get student by ID
CREATE PROCEDURE GetStudentById(IN studentId INT)
BEGIN
    SELECT * FROM Users WHERE id = studentId;
END $$

-- Stored Procedure: Get all internship procedures
CREATE PROCEDURE GetAllInternshipProcedures()
BEGIN
    SELECT * FROM Internship_Procedures;
END $$

-- Stored Procedure: Get all student registrations by status
CREATE PROCEDURE GetStudentRegistrationsByStatus(IN status VARCHAR(50))
BEGIN
    SELECT * FROM Student_Registrations WHERE status = status;
END $$

-- Stored Procedure: Update student status
CREATE PROCEDURE UpdateStudentStatus(IN studentId INT, IN newStatus VARCHAR(50))
BEGIN
    UPDATE Student_Registrations
    SET status = newStatus
    WHERE student_id = studentId;
END $$

-- Reset delimiter
DELIMITER ;
