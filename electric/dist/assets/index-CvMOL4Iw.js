import{n as e}from"./rolldown-runtime-jpDsebLB.js";import{i as t,n,r,t as i}from"./ui-BxcVtfOs.js";import{a,i as o,n as s,o as c,r as l,s as u,t as ee}from"./vendor-U1vgrDIy.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var d=e(t(),1),te=u(),f=ee(),p=[{image:`/assets/powerlines.jpeg`,alt:`High-voltage transmission infrastructure at sunset`,useDarkText:!1,eyebrow:`Grid Modernization`,title:`Operate Critical Networks With Confidence`,lead:`We help utilities and infrastructure operators modernize live systems without compromising safety, uptime, or control reliability.`,primaryLabel:`Start Your Project`,primaryHref:`/contact`,secondaryLabel:`Our Services`,secondaryHref:`/services`,signals:[{title:`Substation Ready`,text:`Design and integration for live utility environments`},{title:`Operational Safety`,text:`Risk-aware delivery for critical infrastructure`},{title:`Standards Focused`,text:`IEC 61850, DNP3, IEC 101/104, and Modbus support`},{title:`Performance Driven`,text:`Faster commissioning with structured engineering workflows`}]},{image:`/assets/renewable-storage.jpg`,alt:`Electrical substation and transmission infrastructure`,useDarkText:!1,eyebrow:`Transmission & Distribution`,title:`Rewire The Grid While Keeping It Stable`,lead:`From connection studies to control integration, we support grid-scale renewable and storage projects with practical engineering pathways.`,primaryLabel:`Book A Consultation`,primaryHref:`/contact`,secondaryLabel:`Explore Capabilities`,secondaryHref:`/services`,signals:[{title:`Connection Strategy`,text:`Support across project development and energization planning`},{title:`Network Insight`,text:`Improved observability for operators and owners`},{title:`Integration Control`,text:`Legacy and modern system interoperability`},{title:`Deployment Clarity`,text:`Defined milestones from design through handover`}]},{image:`/assets/what-clients-gain.jpeg`,alt:`Operator monitoring multiple control screens in a command center`,useDarkText:!1,eyebrow:`Control Room Assurance`,title:`Turn Operational Data Into Faster Decisions`,lead:`We design control environments that improve alarm clarity, operator workflows, and response speed across complex infrastructure.`,primaryLabel:`Plan A Discovery Session`,primaryHref:`/contact`,secondaryLabel:`See Delivery Model`,secondaryHref:`/services`,signals:[{title:`Alarm Clarity`,text:`Cleaner event handling and escalation logic`},{title:`Human-Centered HMI`,text:`Operator-focused control and visualization layouts`},{title:`Response Speed`,text:`Faster isolation and recovery under fault conditions`},{title:`Governance`,text:`Structured documentation and transition support`}]},{image:`/assets/slider4.jpeg`,alt:`Solar energy infrastructure integrated into modern power systems`,useDarkText:!1,eyebrow:`Net Zero Delivery`,title:`Accelerate Clean Infrastructure With Secure Control`,lead:`We support EV and low-carbon programs with robust control integration, resilient monitoring, and cybersecurity-aware architecture.`,primaryLabel:`Discuss Your Program`,primaryHref:`/contact`,secondaryLabel:`Contact Us`,secondaryHref:`/contact`,signals:[{title:`EV Integration`,text:`Operational support for charging and energy assets`},{title:`Secure By Design`,text:`OT segmentation and vulnerability-informed controls`},{title:`Reliability First`,text:`Architectures focused on uptime and fault tolerance`},{title:`Delivery Support`,text:`From feasibility through commissioning and handover`}]}],ne=r.section`
  min-height: clamp(320px, 46vh, 460px);
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(126, 164, 194, 0.28);
  box-shadow: 0 30px 60px rgba(1, 8, 14, 0.42);
`,re=r.div`
  min-height: inherit;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,ie=r.img`
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
`,ae=r.div`
  position: absolute;
  inset: 0;
  background: ${({$darkText:e})=>e?`linear-gradient(120deg, rgba(248, 252, 255, 0.88) 4%, rgba(241, 247, 252, 0.72) 42%, rgba(225, 238, 246, 0.38) 100%), radial-gradient(760px 420px at 20% 15%, rgba(32, 188, 212, 0.12), transparent 72%)`:`linear-gradient(125deg, rgba(3, 14, 24, 0.72) 6%, rgba(4, 19, 31, 0.58) 42%, rgba(4, 20, 33, 0.34) 100%), radial-gradient(760px 420px at 20% 15%, rgba(32, 188, 212, 0.24), transparent 72%)`};
  transition: background 500ms ease;
`,oe=r.div`
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
`,se=r.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(0.75rem, 1.8vw, 1.1rem);
  border-radius: 24px;
  border: 1px solid ${({$darkText:e})=>e?`rgba(15, 52, 75, 0.16)`:`rgba(175, 205, 229, 0.18)`};
  background: ${({$darkText:e})=>e?`linear-gradient(180deg, rgba(251, 253, 255, 0.9), rgba(241, 247, 252, 0.8))`:`linear-gradient(180deg, rgba(4, 18, 30, 0.68), rgba(4, 18, 30, 0.54))`};
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 38px rgba(2, 10, 16, 0.2);

  @media (max-width: 860px) {
    width: 100%;
  }
`,ce=r.div`
  position: relative;
  min-height: inherit;
  overflow: hidden;

  @media (max-width: 980px) {
    min-height: clamp(300px, 46vh, 460px);
  }
`,le=r.h1`
  margin: 0;
  max-width: 16ch;
  font-size: clamp(1.5rem, 3.6vw, 2.85rem);
  line-height: 1.08;
  color: ${({$darkText:e})=>e?`#0d2233`:`#e8edf5`};
  text-shadow: ${({$darkText:e})=>e?`0 1px 0 rgba(255, 255, 255, 0.28)`:`0 2px 18px rgba(2, 10, 16, 0.55)`};

  @media (max-width: 680px) {
    max-width: 100%;
  }
`,ue=r.p`
  color: ${({$darkText:e})=>e?`#0e4158`:`var(--accent-2)`};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  margin: 0 0 0.45rem;
  font-weight: 700;
  text-shadow: ${({$darkText:e})=>e?`0 1px 0 rgba(255, 255, 255, 0.26)`:`0 1px 10px rgba(2, 10, 16, 0.42)`};
`,de=r.p`
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  line-height: 1.58;
  max-width: 76ch;
  margin: 0.45rem 0 0;
  color: ${({$darkText:e})=>e?`#183549`:`#d5e4f2`};
  text-shadow: ${({$darkText:e})=>e?`0 1px 0 rgba(255, 255, 255, 0.2)`:`0 1px 14px rgba(2, 10, 16, 0.48)`};
`,fe=r.div`
  margin-top: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: flex-start;
`,m=r(l)`
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
    color: ${({$darkText:e})=>e?`#123147`:`#d5e4f2`};
    border-color: ${({$darkText:e})=>e?`rgba(18, 56, 79, 0.35)`:`rgba(126, 164, 194, 0.4)`};
    background: ${({$darkText:e})=>e?`rgba(246, 251, 255, 0.68)`:`rgba(6, 22, 35, 0.6)`};
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
`,pe=r.div`
  margin-top: 0.8rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.55rem;
  width: 100%;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,me=r.div`
  border-radius: 10px;
  border: 1px solid ${({$darkText:e})=>e?`rgba(18, 56, 79, 0.22)`:`rgba(126, 164, 194, 0.25)`};
  background: ${({$darkText:e})=>e?`rgba(248, 252, 255, 0.62)`:`rgba(8, 30, 47, 0.64)`};
  padding: 0.48rem 0.55rem;

  span {
    display: block;
    color: ${({$darkText:e})=>e?`#102c3f`:`#e8edf5`};
    font-size: 0.74rem;
    font-weight: 700;
    margin-bottom: 0.16rem;
  }

  small {
    color: ${({$darkText:e})=>e?`#274a61`:`#b0bac8`};
    font-size: 0.68rem;
  }
`,he=r.div`
  display: inline-flex;
  gap: 0.35rem;
  padding: 0.3rem 0.45rem;
  border-radius: 999px;
  background: rgba(4, 19, 31, 0.48);
  border: 1px solid rgba(126, 164, 194, 0.32);
  backdrop-filter: blur(4px);
`,ge=r.div`
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
`,_e=r.div`
  height: 100%;
  width: ${({$progress:e})=>`${e}%`};
  border-radius: inherit;
  background: linear-gradient(90deg, rgba(32, 188, 212, 0.95), rgba(243, 183, 53, 0.95));
  box-shadow: 0 0 18px rgba(32, 188, 212, 0.32);
  transition: width 120ms linear;
`,ve=r.div`
  position: absolute;
  inset: auto 14px 14px 14px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  pointer-events: none;
`,ye=r.div`
  display: inline-flex;
  gap: 0.55rem;
  pointer-events: auto;
