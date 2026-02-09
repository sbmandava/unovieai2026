# Physical AI

> Context graphs at the industrial edge — delivered today on NVIDIA Jetson Thor, scaling tomorrow on NVIDIA IGX.

---

## Beyond the Data Center

Most AI platforms assume a comfortable environment: a cloud region, a rack of GPUs, reliable networking, unlimited power. The real world is not that.

A predictive maintenance system on a factory floor needs to correlate vibration sensor data against years of equipment history, in an environment with electromagnetic interference and no tolerance for false positives. A maritime vessel needs autonomous inspection capabilities thousands of miles from the nearest data center. A medical imaging system must reason against patient history and clinical protocols without a single byte leaving the hospital network.

These are not search problems. They are context problems at the physical edge — where the reasoning behind decisions matters as much as the decisions themselves, and where the context graph must run on hardware that operates in conditions no cloud server was designed for.

**Nexus Context Engine is delivered today on NVIDIA Jetson Thor — and scales to industrial-grade NVIDIA IGX as the platform matures.**

---

## Delivered Now: NVIDIA Jetson Thor

NVIDIA Jetson Thor is generally available today. It is the most powerful edge AI module ever built — a Blackwell GPU with 128 GB of memory in a 130-watt power envelope. Nexus Context Engine runs on it now.

```
  NVIDIA JETSON THOR — GENERALLY AVAILABLE
  ──────────────────────────────────────────────────────────────

  ┌──────────────────────────────────────────────────────────┐
  │                                                          │
  │  BLACKWELL GPU ARCHITECTURE                              │
  │                                                          │
  │  ┌────────────────────────────────────────────────────┐  │
  │  │  2,560 CUDA Cores    │  96 Tensor Cores (5th gen) │  │
  │  │  Transformer Engine   │  Native FP4 Quantization   │  │
  │  │  Multi-Instance GPU   │  PVA v3.0 Vision Accel.    │  │
  │  └────────────────────────────────────────────────────┘  │
  │                                                          │
  │  2,070 FP4 TFLOPS    7.5x AI compute vs Orin            │
  │  128 GB LPDDR5X       273 GB/s memory bandwidth          │
  │  40–130W              3.5x better energy efficiency      │
  │                                                          │
  │  ┌────────────────────────────────────────────────────┐  │
  │  │  4x 25 GbE           Up to 32 cameras (MIPI CSI-2)│  │
  │  │  CAN bus headers      PCIe Gen5                    │  │
  │  │  USB 3.2              Wi-Fi 6E + Bluetooth         │  │
  │  └────────────────────────────────────────────────────┘  │
  │                                                          │
  │  JetPack 7  │  CUDA 13.0  │  vLLM  │  Holoscan     │
  │                                                          │
  └──────────────────────────────────────────────────────────┘
```

**What 2,070 TFLOPS at the edge means for context graphs:**

Nexus achieves extreme speed through a **Mixture of Models** architecture — instead of one massive model doing everything slowly, multiple small domain-tuned models run simultaneously, each specialized for its task. Gemma 4B handles reasoning and synthesis. FunctionGemma routes tool calls at near-zero cost. MedGemma provides clinical domain intelligence. EmbedGemma generates vectors for semantic search. Each model is small enough to run efficiently within Jetson Thor's power envelope, and together they deliver throughput that a single large model cannot match.

It decodes up to 4x 8K video streams while running multi-model inference simultaneously. It delivers 5x the generative reasoning speed of the previous Orin generation, with 128 GB of memory — enough to hold the full context graph, the entire model mixture, and real-time sensor data without contention.

The Nexus Context Engine runs the full stack on a single Jetson Thor module: knowledge graph, semantic search, temporal analysis, multi-agent orchestration, and Mixture of Models inference — all managed by K3s within a 130-watt envelope. The same Kubernetes control plane that manages your data center deployment manages every edge node, with policy-first security and eBPF observability propagated automatically.

