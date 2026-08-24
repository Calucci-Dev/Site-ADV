import React, { useState } from 'react';
import { Building2, FileText, Scale, Shield, Briefcase, Globe, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { siteConfig, PracticeArea } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';

interface PracticeAreasProps {
  onSelectArea: (area: PracticeArea) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectArea }) => {
  const [showAll, setShowAll] = useState(false);

  // Dynamic Lucide icon resolver
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#C5A880]" strokeWidth={1.8} />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#C5A880]" strokeWidth={1.8} />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#C5A880]" strokeWidth={1.8} />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#C5A880]" strokeWidth={1.8} />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#C5A880]" strokeWidth={1.8} />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#C5A880]" strokeWidth={1.8} />;
      default:
        return <Scale className="w-5 h-5 text-[#C5A880]" strokeWidth={1.8} />;
    }
  };

  const displayedAreas = showAll ? siteConfig.practiceAreas : siteConfig.practiceAreas.slice(0, 6);

  return (
    <section id="areas-atuacao" className="py-24 bg-[#FBF9F5] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#C5A880]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#9E7A4A] uppercase">
                Áreas de Atuação
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B132B] tracking-tight leading-tight">
              Soluções jurídicas abrangentes <br className="hidden sm:inline" />
              <span className="text-[#9E7A4A] font-normal italic">sob medida para o seu negócio</span>
            </h2>
          </div>

          <div>
            <button
              type="button"
              id="practice-areas-toggle-view"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-[#C5A880] text-xs font-semibold uppercase tracking-widest text-[#0B132B] hover:bg-[#C5A880] hover:text-[#0B132B] transition-all duration-200 cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
            >
              <span>{showAll ? 'Mostrar Menos' : 'Ver Todas as Áreas'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedAreas.map((area) => (
            <div
              key={area.id}
              id={`practice-card-${area.id}`}
              className="bg-white rounded-sm border border-[#E8DFD5] p-7 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#C5A880]/80 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Card Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#0B132B] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {getIcon(area.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                    Especialidade
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B132B] mb-3 group-hover:text-[#9E7A4A] transition-colors leading-snug">
                  {area.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light">
                  {area.shortDescription}
                </p>

                {/* Key services pill preview */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                  {area.keyServices.slice(0, 2).map((srv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <button
                type="button"
                id={`btn-learn-more-${area.id}`}
                onClick={() => onSelectArea(area)}
                className="pt-2 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#0B132B] group-hover:text-[#9E7A4A] transition-colors cursor-pointer focus:outline-none"
              >
                <span>Saiba Mais Detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C5A880]" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom advisory banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-[#152238] border border-[#20304C] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#C5A880]/15 border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                Sua demanda possui particularidades multidisciplinares?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Estruturamos bancadas consultivas sob medida unindo advogados de diversas frentes para casos complexos.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openWhatsApp('Olá! Gostaria de uma consultoria jurídica multidisciplinar para minha empresa.')}
            className="shrink-0 px-6 py-3 rounded-sm bg-[#C5A880] text-[#0B132B] text-xs font-semibold uppercase tracking-widest hover:bg-[#B39265] transition-colors cursor-pointer"
          >
            Falar com a Banca
          </button>
        </div>

      </div>
    </section>
  );
};

