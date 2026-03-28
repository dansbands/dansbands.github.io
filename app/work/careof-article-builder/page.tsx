import CaseStudyTemplate from "@/app/components/case-studies/case-study-template";

export default function CareofArticleBuilderCaseStudyPage() {
  return (
    <div className="jumbotron work-page" id="work">
      <div className="main2">
        <CaseStudyTemplate
          title="Care/of — Article builder & publishing"
          subtitle="Anonymized case study (selected details redacted)"
          meta="Role: Software Engineer (Full Stack / CMS) • Stack: React/TypeScript • Scope: content systems + SEO-driven publishing"
          checklist={[
            { label: "Context", checked: true },
            { label: "Problem", checked: true },
            { label: "Solution", checked: true },
            { label: "Impact & Business Value", checked: true },
            { label: "Eliminating the Engineering Bottleneck", checked: true },
            { label: "Scalable Content System", checked: true },
            {
              label: "Technical Detail: SEO-Driven Structured Content",
              checked: true,
            },
            { label: "My Contributions", checked: true },
            { label: "Related Work: Product Catalog", checked: true },
          ]}
          highlights={[
            "The article builder became a key driver of organic growth during a period of rising customer acquisition costs.",
            "This enabled product managers to assemble fully designed, production-ready articles without engineering involvement.",
            "This eliminated hundreds of hours of engineering effort and removed a major bottleneck between content and publishing.",
          ]}
          sections={[
            {
              title: "Context",
              body: (
                <>
                  <p>
                    Care/of was undergoing a brand and product evolution focused on
                    personalization and content-driven engagement. As part of this
                    effort, I worked on internal tooling to support content creation and
                    product presentation.
                  </p>
                  <p>
                    I partnered closely with design to bring new systems to life in
                    production, translating evolving concepts into scalable,
                    maintainable frontend architecture.
                  </p>
                </>
              ),
            },
            {
              title: "Problem",
              body: (
                <>
                  <p>
                    The existing content workflow was fragmented and difficult to
                    scale. Editors lacked a structured way to compose rich, branded
                    content, and engineering lacked a reusable system to support
                    evolving layouts and components.
                  </p>
                  <p>
                    This created bottlenecks between design, content, and engineering,
                    slowing down iteration and increasing implementation cost.
                  </p>
                  <p>
                    Additionally, Care/of was investing heavily in expert-written SEO
                    content, with over 200 scholarly articles authored by in-house
                    doctors. Without a scalable system, each article risked becoming a
                    one-off engineering effort.
                  </p>
                </>
              ),
            },
            {
              title: "Solution",
              body: (
                <>
                  <p>
                    I built a modular article builder that allowed non-technical users
                    to construct content using reusable components aligned with the new
                    design system.
                  </p>
                  <p>The system supported:</p>
                  <ul>
                    <li>Flexible content blocks (text, media, product references)</li>
                    <li>Structured data for consistency and reuse</li>
                    <li>Real-time previewing for faster iteration</li>
                    <li>
                      A scalable architecture that could evolve alongside the design
                      system
                    </li>
                  </ul>
                  <p>
                    This enabled product managers to assemble fully designed,
                    production-ready articles without engineering involvement.
                  </p>
                </>
              ),
            },
            {
              title: "Impact & Business Value",
              body: (
                <>
                  <p>
                    The article builder became a key driver of organic growth during a
                    period of rising customer acquisition costs.
                  </p>
                  <p>
                    Care/of’s strategy was to become the “WebMD of vitamins,” creating
                    authoritative content that would rank highly in search results for
                    health-related queries.
                  </p>
                  <p>
                    By combining structured content with strong SEO strategy, these
                    articles consistently ranked among top search results and became
                    the single largest driver of organic growth.
                  </p>
                </>
              ),
            },
            {
              title: "Eliminating the Engineering Bottleneck",
              body: (
                <>
                  <p>
                    Prior to this system, each article would have required individual
                    engineering tickets, estimated at 1–3 points per article, spread
                    across multiple sprints.
                  </p>
                  <p>
                    Instead, I invested 2–3 sprints upfront to build a reusable
                    system.
                  </p>
                  <p>This transformed the workflow:</p>
                  <ul>
                    <li>
                      Product managers could assemble articles using modular
                      components
                    </li>
                    <li>Articles could be previewed in real time</li>
                    <li>
                      Final output could be copied into the CMS and published in ~15
                      minutes
                    </li>
                  </ul>
                  <p>
                    Each article took roughly one hour to produce, without requiring
                    engineering support.
                  </p>
                  <p>
                    This eliminated hundreds of hours of engineering effort and
                    removed a major bottleneck between content and publishing.
                  </p>
                </>
              ),
            },
            {
              title: "Scalable Content System",
              body: (
                <>
                  <p>The builder supported a flexible set of modules, including:</p>
                  <ul>
                    <li>Rich text sections</li>
                    <li>Highlighted facts and callouts</li>
                    <li>Pull quotes and large-format typography</li>
                    <li>Embedded product modules such as carousels</li>
                  </ul>
                  <p>
                    This allowed content to feel dynamic and on-brand, without
                    requiring custom development for each article.
                  </p>
                </>
              ),
            },
            {
              title: "Technical Detail: SEO-Driven Structured Content",
              body: (
                <>
                  <p>
                    To support search visibility, I implemented structured data
                    (schema markup) directly within the article output, dynamically
                    populated from CMS data.
                  </p>
                  <p>This ensured:</p>
                  <ul>
                    <li>Better indexing by search engines</li>
                    <li>Eligibility for rich search results</li>
                    <li>Alignment between content structure and SEO strategy</li>
                  </ul>
                </>
              ),
            },
            {
              title: "My Contributions",
              body: (
                <ul>
                  <li>
                    Translated design system concepts into reusable frontend
                    components
                  </li>
                  <li>
                    Defined component architecture for dynamic content rendering
                  </li>
                  <li>Built a modular system for structured content composition</li>
                  <li>Implemented SEO-focused structured data integration</li>
                  <li>
                    Collaborated closely with design to refine UX and edge cases
                  </li>
                  <li>
                    Balanced flexibility for content creators with system constraints
                    for consistency
                  </li>
                  <li>
                    Delivered a scalable solution that reduced engineering
                    involvement in content publishing
                  </li>
                </ul>
              ),
            },
            {
              title: "Related Work: Product Catalog",
              body: (
                <>
                  <p>
                    In addition to the article builder, I contributed to the product
                    catalog experience, helping implement structured product
                    presentation aligned with the new hierarchy and personalization
                    strategy.
                  </p>
                  <p>Focus areas included:</p>
                  <ul>
                    <li>Scalable product card components</li>
                    <li>Data-driven rendering</li>
                    <li>Consistency across surfaces</li>
                  </ul>
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
