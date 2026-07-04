# Lab 04 - User Stories and Acceptance Criteria

## Project Title

Student Internship & Entry-Level Job Platform

---

## User Story Format

**As a [user role], I want to [goal/action], so that [benefit/value].**

---

## Project Rules Used in This Version

- The platform has two main user roles: **Student** and **Employer**.
- Students verify their account using a **university email**.
- Employers verify their company using a **company email, company website, or manual approval**.
- Employers **cannot publish job posts before company verification**.
- Students can **message employers before applying**.
- Students apply using a **resume and optional supporting documents**.
- The final project is an **interactive prototype only**.
- A real login system, real database, and real AI verification system are **not required** for the prototype.
- AI verification may be shown as an optional or future enhancement, but it is not required for the MVP.

---

# User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|
| US-01 | Student | As a student, I want to register or log in using my university email so that I can access the platform as a verified student. | FR-01 Student Registration & Login | Must | Given a valid university email, when the student registers, then the system verifies the student account and allows access to the student dashboard. Given a non-university email, when the student tries to register, then the system shows an email verification error message. | Login / Registration Page |
| US-02 | Student | As a student, I want to create and edit my profile so that employers can understand my education, skills, and career interests. | FR-02 Student Profile Management | Must | Given a logged-in verified student, when profile information is saved, then the updated profile is displayed on the student dashboard/profile page. | Student Profile Page |
| US-03 | Student | As a student, I want to upload my resume, portfolio, certificates, transcript, or other supporting documents so that employers can evaluate my suitability for a role. | FR-03 Resume & Supporting Document Upload | Must | Given a valid resume or supporting document, when the student uploads the file in the prototype, then the file name/status appears on the student profile or application form. | Resume / Document Upload Page |
| US-04 | Employer | As an employer, I want to register my company and submit verification information so that students can trust my job postings. | FR-04 Employer Registration & Company Verification | Must | Given company email, company website, or manual approval information, when the employer submits the verification form, then the company status is shown as Pending, Approved, or Rejected. | Company Verification Page |
| US-05 | Employer | As a verified employer, I want to post internship and entry-level job listings with clear eligibility details so that suitable students can apply. | FR-05 Internship & Entry-Level Job Posting | Must | Given an employer is verified, when the employer submits a complete job post with title, description, requirements, eligibility, work mode, location, and deadline, then the job listing is published. Given an employer is not verified, when the employer tries to publish a job post, then the system blocks the action and displays a verification required message. | Job Posting Page |
| US-06 | Student | As a student, I want to browse and filter internship or entry-level job listings by beginner-friendly status, skills, location, work mode, and eligibility so that I can find suitable roles faster. | FR-06 Browse & Filter Job Listings | Must | Given a list of job postings, when the student applies search or filter options, then only matching job postings are shown. | Job Listing / Filter Page |
| US-07 | Student | As a student, I want to view job details and company profiles before applying so that I can understand the role and check whether the employer is trustworthy. | FR-07 Company Profile Viewing and Job Detail Display | Must | Given a job listing exists, when the student opens it, then the job details, eligibility information, company profile, and verification badge/status are displayed. | Job Detail Page / Company Profile Page |
| US-08 | Student / Employer | As a student, I want to message an employer before applying so that I can ask questions about the role, requirements, or company before submitting my application. | FR-08 Messaging Before Application | Should | Given a student is viewing a job detail page, when the student selects Message Employer, then a message screen opens and allows the student to send a prototype message. Given an employer receives a message, when the employer opens the message area, then the student message is visible in the prototype. | Message Screen / Job Detail Page |
| US-09 | Student | As a student, I want to apply directly to a job or internship using my resume and supporting documents so that I can be considered for the role. | FR-09 Job Application Submission | Must | Given a selected job posting and an uploaded resume, when the student submits the application, then the system displays an application confirmation and links the application to the student profile. Given no resume is uploaded, when the student tries to apply, then the system shows a resume required message. | Application Page |
| US-10 | Student | As a student, I want to save jobs and track my application status and deadlines in one place so that I do not miss follow-ups. | FR-10 Saved Jobs & Application Status Tracking | Must | Given a saved job or submitted application, when the student opens the application tracker, then the job title, company, deadline, and current status are displayed. | Saved Jobs / Application Tracker Page |
| US-11 | Employer | As an employer, I want to view and filter student applicant profiles by skills or availability so that I can shortlist suitable candidates faster. | FR-11 Employer Applicant Management | Should | Given a list of applicants, when the employer applies a skill or availability filter, then only matching applicant profiles are shown. | Employer Dashboard / Applicant List |
| US-12 | Employer | As an employer, I want to review student profiles, resumes, and supporting documents so that I can evaluate applicants before making a decision. | FR-12 Student Profile & Resume Viewing | Should | Given an applicant has submitted an application, when the employer opens the applicant profile, then the student profile, resume, and supporting documents are visible in the prototype. | Applicant Detail Page |
| US-13 | Employer | As an employer, I want to update application statuses so that students know whether their application is Applied, Under Review, Interview, Accepted, Rejected, or Closed. | FR-13 Application Status Update | Should | Given an application exists, when the employer changes the status, then the updated status is shown in the student application tracker. | Employer Dashboard / Application Tracker |
| US-14 | Student | As a student, I want to report a suspicious or unclear job posting so that fake, misleading, or risky jobs can be reviewed. | FR-14 Job Report & Moderation | Should | Given an open job posting, when the student submits a report reason, then the system flags the job for review and displays a report confirmation message. | Report Job Flow |
| US-15 | Student / Employer | As a user, I want to see confirmation and error messages after important actions so that I understand whether my action was successful or needs correction. | FR-15 Input Validation & User Feedback | Should | Given a user submits a form or action, when required fields are missing or the action succeeds, then the system displays a clear error or confirmation message. | Form Validation / Confirmation Messages |