`,h=r.button`
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
`,be=r.button`
  width: 11px;
  height: 11px;
  border-radius: 999px;
  border: 1px solid ${({$active:e})=>e?`rgba(243, 183, 53, 0.95)`:`rgba(187, 209, 227, 0.6)`};
  background: ${({$active:e})=>e?`rgba(243, 183, 53, 0.9)`:`rgba(225, 238, 249, 0.45)`};
  cursor: pointer;
  transition: transform 180ms ease, background 180ms ease;

  &:hover,
  &:focus-visible {
    transform: scale(1.08);
    outline: none;
  }
`,xe=r.section`
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
`,Se=r.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 1rem;
  padding: clamp(1.2rem, 3.3vw, 2.2rem);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,Ce=r.div`
  max-width: 70ch;

  h2 {
    margin: 0;
    font-size: clamp(1.45rem, 2.6vw, 2.25rem);
    line-height: 1.15;
    color: #e8edf5;
  }
`,we=r.p`
  margin: 0 0 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--accent-2);
`,Te=r.p`
  margin: 0.72rem 0 0;
  color: #d5e5f2;
  line-height: 1.7;
`,Ee=r.div`
  margin-top: 0.95rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,g=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.42rem 0.62rem;
  border-radius: 999px;
  border: 1px solid rgba(126, 164, 194, 0.35);
  background: rgba(7, 30, 47, 0.56);
  color: #e6f2fc;
  font-size: 0.78rem;
`,De=r.div`
  display: grid;
  gap: 0.62rem;
  align-content: center;
