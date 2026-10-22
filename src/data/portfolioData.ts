export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI Automation' | 'Workflow Automation' | 'Business Process Automation' | 'Vibe-Coded Application';
  status: 'Completed' | 'In Progress' | 'Prototype';
  shortDescription: string;
  problemSolved: string;
  solution: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  tools: string[];
  workflowNodes?: string[];
  role: string;
  challenges: string[];
  outcomes: string[];
  futureImprovements: string[];
  caseStudyDetails: {
    architectureSummary: string;
    triggerType: string;
    dataFlow: string[];
    testedFunctionality: string;
    notes?: string;
  };
  demoUrl?: string;
}

export const PORTFOLIO_INFO = {
  name: "Kean Elijah Janaban",
  role: "AI Automation Developer",
  tagline: "Workflow Automation · Vibe-Coded Applications",
  heroLabel: "AI AUTOMATION DEVELOPER",
  headlineWhite: "Less Manual Work.",
  headlineOrange: "More Intelligent Growth.",
  bio: "I’m Kean Elijah Janaban. I build practical AI automations and lightweight applications that streamline workflows, reduce repetitive tasks, and help businesses work smarter.",
  aboutHeading: "I build systems that make work simpler.",
  aboutIntro: "I’m Kean Elijah Janaban, an aspiring AI Automation Developer interested in solving everyday business problems through automation and practical software. I focus on connecting tools, reducing repetitive manual work, and creating workflows that are easier to manage and maintain.",
  credibilityLabels: [
    "AI-Powered Workflows",
    "Business Process Automation",
    "Practical Application Development"
  ],
  focusAreas: [
    {
      title: "Workflow Automation",
      description: "Connecting disparate applications and eliminating repetitive manual handoffs across spreadsheets, forms, and email.",
      icon: "workflow"
    },
    {
      title: "AI Integration",
      description: "Using AI models to support data extraction, lead categorization, and intelligent decision routing without unnecessary complexity.",
      icon: "ai"
    },
    {
      title: "Application Prototyping",
      description: "Building responsive, useful web interfaces and productivity tools that connect directly to daily business systems.",
      icon: "code"
    }
  ],
  email: "keanelijah.tech@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Open to Remote & Global Opportunities",
  availability: "Available for Automation Projects & Junior Roles"
};

export const TECHNOLOGIES = [
  { name: "Make.com", category: "Automation", note: "Scenario orchestration & routers" },
  { name: "OpenAI", category: "AI", note: "Prompt engineering & extraction" },
  { name: "Google Gemini AI", category: "AI", note: "Context processing & response generation" },
  { name: "Google Sheets", category: "Data", note: "Central records & dynamic queues" },
  { name: "Google Apps Script", category: "Scripting", note: "Custom triggers & spreadsheet events" },
  { name: "Gmail", category: "Communication", note: "Automated routing & notification alerts" },
  { name: "Typeform", category: "Intake", note: "Structured form responses & intake" },
  { name: "monday.com", category: "CRM / Ops", note: "Item creation & board automation" },
  { name: "Airtable", category: "Data", note: "Relational data tables & views" },
  { name: "JavaScript", category: "Code", note: "Custom scripts, webhooks & prototyping" },
];

