# Lab 10 - Implementation Plan

## 1. Project Information

- **Group name:** Tech Rats
- **Project title:** Student Internship & Entry-Level Job Platform
- **Repository link:** https://github.com/<your-repository-link>
- **Selected platform/tools:** HTML5, CSS3, JavaScript (ES6), GitHub, Draw.io, Visual Studio Code
- **Backend status:** Simulated backend (using local JSON, CSV datasets, and JavaScript)

---

## 2. Prototype Scope for Sprint 1

The objective of Sprint 1 is to develop a functional front-end prototype that demonstrates the core workflow of the Student Internship & Entry-Level Job Platform. The prototype will simulate data processing without a real backend while allowing users to navigate through the main system features.

| Feature | Requirement ID | User Story ID | Screen/Module | Sprint 1 Status |
|---|---|---|---|---|
| Homepage / Landing Page | FR-01 | US-01 | Homepage | Completed |
| Student & Employer Registration | FR-02 | US-02 | Registration Form | Completed |
| Student Profile Management | FR-03 | US-03 | Student Dashboard | Completed |
| Job Listing | FR-10 | US-07 | Browse Jobs | Completed |
| Search & Filter Jobs | FR-12 | US-08 | Job Listing | Completed |
| Job Detail View | FR-13 | US-09 | Job Detail | Completed |
| Job Application | FR-14 | US-10 | Application Form | Completed |
| Employer Dashboard | FR-17 | US-13 | Employer Dashboard | Completed |
| Admin Dashboard | FR-23 | US-18 | Admin Dashboard | Completed |
| Verification Status Management | FR-29 | US-21 | Admin Dashboard | Completed |

---

## 3. Implementation Approach

### Frontend

The prototype is developed as a responsive web application using **HTML5**, **CSS3**, and **JavaScript (ES6)**. The interface is designed to provide a simple and intuitive experience for Students, Employers, and Administrators.

### Data Source / Storage

Since the project does not include a backend, sample data is stored using CSV files, JSON files, and JavaScript objects. These datasets simulate users, companies, job postings, applications, and verification records.

### Admin / Status Handling

Administrative functions simulate account verification, application review, and status management. Verification status values such as **Pending**, **Verified**, and **Rejected** are updated through JavaScript to demonstrate system behavior.

### Search / Filter Approach

JavaScript is used to filter job listings based on keywords, job categories, and locations. The filtering process updates the displayed records without requiring a backend database.

### Validation Approach

Registration forms and application forms include client-side validation to ensure required fields are completed, email addresses follow the correct format, and invalid submissions are prevented before processing.

### Screenshots / Evidence Approach

Screenshots of all completed prototype pages, including the Homepage, Registration Form, Job Listing, Job Detail, Student Dashboard, Employer Dashboard, and Admin Dashboard, will be included as evidence of Sprint 1 implementation.

---

## 4. Member Responsibilities

| Member | Responsibility | Evidence of Contribution |
|---|---|---|
| **Hein Pyae Shan** | Product planning, requirement review, user validation, and Sprint planning | GitHub commits, Issues, Documentation |
| **Phyo Wai Aung** | Technical implementation, JavaScript functionality, repository management, integration | GitHub commits, Prototype files |
| **Kyaw Phone Thant** | UX/UI design, wireframes, interface implementation, documentation, diagrams | GitHub commits, HTML/CSS files, Documentation |
| **Phyu Sin Ko Ko** | Documentation review, quality assurance, testing, bug tracking, project reports | GitHub commits, Documentation, Test records |

---

## 5. Risks or Blockers

The team identified several challenges during Sprint 1 implementation:

- Implementing interactive system behavior without a real backend database.
- Managing large sample datasets while maintaining prototype performance.
- Ensuring consistency between Functional Requirements, User Stories, and implemented features.
- Simulating verification workflows and application status updates using only front-end technologies.
- Maintaining responsive layouts across different screen sizes.

To address these challenges, the team will continue using structured JSON and CSV datasets, modular JavaScript functions, regular GitHub collaboration, and frequent prototype testing throughout development.
