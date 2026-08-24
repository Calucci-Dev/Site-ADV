import React from 'react';
import { ArrowRight, ShieldCheck, Users, Lock, ChevronRight, Award } from 'lucide-react';
import { siteConfig } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';

interface HeroProps {
  onOpenConsultationModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#070D1E] via-[#0B132B] to-[#0F1C38]"
    >
      {/* Background Decorative Gradients & Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C5A880]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#152238]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Thin architectural guideline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-[#20304C]/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Points */}
          <div className="lg:col-span-7 space-y-8 z-10">
            
            {/* Eyebrow with gold dash */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#C5A880]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
                Consultoria Jurídica de Excelência
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.08]">
                Clareza em causas <span className="italic text-[#E7DAC2] font-normal">complexas</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
                {siteConfig.subTagline}
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                id="hero-primary-cta-button"
                onClick={() => openWhatsApp('Olá! Gostaria de agendar uma consulta jurídica com o escritório Almeida & Rocha Advocacia.')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-sm bg-[#C5A880] text-[#0B132B] font-semibold text-xs uppercase tracking-widest hover:bg-[#B39265] transition-all duration-200 shadow-md shadow-[#C5A880]/15 hover:shadow-lg hover:shadow-[#C5A880]/25 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:ring-offset-2 focus:ring-offset-[#0B132B]"
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="w-4 h-4 text-[#0B132B]" />
              </button>

              <button
                type="button"
                id="hero-secondary-cta-button"
                onClick={() => scrollToSection('#areas-atuacao')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm bg-transparent border border-[#3A4D6B] text-slate-200 font-semibold text-xs uppercase tracking-widest hover:bg-[#152238] hover:border-[#C5A880] hover:text-white transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
              >
                <span>Conhecer Áreas</span>
                <ChevronRight className="w-4 h-4 text-[#C5A880]" />
              </button>
            </div>

            {/* 3 Pillar Badges (Matches reference image) */}
            <div className="pt-6 border-t border-[#20304C]/80 grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-sm bg-[#152238] border border-[#20304C] flex items-center justify-center text-[#C5A880] group-hover:border-[#C5A880]/60 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-[#C5A880]" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide uppercase">Soluções</h4>
                  <p className="text-[11px] text-slate-400">Estratégicas</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-sm bg-[#152238] border border-[#20304C] flex items-center justify-center text-[#C5A880] group-hover:border-[#C5A880]/60 transition-colors">
                  <Users className="w-5 h-5 text-[#C5A880]" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide uppercase">Advogados</h4>
                  <p className="text-[11px] text-slate-400">Especialistas</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-sm bg-[#152238] border border-[#20304C] flex items-center justify-center text-[#C5A880] group-hover:border-[#C5A880]/60 transition-colors">
                  <Lock className="w-5 h-5 text-[#C5A880]" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide uppercase">Sigilo</h4>
                  <p className="text-[11px] text-slate-400">& Confiança</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Hero Visual with Office Frame & Framed Quote */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative border frame */}
              <div className="relative rounded-sm overflow-hidden border-2 border-[#3A4D6B]/60 shadow-2xl bg-[#152238] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] object-cover group">
                <img
                  src={siteConfig.images.heroOffice}
                  alt="Escritório Almeida & Rocha Advocacia"
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-[#0B132B]/30 pointer-events-none" />

                {/* Framed Quote Box (Like in reference) */}
                <div className="absolute top-6 right-6 max-w-[210px] bg-[#0B132B]/90 backdrop-blur-md border border-[#C5A880]/70 p-4 shadow-xl rounded-sm">
                  <div className="flex items-center gap-2 mb-2 text-[#C5A880]">
                    <Award className="w-3.5 h-3.5" />
                    <span className="text-[9px] uppercase tracking-widest font-semibold">Excelência</span>
                  </div>
                  <p className="text-xs font-serif italic text-white leading-snug">
                    "{siteConfig.images.heroQuoteText}"
                  </p>
                </div>

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0B132B]/95 backdrop-blur-md border border-[#20304C] rounded-sm flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <p className="text-white font-medium text-[11px] tracking-wide">Sede Corporativa</p>
                    <p className="text-[#C5A880] text-[10px]">{siteConfig.addressShort}</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    ONLINE
                  </span>
                </div>

              </div>

              {/* Decorative subtle backdrop glowing element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C5A880]/20 rounded-sm -z-10 hidden sm:block pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
