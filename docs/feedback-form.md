# Feedback Form

## Project
Student Internship & Entry-Level Job Platform — MVP Experiment (Lab 07)

## Instructions for Facilitator
Give this form to the tester **after** they finish the tasks in `experiment-script.md`. Questions are neutral by design — do not reword them to sound more positive, and do not prompt the tester toward a "correct" answer.

---

## Tester Information
- Tester code:
- Tester type: Student / Employer / Admin / Other
- Date:

---

## Section A — Student Flow Rating Questions
*Complete this section only if the tester followed the Student flow (T1–T8 in `experiment-script.md`).*

Rate from 1 = strongly disagree to 5 = strongly agree.

| # | Question | Rating 1-5 |
|---|---|---:|
| A1 | The purpose of the platform was clear from the homepage. | |
| A2 | I could register and log in without help. | |
| A3 | Completing my student profile (education, skills, portfolio) was straightforward. | |
| A4 | The verification document upload process was clear. | |
| A5 | The search and filter tools helped me find a suitable job listing. | |
| A6 | I could tell whether a job listing was genuinely beginner-friendly. | |
| A7 | The verification badge on a company profile affected how much I trusted that company. | |
| A8 | I understood what each status label (Pending / Verified / Rejected) meant without needing it explained. | |
| A9 | Uploading my resume and submitting a job application was easy to complete. | |
| A10 | I felt comfortable uploading my resume/documents during this test. | |
| A11 | The Student Dashboard / Application Tracker was easy to understand and use. | |
| A12 | The verification and application steps felt realistic enough to trust, even though this is a prototype. | |

---

## Section B — Employer Flow Rating Questions
*Complete this section only if the tester followed the Employer flow.*

Rate from 1 = strongly disagree to 5 = strongly agree.

| # | Question | Rating 1-5 |
|---|---|---:|
| B1 | The purpose of the platform was clear from the homepage. | |
| B2 | Registering my company and submitting verification information was straightforward. | |
| B3 | I understood why I could not post a job until verification was approved. | |
| B4 | Posting a job listing was easy to complete without prior experience using recruitment platforms. | |
| B5 | Reviewing a candidate's structured profile helped me judge their suitability faster than my current method (e.g. Excel, email, chat groups). | |
| B6 | Updating an applicant's status was easy to do. | |
| B7 | The verification and applicant-review steps felt realistic enough to trust, even though this is a prototype. | |

---

## Section C — Overall Rating (all testers)

| # | Question | Rating 1-5 |
|---|---|---:|
| C1 | Overall, this prototype was easy to use. | |
| C2 | Overall, the features I used were useful for what I was trying to do. | |
| C3 | The prototype would help solve a real problem I currently face. | |

---

## Section D — Open Questions

1. What was the most useful part of the prototype?
2. What was confusing or difficult during this session?
3. What information did you feel was missing when deciding whether to trust a listing, a candidate, or a step in the process?
4. What should the team improve before the final prototype?
5. Would you use this system if it were available? Why or why not?
6. *(Employers only, optional)* Compared to how you currently find or screen candidates, what did this prototype do better or worse?

---

## Internal Reference — Traceability (not shown to tester)
For team use when writing up results and updating `weekly-logbook.md`. Maps each rating question to the success metric and/or assumption it evidences.

| Question | Success Metric | Assumption Tested | Related Requirement(s) |
|---|---|---|---|
| A1 | M-01 | — | FR-01, FR-02 |
| A2 | M-02 | — | FR-01, FR-02 |
| A3 | M-03 | — | FR-03, FR-04 |
| A4 | M-04 | — | FR-05, FR-06 |
| A5 | M-05 | — | FR-11, FR-13 |
| A6 | — | A-01 | FR-13 |
| A7 | M-06 | A-04 | FR-08, FR-29 |
| A8 | — | A-06 | FR-08, FR-29 |
| A9 | M-07 | A-07 | FR-06, FR-16 |
| A10 | — | A-13 | FR-06, NFR-08 |
| A11 | M-08 | A-05 | FR-17 |
| A12 | — | A-10 | FR-05, FR-08 |
| B2, B3 | — | A-11 | FR-08, FR-30 |
| B4 | — | A-08 | FR-10 |
| B5 | — | A-02 | FR-19, FR-20 |
| B7 | — | A-10 | FR-08, FR-21 |
| C1 | M-09 | — | FR-01–FR-17 |
| C2 | M-10 | — | MVP Features |
| C3 | — | Value proposition (overall) | Business Model Canvas |

**Decision reminder** (from `success-metrics.md`): if 1–2 metrics fail their target, revise the affected flow and re-test. If 3+ metrics fail, revisit requirements, user stories, and MVP priorities before continuing.
