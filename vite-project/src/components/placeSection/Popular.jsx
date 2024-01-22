import React from 'react'
import Cards from '../utils/Cards'

const Popular = () => {
  const sample = [
    {
      area:'Murugesh Palya',
      mainArea:'Banglalore',
      Country:'India',
      img:'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x',
      rating:5,
      id:1
    },
    {
      area:'Murugesh palya',
      mainArea:'Banglalore',
      Country:'India',
      img:'',
      rating:5,
      id:2
    },
    {
      area:'Murugesh palya',
      mainArea:'Banglalore',
      Country:'India',
      img:'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x',
      rating:5,
      id:3
    },
    {
      area:'Murugesh palya',
      mainArea:'Banglalore',
      Country:'India',
      img:'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x',
      rating:5,
      id:4
    },
    {
      area:'Murugesh palya',
      mainArea:'Banglalore',
      Country:'India',
      img:'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x',
      rating:5,
      id:5
    },
    {
      area:'Murugesh palya',
      mainArea:'Banglalore',
      Country:'India',
      img:'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x',
      rating:5,
      id:6
    },
    {
      area:'Murugesh palya',
      mainArea:'Banglalore',
      Country:'India',
      img:'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x',
      rating:5,
      id:7
    },{
      area:'Murugesh palya',
      mainArea:'Banglalore',
      Country:'India',
      img:'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x',
      rating:5,
      id:8
    },
    
  ]
  return (
    <>
    <div className=' h-full lg:w-[75vw] flex overflow-x-auto flex-wrap flex-col gap-x-8 items-start justify-center no-scrollbar'>
    {sample.map(detail => (
       <Cards key={detail.id} img={detail.img} mainArea={detail.mainArea} country={detail.Country} area={detail.area} rating={detail.rating}/>
    ))}
    </div>
    </>
  )
}

export default Popular