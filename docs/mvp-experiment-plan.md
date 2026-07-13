# MVP Experiment Plan

## 1. Group and Project Information
- Group name:
- Project title: Student Internship & Entry-Level Job Platform
- Repository link:
- Main target user: University students and fresh graduates seeking internship or entry-level jobs (primary persona: Ploy); Employers/SMEs/startups recruiting beginner talent (secondary persona: Niran)
- Prototype platform: Frontend web prototype (HTML5, CSS3, JavaScript, Bootstrap 5) with Browser Local Storage / JSON sample data simulating backend persistence, per `technical-architecture.md`

---

## 2. Experiment Objective
We want to test whether students can find and trust a genuinely beginner-friendly, verified internship or job listing, apply to it with a resume, and track the application status — and whether employers can verify their company, post a job, and screen applicants using structured student profiles — without needing help.

---

## 3. Requirement Scope for the Experiment
The requirements below were selected because they map to the highest-risk assumptions in `assumption-evidence-table.md` (beginner-role confusion, trust/verification, application tracking, and employer screening quality).

| Requirement ID | Requirement Summary | Related Screen/Feature | Tested in This Experiment? |
|---|---|---|---|
| FR-01 | Simulated Registration & Login | /wireframes/register-login.png | Yes |
| FR-02 | Role Selection (Student/Employer) | /wireframes/register-login.png, /wireframes/homepage.png | Yes |
| FR-05 | Student Verification Detection | /wireframes/profile-verification.png | Yes |
| FR-06 | Resume & Supporting Document Upload | /wireframes/profile-verification.png | Yes |
| FR-08 | Company Verification Detection | /wireframes/profile-verification.png, /wireframes/verification-management.png | Yes |
| FR-11 | Browse & Search Jobs | /wireframes/job-list.png | Yes |
| FR-13 | Beginner-Friendly & Eligibility Filters | /wireframes/job-list.png | Yes |
| FR-14 | Job Detail Viewing | /wireframes/job-detail.png | Yes |
| FR-15 | Company Profile Viewing (verification badge) | /wireframes/job-detail.png | Yes |
| FR-16 | Job Application Submission | /wireframes/job-detail.png | Yes |
| FR-17 | Application Tracker | /wireframes/student-dashboard.png | Yes |
| FR-19 | Employer Applicant Management | /wireframes/employer-dashboard.png | Yes |
| FR-20 | Application Status Update | /wireframes/employer-dashboard.png | Yes |
| FR-30 | Employer Posting Restriction (blocked until verified) | /wireframes/verification-management.png | Yes |
| FR-21 | Direct Messaging | /wireframes/job-detail.png | No (Should-priority; tested only if time allows) |
| FR-22 | Job Reporting | /wireframes/job-detail.png | No (Should-priority; tested only if time allows) |

Not included in this round: FR-03/FR-04 (profile fields beyond verification), FR-09/FR-12 dashboard analytics detail, FR-23–FR-29 (confirmation messages, validation, responsive/privacy details, admin platform management) — these are lower-risk or secondary to the assumptions being tested first.

---

## 4. MVP Experiment Type

Select one or combine more than one:
- [x] Clickable prototype
- [ ] Landing page test
- [x] Form-based simulation
- [ ] Dashboard demo
- [ ] Manual service simulation
- [ ] Simple web prototype
- [ ] Backend/database prototype

**Selected experiment type:** Clickable prototype + form-based simulation

**Reason for selection:** The riskiest assumptions identified in `assumption-evidence-table.md` are about the user *flow* (can a student tell a job is beginner-friendly and verified?) and the *submission workflow* (can a student complete verification, resume upload, and job application without confusion?). Per the task sheet's decision guide, a clickable prototype is the right method "when screens and user flow are the main risk," and a form-based simulation applies "when input/submission workflow is the main risk" — both conditions apply here. The wireframes in `wireframe-specification.md` are already built to support this directly.

---

## 5. Test Users

| Test User Group | Number of Testers | Why They Are Relevant |
|---|---:|---|
| University students / fresh graduates | 5 | They match the primary persona (Ploy) from `user-persona.md` and the majority of Lab 03 respondents (7 of 10) who reported beginner-role confusion, trust concerns, and application-tracking pain. |
| Employers / SME or startup recruiters | 2–3 | They match the secondary persona (Niran) and the 2 employer respondents (R008, R010) who reported applicant screening difficulty — the assumption marked "Revised" in `assumption-evidence-table.md`, making it the highest-priority item to re-test. |

---

## 6. Experiment Procedure Summary

**Student flow (individual session, ~10–15 minutes):**
1. Tester opens the homepage and selects the Student role, then logs in (simulated).
2. Tester completes student verification (university email) and uploads a resume.
3. Tester browses the job listing page and applies the beginner-friendly filter to find a suitable role (tests FR-11, FR-13).
4. Tester opens a job detail page, checks the company's verification badge, and decides whether to trust the listing (tests FR-14, FR-15).
5. Tester applies to the job using the uploaded resume (tests FR-16).
6. Tester opens the Student Dashboard/Application Tracker to confirm the application appears with a status (tests FR-17).
7. Facilitator observes without helping unless the tester is fully stuck, and notes hesitation points, wrong clicks, and comments.

**Employer flow (individual session, ~10–15 minutes):**
1. Tester registers a company and submits verification information (tests FR-08).
2. Tester attempts to post a job before verification is approved, to confirm the block message appears (tests FR-30).
3. Once verified (simulated approval), tester posts an internship listing.
4. Tester opens the Employer Dashboard, reviews a sample applicant's structured profile/resume, and updates the application status (tests FR-19, FR-20).
5. Facilitator notes how easily the tester can judge applicant quality using the structured profile versus their current Excel/email workaround.

Both sessions close with the feedback questions in `feedback-form.md`.

---

## 7. Expected Learning

After this experiment, the team will decide whether:
- Students can reliably identify beginner-friendly, verified jobs using the filter and badge system, or whether the filtering/verification UI needs to be redesigned before the final prototype.
- The resume upload and application flow is simple enough for first-time users, or whether extra guidance/validation messaging (FR-24, FR-25) needs to be prioritized earlier than planned.
- The Application Tracker actually resolves the tracking pain point from R006, or whether its status labels/layout need revision.
- The employer applicant management screen meaningfully improves screening speed/confidence compared to their current Excel/email workaround — directly re-testing the "Revised" assumption (#4) that employers need better screening tools, not just more applicants.

If completion rates or usability scores (see `success-metrics.md`) fall below the agreed threshold for any flow, the team will revise that screen in `wireframe-specification.md` before building the final prototype, rather than carrying an unvalidated design forward.
