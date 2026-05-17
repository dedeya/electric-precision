import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WidgetShell = styled.div`
  position: fixed;
  right: clamp(12px, 2.4vw, 28px);
  bottom: clamp(12px, 2.2vw, 24px);
  z-index: 140;
`;

const Launcher = styled.button`
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
`;

const Panel = styled.section`
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
`;

const Header = styled.div`
  padding: 0.82rem 0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  border-bottom: 1px solid rgba(126, 164, 194, 0.26);
  background: rgba(4, 19, 31, 0.66);
`;

const TitleWrap = styled.div`
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
`;

const Pulse = styled.i`
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
`;

const MinimizeButton = styled.button`
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
`;

const Stream = styled.div`
  padding: 0.85rem;
  overflow: auto;
  display: grid;
  align-content: start;
  gap: 0.55rem;
`;

const Bubble = styled.div`
  max-width: 92%;
  padding: 0.62rem 0.7rem;
  border-radius: 12px;
  justify-self: ${(props) => (props.$fromUser ? "end" : "start")};
  border: 1px solid ${(props) => (props.$fromUser ? "rgba(32, 188, 212, 0.34)" : "rgba(126, 164, 194, 0.28)")};
  background: ${(props) =>
    props.$fromUser
      ? "linear-gradient(135deg, rgba(6, 40, 59, 0.86), rgba(5, 29, 43, 0.76))"
      : "rgba(8, 30, 47, 0.65)"};
  color: ${(props) => (props.$fromUser ? "#dff4ff" : "#d6e5f4")};
  font-size: 0.82rem;
  line-height: 1.55;
`;

const Footer = styled.div`
  padding: 0.78rem;
  border-top: 1px solid rgba(126, 164, 194, 0.26);
  background: rgba(4, 19, 31, 0.68);
`;

const QuickReplies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
`;

const Chip = styled.button`
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
`;

const Composer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.45rem;
`;

const Input = styled.input`
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
`;

const Send = styled.button`
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
`;

const AssistRow = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const AssistLink = styled(Link)`
  color: var(--accent);
  font-size: 0.73rem;
  text-decoration: none;

  &:hover {
    color: #f8d57a;
  }
`;

const AssistAnchor = styled.a`
  color: var(--accent);
  font-size: 0.73rem;
  text-decoration: none;

  &:hover {
    color: #f8d57a;
  }
`;

const QUICK_PROMPTS = [
  "What services do you provide?",
  "Can I book a consultation?",
  "How quickly do you respond?",
];

const STORAGE_KEYS = {
  messages: "epl-chat-messages",
  open: "epl-chat-open",
};

const initialMessage = {
  id: "welcome",
  role: "assistant",
  text: "Hi, I am the Electric Precision assistant. Ask about services, timelines, or booking a consultation.",
};

const OFFICE_ADDRESS = "6 Cowdall Road, Leicester, LE3 1SE";

const getAssistantReply = (text) => {
  const normalized = text.toLowerCase();

  if (normalized.includes("service") || normalized.includes("offer")) {
    return "We support SCADA and control systems, substation automation, OT cybersecurity, and energy management programs.";
  }

  if (normalized.includes("consult") || normalized.includes("book") || normalized.includes("meeting")) {
    return "Yes. Use the Contact Us page and we will arrange a discovery call with the engineering team.";
  }

  if (normalized.includes("response") || normalized.includes("reply") || normalized.includes("how quickly")) {
    return "Typical response time is within 1 business day, often sooner for urgent operational enquiries.";
  }

  if (normalized.includes("phone") || normalized.includes("call")) {
    return "You can call us on +44 7542 858460.";
  }

  if (normalized.includes("email") || normalized.includes("enquiry") || normalized.includes("inquiry")) {
    return "You can email info@electricprecisionlabs.co.uk and include your project stage and objectives for faster triage.";
  }

  if (
    normalized.includes("address") ||
    normalized.includes("location") ||
    normalized.includes("where are you") ||
    normalized.includes("office") ||
    normalized.includes("based")
  ) {
    return `Our office address is ${OFFICE_ADDRESS}.`;
  }

  return "Thanks for your message. For project-specific support, share your scope and timeline, or open Contact Us for a direct enquiry.";
};

const Chatbox = () => {
  const [open, setOpen] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.open) === "1";
    } catch {
      return false;
    }
  });
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.messages);
      if (!raw) {
        return [initialMessage];
      }

      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        return [initialMessage];
      }

      return parsed;
    } catch {
      return [initialMessage];
    }
  });
  const streamRef = useRef(null);
  const messageIdRef = useRef(0);

  const hasMessages = useMemo(() => messages.length > 1, [messages.length]);

  useEffect(() => {
    const node = streamRef.current;
    if (node) {
      node.scrollTop = node.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.messages, JSON.stringify(messages));
    } catch {
      // Ignore storage errors (private mode / quota / blocked storage).
    }
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.open, open ? "1" : "0");
    } catch {
      // Ignore storage errors (private mode / quota / blocked storage).
    }
  }, [open]);

  const nextMessageId = (role) => {
    messageIdRef.current += 1;
    return `${role}-${messageIdRef.current}`;
  };

  const pushMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    const userMessage = {
      id: nextMessageId("user"),
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    window.setTimeout(() => {
      const assistantMessage = {
        id: nextMessageId("assistant"),
        role: "assistant",
        text: getAssistantReply(trimmed),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 520);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    pushMessage(input);
  };

  if (!open) {
    return (
      <WidgetShell>
        <Launcher type="button" onClick={() => setOpen(true)} aria-label="Open chat assistant">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 12a8 8 0 1 1 14 5.3L20 21l-4.3-2A8 8 0 0 1 4 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Chat With Us
        </Launcher>
      </WidgetShell>
    );
  }

  return (
    <WidgetShell>
      <Panel aria-label="Site chat assistant">
        <Header>
          <TitleWrap>
            <strong>Electric Precision Chat</strong>
            <span>
              <Pulse />
              Online now
            </span>
          </TitleWrap>
          <MinimizeButton type="button" onClick={() => setOpen(false)} aria-label="Minimize chat">
            -
          </MinimizeButton>
        </Header>

        <Stream ref={streamRef}>
          {messages.map((message) => (
            <Bubble key={message.id} $fromUser={message.role === "user"}>
              {message.text}
            </Bubble>
          ))}
          {!hasMessages ? (
            <Bubble>
              Ask a quick question or use one of the prompts below.
            </Bubble>
          ) : null}
        </Stream>

        <Footer>
          <QuickReplies>
            {QUICK_PROMPTS.map((prompt) => (
              <Chip key={prompt} type="button" onClick={() => pushMessage(prompt)}>
                {prompt}
              </Chip>
            ))}
          </QuickReplies>

          <Composer onSubmit={onSubmit}>
            <Input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your message..."
              aria-label="Your chat message"
            />
            <Send type="submit" aria-label="Send chat message">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m4 12 15-7-3 7 3 7-15-7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Send>
          </Composer>

          <AssistRow>
            <AssistLink to="/contact">Open Contact Us</AssistLink>
            <AssistAnchor href="tel:+447542858460">Call +44 7542 858460</AssistAnchor>
            <AssistAnchor
              href="https://maps.google.com/?q=6+Cowdall+Road,+Leicester,+LE3+1SE"
              target="_blank"
              rel="noreferrer"
            >
              Find us in Leicester
            </AssistAnchor>
          </AssistRow>
        </Footer>
      </Panel>
    </WidgetShell>
  );
};

export default Chatbox;
