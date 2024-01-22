import React from 'react'
import Cards from '../utils/Cards'

const sample = [
  {
    area:'',
    mainArea:'',
    Country:'',
    img:'',
    rating:'',
    id:1
  },
  {
    area:'',
    mainArea:'',
    Country:'',
    img:'',
    rating:'',
    id:2
  },
  {
    area:'',
    mainArea:'',
    Country:'',
    img:'',
    rating:'',
    id:3
  },
  {
    area:'',
    mainArea:'',
    Country:'',
    img:'',
    rating:'',
    id:4
  },
  {
    area:'',
    mainArea:'',
    Country:'',
    img:'',
    rating:'',
    id:5
  },
  {
    area:'',
    mainArea:'',
    Country:'',
    img:'',
    rating:'',
    id:6
  },
  {
    area:'',
    mainArea:'',
    Country:'',
    img:'',
    rating:'',
    id:7
  },{
    area:'',
    mainArea:'',
    Country:'',
    img:'',
    rating:'',
    id:8
  },
  
]

const NearMe = () => {
  return (

    <div className=' h-full lg:w-[75vw] flex overflow-x-auto flex-wrap flex-col gap-x-8 items-start justify-center no-scrollbar'>
      {sample.map(detail => (
       <Cards img={detail.img} mainArea={detail.mainArea} country={detail.Country} area={detail.area} key={detail.id}/>
    ))}
    </div>
  )
}

export default NearMe