---

# Acceptance Criteria Checklist

A good acceptance criterion should be:

- Testable in the prototype.
- Observable during the final demo.
- Connected to a functional requirement.
- Supported by customer discovery evidence or project rules.
- Clear, specific, and measurable.

---

# Future User Stories Not Included in MVP

| Story ID | Future User Story | Reason for Postponing | Future Condition |
|---|---|---|---|
| FUT-01 | As a student, I want AI job recommendations based on my skills so that I can discover suitable opportunities faster. | AI recommendation is outside the required MVP scope. | Add after the basic job search, filtering, and application workflow is validated. |
| FUT-02 | As a student, I want AI resume feedback so that I can improve my resume before applying. | Requires AI analysis and stronger backend support. | Add after real resume upload and storage are implemented. |
| FUT-03 | As a student, I want a skill-gap analysis or career roadmap so that I know what to study before applying. | Helpful but not essential for the first prototype. | Add after user testing confirms demand for learning guidance. |
| FUT-04 | As a student or employer, I want email or push notifications so that I receive updates outside the platform. | Requires real notification infrastructure. | Add after backend and user accounts are implemented. |
| FUT-05 | As a student or employer, I want interview scheduling so that interview times can be managed inside the platform. | Requires calendar or scheduling functionality beyond the MVP. | Add after application tracking is validated. |
| FUT-06 | As a student or employer, I want ratings and reviews after completed internships so that future users can judge trust and quality. | Requires completed internship workflow, which is outside the semester prototype. | Add after real placements are supported. |

---

# Short Summary for Report

The updated user stories focus on the core MVP workflow for the Student Internship & Entry-Level Job Platform. Students can register with a university email, manage profiles, upload resumes and documents, search for beginner-friendly jobs, view verified company profiles, message employers before applying, apply for jobs, track application status, save jobs, and report suspicious posts. Employers can register, verify their company through company email, website, or manual approval, post jobs only after verification, manage applicants, review student resumes, message students, and update application statuses.

The project remains an interactive prototype only, so real authentication, real database storage, and real AI verification are not required. Messaging and verification can be simulated through prototype screens and sample data.

