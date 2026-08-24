import React from 'react';
import { Trophy, Users, Award, Globe2, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Statistics: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-[#9E7A4A]" strokeWidth={1.8} />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#9E7A4A]" strokeWidth={1.8} />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#9E7A4A]" strokeWidth={1.8} />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-[#9E7A4A]" strokeWidth={1.8} />;
      default:
        return <CheckCircle className="w-6 h-6 text-[#9E7A4A]" strokeWidth={1.8} />;
    }
  };

  return (
    <section id="estatisticas" className="py-20 bg-[#FBF9F5] border-y border-[#E8DFD5] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Title Area */}
          <div className="lg:col-span-4 space-y-3">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#C5A880]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#9E7A4A] uppercase">
                Resultados Comprovados
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B132B] tracking-tight leading-tight">
              Histórico de excelência que fala por si
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Métricas consolidadas ao longo de mais de duas décadas de prática jurídica focada no rigor técnico e proteção patrimonial.
            </p>
          </div>

          {/* Right Metrics Grid (4 blocks with divider lines) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DFD5]">
              {siteConfig.statistics.map((stat, idx) => (
                <div
                  key={stat.id}
                  id={`stat-block-${stat.id}`}
                  className={`pt-6 sm:pt-0 ${idx !== 0 ? 'sm:pl-6' : ''} space-y-2 group`}
                >
                  <div className="mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#EADBCE]/50 flex items-center justify-center group-hover:bg-[#C5A880]/20 transition-colors">
                      {getIcon(stat.iconName)}
                    </div>
                  </div>

                  <div className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0B132B] tracking-tight">
                    {stat.value}
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                    {stat.label}
                  </div>

                  <p className="text-[11px] text-slate-500 font-light leading-snug line-clamp-2">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