| Spec | Jetson Thor |
|------|-------------|
| **AI compute** | 2,070 FP4 TFLOPS |
| **vs previous gen** | 7.5x higher than AGX Orin |
| **Memory** | 128 GB LPDDR5X |
| **Model architecture** | Mixture of Models — gemma 4B, FunctionGemma, MedGemma, domain-tuned specialists |
| **Generative reasoning** | 5x faster than Orin |
| **Energy efficiency** | 3.5x better than Orin |
| **Power** | 40–130W configurable |
| **Video decode** | 4x 8Kp30 or 10x 4Kp60 |
| **Camera inputs** | Up to 32 via MIPI CSI-2 (40 Gbps) |
| **Networking** | 4x 25 GbE |
| **Software** | JetPack 7, CUDA 13.0, vLLM, Holoscan |
| **Availability** | **Generally available now** |

---

## Nexus Context Engine on NVIDIA CUDA Fabric

The Nexus Context Engine is optimized for NVIDIA's CUDA computing fabric — the unified programming model that spans from Jetson edge modules to IGX industrial platforms to data center GPUs. The same context graph architecture runs across the full deployment spectrum.

```
  NEXUS ON JETSON THOR
  ──────────────────────────────────────────────────────────

  ┌────────────────────────────────────────────────────────┐
  │                  JETSON THOR HARDWARE                   │
  │                                                        │
  │  ┌──────────────────────────────────────────────────┐  │
  │  │            NEXUS CONTEXT ENGINE                  │  │
  │  │                                                  │  │
  │  │  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │  │
  │  │  │ Context  │  │ Inference│  │ Orchestrator │  │  │
  │  │  │ Graph    │  │          │  │              │  │  │
  │  │  │          │  │ LLMs on  │  │ Multi-agent  │  │  │
  │  │  │ Search   │  │ Blackwell│  │ reasoning    │  │  │
  │  │  │ Graphs   │  │ GPU via  │  │ across       │  │  │
  │  │  │ Temporal │  │ CUDA 13  │  │ graph +      │  │  │
  │  │  │          │  │ vLLM │  │ search +     │  │  │
  │  │  │          │  │ FP4/FP8  │  │ temporal     │  │  │
  │  │  └──────────┘  └──────────┘  └──────────────┘  │  │
  │  │                                                  │  │
  │  └──────────────────────────────────────────────────┘  │
  │                                                        │
  │  ┌──────────────────────────────────────────────────┐  │
  │  │  NVIDIA SOFTWARE STACK                           │  │
  │  │                                                  │  │
  │  │  CUDA 13.0 │ vLLM │ Holoscan │ JetPack 7   │  │
  │  └──────────────────────────────────────────────────┘  │
  │                                                        │
  │  ┌──────────────────────────────────────────────────┐  │
  │  │  SENSOR INPUTS                                   │  │
  │  │                                                  │  │
  │  │  Up to 32 cameras (MIPI CSI-2, 40 Gbps)        │  │
  │  │  CAN bus (automotive/industrial)                │  │
  │  │  4x 25 GbE network fabric                        │  │
  │  │  Industrial I/O                                  │  │
  │  └──────────────────────────────────────────────────┘  │
  └────────────────────────────────────────────────────────┘
```

**Why CUDA Fabric matters for context graphs:**

- **Native FP4/FP8 quantization** — The Blackwell Transformer Engine dynamically switches between FP4 and FP8 precision. Context graph inference runs at FP4 for throughput-critical operations (sensor correlation, real-time search) and FP8 for precision-critical operations (decision trace synthesis, temporal analysis).

- **Multi-Instance GPU (MIG)** — The Blackwell GPU can be partitioned into isolated instances. One partition runs the Mixture of Models inference (gemma 4B + domain specialists). Another handles real-time sensor processing via Holoscan. A third manages EmbedGemma for document ingestion. Each partition has dedicated compute and memory — no interference between workloads.

- **vLLM optimization** — Context graph models are compiled through vLLM for the Blackwell architecture, achieving up to 5x generative reasoning speedup versus Orin. The same model that runs in a data center Nexus deployment runs on Jetson Thor with architecture-specific optimization.

- **Holoscan sensor bridge** — Real-time sensor data flows through NVIDIA Holoscan directly into the context graph. Camera feeds, industrial sensors, and telemetry streams become context — enriching the graph with operational data that no document could capture.

