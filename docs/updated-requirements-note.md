# Updated Requirements Note

## Purpose

This document records Functional Requirement updates identified during the Lab 09 legal, ethical, privacy, and security review. These updates improve the security, privacy, and trustworthiness of the Student Internship & Entry-Level Job Platform while maintaining the original MVP scope.

| Requirement ID | Original Requirement | Proposed Update | Reason for Change | Supporting Evidence | GitHub Issue/Commit | Approved by Team? |
|---|---|---|---|---|---|---|
| FR-01 | Students and employers can register an account. | Require users to accept the Privacy Notice and User Consent Statement before registration is completed. | Ensure users understand how their personal information will be collected and used. | Privacy Review, Legal & Ethical Checklist | Issue #L09-01 | Yes |
| FR-05 | Students upload verification documents for account verification. | Restrict access to uploaded verification documents so that only authorized administrators can view them. | Protect sensitive personal information and reduce privacy risks. | Privacy Review, Security Risk Check | Issue #L09-02 | Yes |
| FR-08 | Employers upload company verification documents. | Store company verification documents securely and make them accessible only to administrators during the verification process. | Prevent unauthorized access to confidential company documents. | Privacy Review, Security Risk Check | Issue #L09-03 | Yes |
| FR-23 | Administrators manage verification requests and platform moderation. | Record important administrative actions such as verification approvals, rejections, and status changes in an activity log. | Improve accountability, transparency, and future auditing capabilities. | Security Risk Check, Risk Register | Issue #L09-04 | Yes |
| FR-29 | Admin verifies student and employer accounts. | Support verification status values of **Pending**, **Verified**, **Rejected**, and **Suspended**, while keeping verification history for future reference. | Improve account lifecycle management and moderation consistency. | Risk Register, Privacy Review | Issue #L09-05 | Yes |

---

## Rule

The Functional Requirements remain aligned with the original project objectives. The updates introduced during Lab 09 focus on strengthening privacy protection, security controls, legal compliance, and administrative accountability rather than changing the core functionality of the platform. All proposed changes have been reviewed by the team and are traceable through the associated GitHub issues.
