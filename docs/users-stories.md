# Lab 04 - User Stories and Acceptance Criteria

## User Story Format

**As a [user role], I want to [goal/action], so that [benefit/value].**

---

# User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|-----------|------|------------|---------------------|----------|---------------------|---------------|
| US-01 | Student | As a student, I want to register using my university email so that I can access the platform as a verified student. | FR-01 Student Registration | Must | Given a valid university email, when the student registers, then a verified student account is successfully created. | Registration Page |
| US-02 | Student | As a student, I want to create and edit my profile so that employers can understand my background and skill level. | FR-02 Student Profile | Must | Given a logged-in student, when profile information is saved, then the updated profile is displayed. | Student Profile |
| US-03 | Student | As a student, I want to upload my resume and portfolio and tag my skills so that employers can evaluate whether I am a good fit. | FR-03 Resume & Portfolio Upload | Must | Given a resume/portfolio file and skill tags, when uploaded successfully, then they appear on the student's profile. (Evidence: R001, R002, R008) | Portfolio Page |
| US-04 | Employer | As an employer, I want to register my company and go through verification so that students can trust my job postings. | FR-04 Company Verification | Must | Given valid company details, when submitted, then the company profile shows a "Verified" badge only after review is complete. (Evidence: R003, R005, R008, R010) | Company Verification Page |
| US-05 | Employer | As an employer, I want to post internship and entry-level job listings with clear eligibility details so that qualified students can apply. | FR-05 Job/Internship Posting | Must | Given completed job details including eligibility (work permit, language, work mode), when submitted, then the listing is published with those fields visible. (Evidence: R005) | Job Posting Page |
| US-06 | Student | As a student, I want to filter job listings by "beginner-friendly" or "true entry-level" so that I don't waste time on roles meant for experienced candidates. | FR-06 Beginner/Entry-Level Filter | Must | Given a list of postings, when the beginner/entry-level filter is applied, then only matching postings are shown. (Evidence: R001, R002, R004, R007) | Job Listing / Filter Page |
| US-07 | Student | As a student, I want to view a company's verified profile before applying so that I know the employer is trustworthy. | FR-04 Company Verification | Must | Given a company profile exists, when opened, then company information, verification status, and contact details are displayed. (Evidence: R003, R005) | Company Profile Page |
| US-08 | Student | As a student, I want to apply directly to a job or internship posting so that I can be considered for the role. | FR-07 Job Application | Must | Given a selected job posting, when "Apply" is clicked, then the application is submitted and linked to the student's profile. (Evidence: R004, R008) | Application Page |
| US-09 | Student | As a student, I want to save jobs and track my application status and deadlines in one place so that I don't miss follow-ups. | FR-08 Application Tracker | Must | Given a submitted or saved application, when the student opens the tracker, then the job, deadline, and current status are displayed. (Evidence: R006) | Application Tracker |
| US-10 | Employer | As an employer, I want to view and filter student applicant profiles by skill tags so that I can shortlist suitable candidates faster. | FR-09 Applicant Filtering | Should | Given a list of applicants, when a skill or availability filter is applied, then only matching applicant profiles are shown. (Evidence: R008, R009, R010) | Employer Dashboard |
| US-11 | Employer | As an employer, I want a dashboard to track all applicants for my postings so that I don't lose track of candidates managed manually. | FR-08 Application Tracker (Employer side) | Should | Given one or more job postings with applicants, when the employer opens the dashboard, then all applicants and their statuses are listed in one view. (Evidence: R010) | Employer Dashboard |
| US-12 | Student | As a student, I want to report a suspicious or unclear job posting so that I and other students are protected from scams. | FR-10 Scam Report | Could | Given an open job posting, when "Report" is submitted with a reason, then the posting is flagged for review. (Evidence: R003) | Report Flow (Job Posting Page) |

---

# Acceptance Criteria Checklist

A good acceptance criterion should be:

- Testable
- Observable in the final prototype
- Connected to a functional requirement
- Supported by customer evidence
- Clear and measurable

---

# Future User Stories (Not Included in MVP)

| Story ID | Reason for Postponing | Future Condition |
|-----------|-----------------------|------------------|
| US-13 | As a student and employer, I want in-platform messaging so that we can discuss role details before or after applying. | Requires real-time messaging infrastructure beyond the semester scope; postponed until core matching and trust features are validated. |
| US-14 | As a student, I want the platform to suggest a skill roadmap or recommend jobs based on my skill level. | Future AI/recommendation enhancement after MVP validation (Evidence: R007 needs learning-path guidance). |
| US-15 | As a student or employer, I want ratings and reviews after a completed internship so that future users can trust the platform. | Requires a completed-placement workflow not available in this semester's MVP scope. |
