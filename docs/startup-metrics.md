# Startup / Product Metrics

> Define metrics that show useful product activity. Metrics should not be random numbers. Each metric should help the team understand usage, value, status, validation, or operational performance.

## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Job Applications Submitted | Usage | Shows whether students are actively engaging with the core action of the platform — applying for jobs | Count all application records | `APPLICATIONS` array (`script.js`) | Student Dashboard / Application Tracker |
| M-02 | Pending Applications | Status | Shows how much unresolved work employers still need to review | Count applications with status = Applied, Under Review, or Interview | `APPLICATIONS` array (`script.js`) | Employer Dashboard / Applicants |
| M-03 | Resolved Applications | Status | Shows how many applications have reached a final outcome (Accepted, Rejected, or Closed) | Count applications with status = Accepted, Rejected, or Closed | `APPLICATIONS` array (`script.js`) | Employer Dashboard / Application Tracker |
| M-04 | Most Common Job Category | Category | Shows which category of internship/entry-level role is most in demand from employers | Count job postings per category, return highest | `JOBS` array (`script.js`) | Job Listing Page / Admin Dashboard |
| M-05 | Task Completion Rate | Validation | Shows whether real users can successfully complete core tasks (apply, browse, verify, etc.) without failing | Completed tasks / total test sessions × 100 | Lab 08 validation results (`validation-results.csv`) | Analytics summary (Lab 08 → informs Lab 11 dashboard) |
| M-06 | Average Ease-of-Use Score | Validation | Shows how intuitive real users found the platform during usability testing | Average of EaseOfUseScore across all test sessions | Lab 08 validation results (`validation-results.csv`) | Analytics summary (Lab 08 → informs Lab 11 dashboard) |

### Current Values (as of Lab 11)

| Metric ID | Value | Notes |
|---|---|---|
| M-01 | 5 applications | Sample data only — resets on page refresh (see FR-04, Partially Completed). |
| M-02 | 2 pending (Under Review: 1, Interview: 1) | |
| M-03 | 3 resolved (Accepted: 1, Closed: 1, Rejected: 1) | |
| M-04 | 3-way tie: Programming, Graphic Design, and Writing (3 postings each) | Out of 15 total sample job postings across 7 categories. |
| M-05 | 90% (45 of 50 test sessions completed their task) | From Lab 08 validation testing, 50 sessions across Student, Employer, and Admin roles. |
| M-06 | 4.3 / 5.0 | Average EaseOfUseScore across all 50 Lab 08 test sessions. |

## 2. Metrics Interpretation

The usage and status metrics (M-01–M-03) currently reflect sample data rather than real accumulated activity, since the prototype has no persistent backend (FR-04 is only Partially Completed) — every refresh resets the dataset to its five seeded applications. This is expected at the prototype stage but is the clearest next step before these numbers become meaningful over time: connecting to localStorage, JSON, or a lightweight backend so usage metrics actually accumulate across sessions rather than resetting. The category metric (M-04) shows a near-even spread of postings across Programming, Graphic Design, and Writing, suggesting the sample data was deliberately built to represent multiple fields rather than skew toward one — useful for demoing the category filter, but not yet a signal about real employer demand. The validation metrics (M-05, M-06) are the strongest evidence in this document: a 90% task completion rate and 4.3/5 ease-of-use score across 50 real test sessions indicate the core user flows (browsing, applying, verifying, messaging) are fundamentally usable. However, the Lab 08 findings also flagged recurring confusion around verification status, dashboard navigation, and job search filters — which lines up directly with what we already flagged as gaps in `feature-implementation-status.md` (FR-13's limited filters, FR-23's incomplete report handling). The team's priority for Sprint 2 should be closing the gap between "users can technically complete the task" (90%) and "users complete it without confusion" — specifically clarifying verification status feedback and expanding job filters, since those are the two friction points repeated most often in the Lab 08 notes.

## 3. Link to Final Prototype

In the final prototype, M-01 through M-04 will be pulled live from the admin dashboard's existing `adminDashboard()` charts (bar/pie visualizations already exist in `script.js` for user distribution and verification breakdown) rather than computed manually — once a persistent data layer replaces the in-memory arrays, these numbers will update automatically as real students and employers use the platform. M-05 and M-06 will be re-measured after Sprint 2 usability fixes (clearer verification messaging, expanded filters, simplified dashboard) are implemented, through a second round of validation testing as recommended in the Lab 08 "Next Prototype Improvement" section — allowing the team to demonstrate measurable improvement in task completion and ease-of-use scores between Lab 08 and the final deliverable.
