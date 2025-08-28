import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm your hotel assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (msg) => {
    const text = msg.toLowerCase();

    // Greetings
    if (["hi", "hello", "hey"].some((w) => text.includes(w)))
      return "Hello! Welcome to Grand Palace Hotel. How can I assist you today?";

    // Booking / Reservation
    if (["book", "reservation", "room"].some((w) => text.includes(w)))
      return "Sure! We have rooms starting at $199/night. Would you like to check availability?";

    // Services / Amenities
    if (["service", "spa", "restaurant", "pool"].some((w) => text.includes(w)))
      return "We offer a spa, pool, restaurant, fitness center, and more. Which one are you interested in?";

    // Prices
    if (["price", "cost", "rate"].some((w) => text.includes(w)))
      return "Room rates start at $199/night for standard rooms. Deluxe and suites are also available.";

    // Location
    if (["where", "location", "address"].some((w) => text.includes(w)))
      return "We are located downtown, close to major attractions. Free shuttle service is available.";

    // Check-in / Check-out
    if (
      ["check in", "checkin", "check out", "checkout"].some((w) =>
        text.includes(w)
      )
    )
      return "Check-in starts at 3:00 PM, and check-out is until 11:00 AM.";

    // Payment methods
    if (["payment", "pay", "card", "cash"].some((w) => text.includes(w)))
      return "We accept credit/debit cards, mobile payments, and cash at the front desk.";

    // Cancellation policy
    if (["cancel", "cancellation", "refund"].some((w) => text.includes(w)))
      return "Cancellations made 24 hours before check-in are fully refundable. Later cancellations may incur a fee.";

    // Parking
    if (["parking", "car", "vehicle", "garage"].some((w) => text.includes(w)))
      return "Yes, we offer free on-site parking for guests. Valet parking is also available.";

    // Wi-Fi
    if (["wifi", "internet"].some((w) => text.includes(w)))
      return "We provide free high-speed Wi-Fi throughout the hotel, including rooms and common areas.";

    // Events / Banquets
    if (
      ["event", "wedding", "conference", "meeting", "banquet"].some((w) =>
        text.includes(w)
      )
    )
      return "We have banquet halls and meeting rooms suitable for weddings, conferences, and events. Would you like me to connect you to our events team?";

    // Pets
    if (["pet", "dog", "cat", "animal"].some((w) => text.includes(w)))
      return "Yes, we are a pet-friendly hotel. Small pets are welcome with an additional cleaning fee.";

    // Shuttle / Transport
    if (["shuttle", "airport", "transport"].some((w) => text.includes(w)))
      return "We provide free shuttle service to nearby attractions and paid airport transfers on request.";

    // Default fallback
    return "Thanks for your question! For detailed info, please call our front desk at +1 (555) 123-4567.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const userMsg = input.trim();

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMsg, time: currentTime },
    ]);
    setInput("");

    // Simulate typing delay
    setTimeout(() => {
      const aiMsg = generateResponse(userMsg);
      const responseTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: aiMsg, time: responseTime },
      ]);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Toggle Button */}
      <button
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-105 ${
          isOpen ? "bg-red-400 text-white" : "bg-blue-500 text-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 h-[400px] bg-white border border-gray-300 rounded-xl shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gray-100 p-3 font-semibold text-gray-800 border-b border-gray-200">
            Hotel Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                } mb-2`}>
                <div
                  className={`px-3 py-2 rounded-xl max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-200 flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-black border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
