# Privacy and Data Protection

## Data Collection Summary

| Data Field | Why It Is Needed | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes |
|---|---|---|---|---|---|
| Full Name | Identify students and employers | Yes | No | Keep | Required for user identification and applications. |
| University Email | Authentication and communication | Yes | No | Keep | Used for login and platform notifications. |
| Student ID | Student verification | Yes | No | Keep | Used only during verification by Admin. |
| University / Faculty | Display educational background | Yes | No | Keep | Helps employers evaluate applicants. |
| Profile Photo | User profile display | Yes | No | Keep | Optional profile information. |
| Resume (PDF) | Job applications | Yes | No | Keep | Accessible only to the applicant and authorized employers. |
| Portfolio Links | Showcase skills and projects | Yes | No | Keep | Optional field provided by students. |
| Company Name | Employer identification | No | No | Keep | Displayed publicly with job postings. |
| Company Logo | Company branding | No | No | Keep | Displayed on company profile and job listings. |
| Business Registration Certificate | Employer verification | Yes | No | Keep | Accessible only by Admin during verification. |
| Official Company Email | Employer authentication | Yes | No | Keep | Used for login and verification. |
| Verification Status | Indicates account verification | No | No | Keep | Displayed as Pending, Verified, or Rejected. |
| Job Applications | Recruitment process | Yes | No | Keep | Visible only to applicants, employers, and administrators. |
| Notifications | Inform users of important updates | No | No | Keep | Includes verification and application status updates. |

---

## Privacy Rule for Prototype

The Student Internship & Entry-Level Job Platform collects only the information necessary to support user authentication, account verification, internship recruitment, job applications, and communication between students, employers, and administrators.

Student information such as names, university emails, student IDs, resumes, and verification documents is collected only for legitimate recruitment and verification purposes. Employer information, including company details and verification documents, is collected to establish the authenticity of organizations posting opportunities on the platform.

Access to personal information follows Role-Based Access Control (RBAC):

- Students can view and manage only their own profiles and application records.
- Employers can access applicant information only for jobs they have posted.
- Administrators can access verification documents and user information solely for moderation, verification, and platform management.
- Verification documents are never displayed publicly.

The prototype minimizes unnecessary personal data collection by requesting only information required to provide the platform's core services. Sensitive financial information, passwords in plain text, government-issued identification numbers, banking information, and unrelated personal data are not collected by the prototype.

---

## Data Minimization Decision

After reviewing the prototype, the team made the following privacy decisions:

- Only collect information directly required for authentication, verification, recruitment, and communication.
- Verification documents are visible only to administrators responsible for account verification.
- Student IDs are used only during verification and are not displayed publicly.
- Company verification documents remain private and are not accessible to students or other employers.
- Optional fields such as portfolio links and profile photos may be omitted by users.
- No financial, banking, biometric, or unnecessary sensitive personal information is collected.
- Future versions of the platform should include user-controlled data deletion requests and configurable privacy settings.
