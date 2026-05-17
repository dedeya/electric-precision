import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HERO_SLIDES = [
  {
    image: "/assets/powerlines.jpeg",
    alt: "High-voltage transmission infrastructure at sunset",
    useDarkText: false,
    eyebrow: "Grid Modernization",
    title: "Operate Critical Networks With Confidence",
    lead:
      "We help utilities and infrastructure operators modernize live systems without compromising safety, uptime, or control reliability.",
    primaryLabel: "Start Your Project",
    primaryHref: "/contact",
    secondaryLabel: "Our Services",
    secondaryHref: "/services",
    signals: [
      { title: "Substation Ready", text: "Design and integration for live utility environments" },
      { title: "Operational Safety", text: "Risk-aware delivery for critical infrastructure" },
      { title: "Standards Focused", text: "IEC 61850, DNP3, IEC 101/104, and Modbus support" },
      { title: "Performance Driven", text: "Faster commissioning with structured engineering workflows" },
    ],
  },
  {
    image: "/assets/renewable-storage.jpg",
    alt: "Electrical substation and transmission infrastructure",
    useDarkText: false,
    eyebrow: "Transmission & Distribution",
    title: "Rewire The Grid While Keeping It Stable",
    lead:
      "From connection studies to control integration, we support grid-scale renewable and storage projects with practical engineering pathways.",
    primaryLabel: "Book A Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Capabilities",
    secondaryHref: "/services",
    signals: [
      { title: "Connection Strategy", text: "Support across project development and energization planning" },
      { title: "Network Insight", text: "Improved observability for operators and owners" },
      { title: "Integration Control", text: "Legacy and modern system interoperability" },
      { title: "Deployment Clarity", text: "Defined milestones from design through handover" },
    ],
  },
  {
    image: "/assets/what-clients-gain.jpeg",
    alt: "Operator monitoring multiple control screens in a command center",
    useDarkText: false,
    eyebrow: "Control Room Assurance",
    title: "Turn Operational Data Into Faster Decisions",
    lead:
      "We design control environments that improve alarm clarity, operator workflows, and response speed across complex infrastructure.",
    primaryLabel: "Plan A Discovery Session",
    primaryHref: "/contact",
    secondaryLabel: "See Delivery Model",
    secondaryHref: "/services",
    signals: [
      { title: "Alarm Clarity", text: "Cleaner event handling and escalation logic" },
      { title: "Human-Centered HMI", text: "Operator-focused control and visualization layouts" },
      { title: "Response Speed", text: "Faster isolation and recovery under fault conditions" },
      { title: "Governance", text: "Structured documentation and transition support" },
    ],
  },
  {
    image: "/assets/slider4.jpeg",
    alt: "Solar energy infrastructure integrated into modern power systems",
    useDarkText: false,
    eyebrow: "Net Zero Delivery",
    title: "Accelerate Clean Infrastructure With Secure Control",
    lead:
      "We support EV and low-carbon programs with robust control integration, resilient monitoring, and cybersecurity-aware architecture.",
    primaryLabel: "Discuss Your Program",
    primaryHref: "/contact",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
    signals: [
      { title: "EV Integration", text: "Operational support for charging and energy assets" },
      { title: "Secure By Design", text: "OT segmentation and vulnerability-informed controls" },
      { title: "Reliability First", text: "Architectures focused on uptime and fault tolerance" },
      { title: "Delivery Support", text: "From feasibility through commissioning and handover" },
    ],
  },
];

const Hero = styled.section`
  min-height: clamp(320px, 46vh, 460px);
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(126, 164, 194, 0.28);
  box-shadow: 0 30px 60px rgba(1, 8, 14, 0.42);
`;

