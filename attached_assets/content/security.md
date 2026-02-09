# Privacy and Security

> Privacy is not a feature. It is the reason the platform exists.

---

## Why Privacy Is Structural

The context gap — the missing reasoning behind organizational decisions — exists precisely because the most valuable knowledge is too sensitive for cloud services.

Your CRM records that a 20% discount was applied. The chain of reasoning behind it — the client threatening to leave, the failed onboarding, the understaffed team, the cost reduction initiative — spans competitive strategy, financial reasoning, personnel decisions, and customer negotiations. This is exactly what organizations cannot upload to a third-party server.

**Closing the context gap requires processing data where it lives.** Not as a compliance concession. Not as an enterprise add-on. As the foundational architecture.

Every component of the Nexus stack — the LLMs, the search indexes, the knowledge graphs, the temporal analysis — runs on hardware you own and control. In a data center, on an NVIDIA Jetson Thor at a hospital or factory floor, or anywhere the context must be physically present. There is no cloud API call. No third-party model provider. No data egress of any kind.

---

## Policy-First Security

Nexus enforces security declaratively — through Kubernetes network policies, pod security standards, and RBAC definitions that propagate automatically from central management to every edge node. Security is configuration, not code. When a new Jetson Thor edge node joins the cluster, it inherits the organization's full security posture immediately. Policies are version-controlled, auditable, and applied uniformly across data center and edge deployments via K3s.

eBPF provides kernel-level enforcement and visibility beneath the application layer — monitoring network flows, system calls, and process interactions without instrumentation overhead. Security teams see exactly what is happening across the entire deployment, from data center backends to edge nodes at a factory or hospital, through a single observability plane.

---

## Defense in Depth

Nexus uses a layered security architecture with three tiers. Each has a specific trust level. Compromising one tier does not automatically compromise the others.

```
  CUSTOMER NETWORK                   YOUR INFRASTRUCTURE
  (Untrusted)                        (Trusted, Controlled)
  ─────────────────                  ──────────────────────

  ┌───────────────┐                  ┌────────────────────┐
  │               │                  │  Security Gateway  │
  │  Edge Proxy   │    Encrypted     │                    │
  │               │══ P2P Channel ══►│  - Authenticates   │
  │  4.7 MB       │  (Zero-Trust)    │  - Authorizes      │
  │  No secrets   │                  │  - Rate limits     │
  │  No auth      │                  │  - Audits          │
  │  No GPU       │                  │  - Isolates        │
  │               │                  │                    │
  └───────────────┘                  └────────┬───────────┘
                                              │
        Internet                              │ Internal network
        ══════════                            │ (not exposed)
                                              ▼
                                     ┌────────────────────┐
                                     │  Context Graph     │
                                     │                    │
                                     │  Orchestrator      │
                                     │  LLM Inference     │
                                     │  Knowledge Store   │
                                     └────────────────────┘
```

**Edge Proxy** — A minimal binary on the customer network. It handles encryption but contains no authentication logic, no secrets, no business rules. If compromised, the attacker gains access to only the encrypted transport. All security enforcement happens in the backend.

**Security Gateway** — A dedicated gateway instance per customer. It validates credentials, enforces rate limits, applies role-based access control, and logs every request. No two customers share a gateway.

**Context Graph** — The LLMs, search indexes, knowledge graphs, and temporal analysis. Not internet-facing. All traffic arrives through the gateway. The context your organization has built stays behind your security boundary.

---

## Zero-Trust Encryption

Data is encrypted end-to-end from the edge proxy to the backend. This is not TLS termination at a load balancer — it is cryptographic channel encryption across every hop.

```
  Edge Proxy                    Security Gateway                Backend
       │                              │                          │
       │  1. Noise XX Handshake       │                          │
       │  (mutual authentication)     │                          │
       │◄────────────────────────────►│                          │
       │                              │                          │
       │  2. AES-256-GCM Channel      │  3. Second encrypted     │
       │  (per-session keys)          │  channel to backend      │
       │══════════════════════════════│══════════════════════════│
       │                              │                          │
       │  Encrypted end-to-end        │  Decrypted only at       │
       │  No intermediary             │  final destination       │
       │  can read traffic            │                          │
```

- **Noise XX Protocol** — Mutual authentication with Curve25519 key exchange
- **AES-256-GCM** — Per-session encryption keys, forward secrecy
- **No relay** — Direct peer-to-peer connections, no intermediary can inspect traffic
- **Credential-based identity** — Cryptographic identifiers, not usernames/passwords

The credential authority issues time-limited credentials (24-hour TTL) but is never on the data path. If the authority goes offline, existing credentials remain valid and data continues flowing.

---

## Per-Customer Isolation

Every customer gets a dedicated security gateway. This is process-level isolation — not namespace-level, not row-level.