---

## Healthcare — Context at the Point of Care

**The challenge:** Medical imaging and clinical decision support systems must reason in real time, drawing on patient history, device calibrations, procedural protocols, and regulatory requirements. This context is too sensitive to leave the hospital network, and the latency requirements are too strict for cloud round-trips.

**Nexus on Jetson Thor — available now:**

```
  HOSPITAL / CLINICAL ENVIRONMENT
  ──────────────────────────────────────────────────────

  ┌──────────────┐     ┌──────────────────────────────┐
  │  Medical     │     │  JETSON THOR + NEXUS         │
  │  Imaging     │────►│                              │
  │              │     │  Context Graph:              │
  │  Endoscope   │     │  - Procedure history         │
  │  Sensors     │────►│  - Device calibrations       │
  │              │     │  - Patient protocols          │
  │  Patient     │     │  - Regulatory requirements   │
  │  Monitors    │────►│  - Temporal equipment data   │
  │              │     │                              │
  └──────────────┘     │  Real-time inference:        │
                       │  - Tissue classification      │
                       │  - Anomaly detection          │
                       │  - Clinical decision support  │
                       │                              │
                       │  Holoscan sensor processing  │
                       │  + Nexus context reasoning   │
                       └──────────────────────────────┘

  All patient data stays within the hospital network.
  128 GB memory holds clinical context graph + models.
  32 camera inputs for multi-stream medical imaging.
```

The context graph captures not just current sensor readings, but the full history of how equipment has behaved, how procedures have evolved, and what clinical protocols apply. When a medical imaging system encounters an anomaly, it reasons against this accumulated context — not just the current frame.

Jetson Thor's 128 GB of unified memory means the clinical context graph, the full model mixture (gemma 4B + MedGemma + FunctionGemma + EmbedGemma), and real-time sensor processing coexist without memory pressure. The 32-camera MIPI input handles multi-stream medical imaging natively.

**Future: NVIDIA IGX** brings functional safety certification via NVIDIA Halos and 10-year lifecycle support for medical device regulatory compliance — extending the same Nexus architecture into safety-certified surgical robotics and embedded medical devices.

Unovie provides managed support for FDA 21 CFR Part 11 compliance — audit logging, data integrity, access controls, and fine-tuning of MedGemma for clinical domain specificity — across distributed healthcare deployments.

---

## Manufacturing — Context on the Factory Floor

**The challenge:** Predictive maintenance requires correlating real-time sensor data against years of equipment history, maintenance records, and failure patterns. Quality inspection systems need to understand not just whether a part looks defective, but how defect patterns have evolved across production runs and what process changes caused them.

**Nexus on Jetson Thor — available now:**

```
  FACTORY FLOOR
  ──────────────────────────────────────────────────────

  ┌──────────────┐     ┌──────────────────────────────┐
  │  Vibration   │     │  JETSON THOR + NEXUS         │
  │  sensors     │────►│                              │
  │              │     │  Context Graph:              │
  │  Thermal     │     │  - Equipment maintenance     │
  │  cameras     │────►│    history                   │
  │              │     │  - Failure pattern database   │
  │  Quality     │     │  - Process parameter logs    │
  │  inspection  │────►│  - Quality spec evolution    │
  │  cameras     │     │  - Supplier component data   │
  │              │     │                              │
  │  CAN bus     │     │  Real-time inference:        │
  │  industrial  │────►│  - Predictive maintenance    │
  │  I/O         │     │  - Quality anomaly detection │
  │              │     │  - Process optimization       │
  └──────────────┘     └──────────────────────────────┘

  32 camera inputs for multi-station visual inspection.
  CAN bus integration for industrial automation.
  MIG partitioning: sensor processing + context reasoning.
```

The context graph connects sensor readings to maintenance records, maintenance records to parts suppliers, suppliers to quality incidents, and quality incidents to process changes. When a vibration sensor shows an anomaly, the system does not just flag the reading — it traces the pattern against the full equipment history and identifies whether this matches a known failure mode or represents something new.

