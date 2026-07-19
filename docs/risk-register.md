
# Risk Register

| Risk ID | Category | Risk Description | Affected Feature / Requirement | Severity | Likelihood | Mitigation Action | Owner | GitHub Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | Privacy | Unauthorized access to personal information such as student profiles, resumes, or verification documents. | Student Profile, Resume Upload, Verification Management (FR-03, FR-05, FR-29) | High | Low | Implement Role-Based Access Control (RBAC), restrict access to authorized users, and protect sensitive documents. | Technical Lead | Issue #L09-01 | In Progress |
| R-02 | Ethical | Fake student or employer accounts may reduce trust in the platform. | Student Verification, Employer Verification (FR-05, FR-08, FR-29) | High | Medium | Require verification documents, perform manual admin review, and display verification badges only after approval. | Product Lead | Issue #L09-02 | In Progress |
| R-03 | IP | Unauthorized use of third-party icons, fonts, images, or other digital assets without proper licensing. | User Interface, Website Assets | Medium | Low | Use properly licensed assets, credit third-party resources where required, and maintain an asset register. | UX/UI Lead | Issue #L09-03 | Open |
| R-04 | Security | Malicious file uploads or unauthorized access to administrative functions. | File Upload, Admin Dashboard, Verification Workflow (FR-21, FR-23, FR-29) | High | Medium | Validate uploaded files, restrict file types, protect admin routes with RBAC, and enforce secure authentication. | Technical Lead | Issue #L09-04 | In Progress |
| R-05 | Legal | Collection or storage of personal information without informing users of its intended purpose. | Registration, Verification, Privacy Policy (FR-01, FR-05) | Medium | Low | Provide a privacy notice, obtain user consent during registration, and collect only necessary information. | Product Lead | Issue #L09-05 | In Progress |
| R-06 | Data Quality | Incorrect, incomplete, or outdated user profiles and company information may reduce platform reliability. | Student Profile, Company Profile, Job Posting (FR-03, FR-08, FR-10) | Medium | Medium | Validate required fields, encourage profile updates, and allow administrators to review suspicious information. | Technical Lead | Issue #L09-06 | Open |

---

## Overall Risk Decision

The project is **safe to continue with mitigation**.

The overall risk assessment indicates that the prototype is suitable for continued development because the identified risks are manageable and have clear mitigation strategies. The most significant risks relate to privacy protection, user verification, and secure file uploads. These risks are already addressed conceptually through Role-Based Access Control (RBAC), manual verification workflows, and restricted access to sensitive information.

Before production deployment, the team should implement stronger input validation, secure file upload handling, encrypted password storage, HTTPS communication, audit logging, and comprehensive access control testing to further reduce security and privacy risks.
