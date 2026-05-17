import { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeLift = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const softPulse = keyframes`
  0%,
  100% {
    box-shadow: 0 0 0 rgba(32, 188, 212, 0);
  }
  50% {
    box-shadow: 0 0 22px rgba(32, 188, 212, 0.18);
  }
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 1.15rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Info = styled.article`
  padding: 1.4rem;
  border: 1px solid rgba(126, 164, 194, 0.28);
  background:
    radial-gradient(600px 260px at 0% 0%, rgba(32, 188, 212, 0.14), transparent 60%),
    linear-gradient(145deg, rgba(5, 22, 35, 0.9), rgba(10, 33, 50, 0.72));

  h1 {
    margin: 0;
    color: var(--title);
  }

  p {
    margin: 0.55rem 0;
    color: var(--muted);
  }

  animation: ${fadeLift} 560ms cubic-bezier(0.22, 0.8, 0.25, 1) both;
`;

const Kicker = styled.p`
  margin: 0 0 0.45rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  color: var(--accent-2);
  font-weight: 700;
`;

const Lead = styled.p`
  margin-top: 0.75rem;
  max-width: 60ch;
  color: var(--muted);
`;

const MapLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.9rem;
  color: var(--accent);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.03em;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: #f8d57a;
  }
`;

const MetaGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1.45fr 0.95fr 1.4fr;
  gap: 0.6rem;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const MetaCard = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(126, 164, 194, 0.3);
  background: rgba(6, 24, 38, 0.62);
  padding: 0.65rem 0.75rem;

  a,
  span {
    color: #c4cede;
    font-size: 0.88rem;
    line-height: 1.35;
    word-break: break-word;
    overflow-wrap: anywhere;
    hyphens: auto;
  }

  a {
    display: block;
    max-width: 100%;
    font-size: clamp(0.79rem, 1.35vw, 0.88rem);
  }

  &:nth-child(-n + 2) a {
    white-space: nowrap;
    word-break: normal;
    overflow-wrap: normal;
  }

  animation: ${fadeLift} 520ms cubic-bezier(0.22, 0.8, 0.25, 1) both;

  &:nth-child(1) {
    animation-delay: 80ms;
  }

  &:nth-child(2) {
    animation-delay: 150ms;
  }

  &:nth-child(3) {
    animation-delay: 220ms;
  }
`;

const MetaIcon = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 999px;
  border: 1px solid rgba(126, 164, 194, 0.34);
  background: rgba(8, 30, 47, 0.7);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.32rem;
  color: var(--accent);

  svg {
    width: 15px;
    height: 15px;
  }
`;

const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(126, 164, 194, 0.3);

  img {
    width: 100%;
    height: 100%;
    min-height: clamp(540px, 62vh, 700px);
    object-fit: cover;
    object-position: center;
  }

  animation: ${fadeLift} 620ms cubic-bezier(0.22, 0.8, 0.25, 1) 120ms both;
`;

const ImageTag = styled.div`
  position: absolute;
  left: 14px;
  bottom: 14px;
  border-radius: 999px;
  border: 1px solid rgba(126, 164, 194, 0.32);
  background: rgba(4, 18, 30, 0.78);
  color: #e8edf5;
  font-size: 0.76rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.4rem 0.65rem;
  animation: ${softPulse} 3000ms ease-in-out infinite;
`;

const FormCard = styled.form`
  margin-top: 1.1rem;
  padding: 1.25rem;
  border: 1px solid rgba(126, 164, 194, 0.28);
  background:
    radial-gradient(560px 220px at 100% 0%, rgba(243, 183, 53, 0.12), transparent 62%),
    linear-gradient(145deg, rgba(5, 20, 31, 0.92), rgba(8, 30, 47, 0.74));

  animation: ${fadeLift} 620ms cubic-bezier(0.22, 0.8, 0.25, 1) 220ms both;
`;

const FormLayout = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const FormIntro = styled.div`
  border-radius: 14px;
  border: 1px solid rgba(126, 164, 194, 0.24);
  background: rgba(6, 22, 35, 0.58);
  padding: 0.95rem;

  h2 {
    margin: 0;
    font-size: 1.15rem;
    color: #e8edf5;
  }

  p {
    margin: 0.55rem 0 0;
    font-size: 0.9rem;
    color: #b0bac8;
  }

  animation: ${fadeLift} 580ms cubic-bezier(0.22, 0.8, 0.25, 1) 300ms both;
`;

const FormBullets = styled.ul`
  margin: 0.8rem 0 0;
  padding-left: 1.05rem;
  display: grid;
  gap: 0.35rem;

  li {
    color: #b0bac8;
    font-size: 0.84rem;
  }
`;

const FormFields = styled.div`
  animation: ${fadeLift} 580ms cubic-bezier(0.22, 0.8, 0.25, 1) 360ms both;
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: grid;
  gap: 0.35rem;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #b6cbde;
  margin-bottom: 0.75rem;
  font-weight: 700;
`;

const fieldStyles = `
  width: 100%;
  padding: 0.74rem 0.82rem;
  color: #c4cede;
  border: 1px solid rgba(126, 164, 194, 0.3);
  border-radius: 12px;
  background: rgba(6, 22, 35, 0.74);
  outline: none;
  transition: border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;

  &:focus {
    border-color: rgba(32, 188, 212, 0.75);
    box-shadow: 0 0 0 3px rgba(32, 188, 212, 0.18);
    background: rgba(8, 28, 44, 0.9);
  }
`;

const Input = styled.input`
  ${fieldStyles}
`;

const Select = styled.select`
  ${fieldStyles}
`;

const Textarea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
  min-height: 150px;
`;

const Button = styled.button`
  margin-top: 0.2rem;
  width: 100%;
  padding: 0.78rem 1.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: none;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #061420;
  background: linear-gradient(120deg, var(--accent), #f0cb63);
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease;

  .icon {
    width: 14px;
    height: 14px;
    margin-left: 0.45rem;
    transition: transform 180ms ease;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(243, 183, 53, 0.28);
  }

  &:hover .icon,
  &:focus-visible .icon {
    transform: translateX(2px);
  }

  &:focus-visible {
    outline: 2px solid rgba(32, 188, 212, 0.65);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Status = styled.p`
  margin-top: 0.85rem;
  padding: 0.62rem 0.75rem;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.$error ? "rgba(255, 154, 162, 0.36)" : "rgba(98, 208, 168, 0.36)")};
  background: ${(props) => (props.$error ? "rgba(93, 21, 31, 0.28)" : "rgba(21, 74, 58, 0.28)")};
  color: ${(props) => (props.$error ? "#ff9aa2" : "var(--success)")};
  font-weight: 600;
