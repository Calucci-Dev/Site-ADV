import React from 'react';
import { ArrowRight, Mail, Linkedin, GraduationCap, Award, ShieldCheck } from 'lucide-react';
import { siteConfig, Attorney } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';

interface AttorneysProps {
  onSelectAttorney: (attorney: Attorney) => void;
  onOpenConsultationModal?: () => void;
}

export const Attorneys: React.FC<AttorneysProps> = ({ onSelectAttorney, onOpenConsultationModal }) => {
  return (
    <section id="advogados" className="py-24 bg-[#070D1E] text-white relative overflow-hidden border-t border-[#20304C]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#152238]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#C5A880]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
                Corpo Jurídico
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Experientes. Confiáveis. <br className="hidden sm:inline" />
              <span className="text-[#E7DAC2] font-normal italic">Focados em resultados.</span>
            </h2>
          </div>

          <div>
            <button
              type="button"
              id="btn-attorneys-cta"
              onClick={() => openWhatsApp('Olá! Gostaria de agendar uma consulta jurídica com a equipe de advogados.')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-[#3A4D6B] text-xs font-semibold uppercase tracking-widest text-slate-200 hover:bg-[#152238] hover:border-[#C5A880] hover:text-white transition-all duration-200 cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
            >
              <span>Consultar Especialista</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>

        {/* Attorneys 4-Column Grid (Matches reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteConfig.attorneys.map((attorney) => (
            <div
              key={attorney.id}
              id={`attorney-card-${attorney.id}`}
              className="group bg-[#0B132B] border border-[#20304C] rounded-sm overflow-hidden hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/60"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#152238]">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80" />
                  
                  {/* OAB badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#0B132B]/90 backdrop-blur-sm border border-[#C5A880]/50 rounded-sm text-[10px] font-mono text-[#C5A880] font-medium tracking-wide">
                    {attorney.oab}
                  </div>
                </div>

                {/* Attorney Card Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#E7DAC2] transition-colors leading-tight">
                      {attorney.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#C5A880] font-medium">
                      {attorney.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed">
                    {attorney.specialty}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 sm:p-6 pt-0 border-t border-[#20304C]/50 flex items-center justify-between">
                <button
                  type="button"
                  id={`btn-view-profile-${attorney.id}`}
                  onClick={() => onSelectAttorney(attorney)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A880] group-hover:text-white transition-colors cursor-pointer focus:outline-none"
                >
                  <span>Ver Perfil</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 text-slate-400">
                  <a
                    href={attorney.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C5A880] transition-colors p-1"
                    title={`LinkedIn de ${attorney.name}`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${attorney.email}`}
                    className="hover:text-[#C5A880] transition-colors p-1"
                    title={`Enviar e-mail para ${attorney.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