Jetson Thor's CAN bus headers connect directly to industrial automation systems. The 4x 25 GbE networking handles high-bandwidth sensor data from across the factory floor. At 40–130W configurable power, it fits into existing factory infrastructure without dedicated cooling.

**Future: NVIDIA IGX** adds enterprise-grade reliability with BMC support (IGX T7000) and custom carrier board designs (IGX T5000) for permanent integration into production line equipment — with 10-year lifecycle support matching industrial equipment deployment cycles.

Unovie supports OSHA process safety and NERC CIP compliance for manufacturing and critical infrastructure deployments — including equipment history traceability, procedure version tracking, and continuous fine-tuning of domain-specific models for industrial anomaly detection.

---

## Maritime — Context at Sea

**The challenge:** Maritime vessels operate for weeks or months without reliable connectivity to shore-based data centers. Autonomous inspection, navigation support, and equipment monitoring must run entirely on-board, reasoning against accumulated operational context with no cloud fallback.

**Nexus on Jetson Thor — available now:**

```
  MARITIME VESSEL
  ──────────────────────────────────────────────────────

  ┌──────────────┐     ┌──────────────────────────────┐
  │  Navigation  │     │  JETSON THOR + NEXUS         │
  │  sensors     │────►│                              │
  │              │     │  Context Graph:              │
  │  Hull        │     │  - Vessel operational history│
  │  inspection  │────►│  - Equipment service records │
  │  cameras     │     │  - Regulatory compliance     │
  │              │     │  - Weather pattern history   │
  │  Engine      │     │  - Port procedure evolution  │
  │  telemetry   │────►│                              │
  │              │     │  On-board inference:         │
  │  Weather     │     │  - Autonomous inspection     │
  │  instruments │────►│  - Predictive maintenance    │
  │              │     │  - Compliance monitoring     │
  └──────────────┘     └──────────────────────────────┘

  Fully autonomous — no shore connectivity required.
  128 GB memory holds months of operational context.
  130W power envelope fits shipboard power budgets.
```

The vessel carries its own context graph — accumulated over months of operation, updated with every inspection, every sensor reading, every maintenance action. When the system detects corrosion in a hull inspection image, it reasons against the full history: when was this area last inspected, what was the progression rate, what maintenance was performed, and what similar patterns have led to in the past.

Jetson Thor's 128 GB of unified memory holds months of operational context without external storage dependencies. The 40–130W configurable power envelope operates within shipboard power budgets. Wi-Fi 6E provides local connectivity to crew devices while the vessel is disconnected from shore.

When the vessel reaches port and connects to shore infrastructure, the edge context graph synchronizes with the central Nexus deployment, merging operational data into the fleet-wide knowledge base.

Unovie's managed SLA covers maritime deployments end-to-end — including model updates staged for port connectivity windows, compliance monitoring against maritime safety regulations, and 24/7 support for distributed fail-safe environments where shore connectivity cannot be assumed.

---

## The NVIDIA IGX Platform — Industrial-Grade Future

Everything Nexus does on Jetson Thor today will scale to the NVIDIA IGX platform as it becomes available — with additional capabilities purpose-built for safety-certified industrial and medical environments.

```
  TODAY: JETSON THOR                     FUTURE: NVIDIA IGX THOR
  ──────────────────                     ────────────────────────

  2,070 FP4 TFLOPS                      5,581 FP4 TFLOPS
  Blackwell GPU (single)                 Blackwell iGPU + dGPU
  128 GB LPDDR5X                         Extended memory + 400 GbE
  40–130W                                Industrial power envelope

  JetPack 7 / CUDA 13                   + NVIDIA AI Enterprise
  vLLM / Holoscan                   + NVIDIA Halos (functional safety)
                                         + ConnectX-7 (enterprise networking)
                                         + 10-year lifecycle support
                                         + BMC (baseboard management)

  ┌────────────────────┐                 ┌─────────────────────────┐
  │  Jetson T5000      │                 │  IGX T7000 Board Kit    │
  │  Module            │                 │  (MicroATX, functional  │
  │                    │                 │   safety, BMC)          │
  │  Production-ready  │                 │                         │
  │  edge deployment   │                 │  IGX T5000 Module       │
  │  Available now     │                 │  (SoM, custom carrier   │
  │                    │                 │   boards, embedded)     │
  └────────────────────┘                 └─────────────────────────┘
```

