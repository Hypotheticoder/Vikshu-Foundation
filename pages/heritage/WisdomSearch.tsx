
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Link as LinkIcon, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const WisdomSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ text: string, sources: any[] } | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: query,
        config: {
          tools: [{ googleSearch: {} }],
          systemInstruction: "You are an expert in cultural heritage, Sanskrit philosophy, and Victorian history. Provide insightful, accurate answers grounded in modern search results. Use a refined, elegant tone."
        },
      });

      setResult({
        text: response.text || "The archives are silent on this matter.",
        sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
      });
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 px-6 max-w-4xl mx-auto pb-40">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-500 font-heading text-[10px] tracking-[0.5em] mb-4 block uppercase"
        >
          Archives of the Universe
        </motion.span>
        <h1 className="text-5xl md:text-7xl font-serif-vintage italic mb-6">Wisdom <span className="text-amber-600">Search</span></h1>
        <p className="text-gray-400 italic max-w-xl mx-auto">
          Query the collective conscience of humanity. Grounded in global search, refined by Vikshu wisdom.
        </p>
      </div>

      <div className="relative mb-20">
        <form onSubmit={handleSearch} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative flex glass rounded-[2rem] overflow-hidden border border-white/10">
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Current state of Sanskrit preservation in Varanasi..."
              className="flex-grow bg-transparent px-8 py-6 focus:outline-none text-lg italic placeholder:text-gray-600"
            />
            <button 
              disabled={loading}
              className="bg-amber-600 px-10 flex items-center justify-center text-white hover:bg-amber-500 transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Search />}
            </button>
          </div>
        </form>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="glass p-10 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Sparkles size={100} />
              </div>
              <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-p:italic prose-p:leading-relaxed prose-headings:font-serif-vintage">
                <p className="text-xl md:text-2xl whitespace-pre-wrap leading-relaxed">
                  {result.text}
                </p>
              </div>
            </div>

            {result.sources.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.sources.map((chunk, idx) => (
                  chunk.web && (
                    <a 
                      key={idx} 
                      href={chunk.web.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass p-6 rounded-2xl border border-white/5 hover:border-amber-600/30 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500">
                          <Globe size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold tracking-widest text-amber-500 uppercase">Verification Source</p>
                          <p className="text-xs text-gray-400 italic line-clamp-1">{chunk.web.title || 'View Source'}</p>
                        </div>
                      </div>
                      <LinkIcon size={16} className="text-gray-600 group-hover:text-amber-500" />
                    </a>
                  )
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WisdomSearch;
