import React from 'react'
import HeroSkeleton from '../Boilerplate/HeroSkeleton'
import NearMeFood from './NearMeFood.jsx'
import PopularFood from './PopularFood'
import MostlyVisitedFood from './MostlyVisitedFood'

const FoodFilter = [
  {
    name:'PopularFood',
    to:'/*',
    element:<PopularFood/>
  },
  {
    name:'Near Me food',
    to:'/nearmefood/*',
    element:<NearMeFood/>
  },
  {
    name:'Most visited Food',
    to:'/mostfood/*',
    element:<MostlyVisitedFood/>
  },
]

const Food = () => {
  return (
    <HeroSkeleton buttonDetail={FoodFilter} header={'Food'} id={'food'} key={'food'}>

    </HeroSkeleton>
  )
}

export default Food