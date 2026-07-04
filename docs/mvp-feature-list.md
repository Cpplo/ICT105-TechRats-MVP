# Lab 04 - Updated MVP Feature List

## Project Title
Student Internship & Entry-Level Job Platform

## Updated Prototype Scope

This MVP focuses on helping **students and fresh graduates** discover trustworthy internship and entry-level job opportunities while helping **verified employers** post beginner-friendly roles and manage applicants.

The prototype is designed as an **interactive prototype only**. It will demonstrate the main user journeys, screens, forms, validation, verification flow, application flow, messaging flow, and tracking flow. It will not require a real database, real authentication, or a production backend.

## User Roles in Prototype

| Role | Description | Main Responsibility |
|---|---|---|
| Student | University student or fresh graduate looking for internships or entry-level jobs | Create profile, verify student status, upload resume/documents, search jobs, apply, message employers, track applications, and report suspicious jobs |
| Employer | Company, startup, or SME looking for beginner talent | Register company, submit company verification, post jobs after vertification, view applicants, message students, and update application status |

> Note: The prototype includes an **Admin Verification Page** only to demonstrate how verification and report review would work. Admin is not treated as a main user group for customer discovery because the platform mainly serves students and employers.

---

# MVP Decision Rule

A feature is included in the MVP if it directly supports one of these validated goals:

1. Help students find trustworthy internship and entry-level jobs.
2. Help students avoid unsuitable, fake, unclear, or non-beginner-friendly job posts.
3. Help employers recruit suitable beginner talent.
4. Build trust through student verification, company verification, and reporting.
5. Demonstrate the complete prototype workflow without requiring a real backend.

---

# MoSCoW Prioritization

| Feature ID | Feature Name | Problem Solved | Related User Story | Priority | Technical Complexity (1-5) | User Value (1-5) | Evidence Strength (1-5) | Include in Prototype |
| ---------- | ------------ | -------------- | ------------------ | -------- | -------------------------- | ---------------- | ----------------------- | -------------------- |
| F01 | Simulated User Registration & Login | Allows students and employers to access the prototype with role-based screens | US-01 | Must | 2 | 5 | 5 | Yes |
| F02 | Role Selection | Separates student and employer workflows clearly | US-01 | Must | 1 | 5 | 5 | Yes |
| F03 | Student Profile Management | Students present education, skills, interests, and contact information | US-02 | Must | 2 | 5 | 5 | Yes |
| F04 | Student Verification Detection | Helps confirm whether a student appears legitimate using university email, student ID, or document upload | US-02 | Must | 3 | 5 | 5 | Yes |
| F05 | Resume & Supporting Document Upload | Students apply using a resume and optional supporting documents such as portfolio, certificate, or transcript | US-03 | Must | 3 | 5 | 5 | Yes |
| F06 | Employer Registration | Employers create company accounts before using employer features | US-04 | Must | 2 | 5 | 5 | Yes |
| F07 | Company Verification Detection | Prevents unverified companies from posting jobs and improves student trust | US-04 | Must | 3 | 5 | 5 | Yes |
| F08 | Verified Badge Display | Shows verified student/company status inside the prototype | US-04 | Must | 2 | 5 | 5 | Yes |
| F09 | Internship & Entry-Level Job Posting | Verified employers can publish beginner-friendly opportunities | US-05 | Must | 3 | 5 | 5 | Yes |
| F10 | Block Job Posting Before Verification | Prevents employers from posting jobs until verification is approved | US-05 | Must | 2 | 5 | 5 | Yes |
| F11 | Browse & Search Jobs | Students quickly discover available opportunities | US-06 | Must | 2 | 5 | 5 | Yes |
| F12 | Beginner-Friendly & Eligibility Filters | Students avoid unsuitable roles by filtering based on beginner level, skills, location, work mode, and eligibility | US-06 | Must | 2 | 5 | 5 | Yes |
| F13 | Job Detail Page | Students can review complete job information before applying | US-07 | Must | 2 | 5 | 5 | Yes |
| F14 | Company Profile Viewing | Students can check company information and verification status before applying | US-07 | Must | 2 | 5 | 5 | Yes |
| F15 | Job Application Submission | Students apply directly through the platform using resume and supporting documents | US-08 | Must | 3 | 5 | 5 | Yes |
| F16 | Saved Jobs | Students save interesting jobs for later review | US-09 | Should | 2 | 4 | 4 | Yes |
| F17 | Application Tracker | Students monitor application status and deadlines | US-09 | Must | 3 | 5 | 5 | Yes |
| F18 | Employer Applicant Management Dashboard | Employers review applicants and manage hiring progress | US-10 | Should | 3 | 5 | 5 | Yes |
| F19 | Student Profile & Resume Viewing | Employers evaluate applicant profiles, resumes, and documents | US-10 | Should | 2 | 5 | 5 | Yes |
| F20 | Direct Messaging | Students and employers can communicate after application or about job details | US-11 | Should | 3 | 4 | 4 | Yes |
| F21 | Application Status Update | Employers can update applicant status such as Under Review, Interview, Accepted, or Rejected | US-11 | Should | 2 | 5 | 5 | Yes |
| F22 | Job Report & Moderation Flow | Students can report suspicious or misleading job postings | US-12 | Should | 3 | 4 | 4 | Yes |
| F23 | Admin Verification Page | Demonstrates company/student verification review and report handling in the prototype | US-12 | Should | 3 | 4 | 4 | Yes |
| F24 | Confirmation & Error Messages | Users receive feedback after registration, verification, job posting, applying, messaging, and reporting | FR-14 | Should | 2 | 4 | 4 | Yes |
| F25 | Responsive User Interface | Prototype works clearly on desktop and mobile screen sizes | FR-15 | Must | 2 | 5 | 5 | Yes |
| F26 | Privacy-Aware Interface | Prototype avoids unnecessary personal data and shows responsible data handling | FR-16 | Must | 2 | 5 | 5 | Yes |

