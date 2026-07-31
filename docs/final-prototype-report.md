# Final Prototype Report

## 1. Project Title
**Student Internship & Entry-Level Job Platform**

## 2. Group Members and Roles
| Name | Role | Main Contribution | GitHub Evidence |
|---|---|---|---|
| Hein Pyae Shan | Product Lead | Defined the problem, validated assumptions, shaped the MVP scope, and supported user testing and final direction | Repository documentation and lab reports |
| Phyo Wai Aung | Technical Lead | Designed the system architecture, implemented and reviewed prototype functionality, and managed technical repository updates | Prototype source files and implementation docs |
| Kyaw Phone Thant | UX/UI Lead & Documentation Lead | Designed the interface, created wireframes and landing page assets, and maintained the project documentation | Landing page, screenshots, and documentation files |

## 3. Problem Background
University students and fresh graduates often struggle to find trustworthy internship and entry-level job opportunities because many recruitment platforms are built for experienced professionals. Even when jobs are labeled “entry-level,” they may still require prior work experience. Students also face unclear eligibility requirements, difficulty verifying employers, and trouble keeping track of multiple applications.

Employers, especially SMEs and startups, also face problems when recruiting beginner talent. They often receive unsuitable applications, have limited visibility into applicant skills and portfolios, and need a more structured way to manage applicants.

## 4. Target Users
The main users are:

- University students
- Fresh graduates
- Beginner job seekers
- SMEs and startups
- Employers and hiring managers
- Admin users for verification and report handling

Students need the platform because they want beginner-friendly roles, trusted employers, clear eligibility details, and a way to manage applications. Employers need the platform because they want verified beginner candidates, easier applicant management, and a simple posting workflow. Admin users need the platform to review verification requests and suspicious job reports.

## 5. Evidence Summary
Evidence from Labs 02, 03, and later validation supported the need for the platform:

- Opportunity scanning showed the internship/job platform solved a real beginner-career problem.
- Customer discovery with students and employers confirmed that trust, verification, beginner-friendly filtering, and application tracking were major needs.
- Survey and interview responses showed students wanted a dedicated place for internships and entry-level jobs.
- Employers wanted more reliable candidate information and a simpler way to review applicants.
- Validation testing in later labs showed users understood job browsing, company verification, and the main prototype workflow.
- Feedback also confirmed that the verification process, application tracker visibility, and report handling needed clearer presentation.

## 6. Final Prototype Overview
The final prototype is an interactive web-based internship and entry-level job platform. It includes:

- Simulated login and role selection
- Student and employer dashboards
- Student profile management
- Employer company profile management
- Verification workflows for students and companies
- Job browsing, search, and filtering
- Job detail pages with company verification badges
- Job application submission
- Application tracking
- Saved jobs
- Messaging
- Employer applicant management
- Reporting suspicious jobs
- Admin verification and report handling
- Responsive UI for desktop and mobile
- Sample/local data instead of a production backend

The prototype demonstrates the full flow for students, employers, and admin moderation using simulated data and interface logic.

## 7. Requirement Traceability Summary
| Requirement ID | Implemented Feature/Screen | User Story ID | Evidence Source | Status |
|---|---|---|---|---|
| FR-01 | Simulated Registration & Login | US-01 | Login page, prototype screenshots, source code | Implemented |
| FR-02 | Role Selection | US-02 | Login page, route logic | Implemented |
| FR-03 | Student Profile Management | US-03 | Student dashboard, profile page | Implemented |
| FR-04 | Data Storage & Record Management | US-04 | JavaScript sample data and local simulation | Partially Implemented |
| FR-05 | Student Verification Detection | US-05 | Student verification screen | Implemented |
| FR-06 | Resume & Supporting Document Upload | US-06 | Student profile / application flow | Implemented |
| FR-07 | Employer Registration | US-07 | Employer dashboard / profile screen | Implemented |
| FR-08 | Company Verification Detection | US-08 | Employer verification screen | Implemented |
| FR-09 | Company Applicant Management | US-09 | Employer applicants page | Implemented |
| FR-10 | Internship & Entry-Level Job Posting | US-10 | Job post form | Implemented |
| FR-11 | Browse & Search Jobs | US-11 | Job listing page | Implemented |
| FR-12 | Dashboard & Summary View | US-12 | Student and employer dashboards | Implemented |
| FR-13 | Beginner-Friendly & Eligibility Filters | US-13 | Job listing filters | Implemented |
| FR-14 | Job Detail Viewing | US-14 | Job detail page | Implemented |
| FR-15 | Company Profile Viewing | US-15 | Company profile page | Implemented |
| FR-16 | Job Application Submission | US-16 | Job application flow | Implemented |
| FR-17 | Application Tracker | US-17 | Student applications page | Implemented |
| FR-18 | Saved Jobs | US-18 | Saved jobs section | Implemented |
| FR-19 | Employer Applicant Management | US-19 | Applicant review page | Implemented |
| FR-20 | Application Status Update | US-20 | Employer status update actions | Implemented |
| FR-21 | Direct Messaging | US-21 | Messaging screen | Implemented |
| FR-22 | Job Reporting | US-22 | Report job form | Implemented |
| FR-23 | Report Handling Flow | US-23 | Admin verification / report page | Implemented |
| FR-24 | Confirmation & Error Messages | US-24 | Alerts, toasts, validation feedback | Implemented |
| FR-25 | Input Validation | US-25 | Forms and action checks | Implemented |
| FR-26 | Responsive Interface | US-26 | CSS responsive layout | Implemented |
| FR-27 | Privacy-Aware Interface | US-27 | Privacy-aware UI messaging | Implemented |
| FR-28 | Requirement Traceability | US-28 | README, docs, lab reports | Implemented |
| FR-29 | Verified Badge Display | US-29 | Student/company badges throughout UI | Implemented |
| FR-30 | Employer Posting Restriction | US-30 | Employer posting rule in prototype | Implemented |