const HeroLayout = styled.div`
  min-height: inherit;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const HeroBackdrop = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 42%;
  transform: scale(1.03);
  filter: brightness(1.09) saturate(1.1) contrast(1.05);
  transition: opacity 700ms ease;
  animation: slideFade 700ms ease both;

  @media (max-width: 760px) {
    object-position: 56% 48%;
  }

  @keyframes slideFade {
    from {
      opacity: 0.25;
      transform: scale(1.05);
    }
    to {
      opacity: 1;
      transform: scale(1.03);
    }
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ $darkText }) =>
    $darkText
      ? "linear-gradient(120deg, rgba(248, 252, 255, 0.88) 4%, rgba(241, 247, 252, 0.72) 42%, rgba(225, 238, 246, 0.38) 100%), radial-gradient(760px 420px at 20% 15%, rgba(32, 188, 212, 0.12), transparent 72%)"
      : "linear-gradient(125deg, rgba(3, 14, 24, 0.72) 6%, rgba(4, 19, 31, 0.58) 42%, rgba(4, 20, 33, 0.34) 100%), radial-gradient(760px 420px at 20% 15%, rgba(32, 188, 212, 0.24), transparent 72%)"};
  transition: background 500ms ease;
`;

const HeroContent = styled.div`
  min-height: inherit;
  display: flex;
  align-items: stretch;
  padding: clamp(0.85rem, 2.2vw, 1.6rem);
  background:
    radial-gradient(700px 340px at 0% 0%, rgba(32, 188, 212, 0.18), transparent 70%),
    linear-gradient(145deg, rgba(3, 14, 24, 0.94), rgba(4, 19, 31, 0.9));
  border-right: 1px solid rgba(126, 164, 194, 0.26);

  @media (max-width: 980px) {
    border-right: none;
    border-bottom: 1px solid rgba(126, 164, 194, 0.26);
  }
`;

const HeroInner = styled.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(0.75rem, 1.8vw, 1.1rem);
  border-radius: 24px;
  border: 1px solid ${({ $darkText }) => ($darkText ? "rgba(15, 52, 75, 0.16)" : "rgba(175, 205, 229, 0.18)")};
  background: ${({ $darkText }) =>
    $darkText
      ? "linear-gradient(180deg, rgba(251, 253, 255, 0.9), rgba(241, 247, 252, 0.8))"
      : "linear-gradient(180deg, rgba(4, 18, 30, 0.68), rgba(4, 18, 30, 0.54))"};
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 38px rgba(2, 10, 16, 0.2);

  @media (max-width: 860px) {
    width: 100%;
  }
`;

const HeroMedia = styled.div`
  position: relative;
  min-height: inherit;
  overflow: hidden;

  @media (max-width: 980px) {
    min-height: clamp(300px, 46vh, 460px);
  }
`;

const HeroTitle = styled.h1`
  margin: 0;
  max-width: 16ch;
  font-size: clamp(1.5rem, 3.6vw, 2.85rem);
  line-height: 1.08;
  color: ${({ $darkText }) => ($darkText ? "#0d2233" : "#e8edf5")};
  text-shadow: ${({ $darkText }) =>
    $darkText ? "0 1px 0 rgba(255, 255, 255, 0.28)" : "0 2px 18px rgba(2, 10, 16, 0.55)"};

  @media (max-width: 680px) {
    max-width: 100%;
  }
`;

const Eyebrow = styled.p`
  color: ${({ $darkText }) => ($darkText ? "#0e4158" : "var(--accent-2)")};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  margin: 0 0 0.45rem;
  font-weight: 700;
  text-shadow: ${({ $darkText }) =>
    $darkText ? "0 1px 0 rgba(255, 255, 255, 0.26)" : "0 1px 10px rgba(2, 10, 16, 0.42)"};
`;

const HeroLead = styled.p`
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  line-height: 1.58;
  max-width: 76ch;
  margin: 0.45rem 0 0;
  color: ${({ $darkText }) => ($darkText ? "#183549" : "#d5e4f2")};
  text-shadow: ${({ $darkText }) =>
    $darkText ? "0 1px 0 rgba(255, 255, 255, 0.2)" : "0 1px 14px rgba(2, 10, 16, 0.48)"};
