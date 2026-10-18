import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import trainers from '../data/trainers.json';
export default function TrainerCatalog() {
  const en=useDocusaurusContext().i18n.currentLocale==='en';
  const [query,setQuery]=useState(''), [group,setGroup]=useState('all');
  const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const filtered=trainers.filter(c=>(group==='all'||c.category===group)&&normalize([c.name,c.category,c.categoryEn,...c.team].join(' ')).includes(normalize(query)));
  return <div><div className="catalog-controls"><label className="search-field"><span>⌕</span><input type="search" aria-label={en?'Search trainers or Pokémon':'Buscar treinador ou Pokémon'} placeholder={en?'Trainer, Pokémon, category…':'Treinador, Pokémon, categoria…'} value={query} onChange={e=>setQuery(e.target.value)}/></label><select aria-label={en?'Category':'Categoria'} value={group} onChange={e=>setGroup(e.target.value)}><option value="all">{en?'All categories':'Todas as categorias'}</option>{[...new Set(trainers.map(c=>c.category))].map(g=><option key={g} value={g}>{en?trainers.find(c=>c.category===g).categoryEn:g}</option>)}</select></div><p aria-live="polite" className="catalog-count">{filtered.length} {en?'encounters found':'encontros encontrados'}</p><div className="trainer-grid">{filtered.map(c=><Link className="trainer-card" to={c.url} key={c.id}><span className="trainer-order">{c.order?String(c.order).padStart(2,'0'):'EXTRA'}</span><small>{en?c.categoryEn:c.category} · Lv. {c.level}</small><h3>{c.name}</h3><div className="mini-party">{c.team.slice(0,4).map(s=><img key={s} loading="lazy" src={'/img/models/'+s+'.webp'} alt={s}/>)}</div><span>{en?'Team and strategy':'Equipe e estratégia'} ↗</span></Link>)}</div>{!filtered.length&&<p>{en?'No matches. Try another Pokémon or category.':'Nenhum encontro. Tente outro Pokémon ou categoria.'}</p>}</div>;
}
