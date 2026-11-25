import {
  Workflow,
  Calculator,
  Headset,
  PhoneCall,
  ScrollText,
  CalendarCheck,
  MonitorCog,
  type LucideIcon,
} from "lucide-react";

export interface SitePhoto {
  id: string;
  alt: string;
}

export const heroPhoto: SitePhoto = {
  id: "1560264280-88b68371db39",
  alt: "Open-plan corporate office with operations teams working at their desks",
};

export const heroContent = {
  eyebrow: "Improx Technologies",
  title: "Business Process Outsourcing",
  intro:
    "Business Process Outsourcing is the practice of entrusting defined business functions — workflow automation, back-office and finance, customer contact, compliance records and IT infrastructure — to a specialist partner who runs them with dedicated people, proven processes and the right technology.",
  highlights: [
    "Dedicated delivery teams",
    "Service-level governance",
    "Secure, compliant operations",
  ],
};

export interface Service {
  title: string;
  icon: LucideIcon;
  summary: string;
  detail: string;
  points: string[];
  photo: SitePhoto;
}

export const services: Service[] = [
  {
    title: "Workflow Automation",
    icon: Workflow,
    summary: "Repetitive, rule-based tasks automated so work moves between teams without delays.",
    detail:
      "We map your recurring processes, identify manual steps that slow your teams down and automate approvals, data transfers and notifications, with clear rules and exception handling.",
    points: ["Process mapping and analysis", "Automated approvals and routing", "Exception handling and monitoring"],
    photo: {
      id: "1552664730-d307ca884978",
      alt: "Operations team mapping a business workflow on a wall of planning notes",
    },
  },
  {
    title: "Back Office & finances",
    icon: Calculator,
    summary: "Administrative and finance operations handled accurately, on time and to your standards.",
    detail:
      "Our back-office and finance teams manage documentation, order processing, accounts payable and receivable, reconciliations and month-end support, keeping your records accurate and your cash flow visible.",
    points: ["Accounts payable and receivable", "Reconciliations and reporting", "Document and records administration"],
    photo: {
      id: "1554224155-6726b3ff858f",
      alt: "Finance specialist reviewing financial documents and calculations at a desk",
    },
  },
  {
    title: "CRM and helpdesk Software",
    icon: Headset,
    summary: "CRM and helpdesk platforms set up, managed and used to keep every customer request on track.",
    detail:
      "We configure and operate your CRM and helpdesk software — ticket queues, customer records, service levels and reporting — so every enquiry is logged, assigned and resolved with full visibility.",
    points: ["CRM configuration and data upkeep", "Ticket management and escalation", "Service-level reporting"],
    photo: {
      id: "1551434678-e076c223a692",
      alt: "Support specialists managing customer tickets at their monitors",
    },
  },
  {
    title: "Cloud Contact Center",
    icon: PhoneCall,
    summary: "Cloud-based voice, email and chat support delivered by trained agents for your customers.",
    detail:
      "Our cloud contact center connects your customers to trained agents across voice, email and chat, with call routing, recording and live performance dashboards — without on-site telephony infrastructure.",
    points: ["Inbound and outbound calling", "Omnichannel email and chat", "Call recording and quality review"],
    photo: {
      id: "1521737604893-d14cc237f11d",
      alt: "Contact center agents with headsets supporting customers from their laptops",
    },
  },
  {
    title: "Maintaining Audit logs",
    icon: ScrollText,
    summary: "Complete, accurate audit trails of business activity, ready for internal and external review.",
    detail:
      "We record, organise and maintain audit logs across your operations — transactions, system access and process changes — so you have a reliable trail for compliance checks, audits and investigations.",
    points: ["Activity and transaction logging", "Access and change records", "Audit-ready documentation"],
    photo: {
      id: "1553877522-43269d4ea984",
      alt: "Compliance professionals reviewing records on laptops in a quiet office",
    },
  },
  {
    title: "full Follow ups",
    icon: CalendarCheck,
    summary: "Every lead, customer and pending task followed up until it reaches a clear outcome.",
    detail:
      "We manage structured follow-ups with leads, customers, vendors and internal teams — reminders, calls and emails tracked in one place — so no enquiry, payment or commitment is left unanswered.",
    points: ["Lead and customer follow-ups", "Payment and vendor reminders", "Outcome tracking and reporting"],
    photo: {
      id: "1551836022-d5d88e9218df",
      alt: "Client relationship specialist in a follow-up conversation with a customer",
    },
  },
  {
    title: "Virtual Desktop Infrastructure",
    icon: MonitorCog,
    summary: "Secure virtual desktops that give your teams reliable access to work from anywhere.",
    detail:
      "We set up and manage Virtual Desktop Infrastructure so your employees access applications and data from centrally hosted, secure desktops — simplifying IT management, updates and data protection.",
    points: ["Virtual desktop setup and management", "Centralised security and access control", "Remote team enablement"],
    photo: {
      id: "1573164713988-8665fc963095",
      alt: "IT specialists reviewing virtual infrastructure on a laptop inside a server facility",
    },
  },
];

