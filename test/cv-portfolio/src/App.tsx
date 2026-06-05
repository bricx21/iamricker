import { useState, useEffect, useRef } from "react";

function useCursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return pos;
}

type Section = "about" | "highlights" | "experience" | "projects" | "recommendations";

const NAV: { id: Section; label: string }[] = [
  { id: "about", label: "About" },
  { id: "highlights", label: "Highlights" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "recommendations", label: "Recommendations" },
];

const recommendations = [
  {
    name: "Belshazzar Coscolluela",
    title: "IT Helpdesk Engineer / Workplace Productivity Analyst",
    relationship: "Rick was senior to Belshazzar but didn't manage Belshazzar directly · March 2026",
    text: "I had the privilege of working with Rick during our time in Uber Tech Services, and he was the Senior L2 I consistently relied on for guidance, clarity, and technical direction. Rick is one of those rare tech leaders who can move effortlessly between deep technical problem-solving and people-focused leadership — and he does both with calm confidence. What stood out most was his ability to simplify complex issues without ever oversimplifying the work. He never made anyone feel small for asking questions; instead, he used every interaction as a chance to teach, empower, and elevate the team. When things got chaotic — and they often did — Rick was the person you wanted in the room. Any team focused on secure, scalable, user-centric technology would be lucky to have him.",
  },
  {
    name: "Virginia Tea",
    title: "Customer Success · Cloudflare",
    relationship: "Virginia worked with Rick on the same team · June 2025",
    text: "Rick's always been friendly, easy to talk to, and great to work with. He's always willing to help out and brings a positive attitude every time. He knows his stuff and often shares useful insights — observant, catching things others might miss — and approaches everything with a thoughtful mindset. Definitely someone you can count on and always a pleasure to work with.",
  },
  {
    name: "Gracia Santos",
    title: "Senior Partner Marketing Manager, Americas",
    relationship: "Gracia worked with Rick on different teams · June 2025",
    text: "It's rare to find someone as reliable, collaborative & people-centric as Rick. As the IT lead in Singapore, he not only brings deep technical expertise, but also leads with empathy, patience, and a team-player mindset. I've experienced his exceptional support firsthand — both while I was based in Singapore and during my transition to a U.S.-based role. His willingness to step in, communicate clearly, and ensure others feel supported regardless of time zone truly sets him apart as a trusted leader and collaborator.",
  },
  {
    name: "Allen Himes",
    title: "Account Manager · Computec Engineering | GITA Ambassador",
    relationship: "Allen was Rick's client · May 2025",
    text: "I had the pleasure of working with Rick Magarro during his time at Cloudflare, where he managed endpoints across multiple offices and countries. Rick stood out as an exceptionally well-organized and knowledgeable IT professional. He demonstrated a clear understanding of the procurement process, which made our interactions seamless and efficient. His attention to detail and ability to coordinate across regions ensured that projects progressed smoothly without unnecessary delays.",
  },
  {
    name: "Eric Jeon",
    title: "Manager, Solutions Engineering · Korea",
    relationship: "Eric worked with Rick on different teams · May 2025",
    text: "Rick consistently demonstrated a rare blend of strategic vision and operational excellence. They were not only trusted by their peers and management but also actively coached junior members, fostering a strong team culture built on integrity, ownership, and growth. From a project management perspective, Rick was exceptional — whether it was a large-scale infrastructure upgrade or cross-functional system integration, they led with clarity and precision, always delivering on time and within budget. Rick would be an incredible asset in any senior IT leadership role.",
  },
  {
    name: "Arif Ha",
    title: "Cloudflare (NYSE: NET)",
    relationship: "Arif worked with Rick on different teams · May 2025",
    text: "Rick reliably manages complex initiatives with precision and fosters effective collaboration across teams. His professionalism, technical acumen, and proactive approach make him an excellent candidate for senior IT project management roles.",
  },
  {
    name: "Jimmy Lim",
    title: "Network Engineer · TikTok",
    relationship: "Jimmy worked with Rick on different teams · August 2022",
    text: "Rick is the leader of the IT team in APAC — an integral part of the global IT team who has been helping manage the regional IT department so well. He is always helpful, responsive, and responsible for any related IT work. He will be a great addition to any company he works for.",
  },
  {
    name: "Pipat Jhundraindra",
    title: "Service Delivery Management",
    relationship: "Pipat worked with Rick at different companies · October 2017",
    text: "It is my pleasure to recommend Rick Magarro. He is very good in creative problem-solving, tireless work ethic, and willingness to do whatever it takes to deliver the best result and great customer satisfaction. He is highly intelligent and has superb analytical and communication skills. As a colleague, he is incredibly generous with his time and expertise.",
  },
  {
    name: "Barry Levy",
    title: "Early Uber | Investor",
    relationship: "Barry worked with Rick on different teams · October 2017",
    text: "I've had the pleasure of working with Rick at Uber for a few years and he has been an incredible source of support for myself and my teams. He is creative in his approach and does not rest until a problem is solved. Nothing is ever too much trouble for Rick! Plus an all-round great guy!",
  },
  {
    name: "Tomaso Rodriguez",
    title: "xCEO talabat | xUBER | xGrab",
    relationship: "Tomaso worked with Rick on different teams · September 2017",
    text: "Rick has built an awesome team at UBER — extremely attentive at every request, fast and always helpful. He takes on projects and problems with contagious enthusiasm, moving at a fast pace and ensuring high quality of work.",
  },
  {
    name: "Vidit Agrawal",
    title: "Founder @GajiGesa (exited) | Stripe, Uber | Fintech | HRTech",
    relationship: "Vidit was Rick's client · September 2017",
    text: "I have had the pleasure of working with Rick at Uber for the last 3 years. Rick was one of the first IT hires in Asia and he slowly built the IT support network for the region. Today, his team supports nearly a thousand people in Singapore. Rick is highly focused on excellence in customer support — anyone at Uber who has interacted with him or been supported by his team has always been pleased with the service.",
  },
  {
    name: "Stephen Man",
    title: "Ex-Head of APAC Legal · eBay, Uber, Yahoo | Coach | Legal Advisor",
    relationship: "Stephen worked with Rick on different teams · September 2017",
    text: "I had the good fortune of being supported by Rick for my technical needs during my entire tenure at Uber. He was always responsive and willing to spend the time necessary to solve our IT issues — no problem was too big or too small. Being part of a company growing at break-neck speed, Rick always ensured that the IT team ran like clockwork and delivered thoughtful, effective solutions.",
  },
  {
    name: "William M. Kelly",
    title: "Senior Attorney · FMCG, M&A, Commercial, Tech",
    relationship: "William worked with Rick on different teams · September 2017",
    text: "Rick is a pleasing and smart colleague who helped in all aspects of IT at Uber during my two and a bit years with the Singapore regional office. Recommend Rick for any fast-paced IT department.",
  },
];


