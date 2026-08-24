import React from 'react';
import { UserCheck, Compass, Lock, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Differentials: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#C5A880]" strokeWidth={1.8} />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#C5A880]" strokeWidth={1.8} />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-[#C5A880]" strokeWidth={1.8} />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-[#C5A880]" strokeWidth={1.8} />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#C5A880]" strokeWidth={1.8} />;
    }
  };

  return (
    <section id="diferenciais" className="py-24 bg-[#070D1E] text-white relative border-t border-[#20304C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#C5A880]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
              Nossos Diferenciais
            </span>
            <span className="w-8 h-[1.5px] bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Por que líderes escolhem a <br />
            <span className="text-[#E7DAC2] font-normal italic">Almeida & Rocha Advocacia</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Uma abordagem que combina excelência técnica artesanal, tecnologia jurídica e dedicação irrestrita a cada caso.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.differentials.map((diff, index) => (
            <div
              key={diff.id}
              id={`differential-card-${diff.id}`}
              className="p-7 sm:p-8 rounded-sm bg-[#0B132B] border border-[#20304C] hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-sm bg-[#152238] border border-[#20304C] flex items-center justify-center group-hover:border-[#C5A880]/60 transition-colors">
                    {getIcon(diff.iconName)}
                  </div>
                  <span className="font-mono text-xs text-[#C5A880]/60 font-semibold">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#E7DAC2] transition-colors leading-snug">
                  {diff.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#20304C]/60 flex items-center gap-2 text-xs text-[#C5A880] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span className="tracking-wider uppercase text-[10px]">Padrão Institucional</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
