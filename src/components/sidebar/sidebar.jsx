import React, { useContext, useState } from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'
const Sidebar = () => {

  const [extended,setExtended] = useState(false)
  const {onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context)

  const responseLoad = async(prompt)=>{
      setRecentPrompt(prompt);
      await onSent(prompt);
 }
  return (
    <div className='sidebar'>
    <div className='top'>
        <img onClick={()=>setExtended(prev=>!prev)} className='menu'src={assets.menu_icon} alt=""/>
        <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.plus_icon}/>
            {extended ?<p>New Chat</p>:null}
        </div>
        
      {extended ?
        <div className="recent">
    <p className='recent-title'>Recent</p>
        {prevPrompt.map((value,index)=>{
          return(
            <div onClick={()=>responseLoad(value)} className='recent-entry'>
              <img src={assets.message_icon}/>
              <p>{value.slice(0,18)}...</p>
            </div>
          );
        })}
      
    </div> :null}
      </div >
    <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon}/>
            {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon}/>
            {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon}/>
            {extended?<p>Setting</p>:null}
        </div>
    </div>
    </div>
  )
}

export default Sidebar
