import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import trainers from '../data/trainers.json';

export default function WikiHome() {
  const {i18n} = useDocusaurusContext();
  const en = i18n.currentLocale === 'en';
  const t = (pt, eng) => en ? eng : pt;
  return <div className="wiki-home">
    <div className="home-kicker"><span className="status-dot" /> {t('O GUIA DA SUA PRÓXIMA AVENTURA', 'YOUR NEXT ADVENTURE STARTS HERE')} <span className="version-pill">2.0</span></div>
    <section className="wiki-hero">
      <div className="hero-copy"><p className="eyebrow">COBBLEMON × TOCA DA CORUJA</p>
        <h1>{t('Sua dupla.', 'Your duo.')}<br/>{t('Sua estratégia.', 'Your strategy.')}<br/><em>{t('Seu corujão.', 'Your adventure.')}</em></h1>
        <p>{t('Do primeiro rival ao título de campeão. Conheça os treinadores, monte seu time e encontre seu caminho pela Toca.', 'From your first rival to the champion title. Meet the trainers, build your team and find your way through the Nest.')}</p>
        <div className="hero-actions"><Link className="wiki-button primary" to="/campaign/progression">{t('Começar a jornada', 'Start your journey')} <span>↗</span></Link><Link className="wiki-button" to="/trainers/">{t('Ver treinadores', 'Meet the trainers')} →</Link></div>
      </div>
      <div className="hero-art" aria-label={t('Pokémon da equipe do Campeão Motta', 'Pokémon from Champion Motta’s team')}>
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="arena-center"/>
        <span className="arena-label">THE OWL’S NEST <b>⚔</b> DOUBLES CAMPAIGN</span>
        <img className="hero-mon hero-mon-back" src="/img/models/tyranitar.webp" alt="Tyranitar" />
        <img className="hero-mon hero-mon-front" src="/img/models/garchomp.webp" alt="Garchomp" />
        <div className="battle-tag"><span className="status-dot"/> {t('Dois slots. Infinitas possibilidades.', 'Two slots. Endless possibilities.')}</div>
        <span className="coordinate">26 MAIN ENCOUNTERS / 01 EXTRA</span>
      </div>
    </section>
    <div className="wiki-stats">{[['27',t('treinadores com identidade','unique trainer encounters')],['15 → 85',t('níveis da jornada principal','main journey levels')],['2 × 2',t('batalhas do início ao fim','battles all the way')],['56',t('ações de abertura na 2.0','opening actions in 2.0')]].map(([n,l])=><div key={n}><strong>{n}</strong><span>{l}</span></div>)}</div>
    <section className="home-section"><div className="section-heading"><div><p className="eyebrow">{t('ESCOLHA SEU CAMINHO','CHOOSE YOUR PATH')}</p><h2>{t('Tudo para o próximo desafio.', 'Ready for your next challenge.')}</h2></div><span className="section-note">{t('Menos adivinhação. Mais estratégia.','Less guesswork. More strategy.')}</span></div>
      <div className="guide-grid">{[
        ['01','/campaign/full-progression',t('A jornada completa','The full journey'),t('26 encontros, oito líderes e o caminho até o Campeão Motta.','26 encounters, eight leaders and the path to Champion Motta.'),'↗'],
        ['02','/trainers/',t('Conheça seus rivais','Know your rivals'),t('Times, golpes, itens e a dupla que abre cada batalha.','Teams, moves, items and the leads for every battle.'),'↗'],
        ['03','/mechanics/battle-format',t('Pense em dupla','Think in doubles'),t('Entenda as aberturas, o clima e as mecânicas especiais.','Understand openings, weather and battle gimmicks.'),'↗']
      ].map(([n,url,title,desc,arrow])=><Link className="guide-card" key={n} to={url}><span className="guide-number">{n}</span><h3>{title}</h3><p>{desc}</p><span className="guide-arrow">{arrow}</span></Link>)}</div>
    </section>
    <section className="home-section"><div className="section-heading"><div><p className="eyebrow">{t('A TOCA TEM PERSONALIDADE','MEET THE COMMUNITY')}</p><h2>{t('Gente nossa. Batalhas memoráveis.','Familiar faces. Memorable battles.')}</h2></div><Link to="/trainers/">{t('Explorar os 27 encontros','Explore all 27 encounters')} →</Link></div>
      <div className="featured-trainers">{[trainers[1],trainers.find(x=>x.id==='tdc_campeao_motta'),trainers.find(x=>x.optional)].map(c=><Link className="featured-trainer" key={c.id} to={c.url}><div className="mini-party">{c.team.slice(0,3).map(s=><img key={s} loading="lazy" src={'/img/models/'+s+'.webp'} alt={s}/>)}</div><small>{en?c.categoryEn:c.category} · Lv. {c.level}</small><h3>{c.name}</h3><span>{c.optional?t('Desafio opcional','Optional challenge'):t('Ver o encontro','View encounter')} ↗</span></Link>)}</div>
    </section>
    <aside className="release-note"><span className="version-pill">2.0.0</span><div><strong>{t('Cada treinador com um plano. Cada encontro com uma voz.','Every trainer has a plan. Every encounter has a voice.')}</strong><p>{t('Aberturas programadas e diálogos personalizados. Conteúdo baseado na candidata 2.0; testes em jogo ainda pendentes.','Scripted openings and custom dialogue. Based on the 2.0 candidate; in-game validation is still pending.')}</p></div><Link to="/roadmap">{t('O que mudou','What changed')} ↗</Link></aside>
  </div>;
}
