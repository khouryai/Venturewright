/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT
 * ---------------------------------------------------------------------------
 * Repeating, structured copy lives here so the section components stay purely
 * presentational. Narrative prose sits inline in the components it belongs to.
 * ---------------------------------------------------------------------------
 */

/* --- The problem: stated problem → measurable outcome -------------------- */
export const DIAGNOSIS_RAIL = [
  "Stated problem",
  "Actual constraint",
  "Business architecture",
  "Measurable outcome",
];

/* --- Three ways Venturewright creates value ------------------------------ */
export const PILLARS = [
  {
    kicker: "Owner Independence",
    title: "Own the asset without being the operating system.",
    body: [
      "Many founders have built profitable companies that still depend on their personal judgment, relationships, approvals, and daily intervention.",
      "Venturewright helps redesign leadership, information flow, decision rights, incentives, accountability, and operating systems so founder involvement can become increasingly elective rather than operationally necessary.",
    ],
  },
  {
    kicker: "Constraint Architecture",
    title: "Solve the problem beneath the problem.",
    body: [
      "Growth may be limited by demand, sales, pricing, capacity, leadership, delivery, information, incentives, decision-making, or something the owner has not identified yet.",
      "Venturewright investigates the system, determines the highest-leverage constraint, and designs the intervention around it.",
    ],
  },
  {
    kicker: "Venture Architecture",
    title: "Build the next asset from what already exists.",
    body: [
      "Established businesses often contain underused customers, expertise, infrastructure, distribution, relationships, capabilities, or intellectual property.",
      "Venturewright evaluates those opportunities and, when the economics make sense, architects the business around them.",
    ],
  },
];

/* --- The Venturewright method -------------------------------------------- */
export const METHOD_STEPS = [
  { term: "Desired State", question: "What should become true?" },
  { term: "Current State", question: "What is actually happening today?" },
  {
    term: "Stated Constraint",
    question: "What does the owner believe is standing in the way?",
  },
  {
    term: "Actual Constraint",
    question: "What does the evidence suggest is really limiting the system?",
  },
  {
    term: "Architecture",
    question:
      "What must change in the economics, people, systems, incentives, decision rights, workflows, or business model?",
  },
  {
    term: "Implementation",
    question: "Who does what, in what sequence, using what resources?",
  },
  {
    term: "Measurable Outcome",
    question: "What evidence tells us whether the architecture worked?",
  },
];

/* --- Owner independence: the transformation ------------------------------ */
type TransformStage = {
  label: string;
  items?: string[];
  note?: string;
};

export const TRANSFORMATION: TransformStage[] = [
  {
    label: "Founder-dependent business",
    items: ["Decisions", "Knowledge", "Relationships", "Escalations", "Strategy"],
  },
  {
    label: "Business architecture",
    items: [
      "Leadership",
      "Decision Rights",
      "Information",
      "Incentives",
      "Systems",
      "Accountability",
    ],
  },
  {
    label: "Owner-optional asset",
    note: "Founder attention is deployed only where it creates disproportionate value.",
  },
];

/* --- Architecture in practice --------------------------------------------
 * These entries describe Matthew’s founder operating experience and business
 * architecture work performed before or outside formal Venturewright client
 * engagements. They are not Venturewright client results, and every entry
 * carries that attribution.
 * ------------------------------------------------------------------------ */
export const ATTRIBUTION =
  "Founder operating experience — methodology predates Venturewright.";