export interface ComparisonRow {
  factor: string;
  inHouse: string;
  improx: string;
}

export const whyContent = {
  eyebrow: "Why Improx Technologies",
  title: "The advantages of outsourcing with a dedicated partner",
  intro:
    "Running every operational function in-house ties up capital, management time and hiring capacity. Outsourcing to Improx turns those fixed overheads into a managed service that scales with your business.",
  photo: {
    id: "1542744173-8e7e53415bb0",
    alt: "Business leaders reviewing operational performance together in a conference room",
  } satisfies SitePhoto,
  advantages: [
    {
      title: "Operational efficiency",
      text: "Documented workflows, automation and dedicated process owners remove delays and rework, so routine tasks are completed faster and more consistently.",
    },
    {
      title: "Reduced overheads",
      text: "Salaries, office space, equipment and software licences become one predictable service fee, freeing capital for growth.",
    },
    {
      title: "Skilled, trained teams",
      text: "Experienced specialists are recruited, trained and retained by us, ready to work to your standards from the first day.",
    },
    {
      title: "Scalability on demand",
      text: "Capacity grows or reduces in line with seasonal peaks, new markets or changing volumes, without lengthy hiring cycles.",
    },
    {
      title: "Reliable service delivery",
      text: "Agreed service levels, regular quality audits and transparent reporting keep performance measurable month after month.",
    },
  ],
};

export const comparisonRows: ComparisonRow[] = [
  {
    factor: "Operating cost",
    inHouse: "Salaries, office space, equipment and software licences carried as fixed overheads.",
    improx: "A predictable service fee with infrastructure and tools already in place.",
  },
  {
    factor: "Talent & hiring",
    inHouse: "Lengthy recruitment, training and attrition managed by your own teams.",
    improx: "Trained specialists ready to start, with hiring and retention handled by us.",
  },
  {
    factor: "Scalability",
    inHouse: "Adding capacity for seasonal peaks or growth takes months of planning.",
    improx: "Teams scale up or down quickly in line with your business volumes.",
  },
  {
    factor: "Service coverage",
    inHouse: "Support is limited to standard office hours and local holidays.",
    improx: "Extended and round-the-clock coverage across time zones when you need it.",
  },
  {
    factor: "Process quality",
    inHouse: "Quality depends on individual employees and informal procedures.",
    improx: "Documented procedures, regular audits and measurable service levels.",
  },
  {
    factor: "Leadership focus",
    inHouse: "Managers spend valuable time supervising routine operational tasks.",
    improx: "Your leadership stays focused on customers, strategy and growth.",
  },
];

export const enquiryContent = {
  eyebrow: "Enquiry",
  title: "Let's Discuss Your Business Requirements",
  expectations: [
    "A review of your current processes and volumes",
    "A recommended delivery model and service levels",
    "A transparent proposal tailored to your scope",
  ],
  photo: {
    id: "1497215728101-856f4ea42174",
    alt: "Bright, quiet office workspace overlooking the city",
  } satisfies SitePhoto,
};
