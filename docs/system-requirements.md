# System Requirements

## Project Title
Student Internship & Entry-Level Job Platform

## Prototype Scope

This document defines the updated system requirements for an **interactive prototype** of the Student Internship & Entry-Level Job Platform. The prototype will demonstrate the main workflows for two main user roles: **Student** and **Employer**.

The prototype will not use a real production database or real authentication system. Instead, it will use simulated login, sample data, form validation, interactive screens, and prototype-level verification logic.

---

# User Roles

| Role | Description |
|---|---|
| Student | A university student or fresh graduate searching for internships or entry-level jobs |
| Employer | A company, startup, or SME posting beginner-friendly internship or entry-level opportunities |

> The prototype includes an **Admin Verification Page** to demonstrate verification and report handling, but Admin is not a main user role in the customer-facing platform.

---

# Main Prototype Screens

| Screen | Purpose |
|---|---|
| Login Page | Allows simulated login and role selection for Student or Employer |
| Student Dashboard | Shows profile status, verification status, saved jobs, applications, and recommended actions |
| Employer Dashboard | Shows company verification status, job posts, applicants, and messages |
| Job Listing Page | Allows students to browse, search, and filter internship or entry-level jobs |
| Job Detail Page | Shows job description, company profile, eligibility, beginner-friendly status, and apply button |
| Application Tracker | Allows students to monitor application status and deadlines |
| Admin Verification Page | Demonstrates student/company verification review and reported job handling |

---

# Functional Requirements

| Req ID | Functional Requirement | What the Prototype Must Show |
| ------- | ---------------------- | ----------------------------- |
| **FR-01** | **Simulated Registration & Login** | The prototype shall allow students and employers to enter the system through a simulated login page. Real authentication is not required. |
| **FR-02** | **Role Selection** | The prototype shall direct users to either the Student Dashboard or Employer Dashboard based on selected role. |
| **FR-03** | **Student Profile Management** | Students shall be able to create or edit a profile containing name, university, education level, skills, career interests, contact details, and verification status. |
| **FR-04** | **Data Storage & Record Management** | Submitted profiles, project posts, and applications must be stored and displayed using local storage, JSON, Google Sheets, Firebase, or Airtable. The prototype must show that submitted data persists and can be viewed as records. |
| **FR-05** | **Student Verification Detection** | The prototype shall show a student verification process using simulated checks such as university email, student ID, resume, transcript, or student document upload. |
| **FR-06** | **Resume & Supporting Document Upload** | Students shall be able to upload or attach a resume and optional supporting documents such as portfolio, certificate, transcript, or cover letter. |
| **FR-07** | **Employer Registration** | Employers shall be able to create a company profile with company name, industry, website/contact information, and description. |
| **FR-08** | **Company Verification Detection** | The prototype shall show a company verification process using simulated checks such as business email, company website, business document, or admin review. |
| **FR-09** | **Company Applicant Management** | Companies shall be able to view all applicants for each project post, review student profiles and portfolios, filter applicants by skills or status, and update application status. Updated status must appear in the student application tracker. |
| **FR-10** | **Internship & Entry-Level Job Posting** | Verified employers shall be able to create, edit, and publish job posts with title, description, location, work mode, required skills, eligibility, deadline, and beginner-friendly status. |
| **FR-11** | **Browse & Search Jobs** | Students shall be able to browse and search internship and entry-level job opportunities. |
| **FR-12** | **Dashboard & Summary View** | The prototype must include a dashboard for both Student and Employer roles. Student dashboard must show total applications, application statuses, and saved jobs. Employer dashboard must show total job posts, total applicants, and pending reviews. |
| **FR-13** | **Beginner-Friendly & Eligibility Filters** | Students shall be able to filter jobs by category, location, industry, work mode, beginner-friendly status, skill requirement, education level, language requirement, and visa/work eligibility. |
| **FR-14** | **Job Detail Viewing** | Students shall be able to view full job details before applying. |
| **FR-15** | **Company Profile Viewing** | Students shall be able to view company profile, company description, verification badge, industry, contact details, and posted opportunities. |
| **FR-16** | **Job Application Submission** | Students shall be able to apply for jobs using their resume and selected supporting documents. |
| **FR-17** | **Application Tracker** | Students shall be able to track application progress using statuses such as Applied, Under Review, Interview, Accepted, Rejected, or Closed. |
| **FR-18** | **Saved Jobs** | Students shall be able to save interesting job posts and view them later from the Student Dashboard. |
| **FR-19** | **Employer Applicant Management** | Employers shall be able to view applicants for each job post, review student profiles, view resumes/documents, and filter applicants by skills or status. |
| **FR-20** | **Application Status Update** | Employers shall be able to update application statuses, and the updated status shall appear in the student application tracker. |
| **FR-21** | **Direct Messaging** | Students and employers shall be able to send simple messages about job opportunities, applications, and next steps. |
| **FR-22** | **Job Reporting** | Students shall be able to report suspicious, fake, misleading, or inappropriate job posts. |
| **FR-23** | **Report Handling Flow** | The Admin Verification Page shall show how reported jobs are reviewed and either kept, hidden, or removed. |
| **FR-24** | **Confirmation & Error Messages** | The prototype shall show confirmation and error messages after key actions such as login, verification submission, job posting, application submission, messaging, and reporting. |
| **FR-25** | **Input Validation** | Required fields shall be validated in forms, including login, profile creation, verification, job posting, and job application forms. |
| **FR-26** | **Responsive Interface** | The prototype shall provide a clear interface for desktop and mobile screen sizes. |
| **FR-27** | **Privacy-Aware Interface** | The prototype shall avoid unnecessary personal information and shall show privacy-conscious handling of uploaded documents and contact details. |
| **FR-28** | **Requirement Traceability** | Each implemented prototype function shall be traceable to the MVP feature list, user story, and customer discovery evidence. |
| **FR-29** | **Verified Badge Display** | The prototype shall display verified badges for verified students and verified companies. |
| **FR-30** | **Employer Posting Restriction** | Employers shall not be able to publish internship or entry-level job posts until their company verification is approved. |