`;

const Actions = styled.div`
  margin-top: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: flex-start;
`;

const Action = styled(Link)`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.5rem 0.82rem;
  min-height: 44px;
  font-family: 'Sora', sans-serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  border: 1px solid transparent;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 15%, rgba(255, 255, 255, 0.38) 45%, transparent 75%);
    transform: translateX(-150%);
    transition: transform 700ms ease;
    pointer-events: none;
  }

  &.primary {
    background: linear-gradient(120deg, var(--accent), #f8d57a);
    color: #071521;
    box-shadow: 0 8px 24px rgba(243, 183, 53, 0.24);

    animation: ctaPulse 2400ms ease-in-out infinite;
  }

  .icon {
    width: 14px;
    height: 14px;
    margin-left: 0.45rem;
    transition: transform 180ms ease;
  }

  &.secondary {
    color: ${({ $darkText }) => ($darkText ? "#123147" : "#d5e4f2")};
    border-color: ${({ $darkText }) => ($darkText ? "rgba(18, 56, 79, 0.35)" : "rgba(126, 164, 194, 0.4)")};
    background: ${({ $darkText }) => ($darkText ? "rgba(246, 251, 255, 0.68)" : "rgba(6, 22, 35, 0.6)")};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(5, 20, 32, 0.28);
  }

  &:hover .icon,
  &:focus-visible .icon {
    transform: translateX(2px);
  }

  &:hover::before,
  &:focus-visible::before {
    transform: translateX(140%);
  }

  &:focus-visible {
    outline: 2px solid rgba(32, 188, 212, 0.65);
    outline-offset: 2px;
  }

  @keyframes ctaPulse {
    0%,
    100% {
      box-shadow: 0 8px 24px rgba(243, 183, 53, 0.24);
    }
    50% {
      box-shadow: 0 12px 28px rgba(243, 183, 53, 0.34);
    }
  }
`;

const SignalRow = styled.div`
  margin-top: 0.8rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.55rem;
  width: 100%;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Signal = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ $darkText }) => ($darkText ? "rgba(18, 56, 79, 0.22)" : "rgba(126, 164, 194, 0.25)")};
  background: ${({ $darkText }) => ($darkText ? "rgba(248, 252, 255, 0.62)" : "rgba(8, 30, 47, 0.64)")};
  padding: 0.48rem 0.55rem;

  span {
    display: block;
    color: ${({ $darkText }) => ($darkText ? "#102c3f" : "#e8edf5")};
    font-size: 0.74rem;
    font-weight: 700;
    margin-bottom: 0.16rem;
  }

  small {
    color: ${({ $darkText }) => ($darkText ? "#274a61" : "#b0bac8")};
    font-size: 0.68rem;
  }
`;

const SliderNav = styled.div`
  display: inline-flex;
  gap: 0.35rem;
  padding: 0.3rem 0.45rem;
  border-radius: 999px;
  background: rgba(4, 19, 31, 0.48);
  border: 1px solid rgba(126, 164, 194, 0.32);
  backdrop-filter: blur(4px);
`;

const SliderProgressTrack = styled.div`
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 70px;
  z-index: 2;
  height: 4px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(216, 230, 242, 0.22);
  border: 1px solid rgba(126, 164, 194, 0.2);

  @media (max-width: 720px) {
    bottom: 64px;
  }
`;

const SliderProgressFill = styled.div`
  height: 100%;
  width: ${({ $progress }) => `${$progress}%`};
  border-radius: inherit;
  background: linear-gradient(90deg, rgba(32, 188, 212, 0.95), rgba(243, 183, 53, 0.95));
  box-shadow: 0 0 18px rgba(32, 188, 212, 0.32);
  transition: width 120ms linear;
`;

const SliderControls = styled.div`
  position: absolute;
  inset: auto 14px 14px 14px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  pointer-events: none;
`;

const ArrowButtonRow = styled.div`
  display: inline-flex;
  gap: 0.55rem;
  pointer-events: auto;
