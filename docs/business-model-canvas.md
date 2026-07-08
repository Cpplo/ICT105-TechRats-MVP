# Wireframe Specification

## Project Title

Student Internship & Entry-Level Job Platform

---

## Required Wireframe Screens

Each wireframe represents a major workflow of the Student Internship & Entry-Level Job Platform and directly supports the Functional Requirements (FR-01 to FR-30).

| Wireframe File | Purpose | Minimum Elements to Show | Related Requirements |
|----------------|---------|--------------------------|----------------------|
| /wireframes/homepage.png | Landing page | Platform logo, navigation bar, Login, Register, Browse Jobs button, Featured Companies, Featured Jobs, About Platform, Footer | FR-01, FR-02 |
| /wireframes/register-login.png | User authentication | Student Login, Employer Login, Admin Login, Register buttons, Forgot Password, validation messages | FR-01, FR-02 |
| /wireframes/profile-verification.png | Registration, profile creation, and verification submission | Student/Employer role selection, profile form, resume upload, portfolio upload, company details, document upload, verification status, submit button | FR-03, FR-04, FR-05, FR-06, FR-07, FR-08, FR-26, FR-27 |
| /wireframes/job-list.png | Browse internship and entry-level jobs | Search bar, filters, beginner-friendly filter, category filter, verified company badge, saved job button, job cards | FR-10, FR-11, FR-12, FR-13, FR-18 |
| /wireframes/job-detail.png | View complete job information | Job description, company profile, verification badge, required skills, eligibility requirements, Apply button, Save Job, Report Job | FR-14, FR-15, FR-16, FR-17, FR-21 |
| /wireframes/student-dashboard.png | Student dashboard | Verification status, profile completion, saved jobs, applications, messages, notifications, quick statistics | FR-19, FR-20, FR-22, FR-24 |
| /wireframes/employer-dashboard.png | Employer dashboard | Verification status, company profile, active job posts, applicants, recruitment statistics, notifications | FR-23, FR-25, FR-28 |
| /wireframes/admin-dashboard.png | Administrative dashboard | KPI cards, pending student verifications, pending employer verifications, reported jobs, user statistics, charts, quick actions | FR-08, FR-09, FR-21, FR-27, FR-28, FR-29, FR-30 |
| /wireframes/verification-management.png | Admin verification management | Student verification requests, company verification requests, uploaded documents, approve/reject buttons, verification history | FR-08, FR-09, FR-27, FR-29 |
| /wireframes/user-management.png | Admin user management | Student list, employer list, account status, search, filters, suspend/reactivate account, activity log | FR-29, FR-30 |

---

## Wireframe Quality Rules

- Use consistent navigation and labels across all screens.
- Every screen must directly support one or more Functional Requirements.
- Use realistic sample data instead of placeholder text.
- Clearly distinguish Student, Employer, and Admin workflows.
- Display verification status using **Pending**, **Verified**, or **Rejected** badges.
- Include validation, confirmation, and error messages where appropriate.
- Keep layouts modern, responsive, and beginner-friendly.
- Use dashboard cards, tables, charts, and badges where appropriate.
- Wireframes may be created using Figma, Canva, HTML/CSS, PowerPoint, or another suitable design tool.
- Every wireframe should be traceable to the User Stories, MVP Feature List, and System Requirements.

---

## Navigation Flow

### Student

Homepage

↓

Register / Login

↓

Create Profile

↓

Upload Resume & Portfolio

↓

Verification Pending

↓

Browse Jobs

↓

View Job Details

↓

Apply for Job

↓

Track Applications

↓

Student Dashboard

---

### Employer

Homepage

↓

Register / Login

↓

Company Registration

↓

Upload Verification Documents

↓

Verification Pending

↓

Employer Dashboard

↓

Post Job

↓

Manage Applicants

---

### Admin

Login

↓

Admin Dashboard

↓

Review Student Verification

↓

Review Employer Verification

↓

Manage Users

↓

Review Reported Jobs

↓

View Platform Analytics

---

## Notes

- **Admin is not displayed in the public navigation bar.**
- Admin accesses the system through the Login page using administrator credentials.
- Students and Employers receive **Pending Verification** immediately after registration.
- Admin reviews submitted documents before granting **Verified** status.
- Only verified employers can publish internship or entry-level job postings.
- Student verification badges appear on student profiles.
- Company verification badges appear on company profiles and job listings.
- The Admin Dashboard provides a Power BI–style overview with KPI cards, charts, verification queues, reported jobs, and platform activity.
- Every wireframe directly supports the project's Functional Requirements (FR-01 to FR-30), User Stories, and MVP Feature List.