export const AUTOMATION_PROJECTS: Project[] = [
  {
    id: "lead-qualification",
    title: "AI-Powered Lead Qualification",
    subtitle: "Automated triage, Gemini evaluation, and branching communication",
    category: "AI Automation",
    status: "Completed",
    shortDescription: "An AI-powered workflow designed to process incoming lead information, assess relevant details, and help organize leads for more efficient follow-up.",
    problemSolved: "Manually reviewing and sorting incoming leads takes considerable time, introduces response lag, and results in inconsistent follow-up quality.",
    solution: "An automated workflow that listens for new spreadsheet rows, passes lead details through a Google Gemini AI analysis node, evaluates criteria via a multi-branch router, and coordinates instant Gmail notifications while logging updated statuses back to Google Sheets.",
    image: "/assets/aistudio/image_835a73a4.png",
    imageAlt: "Make.com scenario diagram for AI-Powered Lead Qualification",
    imageCaption: "Live Make.com Scenario: Google Sheets row trigger → Gemini AI evaluation → Router → Dual Gmail & Sheet update pathways",
    tools: ["Make.com", "Google Gemini AI", "Google Sheets", "Gmail", "OpenAI"],
    workflowNodes: [
      "Google Sheets (Watch New Rows)",
      "Google Gemini AI (Generate a response)",
      "Router (1st: Qualified / 2nd: Need more Info)",
      "Gmail (Send tailored outreach)",
      "Google Sheets (Update a Row status)",
      "Gmail (Follow-up confirmation)"
    ],
    role: "Designed the end-to-end scenario architecture, established the prompt criteria for lead scoring, set up router conditional filters, and connected Google Sheets row synchronization.",
    challenges: [
      "Ensuring Gemini generates structured, unambiguous evaluations suitable for router filter conditions.",
      "Preventing duplicate execution loops when updating the same Google Sheet row.",
      "Formatting clean HTML email bodies dynamically based on AI response variables."
    ],
    outcomes: [
      "Inbound leads are evaluated and acknowledged in under 60 seconds of entry.",
      "Clear audit trail maintained in Google Sheets with categorization notes.",
      "High-priority qualified leads are flagged immediately for rapid representative follow-up."
    ],
    futureImprovements: [
      "Add CRM webhook sync directly into HubSpot or Salesforce.",
      "Incorporate phone number validation via Numverify or Twilio.",
      "Build sentiment scoring on free-form message submissions."
    ],
    caseStudyDetails: {
      architectureSummary: "Event-driven scenario triggered by Google Sheets row creation. Passes lead payload through Gemini API prompt module, evaluates lead intent against qualification criteria, and executes conditional branching.",
      triggerType: "Polling trigger (Watch New Rows) on Google Sheets",
      dataFlow: [
        "User fills lead form or row is inserted in Google Sheets",
        "Make.com catches the row payload (Name, Company, Budget, Needs)",
        "Prompt sent to Google Gemini AI to analyze fit and classify as 'Qualified' or 'Need more Info'",
        "Router inspects AI classification tag",
        "Branch 1 (Qualified): Sends priority alert via Gmail, marks row as Qualified",
        "Branch 2 (Need More Info): Dispatches clarifying email questionnaire to applicant, updates row status"
      ],
      testedFunctionality: "Fully configured and verified in Make.com scenario diagram with successful execution history.",
      notes: "Real workflow built and tested in Make.com with live Google Gemini and Gmail modules."
    }
  },
  {
    id: "vessel-calendar-monitor",
    title: "Google Sheets Vessel Calendar Change Monitor",
    subtitle: "Real-time state diffing via Apps Script with Make.com webhook routing",
    category: "Workflow Automation",
    status: "Completed",
    shortDescription: "A spreadsheet monitoring workflow designed to detect vessel calendar changes, record relevant events, and support notifications when monitored information changes.",
    problemSolved: "Changes to a shared vessel calendar can be difficult to track manually, especially when critical additions, deletions, or date shifts need to be identified and communicated promptly.",
    solution: "Combines custom Google Apps Script to compare spreadsheet states upon edits and fire structured webhook payloads, with Make.com routing events into distinct deletion and addition alert channels via Gmail.",
    image: "/assets/aistudio/Screenshot_2026-10-22_102302_53b861c8.png",
    imageAlt: "Make.com scenario diagram for Vessel Calendar Change Alerts",
    imageCaption: "Live Make.com Scenario: Custom Webhook listener → Decision Router → Gmail Deletion Alert & Addition Alert branches",
    tools: ["Google Sheets", "Google Apps Script", "Make.com", "Webhooks", "Gmail"],
    workflowNodes: [
      "Google Apps Script (onEdit / onChange state comparison)",
      "Make.com Webhook (Custom webhook receiver)",
      "Router (1st: Deletion Alert / 2nd: Addition Alert)",
      "Gmail (Send Deletion Alert email)",
      "Gmail (Send Addition Alert email)"
    ],
    role: "Created the Google Apps Script state tracking algorithm, structured the JSON webhook payload format, configured the Make.com webhook endpoint, and mapped email alert templates.",
    challenges: [
      "Google Sheets does not natively emit specific 'row deleted' events; designed an Apps Script shadow-cache comparison to calculate exact row removals.",
      "Handling batch edits without creating webhook throttling or email flooding.",
      "Parsing multi-column vessel schedule data into concise email alerts."
    ],
    outcomes: [
      "Immediate operational awareness when vessel schedules are altered or removed.",
      "Clear separation of addition versus deletion events for port coordinators.",
      "22+ real records queued and verified through Make.com execution pipelines."
    ],
    futureImprovements: [
      "Add direct Slack or Telegram channel alerts for field operations.",
      "Implement a daily summary digest for minor non-critical time adjustments.",
      "Add automatic confirmation reply tracking from port agents."
    ],
    caseStudyDetails: {
      architectureSummary: "Hybrid architecture utilizing Google Apps Script triggers on Google Sheets to capture schedule mutations, dispatching instant JSON payloads to a Make.com Custom Webhook listener for multi-path email distribution.",
      triggerType: "Instant Webhook trigger fired by Google Apps Script",
      dataFlow: [
        "Port operator edits or removes a vessel entry in Google Sheets",
        "Apps Script calculates delta between previous snapshot and current state",
        "Apps Script dispatches HTTP POST payload to Make.com Webhook URL",
        "Make.com parses event type ('Addition' vs 'Deletion')",
        "Router directs payload down the corresponding alert channel",
        "Gmail sends structured vessel notification to dispatch list"
      ],
      testedFunctionality: "Tested and validated with queue management in Make.com (queue showing active records waiting).",
      notes: "Designed for maritime logistics and calendar tracking operations."
    }
  },
  {
    id: "employee-onboarding",
    title: "Employee & Client Onboarding Automation",
    subtitle: "Intake form capture, buffered processing, and CRM board creation",
    category: "Business Process Automation",
    status: "In Progress",
    shortDescription: "A workflow designed to streamline onboarding by processing pending records, dispatching intake notifications, and updating onboarding statuses across operations boards.",
    problemSolved: "Manually preparing onboarding emails, gathering employee or client intake questionnaires, and manually creating operational tasks creates delays and administrative drag.",
    solution: "An automated workflow that listens for incoming Typeform responses, inserts a deliberate buffer sleep to ensure payload completion, pulls the complete response dataset, and automatically provisions new task items on Monday.com.",
    image: "/assets/aistudio/Screenshot_2026-10-22_102149_c2cce6a5.png",
    imageAlt: "Make.com scenario diagram for Employee & Client Onboarding",
    imageCaption: "Make.com Scenario: Typeform Watch Responses → Tools Sleep 4s buffer → Typeform List Responses → monday.com Create Item",
    tools: ["Make.com", "Typeform", "monday.com", "Google Sheets", "Gmail"],
    workflowNodes: [
      "Typeform (Watch Responses)",
      "Tools (Sleep 4s buffer)",
      "Typeform (List Responses)",
      "monday.com (Create an Item)",
      "Planned: CRM Direct Sync",
      "Planned: Automated Welcome Email"
    ],
    role: "Constructed the Make.com pipeline, implemented the timing buffer to prevent race conditions, and configured the field mapping between Typeform fields and Monday.com task columns.",
    challenges: [
      "Typeform webhook delivery can arrive before multipart form uploads finish processing; resolved by inserting a 4-second delay before retrieving complete response data.",
      "Complex nested JSON structures within questionnaire submissions requiring precise data parsing.",
      "Designing clean status handoffs so team members know when onboarding is underway versus awaiting verification."
    ],
    outcomes: [
      "Eliminates manual copying of intake form data into project boards.",
      "Guarantees every submission automatically spawns a tracked onboarding card.",
      "Foundation in place for complete CRM and email sequence integration."
    ],
    futureImprovements: [
      "Complete end-to-end integration with existing internal CRM system.",
      "Trigger automated personalized welcome email sequences via Gmail.",
      "Generate personalized employee / client onboarding documentation in Google Drive."
    ],
    caseStudyDetails: {
      architectureSummary: "Pipeline capturing intake form completions, pausing for data consistency, querying full question/answer pairs, and generating structured tracking cards inside monday.com boards.",
      triggerType: "Polling / Webhook trigger on Typeform (Watch Responses)",
      dataFlow: [
        "Candidate or client submits onboarding questionnaire in Typeform",
        "Make.com detects new submission event",
        "4-second sleep buffer ensures media and form payloads are finalized",
        "Make.com queries Typeform API for comprehensive response dataset",
        "New item created on designated monday.com board with contact details and role",
        "Next phase: CRM sync and automated welcome email dispatch"
      ],
      testedFunctionality: "Currently in progress / prototype. Core Make.com scenario with Typeform and monday.com modules configured; CRM integration phase actively underway.",
      notes: "Unfinished workflow currently being integrated with production CRM systems."
    }
  }
];

