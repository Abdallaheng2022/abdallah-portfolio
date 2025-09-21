import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const LINKS = {
  github: "https://github.com/Abdallaheng2022",
  linkedin: "https://www.linkedin.com/in/abdallah-elbohy-b2b2aa113/",
  email: "mailto:abdallah.ramzy.albohy.96@gmail.com",
  resume:
    "https://drive.google.com/file/d/1mXMd_wh1gny7rHMkFv0poEdwnciy2I0g/view?usp=sharing",
};

const SKILLS: Record<string, string[]> = {
  "AI & ML": [
    "LLM/RAG systems",
    "NLP",
    "Machine Learning",
    "Deep Learning",
    "OCR / Document AI",
    "Recommendation Systems",
  ],
  "Tech Stack": [
    "Python",
    "PyTorch/TensorFlow",
    "Hugging Face",
    "LangGraph / LangChain",
    "FAISS / Qdrant",
    "FastAPI",
    "Airflow",
    "MLflow / Langfuse",
    "Docker",
  ],
};

type Project = {
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

const PROJECTS: Project[] = [
  {
    title: "BelgeNavi — Citation-First Assistant",
    period: "2025",
    summary:
      "Turns natural-language questions about Turkish administrative workflows (residence permits, NVI/address, MERSİS) into an actionable checklist with verified sources (URL + last seen). Multilingual TR/EN/AR.",
    highlights: [
      "Agentic graph: Classifier → Retriever → Citer → Checklist → Form Preview → Guardrails",
      "RAG over curated snapshots; FAISS (per-language) with optional Qdrant",
      "FastAPI API + minimal UI; observability via Langfuse; evals via RAGAS/MLflow",
    ],
    stack: ["Python", "LangGraph", "LangChain", "FAISS/Qdrant", "FastAPI"],
    links: [
      { label: "GitHub", href: LINKS.github },
      { label: "Project README", href: "#" },
    ],
  },
  {
    title: "TrialMatch — First-Pass Clinical Trial Matcher",
    period: "2025",
    summary:
      "Asks a short patient profile and ranks ClinicalTrials.gov studies, returning Likely / Unlikely / Need-Info with concise reasons and official NCT links.",
    highlights: [
      "Pipeline: Intake → Trials Search → Eligibility Parser → Rule-based Matcher → Explainer → Guardrails",
      "Vector search via FAISS; FastAPI endpoint (POST /match); Streamlit demo",
      "Guardrails ensure decision set + disclaimer; transparent links to NCT",
    ],
    stack: ["Python", "FAISS", "FastAPI", "Streamlit"],
    links: [
      { label: "GitHub", href: LINKS.github },
      { label: "Project README", href: "#" },
    ],
  },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <div className="container-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="container-6xl flex items-center justify-between py-3">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-slate-900"
          >
            Abdallah Elbohy — Portfolio
          </a>
          <nav className="hidden gap-6 md:flex">
            <a
              href="#projects"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div id="top" className="container-6xl pt-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            LLM & Generative AI Engineer
          </h1>
          <p className="mt-4 max-w-3xl text-slate-700">
            MSc Computer Engineering with international experience across data
            science, NLP, and LLM‑RAG application design. I build multilingual,
            production‑ready AI systems that combine research, engineering, and
            infrastructure — with an emphasis on citation‑first reliability,
            observability, and clean API contracts.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={LINKS.resume}
              className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Download Resume
            </a>
            <a
              href={LINKS.github}
              className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              LinkedIn
            </a>
            <a
              href={LINKS.email}
              className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <div key={p.title} className="card">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>
                <Badge>{p.period}</Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {p.summary}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm font-medium text-slate-900 underline underline-offset-4 hover:no-underline"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} className="card">
              <h4 className="text-sm font-semibold text-slate-900">{group}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((it) => (
                  <Badge key={it}>{it}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-4">
          <div className="card">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-semibold text-slate-900">
                LLM & Generative AI Engineer (Independent)
              </h4>
              <Badge>2024–2025</Badge>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Designed and shipped multilingual agentic LLM+RAG micro-apps
                with clean APIs and observability.
              </li>
              <li>
                Built vector retrieval over curated snapshots; maintained
                freshness policies (TTL, last seen).
              </li>
              <li>
                Delivered demos and documentation suitable for production
                hardening.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="space-y-4">
          <div className="card">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-semibold text-slate-900">
                MSc — Computer Engineering
              </h4>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Graduate studies focused on data science, NLP, and applied machine
              learning.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="card">
          <p className="text-sm text-slate-700">
            I’m open to roles and projects in{" "}
            <strong>LLM/RAG, agentic systems, and production AI</strong>. The
            fastest way to reach me is via email.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={LINKS.email}
              className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Email
            </a>
            <a
              href={LINKS.github}
              className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-slate-200 py-10">
        <div className="container-6xl text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Abdallah Elbohy — Portfolio
        </div>
      </footer>
    </div>
  );
}
