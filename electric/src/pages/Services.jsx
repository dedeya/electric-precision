import styled from "styled-components";

const Header = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Intro = styled.article`
  padding: 1.25rem;
`;

const Cover = styled.div`
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(126, 164, 194, 0.3);
  img {
    width: 100%;
    height: 100%;
    min-height: clamp(420px, 50vh, 580px);
    object-fit: cover;
    object-position: center;
  }
`;

const ServicesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.article`
  padding: 1rem;

  h3 {
    margin: 0 0 0.45rem;
    font-size: 1.04rem;
  }
`;

const DeliveryGrid = styled.section`
  margin-top: 0.9rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceVisuals = styled.section`
  margin-top: 0.9rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceVisual = styled.figure`
  margin: 0;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(126, 164, 194, 0.25);
  background: rgba(6, 22, 35, 0.56);

  img {
    width: 100%;
    height: clamp(250px, 26vw, 300px);
    object-fit: cover;
    display: block;
  }

  figcaption {
    padding: 0.55rem 0.7rem;
    color: #b0bac8;
    font-size: 0.8rem;
  }
`;

const DeliveryCard = styled.article`
  padding: 1rem;

  h3 {
    margin: 0 0 0.45rem;
    font-size: 1rem;
  }

  ul {
    display: grid;
    gap: 0.35rem;
  }

  li {
    color: var(--ink);
  }
`;

const protocols = ["IEC 61850", "DNP3", "IEC 101/104", "Modbus"];

const Services = () => (
  <main>
    <Header className="reveal">
      <Intro className="glass-card">
        <h1>Our Services</h1>
        <p>
          We build and secure intelligent operational environments across power, water,
          transport, and industrial facilities, with a focus on measurable reliability.
        </p>
      </Intro>
      <Cover className="parallax-media reveal reveal-delay-1">
        <img
          src="/assets/services-grid.jpg"
          alt="Electric transmission lines at sunset"
          loading="lazy"
          decoding="async"
        />
      </Cover>
    </Header>

    <ServicesGrid>
      <ServiceCard className="glass-card reveal reveal-delay-1">
        <h3>SCADA & Control Systems</h3>
        <p>
          Real-time visibility, secure supervisory control, high-integrity data acquisition,
          and operator-focused HMI design that supports faster decision-making.
        </p>
      </ServiceCard>

      <ServiceCard className="glass-card reveal reveal-delay-1">
        <h3>Substation Automation</h3>
        <p>
          RTU and gateway-based substation automation for transmission and distribution assets,
          with clear telemetry models and dependable remote control strategies.
        </p>
      </ServiceCard>

      <ServiceCard className="glass-card reveal reveal-delay-2">
        <h3>Industry-Standard Protocol Support</h3>
        <p>
          Standards-led interoperability for multi-vendor environments: {protocols.join(" • ")}.
          We define protocol mappings, naming conventions, and test criteria for reliable integration.
        </p>
      </ServiceCard>

      <ServiceCard className="glass-card reveal reveal-delay-2">
        <h3>Energy Management (EMS)</h3>
        <p>
          Local, remote, and cloud-integrated metering solutions for operational optimization,
          commercial reporting, and improved energy transparency across sites.
        </p>
      </ServiceCard>

      <ServiceCard className="glass-card reveal reveal-delay-2">
        <h3>OT Cybersecurity Architecture</h3>
        <p>
          Segmented OT network architecture, access control design, and vulnerability assessment
          for control environments where uptime, safety, and security must coexist.
        </p>
      </ServiceCard>

      <ServiceCard className="glass-card reveal reveal-delay-2">
        <h3>Building Management Systems</h3>
        <p>
          Monitoring and optimization of HVAC, electrical, and utility services to improve
          building performance, alarms, and operational efficiency.
        </p>
      </ServiceCard>
    </ServicesGrid>

    <ServiceVisuals className="reveal reveal-delay-2">
      <ServiceVisual className="parallax-media">
        <img
          src="/assets/about-control-room.jpg"
          alt="Electrical control room switchgear"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Control system reliability and electrical integration.</figcaption>
      </ServiceVisual>
      <ServiceVisual className="parallax-media">
        <img
          src="/assets/grid-control-operator.jpg"
          alt="Operator in control room"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Live operations support and supervisory control.</figcaption>
      </ServiceVisual>
      <ServiceVisual className="parallax-media">
        <img
          src="/assets/grid-monitoring-room.jpg"
          alt="Monitoring station and display wall"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Monitoring-first architecture for faster response.</figcaption>
      </ServiceVisual>
    </ServiceVisuals>

    <DeliveryGrid>
      <DeliveryCard className="glass-card reveal reveal-delay-2">
        <h3>Typical Deliverables</h3>
        <ul>
          <li>Control and telemetry architecture diagrams</li>
          <li>Protocol mapping and points schedules</li>
          <li>Cybersecurity zone and conduit definitions</li>
          <li>FAT/SAT procedures and commissioning documentation</li>
          <li>Operational handover packs and training materials</li>
        </ul>
      </DeliveryCard>

      <DeliveryCard className="glass-card reveal reveal-delay-2">
        <h3>Engagement Models</h3>
        <ul>
          <li>Advisory and architecture review engagements</li>
          <li>Full lifecycle design-to-commissioning support</li>
          <li>Targeted remediation for legacy control systems</li>
          <li>Owner's engineer support for complex programs</li>
          <li>Ongoing technical assurance and optimization services</li>
        </ul>
      </DeliveryCard>
    </DeliveryGrid>
  </main>
);

export default Services;