function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}


function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const experience = [
  {
    period: "2025 — Present",
    role: "Senior Systems Engineer",
    company: "Sleek Technology Holdings (Pte Ltd)",
    companyUrl: "https://sleek.com",
    desc: "Reported to the CTO and led IT Infrastructure, Enterprise Systems, IAM, and endpoint operations. Designed and built internal system tools using GRC principles to strengthen governance, risk control, and compliance. Improved ITIL workflows, achieving 90%+ SLA/CSAT, 95%+ endpoint compliance, 99.9% uptime, 30% ticket reduction, and 25%+ SaaS savings.",
    tags: ["AI Automation", "AWS", "Endpoint Management", "GCP", "GitHub", "GRC", "IAM", "Infrastructure", "ITIL", "Python", "Railway", "Slack Bot Automation"],
  },
  {
    period: "2018 — 2025",
    role: "Global IT Operations Manager, Collaboration & Workspace",
    company: "Cloudflare, Inc",
    companyUrl: "https://cloudflare.com",
    desc: "Led global IAM and IT operations across 15 major offices, aligning services to ISO 27001 and SOC 2 governance. Managed 12 senior support engineers, maintaining 97% uptime and 90% CSAT. Built Okta, Terraform, and API automation for 5,000+ users, reducing provisioning by 65% and onboarding time by 40%. Led Tier 3/4 escalations, incident reviews, JML controls, vendor management, and AV/VC office deployments while cutting costs by 20%.",
    tags: ["AV/VC", "IAM", "ISO 27001", "JML", "Okta", "SOC 2", "Terraform", "Vendor Management"],
  },
  {
    period: "2014 — 2017",
    role: "Tech Services Support Engineer II",
    company: "Uber, Inc",
    companyUrl: "https://uber.com",
    desc: "Managed IAM integrations across LDAP, OneLogin, and Duo for 5,000+ global users, improving authentication reliability and access governance. Bridged business, IT, and vendors on system enhancements, risk reviews, and compliance reporting. Led RCA for access and system incidents, reducing repeat issues by 25%, and partnered with PMO and engineering to standardize global Agile rollouts using Jira and Confluence.",
    tags: ["Agile", "Confluence", "Duo", "IAM", "Jira", "LDAP", "OneLogin", "RCA"],
  },
  {
    period: "2013 — 2015",
    role: "Business Development Manager & IT Consultant",
    company: "Nature Treasure Group LLP",
    companyUrl: "",
    desc: "Managed scoping, budgeting, and delivery of client IT infrastructure projects across retail and services sectors. Translated business needs into technical specifications, documented requirements and deliverables, and built long-term client relationships through transparent communication, strong governance, and reliable project execution.",
    tags: ["Client Management", "Governance", "Infrastructure", "IT Consulting", "Project Delivery"],
  },
  {
    period: "2008 — 2013",
    role: "AppleCare Senior Tech Support & IT Operations Specialist",
    company: "Apple, Inc",
    companyUrl: "https://apple.com",
    desc: "Delivered Tier 2/3 technical support and IT process improvements across APAC, improving service turnaround by 30%. Automated internal inventory management to increase operational visibility and reduce stockouts by 35%. Supported procurement, audit, and compliance processes with data-driven insights for financial reviews and governance reporting.",
    tags: ["APAC Operations", "Compliance", "IT Process Improvement", "Procurement", "Tier 2/3 Support"],
  },
  {
    period: "2006 — 2008",
    role: "IT Business Specialist",
    company: "NCS Group",
    companyUrl: "https://ncs.co",
    desc: "Delivered end-user and infrastructure support for government agencies under strict compliance and SLA requirements. Maintained 99% system uptime through proactive issue management, standardized support processes, and reliable operational execution.",
    tags: ["Compliance", "Government IT", "Infrastructure Support", "SLA Management", "Uptime"],
  },
];

