import Link from "next/link";
import React from "react";

type ChecklistItem = {
  label: string;
  checked?: boolean;
};

type CaseStudyLink = {
  label: string;
  href: string;
};

type CaseStudySection = {
  title: string;
  body: React.ReactNode;
};

type Props = {
  title: string;
  subtitle?: string;
  meta?: string;
  summary?: string;
  checklist: ChecklistItem[];
  highlights?: string[];
  links?: CaseStudyLink[];
  sections: CaseStudySection[];
};

export default function CaseStudyTemplate({
  title,
  subtitle,
  meta,
  summary,
  checklist,
  highlights,
  links,
  sections,
}: Props) {
  return (
    <div className="case-study">
      <div className="case-study-header">
        <div className="case-study-breadcrumbs">
          <Link href="/work">← All case studies</Link>
        </div>
        <h1 className="case-study-title">{title}</h1>
        {subtitle ? <h2 className="case-study-subtitle">{subtitle}</h2> : null}
        {meta ? <div className="case-study-meta">{meta}</div> : null}
        {summary ? <p className="case-study-summary">{summary}</p> : null}
      </div>

      <section className="case-study-block">
        <h3>Checklist (gather these items)</h3>
        <ul className="case-study-checklist">
          {checklist.map((item) => (
            <li key={item.label}>
              <input type="checkbox" checked={Boolean(item.checked)} readOnly />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {highlights?.length ? (
        <section className="case-study-block">
          <h3>Highlights</h3>
          <ul className="case-study-bullets">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {links?.length ? (
        <section className="case-study-block">
          <h3>Links</h3>
          <ul className="case-study-links">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {sections.map((s) => (
        <section className="case-study-block" key={s.title}>
          <h3>{s.title}</h3>
          <div className="case-study-body">{s.body}</div>
        </section>
      ))}
    </div>
  );
}
