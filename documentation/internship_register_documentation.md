# Database Documentation

### 1. `users` Table
Stores general information about users (admin, students, internal and external supervisors, and companies).

| Field Name   | Data Type  | Description                             |
|--------------|------------|-----------------------------------------|
| id           | INT        | Unique identifier for each user.        |
| username     | VARCHAR(50)| Username of the user.                   |
| password     | VARCHAR(255)| Password for the user.                 |
| email        | VARCHAR(100)| Email address of the user.             |
| role         | ENUM       | Role of the user (admin, student, supervisor, company). |

### 2. `students` Table
Contains information about students who are registering for internships.

| Field Name   | Data Type  | Description                             |
|--------------|------------|-----------------------------------------|
| id           | INT        | Unique identifier for each student.     |
| name         | VARCHAR(100)| Name of the student.                   |
| date_of_birth| DATE       | Birthdate of the student.               |
| student_id   | VARCHAR(20)| Unique student ID.                      |
| major        | VARCHAR(100)| Major or course of study.              |
| school_year  | INT        | Year of study (e.g., 1, 2, 3, 4).        |
| email        | VARCHAR(100)| Email address of the student.          |
| phone_number | VARCHAR(20)| Contact number of the student.         |
| user_id      | INT        | FK to `users` table (user information). |

### 3. `internal_supervisors` Table
Stores information about internal supervisors who are guiding students during their internships.

| Field Name   | Data Type  | Description                             |
|--------------|------------|-----------------------------------------|
| id           | INT        | Unique identifier for each supervisor.  |
| name         | VARCHAR(100)| Name of the supervisor.                |
| work_unit    | VARCHAR(100)| Department or unit the supervisor belongs to. |
| email        | VARCHAR(100)| Email address of the supervisor.       |
| phone_number | VARCHAR(20)| Contact number of the supervisor.      |
| user_id      | INT        | FK to `users` table (user information). |

### 4. `external_supervisors` Table
Stores information about external supervisors who are guiding students during their internships from partnering companies.

| Field Name   | Data Type  | Description                             |
|--------------|------------|-----------------------------------------|
| id           | INT        | Unique identifier for each external supervisor. |
| name         | VARCHAR(100)| Name of the supervisor.                |
| work_unit    | VARCHAR(100)| Company or organization the supervisor works for. |
| position     | VARCHAR(100)| Position of the external supervisor.   |
| email        | VARCHAR(100)| Email address of the supervisor.       |
| phone_number | VARCHAR(20)| Contact number of the supervisor.      |
| user_id      | INT        | FK to `users` table (user information). |

### 5. `companies` Table
Stores information about companies offering internship opportunities.

| Field Name   | Data Type  | Description                             |
|--------------|------------|-----------------------------------------|
| id           | INT        | Unique identifier for each company.     |
| name         | VARCHAR(100)| Name of the company.                   |
| address      | VARCHAR(255)| Address of the company.                |
| email        | VARCHAR(100)| Email address of the company.          |
| phone_number | VARCHAR(20)| Contact number of the company.         |
| user_id      | INT        | FK to `users` table (user information). |

## Relationships Between Tables
The following relationships exist between the tables:

- **Users** table has a **one-to-one** relationship with the **students**, **internal_supervisors**, **external_supervisors**, and **companies** tables.
  - The `user_id` in each of these tables references the `id` of the `users` table as a foreign key.

### Key Relationships:
- A **student** belongs to a **user** (through `user_id`).
- An **internal supervisor** belongs to a **user** (through `user_id`).
- An **external supervisor** belongs to a **user** (through `user_id`).
- A **company** belongs to a **user** (through `user_id`).


![ERD Diagram][def]
[def]: erd.drawio.png