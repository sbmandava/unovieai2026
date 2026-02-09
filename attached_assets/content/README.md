# Nexus Website Content - Second Draft

> Market-facing content for Unovie's Nexus business context graph platform.

**Status:** Second draft — reframed around business context graphs
**Date:** 2026-02-08

---

## Core Theme

Nexus builds **business context graphs** — living maps of organizational knowledge that capture not just what your organization knows, but *why* decisions were made, how knowledge evolved, and where the hidden connections are.

The central insight: your systems capture actions but miss the reasoning behind them. That reasoning — the *context* — is the most valuable knowledge in your organization, and it lives nowhere permanent. Nexus captures it.

**Privacy is a structural requirement, not a compliance feature.** The context gap exists because the most sensitive organizational knowledge is exactly what cannot be uploaded to cloud services. Closing it requires processing data on infrastructure you control.

---

## Site Map

```
  index.md ──────── Landing page
  │                 The context gap, what Nexus builds,
  │                 why context must stay on-premise,
  │                 the accumulating advantage
  │
  ├── platform.md ── From documents to understanding
  │                  Three layers (search, graphs, temporal),
  │                  orchestrated agents, building the graph,
  │                  API compatibility
  │
  ├── security.md ── Privacy as architecture
  │                  Policy-first security, eBPF enforcement,
  │                  defense in depth, zero-trust encryption,
  │                  per-customer isolation, credential lifecycle
  │
  ├── edge-ai.md ─── The on-premise advantage
  │                  Persistent context vs stateless cloud,
  │                  Mixture of Models architecture, latency, cost model,
  │                  K3s edge-native Kubernetes, eBPF observability,
  │                  enterprise platform engineering, OpenAI compatibility
  │
  ├── use-cases.md ─ Closing the context gap
  │                  Enterprise: compliance, tech docs, M&A, knowledge base
  │                  Startup: support AI, product graphs, research, B2B SaaS
  │                  Industry applications
  │
  └── physical-ai.md ─ Physical AI at the industrial edge
                       NVIDIA IGX Thor platform, Blackwell architecture,
                       CUDA fabric optimization, healthcare (surgical robotics),
                       manufacturing (predictive maintenance), maritime
                       (autonomous inspection), edge-to-fleet deployment
```

## Content Guidelines

- **Audience:** Technical decision makers (CTOs, VP Engineering, architects) and business stakeholders (procurement, compliance)
- **Tone:** Confident, direct, evidence-based. Let the architecture speak for itself. Lead with the problem (the context gap) not the features.
- **Framing:** Every capability is presented as a consequence of the core insight — context graphs capture the reasoning behind organizational decisions, and privacy is the structural requirement that makes it possible.
- **Diagrams:** ASCII art throughout for consistency and portability. Can be converted to SVG/images for the final site.
- **Numbers:** All performance numbers are grounded in the technical architecture documentation.

## Key Messages

1. **Your systems capture actions but miss the reasoning.** The context gap — the missing *why* behind decisions — is the most valuable knowledge in your organization, and it lives nowhere permanent.
2. **Privacy is a structural requirement.** The most sensitive organizational context is exactly what cannot be uploaded to cloud services. On-premise processing is the architecture, not an option.
3. **Context accumulates.** Cloud AI resets every session. A context graph deepens with every document. The accumulated context is your moat — it cannot be replicated by a competitor adopting the same model.
4. **Knowledge graphs are built automatically.** No manual curation. The AI reads your documents, extracts entities and relationships, and builds the graph.
5. **Understanding, not search.** Search finds documents. Context graphs find the reasoning chains that connect them.
6. **Enterprise-first, edge-native.** Built on K3s Kubernetes from day one. Policy-first security, eBPF observability, and deep integration into enterprise platform engineering automation. The same control plane manages data center and edge deployments.
7. **Managed by Unovie.** 24/7 managed SLA across the platform. Continuous delivery of AI innovations — new models, domain-specific fine-tuning, architecture optimizations. Compliance certification support for DoD, FDA, NERC, OSHA, NIST across distributed fail-safe environments.

## Source Material

All content is derived from the Nexus architecture documentation:

| Source Document | Content Used |
|----------------|-------------|
| `nexus-design/tech-arch.md` | Service definitions, model pool, concurrency model, technology stack |
| `nexus-design/orchestrator.md` | Agent architecture, smart routing, resource governance |
| `nexus-design/multi-tier.md` | Edge/Cloud/Datacenter tiers, P2P mesh, latency analysis |
| `nexus-design/nexus-security.md` | Hybrid security, RBAC, rate limiting, audit, compliance |
| `nexus-design/ockam-security-architecture.md` | Zero-trust encryption, credential lifecycle (internal reference) |
| `nexus-design/ingestion-arch.md` | Ingestion pipeline, knowledge extraction, batch optimization |
