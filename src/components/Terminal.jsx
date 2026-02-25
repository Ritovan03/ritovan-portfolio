import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

// ─── Themes ───────────────────────────────────────────────────────────────────
const themes = {
  mac: {
    container:
      "bg-[#1e1e1e]/60 backdrop-blur-md text-white rounded-xl shadow-2xl w-full",
    topBar: "flex items-center space-x-2 px-4 py-3 bg-[#2d2d2d] rounded-t-xl",
    trafficLights: ["bg-red-500", "bg-yellow-400", "bg-green-500"],
    content: "p-4 sm:p-5 font-mono text-sm",
    prompt: "text-green-400",
    output: "text-gray-300",
    input: "text-white",
    cursor: "bg-green-400",
  },
  hacker: {
    container:
      "bg-black text-green-300 font-mono rounded-xl shadow-[0_0_20px_rgba(0,255,0,0.2)] border border-green-500 w-full",
    topBar: "flex items-center space-x-2 px-4 py-3",
    trafficLights: ["bg-red-500", "bg-yellow-400", "bg-green-500"],
    content: "p-4 sm:p-5 font-mono text-sm",
    prompt: "text-green-400",
    output: "text-green-300",
    input: "text-green-300",
    cursor: "bg-green-400",
  },
  light: {
    container:
      "bg-white text-gray-900 font-mono rounded-xl shadow-md border border-gray-300 w-full",
    topBar: "flex items-center space-x-2 px-4 py-3 bg-gray-100 rounded-t-xl",
    trafficLights: ["bg-red-500", "bg-yellow-400", "bg-green-500"],
    content: "p-4 sm:p-5 font-mono text-sm",
    prompt: "text-blue-600",
    output: "text-gray-700",
    input: "text-gray-900",
    cursor: "bg-blue-600",
  },
};

// ─── Built-in command responses ────────────────────────────────────────────────
const COMMANDS = {
  help: [
    "Available commands:",
    "  whoami       — who am I?",
    "  about        — a short bio",
    "  skills       — languages I know",
    "  stack        — tech stack",
    "  experience   — work experience",
    "  projects     — what I've built",
    "  contact      — reach me",
    "  ls           — list sections",
    "  clear        — clear terminal",
    "  date         — current date",
  ],
  whoami: ["Ritovan Dasgupta — App & Software Developer"],
  about: [
    "Dedicated app and software developer with a strong CS foundation.",
    "Skilled in C, C++, Java, and Kotlin.",
    "Expanding into Node.js, Express.js, and backend systems.",
    "Loves DSA and competitive programming (LeetCode, HackerEarth).",
  ],
  skills: [
    "Languages  :  C · C++ · Java · Kotlin · JavaScript",
    "Mobile     :  Android (Kotlin) · Flutter",
    "Frontend   :  React · Tailwind CSS",
    "Backend    :  Node.js · Express.js",
    "Database   :  MongoDB · Firebase · Redis",
    "Tools      :  Git · Figma · GCP",
  ],
  stack: [
    "Mobile   → Kotlin (Android), Flutter",
    "Frontend → React, Tailwind CSS",
    "Backend  → Node.js, Express.js",
    "DB       → MongoDB, Firebase, Redis",
    "Cloud    → Google Cloud Platform",
    "Auth     → JWT, Razorpay Webhooks",
  ],
  experience: [
    "SDE Intern @ ENest  (Jun 2025 – Present)",
    "  · Production mobile app · 100+ Play Store users",
    "  · Razorpay integration · Node.js REST APIs",
    "",
    "Native App Developer @ Epoch  (Aug 2024 – Apr 2025)",
    "  · Kotlin mobile apps",
    "  · Integrated ML/NLP models into mobile UX",
  ],
  projects: [
    "TerraPulse   — environmental monitoring platform",
    "MintBolt     — fintech micro-investment app",
    "SparkChain   — blockchain-based reward system",
    "Crispr       — biotech data management tool",
    "Maitri       — mental health companion app",
    "",
    "Type 'experience' for work history.",
  ],
  contact: [
    "GitHub   : github.com/Ritovan03",
    "Email    : ritovandasgupta@gmail.com",
    "LinkedIn : linkedin.com/in/ritovan-dasgupta",
  ],
  ls: ["about/   experience/   projects/   tech/   contact/   blog/"],
  date: [new Date().toDateString()],
};

// ─── Typewriter sub-component ─────────────────────────────────────────────────
const TypewriterTerminal = ({
  lines,
  loop,
  withDeleteEffect,
  typingSpeed,
  deleteSpeed,
  pauseBeforeDelete,
  pauseBeforeNextLine,
  theme,
  fontSize,
  height,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentLine =
    typeof lines[lineIndex % lines.length] === "string"
      ? { prompt: "", output: lines[lineIndex % lines.length] }
      : lines[lineIndex % lines.length];
  const fullText = `${currentLine.prompt}${currentLine.output}`;

  useEffect(() => {
    let timeout;
    if (!deleting) {
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((p) => p + fullText[charIndex]);
          setCharIndex((p) => p + 1);
        }, typingSpeed);
      } else {
        if (withDeleteEffect) {
          timeout = setTimeout(() => setDeleting(true), pauseBeforeDelete);
        } else if (loop) {
          timeout = setTimeout(() => {
            setLineIndex((p) => (p + 1) % lines.length);
            setDisplayedText("");
            setCharIndex(0);
          }, pauseBeforeNextLine);
        }
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((p) => p.slice(0, -1));
        }, deleteSpeed);
      } else {
        setDeleting(false);
        setCharIndex(0);
        setLineIndex((p) => (p + 1) % lines.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [
    charIndex,
    deleting,
    displayedText,
    fullText,
    lines,
    loop,
    withDeleteEffect,
    typingSpeed,
    deleteSpeed,
    pauseBeforeDelete,
    pauseBeforeNextLine,
  ]);

  return (
    <div
      className={`${theme.content} ${fontSize}`}
      style={{ overflow: "auto", height }}
    >
      <pre className={theme.output}>{displayedText}</pre>
    </div>
  );
};