export const CASES = [
  {
    title: "Founder Independence",
    sector: "Professional Services",
    note: ATTRIBUTION,
    rows: [
      {
        label: "Starting Point",
        text: "A professional-services company was launched with approximately $10,000 of founder capital and no existing employees, clients, infrastructure, technology stack, or operating system.",
      },
      {
        label: "Growth",
        text: "The founders built the organization into a substantial seven-figure business.",
      },
      {
        label: "Constraint",
        text: "As the organization grew, critical functions and decisions remained dependent on the founders. Leadership gaps and key-person risk made founder involvement operationally necessary.",
      },
      {
        label: "Architecture",
        text: "Leadership structure, outcome ownership, executive reporting, decision rights, operating systems, organizational visibility, capacity management, and founder governance were progressively redesigned.",
      },
      {
        label: "Outcome",
        text: "By 2026, the business was capable of producing substantial owner economics while required founder operational involvement had fallen to only a few hours per week. Remaining founder involvement increasingly focused on elective strategic growth rather than keeping the organization functioning.",
      },
    ],
  },
  {
    title: "Succession & Owner Independence",
    sector: "Operating Business",
    note: `Anonymized. ${ATTRIBUTION}`,
    rows: [
      {
        label: "Starting Point",
        text: "A profitable owner-led business remained heavily dependent on the owner, who wanted a path toward greater freedom.",
      },
      {
        label: "Opportunity",
        text: "A capable existing employee wanted increased responsibility and potentially eventual ownership but lacked the capital required for a conventional acquisition.",
      },
      {
        label: "Architecture",
        text: "A succession pathway was designed around operational transition, incentives, ownership economics, and a lease-to-own / seller-financed structure rather than requiring an immediate conventional purchase.",
      },
      {
        label: "Outcome",
        text: "The architecture created a credible pathway for the owner to reduce day-to-day operating dependence while preserving the value of the business.",
      },
    ],
  },
  {
    title: "Operational Redesign",
    sector: "Hospitality",
    note: `Anonymized. ${ATTRIBUTION}`,
    rows: [
      {
        label: "Starting Point",
        text: "An established operating business had recurring workflow inefficiencies and unnecessary owner dependence inside everyday delivery.",
      },
      {
        label: "Architecture",
        text: "Customer flow, service delivery, communication systems, packaging, and operating processes were simplified and redesigned.",
      },
      {
        label: "Outcome",
        text: "The operating system became simpler and less dependent on continuous owner intervention.",
      },
    ],
  },
];

/* --- Examples of problems ------------------------------------------------ */
export const SYMPTOMS = [
  "The company is profitable, but I can’t leave.",
  "We need more leads — or at least I think we do.",
  "Our growth has stalled.",
  "I have someone who could run the company, but I don’t know how to structure it.",
  "We have a great opportunity but no bandwidth to build it.",
  "We have too many possible priorities.",
  "I want another revenue stream without creating another job for myself.",
  "We’re making money, but everything is harder than it should be.",
];

/* --- Why Venturewright --------------------------------------------------- */
export const PRINCIPLES = [
  {
    term: "Diagnose before prescribing",
    description:
      "The owner’s stated constraint is a hypothesis, not a conclusion.",
  },
  {
    term: "Think across functions",
    description:
      "The answer may live in growth, operations, leadership, finance, incentives, capacity, technology, organizational design, or somewhere between them.",
  },
  {
    term: "Stay attached to the outcome",
    description:
      "A recommendation that never changes the business has limited value.",
  },
];

/* --- Who it’s for -------------------------------------------------------- */
export const OWNER_SITUATIONS = [
  "The business makes money, but everything still comes through me.",
  "We’re working harder, but growth has stalled.",
  "I see the opportunity. I don’t have the bandwidth to build it.",
  "I don’t know if the real problem is sales, operations, leadership, or something else.",
  "I want the economics of ownership without another full-time job.",
  "We have ten strategic ideas and need to know which one actually matters.",
];

/* --- Engagement model ---------------------------------------------------- */
export const ENGAGEMENT_QUESTIONS = [
  "Where are you trying to go?",
  "What is happening today?",
  "What appears to be standing in the way?",
];

export const ENGAGEMENT_RAIL = [
  "Conversation",
  "Diagnosis",
  "Architecture",
  "Implementation",
  "Measurement",
];
