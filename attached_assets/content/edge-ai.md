# Edge AI

> Your context graph, wherever your people are.

---

## The On-Premise Advantage

Cloud AI services see your question. An on-premise context graph sees your question *in the context of everything your organization has ever written*. That is a fundamentally different capability.

A cloud model processes each query in isolation — stateless, sessionless, amnesiac. It has no memory of what your organization decided last quarter, no awareness of how your policies evolved, no understanding of why your architecture looks the way it does. It answers from general knowledge, not from your specific organizational context.

Nexus is engineered edge-first. The entire AI stack runs on your infrastructure — optimized for the NVIDIA CUDA fabric from data center GPUs down to NVIDIA Jetson Thor at the industrial edge. The LLMs, the knowledge graphs, the search indexes, the temporal analysis — all local. This means three things:

**Persistent context.** Every document ingested deepens the graph. The system accumulates understanding over time instead of resetting every session.

**Full corpus access.** The AI can reason across your entire document corpus simultaneously, not just the fragments you paste into a prompt window.

**Zero data egress.** The decision traces that matter most — competitive strategy, financial reasoning, personnel decisions — never leave your network.

---

## Architecture

For organizations with a single location, Nexus runs entirely on-site:

```
  YOUR OFFICE / DATA CENTER
  ─────────────────────────────────────────────────────────────

  ┌───────────┐          ┌──────────────────────────────────┐
  │           │          │        NEXUS                     │
  │  Users    │          │                                  │
  │           │          │  ┌────────────┐  ┌────────────┐  │
  │  Browser  │──HTTP──► │  │Orchestrator│  │ Inference  │  │
  │  API      │          │  │            │  │            │  │
  │  Scripts  │          │  │ 5 parallel │  │ Self-hosted│  │
  │           │          │  │ AI agents  │  │ LLMs on GPU│  │
  │           │          │  └────────────┘  └────────────┘  │
  │           │          │                                  │
  │           │          │  ┌────────────┐                  │
  │           │          │  │ Context    │                  │
  │           │          │  │ Graph      │                  │
  │           │          │  │            │                  │
  │           │          │  │ Search +   │                  │
  │           │          │  │ Graphs +   │                  │
  │           │          │  │ Temporal   │                  │
  │           │          │  └────────────┘                  │
  └───────────┘          └──────────────────────────────────┘

  Nothing leaves this boundary.
```

For distributed organizations, Nexus extends to remote offices through a lightweight edge proxy:

```
  REMOTE OFFICE                              YOUR DATA CENTER
  ─────────────                              ────────────────

  ┌───────────────┐                          ┌──────────────┐
  │  Edge Proxy   │     Encrypted P2P        │  Full Nexus  │
  │               │══════════════════════════►│  Backend     │
  │  4.7 MB       │     (AES-256-GCM)        │              │
  │  No GPU       │     Direct connection     │  GPU + LLMs  │
  │  No data      │     No relay              │  Context     │
  │  stored       │     No middleman          │  Graph       │
  └───────────────┘                          └──────────────┘

  Users at the remote office access the full context graph
  with 16-82ms network overhead.
```

The edge proxy brings the context graph to users wherever they are, without requiring a GPU at every location. A single backend serves the entire organization while the context graph grows with every document from every location.

---

## Latency

Every millisecond in the request path is accounted for:

```
  User ──► Edge Proxy ══► Gateway ══► Backend ──► LLM
           < 1ms          10-50ms     5-30ms      < 1ms
           (local)        (WAN P2P)   (WAN P2P)   (internal)

  Total network overhead: 16-82 ms

  Compare to cloud AI:
  User ──► Cloud API ──► Model ──► Response
           100-300ms     (queued)   100-300ms

  Network savings: 2-6x faster before
  the model even starts processing
```

The key: **peer-to-peer connections with no relay.** Traditional architectures route traffic through a central relay, adding an extra round trip. Nexus edge proxies connect directly to the gateway, and the gateway connects directly to the backend. Zero intermediaries on the data path.

For the user at a remote office, querying the organizational context graph feels local.

---

## Mixture of Models

Nexus does not run one massive model for everything. It achieves extreme speed through a **Mixture of Models** architecture — multiple small, domain-tuned models running simultaneously, each specialized for its task. Optimized through vLLM and the Blackwell Transformer Engine's native FP4/FP8 quantization for maximum performance on both data center and edge hardware:

```
  GPU Memory Allocation — Mixture of Models
  ──────────────────────────────────────────

  ┌────────────────────────────┐
  │       gemma 4B             │  20%   Reasoning and synthesis
  ├────────────────────────────┤
  │ FunctionGemma │ EmbedGemma │  10%   Tool routing + embeddings
  ├────────────────────────────┤
  │                            │
  │      KV Cache Headroom     │  70%   Concurrent request memory
  │                            │
  └────────────────────────────┘

  + Domain-tuned specialists swap in per deployment:
    MedGemma (clinical), CodeGemma (technical), others

  16 concurrent inference slots
  ~400 tokens/second aggregate
  5+ concurrent users on a single GPU
```

- **gemma 4B** — Reasoning and synthesis. Small enough to leave room for concurrent models, capable enough for conversational queries, answer generation, and multi-source synthesis across the context graph.
- **FunctionGemma** — Tool routing. A 270M-parameter model specialized for deciding which tools to invoke. Near-zero inference cost leaves GPU resources for the models that need them.
- **EmbedGemma** — Document embeddings. Generates vectors for semantic search as documents are ingested into the context graph.
- **Domain specialists** — MedGemma for clinical reasoning in healthcare deployments. CodeGemma for technical documentation. The model mixture adapts to the deployment domain without changing the architecture.

