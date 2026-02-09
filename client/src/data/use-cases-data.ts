import complianceImg from "@/assets/images/use-cases/compliance.png";
import techDocsImg from "@/assets/images/use-cases/tech-docs.png";
import maDiligenceImg from "@/assets/images/use-cases/ma-diligence.png";
import ottImg from "@/assets/images/use-cases/ott-platform.png";
import maritimeImg from "@/assets/images/use-cases/maritime-ops.png";
import hospitalityImg from "@/assets/images/use-cases/hospitality.png";
import startupsImg from "@/assets/images/use-cases/startups.png";

export const useCaseData = {
  "enterprise-compliance": {
    title: "Regulatory Compliance",
    subtitle: "Understanding Policy Evolution",
    image: complianceImg,
    challenge: "A regulation changes. Your compliance team needs to understand not just what shifted, but which internal policies are affected, when they were last updated, who approved the current versions, and whether current practices still align. That reasoning is spread across hundreds of documents with no explicit connections between them.",
    solution: "Ingest all regulatory documents and internal policies. Nexus automatically builds a graph connecting regulations to internal policies, policies to procedures, procedures to teams, and teams to the people who made the decisions.",
    examples: [
      {
        question: "Which internal policies reference GDPR Article 17?",
        answer: "The graph traces every connected policy, procedure, and team responsibility."
      },
      {
        question: "How did our data retention policy change after the January regulatory update?",
        answer: "The temporal layer shows exactly what changed, when, and what triggered it."
      },
      {
        question: "Are we compliant with the latest PCI-DSS requirements?",
        answer: "Agents search current policies, compare against the regulation, and identify gaps — with the reasoning chain visible."
      }
    ],
    conclusion: "The context graph does not just find the right documents. It reveals the chain of dependencies that makes compliance a connected system rather than a checklist.",
    capabilities: ["Knowledge Graphs", "Temporal Analysis", "Audit Logging", "RBAC"]
  },
  "technical-documentation": {
    title: "Technical Documentation",
    subtitle: "Mapping Hidden Dependencies",
    image: techDocsImg,
    challenge: "Your engineering organization maintains hundreds of API specs, architecture documents, runbooks, and design docs. Finding the right document is hard. Understanding how a change to one system will ripple through others is harder. That dependency knowledge lives in the heads of senior engineers who have been there long enough to remember.",
    solution: "Ingest all technical documentation. Nexus extracts services, APIs, databases, teams, and the relationships between them — depends on, maintained by, deployed to, replaced by.",
    examples: [
      {
        question: "Which services will be affected if we deprecate the v1 authentication endpoint?",
        answer: "The graph maps the dependency chain that no individual engineer could trace from memory."
      },
      {
        question: "Show me all changes to the payment service documentation this quarter",
        answer: "The temporal layer builds a timeline of what changed and why."
      },
      {
        question: "What is the deployment procedure for the recommendation engine?",
        answer: "Semantic search finds the runbook even if it is titled 'ML Pipeline Operations Guide.'"
      }
    ],
    conclusion: "Over time, the context graph becomes the institutional technical knowledge that used to exist only in the minds of long-tenured engineers. New team members query it on day one.",
    capabilities: ["Knowledge Graphs", "Temporal Analysis", "Multi-agent Orchestration"]
  },
  "ma-due-diligence": {
    title: "M&A Due Diligence",
    subtitle: "Confidential Due Diligence",
    image: maDiligenceImg,
    challenge: "During M&A, teams analyze thousands of documents from the target company — contracts, financials, IP portfolios, organizational charts — under tight timelines. The most important findings are often connections between documents: a change-of-control clause in a contract that affects a revenue stream tied to a specific team in a specific division. Those connections are invisible when reading documents one at a time.",
    solution: "Deploy Nexus on isolated infrastructure. Ingest all due diligence documents. The knowledge graph automatically maps corporate structure, contract relationships, IP dependencies, and financial connections.",
    examples: [
      {
        question: "Which contracts have change-of-control clauses?",
        answer: "Semantic search finds relevant clauses across every contract, regardless of how they are worded."
      },
      {
        question: "Map the organizational reporting structure",
        answer: "The graph builds the hierarchy from scattered organizational documents."
      },
      {
        question: "What revenue is tied to contracts expiring within 12 months?",
        answer: "A cross-domain query combining financial data with contract terms through the graph."
      }
    ],
    conclusion: "All processing happens on your infrastructure. No due diligence document touches a third-party server. The decision traces that determine billion-dollar outcomes stay within your security boundary.",
    capabilities: ["Self-hosted LLMs", "Per-customer Isolation", "Knowledge Graphs", "Multi-agent Synthesis"]
  },
  "ott-platforms": {
    title: "OTT Content Platforms",
    subtitle: "Understanding What Audiences Watch and Why",
    image: ottImg,
    challenge: "OTT platforms generate enormous volumes of content metadata, viewing telemetry, licensing agreements, and editorial decisions. The data exists — what content was watched, when, by which segments — but the reasoning behind programming decisions is lost. Why was a particular title promoted? What viewing pattern triggered the licensing renewal? That context is scattered across analytics dashboards, editorial meeting notes, licensing contracts, and strategy decks.",
    solution: "Ingest content catalogs, viewing analytics reports, licensing agreements, editorial strategy documents, and audience research. Nexus builds a graph connecting content to audiences, audiences to viewing patterns, patterns to programming decisions, and decisions to the business outcomes they produced.",
    examples: [
      {
        question: "Which content titles drove the subscriber growth in the 18-34 segment last quarter?",
        answer: "The graph traces viewing patterns to content, content to acquisition campaigns, and campaigns to subscriber metrics."
      },
      {
        question: "How has our sports content strategy evolved since the Premier League deal?",
        answer: "The temporal layer maps every programming decision, licensing change, and audience shift since the deal closed."
      },
      {
        question: "Which licensing agreements are tied to content that underperforms in the APAC region?",
        answer: "Cross-domain query connecting licensing contracts to regional viewing data through the content graph."
      }
    ],
    conclusion: "The context graph turns fragmented analytics into a connected picture of how content decisions drive business outcomes — and how those patterns evolve over time.",
    capabilities: ["Knowledge Graphs", "Temporal Analysis", "Multi-agent Synthesis", "Audit Logging"]
  },
  "maritime": {
    title: "Maritime Operations",
    subtitle: "Autonomous Inspection at Sea",
    image: maritimeImg,
    challenge: "Maritime vessels operate in environments with intermittent connectivity. Crews need to make decisions based on technical manuals, historical maintenance logs, weather patterns, and operational protocols. When the satellite link is down, they lose access to cloud-based intelligence.",
    solution: "Autonomous inspection at sea. The vessel carries its own context graph, reasoning against accumulated history without shore connectivity.",
    examples: [
      {
        question: "Identify the root cause of the engine vibration based on historical logs.",
        answer: "The local graph correlates current sensor readings with past maintenance records of similar issues."
      },
      {
        question: "What is the protocol for severe weather preparation for this specific vessel class?",
        answer: "Retrieves the exact procedure tailored to the ship's configuration and current cargo."
      }
    ],
    conclusion: "The vessel becomes an intelligent edge node, capable of complex reasoning and decision support even when completely disconnected from the central grid.",
    capabilities: ["Edge Deployment", "Offline Inference", "Knowledge Graphs"]
  },
  "hospitality": {
    title: "Hospitality",
    subtitle: "Personalized Guest Experience at Scale",
    image: hospitalityImg,
    challenge: "Hotel chains manage in-room entertainment systems, lobby displays, conference facility content, and guest experience programming across hundreds of properties. Content licensing, guest preference data, property-specific programming, and brand guidelines are managed by different teams with different systems. The reasoning behind content decisions is never captured.",
    solution: "Deploy Nexus edge nodes at each property. The context graph connects content catalogs to guest demographics, property characteristics, seasonal patterns, and brand programming guidelines — building a connected understanding of what works where and why.",
    examples: [
      {
        question: "Which in-room content categories have the highest engagement at our resort properties?",
        answer: "The graph maps content performance to property profiles across the portfolio."
      },
      {
        question: "How should we adjust lobby content programming for the holiday season?",
        answer: "Temporal comparison of seasonal programming decisions against guest satisfaction data."
      }
    ],
    conclusion: "Per-property context graphs capture local programming intelligence. The central deployment aggregates patterns across the portfolio — identifying what works at resort properties versus business hotels.",
    capabilities: ["Edge Deployment", "Per-property Isolation", "Knowledge Graphs", "Temporal Analysis"]
  },
  "startups": {
    title: "Startups & Growth",
    subtitle: "Automated Product Knowledge Graph",
    image: startupsImg,
    challenge: "Your product is growing fast. Documentation, feature specs, and technical details are scattered across repos, PRDs, and design docs. Understanding how features relate to customer needs, how technical dependencies connect, and how the product has evolved requires manual effort that nobody has time for.",
    solution: "Ingest all product documentation. Nexus extracts features, user stories, technical dependencies, and customer segments — then connects them in a queryable knowledge graph that no one had to curate manually.",
    examples: [
      {
        question: "Which features depend on the billing API?",
        answer: "Dependency mapping across product and technical docs."
      },
      {
        question: "What changed in the authentication flow between v2 and v3?",
        answer: "Version comparison with full change context."
      },
      {
        question: "Show me all features requested by enterprise customers",
        answer: "Cross-reference feature specs with customer segment data."
      }
    ],
    conclusion: "The graph deepens as the product grows. By the time you have hundreds of documents, the platform surfaces relationships that would take a product manager days to map manually.",
    capabilities: ["Knowledge Graph Auto-extraction", "Temporal Analysis", "Catalog Browsing"]
  }
};
