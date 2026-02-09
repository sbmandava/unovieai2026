# Platform

> How Unovie's Nexus platform turns documents into understanding.

---

## From Documents to Context

Your organization produces documents constantly — policies, specs, meeting notes, decision records, contracts. Each document captures a fragment of organizational knowledge. But the real value is not in any single document. It is in the connections between them.

A policy change references an audit finding. The audit finding references a customer incident. The incident traces back to an understaffed integration team. The understaffing traces back to a cost reduction initiative. That chain — the *context* — is what Nexus builds.

```
  YOUR DOCUMENTS                          YOUR CONTEXT GRAPH
  ──────────────                          ──────────────────

  Policy documents                        ┌──────────────────────────────────┐
  Meeting notes                           │                                  │
  Technical specs            ──────►      │  Entities                        │
  Decision records                        │  (people, products, teams,       │
  Process guides                          │   APIs, policies, regulations)   │
  Contract terms                          │                                  │
  Architecture docs                       │  Relationships                   │
                                          │  (depends on, replaced by,       │
                                          │   approved by, caused by,        │
                                          │   governs, maintained by)        │
                                          │                                  │
                                          │  Decision traces                 │
                                          │  (why this option, not that one) │
                                          │                                  │
                                          │  Temporal evolution              │
                                          │  (when things changed, what      │
                                          │   triggered the change, how      │
                                          │   knowledge drifted over time)   │
                                          │                                  │
                                          └──────────────────────────────────┘
```

No manual curation. The AI reads your documents and builds the graph. Every new document deepens it. And because Nexus is engineered edge-first on the NVIDIA CUDA fabric, the same graph runs identically whether on data center GPUs or on an NVIDIA Jetson Thor at the industrial edge.

---

## Three Layers of Understanding

Most tools stop at finding documents. Nexus builds three interconnected layers of understanding, then lets you query all of them simultaneously.

### Layer 1: What Exists — Semantic Search

Find any piece of knowledge by meaning, not keywords. Ask "how do we handle refunds?" and find the answer in a document titled "Subscription Terms" that never uses the word "refund."

This is table stakes. Every AI platform does search. What matters is what comes next.

### Layer 2: How Things Connect — Knowledge Graphs

When Nexus ingests your documents, it automatically extracts entities and relationships. Products to regulations. Teams to systems. Decisions to the people who made them. These connections exist implicitly across hundreds of documents — the graph makes them explicit.

- "Which services will be affected if we deprecate the v1 authentication endpoint?" — The graph traces the dependency chain across architecture docs, deployment configs, and team ownership records.
- "Show me all regulations that affect our European operations" — The graph connects regulatory documents to internal policies to regional team structures.
- "How is the billing team connected to the payments service?" — The graph maps organizational relationships to technical dependencies.

These answers do not exist in any single document. They emerge from the aggregate.

### Layer 3: How Things Change — Temporal Intelligence

Knowledge is not static. Policies change. APIs evolve. Best practices shift. The temporal layer tracks not just the current state, but the trajectory.

- "Show me the history of our deployment procedure" — Every version, ordered chronologically, with what changed and what triggered the change.
- "What changed between v1 and v2 of the API spec?" — Additions, removals, modifications, and the decisions that drove them.
- "When did this regulation first apply to our European division?" — The moment a relationship appeared in the graph, traced to its source.

The temporal layer turns a static knowledge base into a living record of organizational evolution.

---

## How Questions Become Understanding

When you ask a question, it is not sent to a single AI model. Multiple specialized agents fan out simultaneously, each pursuing a different angle.

```
  "What changed in the API docs and how does it affect dependent services?"
                                    │
                                    ▼
                            ┌──────────────┐
                            │ Smart Router │
                            │              │
                            │ Detects:     │
                            │ - temporal   │
                            │ - graph      │
                            │ - search     │
                            └──────┬───────┘
                                   │
                     ┌─────────────┼─────────────┐
                     ▼             ▼             ▼
              ┌────────────┐ ┌──────────┐ ┌──────────┐
              │  Temporal  │ │  Graph   │ │  Search  │
              │  Agent     │ │  Agent   │ │  Agent   │
              │            │ │          │ │          │
              │  Finds     │ │  Traces  │ │  Finds   │
              │  what      │ │  which   │ │  the     │
              │  changed   │ │  services│ │  actual  │
              │  and when  │ │  depend  │ │  docs    │
              └──────┬─────┘ └────┬─────┘ └────┬─────┘
                     │            │            │
                     └────────────┼────────────┘
                                  ▼
                         ┌────────────────┐
                         │  Synthesizer   │
                         │                │
                         │ Merges all     │
                         │ findings into  │
                         │ one coherent   │
                         │ answer with    │
                         │ full context   │
                         └────────────────┘
```