`;

const ArrowButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid rgba(126, 164, 194, 0.34);
  background: rgba(4, 19, 31, 0.56);
  color: #f5fbff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(5px);
  transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    background: rgba(9, 32, 50, 0.78);
    border-color: rgba(243, 183, 53, 0.7);
    outline: none;
  }

  @media (max-width: 720px) {
    width: 44px;
    height: 44px;
  }
`;

const SlideDot = styled.button`
  width: 11px;
  height: 11px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? "rgba(243, 183, 53, 0.95)" : "rgba(187, 209, 227, 0.6)")};
  background: ${({ $active }) => ($active ? "rgba(243, 183, 53, 0.9)" : "rgba(225, 238, 249, 0.45)")};
  cursor: pointer;
  transition: transform 180ms ease, background 180ms ease;

  &:hover,
  &:focus-visible {
    transform: scale(1.08);
    outline: none;
  }
`;

const MissionBand = styled.section`
  margin-top: 1.2rem;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(126, 164, 194, 0.28);
  position: relative;
  background:
    linear-gradient(130deg, rgba(3, 17, 28, 0.9), rgba(7, 30, 47, 0.78)),
    url('/assets/about-control-room.jpg') center/cover;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(620px 300px at 8% 18%, rgba(32, 188, 212, 0.22), transparent 70%),
      radial-gradient(560px 280px at 96% 82%, rgba(243, 183, 53, 0.14), transparent 72%);
    pointer-events: none;
  }
`;

const MissionGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 1rem;
  padding: clamp(1.2rem, 3.3vw, 2.2rem);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const MissionCopy = styled.div`
  max-width: 70ch;

  h2 {
    margin: 0;
    font-size: clamp(1.45rem, 2.6vw, 2.25rem);
    line-height: 1.15;
    color: #e8edf5;
  }
`;

const MissionKicker = styled.p`
  margin: 0 0 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--accent-2);
`;

const MissionLead = styled.p`
  margin: 0.72rem 0 0;
  color: #d5e5f2;
  line-height: 1.7;
`;

const MissionPills = styled.div`
  margin-top: 0.95rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const MissionPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.42rem 0.62rem;
  border-radius: 999px;
  border: 1px solid rgba(126, 164, 194, 0.35);
  background: rgba(7, 30, 47, 0.56);
  color: #e6f2fc;
  font-size: 0.78rem;
`;

const MissionStats = styled.div`
  display: grid;
  gap: 0.62rem;
  align-content: center;
`;

const MissionStat = styled.div`
  border-radius: 14px;
  padding: 0.75rem 0.85rem;
  border: 1px solid rgba(126, 164, 194, 0.3);
  background: rgba(5, 21, 34, 0.62);
  backdrop-filter: blur(4px);

  strong {
    display: block;
    color: #e8edf5;
    font-size: 1.02rem;
    letter-spacing: 0.02em;
  }

  span {
    display: block;
    margin-top: 0.2rem;
    color: #b0bac8;
    font-size: 0.8rem;
    line-height: 1.5;
  }
`;

const Grid = styled.section`
  margin-top: 1.3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.article`
  padding: 1.1rem;

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0.9rem;
  }
`;

const PanelMedia = styled.div`
  margin: -1.1rem -1.1rem 0.9rem;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
  border-bottom: 1px solid rgba(126, 164, 194, 0.22);

  img {
    width: 100%;
    height: clamp(250px, 28vw, 300px);
    object-fit: cover;
    display: block;
  }
`;

const OutcomeList = styled.ul`
  display: grid;
  gap: 0.45rem;

  li {
    color: var(--ink);
  }
`;

const ServiceList = styled.ul`
  display: grid;
  gap: 0.45rem;

  li {
    color: var(--ink);
  }
`;

const SectorList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SectorItem = styled.div`
  padding: 0.85rem;
  border-radius: 10px;
  border: 1px solid rgba(126, 164, 194, 0.25);
  background: rgba(8, 30, 47, 0.6);
  color: #c4cede;
