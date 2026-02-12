import CaseStudyTemplate from "@/app/components/case-studies/case-study-template";

export default function CareofArticleBuilderCaseStudyPage() {
  return (
    <div className="jumbotron work-page" id="work">
      <div className="main2">
        <CaseStudyTemplate
          title="Care/of — Article builder & publishing"
          subtitle="Anonymized case study (selected details redacted)"
          meta="Role: Frontend Engineer • Stack: React/TypeScript • Scope: authoring UX + reliability"
          summary="Internal tools and publishing flows tend to have outsized ROI: they’re used daily, and small improvements compound. This page is scaffolded; we’ll fill it with specific problems, tradeoffs, and outcomes."
          checklist={[
            { label: "Who used it + how often" },
            { label: "Pain points before (time-to-publish, errors, brittleness)" },
            { label: "Key workflows (draft, preview, publish, rollback)" },
            { label: "Data model + content validation" },
            { label: "Reliability plan (autosave, conflict handling, retries)" },
            { label: "Performance considerations (editor perf, bundle size)" },
            { label: "Observability (logs/metrics, error reporting)" },
            { label: "Testing strategy and release process" },
            { label: "Outcome + measurable impact" },
          ]}
          highlights={[
            "Improved author confidence with better previews and validation.",
            "Reduced publishing friction by tightening core workflows.",
            "Built guardrails to prevent common content issues.",
          ]}
          sections={[
        {
          title: "The problem",
          body: (
            <p>
              Describe the publishing workflow, why it was painful, and what constraints
              mattered most.
            </p>
          ),
        },
        {
          title: "Users & workflows",
          body: (
            <ul>
              <li>Authors and editors</li>
              <li>Drafting, previewing, publishing</li>
              <li>Failure modes and recovery</li>
            </ul>
          ),
        },
        {
          title: "Approach",
          body: (
            <ul>
              <li>Make the happy path fast and obvious</li>
              <li>Add guardrails where mistakes are common</li>
              <li>Design for reliability (autosave, retries, conflict handling)</li>
            </ul>
          ),
        },
        {
          title: "What I’d do next",
          body: (
            <ul>
              <li>Add richer analytics around publishing latency and failures</li>
              <li>Audit accessibility in the editor UI</li>
              <li>Document operational runbooks for common issues</li>
            </ul>
          ),
        },
          ]}
        />
      </div>
    </div>
  );
}
