import React, { useEffect } from 'react';
import { X, CheckCircle2, Phone, Mail, Linkedin, GraduationCap, Scale, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig, PracticeArea, Attorney, LegalArticle } from '../config/site';
import { openWhatsApp } from '../utils/whatsapp';

// Hook para fechar com Escape e travar scroll do body
function useModalLock(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
}

// 1. Modal de Detalhes da Área de Atuação
interface PracticeAreaModalProps {
  area: PracticeArea | null;
  onClose: () => void;
  onSelectForConsultation?: (areaName: string) => void;
}

export const PracticeAreaModal: React.FC<PracticeAreaModalProps> = ({ area, onClose, onSelectForConsultation }) => {
  useModalLock(!!area, onClose);
  if (!area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0B132B] border border-[#C5A880]/50 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-white relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-sm bg-[#152238] border border-[#20304C] transition-colors cursor-pointer"
          aria-label="Fechar detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="space-y-2 pr-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Área de Prática
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              {area.title}
            </h3>
          </div>

          <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
            <p>{area.fullDescription}</p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#20304C]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E7DAC2]">
              Escopo e Serviços Principais:
            </h4>
            <div className="space-y-2.5">
              {area.keyServices.map((srv, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#20304C] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Precisa de parecer ou atuação em <span className="text-white font-medium">{area.title}</span>?
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                openWhatsApp(`Olá! Gostaria de agendar uma consulta sobre a área de ${area.title} com a Almeida & Rocha Advocacia.`);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-sm bg-[#C5A880] text-[#0B132B] text-xs font-semibold uppercase tracking-widest hover:bg-[#B39265] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Agendar Consulta Nesta Área</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Modal de Perfil do Advogado
interface AttorneyModalProps {
  attorney: Attorney | null;
  onClose: () => void;
  onDirectContact?: (attorneyName: string) => void;
}

export const AttorneyModal: React.FC<AttorneyModalProps> = ({ attorney, onClose, onDirectContact }) => {
  useModalLock(!!attorney, onClose);
  if (!attorney) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0B132B] border border-[#C5A880]/50 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-white relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-sm bg-[#152238] border border-[#20304C] transition-colors cursor-pointer"
          aria-label="Fechar perfil"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-[#20304C]">
            <div className="w-28 h-36 rounded-sm overflow-hidden border border-[#C5A880]/40 shrink-0 bg-[#152238]">
              <img
                src={attorney.image}
                alt={attorney.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] px-2 py-0.5 rounded-xs bg-[#152238] border border-[#C5A880]/30 inline-block">
                {attorney.oab}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {attorney.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                {attorney.role} • {attorney.specialty}
              </p>
              <p className="text-xs font-mono text-slate-400 pt-1">
                {attorney.email}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E7DAC2]">
              Trajetória Profissional:
            </h4>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              {attorney.bio}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E7DAC2] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#C5A880]" />
              <span>Formação Acadêmica & Credenciais:</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              {attorney.education.map((edu, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-[#20304C] flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={attorney.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-[#C5A880] flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>Ver no LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                openWhatsApp(`Olá! Gostaria de agendar uma consulta jurídica diretamente com ${attorney.name} da Almeida & Rocha Advocacia.`);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-sm bg-[#C5A880] text-[#0B132B] text-xs font-semibold uppercase tracking-widest hover:bg-[#B39265] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar com {attorney.name.split(' ')[0]} {attorney.name.split(' ')[1]}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Modal de Leitura de Artigo Completo
interface ArticleModalProps {
  article: LegalArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useModalLock(!!article, onClose);
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0B132B] border border-[#C5A880]/50 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-white relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-sm bg-[#152238] border border-[#20304C] transition-colors cursor-pointer"
          aria-label="Fechar artigo"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="space-y-2 pr-8">
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C5A880] px-2.5 py-1 bg-[#152238] border border-[#C5A880]/30 rounded-xs inline-block">
              {article.category}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              {article.title}
            </h3>
            <p className="text-xs text-slate-400">
              Por <strong className="text-slate-200">{article.author}</strong> ({article.authorRole}) • {article.date} • {article.readTime}
            </p>
          </div>

          <div className="rounded-sm overflow-hidden border border-[#20304C] aspect-[16/9] bg-[#152238]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="p-4 rounded-sm bg-[#152238] border border-[#20304C] text-xs text-slate-400 italic">
            Aviso: Este artigo possui caráter estritamente informativo e não substitui a consulta formal a um advogado para a análise de casos concretos.
          </div>

          <div className="pt-4 border-t border-[#20304C] flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-sm bg-[#C5A880] text-[#0B132B] text-xs font-semibold uppercase tracking-widest hover:bg-[#B39265] transition-colors cursor-pointer"
            >
              Fechar Artigo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Modal de Política de Privacidade e LGPD
interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useModalLock(isOpen, onClose);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0B132B] border border-[#C5A880]/50 rounded-sm max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-white relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-sm bg-[#152238] border border-[#20304C] transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="space-y-1 pr-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
              Conformidade & LGPD
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Política de Privacidade & Sigilo Profissional
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            <p>
              O escritório <strong>{siteConfig.firmName} {siteConfig.firmNameSuffix}</strong> ({siteConfig.oabRegistration}) valoriza a privacidade e o sigilo das informações compartilhadas por clientes e potenciais clientes.
            </p>
            
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider pt-2">1. Coleta e Finalidade dos Dados</h4>
            <p>
              Os dados fornecidos através dos formulários de contato (nome, telefone, e-mail e descrição sumária de demandas) são coletados exclusivamente para fins de retorno e triagem jurídica preliminar.
            </p>

            <h4 className="font-semibold text-white uppercase text-xs tracking-wider pt-2">2. Sigilo Profissional e Segurança</h4>
            <p>
              Todas as comunicações estão resguardadas pelo sigilo profissional inerente à advocacia, nos termos da Lei Federal nº 8.906/1994 (Estatuto da OAB) e da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </p>

            <h4 className="font-semibold text-white uppercase text-xs tracking-wider pt-2">3. Não Compartilhamento</h4>
            <p>
              Não compartilhamos, vendemos ou transferimos quaisquer dados de contato para terceiros ou parceiros comerciais sem autorização prévia e expressa.
            </p>
          </div>

          <div className="pt-4 border-t border-[#20304C] flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-sm bg-[#C5A880] text-[#0B132B] text-xs font-semibold uppercase tracking-widest hover:bg-[#B39265] transition-colors cursor-pointer"
            >
              Compreendi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