## 8. Data Handling
The prototype uses simulated data rather than a live production database. Data is:

- Collected through login, profile, verification, job posting, application, and reporting forms
- Stored in JavaScript objects and sample arrays
- Displayed in dashboards, lists, detail pages, and admin views
- Searched and filtered on the job listing page
- Updated through application status changes, verification review, and profile actions
- Simulated locally to show persistence and workflow behavior

The prototype includes sample data for:
- students
- companies
- jobs
- applications
- conversations
- reviews
- saved jobs
- reports
- verification requests
- notifications
- activity logs

In the landing page, acquisition metrics are simulated locally using `localStorage` for:
- landing page visits
- CTA button clicks

No values are displayed publicly on the page.

## 9. Validation and User Testing Results
The prototype was tested with student, employer, and admin workflows. Users were asked to:

- Browse jobs
- View job details
- Check verification badges
- Apply for jobs
- Save jobs
- Track applications
- Review applicants
- Update application status
- Review verification requests and reports

Main findings:
- Students understood the job browsing and job detail flow well.
- Beginner-friendly labels helped users identify suitable roles.
- Company verification badges increased trust.
- Application tracking was useful, but it should be easier to access.
- Employers found applicant review and status updates useful.
- Admin verification/report handling needs clearer labels and stronger visibility.
- Mobile layout and button placement can still be improved.

Overall, users found the prototype helpful and realistic for an MVP, but recommended clearer navigation and stronger emphasis on the most important actions.

## 10. Startup/Product Metrics
The prototype and validation work used a small set of product and acquisition metrics:

### Product Metrics
- Total job applications submitted
- Pending applications
- Resolved applications
- Most common job categories
- Task completion rate
- Average ease-of-use score

### Landing Page / Acquisition Metrics
- Landing page visits
- CTA clicks
- Interest conversion rate

These metrics help the team understand whether the product is attracting attention, whether users interact with the prototype, and whether the core flows are easy to complete. In Lab 12, landing page visit and CTA click tracking were simulated locally using browser storage so the team could measure interest without needing a backend.

## 11. Business Value and Venture Direction
The product creates value by helping both sides of the hiring market:

### Value for students
- Faster discovery of beginner-friendly jobs
- Better trust through verified employers
- Clearer eligibility information
- Easier job application tracking
- Saved jobs and profile-based presentation of skills

### Value for employers
- Access to beginner talent
- Better applicant screening
- Employer verification for credibility
- Cleaner applicant management workflow
- More focused reach to students and fresh graduates

### Value for the platform
- Trust-based differentiation
- Role-based workflow structure
- Strong alignment with a real student/employer problem
- A clear path from prototype to future production features

The venture direction is to continue validating demand, improve usability, and later expand into real authentication, real storage, real verification, and smarter matching features.

## 12. Limitations and Future Improvements
The current prototype is functional but still limited in several ways:

### Current limitations
- Uses simulated data instead of a real database
- Uses simulated login instead of production authentication
- Does not include secure file storage
- Verification is manually simulated
- Messaging is prototype-level only
- Some data updates are not fully persistent across refreshes
- Admin analytics are prototype visualizations, not production reporting

### Future improvements
- Real authentication and role-based access control
- Production database integration
- Secure document upload and storage
- Official student verification
- Official company verification
- Real-time messaging
- Email notifications
- Better analytics dashboards
- Smarter search and recommendation features
- Stronger mobile optimization
- More complete persistence for saved jobs, reports, and applications

## Final Note
The final prototype successfully demonstrates the core student-employer-admin workflow for a trustworthy internship and entry-level job platform. It validates the selected problem, supports the MVP direction, and provides a strong foundation for future development.
