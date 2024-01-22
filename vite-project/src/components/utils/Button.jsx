import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name,links}) => {
  return (
    <button className='bg-slate-200 text-black font-semibold p-3 px-4 shadow-sm rounded-xl text-[14px] antialiased hover:bg-stone-800 hover:text-slate-100 transition-all focus:bg-stone-800 focus:text-slate-100 active:bg-stone-800 active:text-slate-100'>
      <Link to={links}>{name}</Link>
    </button>
  )
}

export default Button