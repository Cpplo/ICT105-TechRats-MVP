
# Technical Architecture

## Project Title

Student Internship & Entry-Level Job Platform

---

## 1. Selected Prototype Platform

**Frontend + Local Storage / JSON Simulation**

### Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- Browser Local Storage
- JSON Sample Data
- Figma (UI Design)
- GitHub (Version Control)
- Visual Studio Code
- Draw.io (System Diagrams)

---

## 2. Architecture Decision

The project adopts a **frontend-based web architecture** using HTML, CSS, JavaScript, and Local Storage to simulate backend functionality. This architecture matches the team's current technical skills and allows the complete user workflow to be demonstrated without requiring a fully implemented server or database.

The prototype focuses on validating the core business processes identified during customer discovery, including student registration, employer registration, administrator verification, job posting, application management, messaging, dashboards, and report management.

Local Storage and JSON files are used to simulate data persistence, while future versions of the platform can migrate to a Spring Boot backend with a MySQL database without requiring major interface redesign.

---

## 3. Main Components

| Component | Description | Tool / Technology | Related Requirement |
| --------- | ----------- | ----------------- | ------------------- |
| User Interface | Responsive web interface for Students, Employers, and Administrators | HTML5, CSS3, Bootstrap, JavaScript | FR-01 – FR-30 |
| Authentication | Simulated registration, login, and role-based access | JavaScript, Local Storage | FR-01, FR-02 |
| Student Profile | Manage personal information, resume, portfolio, and verification status | HTML, JavaScript, Local Storage | FR-03 – FR-06 |
| Company Profile | Company registration, profile management, and verification request | HTML, JavaScript | FR-07 – FR-09 |
| Job Management | Create, edit, publish, browse, and filter internship/job postings | HTML, JavaScript | FR-10 – FR-16 |
| Application Management | Submit applications, save jobs, and monitor application status | HTML, JavaScript | FR-16 – FR-20 |
| Messaging Module | Simulated communication between students and employers | HTML, JavaScript | FR-21 |
| Report System | Report suspicious job postings for administrator review | HTML, JavaScript | FR-22 |
| Admin Dashboard | Verify students and employers, manage reports, monitor platform activity | HTML, JavaScript | FR-23 – FR-30 |
| Dashboard & Analytics | Dashboard summaries for Students, Employers, and Administrators | HTML, Bootstrap, JavaScript | FR-17, FR-20, FR-23 |

---

## 4. What Will Be Fully Implemented?

The final prototype will fully demonstrate:

- Landing page
- User registration
- Login with Student, Employer, and Admin roles
- Student profile management
- Resume and portfolio upload (simulated)
- Company registration
- Company profile management
- Job posting management
- Browse and search internship/job listings
- Beginner-friendly job filtering
- Company profile viewing
- Job application workflow
- Saved jobs
- Application tracking
- Employer applicant management
- Messaging interface
- Job reporting
- Student dashboard
- Employer dashboard
- Admin dashboard overview
- Student verification workflow
- Company verification workflow
- Verified badges after administrator approval
- Success and validation messages
- Responsive user interface

---

## 5. What Will Be Simulated?

Because this is an MVP prototype, several functions will be simulated instead of fully implemented.

These include:

- User authentication without an actual server
- Database operations using Local Storage and JSON
- Resume and document uploads without cloud storage
- Messaging without real-time communication
- Email notifications
- Administrator approval process using predefined sample data
- Dashboard analytics using sample statistics
- Search and filtering using static prototype data
- Session management
- Password encryption
- Cloud database connectivity

Future versions will replace these simulations with Spring Boot APIs, MySQL, and secure authentication.

---

## 6. Final Prototype Risk

The largest technical risk is implementing a realistic multi-user recruitment workflow without a backend server or database.

To reduce this risk, the prototype uses:

- Local Storage to simulate persistent data.
- JSON sample records for realistic demonstrations.
- Role-based navigation for Students, Employers, and Administrators.
- Static dashboards with realistic statistics.
- Simulated administrator verification workflows.
- Consistent navigation and user flows based on the validated wireframes.

This approach allows the team to demonstrate every major functional requirement while keeping development achievable within the semester timeline.

---

## Future Technical Architecture

The planned production architecture will consist of:

- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap (or React)
- **Backend:** Spring Boot (Java)
- **Database:** MySQL
- **Authentication:** JWT Authentication
- **File Storage:** Cloud Storage
- **Hosting:** Cloud Web Server
- **Deployment:** GitHub Pages (Prototype) → Cloud Hosting (Future)

This architecture supports future scalability while remaining consistent with the MVP developed during the course.
