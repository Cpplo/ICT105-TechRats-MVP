
# Prototype Testing Notes

## Test Environment
- Prototype link or folder: `/prototype/index.html` *(fill in your GitHub Pages link if hosted, otherwise leave as local folder path)*
- Browser/device used: *Testing below is based on code-level analysis of `script.js` against `system-requirements.md` — not live clicks in a browser. Your group should still run these same test cases in an actual browser (desktop + mobile) to confirm and to capture the Task 6 screenshots.*
- Tester role: Student, Employer, Admin (all three tested per flow)
- Test date: Jul 25, 2026 *(code review)* — update once your group re-runs these live

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open homepage | Open `index.html` | Homepage shows platform title, target users (students/employers), the problem being solved, and a clear main action | `landingPage()` renders hero heading, "Join as a Student" / "Join as an Employer" role cards, and primary CTAs ("Find Internships", "Hire Student Talent") | Pass | None | None needed |
| T-02 | Submit a job application | Log in as student → Browse Jobs → select a job → Apply Now | Application is saved (simulated) and a confirmation message appears | `applyToProject()` pushes a new record into `APPLICATIONS` and shows a `toast("Application submitted!")` confirmation | Partial Pass | Application is saved only in memory — refreshing the page loses it (same root cause as FR-04) | Connect to localStorage or a simple JSON file so applications persist across sessions |
| T-03 | View record list (jobs) | Open Browse Jobs page | Sample job listings are visible in a list/card layout | `studentBrowse()` / `browsePublicPage()` render all 15 sample `JOBS` as cards | Pass | None | None needed |
| T-04 | Search / filter jobs | Type a keyword and/or select a category chip | Only matching jobs are shown | Search filters by title and skill text; category chips filter correctly (`studentBrowse()` query logic) | Partial Pass | Only keyword + category filtering exists. FR-13 also requires filtering by location, work mode, education level, language, visa eligibility, and beginner-friendly status — none of these are wired up yet | Add remaining filter controls to the Browse Jobs page per FR-13 |
| T-05 | Job detail view | Click into a job from the listing | Full job details (description, skills, deadline, eligibility, employer info) are shown clearly | `projectPublicPage()` / browse detail panel show category, tags, description, job type, work mode, deadline, education level, language, and visa fields | Pass | None | None needed |
| T-06 | Application status update | Log in as employer → Applicants → change an applicant's status (e.g. to Interview) → log in as student → check Application Tracker | Status change is reflected immediately in the student's Application Tracker | `updateAppStatus()` updates the shared `APPLICATIONS` array; `studentApplications()` reads from the same array, so the change is visible instantly | Pass | None | None needed |
| T-07 | Dashboard metrics | Log in as student, employer, and admin → open each dashboard | Metrics shown match the actual current data | Student/Employer dashboard stat cards compute live from real arrays. Admin dashboard's live totals (student/employer counts, verification breakdown) are accurate, but the "New Users per Month," "Jobs Posted Over Time," and "Applications Submitted Over Time" bar charts use hardcoded placeholder values for all but the most recent data point | Partial Pass | Time-series charts on the admin dashboard aren't tracking real historical data — only current totals are real | Either remove the time-series charts for the prototype stage, or start logging dated snapshots so the charts reflect real activity over time |

## Summary of Issues

1. **No data persistence (affects T-02, and indirectly T-07).** All records (`STUDENTS`, `JOBS`, `APPLICATIONS`, `REPORTS`, etc.) live in in-memory JavaScript arrays. A page refresh resets everything to the seeded sample data. This is the single highest-impact fix for Sprint 2 — it undermines the "Submit record" and "Dashboard metrics" flows both being demonstrably real.
2. **Job filtering is incomplete relative to FR-13 (affects T-04).** Only keyword search and category filtering work today. Six of the eight required filter types from `system-requirements.md` (location, work mode, education level, language, visa eligibility, beginner-friendly) aren't implemented.
3. **Admin dashboard time-series charts are partially fabricated (affects T-07).** The bar charts for user growth, jobs posted, and applications over time only reflect real numbers in their most recent bar; the rest are static placeholder values baked into the code, which could look misleading in a demo if not disclosed.
4. **Report handling has no real action (not directly tested above, flagged from `feature-implementation-status.md`).** Reports list correctly but there's no working Keep/Hide/Remove logic behind it yet (FR-23).

## Improvements Completed During Lab 11

*(To be filled in by the group as Sprint 2 work is completed — list each fix with its GitHub commit hash or PR link, e.g.:)*

- [ ] Persist applications/jobs/profiles via localStorage — commit: `TBD`
- [ ] Add remaining job filters (location, work mode, education level, language, visa, beginner-friendly) — commit: `TBD`
- [ ] Wire up admin report Keep/Hide/Remove actions — commit: `TBD`
- [ ] Replace placeholder admin chart data with real historical tracking (or remove until real data exists) — commit: `TBD`