---

# Must-Have Features

These are the minimum features required to demonstrate the core MVP.

- Simulated registration and login
- Role selection for student or employer
- Student dashboard
- Employer dashboard
- Student profile management
- Student verification detection
- Resume and supporting document upload
- Employer registration
- Company verification detection
- Verified badge display
- Employer job posting only after verification
- Browse and search jobs
- Beginner-friendly and eligibility filters
- Job detail page
- Company profile viewing
- Job application using resume and supporting documents
- Application tracker
- Responsive interface
- Privacy-aware interface

---

# Should-Have Features

These improve usability, trust, and recruitment efficiency.

- Saved jobs
- Employer applicant management dashboard
- Student profile and resume viewing for employers
- Direct messaging between students and employers
- Application status updates
- Job reporting and moderation flow
- Admin verification page for prototype demonstration
- Confirmation and error messages

---

# Could-Have Features

These are useful but not required for the first prototype.

- AI-assisted verification detection for student or company documents
- AI job recommendation
- Resume feedback using AI
- Skill-gap analysis
- Career roadmap suggestions
- Email notifications
- Interview scheduling
- University Single Sign-On
- Analytics dashboard

---

# Not Included in the MVP

The following features will not be implemented in the semester MVP.

- Real production login system
- Real database connection
- Real document verification with official institutions
- Real AI model integration unless simple simulated verification is needed
- AI-powered job recommendations
- AI resume evaluation
- Online interview scheduling
- Video interviews
- Mobile application
- Push notifications
- Calendar synchronization
- University Single Sign-On
- Recruitment analytics dashboard

---

# Final Prototype Scope

## Included in MVP

The first version of the Student Internship & Entry-Level Job Platform will include:

- Login page with simulated student/employer login
- Student dashboard
- Employer dashboard
- Job listing page
- Job detail page
- Application tracker
- Admin verification page for prototype demonstration
- Student profile management
- Resume and supporting document upload
- Student verification detection
- Employer registration
- Company verification detection
- Verified badge display
- Internship and entry-level job posting for verified employers only
- Browse and search jobs
- Beginner-friendly and eligibility filters
- Company profile viewing
- Job application
- Saved jobs
- Applicant management dashboard
- Direct messaging
- Job reporting and moderation flow
- Confirmation and error messages
- Responsive and privacy-aware interface

## Excluded from MVP

The following features are planned for future versions after MVP validation:

- Production database
- Real authentication system
- Official university or company verification API
- Full AI verification system
- AI job recommendation
- AI resume evaluation
- Interview scheduling
- Email notifications
- Calendar integration
- Mobile application
- University SSO
- Analytics dashboard
- Career roadmap generation

---

# Updated MVP Assumptions

| Assumption | Prototype Decision |
|---|---|
| Students need trustworthy internship and entry-level job listings | Include verified badges, company profile viewing, and reporting |
| Employers should not post jobs before being verified | Block job posting until company verification is approved |
| Students should show proof before applying | Require resume and allow additional supporting documents |
| Messaging improves recruitment communication | Include simple direct messaging flow |
| Prototype does not need real backend | Use simulated login, sample data, and clickable/interactable flows |
| AI verification may be useful but is not required | Include as optional could-have or simulated detection only |

