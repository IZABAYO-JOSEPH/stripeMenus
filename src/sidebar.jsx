import React from 'react'
import {FaTimes}  from "react-icons/fa"
import sublinks from "./data"
import { useGlobalContext } from './context'


const Sidebar = () => {
  const {IsSidebarOpen,closeSidebar} = useGlobalContext();
  return (
   <aside className={IsSidebarOpen?"sidebar show-sidebar":"sidebar"}>
    <div className="sidebar-container">
      <button className='close-btn' onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className="sidebar-links">
        {sublinks.map((item)=>{
    const{links,page,pageId} = item
    return <article key={pageId}>
     <h1>{page}</h1>
     <div className="sidebar-sublinks">
       {links.map((link)=>{
        const {url,icon,label,id} = link
        return(
          <a key={id} href={url}>
            {icon}
            {label}
          </a>
        )
       })}
     </div>
    </article>
        })}
      </div>
    </div>
   </aside>
  )
}

export default Sidebar