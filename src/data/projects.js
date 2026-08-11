// Edit this list to add, remove, or update projects.
// status: "live" | "progress" | "concept"
// category: "data" | "product"
export const PROJECTS = [
  {
    title: "sipt.ae",
    subtitle: "Shabbir Ibrahim Paints — company site rebuild",
    category: "product",
    status: "live",
    image: "sipt.png",
    description:
      "Rebuilt the marketing site with a warm, elegant design system and SEO groundwork so the paints business shows up for the searches that actually convert.",
    stack: ["React", "SEO", "Design System"],
    link: "https://sipt.ae",
    github: "",
  },
  {
    title: "Fakhri Tools Corporation",
    subtitle: "E-commerce site for a Nashik tools retailer",
    category: "product",
    status: "live",
    image: "fakhri_tools.png",
    description:
      "A React storefront built for a local hardware & tools retailer — product catalog, categories, and enquiry flow designed for a non-technical owner to manage.",
    stack: ["React", "E-commerce"],
    link: "",
    github: "",
  },
  {
    title: "PayTrack",
    subtitle: "Accounts payable tracker, built from Tally exports",
    category: "product",
    status: "live",
    image: "paytrack.png",
    description:
      "A React PWA that turns Tally-exported PDFs into a live payables view — hybrid Ledger + Invoice data model, FIFO settlement logic, and aging-bucket categorization on a Node/MongoDB backend.",
    stack: ["React", "Node.js", "MongoDB", "PWA"],
    link: "",
    github: "",
  },
  {
    title: "WardStream",
    subtitle: "Patient vitals streaming platform",
    category: "data",
    status: "progress",
    description:
      "Streaming ingestion via Event Hubs into Delta Live Tables, medallion architecture on Unity Catalog (bronze to silver to gold), Azure IAM wired through Access Connector and Managed Identity. Bronze and silver layers are live; gold-layer design is in progress.",
    stack: ["Databricks", "DLT", "Event Hubs", "Unity Catalog"],
    link: "",
    github: "",
  },
  {
    title: "RouteSentinel",
    subtitle: "Multi-cloud supply chain ops platform",
    category: "data",
    status: "concept",
    description:
      "Architecture in design: Azure Databricks + BigQuery via Lakehouse Federation, OpenMetadata for lineage, and a ZeroOps-style agentic watcher for pipeline health. Build starting soon.",
    stack: ["Databricks", "BigQuery", "OpenMetadata", "Agentic AI"],
    link: "",
    github: "",
  },
];
