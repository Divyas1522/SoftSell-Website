// src/components/ChatWidget.jsx
import { useState } from 'react';
import { getMockResponse } from '../library/chatLLM';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const exampleQs = [
    "How do I sell my license?",
    "What is the refund policy?",
    "Can I transfer a license?"
  ];

  const sendMessage = async (msg) => {
    if (!msg.trim()) return;
    setMessages((prev) => [...prev, { from: 'user', text: msg }]);
    setLoading(true);
    const reply = await getMockResponse(msg);
    setMessages((prev) => [...prev, { from: 'ai', text: reply }]);
    setLoading(false);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {isOpen ? (
        <div className="bg-white shadow-2xl border border-gray-200 rounded-2xl w-80 h-[30rem] flex flex-col animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-t-2xl flex justify-between items-center text-sm font-semibold">
            SoftSell Assistant
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg hover:text-gray-200 transition"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm bg-white">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl max-w-[80%] leading-relaxed ${
                  m.from === 'user'
                    ? 'ml-auto bg-blue-500 text-white shadow'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && <div className="text-gray-400 text-xs">AI is typing...</div>}
          </div>

          <div className="p-3 space-y-2 bg-gray-50 border-t">
            <div className="flex gap-2 flex-wrap">
              {exampleQs.map((q, i) => (
                <button
                  key={i}
                  className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-lg hover:bg-blue-200 transition"
                  onClick={() => sendMessage(q)}
                >
                  {q}
                </button>
              ))}
            </div>
            <div className="flex mt-2">
              <input
                type="text"
                className="flex-1 rounded-l-lg px-3 py-1.5 text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                placeholder="Ask me anything..."
              />
              <button
                onClick={() => sendMessage(input)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Chat with us 💬
        </button>
      )}
    </div>
  );
}
