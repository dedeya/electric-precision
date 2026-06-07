import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../../logo/epl-logojpeg.jpeg";

const Wrap = styled.footer`
  width: min(1180px, calc(100% - 2.25rem));
  margin: 0 auto 1.7rem;
  padding: 1.35rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(720px 260px at 0% 0%, rgba(30, 114, 200, 0.18), transparent 58%),
    radial-gradient(560px 220px at 100% 0%, rgba(212, 43, 43, 0.12), transparent 58%),
    linear-gradient(148deg, #2e3240, #252833);
  box-shadow: 0 8px 36px rgba(0, 0, 0, 0.30);
  color: #b0bac8;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 14px;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    pointer-events: none;
  }

  @media (max-width: 720px) {
    width: min(1180px, calc(100% - 1.25rem));
    padding: 1rem;
  }
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1.05fr;
  gap: 0.95rem;
  position: relative;
  z-index: 1;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.h3`
  margin: 0;
  font-family: 'Sora', sans-serif;
  color: #e8edf5;
  letter-spacing: 0.04em;
  font-size: 1.02rem;
`;

const BrandCard = styled.div`
  padding: 0.95rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(55, 60, 75, 0.70);
`;

const BrandRow = styled(Link)`
  text-decoration: none;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.55rem;

  &:focus-visible {
    outline: 2px solid rgba(30, 114, 200, 0.7);
    outline-offset: 3px;
    border-radius: 8px;
  }
`;

const LogoBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 2px 5px;
  flex-shrink: 0;
  box-shadow:
    0 0 0 1.5px rgba(30, 114, 200, 0.6),
    0 0 10px rgba(30, 114, 200, 0.3),
    0 3px 10px rgba(0, 0, 0, 0.4);
`;

const LogoMark = styled.img`
  height: 38px;
  width: auto;
  display: block;
  filter: url(#sharpen-footer) contrast(1.2) saturate(1.25);
`;

const Column = styled.div`
  min-width: 0;
  padding: 0.95rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(50, 55, 70, 0.65);
`;

const Heading = styled.h4`
  margin: 0 0 0.6rem;
  font-family: 'Sora', sans-serif;
  color: #e8edf5;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const List = styled.nav`
  display: grid;
  gap: 0.42rem;

  a {
    color: #c4cede;
    font-size: 0.86rem;
    opacity: 0.92;
    width: fit-content;
    text-decoration: none;
    transition: transform 170ms ease, color 170ms ease, opacity 170ms ease;
  }

  a:hover {
    opacity: 1;
    color: #5ab0f0;
    transform: translateX(2px);
  }
`;

const ContactList = styled(List)`
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;

    svg {
      width: 14px;
      height: 14px;
      color: var(--accent-2);
      flex-shrink: 0;
    }
  }
`;

const QuickLinkList = styled(List)`
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;

    svg {
      width: 14px;
      height: 14px;
      color: var(--accent-2);
      flex-shrink: 0;
    }
  }
`;

const Metrics = styled.div`
  margin-top: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const Metric = styled.span`
  padding: 0.42rem 0.62rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(55, 62, 80, 0.80);
  color: #c4cede;
  font-size: 0.76rem;
  letter-spacing: 0.05em;
`;

const SocialRow = styled.div`
  margin-top: 0.62rem;
  display: flex;
  gap: 0.55rem;
`;

const IconLink = styled.a`
  position: relative;
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(60, 67, 85, 0.80);
  color: #c4cede;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: rgba(90, 176, 240, 0.7);
    background: rgba(30, 114, 200, 0.22);
    color: #e8edf5;
    outline: none;
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    bottom: calc(100% + 8px);
    transform: translateX(-50%) translateY(4px);
    white-space: nowrap;
    padding: 0.25rem 0.45rem;
    border-radius: 6px;
    font-size: 0.72rem;
    color: #e8edf5;
    background: rgba(30, 35, 50, 0.97);
    border: 1px solid rgba(255, 255, 255, 0.12);
    opacity: 0;
    pointer-events: none;
    transition: opacity 180ms ease, transform 180ms ease;
  }

  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const Text = styled.p`
  margin: 0.65rem 0 0;
  font-size: 0.84rem;
  line-height: 1.6;
  color: #b0bac8;
