import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Code2, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-semibold">Plone & AI</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm hover:text-primary transition-colors">
              Features
            </a>
            <a href="#roadmap" className="text-sm hover:text-primary transition-colors">
              Roadmap
            </a>
            <a href="#cases" className="text-sm hover:text-primary transition-colors">
              Case Studies
            </a>
            <Button size="sm" variant="default">
              Learn More
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="w-full py-12">
          <div className="flex justify-center px-4 md:px-8">
            <img
              src="/images/PloneandAISymbiosis.gif"
              alt="Plone and AI Symbiosis - pulsing network lines flowing into Plone logo"
              className="rounded-lg w-full max-w-2xl border border-border mb-12"
            />
          </div>
        </div>
        <div className="w-full py-20 md:py-32">
          <div className="px-4 md:px-8">
            <div className="space-y-8 max-w-3xl">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Plone & AI: Sovereign Intelligence for the Enterprise CMS
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Plone combines the precision of community-driven development with the power of the Model Context Protocol
                  (MCP). A strategic approach to secure, open-source AI integration.
                </p>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  Explore the Vision <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Roadmap
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Beyond One-Size-Fits-All: Building AI Tools for Real-World Challenges</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Unlike centralized platforms that impose generic AI solutions, Plone focuses on high-quality, specialized
              components designed for specific use cases. Think artisan approach instead of “AI factory”: the goal is not
              mass-produced outputs, but precise, reviewable building blocks that fit into real editorial workflows.{" "}
              <strong>Community-driven development—guided by real-world, day-to-day practice problems</strong> ensures that
              innovation is driven by those who build and use the system, resulting in AI tools that are purposeful, secure,
              and deeply integrated into the Plone experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border space-y-4">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-lg">Data Sovereignty</h3>
              <p className="text-sm text-muted-foreground">
                Full control over information flow, ensuring sensitive data remains within the designated infrastructure.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border space-y-4">
              <Code2 className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-lg">Open Source Integrity</h3>
              <p className="text-sm text-muted-foreground">
                Transparent AI integration without the “black box” risks of proprietary systems.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border space-y-4">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-lg">Community Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Rapid iteration of high-quality modules through the dedicated Plone ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Technology Section */}
      <section className="py-20">
        <div className="container space-y-12">
          <div className="space-y-12">
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-4xl font-bold">Bridging the Gap: Model Context Protocol (MCP)</h2>
              <p className="text-lg text-muted-foreground">
                Plone positions itself as a forward-thinking, AI-ready platform by implementing the Model Context Protocol.
                This standardized interface acts as a secure bridge, allowing Large Language Models (LLMs) and AI agents to
                interact directly with Plone content, search functions, and workflows without exposing sensitive
                infrastructure.
              </p>
              <p className="text-lg text-muted-foreground">
                The MCP server enables seamless integration between Plone and modern AI agents (such as Claude, ChatGPT, or
                open-source alternatives). This means that AI systems can query content, extract structured data, and
                generate insights while maintaining full control over data sovereignty. The protocol standardizes how AI
                tools communicate with content management systems, eliminating vendor lock-in and enabling composable AI
                architectures.
              </p>

              {/* Extra MCP text */}
              <p className="text-lg text-muted-foreground">
                In practice, MCP turns Plone into a permission-aware “source of truth” for agent workflows. Agents can
                retrieve only what they are allowed to see, propose drafts or structured extractions, and hand results back
                to editors for review—fully aligned with workflows, versioning, and audit requirements.
              </p>
              <p className="text-lg text-muted-foreground">
                Because MCP is model-agnostic, you can switch providers or deployment styles (hosted, on-prem, hybrid)
                without rebuilding your CMS integration each time. Your governance rules stay stable while the model layer
                evolves.
              </p>
            </div>

            {/* MCP diagram moved here: between intro and details */}
            <div className="flex justify-center">
              <img
                src="/images/MCP-Adapter.jpg"
                alt="The Bridge - MCP Adapter connecting Plone Data to LLM AI"
                className="rounded-lg w-full max-w-2xl border border-border"
              />
            </div>

            {/* MCP details (remain below diagram) */}
            <div className="space-y-4 pt-2 max-w-3xl">
              <div className="space-y-2">
                <h4 className="font-semibold">Typical MCP-Powered Workflows</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  <li>Permission-aware retrieval and summarization for editors, reviewers, and support teams.</li>
                  <li>Structured extraction into fields and taxonomies (entities, topics, locations, vocabularies).</li>
                  <li>Batch operations like alt-text generation, metadata completion, and content quality checks.</li>
                  <li>Agent-assisted automation that still respects approvals, publishing workflows, and audit trails.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Standardized Interface</h4>
                <p className="text-sm text-muted-foreground">
                  A dedicated MCP server enables AI agents to interact with Plone via a unified protocol, facilitating
                  batch processing, structured data extraction, and real-time content queries without custom integrations.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Composable AI Infrastructure</h4>
                <p className="text-sm text-muted-foreground">
                  Blueprints for open-source AI stacks integrate Plone as a central content hub within a broader ecosystem
                  of AI tools, enabling teams to build custom AI workflows tailored to specific needs.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Data Sovereignty & Security</h4>
                <p className="text-sm text-muted-foreground">
                  AI interactions can remain inside your infrastructure. No content is sent to external providers unless
                  explicitly configured, supporting compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-secondary/50 py-20">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">AI-Enhanced Content Management – Available Today</h2>
            <p className="text-lg text-muted-foreground">
              The AI capabilities below are implemented as separate, optional add-ons that extend Plone in a modular way.
              They are community-built enhancements designed for real-world needs—without being part of the Plone core
              distribution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold border-l-4 border-primary pl-4">AI Gateway & Infrastructure</h3>
              <ul className="space-y-4">
                <li className="space-y-2">
                  <h4 className="font-semibold text-sm">Centralized Management (Add-on pattern)</h4>
                  <p className="text-sm text-muted-foreground">
                    A lightweight integration layer can provide secure authentication and dynamic proxying for microservices
                    and AI tools—kept separate from core.
                  </p>
                </li>
                <li className="space-y-2">
                  <h4 className="font-semibold text-sm">Unified AI Client (Add-on)</h4>
                  <p className="text-sm text-muted-foreground">
                    Integration with OpenRouter allows access to various LLMs through a single utility, simplifying the
                    deployment of custom AI prompts.
                  </p>
                </li>

                {/* Added Volto add-ons */}
                <li className="space-y-2">
                  <h4 className="font-semibold text-sm">Site Settings Registry (volto-site-settings)</h4>
                  <p className="text-sm text-muted-foreground">
                    A settings add-on lets blocks and integrations read centralized configuration (endpoints, feature flags,
                    UI copy) without forking the project.
                  </p>
                </li>
                <li className="space-y-2">
                  <h4 className="font-semibold text-sm">Security Hardening (volto-middleware-helmet)</h4>
                  <p className="text-sm text-muted-foreground">
                    Middleware add-ons can apply hardened security headers and safer defaults—helpful when introducing AI
                    routes and proxies.
                  </p>
                </li>
                <li className="space-y-2">
                  <h4 className="font-semibold text-sm">CORS & External API Proxy (volto-corsproxy)</h4>
                  <p className="text-sm text-muted-foreground">
                    A proxy add-on can simplify connecting to external AI services and internal microservices without
                    brittle frontend workarounds.
                  </p>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold border-l-4 border-primary pl-4">Smart Content Automation</h3>
              <ul className="space-y-4">
                <li className="space-y-2">
                  <h4 className="font-semibold text-sm">Automated Alt-Texts (Add-on)</h4>
                  <p className="text-sm text-muted-foreground">
                    AI-based suggestions for image descriptions generated upon upload—improving accessibility with minimal
                    manual effort.
                  </p>
                </li>
                <li className="space-y-2">
                  <h4 className="font-semibold text-sm">NLP-Driven Taxonomy (Add-on)</h4>
                  <p className="text-sm text-muted-foreground">
                    Natural Language Processing models analyze text to extract keywords and integrate results into Plone&apos;s
                    taxonomy system.
                  </p>
                </li>

                {/* Added Volto add-on */}
                <li className="space-y-2">
                  <h4 className="font-semibold text-sm">Chatbot & Knowledge Assistant (volto-chatbot)</h4>
                  <p className="text-sm text-muted-foreground">
                    A chatbot UI add-on can provide retrieval-augmented answers grounded in Plone content—ideal for docs,
                    intranets, and knowledge bases.
                  </p>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold border-l-4 border-primary pl-4">SEO & Structured Data Management</h3>
              <ul className="space-y-4">
                <li className="space-y-2">
                  <h4 className="font-semibold text-sm">Schema-Driven SEO & Structured Data (Add-on)</h4>
                  <p className="text-sm text-muted-foreground">
                    Add-ons can generate, validate, and maintain structured data (JSON-LD / schema.org) based on your
                    content schemas—improving rich results and discoverability without hard-coding SEO logic into core.
                  </p>
                </li>
                <li className="space-y-2">
                  <h4 className="font-semibold text-sm">Metadata & Snippet Optimization (Add-on)</h4>
                  <p className="text-sm text-muted-foreground">
                    Automated population of SEO-critical fields and consistent snippets across content types to reduce
                    manual copy-paste and improve quality.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Big button under AI list (with links) */}
          <div className="pt-8 flex flex-col items-center gap-3">
            <Button size="lg" className="gap-2" asChild>
              <a href="https://plone.org/download/add-ons" target="_blank" rel="noreferrer">
                View all available add-ons <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <a
              href="https://github.com/collective/awesome-volto"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Explore curated Volto add-ons
            </a>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Roadmap 2026: Performance, Accessibility, and AI</h2>
            <p className="text-lg text-muted-foreground">
              The strategic vision for the upcoming releases places AI within a broader focus on a stable production line
              (6.x) and an innovation line (7.0) — enabling sovereign, modular adoption without compromising governance.
            </p>
          </div>