`,_=r.div`
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
`,Oe=r.section`
  margin-top: 1.3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,v=r.article`
  padding: 1.1rem;

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0.9rem;
  }
`,y=r.div`
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
`,b=r.ul`
  display: grid;
  gap: 0.45rem;

  li {
    color: var(--ink);
  }
`,ke=r.ul`
  display: grid;
  gap: 0.45rem;

  li {
    color: var(--ink);
  }
`,Ae=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,x=r.div`
  padding: 0.85rem;
  border-radius: 10px;
  border: 1px solid rgba(126, 164, 194, 0.25);
  background: rgba(8, 30, 47, 0.6);
  color: #c4cede;
`,S=()=>{let[e,t]=(0,d.useState)(0),[n,r]=(0,d.useState)(0),i=6200;(0,d.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%p.length),r(0)},i);return()=>clearInterval(e)},[i]),(0,d.useEffect)(()=>{let e=Date.now(),t=setInterval(()=>{let t=Date.now()-e;r(Math.min(t/i*100,100))},100);return()=>clearInterval(t)},[e,i]);let a=p[e],o=a.useDarkText;return(0,f.jsxs)(`main`,{children:[(0,f.jsx)(ne,{className:`reveal`,children:(0,f.jsxs)(re,{children:[(0,f.jsx)(oe,{className:`reveal reveal-delay-1`,children:(0,f.jsxs)(se,{$darkText:o,children:[(0,f.jsx)(ue,{$darkText:o,children:a.eyebrow}),(0,f.jsx)(le,{$darkText:o,children:a.title}),(0,f.jsx)(de,{$darkText:o,children:a.lead}),(0,f.jsxs)(fe,{children:[(0,f.jsxs)(m,{className:`primary`,to:a.primaryHref,children:[a.primaryLabel,(0,f.jsxs)(`svg`,{className:`icon`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`path`,{d:`M5 12h12`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,f.jsx)(`path`,{d:`M13 7l5 5-5 5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),(0,f.jsx)(m,{className:`secondary`,to:a.secondaryHref,$darkText:o,children:a.secondaryLabel})]}),(0,f.jsx)(pe,{children:a.signals.map(e=>(0,f.jsxs)(me,{$darkText:o,children:[(0,f.jsx)(`span`,{children:e.title}),(0,f.jsx)(`small`,{children:e.text})]},e.title))})]})}),(0,f.jsxs)(ce,{children:[(0,f.jsx)(ie,{src:a.image,alt:a.alt,loading:`eager`,fetchPriority:`high`,decoding:`async`},`${e}-${a.image}`),(0,f.jsx)(ae,{"aria-hidden":`true`,$darkText:o}),(0,f.jsx)(ge,{"aria-hidden":`true`,children:(0,f.jsx)(_e,{$progress:n})}),(0,f.jsxs)(ve,{children:[(0,f.jsxs)(ye,{children:[(0,f.jsx)(h,{type:`button`,"aria-label":`Previous hero slide`,onClick:()=>{r(0),t(e=>(e-1+p.length)%p.length)},children:(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`M15 6l-6 6 6 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,f.jsx)(h,{type:`button`,"aria-label":`Next hero slide`,onClick:()=>{r(0),t(e=>(e+1)%p.length)},children:(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`M9 6l6 6-6 6`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,f.jsx)(he,{"aria-label":`Hero image navigation`,children:p.map((n,i)=>(0,f.jsx)(be,{type:`button`,$active:i===e,"aria-label":`Show slide ${i+1}: ${n.title}`,onClick:()=>{r(0),t(i)}},n.image))})]})]})]})}),(0,f.jsx)(xe,{className:`reveal reveal-delay-1`,children:(0,f.jsxs)(Se,{children:[(0,f.jsxs)(Ce,{children:[(0,f.jsx)(we,{children:`Operational Reality, Not Theory`}),(0,f.jsx)(`h2`,{children:`Built For Live Networks, Not Lab Conditions`}),(0,f.jsx)(Te,{children:`We engineer and deploy for active infrastructure where uptime, safety, and security are non-negotiable. Every design decision is shaped by field constraints, interoperability requirements, and operational continuity.`}),(0,f.jsxs)(Ee,{children:[(0,f.jsx)(g,{children:`Live-Site Commissioning`}),(0,f.jsx)(g,{children:`Multi-Vendor Interoperability`}),(0,f.jsx)(g,{children:`Security By Architecture`}),(0,f.jsx)(g,{children:`Operator-Centered Delivery`})]})]}),(0,f.jsxs)(De,{children:[(0,f.jsxs)(_,{children:[(0,f.jsx)(`strong`,{children:`24/7 Operations Ready`}),(0,f.jsx)(`span`,{children:`Solutions tailored for always-on utility and industrial environments.`})]}),(0,f.jsxs)(_,{children:[(0,f.jsx)(`strong`,{children:`Standards-Led Integration`}),(0,f.jsx)(`span`,{children:`IEC 61850, DNP3, IEC 101/104, and Modbus aligned deployment pathways.`})]}),(0,f.jsxs)(_,{children:[(0,f.jsx)(`strong`,{children:`Reduced Execution Risk`}),(0,f.jsx)(`span`,{children:`Structured delivery that minimizes disruption during modernization.`})]})]})]})}),(0,f.jsxs)(Oe,{children:[(0,f.jsxs)(v,{className:`glass-card reveal reveal-delay-1`,children:[(0,f.jsx)(y,{className:`parallax-media`,children:(0,f.jsx)(`img`,{src:`/assets/services-grid.jpg`,alt:`High-voltage transmission infrastructure`,loading:`lazy`,decoding:`async`})}),(0,f.jsx)(`h2`,{children:`Our Services`}),(0,f.jsx)(`p`,{children:`End-to-end engineering for control, automation, cybersecurity, and energy systems.`}),(0,f.jsxs)(ke,{children:[(0,f.jsx)(`li`,{children:`SCADA & Control Systems`}),(0,f.jsx)(`li`,{children:`Substation Automation Solutions`}),(0,f.jsx)(`li`,{children:`Industry-Standard Protocol Support`}),(0,f.jsx)(`li`,{children:`Energy Management System (EMS) Solutions`}),(0,f.jsx)(`li`,{children:`OT Cybersecurity Architecture & Assessment`}),(0,f.jsx)(`li`,{children:`Building Management Systems (BMS)`})]})]}),(0,f.jsxs)(v,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(y,{className:`parallax-media`,children:(0,f.jsx)(`img`,{src:`/assets/sectors-we-support.jpeg`,alt:`Sectors we support`,loading:`lazy`,decoding:`async`})}),(0,f.jsx)(`h2`,{children:`Sectors We Support`}),(0,f.jsx)(`p`,{children:`We modernize live infrastructure while keeping operations stable and secure.`}),(0,f.jsxs)(Ae,{children:[(0,f.jsx)(x,{children:`Utilities and power networks`}),(0,f.jsx)(x,{children:`Water and wastewater infrastructure`}),(0,f.jsx)(x,{children:`Rail and transport systems`}),(0,f.jsx)(x,{children:`Industrial facilities`})]})]}),(0,f.jsxs)(v,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(y,{className:`parallax-media`,children:(0,f.jsx)(`img`,{src:`/assets/what-clients-gain.jpeg`,alt:`What clients gain from our services`,loading:`lazy`,decoding:`async`})}),(0,f.jsx)(`h2`,{children:`What Clients Gain`}),(0,f.jsx)(`p`,{children:`Measurable improvements in reliability, response, and governance.`}),(0,f.jsxs)(b,{children:[(0,f.jsx)(`li`,{children:`Improved situational awareness through high-quality SCADA and telemetry design`}),(0,f.jsx)(`li`,{children:`Faster response and recovery with clearer alarms, events, and operator workflows`}),(0,f.jsx)(`li`,{children:`Reduced integration risk across legacy and modern multi-vendor environments`}),(0,f.jsx)(`li`,{children:`Lower cyber exposure through segmented OT architecture and security controls`}),(0,f.jsx)(`li`,{children:`Greater confidence in compliance, audit readiness, and long-term maintainability`})]})]}),(0,f.jsxs)(v,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(y,{className:`parallax-media`,children:(0,f.jsx)(`img`,{src:`/assets/how-we-deliver.jpeg`,alt:`How we deliver our services`,loading:`lazy`,decoding:`async`})}),(0,f.jsx)(`h2`,{children:`How We Deliver`}),(0,f.jsx)(`p`,{children:`Structured delivery from discovery and design through commissioning and handover.`}),(0,f.jsxs)(b,{children:[(0,f.jsx)(`li`,{children:`Discovery workshops to align operations, engineering, and cybersecurity priorities`}),(0,f.jsx)(`li`,{children:`Reference architectures and standards-led control system design packages`}),(0,f.jsx)(`li`,{children:`Factory and site acceptance support with structured defect resolution workflows`}),(0,f.jsx)(`li`,{children:`Operator-focused documentation, training, and transition-to-operations guidance`})]})]})]})]})},C=r.section`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 1.15rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,je=r.article`
  padding: 1.35rem;

  p + p {
    margin-top: 0.9rem;
  }
`,Me=r.div`
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
`,Ne=r.div`
  margin-top: 1.15rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Pe=r.section`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,w=r.figure`
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
`,T=r.article`
  padding: 1rem;

  h3 {
    margin: 0 0 0.4rem;
    font-size: 1rem;
  }
`,Fe=r.section`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,E=r.article`
  padding: 1rem;

  h3 {
    margin: 0 0 0.4rem;
    font-size: 1rem;
  }
`,Ie=()=>(0,f.jsxs)(`main`,{children:[(0,f.jsxs)(C,{className:`reveal`,children:[(0,f.jsxs)(je,{className:`glass-card`,children:[(0,f.jsx)(`h1`,{children:`About Electric Precision Labs`}),(0,f.jsx)(`p`,{children:`Electric Precision Labs is a technology solutions company specializing in SCADA, substation automation, energy management, and OT cybersecurity for critical infrastructure.`}),(0,f.jsx)(`p`,{children:`We design secure, scalable architectures that connect modern cloud workflows with legacy operational environments, helping organizations improve visibility, response speed, and operational certainty.`}),(0,f.jsx)(`p`,{children:`Our engineering approach balances standards compliance, resilience, and field practicality so teams can deploy high-performance systems without sacrificing safety or maintainability.`}),(0,f.jsx)(`p`,{children:`We work as a technical delivery partner to developers, utilities, EPC teams, and asset operators who need clear accountability, robust design governance, and dependable execution under real project constraints.`})]}),(0,f.jsx)(Me,{className:`parallax-media reveal reveal-delay-1`,children:(0,f.jsx)(`img`,{src:`/assets/about-control-room.jpg`,alt:`Industrial electrical control room with switchgear panels`,loading:`lazy`,decoding:`async`})})]}),(0,f.jsxs)(Pe,{className:`reveal reveal-delay-1`,children:[(0,f.jsxs)(w,{className:`parallax-media`,children:[(0,f.jsx)(`img`,{src:`/assets/grid-control-screens.jpg`,alt:`Real-time monitoring screens in an operations environment`,loading:`lazy`,decoding:`async`}),(0,f.jsx)(`figcaption`,{children:`Operational visibility and telemetry assurance.`})]}),(0,f.jsxs)(w,{className:`parallax-media`,children:[(0,f.jsx)(`img`,{src:`/assets/services-grid.jpg`,alt:`Transmission infrastructure for utility networks`,loading:`lazy`,decoding:`async`}),(0,f.jsx)(`figcaption`,{children:`Grid-facing delivery for live infrastructure.`})]}),(0,f.jsxs)(w,{className:`parallax-media`,children:[(0,f.jsx)(`img`,{src:`/assets/contact-engineering-team.jpg`,alt:`Engineering planning collaboration`,loading:`lazy`,decoding:`async`}),(0,f.jsx)(`figcaption`,{children:`Cross-discipline engineering collaboration.`})]})]}),(0,f.jsxs)(Ne,{children:[(0,f.jsxs)(T,{className:`glass-card reveal reveal-delay-1`,children:[(0,f.jsx)(`h3`,{children:`Protocol-Led Integration`}),(0,f.jsx)(`p`,{children:`IEC 61850, DNP3, IEC 101/104, and Modbus support for interoperable ecosystems with clear interface definitions and reduced vendor lock-in.`})]}),(0,f.jsxs)(T,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(`h3`,{children:`Secure OT Foundations`}),(0,f.jsx)(`p`,{children:`Risk-aware architecture and vulnerability-focused assessments aligned to the realities of industrial control operations and constrained maintenance windows.`})]}),(0,f.jsxs)(T,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(`h3`,{children:`Operational Continuity`}),(0,f.jsx)(`p`,{children:`Design choices focused on uptime, maintainability, alarm quality, and long-term lifecycle performance.`})]})]}),(0,f.jsxs)(Fe,{children:[(0,f.jsxs)(E,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(`h3`,{children:`How We Engage`}),(0,f.jsx)(`p`,{children:`We can support full project lifecycles or targeted work packages, including architecture, control philosophies, FAT/SAT planning, commissioning support, and operational handover.`})]}),(0,f.jsxs)(E,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(`h3`,{children:`Quality, Safety, and Governance`}),(0,f.jsx)(`p`,{children:`Our delivery approach emphasizes traceable engineering decisions, disciplined change control, and safety-first implementation to minimize operational and commercial risk.`})]})]})]}),D=`/assets/Sectors-We-Support'-DNAQhNqA.jpeg`,Le=`/assets/what-clients-gain-DXPjjB_H.jpeg`,Re=r.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,ze=r.article`
  max-width: 720px;
  padding: 0.5rem 1rem;

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 0;
  }
`,Be=r.div`
  width: 100%;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(126, 164, 194, 0.3);
  img {
    width: 100%;
    height: clamp(280px, 40vw, 500px);
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.6s ease;
  }
  &:hover img {
    transform: scale(1.03);
  }
`,Ve=r.p`
  max-width: 720px;
  color: var(--ink);
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
  padding: 0 1rem;
`,He=r.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,O=r.article`
  padding: 1rem;

  h3 {
    margin: 0 0 0.45rem;
    font-size: 1.04rem;
  }
`,Ue=r.section`
  margin-top: 0.9rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,We=r.section`
  margin-top: 0.9rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,k=r.figure`
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
`,A=r.article`
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
`,Ge=[`IEC 61850`,`DNP3`,`IEC 101/104`,`Modbus`],Ke=()=>(0,f.jsxs)(`main`,{children:[(0,f.jsxs)(Re,{className:`reveal`,children:[(0,f.jsx)(ze,{children:(0,f.jsx)(`h1`,{children:`Our Services`})}),(0,f.jsx)(Be,{className:`parallax-media reveal reveal-delay-1`,children:(0,f.jsx)(`img`,{src:`/assets/services-grid.jpg`,alt:`Electric transmission lines at sunset`,loading:`lazy`,decoding:`async`})}),(0,f.jsx)(Ve,{className:`reveal reveal-delay-2`,children:`We build and secure intelligent operational environments across power, water, transport, and industrial facilities, with a focus on measurable reliability.`})]}),(0,f.jsxs)(He,{children:[(0,f.jsxs)(O,{className:`glass-card reveal reveal-delay-1`,children:[(0,f.jsx)(`h3`,{children:`SCADA & Control Systems`}),(0,f.jsx)(`p`,{children:`Real-time visibility, secure supervisory control, high-integrity data acquisition, and operator-focused HMI design that supports faster decision-making.`})]}),(0,f.jsxs)(O,{className:`glass-card reveal reveal-delay-1`,children:[(0,f.jsx)(`h3`,{children:`Substation Automation`}),(0,f.jsx)(`p`,{children:`RTU and gateway-based substation automation for transmission and distribution assets, with clear telemetry models and dependable remote control strategies.`})]}),(0,f.jsxs)(O,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(`h3`,{children:`Industry-Standard Protocol Support`}),(0,f.jsxs)(`p`,{children:[`Standards-led interoperability for multi-vendor environments: `,Ge.join(` • `),`. We define protocol mappings, naming conventions, and test criteria for reliable integration.`]})]}),(0,f.jsxs)(O,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(`h3`,{children:`Energy Management (EMS)`}),(0,f.jsx)(`p`,{children:`Local, remote, and cloud-integrated metering solutions for operational optimization, commercial reporting, and improved energy transparency across sites.`})]}),(0,f.jsxs)(O,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(`h3`,{children:`OT Cybersecurity Architecture`}),(0,f.jsx)(`p`,{children:`Segmented OT network architecture, access control design, and vulnerability assessment for control environments where uptime, safety, and security must coexist.`})]}),(0,f.jsxs)(O,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(`h3`,{children:`Building Management Systems`}),(0,f.jsx)(`p`,{children:`Monitoring and optimization of HVAC, electrical, and utility services to improve building performance, alarms, and operational efficiency.`})]})]}),(0,f.jsxs)(We,{className:`reveal reveal-delay-2`,children:[(0,f.jsxs)(k,{className:`parallax-media`,children:[(0,f.jsx)(`img`,{src:D,alt:`Sectors we support`,loading:`lazy`,decoding:`async`}),(0,f.jsx)(`figcaption`,{children:`Control system reliability and electrical integration.`})]}),(0,f.jsxs)(k,{className:`parallax-media`,children:[(0,f.jsx)(`img`,{src:Le,alt:`What clients gain`,loading:`lazy`,decoding:`async`}),(0,f.jsx)(`figcaption`,{children:`Live operations support and supervisory control.`})]}),(0,f.jsxs)(k,{className:`parallax-media`,children:[(0,f.jsx)(`img`,{src:D,alt:`Sectors we support`,loading:`lazy`,decoding:`async`}),(0,f.jsx)(`figcaption`,{children:`Monitoring-first architecture for faster response.`})]})]}),(0,f.jsxs)(Ue,{children:[(0,f.jsxs)(A,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(`h3`,{children:`Typical Deliverables`}),(0,f.jsxs)(`ul`,{children:[(0,f.jsx)(`li`,{children:`Control and telemetry architecture diagrams`}),(0,f.jsx)(`li`,{children:`Protocol mapping and points schedules`}),(0,f.jsx)(`li`,{children:`Cybersecurity zone and conduit definitions`}),(0,f.jsx)(`li`,{children:`FAT/SAT procedures and commissioning documentation`}),(0,f.jsx)(`li`,{children:`Operational handover packs and training materials`})]})]}),(0,f.jsxs)(A,{className:`glass-card reveal reveal-delay-2`,children:[(0,f.jsx)(`h3`,{children:`Engagement Models`}),(0,f.jsxs)(`ul`,{children:[(0,f.jsx)(`li`,{children:`Advisory and architecture review engagements`}),(0,f.jsx)(`li`,{children:`Full lifecycle design-to-commissioning support`}),(0,f.jsx)(`li`,{children:`Targeted remediation for legacy control systems`}),(0,f.jsx)(`li`,{children:`Owner's engineer support for complex programs`}),(0,f.jsx)(`li`,{children:`Ongoing technical assurance and optimization services`})]})]})]})]}),j=i`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,qe=i`
  0%,
  100% {
    box-shadow: 0 0 0 rgba(32, 188, 212, 0);
  }
  50% {
    box-shadow: 0 0 22px rgba(32, 188, 212, 0.18);
  }
