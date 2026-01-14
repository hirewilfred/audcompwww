
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import SEO from '../components/SEO';

const AIConfigurator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState('');
  const [size, setSize] = useState('');
  const [painPoint, setPainPoint] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAssessment = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Assess AI readiness and suggest 3 high-impact AI use cases for a company in the ${industry} industry with ${size} employees, facing ${painPoint} as their primary challenge.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              readinessScore: { type: Type.NUMBER, description: "Scale 1-100" },
              analysis: { type: Type.STRING },
              useCases: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    impact: { type: Type.STRING },
                    difficulty: { type: Type.STRING }
                  },
                  required: ["title", "impact", "difficulty"]
                }
              }
            },
            required: ["readinessScore", "analysis", "useCases"]
          }
        }
      });

      const data = JSON.parse(response.text);
      setResult(data);
      setStep(4);
    } catch (error) {
      console.error(error);
      alert("Consultation analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen indigo-gradient selection:bg-blue-500/30 overflow-x-hidden pt-32 pb-24">
      <SEO 
        title="AI Readiness Assessment" 
        description="Evaluate your organization's AI maturity and discover custom machine learning use cases."
      />
      
      {/* Background Accents */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 glow-sphere blur-[100px] bg-blue-600/10"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#5c7cff] text-white">AI</span>
            <span className="text-xs font-medium text-slate-400 tracking-tight">Strategy Builder</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gradient mb-6">AI Readiness <span className="italic">Portal.</span></h1>
          <p className="text-slate-400 text-lg">Phase {step} of 3 • Response time: ~10s</p>
        </div>

        <div className="glass-panel rounded-[3rem] border-white/10 overflow-hidden backdrop-blur-2xl">
          <div className="p-8 lg:p-12">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold mb-8 text-white">What industry is your business in?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Manufacturing', 'Education', 'Finance', 'Healthcare', 'Legal', 'Retail'].map(i => (
                    <button 
                      key={i}
                      onClick={() => { setIndustry(i); setStep(2); }}
                      className="p-6 glass-panel rounded-2xl border-white/5 hover:border-aud-blue hover:bg-white/5 transition-all text-left font-bold text-slate-300"
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button onClick={() => setStep(1)} className="text-slate-500 hover:text-white mb-6 text-sm font-bold flex items-center gap-2">
                  <i className="fas fa-arrow-left text-xs"></i> BACK
                </button>
                <h3 className="text-2xl font-bold mb-8 text-white">How many employees are in your organization?</h3>
                <div className="grid grid-cols-1 gap-4">
                  {['1-50 (Small Business)', '51-250 (Mid-Market)', '251-1000 (Enterprise)', '1000+ (Large Enterprise)'].map(s => (
                    <button 
                      key={s}
                      onClick={() => { setSize(s); setStep(3); }}
                      className="p-6 glass-panel rounded-2xl border-white/5 hover:border-aud-blue hover:bg-white/5 transition-all text-left font-bold text-slate-300"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button onClick={() => setStep(2)} className="text-slate-500 hover:text-white mb-6 text-sm font-bold flex items-center gap-2">
                  <i className="fas fa-arrow-left text-xs"></i> BACK
                </button>
                <h3 className="text-2xl font-bold mb-8 text-white">What is your biggest operational bottleneck?</h3>
                <textarea 
                  className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl mb-8 focus:border-aud-blue outline-none transition-all text-white placeholder-slate-600"
                  rows={4}
                  placeholder="e.g., Manual data entry, slow customer response, inventory errors..."
                  value={painPoint}
                  onChange={(e) => setPainPoint(e.target.value)}
                ></textarea>
                <button 
                  disabled={!painPoint || loading}
                  onClick={handleAssessment}
                  className="w-full bg-white text-[#0d0e25] py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-slate-100 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
                >
                  {loading ? <><i className="fas fa-circle-notch animate-spin text-aud-blue"></i> ANALYZING ARCHITECTURE...</> : 'GENERATE AI STRATEGY'}
                </button>
              </div>
            )}

            {step === 4 && result && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full border-4 border-aud-blue flex items-center justify-center text-4xl font-black text-white bg-blue-500/10 shadow-[0_0_40px_rgba(92,124,255,0.2)]">
                      {result.readinessScore}%
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white mb-2">Readiness Score</h3>
                    <p className="text-slate-500">Based on industry benchmarks for {industry}</p>
                  </div>
                </div>

                <div className="glass-panel p-8 rounded-[2rem] border-white/5 mb-10">
                  <h4 className="font-bold text-aud-blue mb-4 uppercase text-xs tracking-widest">Expert Analysis</h4>
                  <p className="text-slate-300 leading-relaxed">{result.analysis}</p>
                </div>

                <h4 className="font-bold text-lg mb-6 text-white">Recommended Use Cases</h4>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {result.useCases.map((uc: any, idx: number) => (
                    <div key={idx} className="p-6 glass-panel border-white/5 rounded-2xl">
                      <h5 className="font-bold text-white mb-2 text-sm">{uc.title}</h5>
                      <p className="text-xs text-slate-500 mb-6 leading-relaxed">{uc.impact}</p>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 rounded text-slate-400">
                        {uc.difficulty}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-8 border-t border-white/5">
                  <p className="text-slate-500 mb-8">Ready for a deeper dive into these technical requirements?</p>
                  <button className="bg-[#5c7cff] text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:bg-blue-600 transition-all">
                    Book Implementation Call
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConfigurator;
