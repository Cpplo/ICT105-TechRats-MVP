# Feature-Value Mapping

## Project Title

Student Internship & Entry-Level Job Platform

## Purpose

This document maps each MVP feature to the corresponding Functional Requirement (FR), User Story (US), user value, business value, and prototype module. It demonstrates how every feature contributes to solving validated customer problems while supporting the overall business objectives of the platform.

---

| Feature ID | MVP Feature | Requirement ID | User Story ID | User Value | Business / Operational Value | Prototype Screen / Module | Priority |
| ---------- | ----------- | -------------- | ------------- | ---------- | ---------------------------- | ------------------------- | -------- |
| F-01 | User Registration & Login | FR-01, FR-02 | US-01 | Allows students and employers to securely access the platform. | Creates authenticated user accounts and enables role-based access. | `login.html` | Must |
| F-02 | Student Profile Management | FR-03, FR-04 | US-02 | Students can showcase their background, education, and skills. | Provides structured candidate information for employers. | `student-profile.html` | Must |
| F-03 | Resume & Portfolio Upload | FR-05, FR-06 | US-03 | Students can demonstrate qualifications and previous work. | Improves employer confidence and hiring quality. | `resume-upload.html` | Must |
| F-04 | Company Registration & Verification | FR-07, FR-08 | US-04 | Students can trust verified employers. | Reduces fake employers and improves platform credibility. | `company-profile.html` | Must |
| F-05 | Job Posting & Management | FR-09, FR-10 | US-05 | Employers can publish internship and entry-level opportunities. | Generates opportunities that attract student users. | `job-posting.html` | Must |
| F-06 | Browse & Search Jobs | FR-11 | US-06 | Students quickly find suitable opportunities. | Increases platform engagement and job visibility. | `job-list.html` | Must |
| F-07 | Beginner-Friendly Job Filter | FR-12, FR-13 | US-06 | Reduces time spent searching unsuitable jobs. | Improves matching quality between students and employers. | `job-filter.html` | Must |
| F-08 | Company Profile Viewing | FR-14, FR-15 | US-07 | Students can review company information before applying. | Builds trust and transparency. | `company-detail.html` | Must |
| F-09 | Job Application | FR-16 | US-08 | Students can apply directly through the platform. | Generates applicant records for employers. | `job-application.html` | Must |
| F-10 | Application Tracking | FR-17 | US-09 | Students can monitor application progress. | Improves communication and user satisfaction. | `application-tracker.html` | Must |
| F-11 | Saved Jobs | FR-18 | US-10 | Students can bookmark opportunities for later. | Encourages repeat platform usage. | `saved-jobs.html` | Should |
| F-12 | Employer Applicant Management | FR-19, FR-20 | US-11, US-12 | Employers can review and manage applicants efficiently. | Reduces manual recruitment effort. | `applicant-management.html` | Must |
| F-13 | Messaging System | FR-21 | US-13 | Enables communication between students and employers. | Improves collaboration and hiring efficiency. | `messages.html` | Should |
| F-14 | Job Reporting | FR-22 | US-14 | Students can report suspicious job postings. | Maintains platform quality and safety. | `report-job.html` | Should |
| F-15 | Dashboard & Analytics | FR-23, FR-24 | US-15 | Students, employers, and admins can monitor important information through personalized dashboards. | Supports decision-making and platform monitoring. | `student-dashboard.html`, `employer-dashboard.html`, `admin-dashboard.html` | Must |
| F-16 | Admin Verification & Moderation | FR-25–FR-30 | US-15 | Ensures only verified students and employers receive trusted badges. | Maintains platform security, trust, and data integrity. | `admin-dashboard.html` | Must |

---

# Reflection

## Which feature creates the strongest user value?

**Company Verification & Admin Verification** create the strongest user value because customer discovery showed that students are concerned about employer legitimacy while employers need confidence in student qualifications. Administrator approval and verified badges increase trust for both user groups.

---

## Which feature creates the strongest business or operational value?

**Employer Applicant Management** creates the strongest operational value by allowing employers to efficiently review applicants, update application statuses, and manage recruitment within a centralized system, reducing manual administrative work.

---

## Which required feature is still weak or unclear?

The **Messaging System** and **Dashboard Analytics** are currently simulated within the prototype and do not include real-time communication or live analytics. These features will require backend services and database integration in future development beyond the MVP.
