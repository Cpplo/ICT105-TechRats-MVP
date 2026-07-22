/* ============================================================
   SAMPLE DATA
   ============================================================ */
const SKILL_POOL = ["React","Figma","Python","UI Design","Copywriting","SEO","Video Editing","Adobe Illustrator","Node.js","Data Analysis","Photography","Branding","WordPress","Social Media","After Effects"];

const STUDENTS = [
  {id:"s1",name:"Maya Chen",uni:"State University",major:"Computer Science",year:"3rd Year",bio:"Frontend developer who loves building clean, accessible interfaces. Always learning something new.",skills:["React","Node.js","UI Design"],rating:4.9,reviews:6,completed:5,avatarColor:"blue",verificationStatus:"Verified",resumeUploaded:true,portfolio:[{title:"Campus Events App",type:"GitHub",desc:"A React Native app helping students discover campus events.",link:"https://github.com",image:"",featured:true},{title:"Coffee Shop Rebrand",type:"Behance",desc:"Full visual identity for a local coffee shop.",link:"https://behance.net",image:"",featured:false}],certs:["Meta Front-End Developer","Google UX Design"]},
  {id:"s2",name:"Diego Ramirez",uni:"Westfield College",major:"Graphic Design",year:"2nd Year",bio:"Visual designer focused on branding and editorial layouts.",skills:["Adobe Illustrator","Branding","Figma"],rating:4.7,reviews:4,completed:3,avatarColor:"green",verificationStatus:"Verified",resumeUploaded:true,portfolio:[{title:"Nonprofit Annual Report",type:"PDF",desc:"22-page annual report design for a local nonprofit."}],certs:["Adobe Certified Professional"]},
  {id:"s3",name:"Priya Nair",uni:"State University",major:"Marketing",year:"4th Year",bio:"Growth-minded marketer with a focus on social and content strategy.",skills:["SEO","Social Media","Copywriting"],rating:5.0,reviews:8,completed:7,avatarColor:"blue",verificationStatus:"Verified",resumeUploaded:true,portfolio:[{title:"DTC Brand Launch Campaign",type:"Case Study",desc:"Grew Instagram following 3x in 8 weeks for a skincare startup."}],certs:["HubSpot Content Marketing"]},
  {id:"s4",name:"Jordan Blake",uni:"Riverside Tech",major:"Computer Science",year:"3rd Year",bio:"Full-stack engineer, comfortable across the stack from databases to UI.",skills:["Python","React","Data Analysis"],rating:4.8,reviews:5,completed:4,avatarColor:"green",verificationStatus:"Pending",resumeUploaded:false,portfolio:[{title:"Budget Tracker",type:"GitHub",desc:"Personal finance tracker built with Python and React."}],certs:[]},
  {id:"s5",name:"Sofia Marin",uni:"Westfield College",major:"Film & Media",year:"2nd Year",bio:"Video editor and motion designer telling stories that stick.",skills:["Video Editing","After Effects","Photography"],rating:4.9,reviews:3,completed:3,avatarColor:"blue",verificationStatus:"Verified",resumeUploaded:true,portfolio:[{title:"Brand Launch Reel",type:"Vimeo",desc:"60-second launch video for a fitness app."}],certs:["Adobe Premiere Pro Certified"]},
  {id:"s6",name:"Ethan Brooks",uni:"State University",major:"Information Systems",year:"4th Year",bio:"Backend-leaning developer who enjoys clean APIs and CMS builds.",skills:["WordPress","Node.js","SEO"],rating:4.6,reviews:4,completed:4,avatarColor:"green",verificationStatus:"Verified",resumeUploaded:true,portfolio:[{title:"Local Bakery Site",type:"Live Site",desc:"WordPress site with online ordering for a local bakery."}],certs:[]},
  {id:"s7",name:"Aisha Khan",uni:"Riverside Tech",major:"UX Design",year:"3rd Year",bio:"UX researcher and designer obsessed with usability testing.",skills:["UI Design","Figma","Data Analysis"],rating:4.9,reviews:6,completed:5,avatarColor:"blue",verificationStatus:"Verified",resumeUploaded:true,portfolio:[{title:"Mobile Banking Redesign",type:"Case Study",desc:"Usability study and redesign concept for a regional bank app."}],certs:["Google UX Design"]},
  {id:"s8",name:"Liam O'Connor",uni:"Westfield College",major:"Computer Science",year:"2nd Year",bio:"Early-career developer eager to build real products with real users.",skills:["Python","React"],rating:4.5,reviews:2,completed:1,avatarColor:"green",verificationStatus:"Not Verified",resumeUploaded:false,portfolio:[{title:"Study Group Finder",type:"GitHub",desc:"A small web app to match students into study groups."}],certs:[]},
  {id:"s9",name:"Grace Park",uni:"State University",major:"Communications",year:"4th Year",bio:"Copywriter who can flex from playful social captions to long-form blogs.",skills:["Copywriting","Social Media","SEO"],rating:4.8,reviews:5,completed:5,avatarColor:"blue",verificationStatus:"Verified",resumeUploaded:true,portfolio:[{title:"SaaS Blog Series",type:"Articles",desc:"12-part blog series for a B2B SaaS company."}],certs:[]},
  {id:"s10",name:"Noah Williams",uni:"Riverside Tech",major:"Photography",year:"3rd Year",bio:"Product and event photographer with a clean, natural-light style.",skills:["Photography","Adobe Illustrator"],rating:4.7,reviews:3,completed:3,avatarColor:"green",verificationStatus:"Verified",resumeUploaded:true,portfolio:[{title:"Product Catalog Shoot",type:"Gallery",desc:"Full product photography set for an e-commerce client."}],certs:[]},
];

const COMPANIES = [
  {id:"c1",name:"Brightleaf Studio",industry:"Design Agency",location:"Austin, TX",size:"5-15 employees",verified:"Verified",rating:4.8,reviews:9,projectsCompleted:14,responseRate:"96%",website:"brightleafstudio.com",desc:"A boutique brand and product design studio working with early-stage startups."},
  {id:"c2",name:"Northstar Robotics",industry:"Hardware / Robotics",location:"Boston, MA",size:"15-50 employees",verified:"Verified",rating:4.6,reviews:5,projectsCompleted:8,responseRate:"89%",website:"northstarrobotics.io",desc:"Building next-generation warehouse automation robots."},
  {id:"c3",name:"Loop Commerce Co.",industry:"E-commerce",location:"Remote",size:"5-15 employees",verified:"Pending Verification",rating:4.4,reviews:3,projectsCompleted:4,responseRate:"78%",website:"loopcommerce.co",desc:"A direct-to-consumer home goods brand scaling its online presence."},
  {id:"c4",name:"Verdant Health",industry:"HealthTech",location:"Denver, CO",size:"15-50 employees",verified:"Verified",rating:4.9,reviews:11,projectsCompleted:19,responseRate:"99%",website:"verdanthealth.com",desc:"Telehealth platform connecting patients with nutrition specialists."},
  {id:"c5",name:"Pixel & Pine",industry:"Marketing Agency",location:"Portland, OR",size:"5-15 employees",verified:"Pending Verification",rating:4.3,reviews:2,projectsCompleted:3,responseRate:"71%",website:"pixelandpine.com",desc:"Independent agency for outdoor and lifestyle brands."},
  {id:"c6",name:"Fintrust Labs",industry:"FinTech",location:"New York, NY",size:"50-100 employees",verified:"Verified",rating:4.7,reviews:8,projectsCompleted:12,responseRate:"93%",website:"fintrustlabs.com",desc:"Personal finance tools for first-generation investors."},
  {id:"c7",name:"Hatch Studio",industry:"Startup Studio",location:"Remote",size:"1-5 employees",verified:"Not Verified",rating:0,reviews:0,projectsCompleted:0,responseRate:"—",website:"hatchstudio.dev",desc:"Early-stage studio incubating two new consumer apps."},
  {id:"c8",name:"Bluewave Media",industry:"Media & Publishing",location:"Chicago, IL",size:"15-50 employees",verified:"Verified",rating:4.5,reviews:6,projectsCompleted:10,responseRate:"90%",website:"bluewavemedia.com",desc:"Independent digital publication covering climate and innovation."},
];

const CATEGORIES = ["Programming","UI/UX Design","Graphic Design","Marketing","Writing","Photography","Video Editing"];