A semantic router classifies each request and sends it to the right model. Simple tool decisions go to FunctionGemma (fast, cheap). Domain-specific reasoning goes to the specialist. General synthesis goes to gemma 4B. Three or four small models running concurrently deliver higher aggregate throughput than one large model handling everything sequentially — and each model can be domain-tuned independently.

This is architecture over scale — a mixture of small, specialized models instead of one giant model for everything. On NVIDIA Jetson Thor, the entire model mixture runs within a 130W envelope at 2,070 FP4 TFLOPS, bringing full context graph reasoning to the physical edge.

---

## Resource Governance

GPU resources are finite. Nexus prevents oversubscription:

**Semaphore-based slot governance** — The orchestrator limits concurrent LLM calls to match available GPU capacity. When all slots are occupied, additional requests queue gracefully and are served in order. No request is dropped. No GPU is overwhelmed.

**Per-agent call limiting** — Each AI agent has a maximum number of LLM calls per request. This prevents runaway tool-call loops from consuming all available inference capacity. If an agent hits its limit, it returns its current findings rather than spiraling.

The result: **predictable latency under load.** Adding concurrent users increases queue wait times linearly rather than causing cascading failures. The context graph remains responsive because the infrastructure is governed, not just provisioned.

---

## Cost Model

| | Cloud AI (per-token) | Nexus (self-hosted) |
|---|---|---|
| **10 users** | $2,000-8,000/month | Fixed infrastructure cost |
| **100 users** | $20,000-80,000/month | Same fixed cost |
| **Year 2** | Same or higher | Infrastructure already paid for |
| **Cost ceiling** | None — grows with every query | Hardware capacity |
| **Marginal cost per query** | Linear (per-token) | Approaches zero |

Self-hosted inference means the tenth user costs the same as the first. The hundredth query costs the same as the first. Your context graph deepens with every document and every query, but the cost does not grow with it.

This is the economic consequence of on-premise architecture: the more you use it, the more value accumulates in the context graph, while the cost remains fixed.

---

## Deployment Footprint

| Component | Footprint | Where |
|-----------|-----------|-------|
| Edge Proxy | 4.7 MB binary, no dependencies | Remote offices |
| Full Edge (Jetson Thor) | Complete Nexus stack on K3s, 130W | Factory, hospital, vessel |
| Orchestrator | 28 MB container | Your datacenter |
| Inference (vLLM) | Single GPU (consumer or datacenter) | Your datacenter |
| Context Store | Standard server (no GPU) | Your datacenter |

**Evaluation:** Docker Compose brings up the entire stack on one machine. Point it at your documents and start building your context graph in minutes.

**Production:** Nexus runs on **K3s** — the enterprise-grade, edge-native Kubernetes distribution. The same orchestration platform runs identically on a data center rack, a single Jetson Thor module at a factory, or a vessel at sea. Helm charts, ConfigMaps, zero-downtime rolling upgrades — all standard Kubernetes, but lightweight enough for a 130W edge device.

**Industrial edge:** NVIDIA Jetson Thor runs the full Nexus stack — context graph, inference, orchestration — managed by K3s on a single module. For healthcare, manufacturing, and maritime environments where the context graph must be physically present. See [Physical AI](./physical-ai.md).

---

## Enterprise Operations

Nexus is built for enterprise platform engineering teams, not just data scientists.

**Policy-First Security** — Network policies, pod security standards, and RBAC are defined declaratively and enforced by the platform. Security is configuration, not code. Policies propagate from central management to every edge node automatically — a new Jetson Thor deployment inherits the organization's security posture the moment it joins the cluster.

**eBPF Observability** — Deep kernel-level tracing via eBPF provides visibility into every network flow, system call, and process interaction across the Nexus stack — without instrumentation overhead. See which models are consuming GPU time, which context graph queries generate the most I/O, and where latency accumulates, all from a single observability plane that spans data center and edge nodes.

**Platform Engineering Integration** — Nexus integrates into existing enterprise automation: GitOps workflows for configuration management, CI/CD pipelines for model updates, infrastructure-as-code for provisioning new edge nodes. A platform engineering team manages the entire fleet — data center backends, edge deployments, model versions, security policies — through the same tooling they use for everything else.

**Managed by Unovie** — Unovie provides 24/7 managed SLA across the Nexus platform, from data center to edge. This includes continuous delivery of new AI innovations — new model releases, domain-specific fine-tuning (MedGemma for healthcare, specialized models for manufacturing and maritime), and architecture optimizations — deployed across distributed fail-safe environments without disrupting operations. Unovie's support extends to compliance certification for regulated industries (DoD, FDA, NERC, OSHA, NIST), ensuring the platform meets audit standards as it evolves.

---

## OpenAI API Compatibility

Already built an application against the OpenAI API? Point it at Nexus instead:

```
  Before:
  client = OpenAI(api_key="sk-...", base_url="https://api.openai.com/v1")

  After:
  client = OpenAI(api_key="not-needed", base_url="http://nexus:8000/v1")
```

Same request format. Same response format. Same streaming protocol. But the inference runs on your hardware, your queries hit the context graph instead of a stateless model, and there is no per-token bill.

---

*See also: [Home](./index.md) | [Platform](./platform.md) | [Security](./security.md) | [Physical AI](./physical-ai.md) | [Use Cases](./use-cases.md)*