**What IGX adds beyond Jetson Thor:**

| Capability | Jetson Thor (Now) | IGX Thor (Future) |
|------------|-------------------|-------------------|
| **AI compute** | 2,070 FP4 TFLOPS | 5,581 FP4 TFLOPS |
| **GPU configuration** | Single Blackwell GPU | Integrated + Discrete GPU |
| **Functional safety** | Software-level | NVIDIA Halos hardware safety |
| **Networking** | 4x 25 GbE | 400 GbE via ConnectX-7 |
| **Enterprise management** | Standard | BMC support (T7000) |
| **Lifecycle support** | Standard | 10-year enterprise |
| **Medical device certification** | Application-level | Platform-level safety |
| **Form factors** | Module + Dev Kit | Board kit + SoM |

The transition is seamless. Same CUDA 13.0. Same vLLM pipeline. Same Nexus Context Engine. The context graph built on Jetson Thor today migrates directly to IGX Thor — with more compute, functional safety certification, and enterprise-grade lifecycle support.

**IGX early adopters:** CMR Surgical (surgical robotics), Hitachi Rail (predictive maintenance), Joby Aviation (autonomous flight), Maven Robotics (industrial manufacturing).

As new models and capabilities emerge in the AI landscape, Unovie channels these innovations into the Nexus platform — fine-tuning domain-specific models, optimizing inference for new hardware, and delivering updates across customer fleets through managed CI/CD pipelines. The transition from Jetson Thor to IGX is managed by Unovie as part of the platform lifecycle.

---

## From Edge to Fleet — The Full Spectrum

The NVIDIA CUDA fabric means Nexus deploys across a continuous spectrum, from a single Jetson Thor at a remote site to a fleet of edge devices synchronized with a central data center:

```
  EDGE (Jetson Thor / IGX)               DATA CENTER (GPU Server)
  ────────────────────────               ────────────────────────

  ┌───────────────┐                      ┌──────────────────────┐
  │  Local Nexus  │                      │  Central Nexus       │
  │  Context      │     Sync when        │  Context Graph       │
  │  Graph        │══  connected  ══════►│                      │
  │               │                      │  Fleet-wide          │
  │  Real-time    │                      │  knowledge           │
  │  sensor data  │◄══  Updated  ═══════│  aggregation          │
  │  + operational│     models &         │                      │
  │  history      │     policies         │  Cross-site          │
  │               │                      │  pattern             │
  └───────────────┘                      │  analysis            │
                                         └──────────────────────┘

  Same CUDA fabric. Same model architecture. Same context graph.
  Edge runs autonomously. Data center sees the aggregate.
```

A hospital deploys Jetson Thor units at points of care, each building a local context graph from procedures and equipment data. The central Nexus deployment aggregates context across all sites — surfacing patterns that no single location could see. When IGX becomes available, safety-critical stations upgrade to certified hardware while the context graph transfers seamlessly.

A shipping company deploys Jetson Thor on every vessel. Each builds operational context autonomously at sea. When vessels dock, their context graphs merge into a fleet-wide knowledge base that reveals maintenance patterns, route optimizations, and compliance trends across the entire fleet.

A factory deploys Jetson Thor at every inspection station and production line. Each builds a local context graph from sensor data and quality records. The central deployment connects the dots across stations, shifts, and facilities — identifying patterns that emerge only at fleet scale.

The context graph is the same architecture at every scale. K3s provides a single Kubernetes control plane from edge to data center. The NVIDIA CUDA fabric ensures the models run with the same precision and the same optimization. eBPF delivers unified observability across every node. A platform engineering team manages the entire fleet — edge deployments, data center backends, model versions, security policies — through one set of tools, from a 130W Jetson Thor module today, to an IGX industrial platform tomorrow, to a full data center rack.

---

*See also: [Home](./index.md) | [Platform](./platform.md) | [Security](./security.md) | [Edge AI](./edge-ai.md) | [Use Cases](./use-cases.md)*