export const VIBE_CODED_PROJECT: Project = {
  id: "google-tasks-kanban",
  title: "Google Tasks Kanban",
  subtitle: "Visual task board designed for agile organization & productivity integration",
  category: "Vibe-Coded Application",
  status: "Prototype",
  shortDescription: "A Kanban-style task management interface designed to make tasks easier to organize visually, with a focus on connecting task management to everyday productivity tools.",
  problemSolved: "Default task lists are often linear, rigid, and disconnected from visual prioritization, making it hard to track active work versus backlog items.",
  solution: "A responsive, modern Kanban interface organizing tasks across To Do, In Progress, and Done stages with drag-and-drop mechanics, priority flags, tag grouping, and an architectural foundation for Google Tasks and Google Calendar synchronization.",
  image: "/assets/aistudio/Screenshot_2026-10-22_103818_1d4d9a26.png",
  imageAlt: "Google Tasks Kanban application interface showing To Do, In Progress, and Finished columns",
  imageCaption: "Actual Application Screenshot: Clean Kanban board with To Do (Launch Project, Write Documentation), In Progress, and Finished (Design UI Mockups)",
  tools: ["React", "TypeScript", "Tailwind CSS", "Web APIs", "Google Tasks API (Planned)", "Google Calendar API (Planned)"],
  workflowNodes: [
    "Kanban Viewport (To Do / In Progress / Done)",
    "Task State Store (Local state & persist)",
    "Priority & Tag Classifier",
    "Planned: Google OAuth 2.0 Client",
    "Planned: Google Tasks Sync Engine",
    "Planned: Google Calendar Date Hook"
  ],
  role: "Full-stack vibe-coded prototype developer. Designed UI layout, column state machines, drag-and-drop card interactions, and defined the API integration contracts.",
  challenges: [
    "Creating smooth card transitions without layout shifts across responsive columns.",
    "Designing a clean data schema that easily maps to Google Tasks resource schemas.",
    "Formulating two-way synchronization logic to handle conflicts between local card movement and remote calendar dates."
  ],
  outcomes: [
    "Functional interactive prototype with instant task creation, column movement, and tagging.",
    "Clean, intuitive visual hierarchy designed specifically for busy professionals.",
    "Clear architectural separation between current working prototype features and upcoming API sync."
  ],
  futureImprovements: [
    "Implement Google Tasks OAuth authorization for real-time task fetching.",
    "Two-way Google Calendar synchronization so date updates in Kanban reflect on user calendar.",
    "Subtask checklists and time tracking estimates."
  ],
  caseStudyDetails: {
    architectureSummary: "Frontend React SPA with modular board state. Built to interface with Google Workspace productivity APIs through structured webhook and REST contracts.",
    triggerType: "Client-side interactive UI with planned REST polling & webhook hooks",
    dataFlow: [
      "User creates or adjusts a task card in the Kanban interface",
      "Local state updates with priority flags and tags",
      "Planned integration: Sync engine maps card state to Google Tasks API",
      "Planned integration: Date modifications trigger corresponding Google Calendar event updates"
    ],
    testedFunctionality: "Interactive prototype fully functioning in the browser. Google Tasks and Calendar sync are in design and planning phase.",
    notes: "Distinguishes implemented UI features from planned Google Workspace API integrations."
  }
};