`,Je=r.section`
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 1.15rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Ye=r.article`
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

  animation: ${j} 560ms cubic-bezier(0.22, 0.8, 0.25, 1) both;
`,Xe=r.p`
  margin: 0 0 0.45rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  color: var(--accent-2);
  font-weight: 700;
`,Ze=r.p`
  margin-top: 0.75rem;
  max-width: 60ch;
  color: var(--muted);
`,Qe=r.a`
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
`,$e=r.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1.45fr 0.95fr 1.4fr;
  gap: 0.6rem;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`,M=r.div`
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

  animation: ${j} 520ms cubic-bezier(0.22, 0.8, 0.25, 1) both;

  &:nth-child(1) {
    animation-delay: 80ms;
  }

  &:nth-child(2) {
    animation-delay: 150ms;
  }

  &:nth-child(3) {
    animation-delay: 220ms;
  }
`,N=r.span`
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
`,et=r.div`
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

  animation: ${j} 620ms cubic-bezier(0.22, 0.8, 0.25, 1) 120ms both;
`,tt=r.div`
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
  animation: ${qe} 3000ms ease-in-out infinite;
`,nt=r.form`
  margin-top: 1.1rem;
  padding: 1.25rem;
  border: 1px solid rgba(126, 164, 194, 0.28);
  background:
    radial-gradient(560px 220px at 100% 0%, rgba(243, 183, 53, 0.12), transparent 62%),
    linear-gradient(145deg, rgba(5, 20, 31, 0.92), rgba(8, 30, 47, 0.74));

  animation: ${j} 620ms cubic-bezier(0.22, 0.8, 0.25, 1) 220ms both;
`,rt=r.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,it=r.div`
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

  animation: ${j} 580ms cubic-bezier(0.22, 0.8, 0.25, 1) 300ms both;
`,at=r.ul`
  margin: 0.8rem 0 0;
  padding-left: 1.05rem;
  display: grid;
  gap: 0.35rem;

  li {
    color: #b0bac8;
    font-size: 0.84rem;
  }
`,ot=r.div`
  animation: ${j} 580ms cubic-bezier(0.22, 0.8, 0.25, 1) 360ms both;
`,st=r.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,P=r.label`
  display: grid;
  gap: 0.35rem;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #b6cbde;
  margin-bottom: 0.75rem;
  font-weight: 700;
`,F=`
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
`,I=r.input`
  ${F}
`,ct=r.select`
  ${F}
`,lt=r.textarea`
  ${F}
  resize: vertical;
  min-height: 150px;
`,ut=r.button`
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
`,dt=r.p`
  margin-top: 0.85rem;
  padding: 0.62rem 0.75rem;
  border-radius: 10px;
  border: 1px solid ${e=>e.$error?`rgba(255, 154, 162, 0.36)`:`rgba(98, 208, 168, 0.36)`};
  background: ${e=>e.$error?`rgba(93, 21, 31, 0.28)`:`rgba(21, 74, 58, 0.28)`};
  color: ${e=>e.$error?`#ff9aa2`:`var(--success)`};
  font-weight: 600;
