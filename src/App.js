import { useEffect, useState } from "react";
import "./App.css";

const Arrow = () => (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
);

const projects = [
  {
    index: "01",
    title: "Twine multichain indexer",
    type: "Blockchain infrastructure",
    copy: "Ingests and persists EVM, Solana, and Twine L2 data with WebSocket subscriptions, polling fallbacks, transaction parsing, and search.",
    stack: "Rust · Tokio · Axum · PostgreSQL",
    visual: "indexer",
    status: "Cedro Labs / Twine Labs",
    href: "https://twinelabs.xyz/",
  },
  {
    index: "02",
    title: "Multichain faucet",
    type: "Transaction infrastructure",
    copy: "A backend service for token distribution across Sepolia, Twine, and Solana, with per-chain concurrency control and gas management.",
    stack: "Rust · Tokio · RPC · Mutex",
    visual: "faucet",
    status: "Team project",
  },
  {
    index: "03",
    title: "CEX bridge",
    type: "Financial infrastructure",
    copy: "Processes deposit confirmations through Kafka while keeping balance and deposit updates atomic under concurrent workloads.",
    stack: "Rust · Kafka · PostgreSQL · BIP-39",
    visual: "bridge",
    status: "Team project",
  },
  {
    index: "04",
    title: "Campaign backend",
    type: "Identity and integrations",
    copy: "Authentication infrastructure with Privy, cached JWKS validation, social OAuth, and governance service integrations.",
    stack: "Rust · Privy · OAuth · JWKS",
    visual: "auth",
    status: "Team project",
  },
  {
    index: "05",
    title: "Fyralis",
    type: "Company operating system",
    copy: "An ongoing initiative for connecting organizational knowledge through ingestion, entity resolution, retrieval, and event-driven workflows.",
    stack: "PostgreSQL · pgvector · RAG · Agents",
    visual: "fyralis",
    status: "In development",
  },
  {
    index: "06",
    title: "Codex browser assistant",
    type: "Developer tool concept",
    copy: "A planned browser workspace for contextual coding assistance using text, screenshots, model controls, and focused conversation.",
    stack: "Browser extensions · AI · Context systems",
    visual: "codex",
    status: "Concept and planning",
  },
];

const research = [
  ["01", "Quantum computing", "Quantum algorithms, information, and the interface between classical systems and emerging computation."],
  ["02", "Zero-knowledge systems", "Proof systems, verifiable computation, ZK rollups, and cryptographic settlement infrastructure."],
  ["03", "Distributed systems", "Coordination, delivery semantics, consistency models, fault tolerance, and event-driven state."],
  ["04", "Systems programming", "Rust, memory safety, networking, runtime behavior, concurrency, and performance engineering."],
];

function ProjectVisual({ kind }) {
  const labels = {
    indexer: ["EVM", "SOL", "L2", "INDEX", "SQL"],
    faucet: ["REQUEST", "LOCK", "CHAIN", "TX", "FINAL"],
    bridge: ["DEPOSIT", "KAFKA", "CONFIRM", "LOCK", "BALANCE"],
    auth: ["PRIVY", "JWKS", "OAUTH", "API", "USER"],
    fyralis: ["SOURCES", "INGEST", "ENTITY", "GRAPH", "AGENT"],
    codex: ["TEXT", "IMAGE", "CONTEXT", "MODEL", "ANSWER"],
  }[kind];

  return (
    <div className={`project-visual project-visual--${kind}`} aria-hidden="true">
      <div className="visual-rail" />
      {labels.map((label, index) => (
        <span className="visual-node" key={label} style={{ "--i": index }}>
          <i />{label}
        </span>
      ))}
    </div>
  );
}

