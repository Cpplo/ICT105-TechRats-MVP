# Lab 02 Opportunity Scanning

## Ideas Reviewed from Lab 1

| Idea | Problem Area | Target User | Current Alternative | Initial Technology Direction |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Idea 1: AI Knowledge Management System | Organizations store large amounts of information; users spend too much time searching | Employees, students, administrators | Manual folder/drive search, asking colleagues | React, Node.js, OpenAI API, LangChain, Vector Database |
| Idea 2: Digital Identity & Credential Verification Platform | Fake certificates and slow manual verification reduce trust | Students, employers, universities | Manual email/phone verification, document review | React, Spring Boot, JWT, QR Code, Encryption |
| Idea 3: Student Internship & Entry-Level Job Platform | Students and fresh graduates struggle to find internships and entry-level jobs because most platforms target experienced professionals | University students, fresh graduates, companies | LinkedIn Jobs, Indeed, Glassdoor, JobThai, company career pages | React, Spring Boot, PostgreSQL, AI Recommendation, WebSocket |

---

## Opportunity Discovery Table

| No. | Idea | Observed Problem | Target User | Current Alternative | Possible IT Solution | Feasible Technology |
| --- | ---- | ---------------- | ----------- | ------------------- | -------------------- | ------------------- |
| 1 | Student Internship & Entry-Level Job Platform | University students and fresh graduates struggle to discover internships and entry-level jobs because most recruitment platforms prioritize experienced candidates. Students must search across multiple websites and often cannot identify beginner-friendly opportunities. | University students, fresh graduates, SMEs, startups, companies | LinkedIn Jobs, Indeed, Glassdoor, JobThai, university career centers, company career pages | A student-focused recruitment platform where companies can post internship and entry-level positions, students can create career profiles, upload resumes and portfolios, apply for jobs, communicate with employers, and track application progress. | HTML/CSS/JS, Google Forms, Google Sheets, GitHub Pages |
| 2 | Student Deadline Reminder Dashboard | Students juggle deadlines from multiple subjects across different platforms (LMS, LINE, email) and frequently miss submission dates because there is no single place that consolidates all their upcoming assignments. | University students | Screenshots, manual notes, calendar apps | Student deadline reminder dashboard that aggregates all course deadlines in one view with color-coded urgency indicators. | HTML/CSS/JS, Google Sheets, Google Forms, GitHub Pages |
| 3 | Campus Lost-and-Found System | Students who lose personal items on campus (AirPods, water bottles, ID cards) have no structured way to report or search for lost items beyond posting in crowded LINE group chats where messages quickly disappear. | University students, campus security staff | LINE group chats, asking security manually | Campus lost-and-found web reporting system where students submit lost or found items and browse active reports. | HTML/CSS/JS, Google Forms, Google Sheets, Airtable, GitHub Pages |
| 4 | AI Knowledge Management System | Employees and students waste hours searching through scattered folders, emails, and PDFs to find information that already exists within the organization. | Employees, students, administrators | Manual folder search, asking colleagues, CTRL+F | AI-powered document Q&A platform that retrieves answers with source references. | HTML/CSS/JS, OpenAI API, Google Sheets, Glitch |
| 5 | University Event Board | Students miss university events because announcements are scattered across LINE groups, Facebook pages, and physical notice boards. | University students, club administrators | LINE groups, Facebook posts, notice boards | Centralized university event board where clubs can publish events and students can browse and RSVP. | HTML/CSS/JS, Google Forms, Google Sheets, GitHub Pages |
| 6 | Digital Credential Verification Platform | Employers and scholarship committees cannot quickly verify whether certificates are genuine, resulting in slow manual verification and fraud risks. | Employers, HR departments, universities | Manual email/phone verification | Digital credential verification platform with QR-coded certificates for instant verification. | HTML/CSS/JS, Google Sheets, Google Forms, QRCode.js, GitHub Pages |

---

## Technology Feasibility Mapping

| Idea | Prototype Type | Tools Needed | Data Needed | Difficulty | Feasible? |
| ---- | -------------- | ------------ | ----------- | ---------- | --------- |
| Idea 1: Student Internship & Entry-Level Job Platform | Simple web application prototype with Google Sheets backend | HTML/CSS/JS, Google Forms (student registration and company job posting), Google Sheets (jobs and applications database), JavaScript Fetch API, GitHub Pages | Student profiles, resumes, portfolios, company profiles, internship listings, entry-level job listings, application records | Low | Yes |
| Idea 2: Student Deadline Reminder Dashboard | Dashboard MVP connected to Google Sheets | HTML/CSS/JS, Google Forms, Google Sheets, JavaScript Fetch API, GitHub Pages | Course names, assignment titles, due dates, subject codes | Low | Yes |
| Idea 3: Campus Lost-and-Found System | Landing page MVP with Airtable item list | HTML/CSS/JS, Google Forms, Airtable, GitHub Pages | Item reports, descriptions, dates, locations, contact information | Low | Yes |
| Idea 4: AI Knowledge Management System | Conceptual web prototype with API integration | HTML/CSS/JS, OpenAI API, Google Sheets, Glitch | Sample documents, Q&A pairs, user queries | High | Partial |
| Idea 5: University Event Board | Simple web application with Google Sheets backend | HTML/CSS/JS, Google Forms, Google Sheets, JavaScript Fetch API, GitHub Pages | Event details, organizers, RSVP records | Low | Yes |
| Idea 6: Digital Credential Verification Platform | Form-based MVP with QR code generation | HTML/CSS/JS, Google Forms, Google Sheets, QRCode.js | Student credentials, certificate information, unique IDs | High | Partial |
