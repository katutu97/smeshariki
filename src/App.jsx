import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PageFrame from './PageFrame'

const pages = ['glavnay','Projekt','Fan','Krosh','Esh','Nush','Bar','Pin','Los','Owl','Kar','Kop','Test']

export default function App(){
  return (
    <div style={{height:'100vh', display:'flex', flexDirection:'column'}}>
      <header style={{background:'#222', color:'#fff', padding:'10px 16px'}}>
        <nav style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          {pages.map(p=> (
            <Link key={p} to={`/${p}`} style={{color:'#fff',textDecoration:'none'}}>{p}</Link>
          ))}
        </nav>
      </header>
      <main style={{flex:1}}>
        <Routes>
          <Route path="/" element={<PageFrame page="/pages/glavnay.html"/>} />
          {pages.map(p=> (
            <Route key={p} path={`/${p}`} element={<PageFrame page={`/pages/${p}.html`} />} />
          ))}
        </Routes>
      </main>
    </div>
  )
}
