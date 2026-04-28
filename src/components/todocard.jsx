import React, { useEffect, useMemo, useRef, useState } from "react";

const initialItems = [
  { 
    id: 1, 
    text: "Connect to me on LinkedIn", 
    done: false, 
    link: "https://www.linkedin.com/in/prathamvk27/" // <-- Add your link
  },
  { 
    id: 2, 
    text: "Check out my GitHub", 
    done: false, 
    link: "https://github.com/Prathamvk27" // <-- Add your link
  },
  { 
    id: 3, 
    text: "Send me an email", 
    done: false, 
    link: "mailto:prathamvk27@gmail.com" // <-- Add your email
  },
  { 
    id: 4, 
    text: "Full portfolio launching soon!", 
    done: false, 
    link: null // This one isn't a link
  },
];

const CONFETTI_COLORS = ["#10b981", "#f59e0b", "#6366f1", "#ef4444", "#06b6d4"];

export function TodoCard() {
  const [items, setItems] = useState(initialItems);
  const [dateInfo, setDateInfo] = useState({ date: "", time: "" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      const time = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setDateInfo({ date, time });
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // This is the only line that changed (we removed ": number")
  const toggleItem = (id) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));
  };

// ADD THIS NEW FUNCTION:
const handleItemClick = (item) => {
  // 1. Immediately toggle the item so the checkmark appears
  toggleItem(item.id);

  // 2. If it has a link, open it after a short delay
  //    (This lets the user see the check animation first)
  if (item.link) {
    setTimeout(() => {
      window.open(item.link, "_blank", "noopener,noreferrer");
    }, 300); // 300ms delay
  }
};

  const resetList = () => setItems(initialItems);

  const allDone = useMemo(() => items.length > 0 && items.every((i) => i.done), [items]);

  const [celebrating, setCelebrating] = useState(false);
  const wasAllDoneRef = useRef(false);

  useEffect(() => {
    if (allDone && !wasAllDoneRef.current) {
      setCelebrating(true);
      wasAllDoneRef.current = true;
      const t = setTimeout(() => setCelebrating(false), 4000);
      return () => clearTimeout(t);
    }
    if (!allDone) {
      wasAllDoneRef.current = false;
      setCelebrating(false);
    }
  }, [allDone]);

  const Header = (
    <div
      className={`flex items-center justify-between px-4 py-3 ${
        allDone
          ? "bg-gradient-to-b from-emerald-400 to-emerald-300"
          : "bg-gradient-to-b from-yellow-300 to-yellow-200"
      }`}
    >
      <div className="flex items-center space-x-3">
        <span className="text-sm font-semibold text-gray-900">{dateInfo.date}</span>
        <span className="bg-black/10 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">
          {dateInfo.time}
        </span>
      </div>

      {allDone ? (
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">All done!</span>
          <button
            onClick={resetList}
            className="text-gray-900 font-semibold text-xs px-2 py-1 rounded-md bg-white/60 hover:bg-white/80 transition"
          >
            Reset
          </button>
        </div>
      ) : (
        <button className="text-gray-900 font-semibold text-sm hover:text-gray-700">Done</button>
      )}
    </div>
  );

  return (
    <div
      className={`w-[380px] rounded-2xl shadow-lg border overflow-hidden bg-white transition-all duration-500 ${
        allDone ? "border-emerald-200 ring-2 ring-emerald-200 scale-[1.01]" : "border-slate-100"
      }`}
    >
      {Header}

      <div className="px-5 py-4 text-gray-700"> {/* Added a little padding for separation */}
        <p className="text-sm">
            Hi there! I'm Pratham V K, a passionate Engineer with Software and Machine learning experience.
            This is my digital workspace, where I'm currently crafting my online portfolio.
            <div>

            </div>
            Please complete the tasks before you leave :) !!
        </p>
    </div>


      <div
        className={`relative p-5 ${
          allDone
            ? "bg-[radial-gradient(circle,rgba(16,185,129,0.08)_1px,transparent_1px)]"
            : "bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)]"
        } [background-size:10px_10px]`}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          {allDone ? "You crushed it today" : "Things to do today"}
        </h3>

        {!allDone && (
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className={`flex items-center gap-3 px-2 py-1 rounded-lg transition ${
                  item.done ? "bg-slate-100" : ""
                }`}
              >
                <label className="relative inline-flex items-center justify-center w-6 h-6">
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => handleItemClick(item)}
                    className="peer appearance-none absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <span
                    className={`flex items-center justify-center w-5 h-5 rounded-md border transition-all duration-200 ease-out transform ${
                      item.done
                        ? "bg-gray-900 border-gray-900 scale-95"
                        : "border-gray-300 bg-white scale-100"
                    }`}
                  >
                    <svg
                      className={`w-3 h-3 text-white transition-opacity duration-200 ${
                        item.done ? "opacity-100" : "opacity-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 12 9"
                    >
                      <path d="M1 4.2L4 7L11 1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </label>

                {/* Find the <a ...> and <span ...> logic we added and REPLACE it with this: */}
<span
  className={`text-sm transition-all duration-200 ${
    item.done ? "font-semibold text-gray-900 translate-x-[2px]" : "text-gray-900"
  }`}
>
  {item.text}
</span>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-4 text-sm text-gray-700 font-medium">
  The full site is under construction. Get in touch!
        </p>
      </div>
    </div>
  );
}

function ConfettiOverlay() {
  const pieces = Array.from({ length: 36 });
  return (
    <>
      <style>
        {`
          @keyframes confetti-fall {
            0% { transform: translateY(-20vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(80vh) rotate(720deg); opacity: 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            .confetti-piece { animation: none !important; }
          }
        `}
      </style>
      <div className="pointer-events-none fixed inset-0">
        {pieces.map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 0.5;
          const duration = 2.5 + Math.random() * 1.2;
          const size = 6 + Math.random() * 6;
          const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
          return (
            <span
              key={i}
              className="confetti-piece absolute rounded-sm"
              style={{
                left: `${left}%`,
                top: "-10px",
                width: `${size}px`,
                height: `${size * 0.4}px`,
                backgroundColor: color,
                transform: "translateY(0)",
                animation: `confetti-fall ${duration}s ease-in forwards`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}

/* 
Ok everything is working good, now how do I make the github.io website and 
link my code this webpage that I have developed on my localhost to my github 
profile and also I want it to up and running until I have this code running on 
my localhost so that.
*/