const projects = [
  {
    title: "SaaS License Optimization Dashboard",
    period: "February 2026",
    company: "Sleek Technology Holdings (Pte Ltd)",
    desc: "Built and managed an internal license audit tool to track seat usage across five core business applications. Automated license count reviews, identified inactive or underused accounts, and supported seat reclamation to reduce unnecessary SaaS spend. Improved visibility into application ownership, usage trends, and compliance readiness while helping IT and Finance optimize license allocation.",
    tags: ["Compliance & Audit Readiness", "Cost Optimization", "Data Analysis & Reporting", "IT Asset & Application Governance", "License Usage Auditing", "Process Automation", "SaaS License Management", "Stakeholder Coordination", "User Lifecycle Management", "Vendor & Application Ownership Tracking"],
    url: "https://sleek.com",
    thumbnail: "https://sleek.com/wp-content/uploads/2022/03/sleek-logo.svg",
    thumbnailBg: "#1a1a2e",
  },
  {
    title: "Jira ITSM Automation & Slack Service Desk Integration",
    period: "January 2026",
    company: "Sleek Technology Holdings (Pte Ltd)",
    desc: "Built and managed two Jira Service Management instances for IT operations and business technology support. Designed workflows, queues, SLAs, escalation paths, and Slack bot integrations for ticket intake, alerts, and real-time updates, improving service visibility, response coordination, and ITSM efficiency.",
    tags: ["Incident & Escalation Management", "ITSM / ITIL Process Design", "Jira Service Management", "Service Reporting & Governance", "Slack Bot Automation", "SLA Configuration", "Stakeholder Coordination", "Workflow Design"],
    url: "https://sleek.com",
    thumbnail: "https://wac-cdn.atlassian.com/dam/jcr:e348b562-4152-4cdc-8a55-3d297e509cc8/Jira%20Software@2x-blue.png",
    thumbnailBg: "#0052CC",
  },
  {
    title: "Global IT Onboarding Video Series",
    period: "Nov 2021 – Jan 2025",
    company: "Cloudflare",
    desc: "Developed a global IT onboarding video series to standardize system access, tools, policies, and workflow training across offices. Accelerated new-hire ramp-up through self-paced content, reinforced company culture and role expectations, and improved training consistency while saving IT support 72 hours per month over four years.",
    tags: ["Adobe Creative Suite", "Audio Transcription", "Camtasia", "Digital Photography", "Final Cut Pro", "Photography", "Project Management", "Technical Documentation", "Technical Writing", "Video Production"],
    url: "https://cloudflare.com",
    thumbnail: "https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg",
    thumbnailBg: "#F6821F",
  },
  {
    title: "Cloudflare Office Builds",
    period: "2018 – 2024",
    company: "Cloudflare",
    offices: [
      "Japan · Feb 2024 – Mar 2024",
      "Seoul · Oct 2023 – Nov 2023",
      "Sydney · Feb 2022 – Mar 2022",
      "Singapore · Aug 2018 – Feb 2019",
    ],
    desc: "Spearheaded IT equipment planning, procurement, and deployment, including meeting room AV systems, Zoom devices, and displays. Configured enterprise network solutions such as VLAN and SSID segmentation, and implemented secure wireless printing to improve workplace connectivity, collaboration, and operational efficiency.",
    tags: ["Employee Training", "Procurement", "Project Management", "Technical Documentation", "Technical Support"],
    url: "https://cloudflare.com",
    thumbnail: "https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg",
    thumbnailBg: "#F6821F",
  },
  {
    title: "Uber Singapore Office Build",
    period: "Aug 2016 – Mar 2017",
    company: "Uber",
    desc: "Oversaw IT equipment planning, procurement, and deployment while designing enterprise network solutions and secure wireless printing. Implemented structured documentation and delivered user training to improve technology adoption, operational consistency, and support readiness across the organization.",
    tags: ["Employee Training", "Procurement", "Project Management", "Technical Documentation", "Technical Support"],
    url: "https://uber.com",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    thumbnailBg: "#000000",
  },
  {
    title: "Stock Inventory Management System Using Bento",
    period: "June 2011",
    company: "Apple, Inc",
    desc: "Built and managed a stock inventory system using Bento to centralize asset tracking, improve inventory visibility, and streamline stock updates. Designed structured records, workflows, and reporting views to monitor item availability, usage, and replenishment needs. Improved operational accuracy, reduced manual tracking effort, and supported better procurement and audit readiness through cleaner inventory data.",
    tags: ["Audit Readiness", "Bento Database/Application Management", "Data Accuracy & Governance", "Data Structuring & Record Management", "Inventory Management", "IT Asset Tracking", "Operational Visibility", "Process Improvement", "Procurement Support", "Reporting & Dashboard Creation", "Stakeholder Coordination", "Workflow Design"],
    url: "https://apple.com",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    thumbnailBg: "#f5f5f7",
  },
];

