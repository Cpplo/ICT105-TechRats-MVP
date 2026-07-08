# Feature-Requirement Mapping

## Project Title
Student Internship & Entry-Level Job Platform

This document maps every planned prototype screen and feature to the corresponding Functional Requirements (FR) and User Stories (US). It demonstrates full traceability between the system requirements, wireframes, and the final interactive prototype.

| Feature ID | Feature / Screen | Requirement ID | User Story ID | Purpose | Wireframe File | Final Prototype Module |
|------------|------------------|----------------|---------------|---------|----------------|------------------------|
| F-01 | Landing / Homepage | FR-01, FR-02 | US-01 | Introduce the platform and allow users to register or log in as Student or Employer. | `/wireframes/homepage.png` | `/prototype/index.html` |
| F-02 | Registration & Login | FR-01, FR-02 | US-01 | Simulate user registration, login, and role selection. | `/wireframes/login-register.png` | `/prototype/login.html` |
| F-03 | Student Dashboard | FR-12, FR-17, FR-18 | US-10 | Display profile completion, verification status, saved jobs, applications, and dashboard summary. | `/wireframes/student-dashboard.png` | `/prototype/student-dashboard.html` |
| F-04 | Student Profile Management | FR-03, FR-04 | US-02 | Allow students to create and edit their profile information. | `/wireframes/student-profile.png` | `/prototype/student-profile.html` |
| F-05 | Resume & Document Upload | FR-05, FR-06 | US-03 | Allow students to upload resumes and supporting documents. | `/wireframes/resume-upload.png` | `/prototype/resume-upload.html` |
| F-06 | Employer Dashboard | FR-12, FR-19, FR-20 | US-11, US-12, US-13 | Display company verification status, job posts, applicants, and dashboard summary. | `/wireframes/employer-dashboard.png` | `/prototype/employer-dashboard.html` |
| F-07 | Employer Registration & Company Profile | FR-07, FR-08 | US-04 | Allow employers to register and manage company information. | `/wireframes/company-profile.png` | `/prototype/company-profile.html` |
| F-08 | Verification Management | FR-05, FR-08, FR-29, FR-30 | US-04 | Demonstrate student/company verification workflow and verified badge display. | `/wireframes/verification-page.png` | `/prototype/verification.html` |
| F-09 | Job Posting Management | FR-10, FR-30 | US-05 | Allow verified employers to create, edit, and publish internship and entry-level job opportunities. | `/wireframes/job-posting.png` | `/prototype/job-posting.html` |
| F-10 | Job Listings & Search | FR-11 | US-06 | Allow students to browse and search available internship and entry-level jobs. | `/wireframes/job-list.png` | `/prototype/job-list.html` |
| F-11 | Beginner-Friendly Job Filter | FR-13 | US-06 | Enable students to filter jobs based on beginner-friendly status and eligibility. | `/wireframes/job-filter.png` | `/prototype/job-filter.html` |
| F-12 | Job Detail Page | FR-14 | US-07 | Display detailed information about internship or job opportunities before application. | `/wireframes/job-detail.png` | `/prototype/job-detail.html` |
| F-13 | Company Profile Viewing | FR-15, FR-29 | US-07 | Allow students to view company information and verification status before applying. | `/wireframes/company-detail.png` | `/prototype/company-detail.html` |
| F-14 | Job Application Page | FR-16 | US-09 | Allow students to submit applications using resumes and supporting documents. | `/wireframes/job-application.png` | `/prototype/job-application.html` |
| F-15 | Saved Jobs | FR-18 | US-10 | Allow students to bookmark interesting job opportunities. | `/wireframes/saved-jobs.png` | `/prototype/saved-jobs.html` |
| F-16 | Application Tracker | FR-17, FR-20 | US-10, US-13 | Allow students to monitor application progress and updated application statuses. | `/wireframes/application-tracker.png` | `/prototype/application-tracker.html` |
| F-17 | Employer Applicant Management | FR-09, FR-19, FR-20 | US-11, US-12, US-13 | Allow employers to review applicants, filter candidates, view resumes, and update application status. | `/wireframes/applicant-management.png` | `/prototype/applicant-management.html` |
| F-18 | Messaging | FR-21 | US-08 | Allow students and employers to communicate regarding internship and job opportunities. | `/wireframes/messages.png` | `/prototype/messages.html` |
| F-19 | Job Reporting | FR-22 | US-14 | Allow students to report suspicious or misleading job postings. | `/wireframes/report-job.png` | `/prototype/report-job.html` |
| F-20 | Admin Dashboard & Verification | FR-23, FR-28, FR-29, FR-30 | US-14 | Demonstrate verification approval, report handling, and platform administration. | `/wireframes/admin-dashboard.png` | `/prototype/admin-dashboard.html` |
| F-21 | Confirmation & Validation Messages | FR-24, FR-25 | US-15 | Display confirmation messages, validation errors, and success notifications. | `/wireframes/validation.png` | `/prototype/components/messages.html` |
| F-22 | Responsive & Privacy-Aware Interface | FR-26, FR-27 | US-15 | Demonstrate responsive layouts and privacy-aware handling of user information. | `/wireframes/responsive-layout.png` | `/prototype/shared/layout.html` |

---

# Requirement Traceability Summary

| Functional Requirement | Covered By Feature(s) |
|------------------------|-----------------------|
| FR-01 | F-01, F-02 |
| FR-02 | F-01, F-02 |
| FR-03 | F-04 |
| FR-04 | F-04 |
| FR-05 | F-05, F-08 |
| FR-06 | F-05 |
| FR-07 | F-07 |
| FR-08 | F-07, F-08 |
| FR-09 | F-17 |
| FR-10 | F-09 |
| FR-11 | F-10 |
| FR-12 | F-03, F-06 |
| FR-13 | F-11 |
| FR-14 | F-12 |
| FR-15 | F-13 |
| FR-16 | F-14 |
| FR-17 | F-03, F-16 |
| FR-18 | F-03, F-15 |
| FR-19 | F-06, F-17 |
| FR-20 | F-16, F-17 |
| FR-21 | F-18 |
| FR-22 | F-19 |
| FR-23 | F-20 |
| FR-24 | F-21 |
| FR-25 | F-21 |
| FR-26 | F-22 |
| FR-27 | F-22 |
| FR-28 | F-20 |
| FR-29 | F-08, F-13, F-20 |
| FR-30 | F-08, F-09, F-20 |

---

# Summary

This Feature-Requirement Mapping demonstrates complete traceability between the MVP features, Functional Requirements, User Stories, wireframes, and final prototype modules. Every screen in the prototype supports one or more validated requirements identified during customer discovery, ensuring the MVP remains focused on helping university students and fresh graduates find trustworthy internship and entry-level opportunities while enabling verified employers to recruit beginner talent effectively.
