
import React, { useState, useRef } from 'react';
// Added missing AnimatePresence import from framer-motion
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Upload, Loader2, Sparkles, Image as ImageIcon, Download } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const RestorationLab: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!selectedImage || !prompt.trim()) return;

    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = selectedImage.split(',')[1];
      const mimeType = selectedImage.split(';')[0].split(':')[1];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType } },
            { text: `Modify this cultural image according to this instruction: ${prompt}. Maintain the Victorian and Sanskrit aesthetic of the Vikshu Foundation.` }
          ]
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setResultImage(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Image restoration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto pb-40">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-500 font-heading text-[10px] tracking-[0.5em] mb-4 block uppercase"
        >
          Cultural Alchemist
        </motion.span>
        <h1 className="text-5xl md:text-7xl font-serif-vintage italic mb-6">Restoration <span className="text-amber-600">Lab</span></h1>
        <p className="text-gray-400 italic max-w-xl mx-auto leading-relaxed">
          The alchemy of pixels and prayer. Upload a cultural artifact or memory and use prompts to restore its sacred essence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Input Section */}
        <div className="space-y-8">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="aspect-square glass rounded-[3rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-amber-600/50 transition-all overflow-hidden relative group"
          >
            {selectedImage ? (
              <>
                <img src={selectedImage} alt="Selected" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Change Image</span>
                </div>
              </>
            ) : (
              <>
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Upload className="text-amber-500" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Upload Sacred Artifact</p>
              </>
            )}
            <input type="file" ref={fileInputRef} onChange={handleFileChange} hidden accept="image/*" />
          </div>

          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Thy Instruction</label>
            <div className="relative">
              <input 
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. 'Add a retro Victorian filter' or 'Enhance the Vedic symbols'..."
                className="w-full glass rounded-2xl px-8 py-5 focus:outline-none border border-white/10 focus:border-amber-500/50 transition-all text-sm italic"
              />
              <button 
                onClick={handleEdit}
                disabled={loading || !selectedImage || !prompt}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center hover:bg-amber-500 transition-colors disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Wand2 size={20} />}
              </button>
            </div>
            <div className="flex gap-2">
              {["Vintage Filter", "Remove Background", "Add Glow", "Restore Detail"].map((suggestion) => (
                <button 
                  key={suggestion}
                  onClick={() => setPrompt(suggestion)}
                  className="px-4 py-2 glass rounded-full text-[9px] uppercase tracking-widest text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="flex flex-col">
          <div className="aspect-square glass rounded-[3rem] border border-white/5 flex flex-col items-center justify-center overflow-hidden relative group">
            <AnimatePresence mode="wait">
              {resultImage ? (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full h-full relative"
                >
                  <img src={resultImage} alt="Result" className="w-full h-full object-cover" />
                  <a 
                    href={resultImage} 
                    download="vikshu-restored.png"
                    className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                  >
                    <Download size={24} />
                  </a>
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 relative">
                    <Sparkles className="text-amber-900/40" size={48} />
                    {loading && (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-t-2 border-amber-500 rounded-full"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-serif-vintage italic text-gray-700">Awaiting Alchemical Process</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gray-800 mt-2 font-bold">The canvas remains pure</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-8 p-8 glass rounded-[2rem] border border-white/5 flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-amber-600/10 flex items-center justify-center text-amber-500 shrink-0">
              <ImageIcon size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-amber-500 mb-1">Restoration Log</p>
              <p className="text-xs text-gray-400 italic">Every restoration is tracked in the Seeker's Karma archives to preserve the lineage of truth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestorationLab;