// ─── Interactive sub-component ────────────────────────────────────────────────
const InteractiveTerminal = ({ theme, fontSize, height }) => {
  const WELCOME = [
    { type: "output", text: "Welcome to Ritovan's portfolio terminal." },
    { type: "output", text: "Type 'help' to see available commands." },
    { type: "output", text: "" },
  ];

  const [history, setHistory] = useState(WELCOME);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  // scroll terminal content (not the page) to bottom on new output
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    const newHistory = [...history, { type: "input", text: raw }];

    if (cmd === "") {
      setHistory([...newHistory, { type: "output", text: "" }]);
      return;
    }

    if (cmd === "clear") {
      setHistory(WELCOME);
      return;
    }

    const response = COMMANDS[cmd];
    if (response) {
      setHistory([
        ...newHistory,
        ...response.map((line) => ({ type: "output", text: line })),
        { type: "output", text: "" },
      ]);
    } else {
      setHistory([
        ...newHistory,
        { type: "error", text: `command not found: ${cmd}. Type 'help'.` },
        { type: "output", text: "" },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    }
  };

  return (
    <div
      ref={scrollRef}
      className={`${theme.content} ${fontSize}`}
      style={{ overflow: "auto", height, cursor: "text" }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* History */}
      {history.map((entry, i) => (
        <div key={i} className="whitespace-pre-wrap break-words">
          {entry.type === "input" ? (
            <span>
              <span className={theme.prompt}>$ </span>
              <span className={theme.input}>{entry.text}</span>
            </span>
          ) : entry.type === "error" ? (
            <span className="text-red-400">{entry.text}</span>
          ) : (
            <span className={theme.output}>{entry.text}</span>
          )}
        </div>
      ))}

      {/* Active input line */}
      <div className="flex items-center">
        <span className={`${theme.prompt} mr-1`}>$</span>
        <span className={theme.input}>{input}</span>
        <span
          className={`inline-block w-[2px] h-[1em] ml-[1px] animate-pulse ${theme.cursor}`}
        />
      </div>

      {/* Hidden real input */}
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="absolute opacity-0 w-0 h-0 pointer-events-none"
        aria-label="terminal input"
      />
    </div>
  );
};

// ─── Main Terminal component ──────────────────────────────────────────────────
const Terminal = ({
  lines = [],
  loop = false,
  withDeleteEffect = true,
  typingSpeed = 50,
  deleteSpeed = 25,
  pauseBeforeDelete = 1000,
  pauseBeforeNextLine = 2000,
  terminalStyle = "mac",
  fontSize = "text-sm",
  className = "",
  interactive = false,
  height = 400,
}) => {
  const theme = themes[terminalStyle] || themes.mac;
  const contentHeight = `calc(${typeof height === "number" ? height + "px" : height} - 50px)`;

  return (
    <div
      className={`${theme.container} ${className}`}
      style={{
        height: typeof height === "number" ? height : height,
        userSelect: interactive ? "text" : "none",
        overflow: "hidden",
      }}
    >
      {/* Top bar */}
      <div className={theme.topBar}>
        {theme.trafficLights.map((color, i) => (
          <span key={i} className={`h-3 w-3 rounded-full ${color}`} />
        ))}
        <span className="ml-3 text-xs text-gray-400 font-mono">
          {interactive ? "ritovan@portfolio ~ " : "terminal"}
        </span>
      </div>

      {/* Content */}
      {interactive ? (
        <InteractiveTerminal
          theme={theme}
          fontSize={fontSize}
          height={contentHeight}
        />
      ) : (
        <TypewriterTerminal
          lines={lines}
          loop={loop}
          withDeleteEffect={withDeleteEffect}
          typingSpeed={typingSpeed}
          deleteSpeed={deleteSpeed}
          pauseBeforeDelete={pauseBeforeDelete}
          pauseBeforeNextLine={pauseBeforeNextLine}
          theme={theme}
          fontSize={fontSize}
          height={contentHeight}
        />
      )}
    </div>
  );
};

Terminal.propTypes = {
  lines: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        prompt: PropTypes.string.isRequired,
        output: PropTypes.string.isRequired,
      }),
    ]),
  ),
  loop: PropTypes.bool,
  withDeleteEffect: PropTypes.bool,
  typingSpeed: PropTypes.number,
  deleteSpeed: PropTypes.number,
  pauseBeforeDelete: PropTypes.number,
  pauseBeforeNextLine: PropTypes.number,
  terminalStyle: PropTypes.oneOf(["mac", "hacker", "light"]),
  fontSize: PropTypes.string,
  className: PropTypes.string,
  interactive: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Terminal;
