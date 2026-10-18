import React,{useState,useEffect,useRef} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import trainers from '../data/trainers.json';
export default function Root({children}) {
 const en=useDocusaurusContext().i18n.currentLocale==='en';
 const [open,setOpen]=useState(false),[query,setQuery]=useState('');
 const dialog=useRef(null),trigger=useRef(null);
 useEffect(()=>{const key=e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setOpen(v=>!v);}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);},[]);
 useEffect(()=>{if(open)dialog.current?.showModal();else if(dialog.current?.open){dialog.current.close();trigger.current?.focus();}},[open]);
 const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const pages=[{name:en?'Installation and requirements':'Instalação e requisitos',url:'/download'},{name:en?'Full progression':'Progressão completa',url:'/campaign/full-progression'},{name:en?'Battle mechanics':'Mecânicas de batalha',url:'/mechanics/battle-format'},{name:en?'Trainer items':'Itens dos treinadores',url:'/mechanics/items'},{name:en?'What changed in 2.0':'Novidades da 2.0',url:'/roadmap'},...trainers];
 const results=pages.filter(p=>norm([p.name,...(p.team||[])].join(' ')).includes(norm(query))).slice(0,12);
 return <>{children}<button ref={trigger} className="global-search" onClick={()=>setOpen(true)} aria-label={en?'Search wiki':'Buscar na wiki'}>⌕ <span>{en?'Search wiki':'Buscar na wiki'}</span><kbd>Ctrl K</kbd></button><dialog ref={dialog} className="search-dialog" onKeyDownCapture={e=>{if(e.key==='Escape'){e.preventDefault();setOpen(false);}}} onCancel={()=>setOpen(false)} onClick={e=>{if(e.target===dialog.current)setOpen(false);}}><div className="search-dialog-head"><label><span className="sr-only">{en?'Search':'Buscar'}</span><input autoFocus type="search" placeholder={en?'Trainer, Pokémon or guide…':'Treinador, Pokémon ou guia…'} value={query} onChange={e=>setQuery(e.target.value)}/></label><button aria-label={en?'Close search':'Fechar busca'} onClick={()=>setOpen(false)}>✕</button></div><p className="search-hint">{en?'Search trainers, team species and guide titles':'Busque treinadores, espécies dos times e títulos dos guias'}</p><div className="search-results">{results.map(p=><Link to={p.url} key={p.url} onClick={()=>{setOpen(false);setQuery('');}}>{p.name}<span>↗</span></Link>)}{!results.length&&<p>{en?'No results found.':'Nenhum resultado encontrado.'}</p>}</div></dialog></>;
}
