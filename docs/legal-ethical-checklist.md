# Legal and Ethical Checklist

## Project Title

Student Internship & Entry-Level Job Platform

## Ethical Review

| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|---|---|---|---|---|---|
| Users are informed about the purpose of the prototype. | Yes | The homepage, About page, and registration pages explain that the platform connects RSU students with verified employers for internship and entry-level job opportunities. | Continue providing clear project descriptions during onboarding. | Product Lead | Issue #L09-01 |
| The prototype avoids misleading claims. | Yes | The platform does not guarantee employment or internship placement. Job opportunities are presented as listings posted by verified employers. | Continue using accurate wording and avoid unrealistic promises. | Product Lead | Issue #L09-02 |
| The prototype does not collect unnecessary sensitive data. | Yes | Only data necessary for authentication, verification, recruitment, and communication is collected. Verification documents are requested solely for account verification. | Regularly review collected data and remove unnecessary fields in future versions. | Technical Lead | Issue #L09-03 |
| Users can understand what happens after submission. | Yes | After registration or document upload, users receive status updates such as Pending Verification, Verified, or Rejected. Notifications explain the next steps. | Improve status messages and provide additional guidance where appropriate. | UX/UI Lead | Issue #L09-04 |
| Admin or manager actions are clearly separated from user actions. | Yes | Role-Based Access Control (RBAC) separates Student, Employer, and Admin functions. Administrative features are only accessible through the Admin Dashboard after Admin Login. | Continue enforcing role-based permissions and route protection. | Technical Lead | Issue #L09-05 |
| The prototype avoids unfair or harmful treatment of users. | Yes | Verification follows the same review process for all students and employers. Rejected users receive feedback and may resubmit verification documents. | Document verification guidelines to ensure fair and consistent moderation. | Product Lead | Issue #L09-06 |

## Summary Decision

- **Safe to continue:** **Yes**
- **Required revision before implementation:**
  - Provide a more detailed privacy notice explaining how uploaded verification documents are stored and protected.
  - Improve verification status notifications to reduce user uncertainty.
  - Publish clear verification guidelines for students and employers to ensure a transparent and consistent review process.
  - Continue reviewing legal and ethical requirements as additional platform features are implemented.