<img
              src="/images/roadmap2026.jpg"
              alt="Roadmap 2026 - Progressive release timeline"
              className="rounded-lg w-full max-w-3xl border border-border"
            />
          {/* Clear text steps (plone.org-aligned, with AI storyline) */}
          <div className="space-y-12">
            <div className="space-y-6 max-w-3xl">
              <div className="border-l-4 border-primary pl-6 space-y-2">
                <h3 className="text-2xl font-bold">Plone 6.1 (2025)</h3>
                <p className="text-muted-foreground">
                  Stable foundation for governed AI adoption. The long-term 6.x line provides reliability, upgrade safety,
                  and a strong governance baseline that AI integrations can build on—especially when delivered as modular
                  add-ons.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 space-y-2">
                <h3 className="text-2xl font-bold">Plone 6.2 (Q4 2025 / Q1 2026)</h3>
                <p className="text-muted-foreground">
                  Editor-first groundwork for human-in-the-loop AI. Improvements in the editing experience make it easier
                  to review AI suggestions, keep changes safe and reversible, and integrate assistance directly into real
                  editorial workflows.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 space-y-2">
                <h3 className="text-2xl font-bold">Plone 6.3 (2026)</h3>
                <p className="text-muted-foreground">
                  First dedicated AI features: focus on AI enhancements, including the Plone Model Context Protocol (MCP)
                  server implementation and further AI capabilities via PLIPs. This enables standardized, permission-aware
                  agent workflows and a stable foundation for AI add-ons.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 space-y-2">
                <h3 className="text-2xl font-bold">Plone 7 (Innovation line → 7.0)</h3>
                <p className="text-muted-foreground">
                  Next-generation performance, flexibility, and accessibility—an AI-ready architecture. Plone 7 strengthens
                  the platform fundamentals that make AI experiences smoother (assistants, quality automation, semantic
                  enrichment) while keeping the stable 6.x line as the safe production base.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="bg-secondary/50 py-20">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Real-World Impact: Community-Driven AI Stories</h2>
            <p className="text-lg text-muted-foreground">
              Practical applications demonstrate the versatility of Plone&apos;s AI approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold text-lg">Inclusive Education</h3>
              <p className="text-sm text-muted-foreground">
                Implementation of live subtitling for video content in large-scale meeting environments, providing real-time
                transcription and accessibility.
              </p>
              <Button size="sm" variant="outline" className="gap-2" asChild>
                <a
                  href="https://community.plone.org/t/live-video-transcription-for-conference/10342"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-lg">Intelligent Support</h3>
              <p className="text-sm text-muted-foreground">
                Deployment of AI-powered chatbots for Plone documentation, providing precise answers based on structured
                content and technical manuals.
              </p>
              <Button size="sm" variant="outline" className="gap-2" asChild>
                <a href="https://github.com/eea/volto-chatbot" target="_blank" rel="noreferrer">
                  View add-on <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-semibold text-lg">Content Transformation</h3>
              <p className="text-sm text-muted-foreground">
                AI-assisted migration tools that leverage LLMs to clean, restructure, and port legacy data into modern Plone
                6 environments.
              </p>
              <Button size="sm" variant="outline" className="gap-2" asChild>
                <a
                  href="https://community.plone.org/t/porting-a-plone-4-codebase-to-plone-6-1-using-claude-code-a-success-story/21675"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read story <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Developer / Community CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">For Plone Developers</span>
            </div>

            <h2 className="text-4xl font-bold">Build Plone’s AI Future — in the Open</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Plone evolves through community work. If you build (or want to build) Plone, join the conversation: propose
              and review PLIPs, develop AI-related add-ons, and sprint with other contributors to turn real-world needs into
              maintainable features.
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://community.plone.org/" target="_blank" rel="noreferrer">
                Join the Community
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://plone.org/news-and-events/sprints" target="_blank" rel="noreferrer">
                Join the Next Sprint
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://plone.org/roadmap" target="_blank" rel="noreferrer">
                Explore the Roadmap
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="font-semibold">About Plone</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="hover:text-foreground transition-colors">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="https://community.plone.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://docs.plone.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://training.plone.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="https://plone.org/support"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://community.plone.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/plone"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://plone.org/contact"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://plone.org/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="https://plone.org/accessibility"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Accessibility
                  </a>
                </li>
                <li>
                  <a
                    href="https://plone.org/license"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Plone Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