`;

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slideDuration = 6200;

  useEffect(() => {
    const timerId = setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % HERO_SLIDES.length);
      setProgress(0);
    }, slideDuration);

    return () => clearInterval(timerId);
  }, [slideDuration]);

  useEffect(() => {
    const startedAt = Date.now();
    const progressTimerId = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      setProgress(Math.min((elapsed / slideDuration) * 100, 100));
    }, 100);

    return () => clearInterval(progressTimerId);
  }, [activeSlide, slideDuration]);

  const currentSlide = HERO_SLIDES[activeSlide];
  const useDarkText = currentSlide.useDarkText;
  const goToPreviousSlide = () => {
    setProgress(0);
    setActiveSlide((previous) => (previous - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToNextSlide = () => {
    setProgress(0);
    setActiveSlide((previous) => (previous + 1) % HERO_SLIDES.length);
  };

  return (
    <main>
      <Hero className="reveal">
        <HeroLayout>
          <HeroContent className="reveal reveal-delay-1">
            <HeroInner $darkText={useDarkText}>
            <Eyebrow $darkText={useDarkText}>{currentSlide.eyebrow}</Eyebrow>
            <HeroTitle $darkText={useDarkText}>{currentSlide.title}</HeroTitle>
            <HeroLead $darkText={useDarkText}>{currentSlide.lead}</HeroLead>
            <Actions>
              <Action className="primary" to={currentSlide.primaryHref}>
                {currentSlide.primaryLabel}
                <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M13 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Action>
              <Action className="secondary" to={currentSlide.secondaryHref} $darkText={useDarkText}>
                {currentSlide.secondaryLabel}
              </Action>
            </Actions>
            <SignalRow>
              {currentSlide.signals.map((signal) => (
                <Signal key={signal.title} $darkText={useDarkText}>
                  <span>{signal.title}</span>
                  <small>{signal.text}</small>
                </Signal>
              ))}
            </SignalRow>
          </HeroInner>
          </HeroContent>

          <HeroMedia>
            <HeroBackdrop
              key={`${activeSlide}-${currentSlide.image}`}
              src={currentSlide.image}
              alt={currentSlide.alt}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <HeroOverlay aria-hidden="true" $darkText={useDarkText} />
            <SliderProgressTrack aria-hidden="true">
              <SliderProgressFill $progress={progress} />
            </SliderProgressTrack>
            <SliderControls>
              <ArrowButtonRow>
                <ArrowButton type="button" aria-label="Previous hero slide" onClick={goToPreviousSlide}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ArrowButton>
                <ArrowButton type="button" aria-label="Next hero slide" onClick={goToNextSlide}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ArrowButton>
              </ArrowButtonRow>
              <SliderNav aria-label="Hero image navigation">
                {HERO_SLIDES.map((slide, index) => (
                  <SlideDot
                    key={slide.image}
                    type="button"
                    $active={index === activeSlide}
                    aria-label={`Show slide ${index + 1}: ${slide.title}`}
                    onClick={() => {
                      setProgress(0);
                      setActiveSlide(index);
                    }}
                  />
                ))}
              </SliderNav>
            </SliderControls>
          </HeroMedia>
        </HeroLayout>
      </Hero>

      <MissionBand className="reveal reveal-delay-1">
        <MissionGrid>
          <MissionCopy>
            <MissionKicker>Operational Reality, Not Theory</MissionKicker>
            <h2>Built For Live Networks, Not Lab Conditions</h2>
            <MissionLead>
              We engineer and deploy for active infrastructure where uptime, safety, and security
              are non-negotiable. Every design decision is shaped by field constraints,
              interoperability requirements, and operational continuity.
            </MissionLead>
            <MissionPills>
              <MissionPill>Live-Site Commissioning</MissionPill>
              <MissionPill>Multi-Vendor Interoperability</MissionPill>
              <MissionPill>Security By Architecture</MissionPill>
              <MissionPill>Operator-Centered Delivery</MissionPill>
            </MissionPills>
          </MissionCopy>

          <MissionStats>
            <MissionStat>
              <strong>24/7 Operations Ready</strong>
              <span>Solutions tailored for always-on utility and industrial environments.</span>
            </MissionStat>
            <MissionStat>
              <strong>Standards-Led Integration</strong>
              <span>IEC 61850, DNP3, IEC 101/104, and Modbus aligned deployment pathways.</span>
            </MissionStat>
            <MissionStat>
              <strong>Reduced Execution Risk</strong>
              <span>Structured delivery that minimizes disruption during modernization.</span>
            </MissionStat>
          </MissionStats>
        </MissionGrid>
      </MissionBand>

      <Grid>
        <Panel className="glass-card reveal reveal-delay-1">
          <PanelMedia className="parallax-media">
            <img
              src="/assets/services-grid.jpg"
              alt="High-voltage transmission infrastructure"
              loading="lazy"
              decoding="async"
            />
          </PanelMedia>
          <h2>Our Services</h2>
          <p>
            End-to-end engineering for control, automation, cybersecurity, and energy systems.
          </p>
          <ServiceList>
            <li>SCADA & Control Systems</li>
            <li>Substation Automation Solutions</li>
            <li>Industry-Standard Protocol Support</li>
            <li>Energy Management System (EMS) Solutions</li>
            <li>OT Cybersecurity Architecture & Assessment</li>
            <li>Building Management Systems (BMS)</li>
          </ServiceList>
        </Panel>

        <Panel className="glass-card reveal reveal-delay-2">
          <PanelMedia className="parallax-media">
            <img
              src="/assets/sectors-we-support.jpeg"
              alt="Sectors we support"
              loading="lazy"
              decoding="async"
            />
          </PanelMedia>
          <h2>Sectors We Support</h2>
          <p>
            We modernize live infrastructure while keeping operations stable and secure.
          </p>
          <SectorList>
            <SectorItem>Utilities and power networks</SectorItem>
            <SectorItem>Water and wastewater infrastructure</SectorItem>
            <SectorItem>Rail and transport systems</SectorItem>
            <SectorItem>Industrial facilities</SectorItem>
          </SectorList>
        </Panel>

        <Panel className="glass-card reveal reveal-delay-2">
          <PanelMedia className="parallax-media">
            <img
              src="/assets/what-clients-gain.jpeg"
              alt="What clients gain from our services"
              loading="lazy"
              decoding="async"
            />
          </PanelMedia>
          <h2>What Clients Gain</h2>
          <p>
            Measurable improvements in reliability, response, and governance.
          </p>
          <OutcomeList>
            <li>Improved situational awareness through high-quality SCADA and telemetry design</li>
            <li>Faster response and recovery with clearer alarms, events, and operator workflows</li>
            <li>Reduced integration risk across legacy and modern multi-vendor environments</li>
            <li>Lower cyber exposure through segmented OT architecture and security controls</li>
            <li>Greater confidence in compliance, audit readiness, and long-term maintainability</li>
          </OutcomeList>
        </Panel>

        <Panel className="glass-card reveal reveal-delay-2">
          <PanelMedia className="parallax-media">
            <img
              src="/assets/how-we-deliver.jpeg"
              alt="How we deliver our services"
              loading="lazy"
              decoding="async"
            />
          </PanelMedia>
          <h2>How We Deliver</h2>
          <p>
            Structured delivery from discovery and design through commissioning and handover.
          </p>
          <OutcomeList>
            <li>Discovery workshops to align operations, engineering, and cybersecurity priorities</li>
            <li>Reference architectures and standards-led control system design packages</li>
            <li>Factory and site acceptance support with structured defect resolution workflows</li>
            <li>Operator-focused documentation, training, and transition-to-operations guidance</li>
          </OutcomeList>
        </Panel>
      </Grid>
    </main>
  );
};

export default Home;
