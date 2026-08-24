import React from 'react';
import { Shield, Target, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';

interface AboutProps {
  onOpenConsultationModal?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="sobre" className="py-24 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#152238]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual with stacked cards and real photo */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative">
              {/* Primary image */}
              <div className="relative rounded-sm overflow-hidden border-2 border-[#20304C] shadow-2xl bg-[#152238] aspect-[4/3] group">
                <img
                  src={siteConfig.images.aboutMeeting}
                  alt="Reunião de Sócios Almeida & Rocha Advocacia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating experience badge */}
              <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-8 p-5 bg-[#152238] border border-[#C5A880]/60 shadow-2xl rounded-sm max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C5A880]">22+</div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-200 leading-tight">
                    Anos de tradição e inovação jurídica
                  </div>
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div className="p-6 rounded-sm bg-[#070D1E] border border-[#20304C] space-y-3">
              <p className="font-serif italic text-base sm:text-lg text-[#E7DAC2] leading-relaxed">
                "Não entregamos apenas pareceres: participamos da construção de decisões que preservam o futuro de empresas e famílias."
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Banca Executiva</span>
                <span className="font-mono text-[#C5A880]">{siteConfig.oabRegistration}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-[#C5A880]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
                  Sobre Nossa Banca
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Tradição sólida unida à <br />
                <span className="text-[#E7DAC2] font-normal italic">inteligência jurídica contemporânea</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              <p>
                Fundado com a missão de oferecer uma advocacia artesanal, estratégica e de altíssima densidade técnica, o escritório <strong className="text-white font-medium">{siteConfig.firmName} {siteConfig.firmNameSuffix}</strong> consolidou-se como referência no atendimento a grupos empresariais, investidores e famílias no Centro-Oeste e em âmbito nacional.
              </p>
              <p>
                Nossa atuação transcende a esfera processual tradicional. Trabalhamos lado a lado com os tomadores de decisão, compreendendo os objetivos de negócio e desenhando estruturas jurídicas inteligentes que antecipam cenários e blindam resultados.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-sm bg-[#152238]/60 border border-[#20304C] flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Ética e Sigilo Absoluto</h4>
                  <p className="text-xs text-slate-400 font-light">Compromisso irrevogável com a confidencialidade e as melhores práticas de governança.</p>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#152238]/60 border border-[#20304C] flex items-start gap-3">
                <Target className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Precisão Técnica</h4>
                  <p className="text-xs text-slate-400 font-light">Análise minuciosa de cada detalhe documental e jurisprudencial relevante.</p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                type="button"
                id="btn-about-cta"
                onClick={() => openWhatsApp('Olá! Gostaria de conversar com os sócios da Almeida & Rocha Advocacia.')}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm bg-[#C5A880] text-[#0B132B] text-xs font-semibold uppercase tracking-widest hover:bg-[#B39265] transition-colors cursor-pointer"
              >
                <span>Conheça Nossa Estrutura</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

