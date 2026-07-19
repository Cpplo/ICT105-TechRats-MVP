# Data Handling Policy

## Data Collection
What data will the prototype collect?

The Student Internship & Entry-Level Job Platform collects only the data required to support authentication, verification, job posting, applications, and communication between Students, Employers, and Admin (FR-01 to FR-30).

**Student data:** Full name, university email, student ID, university/faculty, profile photo (optional), resume (PDF), portfolio link (optional), career interests, application records.

**Employer data:** Company name, company logo, official company email, business registration certificate, company description, job post details (title, description, location, work mode, required skills, eligibility, deadline).

**System-generated data:** Verification status (Pending/Verified/Rejected), application status (Applied/Under Review/Interview/Accepted/Rejected/Closed), notifications, job reports.

No financial information, banking details, biometric data, or government ID numbers are collected.

## Data Storage
Where will data be stored or simulated? Examples: CSV, Google Sheet, localStorage, database, Airtable, Firebase, or sample dataset.

Data is simulated using **Google Sheets**, consistent with FR-04 (Data Storage & Record Management), which requires that submitted profiles, job posts, and applications persist and can be viewed as records. Each major data type (student profiles, employer profiles, job posts, applications, verification requests) is stored in a separate sheet/tab acting as a simulated table. No real production database is used, and all data is sample data created for demonstration purposes only.

## Data Access
Who can view or update the data?

Access follows Role-Based Access Control (RBAC), consistent with `privacy-and-data-protection.md`:

- **Students** can view and edit only their own profile, resume, applications, and saved jobs.
- **Employers** can view applicant profiles and resumes only for jobs they have posted, and can update application status only for their own job posts.
- **Admin** can view verification documents (student ID, business registration certificate) and reported jobs solely for verification and moderation purposes.
- Verification documents are never displayed publicly and are not accessible to other Students or Employers.

## Data Minimization
Which fields are removed because they are unnecessary?

- No passwords in plain text (login is simulated, not real authentication).
- No government-issued identification numbers.
- No banking or financial information.
- No biometric data.
- Profile photo and portfolio link are optional, not required.
- Student ID and business registration certificate are collected only for verification and are not displayed publicly or stored longer than needed for the verification demo.

## Responsible Data Rule

The prototype must avoid unnecessary sensitive data and use sample/masked data when possible. All resumes, verification documents, and company registration files used in testing must be sample or dummy files — no real personal identification, real resumes, or real business documents should be uploaded during demonstration or grading.
