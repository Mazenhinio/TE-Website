import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const messages = [
  { sender: 'user',  text: "Hi, I tried calling but no one answered. Are you available?", delay: 800 },
  { sender: 'hotel', text: "Good evening! This is the Front Desk at Grand Palace. We're with another guest right now — how can we assist you?", delay: 2200 },
  { sender: 'user',  text: "I'm looking to book a room for 2 nights, arriving this Friday.", delay: 4400 },
  { sender: 'hotel', text: "Of course. We have our Deluxe Sea View and Executive Suite available. Which do you prefer?", delay: 6400 },
  { sender: 'user',  text: "What's the difference in price?", delay: 8200 },
  { sender: 'hotel', text: "Deluxe Sea View is $280/night. Executive Suite is $420/night and includes private lounge access and a welcome amenity.", delay: 10400 },
  { sender: 'user',  text: "The Suite sounds great. Can I get an early check-in?", delay: 13000 },
  { sender: 'hotel', text: "Absolutely. I've flagged your reservation for 11AM check-in. You'll receive a confirmation link shortly to complete the booking.", delay: 15200 },
  { sender: 'user',  text: "Perfect. Also, do you have airport pickup?", delay: 17400 },
  { sender: 'hotel', text: "Yes — our concierge transfer is $45 one-way. Shall I add it to your booking?", delay: 19200 },
  { sender: 'user',  text: "Yes please. Landing at Terminal 1 at 09:30.", delay: 21000 },
  { sender: 'hotel', text: "Done. Driver will meet you at Arrivals with a name board. See you Friday!", delay: 23200 },
];

// WhatsApp dark mode palette
const wa = {
  header:       '#1f2c34',
  chatBg:       '#0b141a',
  incoming:     '#1f2c34',   // received bubble
  outgoing:     '#005c4b',   // sent bubble
  incomingText: '#e9edef',
  outgoingText: '#e9edef',
  mutedText:    '#8696a0',
  inputBar:     '#1f2c34',
  inputField:   '#2a3942',
  green:        '#00a884',
  greenOnline:  '#00cf9d',
  tickColor:    '#53bdeb',
};

export default function PhoneChatAnimation() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (index < messages.length) {
      const msg = messages[index];
      const isHotel = msg.sender === 'hotel';
      const prevDelay = index > 0 ? messages[index - 1].delay : 0;
      const gap = msg.delay - prevDelay;

      let typingTimer;
      if (isHotel) {
        typingTimer = setTimeout(() => setIsTyping(true), gap - 900);
      }

      const timer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, msg]);
        setIndex(prev => prev + 1);
      }, gap);

      return () => {
        clearTimeout(timer);
        clearTimeout(typingTimer);
      };
    } else {
      const resetTimer = setTimeout(() => {
        setVisibleMessages([]);
        setIndex(0);
        setIsTyping(false);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [index]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  return (
    <div className="relative w-[280px] h-[580px] bg-[#000] rounded-[3rem] border-[8px] border-[#1c1c1c] shadow-2xl overflow-hidden flex flex-col">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#1c1c1c] rounded-b-2xl z-20" />

      {/* WhatsApp Header */}
      <div
        className="pt-8 pb-3 px-4 flex items-center gap-3 flex-shrink-0"
        style={{ backgroundColor: wa.header }}
      >
        {/* Avatar */}
        <div className="relative w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
             style={{ backgroundColor: `${wa.green}25` }}>
          <span
            className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
            style={{ backgroundColor: wa.greenOnline, borderColor: wa.header }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold leading-none" style={{ color: wa.incomingText }}>
            Grand Palace · Front Desk
          </p>
          <p className="text-[10px] mt-1 font-medium" style={{ color: wa.green }}>
            online
          </p>
        </div>
        {/* WhatsApp-style dots menu */}
        <div className="flex gap-0.5">
          {[0,1,2].map(i => (
            <div key={i} className="w-1 h-1 rounded-full" style={{ backgroundColor: wa.mutedText }} />
          ))}
        </div>
      </div>

      {/* WhatsApp Chat wallpaper bg */}
      <div
        ref={chatRef}
        className="flex-grow p-3 space-y-3 overflow-y-auto no-scrollbar"
        style={{ backgroundColor: wa.chatBg }}
      >
        {/* Date badge */}
        <div className="flex justify-center">
          <span
            className="text-[10px] font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: '#182229', color: wa.mutedText }}
          >
            TODAY
          </span>
        </div>

        <AnimatePresence>
          {visibleMessages.map((msg, i) => {
            const isUser = msg.sender === 'user';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
                className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[80%] px-3 pt-2 pb-1.5 rounded-2xl text-[12px] leading-relaxed font-normal relative"
                  style={{
                    backgroundColor: isUser ? wa.outgoing : wa.incoming,
                    color: wa.incomingText,
                    borderRadius: isUser
                      ? '12px 12px 2px 12px'
                      : '12px 12px 12px 2px',
                  }}
                >
                  {msg.text}
                  {/* Time + tick */}
                  <div className="flex items-center justify-end gap-1 mt-0.5">
                    <span className="text-[9px]" style={{ color: wa.mutedText }}>
                      {String(Math.floor(Math.random() * 3) + 9).padStart(2,'0')}:{String(i * 7 % 60).padStart(2,'0')}
                    </span>
                    {isUser && (
                      <svg width="14" height="10" viewBox="0 0 16 11" fill="none">
                        <path d="M1 5.5L5 9.5L15 1" stroke={wa.tickColor} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 5.5L9 9.5" stroke={wa.tickColor} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div
                className="px-4 py-3 flex gap-1 items-center rounded-2xl rounded-bl-sm"
                style={{ backgroundColor: wa.incoming }}
              >
                {[0, 150, 300].map((delay, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{ backgroundColor: wa.mutedText, animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* WhatsApp Input Bar */}
      <div
        className="px-3 py-2.5 flex gap-2 items-center flex-shrink-0"
        style={{ backgroundColor: wa.inputBar }}
      >
        <div
          className="flex-grow h-9 rounded-full px-4 flex items-center"
          style={{ backgroundColor: wa.inputField }}
        >
          <span className="text-[11px]" style={{ color: wa.mutedText }}>Message</span>
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: wa.green }}
        >
          {/* Mic icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v7a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2zM8.5 14H7a5 5 0 0 0 10 0h-1.5A3.5 3.5 0 0 1 8.5 14zM12 19v2" stroke="white" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