`,ft=r.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 640px) {
    gap: 0.45rem;
  }
`,L=r.span`
  display: inline-block;
  padding: 0.5rem 0.68rem;
  border-radius: 999px;
  border: 1px solid rgba(126, 164, 194, 0.32);
  background: rgba(8, 30, 47, 0.56);
  color: #c4cede;
  font-size: 0.82rem;
`,pt=r.div`
  margin-top: 0.95rem;
  border-top: 1px solid rgba(126, 164, 194, 0.22);
  padding-top: 0.75rem;

  p {
    margin: 0.35rem 0;
    font-size: 0.84rem;
    color: var(--muted);
  }
`,mt=r.div`
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`,ht=[`SCADA & Control Systems`,`Substation Automation`,`Protocol Integration (IEC 61850, DNP3, IEC 101/104, Modbus)`,`Energy Management Systems (EMS)`,`OT Cybersecurity Architecture & Assessment`,`Building Management Systems (BMS)`,`General Consultation`],gt=()=>{let[e,t]=(0,d.useState)({name:``,email:``,service:``,message:``}),[n,r]=(0,d.useState)({text:``,error:!1}),[i,a]=(0,d.useState)(!1),o=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))};return(0,f.jsx)(`main`,{children:(0,f.jsxs)(mt,{children:[(0,f.jsxs)(Je,{className:`reveal`,children:[(0,f.jsxs)(Ye,{className:`glass-card`,children:[(0,f.jsx)(Xe,{children:`Direct Engineering Contact`}),(0,f.jsx)(`h1`,{children:`Contact Us`}),(0,f.jsx)(Ze,{children:`Speak with our engineering team about SCADA modernization, OT cybersecurity, substation automation, and energy management programs.`}),(0,f.jsxs)($e,{children:[(0,f.jsxs)(M,{children:[(0,f.jsx)(N,{"aria-hidden":`true`,children:(0,f.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M4 7.5h16v9H4v-9Z`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`m5 8.5 7 5 7-5`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),(0,f.jsx)(`a`,{href:`mailto:info@electricprecisionlabs.co.uk`,children:`info@electricprecisionlabs.co.uk`})]}),(0,f.jsxs)(M,{children:[(0,f.jsx)(N,{"aria-hidden":`true`,children:(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,children:(0,f.jsx)(`path`,{d:`M7.7 4.5h2.6l1.1 4-1.8 1.8a13.9 13.9 0 0 0 4.1 4.1l1.8-1.8 4 1.1v2.6a1.7 1.7 0 0 1-1.9 1.7A14.9 14.9 0 0 1 6 6.4a1.7 1.7 0 0 1 1.7-1.9Z`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,f.jsx)(`a`,{href:`tel:+447542858460`,children:`+44 7542 858460`})]}),(0,f.jsxs)(M,{children:[(0,f.jsx)(N,{"aria-hidden":`true`,children:(0,f.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,children:[(0,f.jsx)(`path`,{d:`M12 20s6-5.7 6-10.6a6 6 0 1 0-12 0C6 14.3 12 20 12 20Z`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`circle`,{cx:`12`,cy:`9.4`,r:`2.2`,stroke:`currentColor`,strokeWidth:`1.8`})]})}),(0,f.jsx)(`span`,{children:`6 Cowdall Road, Leicester, LE3 1SE`})]})]}),(0,f.jsxs)(ft,{children:[(0,f.jsx)(L,{children:`Utilities & Power`}),(0,f.jsx)(L,{children:`Water & Wastewater`}),(0,f.jsx)(L,{children:`Rail & Transport`}),(0,f.jsx)(L,{children:`Industrial Facilities`})]}),(0,f.jsxs)(pt,{children:[(0,f.jsx)(`p`,{children:`For faster triage, include project stage, asset type, preferred protocols, and any cybersecurity or compliance requirements.`}),(0,f.jsxs)(Qe,{href:`https://maps.google.com/?q=6+Cowdall+Road,+Leicester,+LE3+1SE`,target:`_blank`,rel:`noreferrer`,children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`path`,{d:`M12 21s6-5.65 6-11a6 6 0 1 0-12 0c0 5.35 6 11 6 11Z`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`circle`,{cx:`12`,cy:`10`,r:`2.5`,stroke:`currentColor`,strokeWidth:`2`})]}),`Open in Google Maps`]})]})]}),(0,f.jsxs)(et,{className:`parallax-media reveal reveal-delay-1`,children:[(0,f.jsx)(`img`,{src:`/assets/contact-engineering-team.jpg`,alt:`Engineering team in a planning meeting`,loading:`lazy`,decoding:`async`}),(0,f.jsx)(tt,{children:`Project Scoping & Delivery Planning`})]})]}),(0,f.jsx)(nt,{className:`glass-card reveal reveal-delay-2`,onSubmit:async n=>{if(n.preventDefault(),!e.name.trim()||!e.email.trim()||!e.service.trim()||!e.message.trim()){r({text:`Please complete all fields before sending.`,error:!0});return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)){r({text:`Please enter a valid email address.`,error:!0});return}let i=(void 0)?.trim();if(i){if(!/^https?:\/\//.test(i)){r({text:`Contact endpoint must start with http:// or https://`,error:!0});return}try{a(!0),r({text:``,error:!1});let n=await fetch(i,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify(e)});if(!n.ok){let e=await n.json().catch(()=>null);throw Error(e?.error||`Endpoint rejected submission`)}t({name:``,email:``,service:``,message:``}),r({text:`Thanks, your inquiry was sent successfully.`,error:!1})}catch{r({text:`We could not submit right now. Please email us directly at info@electricprecisionlabs.co.uk.`,error:!0})}finally{a(!1)}return}let o=encodeURIComponent(`Inquiry from ${e.name}`),s=encodeURIComponent(`Name: ${e.name}\nEmail: ${e.email}\nService: ${e.service}\n\nMessage:\n${e.message}`);window.location.href=`mailto:info@electricprecisionlabs.co.uk?subject=${o}&body=${s}`,r({text:`Your email client is opening with your drafted inquiry.`,error:!1})},children:(0,f.jsxs)(rt,{children:[(0,f.jsxs)(it,{children:[(0,f.jsx)(`h2`,{children:`Tell Us About Your Project`}),(0,f.jsx)(`p`,{children:`Share your current environment, delivery timeline, and target outcomes. We will recommend a practical engagement pathway.`}),(0,f.jsxs)(at,{children:[(0,f.jsx)(`li`,{children:`SCADA and control system modernization`}),(0,f.jsx)(`li`,{children:`Substation automation and integration`}),(0,f.jsx)(`li`,{children:`OT cybersecurity architecture and assessment`}),(0,f.jsx)(`li`,{children:`Energy management and metering programs`})]})]}),(0,f.jsxs)(ot,{children:[(0,f.jsxs)(st,{children:[(0,f.jsxs)(P,{children:[`Name`,(0,f.jsx)(I,{type:`text`,name:`name`,value:e.name,onChange:o,placeholder:`Your full name`})]}),(0,f.jsxs)(P,{children:[`Email`,(0,f.jsx)(I,{type:`email`,name:`email`,value:e.email,onChange:o,placeholder:`name@company.com`})]})]}),(0,f.jsxs)(P,{children:[`Service`,(0,f.jsxs)(ct,{name:`service`,value:e.service,onChange:o,children:[(0,f.jsx)(`option`,{value:``,children:`Select a service`}),ht.map(e=>(0,f.jsx)(`option`,{value:e,children:e},e))]})]}),(0,f.jsxs)(P,{children:[`Message`,(0,f.jsx)(lt,{name:`message`,value:e.message,onChange:o,placeholder:`Briefly describe your assets, current constraints, and delivery objectives.`})]}),(0,f.jsxs)(ut,{type:`submit`,disabled:i,children:[i?`Sending...`:`Send Inquiry`,(0,f.jsxs)(`svg`,{className:`icon`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`path`,{d:`M5 12h12`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,f.jsx)(`path`,{d:`M13 7l5 5-5 5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),n.text?(0,f.jsx)(dt,{$error:n.error,children:n.text}):null]})]})})]})})},R=`/assets/epl-logojpeg-vx56L4ZC.jpeg`,_t=r.nav`
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
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "logo toggle"
      "links links"
      "utility utility";
    width: min(1180px, calc(100% - 1.25rem));
    gap: 0.6rem;
  }
`,vt=r(l)`
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
    grid-area: logo;
    justify-self: start;
  }
`,yt=r.span`
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
`,bt=r.img`
  height: 46px;
  width: auto;
  display: block;
  filter: url(#sharpen) contrast(1.2) saturate(1.25);
  image-rendering: -webkit-optimize-contrast;
`,xt=r.div`
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
    grid-area: links;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0.4rem;
    border-radius: 14px;
    display: ${e=>e.$open?`flex`:`none`};
  }
`,St=r.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.55rem;

  @media (max-width: 980px) {
    grid-area: utility;
    justify-content: center;
    width: 100%;
    display: ${e=>e.$open?`flex`:`none`};
  }
`,Ct=r.button`
  display: none;
  position: relative;
  width: 40px;
  height: 40px;
  padding: 0;
  align-items: center;
  justify-content: center;
  background: rgba(60, 67, 85, 0.80);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 10px;
  color: #e8edf5;
  cursor: pointer;

  span {
    position: relative;
    display: block;
    width: 18px;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    transition: background 150ms ease;
  }

  span::before,
  span::after {
    content: "";
    position: absolute;
    left: 0;
    width: 18px;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    transition: transform 200ms ease, top 200ms ease;
  }

  span::before {
    top: -6px;
  }

  span::after {
    top: 6px;
  }

  &[aria-expanded="true"] span {
    background: transparent;
  }

  &[aria-expanded="true"] span::before {
    top: 0;
    transform: rotate(45deg);
  }

  &[aria-expanded="true"] span::after {
    top: 0;
    transform: rotate(-45deg);
  }

  &:hover,
  &:focus-visible {
    border-color: rgba(90, 176, 240, 0.7);
    outline: none;
  }

  @media (max-width: 980px) {
    display: inline-flex;
    grid-area: toggle;
  }
`,wt=r.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,z=r.a`
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
`,B=r(o)`
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

  @media (max-width: 980px) {
    width: 100%;
    text-align: left;
    padding: 0.85rem 1rem;
    border-radius: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    &:last-child {
      border-bottom: none;
    }
  }
`,Tt=r(l)`
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
`,Et=()=>{let[e,t]=(0,d.useState)(!1),n=(0,d.useRef)(null),r=()=>t(!1);return(0,d.useEffect)(()=>{if(!e)return;let t=e=>{e.key===`Escape`&&r()},i=e=>{n.current&&!n.current.contains(e.target)&&r()};return document.addEventListener(`keydown`,t),document.addEventListener(`mousedown`,i),()=>{document.removeEventListener(`keydown`,t),document.removeEventListener(`mousedown`,i)}},[e]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`svg`,{width:`0`,height:`0`,style:{position:`absolute`},children:(0,f.jsx)(`defs`,{children:(0,f.jsx)(`filter`,{id:`sharpen`,children:(0,f.jsx)(`feConvolveMatrix`,{order:`3`,kernelMatrix:`0 -0.5 0  -0.5 3 -0.5  0 -0.5 0`,preserveAlpha:`true`})})})}),(0,f.jsxs)(_t,{ref:n,children:[(0,f.jsxs)(vt,{to:`/`,"aria-label":`Go to homepage`,onClick:r,children:[(0,f.jsx)(yt,{children:(0,f.jsx)(bt,{src:R,alt:`Electric Precision Labs logo`})}),(0,f.jsxs)(`span`,{className:`label`,children:[`Electric Precision Labs`,(0,f.jsx)(`span`,{className:`sub`,children:`Critical Infrastructure`})]})]}),(0,f.jsx)(Ct,{type:`button`,"aria-label":e?`Close menu`:`Open menu`,"aria-expanded":e,"aria-controls":`primary-navigation`,onClick:()=>t(e=>!e),children:(0,f.jsx)(`span`,{})}),(0,f.jsxs)(xt,{id:`primary-navigation`,$open:e,children:[(0,f.jsx)(B,{to:`/`,onClick:r,children:`Home`}),(0,f.jsx)(B,{to:`/about`,onClick:r,children:`About Us`}),(0,f.jsx)(B,{to:`/services`,onClick:r,children:`Services`}),(0,f.jsx)(B,{to:`/contact`,onClick:r,children:`Contact Us`})]}),(0,f.jsxs)(St,{$open:e,children:[(0,f.jsxs)(Tt,{to:`/contact`,onClick:r,children:[`Book Consultation`,(0,f.jsxs)(`svg`,{className:`icon`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`path`,{d:`M5 12h12`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,f.jsx)(`path`,{d:`M13 7l5 5-5 5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),(0,f.jsxs)(wt,{"aria-label":`Social networks`,children:[(0,f.jsx)(z,{href:`https://www.linkedin.com`,target:`_blank`,rel:`noreferrer`,"aria-label":`LinkedIn`,"data-tooltip":`LinkedIn`,title:`LinkedIn`,children:(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.6 9.84h2.7V18H5.6V9.84Zm4.37 0h2.59v1.12h.04c.36-.68 1.24-1.39 2.56-1.39 2.73 0 3.24 1.8 3.24 4.13V18h-2.7v-3.81c0-.91-.02-2.08-1.27-2.08-1.27 0-1.46.99-1.46 2.01V18h-2.7V9.84Z`})})}),(0,f.jsx)(z,{href:`https://x.com`,target:`_blank`,rel:`noreferrer`,"aria-label":`X (Twitter)`,"data-tooltip":`X (Twitter)`,title:`X (Twitter)`,children:(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`M4.22 4h3.55l4.5 6.14L17.64 4h2.14l-6.56 7.49L20 20h-3.55l-4.92-6.71L5.7 20H3.56l6.98-7.97L4.22 4Z`})})}),(0,f.jsx)(z,{href:`https://www.youtube.com`,target:`_blank`,rel:`noreferrer`,"aria-label":`YouTube`,"data-tooltip":`YouTube`,title:`YouTube`,children:(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`M21.2 7.26a2.68 2.68 0 0 0-1.89-1.9C17.65 5 12 5 12 5s-5.65 0-7.31.36a2.68 2.68 0 0 0-1.89 1.9A27.7 27.7 0 0 0 2.5 12a27.7 27.7 0 0 0 .3 4.74 2.68 2.68 0 0 0 1.89 1.9C6.35 19 12 19 12 19s5.65 0 7.31-.36a2.68 2.68 0 0 0 1.89-1.9A27.7 27.7 0 0 0 21.5 12a27.7 27.7 0 0 0-.3-4.74ZM10.2 15.04V8.96L15.4 12l-5.2 3.04Z`})})})]})]})]})]})},Dt=r.footer`
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
`,Ot=r.div`
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
`,kt=r.h3`
  margin: 0;
  font-family: 'Sora', sans-serif;
  color: #e8edf5;
  letter-spacing: 0.04em;
  font-size: 1.02rem;
`,At=r.div`
  padding: 0.95rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(55, 60, 75, 0.70);
`,jt=r(l)`
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
`,Mt=r.span`
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
`,Nt=r.img`
  height: 38px;
  width: auto;
  display: block;
  filter: url(#sharpen-footer) contrast(1.2) saturate(1.25);
`,V=r.div`
  min-width: 0;
  padding: 0.95rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(50, 55, 70, 0.65);
`,H=r.h4`
  margin: 0 0 0.6rem;
  font-family: 'Sora', sans-serif;
  color: #e8edf5;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,U=r.nav`
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
`,Pt=r(U)`
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
`,Ft=r(U)`
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
`,It=r.div`
  margin-top: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`,W=r.span`
  padding: 0.42rem 0.62rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(55, 62, 80, 0.80);
  color: #c4cede;
  font-size: 0.76rem;
  letter-spacing: 0.05em;
`,Lt=r.div`
  margin-top: 0.62rem;
  display: flex;
  gap: 0.55rem;
`,G=r.a`
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
`,Rt=r.p`
  margin: 0.65rem 0 0;
  font-size: 0.84rem;
  line-height: 1.6;
  color: #b0bac8;
`,zt=r.div`
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
`,K=r.p`
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
`,q=r(l)`
  color: #c4cede;
  font-size: 0.86rem;
  opacity: 0.92;
  text-decoration: none;

  &:hover {
    opacity: 1;
    color: var(--accent);
  }
`,Bt=()=>{let e=new Date().getFullYear();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`svg`,{width:`0`,height:`0`,style:{position:`absolute`},children:(0,f.jsx)(`defs`,{children:(0,f.jsx)(`filter`,{id:`sharpen-footer`,children:(0,f.jsx)(`feConvolveMatrix`,{order:`3`,kernelMatrix:`0 -0.5 0  -0.5 3 -0.5  0 -0.5 0`,preserveAlpha:`true`})})})}),(0,f.jsxs)(Dt,{children:[(0,f.jsxs)(Ot,{children:[(0,f.jsxs)(At,{children:[(0,f.jsxs)(jt,{to:`/`,"aria-label":`Go to homepage`,children:[(0,f.jsx)(Mt,{children:(0,f.jsx)(Nt,{src:R,alt:`Electric Precision Labs logo`})}),(0,f.jsx)(kt,{children:`Electric Precision Labs`})]}),(0,f.jsx)(Rt,{children:`SCADA, substation automation, energy management, and OT cybersecurity solutions for critical infrastructure.`}),(0,f.jsxs)(It,{"aria-label":`Capability highlights`,children:[(0,f.jsx)(W,{children:`24/7 Visibility`}),(0,f.jsx)(W,{children:`IEC 61850 Ready`}),(0,f.jsx)(W,{children:`OT Secure Design`})]})]}),(0,f.jsxs)(V,{children:[(0,f.jsx)(H,{children:`Quick Links`}),(0,f.jsxs)(Ft,{"aria-label":`Quick links`,children:[(0,f.jsxs)(q,{to:`/`,children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`path`,{d:`M4 11.5 12 5l8 6.5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`path`,{d:`M6.5 10.5V19h11v-8.5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),`Home`]}),(0,f.jsxs)(q,{to:`/about`,children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`circle`,{cx:`12`,cy:`8`,r:`3`,stroke:`currentColor`,strokeWidth:`2`}),(0,f.jsx)(`path`,{d:`M6 19c1.4-3 3.2-4.5 6-4.5s4.6 1.5 6 4.5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]}),`About`]}),(0,f.jsxs)(q,{to:`/services`,children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`rect`,{x:`4`,y:`6`,width:`16`,height:`12`,rx:`2.5`,stroke:`currentColor`,strokeWidth:`2`}),(0,f.jsx)(`path`,{d:`M8 10h8M8 14h5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]}),`Services`]}),(0,f.jsxs)(q,{to:`/contact`,children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`path`,{d:`M4 7.5 12 13l8-5.5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`rect`,{x:`3`,y:`5`,width:`18`,height:`14`,rx:`2.5`,stroke:`currentColor`,strokeWidth:`2`})]}),`Contact`]})]})]}),(0,f.jsxs)(V,{children:[(0,f.jsx)(H,{children:`Core Services`}),(0,f.jsxs)(U,{"aria-label":`Core services`,children:[(0,f.jsx)(q,{to:`/services`,children:`SCADA & Control Systems`}),(0,f.jsx)(q,{to:`/services`,children:`Substation Automation`}),(0,f.jsx)(q,{to:`/services`,children:`OT Cybersecurity`}),(0,f.jsx)(q,{to:`/services`,children:`Energy Management`})]})]}),(0,f.jsxs)(V,{children:[(0,f.jsx)(H,{children:`Connect`}),(0,f.jsxs)(Pt,{"aria-label":`Contact and social links`,children:[(0,f.jsxs)(`a`,{href:`mailto:info@electricprecisionlabs.co.uk`,children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`path`,{d:`M4 7.5 12 13l8-5.5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`rect`,{x:`3`,y:`5`,width:`18`,height:`14`,rx:`2.5`,stroke:`currentColor`,strokeWidth:`2`})]}),`info@electricprecisionlabs.co.uk`]}),(0,f.jsxs)(`a`,{href:`tel:+447542858460`,children:[(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`M6.7 3h2.7l1.35 4.1-1.6 1.6a15.4 15.4 0 0 0 6.15 6.15l1.6-1.6L21 14.6v2.7a1.7 1.7 0 0 1-1.7 1.7A16.3 16.3 0 0 1 5 4.7 1.7 1.7 0 0 1 6.7 3Z`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`+44 7542 858460`]}),(0,f.jsxs)(`a`,{href:`https://maps.google.com/?q=6+Cowdall+Road,+Leicester,+LE3+1SE`,target:`_blank`,rel:`noreferrer`,children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,f.jsx)(`path`,{d:`M12 21s6-5.65 6-11a6 6 0 1 0-12 0c0 5.35 6 11 6 11Z`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,f.jsx)(`circle`,{cx:`12`,cy:`10`,r:`2.5`,stroke:`currentColor`,strokeWidth:`2`})]}),`6 Cowdall Road, Leicester, LE3 1SE`]})]}),(0,f.jsxs)(Lt,{"aria-label":`Social networks`,children:[(0,f.jsx)(G,{href:`https://www.linkedin.com`,target:`_blank`,rel:`noreferrer`,"aria-label":`LinkedIn`,"data-tooltip":`LinkedIn`,title:`LinkedIn`,children:(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.6 9.84h2.7V18H5.6V9.84Zm4.37 0h2.59v1.12h.04c.36-.68 1.24-1.39 2.56-1.39 2.73 0 3.24 1.8 3.24 4.13V18h-2.7v-3.81c0-.91-.02-2.08-1.27-2.08-1.27 0-1.46.99-1.46 2.01V18h-2.7V9.84Z`})})}),(0,f.jsx)(G,{href:`https://x.com`,target:`_blank`,rel:`noreferrer`,"aria-label":`X (Twitter)`,"data-tooltip":`X (Twitter)`,title:`X (Twitter)`,children:(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`M4.22 4h3.55l4.5 6.14L17.64 4h2.14l-6.56 7.49L20 20h-3.55l-4.92-6.71L5.7 20H3.56l6.98-7.97L4.22 4Z`})})}),(0,f.jsx)(G,{href:`https://www.youtube.com`,target:`_blank`,rel:`noreferrer`,"aria-label":`YouTube`,"data-tooltip":`YouTube`,title:`YouTube`,children:(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`M21.2 7.26a2.68 2.68 0 0 0-1.89-1.9C17.65 5 12 5 12 5s-5.65 0-7.31.36a2.68 2.68 0 0 0-1.89 1.9A27.7 27.7 0 0 0 2.5 12a27.7 27.7 0 0 0 .3 4.74 2.68 2.68 0 0 0 1.89 1.9C6.35 19 12 19 12 19s5.65 0 7.31-.36a2.68 2.68 0 0 0 1.89-1.9A27.7 27.7 0 0 0 21.5 12a27.7 27.7 0 0 0-.3-4.74ZM10.2 15.04V8.96L15.4 12l-5.2 3.04Z`})})})]})]})]}),(0,f.jsxs)(zt,{children:[(0,f.jsxs)(K,{children:[`© `,e,` Electric Precision Labs. All rights reserved.`]}),(0,f.jsxs)(K,{children:[`Crafted with love by `,(0,f.jsx)(`a`,{href:`https://deepmor.co.uk/`,target:`_blank`,rel:`noreferrer`,children:`DeepMor`}),`.`]})]})]})]})},J=r.div`
  position: fixed;
  right: clamp(12px, 2.4vw, 28px);
  bottom: clamp(12px, 2.2vw, 24px);
  z-index: 140;
`,Vt=r.button`
  border: none;
  border-radius: 999px;
  padding: 0.78rem 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.48rem;
  font-family: 'Sora', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  color: #071521;
  background: linear-gradient(120deg, var(--accent), #f8d57a);
  box-shadow: 0 14px 28px rgba(6, 18, 27, 0.35);
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 32px rgba(6, 18, 27, 0.4);
  }

  &:focus-visible {
    outline: 2px solid rgba(32, 188, 212, 0.72);
    outline-offset: 2px;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,Ht=r.section`
  width: min(360px, calc(100vw - 24px));
  height: min(520px, calc(100vh - 36px));
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(126, 164, 194, 0.32);
  background:
    radial-gradient(460px 210px at 0% 0%, rgba(32, 188, 212, 0.2), transparent 60%),
    linear-gradient(155deg, rgba(4, 20, 33, 0.95), rgba(8, 30, 47, 0.88));
  box-shadow: 0 24px 54px rgba(2, 10, 17, 0.45);
  display: grid;
  grid-template-rows: auto 1fr auto;
`,Ut=r.div`
  padding: 0.82rem 0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  border-bottom: 1px solid rgba(126, 164, 194, 0.26);
  background: rgba(4, 19, 31, 0.66);
`,Wt=r.div`
  min-width: 0;

  strong {
    display: block;
    color: var(--title);
    font-size: 0.88rem;
    line-height: 1.2;
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.38rem;
    color: #aecdde;
    font-size: 0.74rem;
    margin-top: 0.2rem;
  }
`,Gt=r.i`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #62d0a8;
  box-shadow: 0 0 0 rgba(98, 208, 168, 0.42);
  animation: pulse 1800ms ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(98, 208, 168, 0.42);
    }
    50% {
      box-shadow: 0 0 0 7px rgba(98, 208, 168, 0);
    }
  }
`,Kt=r.button`
  border: 1px solid rgba(126, 164, 194, 0.3);
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: rgba(7, 27, 43, 0.6);
  color: #d6e5f4;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: rgba(12, 39, 60, 0.84);
    border-color: rgba(32, 188, 212, 0.78);
    outline: none;
  }
`,qt=r.div`
  padding: 0.85rem;
  overflow: auto;
  display: grid;
  align-content: start;
  gap: 0.55rem;
`,Y=r.div`
  max-width: 92%;
  padding: 0.62rem 0.7rem;
  border-radius: 12px;
  justify-self: ${e=>e.$fromUser?`end`:`start`};
  border: 1px solid ${e=>e.$fromUser?`rgba(32, 188, 212, 0.34)`:`rgba(126, 164, 194, 0.28)`};
  background: ${e=>e.$fromUser?`linear-gradient(135deg, rgba(6, 40, 59, 0.86), rgba(5, 29, 43, 0.76))`:`rgba(8, 30, 47, 0.65)`};
  color: ${e=>e.$fromUser?`#dff4ff`:`#d6e5f4`};
  font-size: 0.82rem;
  line-height: 1.55;
`,Jt=r.div`
  padding: 0.78rem;
  border-top: 1px solid rgba(126, 164, 194, 0.26);
  background: rgba(4, 19, 31, 0.68);
`,Yt=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
`,Xt=r.button`
  border-radius: 999px;
  border: 1px solid rgba(126, 164, 194, 0.32);
  background: rgba(8, 30, 47, 0.55);
  color: #d9e7f5;
  font-size: 0.74rem;
  padding: 0.35rem 0.55rem;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    border-color: rgba(32, 188, 212, 0.84);
    background: rgba(11, 40, 60, 0.82);
    outline: none;
  }
`,X=r.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.45rem;
`,Zt=r.input`
  width: 100%;
  border-radius: 999px;
  border: 1px solid rgba(126, 164, 194, 0.32);
  background: rgba(8, 30, 47, 0.75);
  color: var(--ink);
  padding: 0.56rem 0.74rem;

  &::placeholder {
    color: #95b1c8;
  }

  &:focus-visible {
    outline: none;
    border-color: rgba(32, 188, 212, 0.86);
    box-shadow: 0 0 0 2px rgba(32, 188, 212, 0.2);
  }
`,Qt=r.button`
  border: none;
  border-radius: 999px;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #081a28;
  background: linear-gradient(120deg, var(--accent), #f8d57a);
  cursor: pointer;

  &:hover,
  &:focus-visible {
    filter: brightness(1.03);
    outline: none;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,$t=r.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
`,en=r(l)`
  color: var(--accent);
  font-size: 0.73rem;
  text-decoration: none;

  &:hover {
    color: #f8d57a;
  }
`,Z=r.a`
  color: var(--accent);
  font-size: 0.73rem;
  text-decoration: none;

  &:hover {
    color: #f8d57a;
  }
`,tn=[`What services do you provide?`,`Can I book a consultation?`,`How quickly do you respond?`],Q={messages:`epl-chat-messages`,open:`epl-chat-open`},$={id:`welcome`,role:`assistant`,text:`Hi, I am the Electric Precision assistant. Ask about services, timelines, or booking a consultation.`},nn=`6 Cowdall Road, Leicester, LE3 1SE`,rn=e=>{let t=e.toLowerCase();return t.includes(`service`)||t.includes(`offer`)?`We support SCADA and control systems, substation automation, OT cybersecurity, and energy management programs.`:t.includes(`consult`)||t.includes(`book`)||t.includes(`meeting`)?`Yes. Use the Contact Us page and we will arrange a discovery call with the engineering team.`:t.includes(`response`)||t.includes(`reply`)||t.includes(`how quickly`)?`Typical response time is within 1 business day, often sooner for urgent operational enquiries.`:t.includes(`phone`)||t.includes(`call`)?`You can call us on +44 7542 858460.`:t.includes(`email`)||t.includes(`enquiry`)||t.includes(`inquiry`)?`You can email info@electricprecisionlabs.co.uk and include your project stage and objectives for faster triage.`:t.includes(`address`)||t.includes(`location`)||t.includes(`where are you`)||t.includes(`office`)||t.includes(`based`)?`Our office address is ${nn}.`:`Thanks for your message. For project-specific support, share your scope and timeline, or open Contact Us for a direct enquiry.`},an=()=>{let[e,t]=(0,d.useState)(()=>{try{return localStorage.getItem(Q.open)===`1`}catch{return!1}}),[n,r]=(0,d.useState)(``),[i,a]=(0,d.useState)(()=>{try{let e=localStorage.getItem(Q.messages);if(!e)return[$];let t=JSON.parse(e);return!Array.isArray(t)||t.length===0?[$]:t}catch{return[$]}}),o=(0,d.useRef)(null),s=(0,d.useRef)(0),c=(0,d.useMemo)(()=>i.length>1,[i.length]);(0,d.useEffect)(()=>{let e=o.current;e&&(e.scrollTop=e.scrollHeight)},[i,e]),(0,d.useEffect)(()=>{try{localStorage.setItem(Q.messages,JSON.stringify(i))}catch{}},[i]),(0,d.useEffect)(()=>{try{localStorage.setItem(Q.open,e?`1`:`0`)}catch{}},[e]);let l=e=>(s.current+=1,`${e}-${s.current}`),u=e=>{let t=e.trim();if(!t)return;let n={id:l(`user`),role:`user`,text:t};a(e=>[...e,n]),r(``),window.setTimeout(()=>{let e={id:l(`assistant`),role:`assistant`,text:rn(t)};a(t=>[...t,e])},520)};return e?(0,f.jsx)(J,{children:(0,f.jsxs)(Ht,{"aria-label":`Site chat assistant`,children:[(0,f.jsxs)(Ut,{children:[(0,f.jsxs)(Wt,{children:[(0,f.jsx)(`strong`,{children:`Electric Precision Chat`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(Gt,{}),`Online now`]})]}),(0,f.jsx)(Kt,{type:`button`,onClick:()=>t(!1),"aria-label":`Minimize chat`,children:`-`})]}),(0,f.jsxs)(qt,{ref:o,children:[i.map(e=>(0,f.jsx)(Y,{$fromUser:e.role===`user`,children:e.text},e.id)),c?null:(0,f.jsx)(Y,{children:`Ask a quick question or use one of the prompts below.`})]}),(0,f.jsxs)(Jt,{children:[(0,f.jsx)(Yt,{children:tn.map(e=>(0,f.jsx)(Xt,{type:`button`,onClick:()=>u(e),children:e},e))}),(0,f.jsxs)(X,{onSubmit:e=>{e.preventDefault(),u(n)},children:[(0,f.jsx)(Zt,{type:`text`,value:n,onChange:e=>r(e.target.value),placeholder:`Type your message...`,"aria-label":`Your chat message`}),(0,f.jsx)(Qt,{type:`submit`,"aria-label":`Send chat message`,children:(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`m4 12 15-7-3 7 3 7-15-7Z`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,f.jsxs)($t,{children:[(0,f.jsx)(en,{to:`/contact`,children:`Open Contact Us`}),(0,f.jsx)(Z,{href:`tel:+447542858460`,children:`Call +44 7542 858460`}),(0,f.jsx)(Z,{href:`https://maps.google.com/?q=6+Cowdall+Road,+Leicester,+LE3+1SE`,target:`_blank`,rel:`noreferrer`,children:`Find us in Leicester`})]})]})]})}):(0,f.jsx)(J,{children:(0,f.jsxs)(Vt,{type:`button`,onClick:()=>t(!0),"aria-label":`Open chat assistant`,children:[(0,f.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,f.jsx)(`path`,{d:`M4 12a8 8 0 1 1 14 5.3L20 21l-4.3-2A8 8 0 0 1 4 12Z`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Chat With Us`]})})},on=n`
  :root {
    /* ── Logo-derived palette ─────────────────────────────
       Electric blue  #1e72c8  ("ELECTRIC" text)
       Deep navy      #1a2f6e  ("LABS" box)
       Steel silver   #8c9eb5  ("PRECISION" text)
       Red accent     #d42b2b  (left stripe)
    ──────────────────────────────────────────────────── */
    --bg-1: #ffffff;
    --bg-2: #f4f6fa;
    --bg-3: #eaecf2;
    --bg-4: #dde2ed;
    --ink: #1c2a45;
    --muted: #4a5568;
    --title: #0f1a35;
    --card: rgba(255, 255, 255, 0.88);
    --card-border: rgba(30, 114, 200, 0.18);
    --section-divider: rgba(30, 114, 200, 0.22);
    --accent: #d42b2b;
    --accent-2: #1e72c8;
    --accent-3: #1a6abf;
    --success: #2a9e78;
  }

  body {
    font-family: 'Manrope', 'Segoe UI', sans-serif;
    background:
      radial-gradient(1200px 800px at 0% 0%, rgba(30, 114, 200, 0.08), transparent 55%),
      radial-gradient(1000px 600px at 100% 0%, rgba(212, 43, 43, 0.06), transparent 58%),
      radial-gradient(900px 560px at 20% 100%, rgba(30, 114, 200, 0.05), transparent 64%),
      linear-gradient(155deg, var(--bg-1) 0%, var(--bg-2) 36%, var(--bg-3) 68%, var(--bg-4) 100%);
    color: var(--ink);
    min-height: 100vh;
    line-height: 1.72;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    position: relative;
  }

  html {
    scroll-behavior: smooth;
  }

  body::before,
  body::after {
    content: "";
    position: fixed;
    width: 380px;
    height: 380px;
    border-radius: 999px;
    pointer-events: none;
    z-index: -1;
    filter: blur(36px);
    animation: drift 16s ease-in-out infinite;
  }

  #root::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    background:
      radial-gradient(680px 460px at 78% 42%, rgba(30, 114, 200, 0.06), transparent 70%),
      radial-gradient(560px 400px at 24% 78%, rgba(212, 43, 43, 0.04), transparent 72%),
      radial-gradient(620px 420px at 46% 12%, rgba(30, 114, 200, 0.04), transparent 74%);
    animation: colorSweep 22s ease-in-out infinite;
  }

  body::before {
    top: -120px;
    left: -90px;
    background: rgba(30, 114, 200, 0.07);
  }

  body::after {
    right: -110px;
    bottom: -120px;
    background: rgba(212, 43, 43, 0.05);
    animation-delay: 2.4s;
  }

  #root {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Sora', 'Manrope', sans-serif;
    color: var(--title);
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: clamp(2rem, 6vw, 4.25rem);
    line-height: 1.05;
  }

  h2 {
    font-size: clamp(1.35rem, 3vw, 2.2rem);
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }

  img,
  video,
  canvas,
  svg {
    max-width: 100%;
    height: auto;
  }

  p {
    color: var(--muted);
    line-height: 1.8;
  }

  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  ul li {
    position: relative;
    padding-left: 1.4rem;
  }

  ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.56em;
    width: 0.62rem;
    height: 0.62rem;
    border-radius: 999px;
    background: linear-gradient(145deg, #5ab0f0, #1e72c8 62%, #1a5faa 100%);
    border: 1px solid rgba(30, 114, 200, 0.4);
    box-shadow: 0 1px 4px rgba(30, 114, 200, 0.25);
  }

  main {
    width: min(1180px, calc(100% - 2.25rem));
    margin: 2.5rem auto 4rem;
  }

  main > * + * {
    margin-top: 1.35rem;
    padding-top: 1.1rem;
    position: relative;
  }

  main > * + *::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(200, 210, 230, 0.0) 0%,
      rgba(200, 210, 230, 0.6) 14%,
      var(--section-divider) 50%,
      rgba(200, 210, 230, 0.6) 86%,
      rgba(200, 210, 230, 0.0) 100%
    );
  }

  .glass-card {
    background: var(--card);
    border: 1px solid var(--card-border);
    border-radius: 18px;
    box-shadow: 0 8px 32px rgba(30, 60, 120, 0.10);
    backdrop-filter: blur(8px);
  }

  .parallax-media {
    position: relative;
    overflow: hidden;
  }

  .parallax-media img {
    filter: brightness(1.05) saturate(1.04) contrast(1.04);
    transition: transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 500ms ease;
    will-change: transform;
  }

  .parallax-media:hover img {
    transform: scale(1.08) translateY(-6px);
    filter: brightness(1.1) saturate(1.14) contrast(1.08);
  }

  .reveal {
    animation: revealUp 700ms ease both;
  }

  .reveal-delay-1 {
    animation-delay: 150ms;
  }

  .reveal-delay-2 {
    animation-delay: 300ms;
  }

  @keyframes revealUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes drift {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(12px, -14px, 0);
    }
  }

  @keyframes colorSweep {
    0%,
    100% {
      transform: translate3d(0, 0, 0) scale(1);
      filter: saturate(1);
    }
    50% {
      transform: translate3d(0, -10px, 0) scale(1.02);
      filter: saturate(1.08);
    }
  }

  ::selection {
    background: rgba(243, 183, 53, 0.38);
    color: #f5fbff;
  }

  @media (max-width: 720px) {
    main {
      width: min(1180px, calc(100% - 1.25rem));
      margin-top: 1.5rem;
    }

    body::before,
    body::after {
      width: 260px;
      height: 260px;
    }
  }
`;function sn(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(on,{}),(0,f.jsxs)(s,{children:[(0,f.jsx)(Et,{}),(0,f.jsxs)(c,{children:[(0,f.jsx)(a,{path:`/`,element:(0,f.jsx)(S,{})}),(0,f.jsx)(a,{path:`/about`,element:(0,f.jsx)(Ie,{})}),(0,f.jsx)(a,{path:`/services`,element:(0,f.jsx)(Ke,{})}),(0,f.jsx)(a,{path:`/contact`,element:(0,f.jsx)(gt,{})})]}),(0,f.jsx)(an,{}),(0,f.jsx)(Bt,{})]})]})}(0,te.createRoot)(document.getElementById(`root`)).render((0,f.jsx)(d.StrictMode,{children:(0,f.jsx)(sn,{})}));