import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { siteConfig, LegalArticle } from '../config/site';

interface LegalContentProps {
  onSelectArticle: (article: LegalArticle) => void;
}

export const LegalContent: React.FC<LegalContentProps> = ({ onSelectArticle }) => {
  return (
    <section id="conteudo-juridico" className="py-24 bg-[#FBF9F5] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#C5A880]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#9E7A4A] uppercase">
                Artigos & Insights Jurídicos
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B132B] tracking-tight leading-tight">
              Análises estratégicas sobre o <br className="hidden sm:inline" />
              <span className="text-[#9E7A4A] font-normal italic">cenário normativo e corporativo</span>
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 max-w-xs">
            Produção técnica contínua elaborada pelos sócios e especialistas da nossa banca.
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.articles.map((article) => (
            <article
              key={article.id}
              id={`article-card-${article.id}`}
              className="bg-white rounded-sm border border-[#E8DFD5] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#C5A880] transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#0B132B]/90 backdrop-blur-sm text-white text-[10px] uppercase font-semibold tracking-wider rounded-xs border border-[#C5A880]/40">
                    {article.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#9E7A4A]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#9E7A4A]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0B132B] group-hover:text-[#9E7A4A] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Article Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[11px] text-slate-500">
                  <span className="font-medium text-slate-800">{article.author}</span>
                </div>

                <button
                  type="button"
                  id={`btn-read-article-${article.id}`}
                  onClick={() => onSelectArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9E7A4A] group-hover:text-[#0B132B] transition-colors cursor-pointer focus:outline-none"
                >
                  <span>Ler Artigo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
