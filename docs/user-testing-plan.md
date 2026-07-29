# User Testing Plan

## 1. Testing Objective
To learn whether university students can understand, navigate, and complete the core job-search and application workflow, and whether employers can understand, navigate, and complete the core job-posting and applicant-management workflow — before final improvements are made ahead of Lab 14.

> Assumption: Testers are simulated for this prototype stage (2 student testers, 1 employer tester), consistent with the project's "interactive prototype only" scope. Update this section if your group recruits real testers instead.

## 2. Test User Profile
| User Type | Number of Testers | Why This User Type Matters |
| --- | --- | --- |
| Student (target user) | 2 | Students are the primary users; their ability to find, trust, and apply to beginner-friendly jobs is the core value proposition being validated. |
| Employer (target user) | 1 | Employers are the secondary user; their ability to get verified and post/manage listings validates the recruiting side of the two-sided marketplace. |
| Admin/manager role | 1 (simulated by a team member) | Verifies the moderation and verification review flow works and is understandable, even though Admin is not a public-facing role. |

## 3. Testing Tasks
| Task ID | User Task | Related Requirement | Success Criteria | Observation Focus |
| --- | --- | --- | --- | --- |
| T01 | Open the homepage and explain what the platform is for. | FR-01 | Tester can correctly explain the platform helps students find beginner-friendly jobs and employers recruit verified early-career talent. | Confusion about the value message or target users. |
| T02 | (Student) Create/edit profile and submit verification information. | FR-03, FR-05 | Tester completes profile and verification submission without major help. | Field clarity, confusion around what "verification" means. |
| T03 | (Student) Upload resume and a supporting document. | FR-06 | Tester successfully attaches a resume/document and sees confirmation. | Upload flow clarity, file-type confusion. |
| T04 | (Student) Search and filter jobs using beginner-friendly and eligibility filters. | FR-11, FR-13 | Tester finds at least one relevant job matching their filter criteria. | Filter usability, whether beginner-friendly tag is noticed. |
| T05 | (Student) View job detail, check company verification badge, and apply. | FR-14, FR-15, FR-16, FR-29 | Tester submits an application and understands the verification badge's meaning. | Trust signal clarity, resume requirement clarity. |
| T06 | (Student) Check application status in the Application Tracker. | FR-17 | Tester correctly identifies their current application status. | Status label clarity. |
| T07 | (Employer) Register company and submit verification information. | FR-07, FR-08 | Tester completes company verification submission and understands Pending status. | Confusion about what documents/info are required. |
| T08 | (Employer) Attempt to post a job before verification is approved. | FR-30 | Tester sees and understands the block/restriction message. | Whether the restriction message is clear (not just an error). |
| T09 | (Employer) Post a job after verification is approved. | FR-10 | Tester successfully publishes a job listing with all required fields. | Form clarity, required-field validation. |
| T10 | (Employer) View applicants, filter by skill/status, and update an application status. | FR-19, FR-20 | Tester updates a status and understands it syncs to the student's tracker. | Applicant list usability, status-update clarity. |
| T11 | (Admin) Review a pending company verification and a reported job post. | FR-08, FR-23 | Tester approves/rejects verification and resolves the reported job. | Clarity of admin review screen and available actions. |
| T12 | Review dashboard/summary (Student or Employer). | FR-12 | Tester correctly interprets their dashboard's key metrics (applications, job posts, etc.). | Whether dashboard numbers are meaningful at a glance. |

## 4. Testing Procedure
1. Introduce the test purpose: explain this is a prototype for a class project, not a live product, and feedback will be used to improve it before the final release.
2. Assign the tester their role (Student, Employer, or Admin) and ask them to complete each relevant task in order.
3. Do not guide the tester unless they are completely stuck — note where and why they got stuck.
4. Record task completion (success/fail), time taken if relevant, comments, and any usability problems observed.
5. Ask final feedback questions: What was confusing? What did you like? What would you change first?

## 5. Ethical Reminder
Do not collect unnecessary personal data from testers. Explain that feedback is collected only for class learning and prototype improvement, and any sample data entered during testing (e.g. resumes, company details) should be fictional or non-sensitive test data, not real personal documents.
