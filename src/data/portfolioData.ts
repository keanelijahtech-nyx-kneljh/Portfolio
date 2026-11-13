export type ProjectFilterGroup = 'Automation' | 'Applications';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  filterGroup: ProjectFilterGroup;
  category: 'AI Automation' | 'Workflow Automation' | 'Business Process Automation' | 'Vibe-Coded Application';
  status: 'Completed' | 'In Progress' | 'Prototype';
  projectTypeNote: string;
  shortDescription: string;
  problemSolved: string;
  solution: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  tools: string[];
  workflowNodes: string[];
  keyFeatures: string[];
  role: string;
  challenges: string[];
  futureImprovements: string[];
  hasInteractiveDemo?: boolean;
  caseStudyDetails: {
    overview: string;
    architectureSummary: string;
    triggerType: string;
    dataFlow: string[];
    testedFunctionality: string;
    outcomeValue: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: 'workflow' | 'ai' | 'leads' | 'app';
}

export type AccuracyLevel = 'Hands-on' | 'Familiar' | 'Exploring';

export interface TechItem {
  name: string;
  level: AccuracyLevel;
  kind: string;
  brandKey?: string;
}

export interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  items: TechItem[];
}

export const PORTFOLIO_INFO = {
  brandName: "KeanElijah.tech",
  fullName: "Kean Elijah",
  role: "AI Automation & Workflow Specialist",
  headline: "I Build Smarter Workflows Through AI & Automation.",
  bio: "I help simplify repetitive business processes through practical automation, AI integrations, and lightweight applications.",
  credibilityLine: "BS Information Technology · Cum Laude",
  aboutHeading: "Practical automation backed by an IT foundation.",
  aboutParagraphs: [
    "I'm a Bachelor of Science in Information Technology graduate from West Visayas State University.",
    "I have a strong interest in AI automation, workflow optimization, and practical software solutions. I enjoy exploring how technology can simplify repetitive tasks, organize information, and improve everyday business operations.",
    "Through independent projects and hands-on experimentation, I continue developing my ability to build useful digital solutions."
  ],
  credentials: [
    { label: "Degree", value: "BS Information Technology" },
    { label: "Distinction", value: "Cum Laude" },
    { label: "University", value: "West Visayas State University" },
    { label: "Location", value: "Iloilo City, Philippines" },
    { label: "Focus", value: "AI Automation & Workflow Systems" }
  ],
  email: "keanelijah.tech@gmail.com",
  linkedin: "https://www.linkedin.com/in/kneljh-tech/",
  availability: "Open to automation projects, remote roles, and entry-level opportunities."
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Connect everyday apps via Make.com and webhooks to automate repetitive manual tasks.",
    highlights: [],
    iconName: "workflow"
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Embed AI models into workflows for consistent lead triage, classification, and summaries.",
    highlights: [],
    iconName: "ai"
  },
  {
    id: "lead-capture",
    title: "CRM & Lead Management",
    description:
      "Organize inquiries and automate follow-ups across HubSpot CRM, sheets, and messaging.",
    highlights: [],
    iconName: "leads"
  },
  {
    id: "lightweight-apps",
    title: "Lightweight Application Development",
    description:
      "Build clean React and TypeScript interfaces and focused internal tools ready for APIs.",
    highlights: [],
    iconName: "app"
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "lead-qualification",
    title: "AI-Powered Lead Qualification",
    subtitle: "Automated Google Sheets intake, Gemini AI evaluation, and conditional Gmail routing",
    filterGroup: "Automation",
    category: "AI Automation",
    status: "Completed",
    projectTypeNote: "Independent Practice Project",
    shortDescription:
      "Automated an AI lead-triage pipeline in Make.com that monitors Google Sheets for incoming inquiries, evaluates lead details with Google Gemini AI, and routes follow-up emails. By separating submissions into Qualified and Need More Info branches, the workflow reduces manual spreadsheet sorting and keeps inquiry statuses synchronized.",
    problemSolved:
      "Teams tracking incoming inquiries in spreadsheets often review each row manually, decide whether an inquiry has enough detail, draft separate follow-up emails by hand, and update status columns individually—creating delays and inconsistent responses.",
    solution:
      "Connected Google Sheets, Google Gemini AI, a conditional Make.com Router, and Gmail into a single automated pipeline so every newly logged row is evaluated, routed to the right email sequence, and updated back in the tracking spreadsheet automatically.",
    image: "/assets/aistudio/image_835a73a4.png",
    imageAlt:
      "Make.com scenario diagram for AI-Powered Lead Qualification showing Google Sheets, Google Gemini AI, Router, and Gmail modules",
    imageCaption:
      "Make.com Scenario: Google Sheets Watch New Rows → Google Gemini AI → Router (Qualified / Need more info) → Gmail & Google Sheets Update",
    tools: ["Make.com", "Google Sheets", "Google Gemini AI", "Gmail"],
    workflowNodes: [
      "Google Sheets (Watch New Rows)",
      "Google Gemini AI (Generate a response)",
      "Router (1st: Qualified / 2nd: Need more info)",
      "Gmail (Send initial tailored email)",
      "Google Sheets (Update a Row status)",
      "Gmail (Send confirmation or follow-up notification)"
    ],
    keyFeatures: [
      "Polling trigger watching for new lead rows appended to Google Sheets",
      "AI-assisted lead evaluation powered by Google Gemini AI prompt instructions",
      "Two-path conditional routing dividing Qualified leads from Need More Info inquiries",
      "Automated row status updates written back to the source Google Sheet",
      "Branch-specific Gmail emails covering both prospect communication and follow-up notifications"
    ],
    role:
      "Designed the end-to-end Make.com scenario, authored the Google Gemini prompt instructions for consistent lead categorization, configured the Router filter rules for both branches, and mapped dynamic spreadsheet fields across Gmail and Google Sheets Update modules.",
    challenges: [
      "Structuring Gemini prompt instructions so outputs return predictable classification text that Router filters can evaluate reliably.",
      "Configuring Google Sheets row updates cleanly without causing duplicate scenario executions on modified rows.",
      "Mapping dynamic inquiry fields into distinct Gmail message templates for each routing branch."
    ],
    futureImprovements: [
      "Connect the Qualified branch directly to a CRM pipeline such as HubSpot.",
      "Parse Gemini responses as structured JSON to support multi-factor lead scoring.",
      "Add an optional Slack alert when high-priority inquiries arrive."
    ],
    caseStudyDetails: {
      overview:
        "An independent practice workflow built in Make.com to demonstrate how spreadsheet-based lead intake can be combined with AI evaluation and conditional routing to organize early-stage inquiry follow-up.",
      architectureSummary:
        "Scheduled polling scenario in Make.com that watches a Google Sheets intake log, sends new lead fields to Google Gemini AI for evaluation, and branches execution through a Router module into separate Gmail and Google Sheets update sequences.",
      triggerType: "Scheduled polling trigger (Google Sheets — Watch New Rows)",
      dataFlow: [
        "A new lead inquiry is added as a row in the tracked Google Sheets spreadsheet.",
        "Make.com's Google Sheets (Watch New Rows) module detects the new row and forwards the lead fields to Google Gemini AI.",
        "Google Gemini AI (Generate a response) evaluates the submitted information against qualification criteria.",
        "A Make.com Router inspects the Gemini classification and selects either the 1st branch (Qualified) or the 2nd branch (Need more info).",
        "On the Qualified branch, Gmail sends an immediate response email, Google Sheets updates the lead row status, and a second Gmail module dispatches a follow-up notification.",
        "On the Need more info branch, Gmail sends a clarification request email, Google Sheets updates the row status, and a final Gmail module logs the follow-up."
      ],
      testedFunctionality:
        "Built and tested in Make.com using sample lead entries across Google Sheets, Google Gemini AI, Router, and Gmail modules.",
      outcomeValue:
        "Demonstrates a practical, repeatable pattern for small businesses and founders managing leads in Google Sheets—standardizing initial qualification and follow-up emails without manual row-by-row triage."
    }
  },
  {
    id: "calendar-monitor-alert-system",
    title: "Calendar Monitor and Alert system",
    subtitle: "Google Apps Script change detection with Make.com multi-channel webhook routing",
    filterGroup: "Automation",
    category: "Workflow Automation",
    status: "Completed",
    projectTypeNote: "Independent Practice Project",
    shortDescription:
      "Built an event-driven monitoring workflow pairing Google Apps Script with Make.com to detect spreadsheet calendar additions or deletions and dispatch instant alerts. By sending structured JSON webhook payloads through a four-branch router, the system notifies teams across Gmail, Slack, and WhatsApp Business Cloud without manual sheet checks.",
    problemSolved:
      "Teams tracking schedules inside shared spreadsheets cannot easily see when rows are quietly added or deleted, and standard sheet triggers do not automatically distinguish row removals or route alerts across multiple messaging channels.",
    solution:
      "Developed custom snapshot-comparison logic in Google Apps Script that detects additions and deletions, sends a structured JSON payload via HTTP POST to a Make.com Custom Webhook, and routes notifications across Gmail, Slack, and WhatsApp Business Cloud.",
    image: "/assets/aistudio/image_f82b950a.png",
    imageAlt:
      "Make.com scenario diagram for Calendar Monitor and Alert system showing Custom Webhook, Router, Gmail, Slack, and WhatsApp Business Cloud",
    imageCaption:
      "Make.com Scenario: Custom Webhook → 4-Way Router (Deletion Alert, Addition Alert, WhatsApp routes) → Gmail, Slack & WhatsApp Business Cloud",
    tools: [
      "Make.com",
      "Google Apps Script",
      "Google Sheets",
      "Webhooks",
      "HTTP Requests",
      "JSON",
      "Gmail",
      "Slack",
      "WhatsApp Business Cloud"
    ],
    workflowNodes: [
      "Google Apps Script (Snapshot state comparison & HTTP POST JSON)",
      "Make.com Webhook (Custom webhook listener)",
      "Router (4-branch alert filter)",
      "Gmail (Send an email — Deletion & Addition routes)",
      "Slack (Send a Message — Team channel notifications)",
      "WhatsApp Business Cloud (Send a Message — Mobile alert branches)"
    ],
    keyFeatures: [
      "Custom Google Apps Script diffing logic that detects both added and deleted calendar rows",
      "Real-time JSON payload delivery via HTTP POST to a Make.com Custom Webhook",
      "Four-branch Make.com Router distinguishing Deletion Alert and Addition Alert events",
      "Multi-channel alert delivery spanning Gmail emails, Slack channel posts, and WhatsApp Business Cloud routes"
    ],
    role:
      "Wrote the Google Apps Script state-comparison script and HTTP POST webhook dispatcher, defined the JSON payload structure, configured the Make.com Custom Webhook and 4-branch Router filters, and connected Gmail, Slack, and WhatsApp Business Cloud modules.",
    challenges: [
      "Google Sheets edit triggers do not directly indicate when a row has been deleted, requiring snapshot comparison logic in Apps Script before sending the webhook.",
      "Formatting alert content cleanly across three distinct channels (Gmail email bodies, Slack channel messages, and WhatsApp message templates).",
      "Structuring filters so deletion events and addition events trigger only their matching notification paths."
    ],
    futureImprovements: [
      "Batch rapid consecutive spreadsheet edits into a single grouped digest payload.",
      "Write webhook delivery timestamps to a dedicated audit log tab inside Google Sheets.",
      "Finalize live WhatsApp Business Cloud template approval for production mobile alerts."
    ],
    caseStudyDetails: {
      overview:
        "An independent event-driven automation combining custom Google Apps Script logic with Make.com multi-channel routing to keep operations teams informed whenever tracked schedule records change.",
      architectureSummary:
        "Google Apps Script monitors Google Sheets state changes, formats an event JSON payload, and posts it to a Make.com Custom Webhook that fans out alerts across Gmail, Slack, and WhatsApp Business Cloud.",
      triggerType: "Instant Custom Webhook triggered via HTTP POST from Google Apps Script",
      dataFlow: [
        "A row is added to or removed from the monitored calendar Google Sheet.",
        "Google Apps Script compares the current sheet snapshot against the previously stored snapshot to identify additions or deletions.",
        "Apps Script constructs a JSON payload containing event metadata and sends an HTTP POST request to the Make.com Custom Webhook.",
        "Make.com's Router evaluates the incoming event payload across four conditional routes.",
        "Branches 1 and 2 route Deletion Alerts and Addition Alerts through Gmail (Send an email) followed by Slack (Send a Message).",
        "Branches 3 and 4 route corresponding mobile notifications to WhatsApp Business Cloud (Send a Message)."
      ],
      testedFunctionality:
        "Configured and tested in Make.com with custom JSON webhook payloads across the Webhook, Router, Gmail, and Slack modules; WhatsApp Business Cloud modules are mapped in the scenario for mobile alert routing.",
      outcomeValue:
        "Demonstrates how custom Google Apps Script triggers and Make.com webhooks can bridge spreadsheet scheduling tools with real-time team alerts across email and messaging platforms."
    }
  },
  {
    id: "employee-onboarding",
    title: "Employee Onboarding Automation",
    subtitle: "Webhook intake, HubSpot CRM contact & deal sync, and Slack/Gmail team notifications",
    filterGroup: "Automation",
    category: "Business Process Automation",
    status: "In Progress",
    projectTypeNote: "In-Progress Practice Build",
    shortDescription:
      "Designed an employee onboarding workflow in Make.com that receives new-hire intake data via webhook, records employee details in HubSpot CRM, and triggers follow-up tasks alongside Slack and Gmail notifications. By connecting core operational tools into a single structured flow, it helps organizations keep employee records organized and automate repetitive onboarding steps.",
    problemSolved:
      "Bringing a new employee into an organization often involves manually entering contact details into a CRM or directory, creating follow-up onboarding tasks, notifying teammates in chat, and sending welcome emails—repetitive administrative steps that are prone to delays and missed handoffs.",
    solution:
      "Built a Make.com scenario triggered by a Custom Webhook that automatically creates or updates an employee contact in HubSpot CRM and splits execution via a Router to retrieve deal/pipeline records, create onboarding tasks in HubSpot CRM, announce the new hire in Slack, and send onboarding emails through Gmail.",
    image: "/assets/aistudio/image_f0105e00.png",
    imageAlt:
      "Make.com scenario diagram for Employee Onboarding Automation showing Custom Webhook, HubSpot CRM, Router, Slack, and Gmail modules",
    imageCaption:
      "Make.com Scenario: Custom Webhook → HubSpot CRM (Create or Update a Contact) → Router → HubSpot Deal & Task / Slack & Gmail branches",
    tools: ["Make.com", "Webhooks", "JSON", "HubSpot CRM", "Slack", "Gmail"],
    workflowNodes: [
      "Webhook (Custom webhook listener)",
      "HubSpot CRM (Create or Update a Contact)",
      "Router (2-branch workflow split)",
      "HubSpot CRM (Get a Deal → Create a Task)",
      "Slack (Send a Message)",
      "Gmail (Send an email)"
    ],
    keyFeatures: [
      "Instant Custom Webhook intake prepared to accept structured JSON new-hire payloads",
      "HubSpot CRM Create or Update a Contact step to centralize employee records without duplicates",
      "Parallel two-branch Router splitting CRM task creation from team and email communication",
      "Automated HubSpot CRM follow-up task creation paired with Slack team alerts and Gmail onboarding emails"
    ],
    role:
      "Designed the employee onboarding workflow architecture in Make.com, configured and tested the Custom Webhook trigger and HubSpot CRM contact upsert module, structured the two-branch Router flow, and mapped the HubSpot Deal/Task, Slack, and Gmail modules.",
    challenges: [
      "Mapping incoming webhook JSON fields cleanly so HubSpot CRM updates existing records without creating duplicate contacts.",
      "Handling missing or optional deal associations on the HubSpot CRM Get a Deal and Create a Task branch during active testing.",
      "Coordinating internal Slack team announcements and external Gmail onboarding emails from the same intake event."
    ],
    futureImprovements: [
      "Complete dynamic error handling and deal-association fallback logic on the HubSpot CRM task branch.",
      "Finalize standardized templates for Slack onboarding announcements and Gmail welcome messages.",
      "Add input validation checks before processing incomplete webhook submissions."
    ],
    caseStudyDetails: {
      overview:
        "An in-progress employee onboarding automation scenario built in Make.com to help businesses organize new-hire intake, centralize contact and task tracking in HubSpot CRM, and coordinate team communication through Slack and Gmail.",
      architectureSummary:
        "Event-driven Make.com workflow triggered by a Custom Webhook that upserts a contact record in HubSpot CRM and branches through a Router to handle CRM deal/task creation alongside Slack and Gmail notifications.",
      triggerType: "Instant Custom Webhook (HTTP JSON intake)",
      dataFlow: [
        "New employee onboarding details arrive at the Make.com Custom Webhook as a structured JSON payload.",
        "HubSpot CRM (Create or Update a Contact) creates a new employee contact record or updates an existing match.",
        "A Make.com Router splits execution into two coordinated branches.",
        "On Branch 1, HubSpot CRM (Get a Deal) retrieves the associated record and triggers HubSpot CRM (Create a Task) to log onboarding follow-up work.",
        "On Branch 2, Slack (Send a Message) notifies the team about the new employee, followed by Gmail (Send an email) to dispatch onboarding communication."
      ],
      testedFunctionality:
        "In-progress build: Custom Webhook intake and HubSpot CRM contact creation/update have been executed and verified in Make.com; the downstream HubSpot CRM deal/task modules and Slack/Gmail notification actions are configured and undergoing final testing.",
      outcomeValue:
        "Shows how growing businesses can organize employee onboarding across HubSpot CRM, Slack, and Gmail—eliminating manual copy-pasting between intake forms, CRM tasks, and team notifications."
    }
  },
  {
    id: "google-tasks-kanban",
    title: "Google Tasks Kanban",
    subtitle: "Three-column React & TypeScript Kanban prototype structured for Google Tasks sync",
    filterGroup: "Applications",
    category: "Vibe-Coded Application",
    status: "Prototype",
    projectTypeNote: "Application Prototype",
    hasInteractiveDemo: true,
    shortDescription:
      "Built a responsive three-column Kanban web application prototype using React, TypeScript, and Tailwind CSS to organize tasks across To Do, In Progress, and Finished lanes. Designed to address the lack of workflow visibility in flat task lists, it includes an interactive browser sandbox and a documented architecture for planned Google Tasks and Calendar synchronization.",
    problemSolved:
      "Flat to-do lists make it hard for individuals and small teams to see which tasks are waiting, actively in progress, or finished at a glance, slowing down daily prioritization.",
    solution:
      "Developed a clean Kanban interface using AI-assisted development with React, TypeScript, and Tailwind CSS—allowing users to create tasks with due dates, view live column counters, and move cards between workflow lanes directly in the browser.",
    image: "/assets/aistudio/Screenshot_2026-10-22_103818_1d4d9a26.png",
    imageAlt:
      "Google Tasks Kanban application interface showing To Do, In Progress, and Finished columns",
    imageCaption:
      "Application Interface: Three-column Kanban board with To Do, In Progress, and Finished lanes, task cards, and due date badges",
    tools: ["React", "TypeScript", "Tailwind CSS", "Lucide React"],
    workflowNodes: [
      "Three-Column Kanban UI (TO DO / IN PROGRESS / FINISHED)",
      "React Client State (Task creation modal & lane movement controls)",
      "Sync Architecture Drawer (Documented Google API blueprint)",
      "Planned: Google OAuth 2.0 & Google Tasks API v1 Sync",
      "Planned: Google Calendar Events API Due-Date Hook"
    ],
    keyFeatures: [
      "Three-lane visual board (TO DO, IN PROGRESS, FINISHED) with live per-column task counters",
      "Interactive Add Task modal supporting custom titles, descriptions, and scheduled date labels",
      "Forward and backward card movement controls across workflow stages in local browser state",
      "Embedded Sync Architecture drawer clearly distinguishing implemented UI behavior from planned Google APIs"
    ],
    role:
      "Designed the Kanban board layout and task data model through AI-assisted development, built the interactive React and TypeScript prototype embedded in this portfolio, and documented the planned Google Tasks API v1 and Google Calendar API integration design.",
    challenges: [
      "Keeping the three-column board readable and balanced across both desktop and mobile viewports.",
      "Designing client-side task state structures cleanly so future Google Tasks API fields can map without major refactoring.",
      "Communicating clearly inside the UI which interactions run locally today versus which Google OAuth and Calendar features remain planned."
    ],
    futureImprovements: [
      "Implement Google OAuth 2.0 authentication and live Google Tasks API v1 synchronization.",
      "Connect due-date updates to the Google Calendar Events API.",
      "Add drag-and-drop card reordering alongside the existing directional lane buttons."
    ],
    caseStudyDetails: {
      overview:
        "A lightweight productivity web application prototype built with React, TypeScript, and Tailwind CSS to visualize daily tasks on a Kanban board and outline a future integration path with Google Tasks and Google Calendar.",
      architectureSummary:
        "Client-side React single-page application managing task objects in browser state across three status lanes, paired with an interactive sandbox accessible directly inside this portfolio.",
      triggerType: "Client-side interactive React UI (external Google API sync planned)",
      dataFlow: [
        "On load, React initializes sample task cards grouped across TO DO, IN PROGRESS, and FINISHED columns with live item counts.",
        "Clicking Add Task opens a modal form that validates the title and appends a new task card to the TO DO column.",
        "Clicking the forward or backward chevron buttons on a card updates its status in React state, immediately moving it between lanes.",
        "Clicking Sync Architecture displays the planned Google Tasks API v1 and Google Calendar Events API synchronization blueprint."
      ],
      testedFunctionality:
        "Working frontend prototype: task viewing, modal task creation, and directional lane movement work live in the embedded Interactive Demo. Drag-and-drop reordering, Google OAuth, and Google Tasks / Calendar API synchronization are planned features and are not yet implemented.",
      outcomeValue:
        "Demonstrates rapid UI prototyping with React and TypeScript and shows how lightweight internal tools can be structured cleanly before connecting live external APIs."
    }
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "automation-integration",
    title: "Automation & Integration",
    subtitle: "Workflow platforms and integration fundamentals",
    items: [
      { name: "Make.com", level: "Hands-on", kind: "Automation", brandKey: "make" },
      { name: "Webhooks", level: "Hands-on", kind: "Integration", brandKey: "webhook" },
      { name: "APIs", level: "Hands-on", kind: "Integration", brandKey: "api" },
      { name: "HTTP Requests", level: "Hands-on", kind: "Integration", brandKey: "http" },
      { name: "JSON", level: "Hands-on", kind: "Data format", brandKey: "json" },
      { name: "Google Apps Script", level: "Hands-on", kind: "Scripting", brandKey: "appsscript" }
    ]
  },
  {
    id: "crm-business",
    title: "CRM & Business Tools",
    subtitle: "Data storage, intake forms, and operational tools",
    items: [
      { name: "HubSpot", level: "Exploring", kind: "CRM", brandKey: "hubspot" },
      { name: "GoHighLevel", level: "Exploring", kind: "CRM", brandKey: "ghl" },
      { name: "Google Sheets", level: "Hands-on", kind: "Data store", brandKey: "sheets" },
      { name: "Airtable", level: "Hands-on", kind: "Database", brandKey: "airtable" },
      { name: "Tally", level: "Familiar", kind: "Forms", brandKey: "tally" },
      { name: "Gmail & Slack", level: "Hands-on", kind: "Messaging", brandKey: "gmail" }
    ]
  },
  {
    id: "ai-platforms",
    title: "AI Platforms",
    subtitle: "Models and environments for workflows and prototyping",
    items: [
      { name: "Google Gemini", level: "Hands-on", kind: "AI model", brandKey: "gemini" },
      { name: "Google AI Studio", level: "Hands-on", kind: "AI tool", brandKey: "aistudio" },
      { name: "Claude", level: "Hands-on", kind: "AI platform", brandKey: "claude" }
    ]
  },
  {
    id: "development",
    title: "Development",
    subtitle: "Frontend web fundamentals and version control",
    items: [
      { name: "JavaScript", level: "Hands-on", kind: "Language", brandKey: "js" },
      { name: "HTML", level: "Hands-on", kind: "Markup", brandKey: "html" },
      { name: "CSS", level: "Hands-on", kind: "Styling", brandKey: "css" },
      { name: "React & TypeScript", level: "Hands-on", kind: "UI prototype", brandKey: "js" },
      { name: "Git", level: "Familiar", kind: "Version control", brandKey: "git" },
      { name: "GitHub", level: "Hands-on", kind: "Hosting", brandKey: "github" }
    ]
  }
];
