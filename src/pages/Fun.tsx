import { useState } from "react";
import { FaBrain, FaSmile, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FunItem {
  id: number;
  category: "Riddle" | "AI Humor" | "ML Trivia";
  question: string;
  answer: string;
}

const funItems: FunItem[] = [
  {
    id: 1,
    category: "Riddle",
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
    answer: "An echo!",
  },
  {
    id: 2,
    category: "AI Humor",
    question: "Why did the neural network go to school?",
    answer: "Because it needed more layers!",
  },
  {
    id: 3,
    category: "ML Trivia",
    question: "Why did the decision tree cross the road?",
    answer: "To split the other side!",
  },
  {
    id: 4,
    category: "AI Humor",
    question: "How do machine learning engineers prefer their coffee?",
    answer: "Without any overfitting, and with hyperparameter-tuned temperature!",
  },
  {
    id: 5,
    category: "Riddle",
    question: "I can be trained, but I have no muscles. I can predict tomorrow, but I have no crystal ball. What am I?",
    answer: "A Machine Learning model!",
  },
];

export default function Fun() {
  const [revealedIds, setRevealedIds] = useState<number[]>([1, 2]);

  const toggleReveal = (id: number) => {
    setRevealedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <FaSmile className="text-amber-500" />
            <span>AI Brain Break</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            The Cueligence Cognitive Corner
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Take a quick cognitive breather from model architectures and loss curves. Test your intuition with curated riddles and engineering humor.
          </p>
        </div>

        {/* Interactive Cards */}
        <div className="space-y-4 mb-12">
          {funItems.map((item) => {
            const isRevealed = revealedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
                    item.category === "Riddle"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                      : item.category === "AI Humor"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                      : "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300"
                  }`}>
                    {item.category}
                  </span>
                  <button
                    onClick={() => toggleReveal(item.id)}
                    aria-expanded={isRevealed}
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
                  >
                    <span>{isRevealed ? "Hide Answer" : "Reveal Answer"}</span>
                    {isRevealed ? <FaChevronUp className="text-[10px]" /> : <FaChevronDown className="text-[10px]" />}
                  </button>
                </div>

                <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-3">
                  {item.question}
                </p>

                {isRevealed && (
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/60 text-sm font-semibold text-emerald-700 dark:text-emerald-300 animate-in fade-in duration-200">
                    💡 {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* External Flashcard Link (Non-blocking) */}
        <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
          <FaBrain className="text-3xl text-indigo-500 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Want more riddles and interactive flashcards?</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
            Explore our standalone open web flashcards app with hundreds of riddles, brainteasers, and trivia cards.
          </p>
          <a
            href="https://jinka97.github.io/riddles-and-jokes-flashcards/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm transition focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span>Launch Flashcards App</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
}
