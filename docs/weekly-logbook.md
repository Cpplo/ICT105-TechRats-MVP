# Weekly Logbook 
## Weekly Progress Log

| Lab | Main Activity | Output | Status |
|------|-------------|---------|---------|
| Lab 1 | Repository Setup and Team Formation | GitHub Repository, Team Profile | Completed |
| Lab 1 | Venture Idea Brainstorming | Three Initial Venture Ideas | Completed |
| Lab 1 | Initial Documentation | README.md, Team Profile, Idea Log | Completed |

---

## Lab 02: IT Opportunity Scanning

### What We Completed
1. Reviewed the 3 ideas from Lab 1 (AI Knowledge Management System, Digital Credential Verification Platform, and Student Freelancer Marketplace Platform) and documented their problem areas, target users, and initial technology directions.
2. Conducted opportunity scanning by identifying 6 real-world observed problems across different user groups on campus, mapping each to a possible IT solution and feasible technology stack.
3. Completed a NUF Scoring Matrix (New + Useful + Feasible) to evaluate and rank all 6 ideas, then selected the highest-scoring idea to move forward with.

### Selected Opportunity
**Student Freelancer Marketplace Platform**

### Why We Selected It
Using the NUF scoring method (scored 1–5 per dimension), the Student Freelancer Marketplace received the highest total score of **13** (New: 4, Useful: 5, Feasible: 4). It scored the highest on Usefulness because it directly addresses a real and immediate pain point — university students with genuine skills have no credible platform to find paid work without competing against professionals. It also scored highly on Feasibility because the core features (profile listing, project board, and RSVP/contact form) can be built using HTML/CSS/JS and Google Sheets without requiring advanced backend infrastructure or API integration, making it realistic to prototype within the semester scope.

### What We Rejected
**AI Knowledge Management System** (NUF Total: 11, Rank: 4) — Although it scored the highest on Newness (5/5) due to its innovative use of AI for document search, it received a low Feasibility score (2/5) because implementing a functional AI-powered Q&A system requires OpenAI API integration, vector database setup, and backend infrastructure that goes beyond what the team can reliably prototype this semester. The complexity risk was too high compared to the value it would deliver at prototype stage.

**Digital Credential Verification Platform** (NUF Total: 10, Rank: 6) — This idea was also rejected because the security and encryption requirements needed to make credential verification trustworthy (JWT tokens, QR code signing, institution registry) are technically complex and outside the semester scope. A prototype without proper security would not demonstrate real value to users.

### What We Learned
1. Not every innovative idea is the right idea to build — feasibility within your current skill set and timeframe matters as much as novelty, and the NUF scoring method helped us separate excitement from practicality.
2. Real user pain points are more convincing than assumed problems — observing how students actually lose freelance opportunities on general platforms like Fiverr gave us confidence that the Student Freelancer Marketplace solves a genuine and underserved need.
3. Simple technology stacks (HTML/CSS/JS + Google Sheets) can be powerful enough to validate a product idea at prototype stage without needing a full backend, which keeps the team focused on solving the problem rather than managing infrastructure.

### Evidence of Work
- Opportunity scan file: `docs/opportunity-scan.md`
- NUF scoring file: `docs/nuf-scoring-matrix.xlsx`
- Selected opportunity file: `docs/selected-opportunity.md`
- GitHub issue screenshot: <img width="926" height="326" alt="image" src="https://github.com/user-attachments/assets/66a0e8a5-2be8-4064-8d90-344b8cf9d22c" />

- Commit link: *(paste commit URL here after pushing to GitHub)*

### Plan for Lab 03
The team will prepare interview and survey questions targeting RSU university students who have freelance experience or interest. We will collect at least 10 survey responses to validate whether students want a dedicated student freelance platform and identify the most important features they need.

