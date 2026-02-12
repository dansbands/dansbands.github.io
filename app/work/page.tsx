import Link from "next/link";

const CASE_STUDIES = [
  {
    title: "Multi-step payments form flow",
    slug: "payment-form-flow",
    status: "Draft",
    blurb:
      "Refined a nine-step internal payments flow: validation clarity, accessibility, and safer state transitions.",
  },
  {
    title: "Care/of — Article builder & publishing",
    slug: "careof-article-builder",
    status: "Draft",
    blurb:
      "Content platform work: authoring UX, performance, and reliability in production workflows.",
  },
] as const;

export default function WorkIndexPage() {
  return (
    <div className="jumbotron work-page" id="work">
      <div className="main2">
        <div className="work-index">
          <h1 className="work-index-title">Work</h1>
          <p className="work-index-intro">
            Case studies that show how I build: constraints, tradeoffs, results, and what
            I’d do next.
          </p>

          <div className="work-index-list">
            {CASE_STUDIES.map((cs) => (
              <div className="work-index-card" key={cs.slug}>
                <div className="work-index-card-header">
                  <h2 className="work-index-card-title">
                    <Link href={`/work/${cs.slug}`}>{cs.title}</Link>
                  </h2>
                  <span className="work-index-status">{cs.status}</span>
                </div>
                <p className="work-index-card-blurb">{cs.blurb}</p>
                <Link className="work-index-card-link" href={`/work/${cs.slug}`}>
                  Read case study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
