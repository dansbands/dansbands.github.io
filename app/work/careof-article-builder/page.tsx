import CaseStudyTemplate from "@/app/components/case-studies/case-study-template";

export default function CareofArticleBuilderCaseStudyPage() {
  return (
    <div className="jumbotron work-page" id="work">
      <div className="main2">
        <CaseStudyTemplate
          title="Care/of — Article builder & publishing"
          subtitle="Anonymized case study (selected details redacted)"
          meta="Role: Software Engineer (Full Stack / CMS) • Stack: React/TypeScript • Scope: content systems + SEO-driven publishing"
          summary="I built a modular article system that transformed Care/of’s content strategy into a scalable growth engine, enabling 200+ SEO-driven articles to be published without engineering involvement."
          checklist={[
            { label: "Why This Mattered", checked: true },
            { label: "Context", checked: true },
            { label: "Problem", checked: true },
            { label: "Solution", checked: true },
            { label: "Before vs After", checked: true },
            { label: "SEO-Driven Architecture", checked: true },
            { label: "Impact & Business Value", checked: true },
            { label: "Scalable Content System", checked: true },
            { label: "My Contributions", checked: true },
            { label: "Related Work: Product Catalog", checked: true },
            { label: "Closing Statement", checked: true },
          ]}
          highlights={[
            "Reframed around business impact, SEO-driven growth, and system design.",
            "Shows the before/after shift from engineering dependency to self-serve publishing.",
            "Clarifies technical ownership and the elimination of engineering bottlenecks.",
          ]}
          sections={[
            {
              title: "Why This Mattered",
              body: (
                <>
                  <p>
                    At a time when customer acquisition costs were rising and
                    influencer marketing dominated paid channels, Care/of invested in
                    organic growth through expert-written content.
                  </p>
                  <p>
                    The goal was to become the “WebMD of vitamins”—a trusted source
                    for health and wellness information that would rank highly in
                    search results.
                  </p>
                  <p>
                    This article system became the foundation that made that strategy
                    viable.
                  </p>
                </>
              ),
            },
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
                    I partnered closely with design to translate evolving concepts into
                    scalable, maintainable frontend architecture.
                  </p>
                </>
              ),
            },
            {
              title: "Problem",
              body: (
                <>
                  <p>
                    The content workflow was fragmented and did not scale.
                  </p>
                  <ul>
                    <li>Editors lacked structured tools for building rich, branded content</li>
                    <li>Engineering had to implement articles manually</li>
                    <li>Each article required 1–3 points of engineering work</li>
                    <li>Scaling to 200+ articles would require multiple sprints</li>
                  </ul>
                  <p>
                    This created a bottleneck between content, product, and
                    engineering.
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
                    to construct fully designed, production-ready content using
                    reusable components aligned with the design system.
                  </p>
                  <p>The system supported:</p>
                  <ul>
                    <li>Flexible content blocks (text, media, product references)</li>
                    <li>Structured data for consistency and reuse</li>
                    <li>Real-time previewing</li>
                    <li>
                      A scalable architecture that could evolve with the design system
                    </li>
                  </ul>
                  <p>
                    Product managers could assemble and publish articles without
                    engineering involvement.
                  </p>
                </>
              ),
            },
            {
              title: "Before vs After",
              body: (
                <>
                  <h4>Before</h4>
                  <ul>
                    <li>Engineering required for every article</li>
                    <li>1–3 point tickets per page</li>
                    <li>Slow, sprint-dependent publishing</li>
                  </ul>

                  <h4>After</h4>
                  <ul>
                    <li>Articles built entirely by product managers</li>
                    <li>~15 minutes to publish</li>
                    <li>~1 hour total creation time per article</li>
                    <li>Zero engineering involvement after launch</li>
                  </ul>
                </>
              ),
            },
            {
              title: "SEO-Driven Architecture",
              body: (
                <>
                  <p>
                    To support search visibility, I implemented structured data
                    (schema markup) directly in the article output, dynamically
                    populated from CMS data.
                  </p>
                  <p>This ensured:</p>
                  <ul>
                    <li>Strong indexing by search engines</li>
                    <li>Eligibility for rich search results</li>
                    <li>Alignment between content structure and SEO strategy</li>
                  </ul>
                  <p>
                    Combined with SEO strategy, these articles consistently ranked
                    among top search results and became the largest driver of organic
                    growth.
                  </p>
                </>
              ),
            },
            {
              title: "Impact & Business Value",
              body: (
                <>
                  <p>
                    The article system transformed content from an engineering
                    dependency into a scalable growth channel.
                  </p>
                  <ul>
                    <li>Enabled 200+ expert-written articles to be published efficiently</li>
                    <li>Became the primary driver of organic acquisition</li>
                    <li>Reduced engineering workload by hundreds of hours</li>
                    <li>Supported a shift away from expensive paid acquisition channels</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Scalable Content System",
              body: (
                <>
                  <p>The builder supported modular content composition, including:</p>
                  <ul>
                    <li>Rich text sections</li>
                    <li>Highlighted facts and callouts</li>
                    <li>Pull quotes and large-format typography</li>
                    <li>Embedded product modules (e.g., carousels)</li>
                  </ul>
                  <p>
                    This allowed content to feel dynamic and on-brand without custom
                    development.
                  </p>
                </>
              ),
            },
            {
              title: "My Contributions",
              body: (
                <ul>
                  <li>
                    Designed and implemented a modular content system for dynamic
                    article rendering
                  </li>
                  <li>
                    Translated design system concepts into reusable frontend
                    components
                  </li>
                  <li>Defined architecture for structured content composition</li>
                  <li>Implemented SEO-focused structured data integration</li>
                  <li>
                    Enabled cross-functional teams (PM, content, SEO) to operate
                    independently of engineering
                  </li>
                  <li>
                    Eliminated engineering bottlenecks in the publishing workflow
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
                    catalog experience, implementing structured product presentation
                    aligned with the new hierarchy and personalization strategy.
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
            {
              title: "Closing Statement",
              body: (
                <p>
                  By investing in a reusable system rather than one-off
                  implementations, we transformed content from an engineering
                  bottleneck into a scalable growth channel.
                </p>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
