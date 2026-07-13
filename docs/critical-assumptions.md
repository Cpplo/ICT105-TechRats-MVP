# Critical Assumptions

## Project Title
Student Internship & Entry-Level Job Platform

## Instruction
Identify assumptions that could cause your final prototype to fail if they are wrong.

| Assumption ID | Category | Assumption | Related Requirement/User Story | Risk Level | Current Evidence | How to Test |
|---|---|---|---|---|---|---|
| A-01 | User Problem | Students cannot reliably tell whether a listing is genuinely beginner-friendly on existing platforms, so a dedicated filter/badge is needed. | FR-13 / US-06 | High | Validated — R001, R002, R004, R007 (`assumption-evidence-table.md` #1) | Clickable prototype test: ask students to find a "true" beginner-friendly job using the filter and observe success/hesitation |
| A-02 | User Problem | Employers need better applicant screening tools, not simply more applicants. | FR-19, FR-20 / US-11, US-13 | High | Revised — original assumption was "employers just need more applicants"; R008, R009, R010 actually pointed to screening/comparison difficulty (`assumption-evidence-table.md` #4) | Employer test session comparing time/confidence to shortlist using structured profiles vs. their current Excel/email method |
| A-03 | User Problem | Students avoid applying when eligibility (visa, language, work mode) is unclear. | FR-13, FR-14 / US-06, US-07 | Medium | Validated by a single respondent — R005 only (`assumption-evidence-table.md` #5); needs more respondents | Add eligibility fields to job detail wireframe and observe whether international-student testers reference them before deciding to apply |
| A-04 | Value Proposition | Verified company/student badges are the main driver of trust, not just more job listings. | FR-08, FR-29 / US-04, US-07 | High | Supported by Business Model Canvas value proposition ("Verified student and company accounts... increase user trust") and R003/R005/R008 scam-risk evidence | A/B-style comparison: show testers a listing with vs. without a verification badge and ask which they would apply to and why |
| A-05 | Value Proposition | Centralized application tracking is valued enough that students will use it instead of their own spreadsheets/notes. | FR-17 / US-09 | Medium | Validated pain point (R006) but no evidence yet that students will *switch* habits to a new tracker | Ask testers after the session whether they would replace their current spreadsheet/notes with the in-platform tracker |
| A-06 | Usability | Testers will understand the verification status labels (Pending / Verified / Rejected) without explanation. | FR-08, FR-29 / US-04 | Medium | No direct evidence yet — carried over from `critical-assumptions.md` template (A-02) and confirmed as still open in `wireframe-specification.md` | Task-based prototype test: ask testers to state what each badge/status means before being told |
| A-07 | Usability | Students can complete the resume upload + job application flow without guidance. | FR-06, FR-16 / US-03, US-08 | High | No direct evidence yet; flagged as a design-implication risk in `user-persona.md` ("avoid making the application process too complicated for first-time applicants") | Time-to-complete and error-rate measurement during the clickable prototype test (see `success-metrics.md`) |
| A-08 | Usability | Employers can find and use the beginner-friendly job posting form without confusion, despite having no prior recruitment-platform experience. | FR-10 / US-05 | Medium | No direct evidence yet; SMEs/startups in Lab 03 described using informal channels (Facebook, email), not structured forms | Observe employer testers completing the job posting form; count fields they skip or get wrong |
| A-09 | Technical Feasibility | Local Storage/JSON sample data is sufficient to simulate persistent, multi-role data (student, employer, admin) for a convincing demo. | FR-04 / N/A | Medium | Documented decision in `technical-architecture.md`, but not yet tested with real users interacting across roles in one session | Run a full student → employer → admin demo sequence and confirm data submitted in one role is visible/consistent in another |
| A-10 | Technical Feasibility | Simulated verification and simulated messaging (no real backend) will still feel credible enough to test trust and communication assumptions. | FR-05, FR-08, FR-21 / US-04, US-08 | Medium | `technical-architecture.md` explicitly lists these as simulated, but no evidence yet that simulation is convincing to testers | Ask testers directly whether the verification/messaging flow felt "real enough" to trust, as a feedback-form question |
| A-11 | Business Logic | Employers will complete company verification before posting, rather than abandoning the platform at that step. | FR-08, FR-30 / US-04 | High | No evidence yet; this is a new friction point (Business Model Canvas assumes verification drives trust, but doesn't test for drop-off) | Track how many employer testers complete verification vs. abandon when told posting is blocked until approved |
| A-12 | Business Logic | Universities, SMEs, and startups (Key Partners in `business-model-canvas.md`) will be willing to funnel students/postings through this platform rather than existing channels. | N/A (strategic assumption, no single FR) | High | Not yet tested — Business Model Canvas lists this as a partner assumption, not customer-discovery evidence | Outside MVP experiment scope; requires separate partner-interview validation before relying on this channel |
| A-13 | Data Handling | Uploaded resumes and documents can be shown as "protected" in the interface without an actual secure storage backend, and testers will still feel their data is handled responsibly. | FR-06, NFR-08 / US-03 | Medium | `technical-architecture.md` confirms document upload is simulated without cloud storage; no user-facing evidence yet on perceived privacy | Ask testers in feedback form whether they felt comfortable uploading a resume/document during the test |
| A-14 | Data Handling | Sample/mock job and applicant data will be varied and realistic enough that testers don't notice the data is fabricated, which could bias their feedback. | FR-04 / N/A | Low | No evidence yet; risk noted based on `technical-architecture.md`'s reliance on static sample data | Review tester comments for any mention that job listings/applicants "look fake" or repetitive |

---

## Categories
Use these categories:
- User problem
- Value proposition
- Usability
- Technical feasibility
- Business logic
- Data handling

---

## Risk Summary

| Risk Level | Count | Assumption IDs |
|---|---|---|
| High | 6 | A-01, A-02, A-04, A-07, A-11, A-12 |
| Medium | 7 | A-03, A-05, A-06, A-08, A-09, A-10, A-13 |
| Low | 1 | A-14 |

## Testing Priority
The Lab 07 MVP experiment (`mvp-experiment-plan.md`) is scoped to test the **High-risk assumptions that are testable through a clickable prototype/form simulation this semester**: A-01 (beginner-friendly filtering), A-02 (employer screening quality — the one "Revised" assumption from Lab 03), A-04 (verification/trust), A-07 (application flow usability), and A-11 (verification drop-off).

A-12 (partner willingness) is flagged as **out of scope** for this experiment since it requires separate stakeholder interviews rather than a prototype test, and should be logged as a follow-up item in `weekly-logbook.md`.