---

# Main User Flow Requirements

## Student Job Application Flow

1. Student opens the platform.
2. Student selects Student role and logs in using simulated login.
3. Student creates or updates profile.
4. Student submits student verification information.
5. Student uploads resume and optional supporting documents.
6. Student browses or searches jobs.
7. Student applies filters to find beginner-friendly opportunities.
8. Student opens job detail page.
9. Student views company profile and verification badge.
10. Student applies using resume and selected supporting documents.
11. Student receives application confirmation.
12. Student tracks application status in the Application Tracker.
13. Student may message employer after applying.

## Employer Job Posting Flow

1. Employer opens the platform.
2. Employer selects Employer role and logs in using simulated login.
3. Employer creates company profile.
4. Employer submits company verification information.
5. System shows verification pending status.
6. Admin Verification Page approves or rejects verification in prototype.
7. If approved, employer can post internship or entry-level jobs.
8. If rejected or pending, employer cannot publish jobs.
9. Employer views applicants.
10. Employer reviews student profiles, resumes, and supporting documents.
11. Employer updates application status.
12. Employer may message student.

## Company and Student Verification Flow

1. User submits verification information.
2. Prototype checks required verification fields.
3. System shows Pending, Verified, or Rejected status.
4. Verified users receive a visible badge.
5. Employers can post jobs only after company verification is approved.

## Reported Job Handling Flow

1. Student reports a suspicious job post.
2. System records report reason in the prototype.
3. Admin Verification Page displays reported job.
4. Reviewer checks job and company information.
5. Job is either kept active, hidden, or removed.
6. Student receives confirmation that the report was submitted.

---

# Business Rules

| Rule ID | Rule |
|---|---|
| **BR-01** | Students must provide a resume before submitting a job application. |
| **BR-02** | Students may attach additional documents such as portfolio, certificate, transcript, or cover letter. |
| **BR-03** | Employers cannot publish job posts before company verification is approved. |
| **BR-04** | Admin does not need to approve every job post. |
| **BR-05** | Admin only reviews company verification requests and reported job posts. |
| **BR-06** | Students can message employers. |
| **BR-07** | Employers can message applicants. |
| **BR-08** | Job posts must show eligibility details before students apply. |
| **BR-09** | Verification detection in the prototype may be simulated and does not need real AI or external database integration. |
| **BR-10** | AI verification is optional and should be treated as a future enhancement unless a simple simulated detection feature is needed for the prototype. |
| **BR-11** | Dashboard summary must update when new applications or job posts are submitted. |

---

# Non-Functional Requirements

| NFR ID | Requirement | Description |
| ------- | ----------- | ----------- |
| **NFR-01** | Usability | The prototype should be easy for first-time users to understand and navigate. |
| **NFR-02** | Clarity | Job information, verification status, application status, and warnings should be clear and easy to read. |
| **NFR-03** | Performance | Prototype screens should load quickly and support smooth navigation. |
| **NFR-04** | Reliability | Prototype data such as sample profiles, jobs, and applications should remain consistent during the demonstration. |
| **NFR-05** | Security Awareness | The prototype should visually demonstrate account access, verification, and privacy protection even if real authentication is not implemented. |
| **NFR-06** | Compatibility | The prototype should work properly on modern desktop and mobile web browsers or as a clickable Figma prototype. |
| **NFR-07** | Maintainability | The prototype structure should be organized so future features such as AI verification, recommendations, real login, and database integration can be added later. |
| **NFR-08** | Privacy | Uploaded resumes, portfolios, certificates, and verification documents should be shown as protected user information in the interface. |

---

# Minimum Technical Requirement

The final prototype should not be only a static presentation. It should be an interactive prototype that demonstrates the main workflows.

Because the current project scope is **prototype only**, the following are acceptable:

| Component | Acceptable Prototype Form |
|---|---|
| Login | Simulated login with role selection |
| Data | Sample/local/static data instead of real database |
| Student Profile | Editable prototype form or clickable UI |
| Employer Profile | Editable prototype form or clickable UI |
| Verification | Simulated verification status: Pending, Verified, Rejected |
| Job Posting | Interactive form that shows posting allowed only after verification |
| Job Search | Search/filter UI using sample job cards |
| Application | Form submission using resume and supporting documents |
| Messaging | Simple message screen or simulated chat thread |
| Report Handling | Admin Verification Page showing reported job review |
| Dashboard | Summary screen showing totals, statuses, and activity overview |

Acceptable platforms may include:

| Platform Type | Acceptable Prototype Form |
| ------------- | ------------------------- |
| Web Prototype | HTML/CSS/JavaScript, React.js, Next.js, or similar frontend prototype |
| UI/UX Prototype | Figma clickable prototype showing complete user journeys |
| Data Handling | Local sample data, JSON data, browser local storage, or static mock data |
| Authentication | Simulated authentication with role-based navigation |
| Verification | Simulated detection logic or manual verification status in prototype |

---

# Future Enhancements

These features are outside the MVP but can be added after validation:

- Real authentication system
- Real database
- Real document upload and storage
- Official student verification through university systems
- Official company verification API
- AI-assisted student/company verification
- AI job recommendation
- AI resume feedback
- Interview scheduling
- Email notifications
- Calendar integration
- Mobile application
- University SSO
- Employer analytics dashboard
