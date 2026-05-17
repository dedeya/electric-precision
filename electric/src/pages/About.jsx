import styled from "styled-components";

const Layout = styled.section`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 1.15rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Story = styled.article`
  padding: 1.35rem;

  p + p {
    margin-top: 0.9rem;
  }
`;

const Photo = styled.div`
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(126, 164, 194, 0.3);
  img {
    width: 100%;
    height: 100%;
    min-height: clamp(560px, 62vh, 700px);
    object-fit: cover;
    object-position: center;
  }
`;

const Capabilities = styled.div`
  margin-top: 1.15rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const VisualStrip = styled.section`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const VisualCard = styled.figure`
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(126, 164, 194, 0.26);
  background: rgba(6, 22, 35, 0.56);

  img {
    width: 100%;
    height: clamp(240px, 26vw, 290px);
    object-fit: cover;
    display: block;
  }

  figcaption {
    padding: 0.55rem 0.7rem;
    font-size: 0.8rem;
    color: #b0bac8;
  }
`;

const Pillar = styled.article`
  padding: 1rem;

  h3 {
    margin: 0 0 0.4rem;
    font-size: 1rem;
  }
`;

const Principles = styled.section`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Principle = styled.article`
  padding: 1rem;

  h3 {
    margin: 0 0 0.4rem;
    font-size: 1rem;
  }
`;

const About = () => (
  <main>
    <Layout className="reveal">
      <Story className="glass-card">
        <h1>About Electric Precision Labs</h1>
        <p>
          Electric Precision Labs is a technology solutions company specializing in SCADA,
          substation automation, energy management, and OT cybersecurity for critical infrastructure.
        </p>
        <p>
          We design secure, scalable architectures that connect modern cloud workflows with
          legacy operational environments, helping organizations improve visibility, response speed,
          and operational certainty.
        </p>
        <p>
          Our engineering approach balances standards compliance, resilience, and field practicality
          so teams can deploy high-performance systems without sacrificing safety or maintainability.
        </p>
        <p>
          We work as a technical delivery partner to developers, utilities, EPC teams, and
          asset operators who need clear accountability, robust design governance, and dependable
          execution under real project constraints.
        </p>
      </Story>
      <Photo className="parallax-media reveal reveal-delay-1">
        <img
          src="/assets/about-control-room.jpg"
          alt="Industrial electrical control room with switchgear panels"
          loading="lazy"
          decoding="async"
        />
      </Photo>
    </Layout>

    <VisualStrip className="reveal reveal-delay-1">
      <VisualCard className="parallax-media">
        <img
          src="/assets/grid-control-screens.jpg"
          alt="Real-time monitoring screens in an operations environment"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Operational visibility and telemetry assurance.</figcaption>
      </VisualCard>
      <VisualCard className="parallax-media">
        <img
          src="/assets/services-grid.jpg"
          alt="Transmission infrastructure for utility networks"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Grid-facing delivery for live infrastructure.</figcaption>
      </VisualCard>
      <VisualCard className="parallax-media">
        <img
          src="/assets/contact-engineering-team.jpg"
          alt="Engineering planning collaboration"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Cross-discipline engineering collaboration.</figcaption>
      </VisualCard>
    </VisualStrip>

    <Capabilities>
      <Pillar className="glass-card reveal reveal-delay-1">
        <h3>Protocol-Led Integration</h3>
        <p>
          IEC 61850, DNP3, IEC 101/104, and Modbus support for interoperable ecosystems with
          clear interface definitions and reduced vendor lock-in.
        </p>
      </Pillar>
      <Pillar className="glass-card reveal reveal-delay-2">
        <h3>Secure OT Foundations</h3>
        <p>
          Risk-aware architecture and vulnerability-focused assessments aligned to the realities
          of industrial control operations and constrained maintenance windows.
        </p>
      </Pillar>
      <Pillar className="glass-card reveal reveal-delay-2">
        <h3>Operational Continuity</h3>
        <p>
          Design choices focused on uptime, maintainability, alarm quality, and long-term
          lifecycle performance.
        </p>
      </Pillar>
    </Capabilities>

    <Principles>
      <Principle className="glass-card reveal reveal-delay-2">
        <h3>How We Engage</h3>
        <p>
          We can support full project lifecycles or targeted work packages, including architecture,
          control philosophies, FAT/SAT planning, commissioning support, and operational handover.
        </p>
      </Principle>

      <Principle className="glass-card reveal reveal-delay-2">
        <h3>Quality, Safety, and Governance</h3>
        <p>
          Our delivery approach emphasizes traceable engineering decisions, disciplined change
          control, and safety-first implementation to minimize operational and commercial risk.
        </p>
      </Principle>
    </Principles>
  </main>
);

export default About;