`;

const Bottom = styled.div`
  margin-top: 1.05rem;
  padding: 0.85rem 0.95rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  background: rgba(30, 34, 46, 0.65);
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`;

const Small = styled.p`
  margin: 0;
  font-size: 0.82rem;
  color: #8a96a8;

  a {
    color: #5ab0f0;
    opacity: 0.95;
  }

  a:hover {
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  color: #c4cede;
  font-size: 0.86rem;
  opacity: 0.92;
  text-decoration: none;

  &:hover {
    opacity: 1;
    color: var(--accent);
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="sharpen-footer">
            <feConvolveMatrix order="3" kernelMatrix="0 -0.5 0  -0.5 3 -0.5  0 -0.5 0" preserveAlpha="true" />
          </filter>
        </defs>
      </svg>
      <Wrap>
      <Top>
        <BrandCard>
          <BrandRow to="/" aria-label="Go to homepage">
            <LogoBadge>
              <LogoMark src={logoImg} alt="Electric Precision Labs logo" />
            </LogoBadge>
            <Brand>Electric Precision Labs</Brand>
          </BrandRow>
          <Text>
            SCADA, substation automation, energy management, and OT cybersecurity
            solutions for critical infrastructure.
          </Text>
          <Metrics aria-label="Capability highlights">
            <Metric>24/7 Visibility</Metric>
            <Metric>IEC 61850 Ready</Metric>
            <Metric>OT Secure Design</Metric>
          </Metrics>
        </BrandCard>

        <Column>
          <Heading>Quick Links</Heading>
          <QuickLinkList aria-label="Quick links">
            <StyledLink to="/">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 11.5 12 5l8 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5 10.5V19h11v-8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Home
            </StyledLink>
            <StyledLink to="/about">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
                <path d="M6 19c1.4-3 3.2-4.5 6-4.5s4.6 1.5 6 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              About
            </StyledLink>
            <StyledLink to="/services">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="6" width="16" height="12" rx="2.5" stroke="currentColor" strokeWidth="2" />
                <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Services
            </StyledLink>
            <StyledLink to="/contact">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7.5 12 13l8-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
              </svg>
              Contact
            </StyledLink>
          </QuickLinkList>
        </Column>

        <Column>
          <Heading>Core Services</Heading>
          <List aria-label="Core services">
            <StyledLink to="/services">SCADA & Control Systems</StyledLink>
            <StyledLink to="/services">Substation Automation</StyledLink>
            <StyledLink to="/services">OT Cybersecurity</StyledLink>
            <StyledLink to="/services">Energy Management</StyledLink>
          </List>
        </Column>

        <Column>
          <Heading>Connect</Heading>
          <ContactList aria-label="Contact and social links">
            <a href="mailto:info@electricprecisionlabs.co.uk">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7.5 12 13l8-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
              </svg>
              info@electricprecisionlabs.co.uk
            </a>
            <a href="tel:+447542858460">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.7 3h2.7l1.35 4.1-1.6 1.6a15.4 15.4 0 0 0 6.15 6.15l1.6-1.6L21 14.6v2.7a1.7 1.7 0 0 1-1.7 1.7A16.3 16.3 0 0 1 5 4.7 1.7 1.7 0 0 1 6.7 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +44 7542 858460
            </a>
            <a
              href="https://maps.google.com/?q=6+Cowdall+Road,+Leicester,+LE3+1SE"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21s6-5.65 6-11a6 6 0 1 0-12 0c0 5.35 6 11 6 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
              </svg>
              6 Cowdall Road, Leicester, LE3 1SE
            </a>
          </ContactList>
          <SocialRow aria-label="Social networks">
            <IconLink
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-tooltip="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.6 9.84h2.7V18H5.6V9.84Zm4.37 0h2.59v1.12h.04c.36-.68 1.24-1.39 2.56-1.39 2.73 0 3.24 1.8 3.24 4.13V18h-2.7v-3.81c0-.91-.02-2.08-1.27-2.08-1.27 0-1.46.99-1.46 2.01V18h-2.7V9.84Z" />
              </svg>
            </IconLink>

            <IconLink
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              data-tooltip="X (Twitter)"
              title="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.22 4h3.55l4.5 6.14L17.64 4h2.14l-6.56 7.49L20 20h-3.55l-4.92-6.71L5.7 20H3.56l6.98-7.97L4.22 4Z" />
              </svg>
            </IconLink>

            <IconLink
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              data-tooltip="YouTube"
              title="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.2 7.26a2.68 2.68 0 0 0-1.89-1.9C17.65 5 12 5 12 5s-5.65 0-7.31.36a2.68 2.68 0 0 0-1.89 1.9A27.7 27.7 0 0 0 2.5 12a27.7 27.7 0 0 0 .3 4.74 2.68 2.68 0 0 0 1.89 1.9C6.35 19 12 19 12 19s5.65 0 7.31-.36a2.68 2.68 0 0 0 1.89-1.9A27.7 27.7 0 0 0 21.5 12a27.7 27.7 0 0 0-.3-4.74ZM10.2 15.04V8.96L15.4 12l-5.2 3.04Z" />
              </svg>
            </IconLink>
          </SocialRow>
        </Column>
      </Top>

      <Bottom>
        <Small>© {year} Electric Precision Labs. All rights reserved.</Small>
        <Small>
          Crafted with love by <a href="https://deepmor.co.uk/" target="_blank" rel="noreferrer">DeepMor</a>.
        </Small>
      </Bottom>
    </Wrap>
    </>
  );
};

export default Footer;