function ProjectStudy({ project, order }) {
  const Wrapper = project.href ? "a" : "article";
  const wrapperProps = project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {};
  return (
    <Wrapper className={`project-study ${project.href ? "project-study--linked" : ""}`} style={{ "--card-index": order }} {...wrapperProps}>
      <div className="project-study__cover">
        <ProjectVisual kind={project.visual} />
        <span className="project-study__number">{project.index}</span>
      </div>
      <div className="project-study__content">
        <div className="project-study__title">
          <p>{project.type}</p>
          <h3>{project.title}</h3>
          <span>{project.status}</span>
        </div>
        <p className="project-study__copy">{project.copy}</p>
        <div className="project-study__meta">
          <span>{project.stack}</span>
          {project.href && <span className="project-study__link">View project <Arrow /></span>}
        </div>
      </div>
    </Wrapper>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.type = "service";
    document.documentElement.dataset.radius = "sharp";
    document.documentElement.dataset.buttons = "block";
    document.documentElement.setAttribute("data-motion", "");

    const galleries = document.querySelectorAll("[data-project-gallery]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.18 }
    );
    galleries.forEach((gallery) => observer.observe(gallery));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav nav--split ${menuOpen ? "is-open" : ""}`}>
        <div className="wrap nav__bar">
          <a className="skip-link" href="#main">Skip to content</a>
          <a className="nav__logo" href="#top" onClick={closeMenu} aria-label="Prajwal Adhikari, home">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span>Prajwal Adhikari</span>
          </a>
          <nav className="nav__links" aria-label="Main navigation">
            <a className="nav__link" href="#about" onClick={closeMenu}>About</a>
            <a className="nav__link" href="#experience" onClick={closeMenu}>Experience</a>
            <a className="nav__link" href="#projects" onClick={closeMenu}>Projects</a>
            <a className="nav__link" href="#research" onClick={closeMenu}>Research</a>
          </nav>
          <div className="nav__actions">
            <a className="btn btn--primary" href="https://www.linkedin.com/in/prajwal-adhikari-9026381a6/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded={menuOpen} aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero hero--split" id="top" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 id="hero-title">Backend Engineer</h1>
                <p className="hero__lead">I build reliable infrastructure in Rust and study the systems beneath modern software—from blockchain data to distributed coordination.</p>
                <p className="hero-context">Computer Science · Kathmandu University</p>
                <div className="btn-row">
                  <a className="btn btn--primary" href="https://www.linkedin.com/in/prajwal-adhikari-9026381a6/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
                  <a className="btn btn--secondary" href="#projects">View selected work</a>
                </div>
                <dl className="hero-facts">
                  <div><dt>Primary language</dt><dd>Rust</dd></div>
                  <div><dt>Focus</dt><dd>Infrastructure</dd></div>
                  <div><dt>Based in</dt><dd>Nepal</dd></div>
                </dl>
              </div>
              <div className="hero-visual hero__visual frame frame--photo">
                <img className="frame__img" src="/profile.jpg" alt="Prajwal Adhikari" width="540" height="540" fetchPriority="high" />
                <div className="portrait-note">
                  <span>Current direction</span>
                  <strong>Distributed systems · ZK infrastructure</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--about" id="about" aria-labelledby="about-title">
          <div className="wrap">
            <h2 id="about-title">Engineering with first principles</h2>
            <div className="about-layout">
              <div className="about-copy">
                <p className="lead-copy">I am a Computer Science graduate and software engineer focused on backend infrastructure, systems programming, and blockchain technology.</p>
                <p>I prefer understanding the constraints beneath an abstraction before choosing it. That means making data flows explicit, defining invariants, and treating failure behavior as part of the design.</p>
                <p>My long-term direction is systems and infrastructure engineering: designing production software that stays understandable as its scale and complexity grow.</p>
              </div>
              <div className="principles card m-nolift" aria-label="Engineering principles">
                <div><span>01</span><strong>Understand before abstracting</strong><p>Study the mechanism, then choose the boundary.</p></div>
                <div><span>02</span><strong>Architecture before implementation</strong><p>Define responsibilities, state, and data flow first.</p></div>
                <div><span>03</span><strong>Correctness before complexity</strong><p>Make invariants and failure modes visible.</p></div>
                <div><span>04</span><strong>Learning through building</strong><p>Turn documentation and theory into working systems.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--experience" id="experience" aria-labelledby="experience-title">
          <div className="wrap">
            <h2 id="experience-title">Professional experience</h2>
            <div className="experience-layout">
              <div className="experience-copy">
                <div className="experience-meta"><span>Nov 2025 — Feb 2026</span><span>Nepal</span></div>
                <h3>Cedro Labs / Twine Labs</h3>
                <p className="role">Software Engineering Intern · Blockchain and backend infrastructure</p>
                <p>Contributed to multichain services spanning EVM, Solana, and Twine L2. The work covered indexing, transaction reliability, event processing, authentication, and database consistency.</p>
                <div className="stack-list">
                  <span>Rust</span><span>Tokio</span><span>Axum</span><span>PostgreSQL</span><span>Kafka</span><span>Alloy</span><span>Solana SDK</span><span>SP1</span>
                </div>
              </div>
              <div className="system-map" aria-label="Multichain infrastructure data flow">
                <div className="map-sources"><span>EVM</span><span>Solana</span><span>Twine L2</span></div>
                <div className="map-lines"><i /><i /><i /></div>
                <div className="map-core"><small>Rust services</small><strong>Index · verify · process</strong></div>
                <div className="map-lines"><i /><i /><i /></div>
                <div className="map-output"><span>PostgreSQL</span><span>Kafka</span><span>APIs</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--projects" id="projects" aria-labelledby="projects-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="projects-title">Selected engineering work</h2>
              <p>Infrastructure, backend systems, and production-oriented technical work.</p>
            </div>
            <div className="project-grid" data-project-gallery>
              {projects.slice(0, 3).map((project, index) => <ProjectStudy project={project} order={index} key={project.index} />)}
            </div>
          </div>
        </section>

        <section className="section section--projects section--projects-secondary" id="independent-work" aria-labelledby="independent-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="independent-title">Independent and exploratory work</h2>
              <p>Projects in development and concepts extending into organizational intelligence and developer tooling.</p>
            </div>
            <div className="project-grid" data-project-gallery>
              {projects.slice(3).map((project, index) => <ProjectStudy project={project} order={index} key={project.index} />)}
            </div>
          </div>
        </section>

        <section className="section section--research" id="research" aria-labelledby="research-title">
          <div className="wrap">
            <div className="research-head">
              <h2 id="research-title">Research and technical interests</h2>
              <p>Beyond application development, I am interested in the foundations of computation and dependable infrastructure.</p>
            </div>
            <div className="research-grid">
              {research.map(([number, title, copy]) => (
                <article className="research-item" key={number}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <p className="research-statement">From production systems to the foundations of computation.</p>
          </div>
        </section>
      </main>

      <footer className="closing footer--dark" id="contact">
        <div className="wrap footer-wrap">
          <div className="closing__cta close--type">
            <p>Open to thoughtful technical conversations</p>
            <h2>Let’s discuss systems, Rust, and hard engineering problems.</h2>
            <a className="btn btn--primary btn--xl" href="https://www.linkedin.com/in/prajwal-adhikari-9026381a6/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
          </div>
          <div className="footer-directory">
            <div className="portfolio-brand">
              <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
              <strong>Prajwal<br />Adhikari</strong>
            </div>
            <div className="footer-col"><span>Navigate</span><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#research">Research</a></div>
            <div className="footer-col"><span>Connect</span><a href="https://github.com/Prajwal-Adhikari" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/prajwal-adhikari-9026381a6/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
            <div className="footer-col"><span>Focus</span><p>Rust</p><p>Distributed systems</p><p>Blockchain infrastructure</p></div>
          </div>
          <div className="footer-legal"><span>© 2026 Prajwal Adhikari</span><span>Designed and developed in Nepal</span></div>
        </div>
      </footer>
    </>
  );
}

export default App;
