import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../../logo/epl-logojpeg.jpeg";

const Nav = styled.nav`
  width: min(1180px, calc(100% - 2.25rem));
  margin: 1.1rem auto 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.85rem;
  padding: 0.8rem 0.95rem;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(540px 180px at 0% 0%, rgba(30, 114, 200, 0.18), transparent 62%),
    radial-gradient(420px 160px at 100% 0%, rgba(212, 43, 43, 0.12), transparent 62%),
    linear-gradient(145deg, #2e3240, #252833);
  color: #c4cede;
  box-shadow: 0 8px 36px rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 10px;
  z-index: 120;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 10px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    pointer-events: none;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    width: min(1180px, calc(100% - 1.25rem));
    gap: 0.72rem;
  }
`;

const Logo = styled(Link)`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'Sora', sans-serif;
  font-size: clamp(0.95rem, 1.3vw, 1.15rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #e8edf5;
  text-decoration: none;
  width: fit-content;

  .label {
    line-height: 1.1;
  }

  .sub {
    display: block;
    font-size: 0.65rem;
    letter-spacing: 0.14em;
    color: #8a96a8;
    margin-top: 0.15rem;
  }

  &:focus-visible {
    outline: 2px solid rgba(30, 114, 200, 0.72);
    outline-offset: 3px;
    border-radius: 8px;
  }

  @media (max-width: 980px) {
    justify-self: center;
  }
`;

const LogoBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 10px;
  padding: 3px 6px;
  flex-shrink: 0;
  box-shadow:
    0 0 0 1.5px rgba(30, 114, 200, 0.6),
    0 0 12px rgba(30, 114, 200, 0.35),
    0 4px 14px rgba(0, 0, 0, 0.45);
  transition: box-shadow 220ms ease;

  &:hover {
    box-shadow:
      0 0 0 2px rgba(212, 43, 43, 0.85),
      0 0 22px rgba(212, 43, 43, 0.45),
      0 4px 18px rgba(0, 0, 0, 0.5);
  }
`;

const LogoMark = styled.img`
  height: 46px;
  width: auto;
  display: block;
  filter: url(#sharpen) contrast(1.2) saturate(1.25);
  image-rendering: -webkit-optimize-contrast;
`;

const NavLinks = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  gap: 0.35rem;
  justify-content: center;
  align-items: center;
  justify-self: center;
  padding: 0.35rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(55, 60, 75, 0.70);

  @media (max-width: 980px) {
    width: 100%;
    flex-wrap: wrap;
    border-radius: 14px;
    justify-content: center;
  }
`;

const UtilityRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.55rem;

  @media (max-width: 980px) {
    justify-content: center;
    width: 100%;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const IconLink = styled.a`
  position: relative;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(60, 67, 85, 0.80);
  color: #c4cede;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  svg {
    width: 14px;
    height: 14px;
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

const StyledLink = styled(NavLink)`
  color: #c4cede;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 0.5rem 0.82rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0);
  transition: all 200ms ease;

  &.active {
    color: #e8edf5;
    border-color: rgba(255, 255, 255, 0.14);
    background: linear-gradient(120deg, rgba(30, 114, 200, 0.28), rgba(30, 114, 200, 0.16));
    box-shadow: inset 0 0 0 1px rgba(30, 114, 200, 0.20);
  }

  &:hover {
    color: #e8edf5;
    border-color: rgba(255, 255, 255, 0.14);
    background: rgba(30, 114, 200, 0.18);
  }
`;

const CtaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'Sora', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #f0f6ff;
  background: linear-gradient(120deg, #d42b2b, #e85555);
  border-radius: 999px;
  padding: 0.55rem 0.85rem;
  transition: transform 180ms ease, box-shadow 180ms ease;

  .icon {
    width: 14px;
    height: 14px;
    margin-left: 0.35rem;
    transition: transform 180ms ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(212, 43, 43, 0.35);
  }

  &:hover .icon,
  &:focus-visible .icon {
    transform: translateX(2px);
  }

  &:focus-visible {
    outline: 2px solid rgba(30, 114, 200, 0.65);
    outline-offset: 2px;
  }
`;

const Navbar = () => (
  <>
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <filter id="sharpen">
          <feConvolveMatrix
            order="3"
            kernelMatrix="0 -0.5 0  -0.5 3 -0.5  0 -0.5 0"
            preserveAlpha="true"
          />
        </filter>
      </defs>
    </svg>
    <Nav>
    <Logo to="/" aria-label="Go to homepage">
      <LogoBadge>
        <LogoMark src={logoImg} alt="Electric Precision Labs logo" />
      </LogoBadge>
      <span className="label">
        Electric Precision Labs
        <span className="sub">Critical Infrastructure</span>
      </span>
    </Logo>

    <NavLinks>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About Us</StyledLink>
      <StyledLink to="/services">Services</StyledLink>
      <StyledLink to="/contact">Contact Us</StyledLink>
    </NavLinks>

    <UtilityRow>
      <CtaLink to="/contact">
        Book Consultation
        <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </CtaLink>

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
    </UtilityRow>
  </Nav>
  </>
);

export default Navbar;