export default function App() {
  const cursor = useCursorGlow();
  const [activeSection, setActiveSection] = useState<Section>("about");
  const sectionRefs = useRef<Record<Section, HTMLElement | null>>({
    about: null,
    highlights: null,
    experience: null,
    projects: null,
    recommendations: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const ref of Object.values(sectionRefs.current)) {
      if (ref) observer.observe(ref);
    }

    return () => observer.disconnect();
  }, []);

  function scrollTo(id: Section) {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      style={{ background: "#0a192f", minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif", position: "relative" }}
      className="text-slate-400"
    >
      {/* Cursor glow overlay — exactly like brittanychiang.com */}
      <div
        aria-hidden
        style={{
          pointerEvents: "none",
          position: "fixed",
          inset: 0,
          zIndex: 50,
          transition: "background 0.1s ease",
          background: `radial-gradient(600px at ${cursor.x}px ${cursor.y}px, rgba(29, 78, 216, 0.13), transparent 80%)`,
        }}
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-16 lg:flex lg:gap-4">

        {/* LEFT — Fixed panel */}
        <header className="lg:sticky lg:top-0 lg:h-screen lg:w-[45%] lg:flex lg:flex-col lg:justify-between py-16 lg:py-24 shrink-0">
          <div>
            {/* Name + title */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 mb-2">
                Rick Magarro
              </h1>
              <h2 className="text-base font-medium text-slate-200 mb-1 leading-snug">
                Senior IAM & IT Systems Engineer
              </h2>
              <p className="text-xs mb-4" style={{ color: "#64ffda" }}>
                Open to roles that fit my skillset across business technology, IT operations, IAM, security and infrastructure, global & remote
              </p>
              <p className="text-sm leading-relaxed max-w-xs mb-5">
                Over 15 years building secure, scalable IT systems, with a focus on identity and access management, compliance, and automating the operations that slow teams down.
              </p>
              <ul className="space-y-2 max-w-xs">
                {[
                  "Managed IAM & IT ops for 5,000+ users across 15+ global offices",
                  "Saved 72 hrs/month via automated onboarding video series",
                  "Deployed 4 international offices end-to-end across APAC & EMEA",
                  "Built SaaS license audit tool cutting unnecessary spend across 5 apps",
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
                    <span className="mt-0.5 shrink-0" style={{ color: "#64ffda" }}>▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav */}
            <nav className="hidden lg:block">
              <ul className="space-y-4">
                {NAV.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="group flex items-center gap-4 py-1 transition-all"
                    >
                      <span
                        className="block transition-all duration-200"
                        style={{
                          width: activeSection === id ? "64px" : "32px",
                          height: "1px",
                          background: activeSection === id ? "#64ffda" : "#475569",
                        }}
                      />
                      <span
                        className="text-xs font-bold tracking-widest uppercase transition-colors"
                        style={{ color: activeSection === id ? "#64ffda" : "#94a3b8" }}
                      >
                        {label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social icons + CTA */}
          <div className="flex flex-col gap-4 mt-10 lg:mt-0">
            <a
              href="https://www.linkedin.com/in/rickmagarro/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all w-fit"
              style={{ borderColor: "#64ffda", color: "#64ffda" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(100,255,218,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <LinkedinIcon />
              Connect on LinkedIn
            </a>
            <div className="flex items-center gap-5">
              <a
                href="mailto:rickersite@gmail.com"
                className="text-xs transition-colors"
                style={{ color: "#94a3b8" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                rickersite@gmail.com
              </a>
            </div>
          </div>
        </header>

        {/* RIGHT — Scrollable content */}
        <main className="lg:w-[55%] py-16 lg:py-24 space-y-28">

          {/* ABOUT */}
          <section
            id="about"
            ref={(el) => { sectionRefs.current.about = el; }}
          >
            <div className="sticky top-0 lg:hidden z-10 py-4 mb-4" style={{ background: "#0a192f" }}>
              <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#64ffda" }}>About</h2>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                I'm a tech leader, IAM and Senior Systems Engineer with over 15 years spent building secure, scalable IT systems. My focus is{" "}
                <span style={{ color: "#ccd6f6" }}>identity and access management</span>—helping organizations with 5,000+ employees stay compliant with GDPR, ISO 27001, and SOC 2.
              </p>
              <p>
                Day to day, I work hands-on with{" "}
                <span style={{ color: "#ccd6f6" }}>Okta, Entra ID, JumpCloud, Jamf, and Microsoft Intune</span>, and I build Slack bot workflows to automate IT operations. What drives me is solving hard problems: taking complex infrastructure and turning it into something{" "}
                <span style={{ color: "#ccd6f6" }}>simple, automated, and repeatable</span>.
              </p>
            </div>

            {/* Skills grid */}
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#8892b0" }}>Core Stack</p>
              <div className="space-y-5 text-xs font-mono">
                {[
                  {
                    category: "Technology Operations Leadership",
                    items: ["Break/Fix Support", "Incident Management", "ITSM", "Post-Incident Reviews", "Process Design", "Remote Troubleshooting", "Root Cause Analysis", "SLA/SLO Management", "Stakeholder Management", "System Outages", "Technical Project Management", "Tier 3/4 Technical Escalations", "Workforce and Capacity Planning"],
                  },
                  {
                    category: "Infrastructure, Platforms & Enterprise Tools",
                    items: ["Atlassian", "AWS", "Cisco", "Confluence", "Fortinet", "GAM (Google Apps Manager)", "Google Cloud Platform (GCP)", "Jira", "Kubernetes", "Microsoft Azure", "PowerShell", "Python", "ServiceNow", "Slack", "Terraform", "Zendesk"],
                  },
                  {
                    category: "Identity & Access Management (IAM)",
                    items: ["Active Directory", "API Integrations", "Joiner-Mover-Leaver (JML)", "JumpCloud", "Microsoft Entra ID (Azure AD)", "Multi-Factor Authentication (MFA)", "Okta", "OneLogin", "SCIM", "Single Sign-On (SSO)", "User Lifecycle Management"],
                  },
                  {
                    category: "Endpoint Management & Device Administration",
                    items: ["Device Lifecycle Management", "Endpoint Security", "Jamf", "macOS Support", "Microsoft Intune", "Mobile Device Management (MDM)", "Patch Management", "Unified Endpoint Management (UEM)", "Windows Support"],
                  },
                  {
                    category: "Collaboration & AV Systems",
                    items: ["Crestron", "Google Meet", "Logitech", "Neat", "Zoom"],
                  },
                  {
                    category: "AV Operations & Support",
                    items: ["AV Room Design", "AV Troubleshooting", "Conference Room Deployments", "Meeting Room Technology Support", "Office Buildouts", "Technical Event Management"],
                  },
                  {
                    category: "Compliance & Security",
                    items: ["GDPR", "Information Security", "ISO 27001", "Security Incident Response", "SOC 2", "Vendor Management"],
                  },
                ].map(({ category, items }) => (
                  <div key={category}>
                    <p className="text-xs uppercase tracking-widest mb-2 font-bold" style={{ color: "#64ffda" }}>{category}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {items.map((item) => (
                        <div key={item} className="flex items-center gap-1">
                          <span style={{ color: "#64ffda" }}>▹</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HIGHLIGHTS */}
          <section
            id="highlights"
            ref={(el) => { sectionRefs.current.highlights = el; }}
          >
            <div className="sticky top-0 lg:hidden z-10 py-4 mb-4" style={{ background: "#0a192f" }}>
              <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#64ffda" }}>Highlights</h2>
            </div>
            <div className="space-y-4">
              {[
                { metric: "5,000+ users", detail: "Led global IAM & IT operations at Cloudflare across 15+ offices in APAC, EMEA, and the Americas — managing provisioning, compliance, and endpoint security at scale." },
                { metric: "72 hrs/month saved", detail: "Created a global IT onboarding video series at Cloudflare that standardized training across all offices and reduced IT support overhead for over 4 years." },
                { metric: "4 international offices", detail: "Spearheaded end-to-end IT deployments for Cloudflare's offices in Japan, South Korea, Australia, and Singapore — covering AV, networking, and endpoint setup." },
                { metric: "ITSM & automation", detail: "Built two Jira Service Management instances and Slack bot workflows at Sleek Technology, improving ticket visibility, SLA adherence, and cross-team response coordination." },
                { metric: "SaaS cost reduction", detail: "Developed an internal SaaS license audit tool at Sleek that surfaced underused seats across five core applications, directly supporting cost optimisation and procurement decisions." },
                { metric: "15+ years", detail: "Delivered enterprise IT across Cloudflare, Uber, Apple, and government sectors — spanning IAM, infrastructure, endpoint management, AV systems, and compliance." },
              ].map(({ metric, detail }) => (
                <div
                  key={metric}
                  className="group relative rounded-lg p-4 -mx-4 transition-all"
                  style={{ transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(100,255,218,0.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0" style={{ color: "#64ffda" }}>▹</span>
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold" style={{ color: "#ccd6f6" }}>{metric} — </span>
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section
            id="experience"
            ref={(el) => { sectionRefs.current.experience = el; }}
          >
            <div className="sticky top-0 lg:hidden z-10 py-4 mb-4" style={{ background: "#0a192f" }}>
              <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#64ffda" }}>Experience</h2>
            </div>

            <div className="space-y-10">
              {experience.map((job) => (
                <div
                  key={job.role}
                  className="group relative grid sm:grid-cols-8 gap-2 sm:gap-6 rounded-lg p-4 -mx-4 transition-all cursor-default"
                  style={{ transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(100,255,218,0.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {/* Date */}
                  <div className="sm:col-span-2 mt-1">
                    <p className="text-xs font-mono whitespace-nowrap" style={{ color: "#8892b0" }}>
                      {job.period}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="sm:col-span-6 space-y-2">
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                      style={{ color: "#ccd6f6" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#64ffda")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#ccd6f6")}
                    >
                      {job.role} · {job.company}
                      <span className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                        <ExternalIcon />
                      </span>
                    </a>
                    <p className="text-sm leading-relaxed">{job.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full px-3 py-1 text-xs font-medium font-mono"
                          style={{ background: "rgba(100,255,218,0.1)", color: "#64ffda" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </section>

          {/* PROJECTS */}
          <section
            id="projects"
            ref={(el) => { sectionRefs.current.projects = el; }}
          >
            <div className="sticky top-0 lg:hidden z-10 py-4 mb-4" style={{ background: "#0a192f" }}>
              <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#64ffda" }}>Projects</h2>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "#8892b0" }}>
              Selected projects spanning automation, cost optimisation, onboarding, ITSM, and global office builds.
            </p>

            <div className="space-y-6">
              {projects.map((p) => (
                <a
                  key={p.title}
                  href={p.url || undefined}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-4 rounded-lg p-4 -mx-4 transition-all cursor-pointer"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(100,255,218,0.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {/* Thumbnail */}
                  {p.thumbnail && (
                    <div
                      className="shrink-0 rounded overflow-hidden flex items-center justify-center"
                      style={{ width: 108, height: 76, background: p.thumbnailBg ?? "#112240", flexShrink: 0 }}
                    >
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        style={{ width: "80%", height: "80%", objectFit: "contain" }}
                        onError={(e) => {
                          const el = e.currentTarget as HTMLImageElement;
                          el.style.display = "none";
                          const parent = el.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span style="color:white;font-size:11px;font-weight:600;text-align:center;padding:4px;">${p.company}</span>`;
                          }
                        }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p
                        className="text-sm font-semibold transition-colors"
                        style={{ color: "#ccd6f6" }}
                      >
                        {p.title}
                      </p>
                      {p.url && (
                        <span style={{ color: "#64ffda" }} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ExternalIcon />
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono mb-2" style={{ color: "#64ffda" }}>
                      {p.company} · {p.period}
                    </p>
                    {p.offices && (
                      <div className="flex flex-wrap gap-x-4 gap-y-0.5 mb-2">
                        {p.offices.map((o) => (
                          <span key={o} className="text-xs font-mono flex items-center gap-1" style={{ color: "#8892b0" }}>
                            <span style={{ color: "#64ffda" }}>▹</span>{o}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#8892b0" }}>{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full px-3 py-0.5 text-xs font-medium font-mono"
                          style={{ background: "rgba(100,255,218,0.1)", color: "#64ffda" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </section>

          {/* RECOMMENDATIONS */}
          <section
            id="recommendations"
            ref={(el) => { sectionRefs.current.recommendations = el; }}
          >
            <div className="sticky top-0 lg:hidden z-10 py-4 mb-4" style={{ background: "#0a192f" }}>
              <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#64ffda" }}>Recommendations</h2>
            </div>

            <div className="space-y-6">
              {recommendations.map((rec) => (
                <div
                  key={rec.name}
                  className="rounded-lg p-5 transition-all"
                  style={{ background: "rgba(100,255,218,0.03)", border: "1px solid rgba(100,255,218,0.08)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(100,255,218,0.06)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,255,218,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(100,255,218,0.03)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,255,218,0.08)";
                  }}
                >
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#8892b0" }}>
                    "{rec.text}"
                  </p>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#ccd6f6" }}>{rec.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#8892b0" }}>{rec.title}</p>
                    <p className="text-xs mt-1 italic" style={{ color: "#4a5568" }}>{rec.relationship}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer note */}
          <footer className="pb-8">
            <p className="text-xs leading-relaxed" style={{ color: "#8892b0" }}>
              Designed in <strong style={{ color: "#ccd6f6" }}>Figma</strong>, coded in <strong style={{ color: "#ccd6f6" }}>Visual Studio Code + Cursor</strong>. Built with Next.js and Tailwind CSS, deployed on <strong style={{ color: "#ccd6f6" }}>Vercel</strong>. Typography set in <strong style={{ color: "#ccd6f6" }}>Inter</strong>.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