export const SKILLS_DATA = [
  {
    category: "Automation & Integration",
    skills: [
      { name: "Make.com", detail: "Advanced scenario building, multi-branch routers, iterator/aggregator modules, error handling & execution debugging" },
      { name: "Workflow Architecture", detail: "Designing resilient event pipelines, payload validation, retry routines, and modular steps" },
      { name: "Webhooks & HTTP APIs", detail: "Configuring custom webhook endpoints, REST payloads, API authorization & JSON formatting" },
      { name: "App Integrations", detail: "Bridging forms, databases, CRMs, and email systems into cohesive operational loops" }
    ]
  },
  {
    category: "AI Integration",
    skills: [
      { name: "Google Gemini AI", detail: "Connecting Gemini models into workflow scenarios for automated content evaluation and extraction" },
      { name: "OpenAI Integration", detail: "API orchestration for prompt-driven categorization, summary generation, and unstructured data parsing" },
      { name: "Structured Prompt Design", detail: "Authoring bulletproof prompts with strict JSON outputs and deterministic classification criteria" },
      { name: "AI Decision Routing", detail: "Passing model responses into downstream logic routers for automated conditional branches" }
    ]
  },
  {
    category: "Productivity & Data",
    skills: [
      { name: "Google Sheets", detail: "Dynamic operational queues, formulas, data schemas, and event triggers" },
      { name: "Google Apps Script", detail: "Custom JavaScript macros, onEdit triggers, state diffing, and outbound webhook dispatchers" },
      { name: "Gmail Automation", detail: "Automated dynamic HTML email dispatch, operational alert routing, and template variables" },
      { name: "Typeform & monday.com", detail: "Intake forms, question parsing, boards, items, and operational task tracking" }
    ]
  },
  {
    category: "Application Development",
    skills: [
      { name: "JavaScript / TypeScript", detail: "Modern ES6+ syntax, asynchronous programming, typed interfaces, and clean modules" },
      { name: "Vibe-Coded Prototyping", detail: "Rapid interactive application development with high visual quality and functional state" },
      { name: "React & Tailwind CSS", detail: "Component architecture, hooks, responsive layouts, dark technical aesthetic styling" },
      { name: "Web APIs & Architecture", detail: "RESTful integration patterns, state persistence, and responsive UI interaction design" }
    ]
  }
];
