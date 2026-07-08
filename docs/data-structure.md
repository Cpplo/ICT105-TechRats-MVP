# Data Structure

## Project Title

Student Internship & Entry-Level Job Platform

---

# 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
| -------------- | ------- | --------------- |
| Student | Store student accounts, personal information, verification status, and profiles. | S001, S002 |
| Employer | Store company accounts, company details, and verification status. | E001, E002 |
| Job Posting | Store internship and entry-level job listings published by employers. | J001, J002 |
| Application | Store job applications submitted by students. | A001, A002 |
| Resume & Portfolio | Store uploaded resumes, portfolios, and supporting documents. | P001, P002 |
| Saved Job | Store bookmarked jobs for each student. | SJ001, SJ002 |
| Message | Store conversations between students and employers. | M001, M002 |
| Report | Store reports submitted for suspicious job postings. | R001, R002 |
| Verification Request | Store verification requests awaiting administrator approval. | V001, V002 |
| Administrator | Store administrator accounts responsible for verification and moderation. | ADM001 |

---

# 2. Field Definition

| Entity | Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search / Filter? |
| ------ | ---------- | --------- | --------- | ------------- | --------------- | ------------------------- |
| Student | student_id | Text | Yes | S001 | Unique ID | Yes |
| Student | full_name | Text | Yes | Emily Johnson | Cannot be empty | Yes |
| Student | university_email | Email | Yes | emily@rsu.ac.th | Valid university email | Yes |
| Student | faculty | Text | Yes | Engineering | Required | Yes |
| Student | verification_status | List | Yes | Verified | Pending / Verified / Rejected | Yes |
| Employer | employer_id | Text | Yes | E001 | Unique ID | Yes |
| Employer | company_name | Text | Yes | ABC Solutions | Cannot be empty | Yes |
| Employer | business_registration | Text | Yes | BR-24581 | Required | No |
| Employer | verification_status | List | Yes | Pending | Pending / Verified / Rejected | Yes |
| Job Posting | job_id | Text | Yes | J001 | Unique ID | Yes |
| Job Posting | job_title | Text | Yes | Frontend Developer Intern | Required | Yes |
| Job Posting | category | Text | Yes | Software Development | Required | Yes |
| Job Posting | job_type | List | Yes | Internship | Internship / Entry-Level | Yes |
| Job Posting | status | List | Yes | Open | Open / Closed | Yes |
| Application | application_id | Text | Yes | A001 | Unique ID | Yes |
| Application | application_status | List | Yes | Pending | Pending / Shortlisted / Rejected / Accepted | Yes |
| Resume & Portfolio | portfolio_id | Text | Yes | P001 | Unique ID | No |
| Resume & Portfolio | file_name | Text | Yes | resume.pdf | PDF / DOCX | No |
| Saved Job | saved_job_id | Text | Yes | SJ001 | Unique ID | No |
| Message | message_id | Text | Yes | M001 | Unique ID | No |
| Report | report_id | Text | Yes | R001 | Unique ID | Yes |
| Report | report_status | List | Yes | Pending | Pending / Under Review / Resolved | Yes |
| Verification Request | verification_id | Text | Yes | V001 | Unique ID | Yes |
| Verification Request | verification_type | List | Yes | Student | Student / Employer | Yes |
| Administrator | admin_id | Text | Yes | ADM001 | Unique ID | No |

---

# 3. Status Values

## User Verification

| Status | Meaning | Who Can Update? |
| ------ | ------- | --------------- |
| Pending | Verification request submitted. | System |
| Verified | User successfully verified. | Administrator |
| Rejected | Verification request rejected. | Administrator |

---

## Job Posting

| Status | Meaning | Who Can Update? |
| ------ | ------- | --------------- |
| Draft | Job is being prepared. | Employer |
| Open | Students can apply. | Employer |
| Closed | Applications are no longer accepted. | Employer |

---

## Job Application

| Status | Meaning | Who Can Update? |
| ------ | ------- | --------------- |
| Pending | Application submitted. | System |
| Shortlisted | Candidate selected for review. | Employer |
| Accepted | Student accepted. | Employer |
| Rejected | Student not selected. | Employer |

---

## Report

| Status | Meaning | Who Can Update? |
| ------ | ------- | --------------- |
| Pending | Report submitted. | System |
| Under Review | Administrator reviewing report. | Administrator |
| Resolved | Report resolved. | Administrator |

---

# 4. Sample Records

The prototype uses sample data stored in:

```text
/data/

students.csv

employers.csv

jobs.csv

applications.csv

messages.csv

reports.csv

verification-requests.csv
```

These datasets simulate realistic interactions between students, employers, and administrators throughout the recruitment workflow.

---

# 5. Data Privacy Note

The prototype does not collect or store real personal information.

Sample data has been anonymized using fictional names, email addresses, company names, and identification numbers. Sensitive information such as passwords, national identification numbers, financial information, and official documents are not stored in the prototype.

Administrator verification is demonstrated using simulated records and predefined sample data to protect user privacy while accurately representing the intended system workflow.