`;

const Sectors = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 640px) {
    gap: 0.45rem;
  }
`;

const Sector = styled.span`
  display: inline-block;
  padding: 0.5rem 0.68rem;
  border-radius: 999px;
  border: 1px solid rgba(126, 164, 194, 0.32);
  background: rgba(8, 30, 47, 0.56);
  color: #c4cede;
  font-size: 0.82rem;
`;

const Notes = styled.div`
  margin-top: 0.95rem;
  border-top: 1px solid rgba(126, 164, 194, 0.22);
  padding-top: 0.75rem;

  p {
    margin: 0.35rem 0;
    font-size: 0.84rem;
    color: var(--muted);
  }
`;

const MotionGuard = styled.div`
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;

const SERVICE_OPTIONS = [
  "SCADA & Control Systems",
  "Substation Automation",
  "Protocol Integration (IEC 61850, DNP3, IEC 101/104, Modbus)",
  "Energy Management Systems (EMS)",
  "OT Cybersecurity Architecture & Assessment",
  "Building Management Systems (BMS)",
  "General Consultation",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState({ text: "", error: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.service.trim() || !form.message.trim()) {
      setStatus({ text: "Please complete all fields before sending.", error: true });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus({ text: "Please enter a valid email address.", error: true });
      return;
    }

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();

    if (endpoint) {
      if (!/^https?:\/\//.test(endpoint)) {
        setStatus({ text: "Contact endpoint must start with http:// or https://", error: true });
        return;
      }

      try {
        setIsSubmitting(true);
        setStatus({ text: "", error: false });

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          const payload = await response.json().catch(() => null);
          throw new Error(payload?.error || "Endpoint rejected submission");
        }

        setForm({ name: "", email: "", service: "", message: "" });
        setStatus({ text: "Thanks, your inquiry was sent successfully.", error: false });
      } catch {
        setStatus({
          text: "We could not submit right now. Please email us directly at info@electricprecisionlabs.co.uk.",
          error: true,
        });
      } finally {
        setIsSubmitting(false);
      }

      return;
    }

    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:info@electricprecisionlabs.co.uk?subject=${subject}&body=${body}`;
    setStatus({ text: "Your email client is opening with your drafted inquiry.", error: false });
  };

  return (
    <main>
      <MotionGuard>
        <Grid className="reveal">
          <Info className="glass-card">
          <Kicker>Direct Engineering Contact</Kicker>
          <h1>Contact Us</h1>
          <Lead>
            Speak with our engineering team about SCADA modernization, OT cybersecurity,
            substation automation, and energy management programs.
          </Lead>

          <MetaGrid>
            <MetaCard>
              <MetaIcon aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 7.5h16v9H4v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m5 8.5 7 5 7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MetaIcon>
              <a href="mailto:info@electricprecisionlabs.co.uk">info@electricprecisionlabs.co.uk</a>
            </MetaCard>
            <MetaCard>
              <MetaIcon aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M7.7 4.5h2.6l1.1 4-1.8 1.8a13.9 13.9 0 0 0 4.1 4.1l1.8-1.8 4 1.1v2.6a1.7 1.7 0 0 1-1.9 1.7A14.9 14.9 0 0 1 6 6.4a1.7 1.7 0 0 1 1.7-1.9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MetaIcon>
              <a href="tel:+447542858460">+44 7542 858460</a>
            </MetaCard>
            <MetaCard>
              <MetaIcon aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 20s6-5.7 6-10.6a6 6 0 1 0-12 0C6 14.3 12 20 12 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="9.4" r="2.2" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </MetaIcon>
              <span>6 Cowdall Road, Leicester, LE3 1SE</span>
            </MetaCard>
          </MetaGrid>

          <Sectors>
            <Sector>Utilities & Power</Sector>
            <Sector>Water & Wastewater</Sector>
            <Sector>Rail & Transport</Sector>
            <Sector>Industrial Facilities</Sector>
          </Sectors>

          <Notes>
            <p>
              For faster triage, include project stage, asset type, preferred protocols,
              and any cybersecurity or compliance requirements.
            </p>
            <MapLink
              href="https://maps.google.com/?q=6+Cowdall+Road,+Leicester,+LE3+1SE"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21s6-5.65 6-11a6 6 0 1 0-12 0c0 5.35 6 11 6 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
              </svg>
              Open in Google Maps
            </MapLink>
          </Notes>
          </Info>

          <ImageBox className="parallax-media reveal reveal-delay-1">
            <img
              src="/assets/contact-engineering-team.jpg"
              alt="Engineering team in a planning meeting"
              loading="lazy"
              decoding="async"
            />
            <ImageTag>Project Scoping & Delivery Planning</ImageTag>
          </ImageBox>
        </Grid>

        <FormCard className="glass-card reveal reveal-delay-2" onSubmit={handleSubmit}>
          <FormLayout>
            <FormIntro>
              <h2>Tell Us About Your Project</h2>
              <p>
                Share your current environment, delivery timeline, and target outcomes.
                We will recommend a practical engagement pathway.
              </p>
              <FormBullets>
                <li>SCADA and control system modernization</li>
                <li>Substation automation and integration</li>
                <li>OT cybersecurity architecture and assessment</li>
                <li>Energy management and metering programs</li>
              </FormBullets>
            </FormIntro>

            <FormFields>
              <FieldRow>
                <Label>
                  Name
                  <Input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your full name"
                  />
                </Label>
                <Label>
                  Email
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="name@company.com"
                  />
                </Label>
              </FieldRow>

              <Label>
                Service
                <Select name="service" value={form.service} onChange={onChange}>
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </Select>
              </Label>

              <Label>
                Message
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Briefly describe your assets, current constraints, and delivery objectives."
                />
              </Label>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
                <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M13 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              {status.text ? <Status $error={status.error}>{status.text}</Status> : null}
            </FormFields>
          </FormLayout>
        </FormCard>
      </MotionGuard>
    </main>
  );
};

export default Contact;