const JOBS = [
  {id:"j1",companyId:"c1",title:"Landing Page Redesign Intern",category:"UI/UX Design",jobType:"Internship",workMode:"Remote",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (fluent)",visaEligibility:"Not required",deadline:"Jul 18, 2026",skills:["Figma","UI Design"],status:"Open",featured:true,desc:"We need a fresh, conversion-focused landing page redesign for one of our SaaS clients. You'll work directly with our creative director and have full Figma access to the existing design system."},
  {id:"j2",companyId:"c2",title:"Product Photography Intern",category:"Photography",jobType:"Internship",workMode:"On-site",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (conversational)",visaEligibility:"Sponsorship not available",deadline:"Jul 10, 2026",skills:["Photography"],status:"Open",desc:"Looking for an intern to shoot our new robotics product line for our catalog and website. Studio space and lighting equipment provided on-site."},
  {id:"j3",companyId:"c3",title:"Marketing Copywriting Intern",category:"Writing",jobType:"Internship",workMode:"Remote",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (fluent)",visaEligibility:"Not required",deadline:"Jul 5, 2026",skills:["Copywriting","SEO"],status:"Open",desc:"We're launching a summer sale and need a copywriting intern to help write 6 punchy marketing emails in our brand voice, with subject line A/B test variants."},
  {id:"j4",companyId:"c4",title:"Junior UX Researcher (Entry-Level)",category:"UI/UX Design",jobType:"Entry-Level",workMode:"Remote",beginnerFriendly:true,educationLevel:"Recent Graduate",languageRequirement:"English (fluent)",visaEligibility:"Sponsorship not available",deadline:"Jul 25, 2026",skills:["UI Design","Data Analysis"],status:"Open",featured:true,desc:"Redesign our patient onboarding experience from research through high-fidelity prototype. Includes 3 user interviews we'll help schedule."},
  {id:"j5",companyId:"c1",title:"Brand Design Intern",category:"Graphic Design",jobType:"Internship",workMode:"Remote",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (fluent)",visaEligibility:"Not required",deadline:"Jul 20, 2026",skills:["Branding","Adobe Illustrator"],status:"Open",desc:"Develop a logo, color palette, and brand guideline document for a new product line launching this fall."},
  {id:"j6",companyId:"c5",title:"Social Media Marketing Intern",category:"Marketing",jobType:"Internship",workMode:"Remote",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (fluent)",visaEligibility:"Not required",deadline:"Jul 8, 2026",skills:["Social Media","Photography"],status:"Open",desc:"Need an intern to plan and produce 4 weeks of Instagram content, mixing product shots and lifestyle posts for an outdoor apparel brand."},
  {id:"j7",companyId:"c6",title:"Junior Motion Designer (Entry-Level)",category:"Video Editing",jobType:"Entry-Level",workMode:"Remote",beginnerFriendly:false,educationLevel:"Recent Graduate",languageRequirement:"English (fluent)",visaEligibility:"Sponsorship not available",deadline:"Jul 15, 2026",skills:["Video Editing","After Effects"],status:"Open",featured:true,desc:"60-90 second animated explainer for our new investing app onboarding flow. Script and voiceover provided."},
  {id:"j8",companyId:"c2",title:"Frontend Engineering Intern",category:"Programming",jobType:"Internship",workMode:"Remote",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (conversational)",visaEligibility:"Not required",deadline:"Jul 28, 2026",skills:["React","Node.js"],status:"Open",featured:true,desc:"Build a React dashboard to visualize robot fleet status using our existing REST API. Design mockups will be provided."},
  {id:"j9",companyId:"c4",title:"Content Writing Intern",category:"Writing",jobType:"Internship",workMode:"Remote",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (fluent)",visaEligibility:"Not required",deadline:"Jul 12, 2026",skills:["Copywriting","SEO"],status:"Open",desc:"4 SEO-optimized blog posts (1000 words each) about nutrition topics relevant to our telehealth patients."},
  {id:"j10",companyId:"c8",title:"Junior Data Analyst (Entry-Level)",category:"Programming",jobType:"Entry-Level",workMode:"Remote",beginnerFriendly:false,educationLevel:"Recent Graduate",languageRequirement:"English (fluent)",visaEligibility:"Sponsorship not available",deadline:"Jul 19, 2026",skills:["Data Analysis","React"],status:"Open",desc:"Turn our annual climate dataset into a set of interactive web charts to embed in our year-end report."},
  {id:"j11",companyId:"c3",title:"Web Development Intern",category:"Programming",jobType:"Internship",workMode:"Remote",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (conversational)",visaEligibility:"Not required",deadline:"Jul 22, 2026",skills:["WordPress","UI Design"],status:"Open",featured:true,desc:"Refresh our Shopify storefront theme to align with our new brand guidelines, including mobile optimization."},
  {id:"j12",companyId:"c7",title:"Graphic Design Intern",category:"Graphic Design",jobType:"Internship",workMode:"Remote",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (fluent)",visaEligibility:"Not required",deadline:"Jul 6, 2026",skills:["Adobe Illustrator","Branding"],status:"Open",desc:"Design an app icon plus App Store / Play Store screenshot assets for our new productivity app."},
  {id:"j13",companyId:"c6",title:"Presentation Design Intern",category:"Graphic Design",jobType:"Internship",workMode:"Remote",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (fluent)",visaEligibility:"Not required",deadline:"Jul 9, 2026",skills:["Figma","Branding"],status:"Open",desc:"Redesign our 18-slide seed-round pitch deck to look polished and investor-ready."},
  {id:"j14",companyId:"c5",title:"Photography Intern",category:"Photography",jobType:"Internship",workMode:"On-site",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (conversational)",visaEligibility:"Not required",deadline:"Jul 14, 2026",skills:["Photography"],status:"Open",featured:true,desc:"On-location lifestyle shoot for our new outdoor jacket line launch."},
  {id:"j15",companyId:"c8",title:"Editorial Intern",category:"Writing",jobType:"Internship",workMode:"Remote",beginnerFriendly:true,educationLevel:"Currently Enrolled",languageRequirement:"English (fluent)",visaEligibility:"Not required",deadline:"Jul 11, 2026",skills:["Copywriting","UI Design"],status:"Open",desc:"Design and write a reusable newsletter template plus the first issue copy for our weekly climate digest."},
];

let APPLICATIONS = [
  {id:"a1",studentId:"s1",jobId:"j1",status:"Accepted"},
  {id:"a2",studentId:"s1",jobId:"j8",status:"Under Review"},
  {id:"a3",studentId:"s1",jobId:"j4",status:"Interview"},
  {id:"a4",studentId:"s2",jobId:"j5",status:"Closed"},
  {id:"a5",studentId:"s4",jobId:"j8",status:"Rejected"},
];

let CONVERSATIONS = [
  {id:"conv1",studentId:"s1",companyId:"c1",messages:[
    {from:"company",text:"Hi Maya! Loved your portfolio, especially the campus events app.",ts:"Jun 28, 9:02 AM"},
    {from:"student",text:"Thank you! I'd love to hear more about the internship.",ts:"Jun 28, 9:14 AM"},
    {from:"company",text:"We're hoping to start by mid-July — would that timeline work for you?",ts:"Jun 28, 9:20 AM"},
    {from:"student",text:"Yes, that works well on my end.",ts:"Jun 28, 9:25 AM"},
  ]},
  {id:"conv2",studentId:"s1",companyId:"c2",messages:[
    {from:"company",text:"Thanks for applying to the internship — reviewing applications this week.",ts:"Jun 29, 2:40 PM"},
  ]},
];

let REVIEWS = [
  {id:"r1",type:"company-review",jobId:"j5",reviewerId:"s2",revieweeId:"c1",rating:5,comment:"Brightleaf was incredibly clear with feedback and paid on time. Would work with them again.",date:"Jun 20, 2026"},
  {id:"r2",type:"student-review",jobId:"j5",reviewerId:"c1",revieweeId:"s2",rating:5,comment:"Diego delivered a polished brand identity ahead of schedule. Great communicator.",date:"Jun 21, 2026"},
];

let SAVED_JOBS = []; // {id, studentId, jobId}

let REPORTS = []; // {id, jobId, studentId, reason, date, status: "Open" | "Kept" | "Hidden" | "Removed"}
let VERIFICATION_REQUESTS = []; // {id, userId, role, status, submittedAt, reviewedAt, reviewerId, rejectionReason, documents: []}
let NOTIFICATIONS = []; // {id, userId, title, message, date, read}
let ACTIVITY_LOG = []; // {id, actorId, actorRole, action, targetType, targetId, date, details}

/* ============================================================
   APP STATE
   ============================================================ */
const state = {
  route:"landing",
  params:{},
  currentUser:null, // {role:'student'|'company'|'admin', id:'s1'}
  authMode:"login", // login | register
  authRole:"student",
  browseFilters:{q:"",category:"All"},
  activeConvId:null,
  toastTimer:null,
};

function go(route, params={}){ state.route=route; state.params=params; window.scrollTo(0,0); render(); }
function toast(msg){
  clearTimeout(state.toastTimer);
  let el = document.getElementById("toast-el");
  if(el) el.remove();
  el = document.createElement("div");
  el.id="toast-el"; el.className="toast"; el.textContent=msg;
  document.body.appendChild(el);
  state.toastTimer = setTimeout(()=>el.remove(),2400);
}

/* helpers */
const byId = (arr,id)=>arr.find(x=>x.id===id);
function initials(name){ return name.split(" ").map(p=>p[0]).join("").slice(0,2).toUpperCase(); }
function avatar(name,color,size=40,fontSize=14){ return `<div class="avatar avatar-${color}" style="width:${size}px;height:${size}px;font-size:${fontSize}px;">${initials(name)}</div>`; }
function stars(n){ const full="★".repeat(Math.round(n)); const empty="☆".repeat(5-Math.round(n)); return full+empty; }

function normalizeStatus(status){
  if(!status) return "Pending";
  if(status==="Verified" || status==="Verified Student" || status==="Verified Company") return "Verified";
  if(status==="Pending Verification") return "Pending";
  if(status==="Not Verified") return "Pending";
  if(status==="Rejected") return "Rejected";
  if(status==="Suspended") return "Suspended";
  return status;
}

function roleLabel(role){
  if(role==="student") return "Student";
  if(role==="company") return "Employer";
  if(role==="admin") return "Admin";
  return "User";
}

function platformLabel(role,status){
  const s = normalizeStatus(status);
  if(s==="Verified") return role==="student" ? "Verified Student" : role==="company" ? "Verified Company" : "Verified";
  if(s==="Rejected") return "Rejected";
  if(s==="Suspended") return "Suspended";
  return "Pending Verification";
}

function verifBadge(status, role){
  const s = normalizeStatus(status);

  if(s==="Verified"){
    return `<span class="badge badge-verified">Verified ${role==="student"?"Student":role==="company"?"Company":"User"}</span>`;
  }

  if(s==="Pending"){
    return `<span class="badge badge-pending">Pending Verification</span>`;
  }

  if(s==="Rejected"){
    return `<span class="badge badge-danger">Rejected</span>`;
  }

  if(s==="Suspended"){
    return `<span class="badge badge-danger">Suspended</span>`;
  }

  return `<span class="badge badge-unverified">Not Verified</span>`;
}

function badgeRow(label, value, role){
  return `
    <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
      <span style="font-size:13px; color:var(--text-mute);">${label}</span>
      ${verifBadge(value, role)}
    </div>
  `;
}

function statusPill(s){ return `<span class="status-pill status-${s.replace(/\s/g,'')}">${s}</span>`; }
function companyById(id){ return byId(COMPANIES,id); }
function studentById(id){ return byId(STUDENTS,id); }
function jobById(id){ return byId(JOBS,id); }

function isVerifiedStudent(id){ return normalizeStatus(studentById(id)?.verificationStatus)==="Verified"; }
function isVerifiedCompany(id){ return normalizeStatus(companyById(id)?.verified)==="Verified"; }
function canStudentApply(id){ return isVerifiedStudent(id); }
function canStudentSave(id){ return isVerifiedStudent(id); }
function canCompanyPublish(id){ return isVerifiedCompany(id); }
function canApplyToJobs(){
  if(state.currentUser?.role !== "student") return false;
  return isVerifiedStudent(state.currentUser.id);
}

function canPublishJobs(){
  if(state.currentUser?.role !== "company") return false;
  return isVerifiedCompany(state.currentUser.id);
}

function logActivity(action,targetType,targetId,details=""){
  const actor = state.currentUser;
  ACTIVITY_LOG.unshift({
    id:"log"+Date.now(),
    actorId:actor?.id || "system",
    actorRole:actor?.role || "system",
    action,
    targetType,
    targetId,
    date:"Jul 12, 2026",
    details
  });
}

function pushNotification(userId,title,message){
  NOTIFICATIONS.unshift({
    id:"nt"+Date.now(),
    userId,
    title,
    message,
    date:"Jul 12, 2026",
    read:false
  });
}

function pendingNotice(role){
  const label = role === "student" ? "student" : "employer";
  return `
    <div class="card card-pad" style="margin-bottom:16px; border-left:4px solid var(--warning);">
      <div style="display:flex; align-items:flex-start; gap:12px;">
        <div style="font-size:22px;">⏳</div>
        <div>
          <h4 style="font-size:15px; margin-bottom:6px;">Verification pending</h4>
          <p style="font-size:13.5px; color:var(--text-soft); line-height:1.6;">
            Your ${label} account is awaiting verification. You can browse the platform while our administrator reviews your documents.
          </p>
        </div>
      </div>
    </div>
  `;
}

function isPendingStudent(){
  const s = studentById(state.currentUser?.id);
  return s && normalizeStatus(s.verificationStatus) !== "Verified";
}

function isPendingCompany(){
  const c = companyById(state.currentUser?.id);
  return c && normalizeStatus(c.verified) !== "Verified";
}

/* ============================================================
   SHARED PIECES: NAVBAR
   ============================================================ */
function navbar(){
  const u = state.currentUser;
  let actions = "";
  if(!u){
    actions = `
      <button class="btn btn-ghost btn-sm" onclick="openAuth('login')">Log In</button>
      <button class="btn btn-primary btn-sm" onclick="openAuth('register')">Register</button>`;
  } else {
    const name = u.role==="student" ? studentById(u.id).name : companyById(u.id).name;
    const color = u.role==="student" ? studentById(u.id).avatarColor : "blue";
    actions = `
      <button class="btn btn-ghost btn-sm" onclick="logout()">Log Out</button>
      <a onclick="go('${u.role}-dashboard')" style="display:flex;align-items:center;gap:8px;">
        ${avatar(name,color,32,12)}
      </a>`;
  }
  return `
  <div class="navbar">
    <div class="navbar-inner">
      <a class="logo" onclick="go('landing')"><span class="logo-mark">H</span>Handshake</a>
      <div class="nav-links">
        <a onclick="go('browse-public')">Browse Jobs</a>
        <a onclick="go('landing'); setTimeout(()=>document.getElementById('how-it-works')?.scrollIntoView({behavior:'smooth'}),50)">How It Works</a>
        <a onclick="go('landing'); setTimeout(()=>document.getElementById('about-sec')?.scrollIntoView({behavior:'smooth'}),50)">About</a>
      </div>
      <div class="nav-actions">
        ${actions}
      </div>
    </div>
  </div>`;
}

/* ============================================================
   LANDING PAGE
   ============================================================ */
function landingPage(){
  return `
  ${navbar()}
  <section class="hero">
    <div class="hero-inner">
      <span class="eyebrow"><span class="dot"></span> 10 students · 8 employers · 15 live openings</span>
      <h1>Launch Your Career Through <span>Real Internship Experience</span></h1>
      <p>Find trustworthy internships and entry-level jobs from verified employers — built for students and fresh graduates just getting started.</p>
      <div class="hero-actions">
        <button class="btn btn-primary btn-lg" onclick="go('browse-public')">Find Internships</button>
        <button class="btn btn-secondary btn-lg" onclick="openAuth('register','company')">Hire Student Talent</button>
      </div>
      <div class="role-select">
        <div class="role-card" onclick="openAuth('register','student')">
          <div class="ic"><i data-lucide="graduation-cap"></i></div>
          <h4>Join as a Student</h4>
          <p>Verify your student status, upload a resume, and apply to beginner-friendly roles.</p>
        </div>
        <div class="role-card" onclick="openAuth('register','company')">
          <div class="ic"><i data-lucide="building-2"></i></div>
          <h4>Join as an Employer</h4>
          <p>Get verified, then post internships and entry-level roles to reach student talent.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="about-sec" style="padding-top:0;">
    <div class="section-head">
      <span class="section-tag">Why Choose Us</span>
      <h2>Trust, built into the platform</h2>
      <p>Every part of Handshake is designed to help students avoid fake, unclear, or non-beginner-friendly job posts.</p>
    </div>
    <div class="grid-4">
      <div class="feature-card"><div class="ic"><i data-lucide="badge-check"></i></div><h4>Verified Employers</h4><p>Companies go through verification before they can post any job.</p></div>
      <div class="feature-card"><div class="ic"><i data-lucide="user-check"></i></div><h4>Verified Students</h4><p>Students verify with a university email so employers know who they're hiring.</p></div>
      <div class="feature-card"><div class="ic"><i data-lucide="star"></i></div><h4>Transparent Reviews</h4><p>Both sides rate each other after every completed internship.</p></div>
      <div class="feature-card"><div class="ic"><i data-lucide="flag"></i></div><h4>Report & Moderation</h4><p>Students can report suspicious job posts for review.</p></div>
    </div>
  </section>

  <section class="section" style="background:#fff; border-top:1px solid var(--border); border-bottom:1px solid var(--border);" id="how-it-works">
    <div class="section-head">
      <span class="section-tag">How It Works</span>
      <h2>A simple path on both sides</h2>
    </div>
    <div class="grid-2">
      <div>
        <h4 style="margin-bottom:14px; font-size:15px; color:var(--blue);">FOR STUDENTS</h4>
        <div class="steps">
          ${["Create your profile","Verify your student status","Upload your resume","Browse jobs","Apply","Get hired","Receive reviews"].map((s,i)=>`
          <div class="step-row"><div class="step-num">${i+1}</div><div><h4>${s}</h4></div></div>`).join("")}
        </div>
      </div>
      <div>
        <h4 style="margin-bottom:14px; font-size:15px; color:var(--blue);">FOR EMPLOYERS</h4>
        <div class="steps">
          ${["Create company profile","Submit for verification","Post a job (once verified)","Review applicants","Hire a student","Leave a review"].map((s,i)=>`
          <div class="step-row"><div class="step-num">${i+1}</div><div><h4>${s}</h4></div></div>`).join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-head">
      <span class="section-tag">Categories</span>
      <h2>Find work in your field</h2>
    </div>
    <div class="grid-4">
      ${CATEGORIES.map(c=>`<div class="cat-pill" onclick="go('browse-public',{category:'${c}'})"><span class="emoji">${catEmoji(c)}</span>${c}</div>`).join("")}
    </div>
  </section>

  <section class="section" style="background:#fff; border-top:1px solid var(--border); border-bottom:1px solid var(--border);">
    <div class="section-head">
      <span class="section-tag">Featured Jobs</span>
      <h2>Live opportunities right now</h2>
    </div>
    <div class="grid-3">
      ${JOBS.filter(p=>p.featured).map(p=>jobCardPublic(p)).join("")}
    </div>
    <div style="text-align:center; margin-top:30px;"><button class="btn btn-secondary" onclick="go('browse-public')">View all jobs →</button></div>
  </section>

  <section class="section">
    <div class="section-head">
      <span class="section-tag">Testimonials</span>
      <h2>What our community says</h2>
    </div>
    <div class="grid-3">
      <div class="testi-card"><div class="stars">★★★★★</div><p>"I landed my first internship through Handshake and now have real experience on my resume."</p><div class="testi-person">${avatar("Maya Chen","blue",36,12)}<div><strong style="font-size:13.5px;">Maya Chen</strong><div style="font-size:12px;color:var(--text-mute);">Computer Science, State University</div></div></div></div>
      <div class="testi-card"><div class="stars">★★★★★</div><p>"The verification system gave us confidence to find talented students without the usual job-board noise."</p><div class="testi-person">${avatar("Brightleaf Studio","green",36,12)}<div><strong style="font-size:13.5px;">Brightleaf Studio</strong><div style="font-size:12px;color:var(--text-mute);">Design Agency</div></div></div></div>
      <div class="testi-card"><div class="stars">★★★★★</div><p>"Messaging made it easy to ask questions about the role before I even applied."</p><div class="testi-person">${avatar("Priya Nair","blue",36,12)}<div><strong style="font-size:13.5px;">Priya Nair</strong><div style="font-size:12px;color:var(--text-mute);">Marketing, State University</div></div></div></div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-grid">
      <div>
        <a class="logo" onclick="go('landing')"><span class="logo-mark">H</span>Handshake</a>
        <p style="font-size:13.5px; color:var(--text-mute); margin-top:12px; max-width:260px;">The trusted platform connecting students with verified internships and entry-level jobs.</p>
      </div>
      <div><h5>Platform</h5><a onclick="go('browse-public')">Browse Jobs</a><a onclick="openAuth('register','student')">Join as Student</a><a onclick="openAuth('register','company')">Join as Employer</a></div>
      <div><h5>Company</h5><a>About</a><a>Careers</a><a>Contact</a></div>
      <div><h5>Legal</h5><a>Privacy Policy</a><a>Terms of Service</a></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Handshake. All rights reserved.</span><span>Made for students, by students.</span></div>
  </footer>
  `;
}

function catEmoji(c){
  return {"Programming":"💻","UI/UX Design":"🎨","Graphic Design":"🖌️","Marketing":"📣","Writing":"✍️","Photography":"📷","Video Editing":"🎬"}[c]||"📁";
}
function jobCardPublic(p){
  const co = companyById(p.companyId);
  return `
  <div class="card card-hover card-pad" onclick="go('project-public',{id:'${p.id}'})">
    <div class="proj-top"><h4>${p.title}</h4>${p.beginnerFriendly ? `<span class="badge badge-success">Beginner-Friendly</span>` : ""}</div>
    <div class="company-row" style="margin:8px 0;">${avatar(co.name,"blue",24,10)}<span style="font-size:12.5px; color:var(--text-soft); font-weight:600;">${co.name}</span>${verifBadge(co.verified)}</div>
    <div class="proj-tags">${p.skills.map(s=>`<span class="skill-tag">${s}</span>`).join("")}</div>
    <div class="proj-bottom"><span><strong style="color:var(--text);">${p.jobType}</strong> · ${p.workMode}</span><span>Due ${p.deadline}</span></div>
  </div>`;
}

/* ============================================================
   PUBLIC BROWSE (no login required) + PROJECT DETAIL (public)
   ============================================================ */
function browsePublicPage(){
  const cat = state.params.category || "All";
  const isLoggedIn = !!state.currentUser;
  const allMatching = JOBS.filter(p=> cat==="All" || p.category===cat);
  const list = isLoggedIn ? allMatching : allMatching.filter(p=>p.featured);
  const lockedCount = allMatching.length - list.length;
  return `
  ${navbar()}
  <div class="container" style="padding:32px 24px 70px;">
    <div class="page-head"><div><h1>Browse Jobs</h1><p>${isLoggedIn ? `${list.length} open jobs across ${CATEGORIES.length} categories` : `${list.length} featured jobs — register to see all ${allMatching.length}`}</p></div></div>
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:24px;">
      <span class="filter-chip ${cat==='All'?'active':''}" onclick="go('browse-public',{category:'All'})">All</span>
      ${CATEGORIES.map(c=>`<span class="filter-chip ${cat===c?'active':''}" onclick="go('browse-public',{category:'${c}'})">${c}</span>`).join("")}
    </div>
    <div class="grid-3">${list.map(p=>jobCardPublic(p)).join("")}</div>
    ${!isLoggedIn && lockedCount>0 ? `
    <div class="card card-pad" style="margin-top:24px; text-align:center; background:var(--blue-50); border:none;">
      <h3 style="margin-bottom:8px;">🔒 ${lockedCount} more job${lockedCount===1?"":"s"} for registered students</h3>
      <p style="color:var(--text-soft); margin-bottom:16px; font-size:14px;">Create a free student account to unlock every open job, not just featured ones.</p>
      <button class="btn btn-primary" onclick="openAuth('register','student')">Create Student Account</button>
    </div>` : `
    <div class="card card-pad" style="margin-top:36px; text-align:center; background:var(--blue-50); border:none;">
      <h3 style="margin-bottom:8px;">Ready to apply?</h3>
      <p style="color:var(--text-soft); margin-bottom:16px; font-size:14px;">Create a free student account to apply for projects and message companies.</p>
      <button class="btn btn-primary" onclick="openAuth('register','student')">Create Student Account</button>
    </div>`}
  </div>
  `;
}
function projectPublicPage(){
  const p = jobById(state.params.id); const co = companyById(p.companyId);
  return `
  ${navbar()}
  <div class="container" style="padding:32px 24px 70px; max-width:920px;">
    <a onclick="go('browse-public')" style="font-size:13.5px; color:var(--text-mute); display:inline-block; margin-bottom:16px;">← Back to jobs</a>
    <div class="three-col">
      <div>
        <div class="card card-pad">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px;">
            <span class="skill-tag" style="margin-bottom:10px; display:inline-block;">${p.category}</span>
            ${p.beginnerFriendly ? `<span class="badge badge-success">Beginner-Friendly</span>` : ""}
          </div>
          <h1 style="font-size:24px; margin-bottom:14px;">${p.title}</h1>
          <div class="proj-tags">${p.skills.map(s=>`<span class="skill-tag">${s}</span>`).join("")}</div>
          <p style="margin-top:16px; color:var(--text-soft); line-height:1.7; font-size:14.5px;">${p.desc}</p>
          <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:14px; margin-top:24px;">
            <div class="stat-card"><div class="label">Job Type</div><div class="value" style="font-size:19px;">${p.jobType}</div></div>
            <div class="stat-card"><div class="label">Work Mode</div><div class="value" style="font-size:19px;">${p.workMode}</div></div>
            <div class="stat-card"><div class="label">Deadline</div><div class="value" style="font-size:19px;">${p.deadline}</div></div>
            <div class="stat-card"><div class="label">Education Level</div><div class="value" style="font-size:16px;">${p.educationLevel}</div></div>
            <div class="stat-card"><div class="label">Language</div><div class="value" style="font-size:16px;">${p.languageRequirement}</div></div>
            <div class="stat-card"><div class="label">Visa / Work Eligibility</div><div class="value" style="font-size:16px;">${p.visaEligibility}</div></div>
          </div>
        </div>
      </div>
      <div>
        <div class="card card-pad" style="margin-bottom:16px;">
          <div class="company-row" style="margin-bottom:10px;">${avatar(co.name,"blue",44,15)}<div><strong style="font-size:14.5px;">${co.name}</strong><div class="meta">${co.industry}</div></div></div>
          ${verifBadge(co.verified, "company")}
          <div style="margin:14px 0; font-size:13px; color:var(--text-soft);">${co.desc}</div>
          <div style="display:flex; justify-content:space-between; font-size:12.5px; color:var(--text-mute); margin-bottom:14px;"><span>⭐ ${co.rating||"—"} (${co.reviews})</span><span>${co.projectsCompleted} hires made</span></div>
          <button class="btn btn-secondary btn-block btn-sm" onclick="go('company-public',{id:'${co.id}'})">View Employer Profile</button>
        </div>
        ${state.currentUser && state.currentUser.role==="student" && !isVerifiedStudent(state.currentUser.id)
  ? `<button class="btn btn-primary btn-block btn-lg" disabled>Complete verification before applying</button>`
  : `<button class="btn btn-primary btn-block btn-lg" onclick="openAuth('register','student')">Apply for this Job</button>`
}
        <a onclick="toast('Create a student account to report a job')" style="display:block; text-align:center; font-size:12.5px; color:var(--text-mute); margin-top:12px; cursor:pointer;"><i data-lucide="flag" style="width:13px;height:13px; vertical-align:-2px;"></i> Report this job</a>
      </div>
    </div>
  </div>`;
}
function companyPublicPage(){
  const co = companyById(state.params.id);
  const projs = JOBS.filter(p=>p.companyId===co.id);
  return `
  ${navbar()}
  <div class="container" style="padding:32px 24px 70px; max-width:920px;">
    <a onclick="go('browse-public')" style="font-size:13.5px; color:var(--text-mute); display:inline-block; margin-bottom:16px;">← Back to projects</a>
    <div class="card card-pad">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:14px;">
        <div class="company-row">${avatar(co.name,"blue",56,18)}<div><h1 style="font-size:21px;">${co.name}</h1><div class="meta">${co.industry} · ${co.location} · ${co.size}</div></div></div>
        ${verifBadge(co.verified, "company")}
      </div>
      <p style="margin:18px 0; color:var(--text-soft); font-size:14.5px; line-height:1.7;">${co.desc}</p>
      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:8px;">
        <div class="stat-card"><div class="label">Rating</div><div class="value" style="font-size:18px;">${co.rating?"⭐ "+co.rating:"—"}</div></div>
        <div class="stat-card"><div class="label">Reviews</div><div class="value" style="font-size:18px;">${co.reviews}</div></div>
        <div class="stat-card"><div class="label">Hires Made</div><div class="value" style="font-size:18px;">${co.projectsCompleted}</div></div>
        <div class="stat-card"><div class="label">Response Rate</div><div class="value" style="font-size:18px;">${co.responseRate}</div></div>
      </div>
    </div>
    <h3 style="margin:26px 0 14px;">Open Jobs (${projs.length})</h3>
    <div class="grid-3">${projs.map(p=>jobCardPublic(p)).join("")}</div>
  </div>`;
}

/* ============================================================
   AUTH MODAL
   ============================================================ */
function openAuth(mode,role){
  state.authMode=mode; if(role) state.authRole=role;
  render(); renderAuthModal();
}
function closeAuth(){ const m=document.getElementById("auth-modal-overlay"); if(m) m.remove(); }

function renderAuthModal(){
  const m = state.authMode, r = state.authRole;

  const loginRoles = [
    {key:"student", label:"Student", icon:"🎓"},
    {key:"company", label:"Employer", icon:"🏢"},
    {key:"admin", label:"Admin", icon:"🛡️"},
  ];

  const registerRoles = [
    {key:"student", label:"Student", icon:"🎓"},
    {key:"company", label:"Employer", icon:"🏢"},
  ];

  const roleChoices = m === "login" ? loginRoles : registerRoles;

  const overlay = document.createElement("div");
  overlay.className="modal-overlay";
  overlay.id="auth-modal-overlay";
  overlay.onclick=(e)=>{ if(e.target===overlay) closeAuth(); };

  overlay.innerHTML = `
  <div class="modal" style="width:420px;">
    <div class="modal-head">
      <h3>${m==='login'?'Welcome back':'Create your account'}</h3>
      <span class="close-x" onclick="closeAuth()"><i data-lucide="x"></i></span>
    </div>

    <div class="toggle-row">
      <button class="toggle-btn ${m==='login'?'active':''}" onclick="state.authMode='login'; renderAuthModalInPlace();">Log In</button>
      <button class="toggle-btn ${m==='register'?'active':''}" onclick="state.authMode='register'; renderAuthModalInPlace();">Register</button>
    </div>

    <div class="toggle-row" style="background:transparent; padding:0; margin-bottom:18px; gap:10px; flex-wrap:wrap;">
      ${roleChoices.map(choice=>`
        <button class="toggle-btn ${r===choice.key?'active':''}" style="border:1px solid var(--border);" onclick="state.authRole='${choice.key}'; renderAuthModalInPlace();">${choice.icon} ${choice.label}</button>
      `).join("")}
    </div>

    ${m==='register' && r==='student' ? `
      <div class="field"><label>Full Name</label><input id="auth-name" placeholder="Jane Smith"></div>
      <div class="field"><label>University Email</label><input id="auth-email" placeholder="jane@university.edu"></div>
      <div class="field"><label>Password</label><input type="password" placeholder="••••••••"></div>
    ` : m==='register' && r==='company' ? `
      <div class="field"><label>Company Name</label><input id="auth-name" placeholder="Brightleaf Studio"></div>
      <div class="field"><label>Business Email</label><input id="auth-email" placeholder="hello@company.com"></div>
      <div class="field"><label>Website</label><input placeholder="company.com"></div>
      <div class="field"><label>Password</label><input type="password" placeholder="••••••••"></div>
    ` : m==='login' && r==='admin' ? `
      <div class="field"><label>Admin Email</label><input id="auth-email" placeholder="admin@handshake.com"></div>
      <div class="field"><label>Password</label><input type="password" placeholder="••••••••"></div>
    ` : `
      <div class="field"><label>${r==='student'?'University Email':'Business Email'}</label><input id="auth-email" placeholder="${r==='student'?'jane@university.edu':'hello@company.com'}"></div>
      <div class="field"><label>Password</label><input type="password" placeholder="••••••••"></div>
    `}

    <button class="btn btn-primary btn-block" onclick="submitAuth()">${m==='login'?'Log In':'Create Account'}</button>

    <div class="demo-box">Demo mode — pick any of our sample profiles below to explore instantly.</div>

    <div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;">
      ${m==='login' && r==='admin'
        ? `<button class="btn btn-secondary btn-sm" onclick="demoLogin('admin','admin1')">Admin</button>`
        : r==='student'
          ? STUDENTS.slice(0,3).map(s=>`<button class="btn btn-secondary btn-sm" onclick="demoLogin('student','${s.id}')">${s.name.split(" ")[0]}</button>`).join("")
          : COMPANIES.slice(0,3).map(c=>`<button class="btn btn-secondary btn-sm" onclick="demoLogin('company','${c.id}')">${c.name.split(" ")[0]}</button>`).join("")
      }
    </div>
  </div>`;

  document.body.appendChild(overlay);
}

function renderAuthModalInPlace(){
  closeAuth();
  renderAuthModal();
}

function submitAuth(){
  if(state.authMode === "login"){
    if(state.authRole === "admin"){
      demoLogin("admin", "admin1");
      return;
    }
    const id = state.authRole==="student" ? STUDENTS[0].id : COMPANIES[0].id;
    demoLogin(state.authRole, id);
    return;
  }

  const newRole = state.authRole;
  const newId = newRole === "student" ? `s${Date.now()}` : `c${Date.now()}`;

  if(newRole === "student"){
    STUDENTS.unshift({
      id:newId,
      name: document.getElementById("auth-name")?.value?.trim() || "New Student",
      uni:"Pending Verification University",
      major:"Undeclared",
      year:"1st Year",
      bio:"New student account pending verification.",
      skills:[],
      rating:0,
      reviews:0,
      completed:0,
      avatarColor:"blue",
      verificationStatus:"Pending Verification",
      resumeUploaded:false,
      portfolio:[],
      certs:[]
    });
  } else {
    COMPANIES.unshift({
      id:newId,
      name: document.getElementById("auth-name")?.value?.trim() || "New Employer",
      industry:"Pending Verification",
      location:"Pending Verification",
      size:"Pending Verification",
      verified:"Pending Verification",
      rating:0,
      reviews:0,
      projectsCompleted:0,
      responseRate:"—",
      website:document.getElementById("auth-email")?.value?.trim() || "pending@example.com",
      desc:"New employer account pending verification."
    });
  }

  toast("Account created. Verification is pending.");
  demoLogin(newRole, newId);
}

function demoLogin(role,id){
  state.currentUser = {role, id};
  closeAuth();
  const name = role==="student" ? studentById(id)?.name : role==="company" ? companyById(id)?.name : "Admin";
  toast(`Welcome, ${name}!`);
  go(role+"-dashboard");
}

function logout(){
  state.currentUser=null;
  toast("Logged out");
  go("landing");
}

/* ============================================================
   STUDENT APP SHELL
   ============================================================ */
const STUDENT_NAV = [
  {key:"student-dashboard", label:"Dashboard", ic:"layout-dashboard"},
  {key:"student-browse", label:"Browse Jobs", ic:"search"},
  {key:"student-saved", label:"Saved Jobs", ic:"bookmark"},
  {key:"student-applications", label:"Applications", ic:"clipboard-list"},
  {key:"student-portfolio", label:"Portfolio & Resume", ic:"file-text"},
  {key:"student-verification", label:"Verification", ic:"shield-check"},
  {key:"student-messages", label:"Messages", ic:"message-circle"},
  {key:"student-reviews", label:"Reviews", ic:"star"},
  {key:"student-settings", label:"Settings", ic:"settings"},
];
const COMPANY_NAV = [
  {key:"company-dashboard", label:"Dashboard", ic:"layout-dashboard"},
  {key:"company-profile", label:"Employer Profile", ic:"building-2"},
  {key:"company-projects", label:"Job Posts", ic:"folder-kanban"},
  {key:"company-applicants", label:"Applicants", ic:"users"},
  {key:"company-messages", label:"Messages", ic:"message-circle"},
  {key:"company-reviews", label:"Reviews", ic:"star"},
  {key:"company-settings", label:"Settings", ic:"settings"},
];

const ADMIN_NAV = [
  {key:"admin-dashboard", label:"Dashboard", ic:"layout-dashboard"},
  {key:"admin-verifications", label:"Verification Requests", ic:"shield-check"},
  {key:"admin-users", label:"Users", ic:"users"},
  {key:"admin-jobs", label:"Jobs", ic:"briefcase"},
  {key:"admin-reports", label:"Reports", ic:"flag"},
  {key:"admin-activity", label:"Activity Log", ic:"history"},
  {key:"admin-settings", label:"Settings", ic:"settings"},
];
function needsVerificationAttention(){
  const u = state.currentUser;
  if(!u) return false;
  if(u.role==="student"){ const s=studentById(u.id); return s && s.verificationStatus!=="Verified"; }
  const co = companyById(u.id); return co && co.verified!=="Verified";
}

function isAdmin(){
  return state.currentUser?.role === "admin";
}

function adminCountUsers(role, status){
  if(role === "student"){
    if(status === "Verified") return STUDENTS.filter(s => normalizeStatus(s.verificationStatus) === "Verified").length;
    if(status === "Pending") return STUDENTS.filter(s => normalizeStatus(s.verificationStatus) !== "Verified").length;
    return STUDENTS.length;
  }
  if(role === "company"){
    if(status === "Verified") return COMPANIES.filter(c => normalizeStatus(c.verified) === "Verified").length;
    if(status === "Pending") return COMPANIES.filter(c => normalizeStatus(c.verified) !== "Verified").length;
    return COMPANIES.length;
  }
  return 0;
}

function barChart(items, maxValue){
  return `
    <div style="display:flex; align-items:flex-end; gap:10px; min-height:180px; padding-top:12px;">
      ${items.map(item => {
        const h = maxValue ? Math.max(18, Math.round((item.value / maxValue) * 100)) : 18;
        return `
          <div style="flex:1; min-width:0; text-align:center;">
            <div style="height:140px; display:flex; align-items:flex-end;">
              <div style="width:100%; height:${h}%; border-radius:12px 12px 4px 4px; background:var(--grad-primary); box-shadow:0 8px 18px rgba(37,99,235,.18);"></div>
            </div>
            <div style="font-size:12px; color:var(--text-mute); margin-top:8px;">${item.label}</div>
            <div style="font-size:12px; font-weight:700; margin-top:2px;">${item.value}</div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function pieChart(items){
  const total = items.reduce((sum, item) => sum + item.value, 0) || 1;
  let start = 0;

  const segments = items.map(item => {
    const pct = (item.value / total) * 100;
    const end = start + pct;
    const seg = `${item.color} ${start}% ${end}%`;
    start = end;
    return seg;
  }).join(", ");

  return `
    <div style="display:flex; gap:18px; align-items:center; flex-wrap:wrap;">
      <div style="
        width:170px;
        height:170px;
        border-radius:50%;
        background:conic-gradient(${segments});
        box-shadow:0 10px 30px rgba(15,23,42,.12);
      "></div>
      <div style="display:flex; flex-direction:column; gap:10px; min-width:220px;">
        ${items.map(item => `
          <div style="display:flex; align-items:center; gap:10px; font-size:13px;">
            <span style="width:12px; height:12px; border-radius:50%; background:${item.color}; display:inline-block;"></span>
            <span style="color:var(--text-soft);">${item.label}</span>
            <strong style="margin-left:auto;">${item.value}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function lineChip(label, value){
  return `<div class="stat-card"><div class="label">${label}</div><div class="value">${value}</div></div>`;
}
function appShell(navItems, contentHtml){
  const u = state.currentUser;
  const name = u.role==="student" ? studentById(u.id).name : companyById(u.id).name;
  const color = u.role==="student" ? studentById(u.id).avatarColor : "blue";
  const roleLabel = u.role==="student" ? "Student Account" : "Employer Account";
  const attentionKeys = ["student-verification","company-profile"];
  return `
  <div class="app-shell">
    <div class="sidebar">
      <a class="sidebar-header" onclick="go('landing')"><span class="logo-mark">H</span>Handshake</a>
      <div class="sidebar-nav">
        ${navItems.map(n=>`<a class="side-link ${state.route===n.key?'active':''}" onclick="go('${n.key}')"><span class="ic"><i data-lucide="${n.ic}"></i></span>${n.label}${attentionKeys.includes(n.key) && needsVerificationAttention() ? `<span class="nav-dot" title="Action needed"></span>` : ""}</a>`).join("")}
      </div>
      <div class="sidebar-footer">
        <div class="sidebar-persona">${avatar(name,color,34,12)}<div style="min-width:0;"><div class="name">${name}</div><div class="role">${roleLabel}</div></div></div>
        <a class="sidebar-logout" onclick="logout()"><span class="ic"><i data-lucide="log-out"></i></span>Log Out</a>
      </div>
    </div>
    <div class="main-area">${contentHtml}</div>
  </div>`;
}

function adminShell(contentHtml){
  const name = "Admin";
  return `
  <div class="app-shell">
    <div class="sidebar">
      <a class="sidebar-header" onclick="go('landing')"><span class="logo-mark">H</span>Handshake</a>
      <div class="sidebar-nav">
        ${ADMIN_NAV.map(n=>`
          <a class="side-link ${state.route===n.key?'active':''}" onclick="go('${n.key}')">
            <span class="ic"><i data-lucide="${n.ic}"></i></span>${n.label}
          </a>
        `).join("")}
      </div>
      <div class="sidebar-footer">
        <div class="sidebar-persona">
          <div class="avatar avatar-blue" style="width:34px;height:34px;font-size:12px;">AD</div>
          <div style="min-width:0;">
            <div class="name">Admin</div>
            <div class="role">System Owner</div>
          </div>
        </div>
        <a class="sidebar-logout" onclick="logout()"><span class="ic"><i data-lucide="log-out"></i></span>Log Out</a>
      </div>
    </div>
    <div class="main-area">${contentHtml}</div>
  </div>`;
}

/* ---------- STUDENT DASHBOARD ---------- */
function studentDashboard(){
  const s = studentById(state.currentUser.id);
  const myApps = APPLICATIONS.filter(a=>a.studentId===s.id);
  const savedCount = SAVED_JOBS.filter(sv=>sv.studentId===s.id).length;
  const recommended = JOBS.filter(p=>p.skills.some(sk=>s.skills.includes(sk))).slice(0,3);
  const latest = JOBS.slice(0,4);
  const content = `
    <div class="page-head"><div><h1>Welcome back, ${s.name.split(" ")[0]} 👋</h1><p>Here's what's happening with your internship search.</p></div>
      <button class="btn btn-primary" onclick="go('student-browse')">Browse Jobs</button>
    </div>
    ${state.currentUser?.role==="student" && isPendingStudent() ? pendingNotice("student") : ""}
    <div class="grid-4" style="margin-bottom:26px;">
      <div class="stat-card"><div class="label">Active Applications</div><div class="value">${myApps.filter(a=>['Applied','Under Review','Interview','Accepted'].includes(a.status)).length}</div></div>
      <div class="stat-card"><div class="label">Completed Internships</div><div class="value">${s.completed}</div></div>
      <div class="stat-card"><div class="label">Saved Jobs</div><div class="value">${savedCount}</div></div>
      <div class="stat-card"><div class="label">Average Rating</div><div class="value">${s.rating} ⭐</div></div>
    </div>
    <div class="three-col">
      <div>
        <h3 style="margin-bottom:12px;">Recommended For You</h3>
        ${recommended.length? recommended.map(p=>jobCardPublic(p)).join("") : emptyState("🔍","No matches yet","Add more skills to your profile to get recommendations.")}
        <h3 style="margin:26px 0 12px;">Latest Jobs</h3>
        ${latest.map(p=>jobCardPublic(p)).join("")}
      </div>
      <div>
        <div class="card card-pad" style="margin-bottom:16px;">
          <h4 style="margin-bottom:10px; font-size:14.5px;">Verification Status</h4>
          ${verifBadge(s.verificationStatus==="Verified"?"Verified":s.verificationStatus==="Pending"?"Pending Verification":"Not Verified")}
          <p style="font-size:12.5px; color:var(--text-mute); margin-top:10px;">${s.verificationStatus==="Verified" ? "Your student status is verified." : s.verificationStatus==="Pending" ? "Your university email verification is pending." : "Verify your university email to build trust with employers."}</p>
          ${s.verificationStatus!=="Verified" ? `<button class="btn btn-secondary btn-sm" style="margin-top:10px;" onclick="go('student-verification')">Verify Now</button>` : ""}
        </div>
        <div class="card card-pad" style="margin-bottom:16px;">
          <h4 style="margin-bottom:10px; font-size:14.5px;">Profile Completion</h4>
          <div class="progress-track"><div class="progress-fill" style="width:85%;"></div></div>
          <p style="font-size:12.5px; color:var(--text-mute); margin-top:8px;">85% complete — add a certificate to reach 100%.</p>
        </div>
        <div class="card card-pad" style="margin-bottom:16px;">
          <h4 style="margin-bottom:10px; font-size:14.5px;">Resume Status</h4>
          ${s.resumeUploaded ? `<span class="badge badge-success"><i data-lucide="check"></i> Resume Uploaded</span>` : `<span class="badge badge-danger">No Resume Uploaded</span>`}
          <p style="font-size:12.5px; color:var(--text-mute); margin-top:8px;">${s.resumeUploaded ? "You're ready to apply for jobs." : "Upload a resume before you can apply."}</p>
          ${!s.resumeUploaded ? `<button class="btn btn-secondary btn-sm" style="margin-top:6px;" onclick="go('student-portfolio')">Upload Resume</button>` : ""}
        </div>
        <div class="card card-pad">
          <h4 style="margin-bottom:10px; font-size:14.5px;">Popular Categories</h4>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">${CATEGORIES.slice(0,5).map(c=>`<span class="skill-tag" style="cursor:pointer;" onclick="go('student-browse',{category:'${c}'})">${c}</span>`).join("")}</div>
        </div>
      </div>

    </div>
  `;
  return appShell(STUDENT_NAV, content);
}
function emptyState(ic,title,sub){ return `<div class="empty-state card"><div class="ic">${ic}</div><h4>${title}</h4><p>${sub}</p></div>`; }

/* ---------- STUDENT BROWSE JOBS (LinkedIn-style split) ---------- */
function studentBrowse(){
  const q = (state.browseFilters.q||"").toLowerCase();
  const cat = state.params.category || state.browseFilters.category || "All";
  state.browseFilters.category = cat;
  let list = JOBS.filter(p=>{
    const matchQ = !q || p.title.toLowerCase().includes(q) || p.skills.join(" ").toLowerCase().includes(q);
    const matchC = cat==="All" || p.category===cat;
    return matchQ && matchC;
  });
  const activeId = state.params.activeId || (list[0] && list[0].id);
  const activeP = jobById(activeId);
  const co = activeP ? companyById(activeP.companyId) : null;
  const me = studentById(state.currentUser.id);
  const alreadyApplied = activeP && APPLICATIONS.some(a=>a.studentId===me.id && a.jobId===activeP.id);
  const saved = activeP && isSaved(me.id, activeP.id);

  let applyBlock = "";
  if(activeP){
    if(alreadyApplied){
  applyBlock = `<span class="badge badge-success">Applied</span>`;
} else if(!canApplyToJobs()){
  applyBlock = `<button class="btn btn-primary" disabled>Complete verification before applying</button>`;
} else if(!me.resumeUploaded){
  applyBlock = `<button class="btn btn-primary" onclick="go('student-portfolio')">Upload Resume to Apply</button>`;
} else {
  applyBlock = `<button class="btn btn-primary" onclick="applyToProject('${activeP.id}')">Apply Now</button>`;
}
  }

  const content = `
    <div class="page-head"><div><h1>Browse Jobs</h1><p>${list.length} jobs match your filters</p></div></div>
    <div class="search-bar" style="margin-bottom:14px;">
      <span>🔍</span><input placeholder="Search by title or skill..." value="${state.browseFilters.q||""}" oninput="state.browseFilters.q=this.value; rerenderBrowse();">
    </div>
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:18px;">
      <span class="filter-chip ${cat==='All'?'active':''}" onclick="go('student-browse',{category:'All'})">All</span>
      ${CATEGORIES.map(c=>`<span class="filter-chip ${cat===c?'active':''}" onclick="go('student-browse',{category:'${c}'})">${c}</span>`).join("")}
    </div>
    <div class="three-col" style="grid-template-columns: 380px 1fr;">
      <div style="max-height:72vh; overflow-y:auto; padding-right:4px;">
        ${list.length? list.map(p=>`
          <div class="proj-card ${p.id===activeId?'active':''}" onclick="go('student-browse',{category:'${cat}',activeId:'${p.id}'})">
            <div class="proj-top"><h4>${p.title}</h4>${p.beginnerFriendly?`<span class="badge badge-success" style="flex:none;">Beginner</span>`:""}</div>
            <div class="proj-meta">${companyById(p.companyId).name} · ${p.workMode}</div>
            <div class="proj-tags">${p.skills.slice(0,3).map(s=>`<span class="skill-tag">${s}</span>`).join("")}</div>
            <div class="proj-bottom"><strong style="color:var(--text);">${p.jobType}</strong><span>Due ${p.deadline}</span></div>
          </div>`).join("") : emptyState("🔍","No jobs found","Try a different search or category.")}
      </div>
      <div>
        ${activeP ? `
        <div class="card card-pad">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:14px;">
            <div><span class="skill-tag" style="margin-bottom:8px; display:inline-block;">${activeP.category}</span>${activeP.beginnerFriendly?` <span class="badge badge-success">Beginner-Friendly</span>`:""}<h2 style="font-size:21px;">${activeP.title}</h2></div>
            <div style="display:flex; gap:8px; align-items:center;">
              <button class="btn btn-secondary" onclick="toggleSave('${activeP.id}')" title="${saved?'Remove from saved':'Save for later'}"><i data-lucide="${saved?'bookmark-check':'bookmark'}"></i></button>
              ${applyBlock}
            </div>
          </div>
          <div class="proj-tags" style="margin-top:12px;">${activeP.skills.map(s=>`<span class="skill-tag">${s}</span>`).join("")}</div>
          <p style="margin:16px 0; color:var(--text-soft); font-size:14.5px; line-height:1.7;">${activeP.desc}</p>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:12px;">
            <div class="stat-card"><div class="label">Job Type</div><div class="value" style="font-size:16px;">${activeP.jobType}</div></div>
            <div class="stat-card"><div class="label">Work Mode</div><div class="value" style="font-size:16px;">${activeP.workMode}</div></div>
            <div class="stat-card"><div class="label">Deadline</div><div class="value" style="font-size:16px;">${activeP.deadline}</div></div>
          </div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:20px;">
            <div class="stat-card"><div class="label">Education</div><div class="value" style="font-size:13.5px;">${activeP.educationLevel}</div></div>
            <div class="stat-card"><div class="label">Language</div><div class="value" style="font-size:13.5px;">${activeP.languageRequirement}</div></div>
            <div class="stat-card"><div class="label">Visa</div><div class="value" style="font-size:13.5px;">${activeP.visaEligibility}</div></div>
          </div>
          <div class="card card-pad" style="background:var(--bg); margin-bottom:12px;">
            <div class="company-row" style="margin-bottom:10px;">${avatar(co.name,"blue",44,15)}<div><strong style="font-size:14.5px;">${co.name}</strong><div class="meta">${co.industry}</div></div>${verifBadge(co.verified)}</div>
            <p style="font-size:13px; color:var(--text-soft); margin-bottom:12px;">${co.desc}</p>
            <button class="btn btn-secondary btn-sm" onclick="go('student-company-view',{id:'${co.id}'})">View Employer Profile</button>
          </div>
          <a onclick="openReportModal('${activeP.id}')" style="display:inline-flex; align-items:center; gap:6px; font-size:12.5px; color:var(--text-mute); cursor:pointer;"><i data-lucide="flag" style="width:13px;height:13px;"></i> Report this job</a>
        </div>` : emptyState("📁","Select a job","Choose a job from the list to see details.")}
      </div>
    </div>
  `;
  return appShell(STUDENT_NAV, content);
}
function rerenderBrowse(){ render(); /* preserves typed query via state */ const i=document.querySelector('.search-bar input'); if(i){ i.focus(); i.setSelectionRange(i.value.length,i.value.length);} }
function applyToProject(pid){
  const sid = state.currentUser.id;
  const me = studentById(sid);

  if(!canApplyToJobs()){
    toast("Complete verification before applying");
    return;
  }

  if(!me.resumeUploaded){
    toast("Upload a resume before applying");
    go("student-portfolio");
    return;
  }

  if(APPLICATIONS.some(a=>a.studentId===sid && a.jobId===pid)) return;

  APPLICATIONS.push({id:"a"+Date.now(), studentId:sid, jobId:pid, status:"Applied"});
  logActivity("Applied to job","application",pid,`Student ${me.name} applied to ${pid}`);
  toast("Application submitted!");
  render();
}

/* ---------- SAVED JOBS ---------- */
function isSaved(studentId, jobId){
  return SAVED_JOBS.some(sv=>sv.studentId===studentId && sv.jobId===jobId);
}
function toggleSave(jobId){
  const sid = state.currentUser.id;
  const existing = SAVED_JOBS.find(sv=>sv.studentId===sid && sv.jobId===jobId);
  if(existing){
    SAVED_JOBS = SAVED_JOBS.filter(sv=>sv!==existing);
    toast("Removed from saved jobs");
  } else {
    SAVED_JOBS.push({id:"sv"+Date.now(), studentId:sid, jobId});
    toast("Job saved!");
  }
  render();
}
function studentSavedJobs(){
  const sid = state.currentUser.id;
  const saved = SAVED_JOBS.filter(sv=>sv.studentId===sid);
  const cards = saved.map(sv=>{
    const p = jobById(sv.jobId);
    const co = companyById(p.companyId);
    return `<div class="card card-pad" style="margin-bottom:12px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; flex-wrap:wrap;">
        <div>
          <h4 style="font-size:15px; margin-bottom:6px;">${p.title}</h4>
          <div class="company-row" style="margin-bottom:8px;">${avatar(co.name,'blue',22,10)}<span style="font-size:12.5px; color:var(--text-soft); font-weight:600;">${co.name}</span>${verifBadge(co.verified)}</div>
          <div class="proj-tags">${p.skills.map(s=>`<span class="skill-tag">${s}</span>`).join("")}</div>
        </div>
        <div style="text-align:right; flex:none;">
          <div style="font-weight:700; margin-bottom:10px;">${p.jobType} · Due ${p.deadline}</div>
          <button class="btn btn-secondary btn-sm" onclick="go('student-browse',{activeId:'${p.id}'})">View</button>
          <button class="btn btn-danger btn-sm" onclick="toggleSave('${p.id}')">Remove</button>
        </div>
      </div>
    </div>`;
  }).join("");
  const content = `
    <div class="page-head"><div><h1>Saved Jobs</h1><p>${saved.length} job${saved.length===1?"":"s"} bookmarked for later.</p></div></div>
    ${saved.length ? cards : emptyState("🔖","No saved jobs yet","Bookmark jobs while browsing to review them later.")}
  `;
  return appShell(STUDENT_NAV, content);
}

/* ---------- REPORT JOB ---------- */
function openReportModal(jobId){
  const overlay = document.createElement("div");
  overlay.className="modal-overlay"; overlay.id="generic-modal-overlay";
  overlay.onclick=(e)=>{ if(e.target===overlay) overlay.remove(); };
  overlay.innerHTML = `
  <div class="modal">
    <div class="modal-head"><h3>Report this Job</h3><span class="close-x" onclick="document.getElementById('generic-modal-overlay').remove()"><i data-lucide="x"></i></span></div>
    <div class="field"><label>Reason</label>
      <select id="report-reason">
        <option>Fake or misleading job</option>
        <option>Not actually beginner-friendly</option>
        <option>Suspicious company</option>
        <option>Asks for payment or personal financial info</option>
        <option>Other</option>
      </select>
    </div>
    <div class="field"><label>Additional details (optional)</label><textarea id="report-details" rows="3" placeholder="Tell us more about the issue..."></textarea></div>
    <button class="btn btn-primary btn-block" onclick="submitReport('${jobId}')">Submit Report</button>
  </div>`;
  document.body.appendChild(overlay);
}
function submitReport(jobId){
  const reason = document.getElementById("report-reason").value;
  const details = document.getElementById("report-details").value;
  REPORTS.push({id:"rp"+Date.now(), jobId, studentId: state.currentUser.id, reason: details? `${reason} — ${details}` : reason, date:"Jul 6, 2026", status:"Open"});
  document.getElementById("generic-modal-overlay").remove();
  toast("Report submitted — thank you for helping keep the platform safe");
}

function studentCompanyView(){
  const co = companyById(state.params.id);
  const projs = JOBS.filter(p=>p.companyId===co.id);
  const content = `
    <a onclick="go('student-browse')" style="font-size:13.5px; color:var(--text-mute); display:inline-block; margin-bottom:14px;">← Back to browse</a>
    <div class="card card-pad">
      <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:14px;">
        <div class="company-row">${avatar(co.name,"blue",56,18)}<div><h1 style="font-size:21px;">${co.name}</h1><div class="meta">${co.industry} · ${co.location} · ${co.size}</div></div></div>
        ${verifBadge(co.verified, "company")}
      </div>
      <p style="margin:18px 0; color:var(--text-soft); font-size:14.5px;">${co.desc}</p>
      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:14px;">
        <div class="stat-card"><div class="label">Rating</div><div class="value" style="font-size:18px;">${co.rating?"⭐ "+co.rating:"—"}</div></div>
        <div class="stat-card"><div class="label">Reviews</div><div class="value" style="font-size:18px;">${co.reviews}</div></div>
        <div class="stat-card"><div class="label">Hires Made</div><div class="value" style="font-size:18px;">${co.projectsCompleted}</div></div>
        <div class="stat-card"><div class="label">Response Rate</div><div class="value" style="font-size:18px;">${co.responseRate}</div></div>
      </div>
    </div>
    <h3 style="margin:24px 0 12px;">Open Jobs</h3>
    <div class="grid-3">${projs.map(p=>`<div class="card card-hover card-pad" onclick="go('student-browse',{activeId:'${p.id}'})"><h4 style="font-size:14.5px; margin-bottom:8px;">${p.title}</h4><div class="proj-tags">${p.skills.map(s=>`<span class="skill-tag">${s}</span>`).join("")}</div><div class="proj-bottom" style="margin-top:10px;"><strong>${p.jobType}</strong><span>${p.workMode}</span></div></div>`).join("")}</div>
    ${reviewListBlock(REVIEWS.filter(r=>r.revieweeId===co.id))}
  `;
  return appShell(STUDENT_NAV, content);
}


/* ---------- STUDENT APPLICATIONS ---------- */
function studentApplications(){
  const sid = state.currentUser.id;
  const apps = APPLICATIONS.filter(a=>a.studentId===sid);
  const steps = ["Applied","Under Review","Interview","Accepted"];
  const content = `
    <div class="page-head"><div><h1>My Applications</h1><p>Track the status of every job you've applied to.</p></div></div>
    ${apps.length===0 ? emptyState("📋","No applications yet","Start applying to jobs to see them here.") :
      apps.map(a=>{
        const p = jobById(a.jobId); const co = companyById(p.companyId);
        const isRejected = a.status==="Rejected";
        const isClosed = a.status==="Closed";
        return `
        <div class="card card-pad" style="margin-bottom:14px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px;">
            <div><h4 style="font-size:15.5px;">${p.title}</h4><div class="meta" style="font-size:12.5px; color:var(--text-mute); margin-top:4px;">${co.name} · ${p.jobType}</div></div>
            ${statusPill(a.status)}
          </div>
          ${isRejected ? `<p style="font-size:13px; color:var(--danger); margin-top:14px;">This application was not selected this time.</p>` :
            isClosed ? `<p style="font-size:13px; color:var(--text-mute); margin-top:14px;">This position has closed.</p>` : `
          <div class="timeline">
            ${steps.map((st,i)=>{
              const stepIdx = steps.indexOf(a.status);
              const cls = i<stepIdx?"done":(i===stepIdx?"current":"");
              return `<div class="tl-step ${cls}"><div class="tl-dot">${i<stepIdx?'✓':i+1}</div><div class="tl-label">${st}</div></div>`;
            }).join("")}
          </div>`}
          ${a.status==="Accepted" && !REVIEWS.some(r=>r.jobId===p.id && r.reviewerId===sid) ? `<button class="btn btn-secondary btn-sm" onclick="openReviewModal('${p.id}','${co.id}','company-review')">Rate & Review ${co.name}</button>` : ""}
        </div>`;
      }).join("")
    }
  `;
  return appShell(STUDENT_NAV, content);
}

/* ---------- STUDENT PORTFOLIO ---------- */
/* ---------- SHARED PORTFOLIO RENDERER ----------
   Used by both the student's own editable "Portfolio & Resume" page
   and the employer's read-only view of a student, so the two never drift apart. */
function sortedPortfolio(s){
  return s.portfolio.map((item,i)=>({...item, _i:i})).sort((a,b)=>(b.featured?1:0)-(a.featured?1:0));
}
function portfolioCard(item, editable){
  const cover = item.image
    ? `<div class="port-cover" style="background-image:url('${item.image}');"></div>`
    : `<div class="port-cover port-cover-blank"><i data-lucide="image" style="width:22px;height:22px;"></i></div>`;
  return `
  <div class="card port-card ${item.featured?'featured':''}">
    ${item.featured ? `<span class="port-featured-tag">★ Featured</span>` : ""}
    ${cover}
    <div class="port-card-body">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
        <span class="skill-tag">${item.type}</span>
        ${editable ? `<span style="display:flex; gap:10px;">
          <span title="${item.featured?'Unpin':'Feature this'}" style="cursor:pointer; color:${item.featured?'var(--warning)':'var(--text-mute)'};" onclick="toggleFeatured(${item._i})"><i data-lucide="star" style="width:15px;height:15px;"></i></span>
          <span style="cursor:pointer; color:var(--text-mute);" onclick="removePortfolioItem(${item._i})">✕</span>
        </span>` : ""}
      </div>
      <h4 style="margin:12px 0 6px; font-size:15px;">${item.title}</h4>
      <p style="font-size:13px; color:var(--text-mute);">${item.desc}</p>
      ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:5px; font-size:12.5px; font-weight:600; color:var(--blue); margin-top:10px;">View project <i data-lucide="arrow-up-right" style="width:13px;height:13px;"></i></a>` : ""}
    </div>
  </div>`;
}
function portfolioProfileBlock(s, editable){
  const verified = s.verificationStatus==="Verified"?"Verified":s.verificationStatus==="Pending"?"Pending Verification":"Not Verified";
  const items = sortedPortfolio(s);
  return `
    <div class="card port-header">
      <div class="port-header-top">
        ${avatar(s.name,s.avatarColor,64,22)}
        <div style="min-width:0;">
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;"><h2 style="font-size:20px;">${s.name}</h2>${verifBadge(verified)}</div>
          <div class="meta" style="margin-top:3px;">${s.uni} · ${s.major} · ${s.year}</div>
        </div>
      </div>
      <p style="font-size:13.5px; color:var(--text-soft); margin:14px 0;">${s.bio}</p>
      <div class="proj-tags" style="margin-bottom:14px;">${s.skills.map(sk=>`<span class="skill-tag">${sk}</span>`).join("")}</div>
      <div style="display:flex; gap:18px; font-size:13px; color:var(--text-mute); flex-wrap:wrap;">
        <span>⭐ ${s.rating} (${s.reviews} reviews)</span>
        <span>${s.completed} internships completed</span>
        <span>${s.resumeUploaded?'<i data-lucide="check" style="width:13px;height:13px; vertical-align:-2px; color:var(--success);"></i> Resume on file':'No resume uploaded'}</span>
      </div>
    </div>

    ${editable ? `
    <div class="card card-pad" style="margin:20px 0;">
      <h3 style="margin-bottom:6px; font-size:15.5px;">Resume</h3>
      <p style="font-size:13px; color:var(--text-mute); margin-bottom:14px;">A resume is required before you can apply for any job (BR-01).</p>
      ${s.resumeUploaded ? `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <span class="badge badge-success"><i data-lucide="check"></i> Resume Uploaded</span>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-secondary btn-sm" onclick="uploadResume()">Replace File</button>
            <button class="btn btn-danger btn-sm" onclick="removeResume()">Remove</button>
          </div>
        </div>` : `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
          <span class="badge badge-danger">No Resume Uploaded</span>
          <input type="file" id="resume-file-input" style="display:none;" onchange="uploadResume()">
          <button class="btn btn-primary btn-sm" onclick="document.getElementById('resume-file-input').click()">Upload Resume</button>
        </div>`}
    </div>` : ""}

    <div class="page-head" style="margin-top:${editable?0:24}px;"><div><h3 style="font-size:17px;">${editable?"Portfolio Projects":"Supporting Documents"}</h3><p>${editable?"Feature your best work so it's the first thing employers see.":"Portfolio pieces, certificates, transcripts, or a cover letter shared by this student."}</p></div>
      ${editable ? `<button class="btn btn-secondary" onclick="openPortfolioModal()">+ Add Project</button>` : ""}</div>
    ${items.length ? `<div class="grid-3">${items.map(item=>portfolioCard(item, editable)).join("")}</div>`
      : editable
        ? emptyState("🗂️","No projects yet","Add your first project so employers can see the work behind your skills.")
        : emptyState("🗂️","No supporting documents","This student hasn't added any portfolio pieces yet.")}

    <h3 style="margin:28px 0 12px;">Certificates & Achievements</h3>
    <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
      ${s.certs.length? s.certs.map(c=>`<span class="badge badge-verified">🏅 ${c}</span>`).join("") : `<span style="color:var(--text-mute); font-size:13.5px;">No certificates added yet.</span>`}
      ${editable ? `<span class="btn btn-secondary btn-sm" onclick="addCert()">+ Add Certificate</span>` : ""}
    </div>
  `;
}
function studentPortfolio(){
  const s = studentById(state.currentUser.id);
  const content = `
    <div class="page-head"><div><h1>Portfolio & Resume</h1><p>This is what employers see when they review your application.</p></div></div>
    ${portfolioProfileBlock(s, true)}
  `;
  return appShell(STUDENT_NAV, content);
}
function toggleFeatured(i){
  const s = studentById(state.currentUser.id);
  s.portfolio[i].featured = !s.portfolio[i].featured;
  render();
  toast(s.portfolio[i].featured ? "Pinned to the top of your portfolio" : "Unpinned");
}
function uploadResume(){
  const s = studentById(state.currentUser.id);
  s.resumeUploaded = true;
  toast("Resume uploaded");
  render();
}
function removeResume(){
  const s = studentById(state.currentUser.id);
  s.resumeUploaded = false;
  toast("Resume removed");
  render();
}
function openPortfolioModal(){
  const overlay = document.createElement("div");
  overlay.className="modal-overlay"; overlay.id="generic-modal-overlay";
  overlay.onclick=(e)=>{ if(e.target===overlay) overlay.remove(); };
  overlay.innerHTML = `
  <div class="modal">
    <div class="modal-head"><h3>Add Supporting Document</h3><span class="close-x" onclick="document.getElementById('generic-modal-overlay').remove()"><i data-lucide="x"></i></span></div>
    <div class="field"><label>Title</label><input id="pf-title" placeholder="E-commerce Redesign"></div>
    <div class="field"><label>Type</label><select id="pf-type"><option>Portfolio</option><option>Certificate</option><option>Transcript</option><option>Cover Letter</option><option>GitHub</option><option>Behance</option></select></div>
    <div class="field"><label>Description</label><textarea id="pf-desc" rows="3" placeholder="Briefly describe this document..."></textarea></div>
    <div class="field"><label>Project Link (optional)</label><input id="pf-link" placeholder="https://github.com/you/project"></div>
    <div class="field"><label>Cover Image URL (optional)</label><input id="pf-image" placeholder="https://..."></div>
    <div class="field"><label>Upload File (optional)</label><input type="file"></div>
    <button class="btn btn-primary btn-block" onclick="savePortfolioItem()">Add Project</button>
  </div>`;
  document.body.appendChild(overlay);
}
function savePortfolioItem(){
  const s = studentById(state.currentUser.id);
  const title = document.getElementById("pf-title").value || "Untitled Document";
  const type = document.getElementById("pf-type").value;
  const desc = document.getElementById("pf-desc").value || "No description provided.";
  const link = document.getElementById("pf-link").value.trim();
  const image = document.getElementById("pf-image").value.trim();
  s.portfolio.push({title,type,desc,link,image,featured:false});
  document.getElementById("generic-modal-overlay").remove();
  toast("Project added");
  render();
}
function removePortfolioItem(i){ const s=studentById(state.currentUser.id); s.portfolio.splice(i,1); render(); toast("Item removed"); }
function addCert(){ const s=studentById(state.currentUser.id); s.certs.push("New Certificate"); render(); toast("Certificate added"); }

/* ---------- STUDENT PROFILE / SETTINGS ---------- */
function studentSettings(){
  const s = studentById(state.currentUser.id);
  const verified = s.verificationStatus==="Verified"?"Verified":s.verificationStatus==="Pending"?"Pending Verification":"Not Verified";
  const content = `
    <div class="page-head"><div><h1>Settings</h1><p>Manage your profile and account details.</p></div></div>
    <div class="card card-pad" style="max-width:640px; margin-bottom:20px;">
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:22px;">${avatar(s.name,s.avatarColor,60,20)}<div><strong style="font-size:16px;">${s.name}</strong><div style="font-size:12.5px; color:var(--text-mute);">${s.uni}</div></div></div>
      <div class="field"><label>Full Name</label><input value="${s.name}"></div>
      <div class="grid-2" style="gap:16px;">
        <div class="field"><label>Major</label><input value="${s.major}"></div>
        <div class="field"><label>Year</label><input value="${s.year}"></div>
      </div>
      <div class="field"><label>Bio</label><textarea rows="3">${s.bio}</textarea></div>
      <div class="field"><label>Skills (comma separated)</label><input value="${s.skills.join(", ")}"></div>
      <button class="btn btn-primary" onclick="toast('Profile saved')">Save Changes</button>
    </div>
  `;
  return appShell(STUDENT_NAV, content);
}

/* ---------- STUDENT VERIFICATION (own page, F04) ---------- */
function studentVerificationPage(){
  const s = studentById(state.currentUser.id);
  const verified = normalizeStatus(s.verificationStatus);

  return appShell(STUDENT_NAV, `
    <div class="page-head">
      <div>
        <h1>Verification</h1>
        <p>Upload your documents so the admin can review your account.</p>
      </div>
    </div>

    ${verified !== "Verified" ? pendingNotice("student") : ""}

    <div class="card card-pad" style="max-width:760px;">
      <div class="field">
        <label>University Student ID</label>
        <input type="file" id="student-doc-id">
      </div>

      <div class="field">
        <label>Enrollment Verification</label>
        <input type="file" id="student-doc-enrollment">
      </div>

      <div class="field">
        <label>Resume (optional)</label>
        <input type="file" id="student-doc-resume">
      </div>

      <div class="field">
        <label>Additional Notes</label>
        <textarea id="student-verification-notes" rows="4" placeholder="Add any extra information for the admin review..."></textarea>
      </div>

      <button class="btn btn-primary" onclick="submitStudentVerification()">Submit for Review</button>
    </div>
  `);
}
function submitStudentVerification(){
  const s = studentById(state.currentUser.id);

  s.verificationStatus = "Pending Verification";

  VERIFICATION_REQUESTS.unshift({
    id:`vr${Date.now()}`,
    userId:s.id,
    role:"student",
    status:"Pending",
    submittedAt:"Jul 12, 2026",
    reviewedAt:"",
    reviewerId:"",
    rejectionReason:"",
    documents:[
      document.getElementById("student-doc-id")?.files[0]?.name || "Student ID",
      document.getElementById("student-doc-enrollment")?.files[0]?.name || "Enrollment Verification",
      document.getElementById("student-doc-resume")?.files[0]?.name || "Resume"
    ]
  });

  logActivity("Submitted student verification","verification",s.id,"Student submitted verification documents");
  toast("Verification submitted for review");
  render();
}

/* ---------- STUDENT REVIEWS ---------- */
function studentReviews(){
  const sid = state.currentUser.id;
  const received = REVIEWS.filter(r=>r.revieweeId===sid);
  const given = REVIEWS.filter(r=>r.reviewerId===sid);
  const content = `
    <div class="page-head"><div><h1>Reviews</h1><p>Feedback from companies you've worked with.</p></div></div>
    <h3 style="margin-bottom:12px;">Received (${received.length})</h3>
    ${received.length? received.map(r=>reviewCard(r,'company')).join("") : emptyState("⭐","No reviews yet","Complete a project to receive your first review.")}
    <h3 style="margin:24px 0 12px;">Given (${given.length})</h3>
    ${given.length? given.map(r=>reviewCard(r,'company')).join("") : emptyState("⭐","No reviews given yet","")}
  `;
  return appShell(STUDENT_NAV, content);
}
function reviewCard(r,otherType){
  const other = otherType==='company' ? companyById(r.reviewerId===r.reviewerId && (COMPANIES.find(c=>c.id===r.reviewerId)||COMPANIES.find(c=>c.id===r.revieweeId)).id) : null;
  const otherName = COMPANIES.find(c=>c.id===r.reviewerId)?.name || COMPANIES.find(c=>c.id===r.revieweeId)?.name || STUDENTS.find(s=>s.id===r.reviewerId)?.name || STUDENTS.find(s=>s.id===r.revieweeId)?.name;
  const proj = jobById(r.jobId);
  return `
  <div class="review-card">
    <div style="display:flex; justify-content:space-between;"><strong style="font-size:13.5px;">${otherName}</strong><span class="stars-row">${stars(r.rating)}</span></div>
    <p style="font-size:13px; color:var(--text-soft); margin:8px 0;">${r.comment}</p>
    <div style="font-size:11.5px; color:var(--text-mute);">${proj?proj.title:''} · ${r.date}</div>
  </div>`;
}
function reviewListBlock(list){
  if(!list.length) return "";
  return `<h3 style="margin:24px 0 12px;">Reviews</h3>${list.map(r=>reviewCard(r,'company')).join("")}`;
}

/* ============================================================
   MESSAGING (shared between student & company)
   ============================================================ */
function messagesPage(role){
  const navItems = role==="student"?STUDENT_NAV:COMPANY_NAV;
  const myId = state.currentUser.id;
  const myConvs = CONVERSATIONS.filter(c=> role==="student" ? c.studentId===myId : c.companyId===myId);
  let activeId = state.activeConvId || (myConvs[0] && myConvs[0].id);
  state.activeConvId = activeId;
  const activeConv = byId(myConvs,activeId);
  const otherOf = (c)=> role==="student" ? companyById(c.companyId) : studentById(c.studentId);
  const content = `
    <div class="page-head"><div><h1>Messages</h1><p>Conversations with ${role==='student'?'companies':'students'}.</p></div></div>
    <div class="msg-shell">
      <div class="conv-list">
        ${myConvs.length? myConvs.map(c=>{
          const other = otherOf(c); const last = c.messages[c.messages.length-1];
          return `<div class="conv-item ${c.id===activeId?'active':''}" onclick="state.activeConvId='${c.id}'; render();">
            ${avatar(other.name,"blue",38,13)}
            <div style="flex:1; min-width:0;"><div class="name">${other.name}</div><div class="preview">${last?last.text:''}</div></div>
          </div>`;
        }).join("") : `<div class="empty-state"><div class="ic">💬</div><p style="font-size:13px;">No conversations yet</p></div>`}
      </div>
      <div class="chat-window">
        ${activeConv ? `
        <div class="chat-head">${avatar(otherOf(activeConv).name,"blue",34,12)}<strong style="font-size:14px;">${otherOf(activeConv).name}</strong></div>
        <div class="chat-body" id="chat-body">
          ${activeConv.messages.map(m=>{
            const mine = (role==="student" && m.from==="student") || (role==="company" && m.from==="company");
            return `<div class="bubble ${mine?'out':'in'}">${m.text}<span class="ts">${m.ts}</span></div>`;
          }).join("")}
        </div>
        <div class="chat-input">
          <input id="chat-input-box" placeholder="Type a message..." onkeydown="if(event.key==='Enter') sendMessage('${role}','${activeConv.id}')">
          <button class="btn btn-primary btn-sm" onclick="sendMessage('${role}','${activeConv.id}')">Send</button>
        </div>` : emptyState("💬","Select a conversation","Choose a conversation from the list.")}
      </div>
    </div>
  `;
  return appShell(navItems, content);
}
function sendMessage(role,convId){
  const input = document.getElementById("chat-input-box");
  const text = input.value.trim();
  if(!text) return;
  const conv = byId(CONVERSATIONS,convId);
  conv.messages.push({from:role, text, ts:"Just now"});
  render();
  setTimeout(()=>{ const cb=document.getElementById("chat-body"); if(cb) cb.scrollTop=cb.scrollHeight; },0);
}

/* ============================================================
   COMPANY DASHBOARD
   ============================================================ */
function companyDashboard(){
  const co = companyById(state.currentUser.id);
  const myProjects = JOBS.filter(p=>p.companyId===co.id);
  const myApps = APPLICATIONS.filter(a=>myProjects.some(p=>p.id===a.jobId));
  const content = `
    <div class="page-head"><div><h1>Welcome back, ${co.name} 👋</h1><p>Here's an overview of your hiring activity.</p></div>
      <button class="btn btn-primary" onclick="go('company-post-project')">+ Post a Job</button></div>

    <div class="grid-4" style="margin-bottom:26px;">
      <div class="stat-card"><div class="label">Jobs Posted</div><div class="value">${myProjects.length}</div></div>
      <div class="stat-card"><div class="label">Total Applicants</div><div class="value">${myApps.length}</div></div>
      <div class="stat-card"><div class="label">Pending Applications</div><div class="value">${myApps.filter(a=>a.status==="Applied"||a.status==="Under Review").length}</div></div>
      <div class="stat-card"><div class="label">Verification</div><div class="value" style="font-size:16px;">${verifBadge(co.verified)}</div></div>
    </div>
    <div class="three-col">
      <div>
        <h3 style="margin-bottom:12px;">Recent Applicants</h3>
        ${myApps.length? myApps.slice(0,5).map(a=>{
          const s=studentById(a.studentId); const p=jobById(a.jobId);
          return `<div class="card card-pad" style="margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; gap:10px;">
            <div class="company-row">${avatar(s.name,s.avatarColor,38,13)}<div><strong style="font-size:13.5px;">${s.name}</strong><div class="meta">${p.title}</div></div></div>
            ${statusPill(a.status)}
          </div>`;
        }).join("") : emptyState("🧑‍🎓","No applicants yet","Once you post a job, applicants will show up here.")}
      </div>
      <div>
        <div class="card card-pad" style="margin-bottom:16px;">
          <h4 style="margin-bottom:10px; font-size:14.5px;">Open Jobs</h4>
          ${myProjects.filter(p=>p.status==="Open").slice(0,4).map(p=>`<div style="font-size:13px; padding:7px 0; border-bottom:1px solid var(--border);">${p.title}</div>`).join("") || `<p style="font-size:13px; color:var(--text-mute);">None right now</p>`}
        </div>
        <div class="card card-pad">
          <h4 style="margin-bottom:10px; font-size:14.5px;">Verification Status</h4>
          ${verifBadge(co.verified, "company")}
          <p style="font-size:12.5px; color:var(--text-mute); margin-top:10px;">${co.verified==="Verified" ? "Your company is verified and can post jobs." : co.verified==="Pending Verification" ? "We're reviewing your submitted documents." : "Submit your business details to get verified and unlock job posting."}</p>
          ${co.verified!=="Verified" ? `<button class="btn btn-secondary btn-sm" style="margin-top:10px;" onclick="go('company-profile')">Manage Verification</button>` : ""}
        </div>
      </div>
    </div>
  `;
  return appShell(COMPANY_NAV, content);
}

/* ---------- COMPANY PROFILE + VERIFICATION ---------- */
function companyProfilePage(){
  const co = companyById(state.currentUser.id);
  const content = `

  ${normalizeStatus(co.verified) !== "Verified" ? pendingNotice("company") : ""}
    <div class="page-head"><div><h1>Employer Profile</h1><p>This is what students see before applying.</p></div></div>
    <div class="card card-pad" style="max-width:760px; margin-bottom:20px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:14px;">
        <div class="company-row">${avatar(co.name,"blue",56,18)}<div><h2 style="font-size:20px;">${co.name}</h2><div class="meta">${co.industry} · ${co.location}</div></div></div>
        ${verifBadge(co.verified, "company")}
      </div>
      <div class="field">
  <label>Business Registration</label>
  <input type="file" id="company-doc-registration">
</div>

<div class="field">
  <label>Company Certificate</label>
  <input type="file" id="company-doc-certificate">
</div>

<div class="field">
  <label>Company Logo</label>
  <input type="file" id="company-doc-logo">
</div>

<div class="field">
  <label>Official Email Domain Proof</label>
  <input type="file" id="company-doc-domain">
</div>
<button class="btn btn-primary" onclick="submitCompanyVerification()">Submit for Review</button>
      <div class="field" style="margin-top:20px;"><label>Company Name</label><input value="${co.name}"></div>
      <div class="grid-2" style="gap:16px;">
        <div class="field"><label>Industry</label><input value="${co.industry}"></div>
        <div class="field"><label>Location</label><input value="${co.location}"></div>
      </div>
      <div class="grid-2" style="gap:16px;">
        <div class="field"><label>Company Size</label><input value="${co.size}"></div>
        <div class="field"><label>Website</label><input value="${co.website}"></div>
      </div>
      <div class="field"><label>Description</label><textarea rows="3">${co.desc}</textarea></div>
      <button class="btn btn-primary" onclick="toast('Profile saved')">Save Changes</button>
    </div>
    <div class="card card-pad" style="max-width:760px;">
      <h3 style="margin-bottom:6px;">Verification</h3>
      <p style="font-size:13px; color:var(--text-mute); margin-bottom:16px;">Verified companies build more trust and get more applicants. Submit your details to get verified. (Simulated — this prototype verifies instantly.)</p>
      ${verifBadge(co.verified, "company")}
      ${co.verificationDetails ? `<p style="font-size:12px; color:var(--text-mute); margin-top:8px;">Last submitted ${co.verificationDetails.submittedAt}</p>` : ""}
      <div class="grid-2" style="gap:16px; margin-top:16px;">
        <div class="field"><label>Business Email</label><input id="vf-email" placeholder="hello@company.com" value="${co.verificationDetails?.email||''}"></div>
        <div class="field"><label>Company Registration Number</label><input id="vf-reg" placeholder="REG-000000" value="${co.verificationDetails?.reg||''}"></div>
      </div>
      <div class="field"><label>Business Address</label><input id="vf-address" placeholder="123 Main St, City, State" value="${co.verificationDetails?.address||''}"></div>
      <div class="field"><label>Company Logo</label><input type="file" id="vf-logo" onchange="document.getElementById('vf-logo-name').textContent=this.files[0]?this.files[0].name:'No file chosen';"><div id="vf-logo-name" style="font-size:12px; color:var(--text-mute); margin-top:4px;">${co.verificationDetails?.logoName||'No file chosen'}</div></div>
      <button class="btn btn-secondary" onclick="submitVerification()">${co.verified==='Not Verified'?'Submit for Verification':'Re-submit Documents'}</button>
    </div>
  `;
  return appShell(COMPANY_NAV, content);
}
function submitCompanyVerification(){
  const c = companyById(state.currentUser.id);

  c.verified = "Pending Verification";

  VERIFICATION_REQUESTS.unshift({
    id:`vr${Date.now()}`,
    userId:c.id,
    role:"company",
    status:"Pending",
    submittedAt:"Jul 12, 2026",
    reviewedAt:"",
    reviewerId:"",
    rejectionReason:"",
    documents:[
      document.getElementById("company-doc-registration")?.files[0]?.name || "Business Registration",
      document.getElementById("company-doc-certificate")?.files[0]?.name || "Company Certificate",
      document.getElementById("company-doc-logo")?.files[0]?.name || "Company Logo",
      document.getElementById("company-doc-domain")?.files[0]?.name || "Official Email Domain"
    ]
  });

  logActivity("Submitted company verification","verification",c.id,"Company submitted verification documents");
  toast("Verification submitted for review");
  render();
}

/* ---------- COMPANY JOBS (post / manage) ---------- */
function companyProjectsPage(){
  const co = companyById(state.currentUser.id);
  const myProjects = JOBS.filter(p=>p.companyId===co.id);
  const content = `
    <div class="page-head"><div><h1>Job Posts</h1><p>Create and manage your internship and entry-level listings.</p></div>
      <button class="btn btn-primary" onclick="go('company-post-project')">+ Post a Job</button></div>
    ${myProjects.length? myProjects.map(p=>`
      <div class="card card-pad" style="margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
        <div><h4 style="font-size:15px;">${p.title}</h4><div class="meta" style="font-size:12.5px; color:var(--text-mute); margin-top:4px;">${p.category} · ${p.jobType} · ${p.workMode}</div></div>
        <div style="display:flex; gap:8px; align-items:center;">
          <span class="badge ${p.status==='Open'?'badge-success':'badge-unverified'}">${p.status}</span>
          <button class="btn btn-secondary btn-sm" onclick="toast('Edit form would open here')">Edit</button>
          <button class="btn btn-secondary btn-sm" onclick="toggleProjectStatus('${p.id}')">${p.status==='Open'?'Close':'Reopen'}</button>
          <button class="btn btn-danger btn-sm" onclick="deleteProject('${p.id}')">Delete</button>
        </div>
      </div>`).join("") : emptyState("📁","No job posts yet","Post your first job to start receiving applications.")}
  `;
  return appShell(COMPANY_NAV, content);
}
function toggleProjectStatus(id){ const p=jobById(id); p.status = p.status==="Open"?"Closed":"Open"; render(); toast("Job post updated"); }
function deleteProject(id){ const idx=JOBS.findIndex(p=>p.id===id); if(idx>-1){ JOBS.splice(idx,1); render(); toast("Job post deleted"); } }
function companyPostProject(){
  const co = companyById(state.currentUser.id);
  if(co.verified !== "Verified"){
    const content = `
      <div class="page-head"><div><h1>Post a Job</h1><p>Job posting is unlocked once your company is verified.</p></div></div>
      <div class="card card-pad" style="max-width:560px; text-align:center;">
        ${verifBadge(co.verified, "company")}
        <h3 style="margin:16px 0 8px;">Verification required</h3>
        <p style="font-size:13.5px; color:var(--text-mute); margin-bottom:18px;">Employers cannot publish internship or entry-level job posts until company verification is approved. This keeps the platform trustworthy for students.</p>
        <a class="btn btn-primary" href="javascript:void(0)" onclick="go('company-profile')">Go to Verification</a>
      </div>
    `;
    return appShell(COMPANY_NAV, content);
  }
  const content = `
    <div class="page-head"><div><h1>Post a Job</h1><p>Fill in the details students need to apply.</p></div></div>
    <div class="card card-pad" style="max-width:680px;">
      <div class="field"><label>Job Title</label><input id="np-title" placeholder="Frontend Engineering Intern"></div>
      <div class="field"><label>Description</label><textarea id="np-desc" rows="4" placeholder="Describe the role, responsibilities, and what a strong candidate looks like..."></textarea></div>
      <div class="grid-2" style="gap:16px;">
        <div class="field"><label>Category</label><select id="np-cat">${CATEGORIES.map(c=>`<option>${c}</option>`).join("")}</select></div>
        <div class="field"><label>Job Type</label><select id="np-type"><option>Internship</option><option>Entry-Level</option></select></div>
      </div>
      <div class="grid-2" style="gap:16px;">
        <div class="field"><label>Work Mode</label><select id="np-mode"><option>Remote</option><option>On-site</option><option>Hybrid</option></select></div>
        <div class="field"><label>Application Deadline</label><input id="np-deadline" placeholder="Jul 30, 2026"></div>
      </div>
      <div class="grid-2" style="gap:16px;">
        <div class="field"><label>Education Level Required</label><select id="np-edu"><option>Currently Enrolled</option><option>Recent Graduate</option><option>Any</option></select></div>
        <div class="field"><label>Language Requirement</label><input id="np-lang" placeholder="English (fluent)"></div>
      </div>
      <div class="field"><label>Visa / Work Eligibility</label><input id="np-visa" placeholder="Not required"></div>
      <div class="field"><label>Required Skills (comma separated)</label><input id="np-skills" placeholder="Figma, UI Design"></div>
      <div class="field"><label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="checkbox" id="np-beginner" style="width:auto;" checked> This role is beginner-friendly</label></div>
      ${state.currentUser && state.currentUser.role==="company" && !isVerifiedCompany(state.currentUser.id)
  ? `<button class="btn btn-primary" disabled>Verification required before posting jobs</button>`
  : `<button class="btn btn-primary" onclick="createProject()">Publish Job</button>`
}
    </div>
  `;
  return appShell(COMPANY_NAV, content);
}
function createProject(){
  const co = companyById(state.currentUser.id);
  if(!canPublishJobs()){
    toast("Verification required before posting jobs");
    return;
  }
  const val = id => document.getElementById(id).value;
  const p = {
    id:"j"+Date.now(), companyId:co.id,
    title: val("np-title")||"Untitled Job",
    category: val("np-cat"), jobType: val("np-type"), workMode: val("np-mode"),
    beginnerFriendly: document.getElementById("np-beginner").checked,
    educationLevel: val("np-edu"), languageRequirement: val("np-lang")||"Not specified",
    visaEligibility: val("np-visa")||"Not specified",
    deadline: val("np-deadline")||"TBD",
    skills: (val("np-skills")||"").split(",").map(s=>s.trim()).filter(Boolean),
    status:"Open",
    desc: val("np-desc")||"No description provided."
  };
  JOBS.unshift(p);
  toast("Job published!");
  go("company-projects");
}

/* ---------- COMPANY APPLICANTS ---------- */
function companyApplicants(){
  const co = companyById(state.currentUser.id);
  const myProjects = JOBS.filter(p=>p.companyId===co.id);
  const myApps = APPLICATIONS.filter(a=>myProjects.some(p=>p.id===a.jobId));
  const content = `
    <div class="page-head"><div><h1>Applicants</h1><p>Review and manage applications to your job posts.</p></div></div>
    ${myApps.length? myApps.map(a=>{
      const s = studentById(a.studentId); const p = jobById(a.jobId);
      const inProgress = !['Accepted','Rejected','Closed'].includes(a.status);
      return `
      <div class="card card-pad" style="margin-bottom:12px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px;">
          <div class="company-row">${avatar(s.name,s.avatarColor,42,14)}
            <div><strong style="font-size:14.5px;">${s.name}</strong> ${verifBadge(s.verificationStatus==="Verified"?"Verified":s.verificationStatus==="Pending"?"Pending Verification":"Not Verified")}<div class="meta">${s.uni} · ${s.major}</div>
            <div style="font-size:12px; color:var(--text-mute); margin-top:2px;">Applied to: <strong>${p.title}</strong> ${s.resumeUploaded?"":"· <span style='color:var(--danger);'>No resume on file</span>"}</div></div>
          </div>
          ${statusPill(a.status)}
        </div>
        <div class="proj-tags" style="margin-top:10px;">${s.skills.map(sk=>`<span class="skill-tag">${sk}</span>`).join("")}</div>
        <div style="display:flex; gap:8px; margin-top:14px; flex-wrap:wrap;">
          <button class="btn btn-secondary btn-sm" onclick="go('company-student-view',{id:'${s.id}',appId:'${a.id}'})">View Profile &amp; Resume</button>
          ${(a.status==='Applied'||a.status==='Under Review') ? `<button class="btn btn-secondary btn-sm" onclick="updateAppStatus('${a.id}','Interview')">Schedule Interview</button>` : ""}
          ${inProgress ? `<button class="btn btn-primary btn-sm" onclick="updateAppStatus('${a.id}','Accepted')">Accept</button><button class="btn btn-danger btn-sm" onclick="updateAppStatus('${a.id}','Rejected')">Reject</button>` : ""}
        </div>
      </div>`;
    }).join("") : emptyState("🧑‍🎓","No applicants yet","Applicants will appear here once students apply to your jobs.")}
  `;
  return appShell(COMPANY_NAV, content);
}
function updateAppStatus(id,status){
  const a = byId(APPLICATIONS,id); a.status = status;
  toast(`Application marked ${status}`); render();
}
function companyStudentView(){
  const s = studentById(state.params.id);
  const content = `
    <a onclick="go('company-applicants')" style="font-size:13.5px; color:var(--text-mute); display:inline-block; margin-bottom:14px;">← Back to applicants</a>
    ${portfolioProfileBlock(s, false)}
    ${reviewListBlock(REVIEWS.filter(r=>r.revieweeId===s.id))}
  `;
  return appShell(COMPANY_NAV, content);
}

/* ---------- COMPANY REVIEWS ---------- */
function companyReviewsPage(){
  const cid = state.currentUser.id;
  const received = REVIEWS.filter(r=>r.revieweeId===cid);
  const given = REVIEWS.filter(r=>r.reviewerId===cid);
  const content = `
    <div class="page-head"><div><h1>Reviews</h1><p>Feedback from students you've worked with.</p></div></div>
    <h3 style="margin-bottom:12px;">Received (${received.length})</h3>
    ${received.length? received.map(r=>reviewCard(r)).join("") : emptyState("⭐","No reviews yet","")}
    <h3 style="margin:24px 0 12px;">Given (${given.length})</h3>
    ${given.length? given.map(r=>reviewCard(r)).join("") : emptyState("⭐","No reviews given yet","Complete a project to leave your first review.")}
  `;
  return appShell(COMPANY_NAV, content);
}
function companySettings(){
  const co = companyById(state.currentUser.id);
  const content = `
    <div class="page-head"><div><h1>Settings</h1><p>Manage your account preferences.</p></div></div>
    <div class="card card-pad" style="max-width:560px;">
      <div class="field"><label>Business Email</label><input value="hello@${co.website}"></div>
      <div class="field"><label>Password</label><input type="password" value="••••••••"></div>
      <button class="btn btn-primary" onclick="toast('Settings saved')">Save Changes</button>
    </div>
  `;
  return appShell(COMPANY_NAV, content);
}

/* ---------- REVIEW MODAL ---------- */
function openReviewModal(jobId,revieweeId,type){
  const overlay = document.createElement("div");
  overlay.className="modal-overlay"; overlay.id="generic-modal-overlay";
  overlay.onclick=(e)=>{ if(e.target===overlay) overlay.remove(); };
  const name = type==='company-review' ? companyById(revieweeId).name : studentById(revieweeId).name;
  overlay.innerHTML = `
  <div class="modal">
    <div class="modal-head"><h3>Rate ${name}</h3><span class="close-x" onclick="document.getElementById('generic-modal-overlay').remove()"><i data-lucide="x"></i></span></div>
    <div class="field"><label>Rating</label>
      <div id="star-picker" style="font-size:26px; color:var(--warning); cursor:pointer;">★★★★★</div>
    </div>
    <div class="field"><label>Comment</label><textarea id="rv-comment" rows="3" placeholder="Share your experience working together..."></textarea></div>
    <button class="btn btn-primary btn-block" onclick="submitReview('${jobId}','${revieweeId}','${type}')">Submit Review</button>
  </div>`;
  document.body.appendChild(overlay);
}
function submitReview(jobId,revieweeId,type){
  const reviewerId = state.currentUser.id;
  const comment = document.getElementById("rv-comment").value || "Great experience working together.";
  REVIEWS.push({id:"r"+Date.now(), type, jobId, reviewerId, revieweeId, rating:5, comment, date:"Jul 1, 2026"});
  document.getElementById("generic-modal-overlay").remove();
  toast("Review submitted — thank you!");
  render();
}
/*==========================
----- Admin Dashboard -----
===========================*/
function adminDashboard(){
  const totalStudents = STUDENTS.length;
  const verifiedStudents = STUDENTS.filter(s => normalizeStatus(s.verificationStatus) === "Verified").length;
  const pendingStudents = STUDENTS.filter(s => normalizeStatus(s.verificationStatus) !== "Verified").length;

  const totalEmployers = COMPANIES.length;
  const verifiedEmployers = COMPANIES.filter(c => normalizeStatus(c.verified) === "Verified").length;
  const pendingEmployers = COMPANIES.filter(c => normalizeStatus(c.verified) !== "Verified").length;

  const activeJobs = JOBS.filter(j => j.status === "Open").length;
  const pendingRequests = VERIFICATION_REQUESTS.filter(v => v.status === "Pending").length;
  const totalApplications = APPLICATIONS.length;
  const totalReports = REPORTS.length;

  const totalReviewed = VERIFICATION_REQUESTS.filter(v => v.status === "Approved" || v.status === "Rejected" || v.status === "Needs More Info").length;
  const approvalRate = totalReviewed ? Math.round((VERIFICATION_REQUESTS.filter(v => v.status === "Approved").length / totalReviewed) * 100) : 0;

  const usersPerMonth = [
    {label:"Jan", value:4},
    {label:"Feb", value:6},
    {label:"Mar", value:5},
    {label:"Apr", value:8},
    {label:"May", value:10},
    {label:"Jun", value:12},
    {label:"Jul", value:totalStudents + totalEmployers},
  ];

  const userDistribution = [
    {label:"Students", value:totalStudents, color:"#2563EB"},
    {label:"Employers", value:totalEmployers, color:"#22C55E"},
  ];

  const verificationBreakdown = [
    {label:"Verified Students", value:verifiedStudents, color:"#2563EB"},
    {label:"Pending Students", value:pendingStudents, color:"#F59E0B"},
    {label:"Verified Employers", value:verifiedEmployers, color:"#7C3AED"},
    {label:"Pending Employers", value:pendingEmployers, color:"#64748B"},
  ];

  const jobsOverTime = [
    {label:"Wk 1", value:2},
    {label:"Wk 2", value:4},
    {label:"Wk 3", value:3},
    {label:"Wk 4", value:activeJobs},
  ];

  const applicationsOverTime = [
    {label:"Wk 1", value:1},
    {label:"Wk 2", value:2},
    {label:"Wk 3", value:3},
    {label:"Wk 4", value:totalApplications},
  ];

  const content = `
    <div class="page-head">
      <div>
        <h1>Admin Dashboard</h1>
        <p>Monitor users, jobs, verification requests, reports, and platform activity.</p>
      </div>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <button class="btn btn-primary btn-sm" onclick="go('admin-verifications')">Review Verifications</button>
        <button class="btn btn-secondary btn-sm" onclick="go('admin-users')">Manage Users</button>
      </div>
    </div>

    <div class="grid-4" style="margin-bottom:18px;">
      ${lineChip("Total Students", totalStudents)}
      ${lineChip("Verified Students", verifiedStudents)}
      ${lineChip("Pending Students", pendingStudents)}
      ${lineChip("Total Employers", totalEmployers)}
      ${lineChip("Verified Employers", verifiedEmployers)}
      ${lineChip("Pending Employers", pendingEmployers)}
      ${lineChip("Active Jobs", activeJobs)}
      ${lineChip("Pending Verification Requests", pendingRequests)}
    </div>

    <div class="grid-2" style="margin-bottom:18px;">
      ${lineChip("Total Applications", totalApplications)}
      ${lineChip("Reports Submitted", totalReports)}
    </div>

    <div class="grid-2" style="margin-bottom:18px;">
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">Verification Breakdown</h3>
        ${pieChart(verificationBreakdown)}
      </div>
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">User Distribution</h3>
        ${pieChart(userDistribution)}
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:18px;">
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">New Users per Month</h3>
        ${barChart(usersPerMonth, 12)}
      </div>
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">Verification Approval Rate</h3>
        <div class="stat-card" style="margin-bottom:14px;">
          <div class="label">Approved Requests</div>
          <div class="value">${approvalRate}%</div>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${approvalRate}%;"></div>
        </div>
        <p style="font-size:13px; color:var(--text-mute); margin-top:10px;">
          Based on reviewed verification requests.
        </p>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:18px;">
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">Jobs Posted Over Time</h3>
        ${barChart(jobsOverTime, Math.max(activeJobs, 4))}
      </div>
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">Applications Submitted Over Time</h3>
        ${barChart(applicationsOverTime, Math.max(totalApplications, 3))}
      </div>
    </div>

    <div class="grid-2">
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">Quick Actions</h3>
        <div style="display:flex; flex-wrap:wrap; gap:10px;">
          <button class="btn btn-primary btn-sm" onclick="go('admin-verifications')">Verify Students</button>
          <button class="btn btn-primary btn-sm" onclick="go('admin-verifications')">Verify Employers</button>
          <button class="btn btn-secondary btn-sm" onclick="go('admin-reports')">Review Reports</button>
          <button class="btn btn-secondary btn-sm" onclick="go('admin-jobs')">Manage Jobs</button>
          <button class="btn btn-secondary btn-sm" onclick="go('admin-users')">Manage Users</button>
        </div>
      </div>
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">Recent Activity</h3>
        ${recentActivityBlock()}
      </div>
    </div>

    <div class="grid-2" style="margin-top:18px;">
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">Recent Registrations</h3>
        ${recentRegistrationsBlock()}
      </div>
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">Recent Verification Requests</h3>
        ${recentVerificationBlock()}
      </div>
    </div>

    <div class="grid-2" style="margin-top:18px;">
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">Recent Job Posts</h3>
        ${recentJobsBlock()}
      </div>
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:10px;">Reports Submitted</h3>
        ${REPORTS.length ? REPORTS.slice(0,5).map(r => `
          <div class="card card-pad" style="margin-bottom:10px;">
            <strong style="font-size:14px;">${r.reason}</strong>
            <div class="meta">${r.date} · ${r.status}</div>
          </div>
        `).join("") : emptyState("🚩","No reports submitted","Reports will appear here.")}
      </div>
    </div>
  `;

  return adminShell(content);
}
function totalRequests(){
  return VERIFICATION_REQUESTS.length;
}

function recentRegistrationsBlock(){
  const recentStudents = STUDENTS.slice(0,3).map(s => `
    <div class="card card-pad" style="margin-bottom:10px;">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
        <div>
          <strong style="font-size:14px;">${s.name}</strong>
          <div class="meta">${s.uni || s.industry || "New account"}</div>
        </div>
        ${verifBadge(s.verificationStatus || s.verified, "student")}
      </div>
    </div>
  `).join("");

  const recentCompanies = COMPANIES.slice(0,3).map(c => `
    <div class="card card-pad" style="margin-bottom:10px;">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
        <div>
          <strong style="font-size:14px;">${c.name}</strong>
          <div class="meta">${c.industry}</div>
        </div>
        ${verifBadge(c.verified, "company")}
      </div>
    </div>
  `).join("");

  return recentStudents + recentCompanies || emptyState("📝","No recent registrations","New users will appear here.");
}

function recentVerificationBlock(){
  const items = VERIFICATION_REQUESTS.slice(0,5);
  if(!items.length) return emptyState("🛡️","No verification requests yet","Student and employer requests will appear here.");
  return items.map(v => {
    const u = v.role === "student" ? studentById(v.userId) : companyById(v.userId);
    return `
      <div class="card card-pad" style="margin-bottom:10px;">
        <strong style="font-size:14px;">${u?.name || "Unknown"}</strong>
        <div class="meta">${roleLabel(v.role)} · ${v.status}</div>
      </div>
    `;
  }).join("");
}

function recentJobsBlock(){
  const items = JOBS.slice(0,5);
  if(!items.length) return emptyState("📁","No job posts yet","Published jobs will appear here.");
  return items.map(j => `
    <div class="card card-pad" style="margin-bottom:10px;">
      <strong style="font-size:14px;">${j.title}</strong>
      <div class="meta">${companyById(j.companyId)?.name || "Unknown company"} · ${j.status}</div>
    </div>
  `).join("");
}

function recentActivityBlock(){
  const items = ACTIVITY_LOG.slice(0,5);
  if(!items.length) return emptyState("🕒","No activity yet","Admin actions will appear here.");
  return items.map(a => `
    <div class="card card-pad" style="margin-bottom:10px;">
      <strong style="font-size:14px;">${a.action}</strong>
      <div class="meta">${a.date} · ${a.details || ""}</div>
    </div>
  `).join("");
}
function adminVerificationsPage(){
  const content = `
    <div class="page-head">
      <div>
        <h1>Verification Requests</h1>
        <p>Review student and employer verification submissions.</p>
      </div>
    </div>

    <div class="card card-pad">
      ${VERIFICATION_REQUESTS.length ? VERIFICATION_REQUESTS.map(v => {
        const u = v.role === "student" ? studentById(v.userId) : companyById(v.userId);
        const info = v.role === "student" ? (u?.uni || "No university listed") : (u?.website || "No website listed");
        return `
          <div class="card card-pad" style="margin-bottom:12px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; flex-wrap:wrap;">
              <div class="company-row" style="cursor:pointer;" onclick="go('admin-verification-detail',{id:'${v.id}'})">
                ${avatar(u?.name || "Unknown","blue",44,15)}
                <div>
                  <strong style="font-size:14.5px;">${u?.name || "Unknown"}</strong>
                  <div class="meta">${roleLabel(v.role)} · ${info}</div>
                  <div class="meta">Submitted: ${v.submittedAt || "Unknown"}</div>
                </div>
              </div>
              ${statusPill(v.status)}
            </div>

            <div style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap;">
              <button class="btn btn-primary btn-sm" onclick="approveVerification('${v.id}')">Approve</button>
              <button class="btn btn-danger btn-sm" onclick="rejectVerificationPrompt('${v.id}')">Reject</button>
              <button class="btn btn-secondary btn-sm" onclick="requestMoreInfo('${v.id}')">Request More Information</button>
              <button class="btn btn-secondary btn-sm" onclick="go('admin-verification-detail',{id:'${v.id}'})">View Details</button>
            </div>
          </div>
        `;
      }).join("") : emptyState("🛡️","No verification requests","Requests will appear here.")}
    </div>
  `;
  return adminShell(content);
}

function adminUsersPage(){
  return adminShell(`
    <div class="page-head">
      <div>
        <h1>Users</h1>
        <p>Manage students and employers.</p>
      </div>
    </div>
    <div class="card card-pad">
      ${emptyState("👥","User management coming next","This page will be expanded in the next stage.")}
    </div>
  `);
}

function adminJobsPage(){
  return adminShell(`
    <div class="page-head">
      <div>
        <h1>Jobs</h1>
        <p>Monitor published jobs.</p>
      </div>
    </div>
    <div class="card card-pad">
      ${emptyState("💼","Job moderation coming next","This page will be expanded in the next stage.")}
    </div>
  `);
}

function adminReportsPage(){
  return adminShell(`
    <div class="page-head">
      <div>
        <h1>Reports</h1>
        <p>Review reported jobs and platform issues.</p>
      </div>
    </div>
    <div class="card card-pad">
      ${REPORTS.length ? REPORTS.map(r => `
        <div class="card card-pad" style="margin-bottom:10px;">
          <strong>${r.reason}</strong>
          <div class="meta">${r.date} · ${r.status}</div>
        </div>
      `).join("") : emptyState("🚩","No reports submitted","Reports will appear here.")}
    </div>
  `);
}

function adminActivityPage(){
  return adminShell(`
    <div class="page-head">
      <div>
        <h1>Activity Log</h1>
        <p>Track important admin actions.</p>
      </div>
    </div>
    <div class="card card-pad">
      ${ACTIVITY_LOG.length ? ACTIVITY_LOG.map(a => `
        <div class="card card-pad" style="margin-bottom:10px;">
          <strong>${a.action}</strong>
          <div class="meta">${a.date} · ${a.details || ""}</div>
        </div>
      `).join("") : emptyState("🕒","No activity yet","Actions will appear here.")}
    </div>
  `);
}

function adminSettingsPage(){
  return adminShell(`
    <div class="page-head">
      <div>
        <h1>Settings</h1>
        <p>Admin preferences and controls.</p>
      </div>
    </div>
    <div class="card card-pad">
      ${emptyState("⚙️","Settings coming next","This page can be expanded later.")}
    </div>
  `);
}

function adminVerificationDetailPage(id){
  const req = VERIFICATION_REQUESTS.find(v => v.id === id);
  if(!req){
    return adminShell(`
      <div class="page-head">
        <div>
          <h1>Verification Request</h1>
          <p>Request not found.</p>
        </div>
      </div>
      <div class="card card-pad">
        ${emptyState("🛡️","No request found","Go back to the verification queue.")}
      </div>
    `);
  }

  const user = req.role === "student" ? studentById(req.userId) : companyById(req.userId);
  const badge = req.role === "student"
    ? verifBadge(user?.verificationStatus || req.status, "student")
    : verifBadge(user?.verified || req.status, "company");

  const title = req.role === "student" ? "Student Details" : "Employer Details";

  return adminShell(`
    <div class="page-head">
      <div>
        <h1>${title}</h1>
        <p>Review the submitted profile and uploaded documents.</p>
      </div>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <button class="btn btn-primary btn-sm" onclick="approveVerification('${req.id}')">Approve</button>
        <button class="btn btn-danger btn-sm" onclick="rejectVerificationPrompt('${req.id}')">Reject</button>
        <button class="btn btn-secondary btn-sm" onclick="requestMoreInfo('${req.id}')">Request More Information</button>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:18px;">
      <div class="card card-pad">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; flex-wrap:wrap;">
          <div class="company-row">
            ${avatar(user?.name || "Unknown","blue",56,18)}
            <div>
              <h2 style="font-size:20px;">${user?.name || "Unknown"}</h2>
              <div class="meta">${roleLabel(req.role)}</div>
            </div>
          </div>
          ${badge}
        </div>

        <div style="margin-top:18px;">
          <div class="field">
            <label>${req.role === "student" ? "University" : "Company"}</label>
            <input value="${req.role === "student" ? (user?.uni || "") : (user?.name || "")}" readonly>
          </div>

          <div class="field">
            <label>Registration Date</label>
            <input value="${req.submittedAt || "Unknown"}" readonly>
          </div>

          <div class="field">
            <label>Status</label>
            <input value="${req.status}" readonly>
          </div>
        </div>
      </div>

      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:12px;">Uploaded Documents</h3>
        ${req.documents && req.documents.length ? req.documents.map(doc => `
          <div class="card card-pad" style="margin-bottom:10px;">
            <strong style="font-size:14px;">${doc}</strong>
          </div>
        `).join("") : emptyState("📄","No documents uploaded","This request has no document list yet.")}
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:18px;">
      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:12px;">Profile Information</h3>
        ${req.role === "student" ? `
          <div class="field"><label>Student Information</label><input value="${user?.name || ""}" readonly></div>
          <div class="field"><label>University</label><input value="${user?.uni || ""}" readonly></div>
          <div class="field"><label>Faculty / Major</label><input value="${user?.major || ""}" readonly></div>
          <div class="field"><label>Student ID</label><input value="${user?.studentId || "Not provided"}" readonly></div>
          <div class="field"><label>Resume</label><input value="${user?.resumeUploaded ? "Uploaded" : "Not uploaded"}" readonly></div>
          <div class="field"><label>Portfolio</label><input value="${(user?.portfolio || []).length ? "Available" : "Empty"}" readonly></div>
        ` : `
          <div class="field"><label>Company Information</label><input value="${user?.name || ""}" readonly></div>
          <div class="field"><label>Business Registration</label><input value="${user?.registrationNumber || "Not provided"}" readonly></div>
          <div class="field"><label>Website</label><input value="${user?.website || ""}" readonly></div>
          <div class="field"><label>Official Email</label><input value="${user?.officialEmail || "Not provided"}" readonly></div>
          <div class="field"><label>Company Description</label><textarea rows="3" readonly>${user?.desc || ""}</textarea></div>
        `}
      </div>

      <div class="card card-pad">
        <h3 style="font-size:16px; margin-bottom:12px;">Review Notes</h3>
        <div class="field">
          <label>Admin Notes</label>
          <textarea id="admin-notes" rows="5" placeholder="Write review notes here..."></textarea>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="toast('Notes saved')">Save Notes</button>
      </div>
    </div>
  `);
}

function approveVerification(id){
  const req = byId(VERIFICATION_REQUESTS, id);
  if(!req) return;

  const notes = document.getElementById("admin-notes")?.value || "";
  req.status = "Approved";
  req.reviewedAt = "Jul 12, 2026";
  req.reviewerId = state.currentUser.id;
  req.rejectionReason = "";

  if(req.role === "student"){
    const s = studentById(req.userId);
    if(s) s.verificationStatus = "Verified";
    pushNotification(req.userId, "Verification approved", "Congratulations! Your student account has been verified.");
  } else {
    const c = companyById(req.userId);
    if(c) c.verified = "Verified";
    pushNotification(req.userId, "Verification approved", "Your company has been verified. You can now publish internship and entry-level jobs.");
  }

  logActivity("Approved verification", "verification", req.userId, notes || "Verification approved by admin");
  toast("Verification approved");
  go("admin-verifications");
}

function rejectVerificationPrompt(id){
  const reason = prompt("Enter rejection reason (optional):", "");
  rejectVerification(id, reason || "");
}

function rejectVerification(id, reason){
  const req = byId(VERIFICATION_REQUESTS, id);
  if(!req) return;

  req.status = "Rejected";
  req.reviewedAt = "Jul 12, 2026";
  req.reviewerId = state.currentUser.id;
  req.rejectionReason = reason;

  if(req.role === "student"){
    const s = studentById(req.userId);
    if(s) s.verificationStatus = "Rejected";
    pushNotification(req.userId, "Verification rejected", `Your student verification was rejected. ${reason ? "Reason: " + reason : ""}`.trim());
  } else {
    const c = companyById(req.userId);
    if(c) c.verified = "Rejected";
    pushNotification(req.userId, "Verification rejected", `Your company verification was rejected. ${reason ? "Reason: " + reason : ""}`.trim());
  }

  logActivity("Rejected verification", "verification", req.userId, reason || "No reason provided");
  toast("Verification rejected");
  go("admin-verifications");
}

function requestMoreInfo(id){
  const req = byId(VERIFICATION_REQUESTS, id);
  if(!req) return;

  const message = prompt("Request more information:", "");
  if(!message) return;

  req.status = "Needs More Info";
  req.reviewedAt = "Jul 12, 2026";
  req.reviewerId = state.currentUser.id;

  pushNotification(
    req.userId,
    "More information needed",
    message
  );

  logActivity("Requested more info", "verification", req.userId, message);
  toast("Request sent");
  go("admin-verifications");
}

function studentDetailBlock(student){
  if(!student) return emptyState("👤","Student not found","");

  return `
    <div class="card card-pad" style="margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:14px;">
        <div class="company-row">
          ${avatar(student.name, student.avatarColor, 56, 18)}
          <div>
            <h2 style="font-size:20px;">${student.name}</h2>
            <div class="meta">${student.uni} · ${student.major}</div>
            <div class="meta">${student.year}</div>
          </div>
        </div>
        ${verifBadge(student.verificationStatus, "student")}
      </div>

      <p style="margin:16px 0; color:var(--text-soft); line-height:1.7; font-size:14.5px;">${student.bio}</p>

      <div class="grid-2" style="margin-bottom:16px;">
        <div class="stat-card"><div class="label">University</div><div class="value" style="font-size:16px;">${student.uni}</div></div>
        <div class="stat-card"><div class="label">Faculty / Major</div><div class="value" style="font-size:16px;">${student.major}</div></div>
        <div class="stat-card"><div class="label">Resume</div><div class="value" style="font-size:16px;">${student.resumeUploaded ? "Uploaded" : "Not uploaded"}</div></div>
        <div class="stat-card"><div class="label">Verification</div><div class="value" style="font-size:16px;">${platformLabel("student", student.verificationStatus)}</div></div>
      </div>

      <h3 style="font-size:16px; margin:18px 0 10px;">Skills</h3>
      <div class="proj-tags">${student.skills.map(sk=>`<span class="skill-tag">${sk}</span>`).join("")}</div>

      <h3 style="font-size:16px; margin:18px 0 10px;">Portfolio</h3>
      ${student.portfolio && student.portfolio.length ? student.portfolio.map(p=>`
        <div class="card card-pad" style="margin-bottom:10px;">
          <strong style="font-size:14px;">${p.title}</strong>
          <div class="meta" style="margin-top:4px;">${p.type}</div>
          <p style="font-size:13px; color:var(--text-soft); margin-top:8px;">${p.desc || ""}</p>
        </div>
      `).join("") : emptyState("📁","No portfolio items yet","")}

      <h3 style="font-size:16px; margin:18px 0 10px;">Verification Documents</h3>
      <div class="card card-pad">
        ${student.verificationDocs && student.verificationDocs.length
          ? student.verificationDocs.map(doc=>`<div class="card card-pad" style="margin-bottom:10px;"><strong>${doc}</strong></div>`).join("")
          : emptyState("📄","No uploaded verification documents","")}
      </div>
    </div>
  `;
}

function companyDetailBlock(company){
  if(!company) return emptyState("🏢","Company not found","");

  return `
    <div class="card card-pad" style="margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:14px;">
        <div class="company-row">
          ${avatar(company.name, "blue", 56, 18)}
          <div>
            <h2 style="font-size:20px;">${company.name}</h2>
            <div class="meta">${company.industry} · ${company.location}</div>
            <div class="meta">${company.size}</div>
          </div>
        </div>
        ${verifBadge(company.verified, "company")}
      </div>

      <p style="margin:16px 0; color:var(--text-soft); line-height:1.7; font-size:14.5px;">${company.desc}</p>

      <div class="grid-2" style="margin-bottom:16px;">
        <div class="stat-card"><div class="label">Website</div><div class="value" style="font-size:16px;">${company.website || "Not provided"}</div></div>
        <div class="stat-card"><div class="label">Official Email</div><div class="value" style="font-size:16px;">${company.officialEmail || "Not provided"}</div></div>
        <div class="stat-card"><div class="label">Business Registration</div><div class="value" style="font-size:16px;">${company.registrationNumber || "Not provided"}</div></div>
        <div class="stat-card"><div class="label">Verification</div><div class="value" style="font-size:16px;">${platformLabel("company", company.verified)}</div></div>
      </div>

      <h3 style="font-size:16px; margin:18px 0 10px;">Verification Documents</h3>
      <div class="card card-pad">
        ${company.verificationDocs && company.verificationDocs.length
          ? company.verificationDocs.map(doc=>`<div class="card card-pad" style="margin-bottom:10px;"><strong>${doc}</strong></div>`).join("")
          : emptyState("📄","No uploaded verification documents","")}
      </div>
    </div>
  `;
}
function adminStudentDetailPage(id){
  const student = studentById(id);
  return adminShell(`
    <div class="page-head">
      <div>
        <h1>Student Details</h1>
        <p>Review the student profile and uploaded verification documents.</p>
      </div>
    </div>
    ${studentDetailBlock(student)}
  `);
}

function adminCompanyDetailPage(id){
  const company = companyById(id);
  return adminShell(`
    <div class="page-head">
      <div>
        <h1>Employer Details</h1>
        <p>Review the employer profile and uploaded verification documents.</p>
      </div>
    </div>
    ${companyDetailBlock(company)}
  `);
}
/* ============================================================
   ROUTER / RENDER
   ============================================================ */

function routeContent(){
  const r = state.route;
  if(!state.currentUser && (r.startsWith("student-") || r.startsWith("company-") || r.startsWith("admin-"))){
    // guard: require login for app routes
    return guardedPage();
  }
  switch(r){
    case "landing": return landingPage();
    case "browse-public": return browsePublicPage();
    case "project-public": return projectPublicPage();
    case "company-public": return companyPublicPage();
    case "student-dashboard": return studentDashboard();
    case "student-browse": return studentBrowse();
    case "student-saved": return studentSavedJobs();
    case "student-company-view": return studentCompanyView();
    case "student-applications": return studentApplications();
    case "student-portfolio": return studentPortfolio();
    case "student-verification": return studentVerificationPage();
    case "student-messages": return messagesPage("student");
    case "student-reviews": return studentReviews();
    case "student-settings": return studentSettings();
    case "company-dashboard": return companyDashboard();
    case "company-profile": return companyProfilePage();
    case "company-projects": return companyProjectsPage();
    case "company-post-project": return companyPostProject();
    case "company-applicants": return companyApplicants();
    case "company-student-view": return companyStudentView();
    case "company-messages": return messagesPage("company");
    case "company-reviews": return companyReviewsPage();
    case "company-settings": return companySettings();
    case "admin-dashboard": return adminDashboard();
    case "admin-verifications": return adminVerificationsPage();
    case "admin-users": return adminUsersPage();
    case "admin-jobs": return adminJobsPage();
    case "admin-reports": return adminReportsPage();
    case "admin-activity": return adminActivityPage();
    case "admin-settings": return adminSettingsPage();
    case "admin-verification-detail": return adminVerificationDetailPage(state.params.id);
    case "admin-student-detail": return adminStudentDetailPage(state.params.id);
    case "admin-company-detail": return adminCompanyDetailPage(state.params.id);
    default: return landingPage();
  }
}
function guardedPage(){
  return `
  ${navbar()}
  <div class="auth-wrap"><div class="auth-card" style="text-align:center;">
    <div style="font-size:34px; margin-bottom:10px;">🔒</div>
    <h2>Please log in to continue</h2>
    <p class="sub">You need an account to access this page.</p>
    <button class="btn btn-primary btn-block" onclick="openAuth('login')">Log In</button>
    <div class="auth-foot">New here? <a onclick="openAuth('register')" style="color:var(--blue); font-weight:600;">Create an account</a></div>
  </div></div>`;
}
function render(){
  document.getElementById("app").innerHTML = routeContent();
  if(window.lucide) lucide.createIcons();
}
render();