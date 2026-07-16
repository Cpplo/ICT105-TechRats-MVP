# Lab 08 - Analytics Insights

## 1. Analytics Question

What did users do, say, and prove when testing the MVP direction of the Student Internship & Entry-Level Job Platform?

---

## 2. Metrics Calculated

| Metric | Formula / Method | Result |
|---|---|---:|
| Total test users | Count testers | 50 |
| Completed tasks | Count TaskCompleted = Yes | 45 |
| Task success rate | Completed tasks / total testers | 90% |
| Average feedback score | Average EaseOfUseScore | 4.3 / 5.0 |
| Average interest level | Average InterestLevel | 4.4 / 5.0 |
| Confusion points | Count repeated confusion categories | Verification Process, Dashboard Navigation, Job Search Filter |

---

## 3. Findings

1. **Most participants successfully completed their assigned tasks.**  
   Out of 50 validation sessions, 45 participants completed their assigned workflow successfully, resulting in a **90% task completion rate**, which indicates that the platform's primary user flows are easy to understand and navigate.

2. **Users responded positively to the platform's usability and usefulness.**  
   The prototype achieved an **average ease-of-use score of 4.3/5** and an **average interest level of 4.4/5**, suggesting that participants found the platform intuitive and would be willing to use it in the future.

3. **Verification and dashboard features require minor improvements.**  
   Although most participants completed the verification process successfully, several users indicated confusion regarding verification status updates, dashboard navigation, and available job search filters. These issues did not prevent task completion but should be refined before final implementation.

---

## 4. Interpretation

The validation results indicate that the MVP successfully addresses the core problem of helping university students discover trustworthy internship and entry-level job opportunities while allowing employers to recruit verified student talent.

The high task completion rate and positive usability ratings demonstrate that users can navigate the platform with minimal assistance. Participants also appreciated the verification system because it increased confidence in both student and employer identities.

The remaining usability issues are relatively minor and mainly involve improving navigation, verification feedback, and search functionality rather than redesigning the overall system.

---

## 5. Requirements Affected

| Requirement ID | Evidence | Action Needed |
|---|---|---|
| FR-05 | Several users requested clearer verification status updates. | Improve verification messages and status indicators. |
| FR-11 | Some participants wanted more flexible search and filtering options. | Expand job search filters and improve filter visibility. |
| FR-17 | A few users found the Student Dashboard slightly confusing. | Improve dashboard layout and information hierarchy. |

---

## 6. Next Prototype Improvement

Before continuing implementation, the team will:

- Improve the verification status interface by providing clearer progress indicators and notifications.
- Enhance job search by adding additional filtering and sorting options.
- Simplify the Student Dashboard layout to improve readability.
- Improve navigation consistency across all pages.
- Refine labels, instructions, and user guidance based on participant feedback.
- Conduct another round of usability testing after implementing these improvements to validate the revised prototype.