| Property | Shared Multi-Tenancy | Nexus Per-Customer |
|----------|---------------------|---------------------|
| Gateway process | Shared | Dedicated per customer |
| TLS certificates | Shared wildcard | Per-customer certificate |
| Rate limit counters | Shared pool | Per-customer budget |
| Audit logs | Commingled | Per-customer log stream |
| Blast radius | All customers | Single customer |

If one customer's gateway is compromised, no other customer is affected. There is no configuration that could accidentally expose one customer's context graph to another.

This matters because context graphs contain the most sensitive organizational knowledge — decision traces, competitive strategy, financial reasoning. Per-customer isolation means that knowledge is protected not just from the outside, but from every other customer on the platform.

---

## Access Control

Authorization is enforced at three levels, all evaluated at the gateway before any request reaches the context graph:

**Endpoint-Level** — Which API operations can this user perform? A read-only analyst queries the context graph. An administrator manages ingestion and configuration.

**Collection-Level** — Which document collections can this user access? A regional manager sees collections for their region. A global analyst sees all collections.

**Document-Level** — Within a collection, which documents are visible? Folder-based rules restrict access to specific document hierarchies. A team lead sees `/engineering/*` but not `/finance/*`.

These levels compose. An analyst in the European region sees search results only from European collections, filtered to documents their role permits. The context graph respects these boundaries — graph traversals do not leak entities from restricted collections.

---

## Audit Trail

Every interaction with the context graph is logged:

- **Queries** — Who asked what, when, and what the system returned
- **Tool calls** — Which AI agents were invoked, what parameters were used
- **Document access** — Which documents were retrieved, by whom
- **Administrative actions** — Configuration changes, user provisioning, access control updates

Logs are centralized in the backend infrastructure. They cannot be modified or deleted from the customer network.

For organizations building context graphs that capture decision traces and institutional knowledge, the audit trail itself becomes a record of how the organization interacts with its own knowledge — who asked about what, when, and how the answers were used.

---

## Credential Lifecycle

```
  1. ISSUANCE                 2. VERIFICATION              3. REVOCATION
  ─────────────               ───────────────              ──────────────

  Edge requests     ──►  Gateway verifies        Admin revokes
  credential              credential on           credential
  from authority          every request            │
       │                  (cached locally)         ▼
       ▼                       │              Authority pushes
  Authority signs             ▼              revocation event
  with HMAC-SHA256       If valid: allow           │
       │                 If expired: reject        ▼
       ▼                 If revoked: reject   All gateways
  24-hour TTL                                 notified in
  credential returned                         < 5 seconds
```

**Instant revocation** — When a credential is revoked, the revocation propagates to all gateways within seconds. A compromised edge or terminated contract is locked out immediately, not at credential expiry.

**Offline resilience** — If the credential authority is temporarily unavailable, existing valid credentials continue working. The data path is never blocked by an authority outage.

---

## Compliance Certification

Nexus is architected for regulated environments. Unovie works with customers to meet the compliance certification requirements of their specific industry:

| Requirement | How Nexus Addresses It |
|-------------|----------------------|
| **Data residency** | All data remains on your infrastructure. No cloud API calls. |
| **Access control** | Three-level RBAC: endpoint, collection, document. |
| **Audit logging** | Centralized logs with user identity, timestamps, and full query context. |
| **Encryption in transit** | End-to-end zero-trust encryption (AES-256-GCM). |
| **Encryption at rest** | Your infrastructure, your encryption policies. |
| **Identity management** | JWT integration with your existing identity provider. |
| **Incident response** | Instant credential revocation, per-customer blast radius. |
| **Tenant isolation** | Dedicated gateway per customer, no shared state. |

**Regulatory frameworks supported:**

| Framework | Domain | Nexus Alignment |
|-----------|--------|----------------|
| **DoD / IL4-IL5** | Defense | Air-gapped deployment, data residency, encryption at rest and in transit, audit trail |
| **FDA 21 CFR Part 11** | Healthcare / Medical Devices | Audit logging, electronic signatures, data integrity, access controls |
| **NERC CIP** | Energy / Critical Infrastructure | Network segmentation, access management, incident response, system monitoring via eBPF |
| **OSHA Process Safety** | Manufacturing | Equipment history traceability, procedure version tracking, temporal audit of safety changes |
| **NIST 800-171 / 800-53** | Federal / Defense Supply Chain | Encryption, access control, audit, incident response, configuration management |

These are not features bolted onto a cloud architecture. They are consequences of the fundamental design decision: your context graph runs on your infrastructure, under your control, with no external dependencies for data processing. The same security model applies whether Nexus runs in your data center or on NVIDIA Jetson Thor at the industrial edge — the trust boundary moves with the hardware.

Unovie provides managed support for compliance certification — working alongside your security and compliance teams to map Nexus controls to your specific regulatory requirements, maintain evidence packages, and ensure the platform meets audit standards across distributed fail-safe deployments.

---

*See also: [Home](./index.md) | [Platform](./platform.md) | [Edge AI](./edge-ai.md) | [Physical AI](./physical-ai.md) | [Use Cases](./use-cases.md)*
