import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome to Urban Textile Hub. How can I help you today?", isBot: true },
    { id: 2, text: "You can ask about our fabrics, submit a trade enquiry, or enquire about Quotations and Auctions.", isBot: true }
  ]);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef(null);

  const quickReplies = [
    { text: "View Products", reply: "I would like to know more about your fabrics and products." },
    { text: "Trade Enquiry", reply: "How can I submit a bulk trade enquiry?" },
    { text: "e-Quotation info", reply: "What is the process to get an e-Quotation?" }
  ];

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;

    const userMsg = { id: Date.now(), text: textToSend, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInputVal("");

    // Bot Response Logic
    setTimeout(() => {
      let botText = "Thank you for reaching out. An executive from Urban Textile Hub will review your message and connect with you shortly.";
      const lower = textToSend.toLowerCase();

      if (lower.includes("product") || lower.includes("saree") || lower.includes("fabric") || lower.includes("collection") || lower.includes("kurti")) {
        botText = "We manufacture a premium catalog of Sarees, Kurtis, Leggings, Suiting, Shirting, and Home Furnishings. You can browse the active catalogue on our Product Page!";
      } else if (lower.includes("enquiry") || lower.includes("bulk") || lower.includes("wholesale")) {
        botText = "For wholesale quantities, bulk styling, or custom manufacturing, please fill out the form on our Trade Enquiry page. Our sales team will get back to you within 24 hours.";
      } else if (lower.includes("quote") || lower.includes("quotation") || lower.includes("price")) {
        botText = "You can request a bulk price quote by visiting our e-Quotation page and filling out the quote request form.";
      } else if (lower.includes("auction") || lower.includes("bid")) {
        botText = "Our e-Auction portal is used for digital liquidation of stocks. Register your business and upload your GST certificate on our e-Auction page to join.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botText, isBot: true }]);
    }, 1000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-rosegold-500 hover:bg-rosegold-400 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 border border-rosegold-300/20 cursor-pointer"
        title="Chat with Assistant"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Floating WhatsApp Button directly above Chatbot button */}
      <a
        href="https://wa.me/916353778329"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[78px] right-6 z-50 w-11 h-11 bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 border border-green-300/20 cursor-pointer"
        title="Chat on WhatsApp"
      >
        <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.459 5.416 1.46 5.538 0 10.043-4.508 10.046-10.048.002-2.684-1.04-5.207-2.936-7.106C17.276 1.562 14.757.519 12.01.519c-5.542 0-10.048 4.512-10.05 10.051-.001 1.996.523 3.948 1.52 5.657l-.999 3.65 3.737-.98c1.61.878 3.434 1.342 5.288 1.343zm12.306-7.37c-.305-.153-1.805-.89-2.083-.992-.279-.101-.482-.153-.684.153-.203.305-.786.992-.963 1.194-.178.203-.355.228-.66.076-.304-.153-1.286-.474-2.45-1.511-.905-.808-1.516-1.806-1.694-2.112-.178-.305-.019-.47.133-.621.137-.137.305-.355.457-.533.152-.178.203-.305.305-.508.102-.203.051-.381-.025-.533-.076-.153-.684-1.65-.937-2.26-.247-.595-.499-.515-.684-.524-.178-.008-.381-.01-.584-.01-.203 0-.533.076-.813.381-.279.305-1.066 1.042-1.066 2.542 0 1.5 1.091 2.946 1.243 3.149.153.203 2.148 3.28 5.204 4.602.727.314 1.294.502 1.737.643.73.232 1.393.2 1.918.12.585-.087 1.805-.738 2.059-1.452.254-.715.254-1.328.178-1.452-.076-.124-.279-.203-.584-.356z" />
        </svg>
      </a>

      {/* Chatbox Panel (positioned above both buttons) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-[130px] right-6 w-80 sm:w-96 h-[480px] bg-white border border-gray-200 shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-rosegold-500 text-white px-6 py-4 flex items-center justify-between shadow-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 border border-white/20 flex items-center justify-center font-playfair font-bold text-sm bg-white/10">
                    U
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-rosegold-500 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-playfair text-xs tracking-wider uppercase font-semibold">Urban Assistant</h4>
                  <p className="text-[9px] text-pearl-100/70 font-medium">Online & Ready to Help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-pearl-100 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 text-sm shadow-sm ${msg.isBot
                        ? 'bg-white text-gray-800 border border-gray-250'
                        : 'bg-rosegold-500 text-white font-medium'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 2 && (
              <div className="p-3 bg-white border-t border-gray-150 flex flex-wrap gap-2 shrink-0">
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(reply.reply)}
                    className="text-[10px] uppercase tracking-wider font-semibold border border-rosegold-500/30 text-rosegold-500 hover:bg-rosegold-500/5 px-2.5 py-1.5 transition-colors cursor-pointer"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputVal);
              }}
              className="p-3 bg-white border-t border-gray-150 flex gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about fabrics, quotes, sales..."
                className="flex-1 px-4 py-2.5 border border-gray-200 focus:outline-none focus:border-rosegold-500 text-sm text-gray-800 bg-pearl-100"
              />
              <button
                type="submit"
                className="bg-rosegold-500 text-white p-2.5 hover:bg-rosegold-400 transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Send Message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