A search engine would return documents containing "API." The graph agent traces the dependency chain to affected services. The temporal agent identifies what changed and when. The synthesizer weaves the findings into a single answer that captures the full picture.

This is the difference between finding a document and finding understanding.

**Five domain agents**, each specialized:
- **Search Agent** — document retrieval, Q&A, definitions, intent classification
- **Graph Agent** — relationship traversal, schema exploration, entity extraction
- **Temporal Agent** — timelines, version comparison, change detection
- **Catalog Agent** — collection browsing, metadata and statistics
- **Session Agent** — conversation management, branching, context continuity

**Smart routing** pre-filters agents by analyzing the query. A simple search question dispatches only the search agent. A question spanning temporal and graph domains dispatches both. This means complex questions complete in the time of the slowest agent, not the sum of all agents.

---

## Building the Graph

Getting data in is straightforward. Point Nexus at your documents and the platform handles the rest.

**What happens when a document is ingested:**

```
  Document                                              Context Graph
     │                                                       ▲
     ▼                                                       │
  ┌──────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
  │Parse │───►│ Embed    │───►│ Extract  │───►│ Store    │──┘
  │      │    │          │    │          │    │          │
  │Format│    │Meaning   │    │Entities  │    │Search    │
  │aware │    │vectors   │    │Relations │    │Graph     │
  │chunk │    │on your   │    │Decision  │    │Temporal  │
  │      │    │GPU       │    │traces    │    │index     │
  └──────┘    └──────────┘    └──────────┘    └──────────┘
```

1. **Parse** — Documents are parsed with format-aware chunking. Markdown headers become breadcrumb trails. JSON fields become structured metadata.
2. **Embed** — Each chunk is embedded into a vector space using a self-hosted model, optimized through NVIDIA vLLM for maximum throughput on both data center and edge GPUs. Batch processing for throughput.
3. **Extract** — The LLM reads each chunk and extracts entities, relationships, and context. Who decided what, why, and what it connects to.
4. **Store** — One ingestion pass populates all three layers: search index, knowledge graph, and temporal timeline.

**Supported formats:** Markdown (with header hierarchy), JSON and JSONL (with field detection), S3 buckets (streaming for any size).

Every document ingested deepens the graph. Relationships that span hundreds of documents become visible. Patterns that no individual person could see emerge from the aggregate.

---

## API Compatibility

Nexus exposes three API formats from a single backend:

| Format | Endpoint | Use Case |
|--------|----------|----------|
| Native Agent API | `POST /api/v2/agent/query` | Full control, multi-agent orchestration |
| Streaming SSE | `POST /api/v2/agent/query/stream` | Real-time UI, progressive rendering |
| OpenAI-compatible | `POST /v1/chat/completions` | Drop-in replacement for any OpenAI client |

Already built an application against the OpenAI API? Point it at Nexus instead. Same request format. Same response format. But the inference runs on your hardware — whether a data center rack or an NVIDIA Jetson Thor at the edge — the context graph grows with every query, and your data stays in your network.

---

## Operations and Observability

Nexus is built on K3s — the edge-native Kubernetes distribution that runs identically on a data center server and a 130W Jetson Thor module. This means the platform is managed with standard Kubernetes tooling: Helm charts for deployment, ConfigMaps for configuration, GitOps workflows for change management.

**eBPF tracing** provides deep observability into every layer of the stack — which models are consuming GPU time, which graph traversals generate the most I/O, where latency accumulates across the ingestion pipeline — without adding instrumentation to application code. Platform engineering teams manage Nexus through the same tools and workflows they use for everything else in their infrastructure.

**Managed by Unovie** — Unovie continuously channels new AI innovations into the Nexus platform: new model releases, domain-specific fine-tuning, and architecture optimizations. Your Mixture of Models evolves as the AI landscape advances, without requiring your team to track upstream model development. Unovie's managed SLA covers the full stack — from K3s infrastructure to model performance to context graph health.

---

*See also: [Home](./index.md) | [Security](./security.md) | [Edge AI](./edge-ai.md) | [Physical AI](./physical-ai.md) | [Use Cases](./use-cases.md)*
