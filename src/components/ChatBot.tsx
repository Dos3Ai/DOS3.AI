import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronDown, Download, Calendar, ExternalLink, RefreshCw } from 'lucide-react';
import { EXTERNAL_LINKS, CEO_PROFILE } from '../data/content';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  action?: {
    label: string;
    href?: string;
    download?: boolean;
    onClick?: () => void;
  };
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPoppedUp, setHasPoppedUp] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialBotMessage: Message = {
    id: 'welcome-1',
    sender: 'bot',
    text: `👋 Greetings! Welcome to DOS3.AI. I'm your autonomous AI Agent assistant. How can I help you explore our 5-Layer Architecture, build custom enterprise MCP servers, or connect with our CEO Hariharan Babu?`,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);

  // Auto-popup when anyone opens the website (Requirement #3)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasPoppedUp(true);
      setUnreadCount(1);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickPrompts = [
    'What is the 5-Layer Architecture?',
    'Build custom MCP server with us',
    'Follow DOS3.AI on LinkedIn',
    'Meet CEO Dr. Hariharan Babu',
    'Explore previous AI projects',
    'Download Architecture Manual PDF',
    'Schedule a 30-min meeting'
  ];

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const newMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      generateBotResponse(userText.toLowerCase());
      setIsTyping(false);
    }, 700);
  };

  const generateBotResponse = (query: string) => {
    let replyText = '';
    let actionObj: Message['action'] | undefined = undefined;

    if (query.includes('layer') || query.includes('platform') || query.includes('architecture')) {
      replyText = `The DOS3.AI platform unites 5 interconnected layers:
1. Data: Knowledge graphs, streaming event verification, and verifiable context lineage.
2. Operating Systems: Memory-safe runtimes and workload sandboxing.
3. Servers: Distributed GPU/CPU compute coordination (NVIDIA H100 clusters).
4. Services: Declarative contract APIs and zero-trust event buses.
5. Artificial Intelligence: Model-agnostic planning with deterministic safety gates.`;
      actionObj = {
        label: 'Explore 5 Layers in Depth',
        href: '/technology'
      };
    } else if (query.includes('mcp') || query.includes('protocol') || query.includes('build') || query.includes('own agent')) {
      replyText = `We design and deploy custom enterprise Model Context Protocol (MCP) servers and autonomous AI Agent swarms tailored to your company's proprietary databases, internal tools, and APIs under strict zero-trust boundaries. Would you like to schedule an architecture discovery session with our team?`;
      actionObj = {
        label: 'Book 30-Min Architecture Discovery',
        href: EXTERNAL_LINKS.bookingSchedule
      };
    } else if (query.includes('linkedin') || query.includes('social') || query.includes('company page')) {
      replyText = `Follow our official DOS3.AI LinkedIn company page for architectural blueprints, system research updates, and HPC supercluster announcements! You can also connect directly with our CEO, Dr. Hariharan Babu BE, MS, PhD.`;
      actionObj = {
        label: 'Follow DOS3.AI on LinkedIn',
        href: EXTERNAL_LINKS.companyLinkedIn
      };
    } else if (query.includes('ceo') || query.includes('hariharan') || query.includes('founder') || query.includes('leadership')) {
      replyText = `DOS3.AI is founded and led by CEO Dr. Hariharan Babu BE, MS, PhD, who specializes in advanced distributed systems, Agentic AI, and HPC supercluster engineering. He believes machine reasoning must be grounded in verified operating systems and deterministic boundaries.`;
      actionObj = {
        label: "View CEO Dr. Hariharan Babu's LinkedIn",
        href: EXTERNAL_LINKS.ceoLinkedIn
      };
    } else if (query.includes('meet') || query.includes('schedule') || query.includes('call') || query.includes('book')) {
      replyText = `You can easily schedule a dedicated 30-minute meeting with our engineering leadership and CEO Hariharan Babu using our Microsoft Bookings calendar.`;
      actionObj = {
        label: 'Open Meeting Scheduler',
        href: EXTERNAL_LINKS.bookingSchedule
      };
    } else if (query.includes('project') || query.includes('work') || query.includes('portfolio') || query.includes('llm')) {
      replyText = `Our recent top-tier projects include:
• Enterprise Autonomous Agent Swarm (99.4% verification accuracy)
• High-Throughput Enterprise MCP Server Fabric (<8ms P99 latency)
• High-Performance LLM Inference & Context Routing Substrate on NVIDIA H100s
• Deterministic Episodic Memory & Lineage Repository.`;
      actionObj = {
        label: 'View Solutions & Projects',
        href: '/solutions'
      };
    } else if (query.includes('manual') || query.includes('pdf') || query.includes('download') || query.includes('document')) {
      replyText = `You can download our official DOS3.AI Technical Architecture & Organization Manual PDF directly to review our full system blueprints and engineering guidelines.`;
      actionObj = {
        label: 'Download Architecture Manual (PDF)',
        href: EXTERNAL_LINKS.manualPdf,
        download: true
      };
    } else if (query.includes('career') || query.includes('job') || query.includes('intern') || query.includes('hire')) {
      replyText = `We are actively hiring Senior AI Research Scientists, MCP Systems Leads, HPC Engineers, and offering Spring/Summer 2026 Internships in AI Agents and GPU Kernels based in Dallas, TX and hybrid/remote!`;
      actionObj = {
        label: 'View Open Roles & Internships',
        href: '/careers'
      };
    } else if (query.includes('dallas') || query.includes('location') || query.includes('where')) {
      replyText = `DOS3.AI is headquartered in Dallas, Texas, USA. Our team of 50+ researchers and systems engineers operates our local HPC clusters and coordinates globally.`;
      actionObj = {
        label: 'View Dallas, Texas in Maps',
        href: EXTERNAL_LINKS.dallasMaps
      };
    } else {
      replyText = `Thank you for your question. DOS3.AI engineers a continuous computational fabric unifying Data, OS, Servers, Services, and AI. Would you like to review our technical working papers, check upcoming events, or book a consultation?`;
      actionObj = {
        label: 'Connect with Us',
        href: '/contact'
      };
    }

    const botMsg: Message = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: replyText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action: actionObj
    };

    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative group p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-dos-cyan via-dos-azure to-dos-violet text-black font-semibold shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-dos-cyan shadow-glow-cyan/40"
          aria-label="Open AI Agent Chat"
        >
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-black" />
            <span className="hidden sm:inline font-mono text-xs font-bold uppercase tracking-wider text-black">
              Agent Assistant
            </span>
          </div>

          {/* Unread badge / Pulse */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dos-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-dos-cyan text-[9px] font-bold text-black items-center justify-center">
              1
            </span>
          </span>
        </button>
      )}

      {/* Expanded Chat Box */}
      {isOpen && (
        <div
          className="chatbot-container glass-card rounded-3xl w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] border border-dos-cyan/40 shadow-2xl flex flex-col overflow-hidden animate-slideUp backdrop-blur-xl"
          role="dialog"
          aria-label="DOS3.AI Agent Chat"
        >
          {/* Header */}
          <div className="chatbot-header px-4 py-3.5 bg-dos-surface/90 border-b border-dos-border/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-dos-cyan to-dos-azure flex items-center justify-center text-black font-bold">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-dos-void absolute -bottom-0.5 -right-0.5 animate-pulse" />
              </div>
              <div>
                <h3 className="chatbot-title text-sm font-bold font-heading text-dos-cloud flex items-center gap-1.5">
                  <span>DOS3 Agentic AI</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-dos-cyan/20 text-dos-cyan border border-dos-cyan/30">
                    LIVE
                  </span>
                </h3>
                <span className="text-[10px] text-dos-mist/70 font-mono">
                  Dallas HPC Node • Latency 4ms
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setMessages([initialBotMessage])}
                className="p-1.5 text-dos-mist/60 hover:text-white rounded-lg hover:bg-dos-surface transition-colors"
                title="Reset Conversation"
                aria-label="Reset chat"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-dos-mist hover:text-white rounded-lg hover:bg-dos-surface transition-colors"
                title="Minimize Chat"
                aria-label="Minimize chat"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="chatbot-messages-body flex-1 p-4 overflow-y-auto space-y-3.5 text-xs font-sans">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="chatbot-bot-avatar w-7 h-7 rounded-lg bg-dos-surface border border-dos-cyan/30 flex items-center justify-center shrink-0 text-dos-cyan">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`chatbot-msg-bubble max-w-[80%] rounded-2xl p-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'chatbot-msg-user bg-dos-azure text-white rounded-tr-none'
                      : 'chatbot-msg-bot bg-dos-surface/90 text-dos-mist border border-dos-border/60 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  
                  {msg.action && (
                    <div className="mt-2.5 pt-2 border-t border-dos-border/40">
                      {msg.action.download ? (
                        <a
                          href={msg.action.href}
                          download="DOS3AI_Architecture_Manual.pdf"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dos-cyan text-black font-semibold text-[11px] shadow-sm hover:opacity-90 transition-all"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>{msg.action.label}</span>
                        </a>
                      ) : msg.action.href?.startsWith('http') ? (
                        <a
                          href={msg.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dos-cyan text-black font-semibold text-[11px] shadow-sm hover:opacity-90 transition-all"
                        >
                          <span>{msg.action.label}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <a
                          href={msg.action.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dos-cyan text-black font-semibold text-[11px] shadow-sm hover:opacity-90 transition-all"
                        >
                          <span>{msg.action.label}</span>
                          <Sparkles className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}

                  <span className="block text-[9px] font-mono text-dos-mist/50 mt-1 text-right">
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-dos-surface border border-dos-border flex items-center justify-center shrink-0 text-white">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-dos-mist/70 text-xs">
                <div className="w-6 h-6 rounded-lg bg-dos-surface flex items-center justify-center text-dos-cyan">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-2 rounded-xl bg-dos-surface border border-dos-border/40 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-dos-cyan animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-dos-azure animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-dos-violet animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="chatbot-chips-bar px-3 py-2 bg-dos-void/60 border-t border-dos-border/40 overflow-x-auto no-scrollbar flex gap-1.5">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(prompt)}
                className="chatbot-chip-btn whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-mono bg-dos-surface border border-dos-border/70 text-dos-mist hover:text-white hover:border-dos-cyan/50 hover:bg-dos-surfaceHover transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="chatbot-footer-bar p-3 bg-dos-surface border-t border-dos-border/60 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about DOS3.AI..."
              className="chatbot-input flex-1 px-3 py-2 rounded-xl bg-dos-void border border-dos-border/70 text-xs text-white placeholder:text-dos-mist/50 focus:outline-none focus:ring-1 focus:ring-dos-cyan"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-dos-cyan text-black hover:opacity-90 disabled:opacity-40 transition-opacity"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
